const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
require('express-async-errors');
const {
    routeNotFound,
    errorHandler,
    tokenExtractor,
    userExtractor,
} = require('./utils/middlewares');

mongoose.connect(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use(tokenExtractor);

app.use('/api/blogs', userExtractor, require('./controller/blogController'));
app.use('/api/users', require('./controller/userController'));
app.use('/api/login', require('./controller/loginController'));

app.use(routeNotFound);
app.use(errorHandler);
module.exports = app;
