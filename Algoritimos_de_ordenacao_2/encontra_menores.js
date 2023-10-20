const listaLivros = require('./array')

function trocaLugar(array, de, para) {
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2

}

function encontraMenores(pivo, array) {
    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        // Aqui estou armazenando o valor do elemento 
        let produtoAtual = array[atual]
        if (produtoAtual.preco < pivo.preco) {
            menores = menores + 1
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores)
    return array
}



function divideNoPivo (array) {
    let pivo = array[Math.floor(array.length/ 2)]
    console.log(pivo)
    encontraMenores(pivo, array)
    let valoresMenores = 0 

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando]
        if(atual.preco < pivo.preco && atual !== pivo) {
            trocaLugar(array, analisando, valoresMenores)
            valoresMenores++
        }
    }

    return array
}

console.log(divideNoPivo(listaLivros))

                            // JavaScript
console.log(encontraMenores(listaLivros[2], listaLivros))

module.exports = trocaLugar