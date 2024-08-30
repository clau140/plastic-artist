const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, 'tu_secreto');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token no válido.' });
  }
};

module.exports = authMiddleware;
