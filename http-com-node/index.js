const express = require('express');

const app = express();

app.use = express.json();

app.get('/ping', (req, res) => {
  return res.status(200).json({'message': 'pong' })
});

app.listen(3333, () => {
  console.log('Server is running');
})