function manipularObjeto(pessoa) {
  console.log("Objeto original: ", pessoa);

  pessoa.profissao = "Engenheiro";
  console.log("Após adicionar 'profissao': ", pessoa);

  delete pessoa.cidade;
  console.log("Após remover 'cidade': ", pessoa);

  console.log("Propriedades do objeto:");
  for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
  }
}

const pessoa = {
  nome: "Carlos",
  idade: 28,
  cidade: "São Paulo",
};

manipularObjeto(pessoa);
