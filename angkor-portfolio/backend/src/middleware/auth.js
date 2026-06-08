const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  const header = req.headers['authorization'];
  const token = header && header.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    const verified = jwt.verify(token, config.jwtSecret);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token.' });
  }
};
