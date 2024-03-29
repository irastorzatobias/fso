const blogRouter = require('express').Router();

const Blog = require('../models/blogModel');
const Comment = require('../models/commentModel');
const User = require('../models/userModel');

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
        .populate('user', { username: 1, name: 1 })
        .populate('comments', { content: 1 });
    response.json(blogs);
});

blogRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id)
        .populate('user', {
            username: 1,
            name: 1,
        })
        .populate('comments', { content: 1 });

    response.json(blog);
});

blogRouter.post('/', async (request, response) => {
    if (!request.user.id) {
        return response.status(401).json({ error: 'token missing or invalid' });
    }

    const user = await User.findById(request.user.id);

    const { title, author, url, likes } = request.body;

    const blog = new Blog({
        title: title,
        author: author,
        url: url,
        likes: likes,
        user: user._id,
        comments: [],
    });

    const savedBlog = await blog.save();

    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();

    response.status(201).json(savedBlog);
});

blogRouter.delete('/:id', async (request, response) => {
    if (!request.user) {
        return response.status(401).json({ error: 'token missing or invalid' });
    }

    const user = await User.findById(request.user.id);
    const blog = await Blog.findById(request.params.id);

    if (blog.user.toString() !== request.user.id.toString()) {
        return response
            .status(401)
            .json({ error: 'user is not authorized to delete this blog' });
    }

    user.blogs = user.blogs.filter((blog) => blog.id !== request.params.id);

    await user.save();
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end();
});

blogRouter.put('/:id', async (request, response) => {
    const { like } = request.body;

    if (!like) {
        response.status(404).json({ error: 'like is missing' });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
        { _id: request.params.id },
        { $inc: { likes: 1 } },
        { new: true }
    );

    response.json(updatedBlog);
});

blogRouter.post('/:id/comments', async (request, response) => {
    const { content } = request.body;

    if (!content) {
        return response.status(404).json({ error: 'comment is missing' });
    }

    const comment = new Comment({
        content: content,
        blog: request.params.id,
    });

    const savedComment = await comment.save();

    const updatedBlog = await Blog.findByIdAndUpdate(
        { _id: request.params.id },
        { $push: { comments: savedComment._id } },
        { new: true }
    );

    response.json(updatedBlog);
});

module.exports = blogRouter;
