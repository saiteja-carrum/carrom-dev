
const logger = require('../../app/logger/logger');

const authorize = (req, res, next) => {
    try {
        const userRole = req.headers['user-role'];
        if (userRole === 'super admin' || userRole === 'admin') {
            return next();
        }
        logger.error('Invalid authorization access');
        return res.status(403).json({ error: 'Invalid authorization access' });
    } catch (error) {
        logger.error('Authorization error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = authorize;
