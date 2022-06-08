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

const removeChar = async () => {
  try {
    const response = await fs.readFile('simpsons.json', 'utf-8');
    const data = JSON.parse(response);
    const newArr = data.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('simpsons.json', JSON.stringify(newArr));

    

  } catch (e) {
    console.log(e.message);
  }
}

const createNewFile = async () => {
  try {
    const response = await fs.readFile('simpsons.json', 'utf-8');
    const data = JSON.parse(response);
    const newArr = data.filter((simpson) => Number(simpson.id) < 5);
    console.log(newArr);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArr), { flag: 'wx' });

    

  } catch (e) {
    console.log(e.message);
  }
}

createNewFile()

async function main() {
  await removeChar();
}


