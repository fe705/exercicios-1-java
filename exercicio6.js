function manipularArray(array) {
  console.log("Array original: " + array);

  array.push(60);
  console.log("Após adicionar 60: " + array);

  array.shift();
  console.log("Após remover o primeiro elemento: " + array);

  const maior = Math.max(...array);
  console.log("Maior número: " + maior);

  const menor = Math.min(...array);
  console.log("Menor número: " + menor);
}

const numeros = [10, 20, 30, 40, 50];

manipularArray(numeros);
