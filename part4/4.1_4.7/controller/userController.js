const userRouter = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

userRouter.post('/', async (request, response) => {
    const { username, name, password } = request.body;

    if(!username || !name || !password) {
        return response.status(400).json({ error: 'username, name or password is missing' });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username: username,
        name: name,
        passwordHash: passwordHash
    });

    const savedUser = await user.save();

    response.status(201).json(savedUser);

});

userRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('blogs', { url: 1, title: 1, author: 1 });
    response.json(users);
});

module.exports = userRouter;