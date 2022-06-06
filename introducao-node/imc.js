const imc = (weight, height) => {
  const imc = weight / Math.pow(height, 2);
  let message;

  switch (true) {
    case (imc < 18.5):
      message = 'Abaixo do peso';
      break;
    case (imc > 18.5 && imc < 24.9):
      message = 'Peso normal';
      break;
    case (imc > 25 && imc < 29.9):
      message = 'Acima do peso(sobrepeso)';
      break;
    case (imc > 30 && imc < 34.9):
      message = 'Obesidade grau I';
      break;
    case (imc > 35 && imc < 39.9):
      message = 'Obesidade grau II';
      break;
    default:
      message = 'Obesidade graus III e IV';
  }
  return {
    imc,
    message
  }
};

module.exports = imc;
