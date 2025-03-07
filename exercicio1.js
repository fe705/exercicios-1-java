function manipularString(texto, letraAntiga, letraNova) {
  const maiusculas = texto.toUpperCase();

  const minusculas = texto.toLowerCase();

  const invertida = texto.split("").reverse().join("");

  const substituida = texto.replace(new RegExp(letraAntiga, "g"), letraNova);

  console.log("Original: " + texto);
  console.log("Maiúsculas: " + maiusculas);
  console.log("Minúsculas: " + minusculas);
  console.log("Invertida: " + invertida);
  console.log("Substituída: " + substituida);
}

const texto = "Olá, Mundo!";
const letraAntiga = "o";
const letraNova = "x";

manipularString(texto, letraAntiga, letraNova);
