// tipo de dado

// booleanos

// Conversão implícita
const numero = 456
const numeroString = "456"

console.log(numero == numeroString)

console.log(numero + numeroString) // Aqui ele concatenou, ou seja, juntou os valores

console.log(numero + Number(numeroString)) // Aqui ele conseguiu somar

// Conversão explicita

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); 
//o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

