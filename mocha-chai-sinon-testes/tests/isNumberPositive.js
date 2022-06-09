const { expect } = require('chai');
const isNumberPositive = require('../isNumberPositive');

describe('Verifica o número', () => {
  it('Retorna uma string como resposta', () => {
    const response = isNumberPositive(2);
    expect(response).to.be.a('string');
  });

  it('Quando o número passado for maior que 0, deverá retornar "positivo".', () => {
    const response = isNumberPositive(2);
    expect(response).to.be.equals('positivo');
  });

  it('Quando o número passado for menor que 0, deverá retornar "negativo".', () => {
    const response = isNumberPositive(-3);
    expect(response).to.be.equals('negativo');
  });

  it('Quando o número passado for igual a 0, deverá retornar "neutro".', () => {
    const response = isNumberPositive(0);
    expect(response).to.be.equals('neutro');
  });

  it('Retorna null caso o valor passado nao seja um número.', () => {
    const response = isNumberPositive('0');
    expect(response).to.be.equals('o valor deve ser um número');
  });
});