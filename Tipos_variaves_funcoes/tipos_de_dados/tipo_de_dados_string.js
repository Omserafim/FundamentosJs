const text = "olá Mundo"
const senha= "Ot@vio234!"
const stringNumeros = "142"

// Em casos de citação, preciso diferenciar as aspas, ex abaixo:
const citacao = 'O Otávio disse: " oi!"'

console.log(citacao)

// Template String

const idade = 23

const idadeOtávio = `A idade do otávio é ${idade}`
console.log(idadeOtávio)

// Concatenação (+), serve para somar números e textos

const citaNome = "Meu nome é"
const nome = " Otávio"

console.log(citaNome + nome)

// O Js diferencia letras minúsculas de maisculas.

const cidade1 = "Sagres"
const cidade2 = "sagres"
console.log(cidade1 == cidade2)

// Solucuinando o problema atráves da padronização

const cidade = "belo horizonte";
const cidade3 = "Belo Horizonte";

const inputMinusculo = cidade3.toLowerCase(); // Esse método converte todo o alfabeto para minúsculo.

console.log(cidade === inputMinusculo)

// Propriedade para verificar a quantidade de caractere de uma const

const minhaSenha = "senha2341@,*"
console.log(minhaSenha.length)