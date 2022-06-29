const { expect } = require('chai');
const sinon = require('sinon');
const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um nogvo filme bo BD', () => {
  const payloadMovie = {};
  describe('quando o payload informado não é válido', () => {
    it('retorn um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect (response).to.be.a('boolean');
    });

    it('O boolean contém false', async() => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.equal(false);
    })
  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
  
    before (()=> {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create').resolves( {id: ID_EXAMPLE});
    });

    after(() => MoviesModel.create.restore());
  
    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect (response).to.have.a.property('id');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
