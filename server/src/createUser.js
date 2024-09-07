require('dotenv').config();
const bcrypt = require('bcrypt');
const { User } = require('./db');

const createInitialUser = async () => {
  try {
    const username = process.env.USERNAME;
    const plainPassword = process.env.PASSWORD;

    if (!username || !plainPassword) {
      throw new Error('El nombre de usuario o la contraseña no están definidos en el archivo .env');
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      console.log('El usuario ya existe.');
      return;
    }

    // Si no existe, generar el hash de la contraseña y crear el usuario
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    await User.create({
      username,
      password: hashedPassword,
    });

    console.log('Usuario inicial creado correctamente.');
  } catch (error) {
    console.error('Error al crear el usuario inicial:', error.message);
  }
};

module.exports = createInitialUser;
