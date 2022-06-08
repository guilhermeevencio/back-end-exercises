function isNumberPositive(number) {
  switch(true) {
    case (number > 0):
      return 'positivo';
    case (number < 0):
      return 'negativo';
    default:
      return 'neutro';
  }
};

module.exports = isNumberPositive;