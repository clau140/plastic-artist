require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../db'); 
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }
    const hashedPassword = await bcrypt.hash(password, 10); 
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );
    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

module.exports = router;
