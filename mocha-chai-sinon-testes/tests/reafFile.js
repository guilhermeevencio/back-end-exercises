const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');

const writeFile = require('../writeFile');
const CONTEUDO_DO_ARQUIVO = 'teste com sinon';

describe('Lê conteúdo de um arquivo especifico.', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  describe('Verifica as respostas da função', () => {
    it('Retorna uma string', () => {
      const response = writeFile(2);
      expect(typeof response).equals('string');
    });

    it('Deve retornar um ok após escrever no arquivo.', () => {
      const response = writeFile('arquivo.txt', CONTEUDO_DO_ARQUIVO);
      expect(response).equals('ok');
    });
  })
});