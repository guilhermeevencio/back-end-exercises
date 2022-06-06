const readline = require('readline-sync');
const imc = require('./imc')

const weight = readline.questionFloat('Qual é o seu peso?');
const height = readline.questionFloat('Qual é a sua altura?');

const imcValue = imc(weight, height);
console.log(imcValue)