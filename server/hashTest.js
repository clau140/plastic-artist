const bcrypt = require('bcrypt');

const password = 'test12'; // Contraseña en texto plano
const hash = '$2b$10$0JXbx39Z6nWVU79HjUjhTu.YbQmIllEkAWgeZgR.br2nNn923Yw0y'; // Hash almacenado

bcrypt.compare(password, hash, (err, result) => {
  if (err) {
    console.error('Error al comparar contraseñas:', err);
    return;
  }
  console.log('Coincide:', result); // Debería ser true si el hash es correcto
});
