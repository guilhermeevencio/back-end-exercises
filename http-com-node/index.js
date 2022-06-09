const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({'message': 'pong' })
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({'message': `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if( age > 17 ) {
    return res.status(200).json({ "message": `Hello, ${ name }!` });
  }

  return res.status(401).json({ 'message': 'Unauthorized' });

});

app.put('/users', (req, res) => {
  const { name, age } = req.query;
  return res.status(200).json({ 'message': `Seu nome é ${ name } e você tem ${ age } anos de idade` });
});

app.listen(3333, () => {
  console.log('Server is running');
})