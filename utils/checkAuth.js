const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
  if (token) {
    try {
      const decoded = jwt.verify(token, 'secret123');
      req.userId = decoded.id;
      next();
    } catch (error) {
      return res.status(403).json('You are not authorization');
    }
  } else {
    return res.status(403).json('You are not authorization');
  }
};

module.exports = checkAuth;
