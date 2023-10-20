// boolean

const usuarioLogado = true
const contaPaga = false

// truthy ou falsy

// 0 --> false
// 1 --> true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// Ou seja esses dois dados 0 e string vazia são considerados como false

// null --> vazio ou nada

let minhaVar;
let varNull = null // Aqui atribuimos um valor a var
console.log(minhaVar)
console.log(varNull)

let numero = 3
let texto = "alura"

console.log(typeof minhaVar)
console.log(typeof varNull) // Null é um tipo de objeto, contudo, isso é um bug do JS
