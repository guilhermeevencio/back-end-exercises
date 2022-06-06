const readline = require('readline-sync');
const imc = require('./imc')

const weight = readline.questionInt('Qual é o seu peso?');
const height = readline.questionInt('Qual é a sua altura?');

const imcValue = imc(weight, height);