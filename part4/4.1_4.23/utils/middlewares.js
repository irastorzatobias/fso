const logger = require('./logger');
const jwt = require('jsonwebtoken');
const { SECRET } = require('./config');

const routeNotFound = (req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
    next();
};

const getTokenFrom = (request) => {
    const authorization = request.get('authorization');
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.replace('Bearer ', '');
    }

    return null;
};

const tokenExtractor = (req, res, next) => {
    req.token = null;
    const token = getTokenFrom(req);
    if (token) {
        req.token = token;
    }

    next();
};

const userExtractor = (req, res, next) => {
    req.user = null;

    if (req.token) {
        const decodedToken = jwt.verify(req.token, SECRET);
        req.user = decodedToken;
    } else {
        return res.status(401).json({ error: 'token missing or invalid' });
    }

    next();
};

const errorHandler = (error, request, response, next) => {
    logger.error(error.message);

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    } else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({ error: error.message });
    }

    next(error);
};

module.exports = { routeNotFound, errorHandler, tokenExtractor, userExtractor };
