require('dotenv').config();
const bcrypt = require('bcrypt');
const { Usuario } = require('./db'); 

const createInitialUser = async () => {
  try {
    console.log('Iniciando la creación del usuario inicial...');

    
    console.log('USERNAME:', process.env.USER);
    console.log('PASSWORD:', process.env.PASSWORD);

    const username = process.env.USER;
    const plainPassword = process.env.PASSWORD;

    if (!username || !plainPassword) {
      throw new Error('El nombre de usuario o la contraseña no están definidos en el archivo .env');
    }

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    
    await Usuario.upsert({
      username,
      password: hashedPassword,
    });

    console.log('Usuario inicial creado o actualizado correctamente.');
  } catch (error) {
    console.error('Error al crear o actualizar el usuario inicial:', error.message);
  }
};

module.exports = createInitialUser;


