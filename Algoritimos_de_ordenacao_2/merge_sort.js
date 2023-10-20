const listaLivros = require('./array')

function ordena (parte1, parte2) {
    let indexParte1 = 0
    let indexParte2 = 0
    const resultado = []
    

    while (indexParte1 < parte1.length && indexParte2 < parte2.length) {
        let elementoParte1 = parte1[indexParte1]
        let elementoParte2 = parte2[indexParte2]

        if (elementoParte1.preco < elementoParte2.preco) {
            resultado.push(elementoParte1)
            indexParte1++

        } else {
            resultado.push(elementoParte2)
            indexParte2++

        }

    }
    return resultado.concat(indexParte1 < parte1.length? parte1.slice(indexParte1)
         : parte2.slice(indexParte2))
   }

function mergeSort (array) {
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2)
        const parte1 = mergeSort(array.slice(0, meio))
        const parte2 = mergeSort(array.slice(meio, array.length))
        array = ordena(parte1, parte2)
    }
    return array}



console.log(mergeSort(listaLivros))