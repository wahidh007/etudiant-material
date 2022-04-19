// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Salut tout le monde !');
// });

// server.listen(3000, () => {
//   console.log('Server listeniiiiiiing on port 3000...');
// });

// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//   res.json({ message: 'Votre requête a bien été reçue !' });
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Réponse envoyée avec succès !');
// });

// app.listen(3000, () => {
//   console.log(`Server listening on port 3000...`)
// });
//***************************** */

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser'); // ****
const cors = require('cors'); // ****
const api = require('./routes');

// ****
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });
// ****

app.use("/api", api);
// app.use(express.static('www'));
app.use(express.static(path.join(__dirname, 'www')));

app.listen(3003, () => {
  console.log(`Server listening on port 3003...`)
});
