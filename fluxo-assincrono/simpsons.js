const fs = require('fs').promises;

const getChar = async () => {
  try {
    const response = await fs.readFile('simpsons.json', 'utf-8');
    const data = JSON.parse(response);
    data.forEach(({ id, name }) => console.log(`${ id } - ${ name }`));

  } catch (e) {
    console.log(e.message);
  }
}

const getCharById = async (id) => {
  try {
    const response = await fs.readFile('simpsons.json', 'utf-8');
    const data = JSON.parse(response);
    const character = await data.find((char) => char.id === id);
    console.log(`${ character.id } - ${ character.name }`)

  } catch (e) {
    console.log('id não encontrado');
  }
}

getCharById('20');

