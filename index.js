const express = require('express');
const axios = require('axios');
const _ = require('lodash');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'sbom-demo is running', version: '1.0.0' });
});

app.get('/greet/:name', (req, res) => {
  const name = _.capitalize(req.params.name);
  res.json({ greeting: `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
