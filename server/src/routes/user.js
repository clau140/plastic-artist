const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../db'); 
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    
    const user = await Usuario.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' } 
    );

    return res.json({ message: 'Login exitoso', token });
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor', error });
  }
});

router.get('/allusers', async (req, res) => {
    try {
      const users = await Usuario.findAll(); 
      res.json(users); 
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
  });

module.exports = router;
