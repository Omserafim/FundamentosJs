const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Desafio remover os nomes repetidos do array

// 
const meuSet = new Set(nomes)

console.log(meuSet)

// Mas eu quero minha lista devolta, como eu faço?

const nomesAtualizados = [...new Set(nomes)]
console.log(nomesAtualizados)
// Coloquei os ... para usar a função spread.
