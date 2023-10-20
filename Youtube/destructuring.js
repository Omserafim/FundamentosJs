const numerosPares = [2, 4, 6]

const numerosImpares = [1, 3, 5]

// Quero criar um array com os elementos dos dois arrays acima, como eu faço?

const numeros = numerosPares + numerosImpares

console.log(numeros)

// Perceba que dessa forma ele só concatena os elementos e não cria um novo array
// Para fazer o que eu quero é necessário eu desestruturar os dados 

const numerosD = [...numerosPares, ...numerosImpares]

console.log(numerosD)

// Outra situaão para uso do spread

let [n1, n2, n3] = [1, 2, 3, 5, 6]

console.log(n1, n2, n3)

// Perceba que mesmo que eu tenha mais de um elemento o n3, só armazena o 3 numero
// E se eu quiser que uma variável armazene mais de um numero?

let [num1, num2, ...outrosNumeros] = [1, 2, 23, 4, 5, 6]


console.log(num1, num2, outrosNumeros)

/* Perceba que utilizando o spread eu pego o restante dos numeros do array,
 não necessariamente um por um, igual no exemplo acima*/

const pessoa = {
    nome: "Otavio",
    idade: 23
}

// Se eu quiser criar um objeto novo, e manter o original sem alterações?

const pessoaNovo = {...pessoa, telefone: 32213213123}

// Perceba que aqui eu fiz uma desestruturaçao dos dados de pesso e acrescentei um telefone

console.log(pessoa, pessoaNovo)

