const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const app = express();
const { conn } = require('./db');
const { LoadDb } = require('./LoadDb/LoadDb');

config();

const port = process.env.PORT || 3000; // <== You can change the port

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'));

// conn.sync({ force: false }).then(() => {
//   app.listen(3001, () => {
//   LoadDb();
//     console.log('✓ Se conectó a la base de datos');
//   })
// });

conn.sync({ force: true }).then(() => {
  app.listen(port, () => {
    LoadDb()
    console.log("%s listening at " + port); // eslint-disable-line no-console
  });
});
// app.listen(port, () => {
//   console.log('✓ Servidor corriendo en el puerto ' + port);
// });