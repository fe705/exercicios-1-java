function manipularArrayStrings(array) {
  console.log("Array original: " + array);

  const arrayMaiusculas = array.map((str) => str.toUpperCase());
  console.log("Strings em maiúsculas: " + arrayMaiusculas);

  const arrayComA = array.filter((str) => str.startsWith("A"));
  console.log("Strings que começam com 'A': " + arrayComA);

  const comprimentos = array.map((str) => str.length);
  console.log("Comprimento de cada string: " + comprimentos);
}

const frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

manipularArrayStrings(frutas);
