// Levando em conta o operador ternario e o template string, podemos fazer isso
const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

// Perceba que eu posso utilizar o operador ternário como uma template string