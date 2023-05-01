const logger = require('./logger');

const routeNotFound = (req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
    next();
};

const getTokenFrom = (req, res, next) => {
    const authorization = req.get('authorization');
    req.token = null;
    if (authorization && authorization.startsWith('Bearer ')) {
        req.token = authorization.replace('Bearer ', '');
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

module.exports = { routeNotFound, errorHandler, getTokenFrom };
