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

promiseFunction(10, 2, 30).then(result => console.log(result))