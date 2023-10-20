// == (comparação implícita)

const numero = 5;
const texto = "5"
console.log(numero == texto) // Perceba que com os dois == só leva-se em conta os valores, e neste já faz a conversão.

// typeof

console.log(typeof texto)
console.log(typeof numero)

// == só compara o valor.
// === compara o valor e o tipo de dado.

// conversão explícita

Number()
String()