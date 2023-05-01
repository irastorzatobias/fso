const userRouter = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { valueGreaterThanThree } = require('../utils/helpers');

userRouter.post('/', async (request, response) => {
    const { username, name, password } = request.body;

    if(!valueGreaterThanThree(username)) {
        return response.status(400).json({ error: 'username must be larger than 3' });
    }

    if(!valueGreaterThanThree(password)) {
        return response.status(400).json({ error: 'password must be larger than 3' });
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