const blogRouter = require('express').Router();

const Blog = require('../models/blogModel');
const User = require('../models/userModel');

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });
    response.json(blogs);
});

blogRouter.post('/', async (request, response) => {
    if (!request.user.id) {
        return response.status(401).json({ error: 'token missing or invalid' });
    }

    // User logged in
    const user = await User.findById(request.user.id);

    const { title, author, url, likes } = request.body;

    const blog = new Blog({
        title: title,
        author: author,
        url: url,
        likes: likes,
        user: user._id,
    });

    const savedBlog = await blog.save();
    response.status(201).json(savedBlog);
});

blogRouter.delete('/:id', async (request, response) => {
    if (!request.user) {
        return response.status(401).json({ error: 'token missing or invalid' });
    }

    const blog = await Blog.findById(request.params.id);

    if (blog.user.toString() !== request.user.id.toString()) {
        return response
            .status(401)
            .json({ error: 'user is not authorized to delete this blog' });
    }

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

module.exports = blogRouter;
