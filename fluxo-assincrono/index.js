function promiseFunction(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informa Apenas Numeros'));
    }
    const result = (a + b) * c;
    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }
    resolve(result);
  })
  return promise;
}
let randomNumber = Math.floor(Math.random() * 10 + 1);

// promiseFunction(randomNumber, randomNumber, randomNumber)
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message));

async function assincrona() {
  try {
    const result = await promiseFunction(randomNumber, randomNumber, randomNumber);
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

assincrona();