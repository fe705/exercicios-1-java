function operacoesAritmeticas(num1, num2) {
  const soma = num1 + num2;
  console.log("Soma: " + soma);

  const subtracao = num1 - num2;
  console.log("Subtração: " + subtracao);

  const multiplicacao = num1 * num2;
  console.log("Multiplicação: " + multiplicacao);

  const divisao = num1 / num2;
  console.log("Divisão: " + divisao);

  const ehMaior = num1 > num2;
  console.log("O primeiro número é maior que o segundo? " + ehMaior);
}

const numero1 = 15;
const numero2 = 5;

operacoesAritmeticas(numero1, numero2);
