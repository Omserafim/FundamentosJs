const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


function calculaMedia(array) {
    let aux = 0
    for (let i = 0; i < array.length; i++)
        aux += array[i]
    return aux / array.length

}

console.log(calculaMedia(salaJS))

// Fazendo com o método .reduce

function calcularMedia(salas) {
    const somaDasNotas = salas.reduce((acc, nota) => acc + nota, 0)
    const media = somaDasNotas / salas.length
    return media
}
console.log(calcularMedia(salaJS))
// Esse método basicamente é feito para calcular os arrays


function calculaValorArray(array) {
    const somaArray = array.reduce((acc, valor) => {
        return acc + valor
    }, 0)
    const media = somaArray / array.length
    return media
}

console.log(calculaValorArray(salaJS))


   