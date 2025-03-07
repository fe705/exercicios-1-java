function getTituloEAutor(livro) {
  return `Título: ${livro.titulo}, Autor: ${livro.autor}`;
}

const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R. Tolkien",
  ano: 1954,
};

const { titulo, autor } = livro;

console.log("Título desestruturado: " + titulo);
console.log("Autor desestruturado: " + autor);

const infoLivro = getTituloEAutor(livro);
console.log(infoLivro);
