const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = process.env.DB_PORT || 3001;
const createInitialUser = require('./src/createInitialUser.js');

conn.sync({ force: true }).then(async () => {
  console.log('Base de datos sincronizada.');
  
  await createInitialUser(); 

  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}).catch(error => console.error('Error en la sincronización de la base de datos:', error));
