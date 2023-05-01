/* eslint-disable no-undef */
const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { SECRET }= require('../utils/config');

loginRouter.post('/', async (request, response ) => {
    const { username, password } = request.body;

    const userExists = await User.findOne({ username });
    const passwordCorrect = userExists === null ? false : await bcrypt.compare(password, userExists.passwordHash);

    if (!(userExists && passwordCorrect)) {
        return response.status(401).json({ error: 'invalid username or password' });
    }

    const userForToken = {
        username: username,
        id: userExists._id
    };

    const token = jwt.sign(userForToken, SECRET);


    response.status(200).send({token, username: userExists.username, name: userExists.name});
});

module.exports = loginRouter;