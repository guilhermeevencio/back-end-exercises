function isNumberPositive(number) {
  try {
    if (typeof number !== 'number') throw new Error('o valor deve ser um número');
    switch(true) {
      case (number > 0):
        return 'positivo';
      case (number < 0):
        return 'negativo';
      default:
        return 'neutro';
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = isNumberPositive;