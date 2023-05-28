const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { valueGreaterThanThree } = require('../utils/helpers');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

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

userRouter.get('/current', (request, response) => {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    response.json(decodedToken);
});

module.exports = userRouter;