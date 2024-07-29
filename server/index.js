const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT= process.env.DB_PORT || 3001;
//const PORT= process.env.DB_PORT


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))