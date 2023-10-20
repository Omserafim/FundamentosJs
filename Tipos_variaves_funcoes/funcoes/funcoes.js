let x = ""
console.log(x)
x = "oi"

// 1) Declarar a função
                      //String
function imprimeTexto (texto) {
    console.log(texto)

}

// 2) Executa a função (1 ou + vezes)

imprimeTexto("oi")
imprimeTexto("Outro texto") // Perceba que aqui eu estou reaproveitando o code 

function soma () {
    return 8 + 2
}

soma () // Aqui eu só invoco ela, portanto, ela retorna o seu code mas não imprimi
console.log(soma) // Aqui eu só imprimo a função não estou invocando seu codes, porntanto, só informa que soma é um função
console.log(soma()) // Aqui eu mando imprimir o resultado do code, ou seja, invoco ela e imprimo o seu code.

imprimeTexto(soma()) /* Perceba que aqui eu invoco a função imprimitexto que por sua vez imprimi o que está no parâmetro e como nesta
está a função soma invocada, ela imprimi o code, ou seja o return de Soma */

console.log(imprimeTexto(soma())) // Nesse caso eu imprimo a soma invocada, e também mando imprimir o texto, e como não há nada da undefined
console.log(imprimeTexto("oi")) // Aqui também da problema, pois eu imprimo o parâmetro e mando imprimir dnv