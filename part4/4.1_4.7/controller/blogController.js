const blogRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/config');

const Blog = require('../models/blogModel');
const User = require('../models/userModel');

const getTokenFrom = request => {
    const authorization = request.get('authorization');
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.replace('Bearer ', '');
    }
    return null;
};

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });
    response.json(blogs);
});

blogRouter.post('/', async (request, response) => {
    console.log(getTokenFrom(request));
    const decodedToken = jwt.verify(getTokenFrom(request), SECRET);

    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' });
    }

    // User logged in
    const user = await User.findById(decodedToken.id);

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
