const blogRouter = require('express').Router();
const Blog = require('../models/blogModel');

blogRouter.get('/', async (request, response) => {
    try {
        const blogs = await Blog.find({});
        response.json(blogs);
    } catch {
        response.status(404).send('error');
    }
});

blogRouter.post('/', (request, response) => {
    const blog = new Blog(request.body);

    blog.save().then((result) => {
        response.status(201).json(result);
    });
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
