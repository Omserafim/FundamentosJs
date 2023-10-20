
const precoLivros = [10, 6, 3, 7, 2]
const numeros = [ 9, 43, 5, 6, 7, 10, 2, 3, 18, 128, 2, 4]

function menorValor (array, atual) {
    let maisBarato = atual
     
        for (let valorAtual = atual ; valorAtual < array.length; valorAtual++) {
            if (array[valorAtual] < array[maisBarato]) {
                maisBarato = valorAtual
            }
             
        }
    
        return maisBarato
    }

    console.log(menorValor(precoLivros))


function ordenaValores (array, func) {
    for (let atual = 0; atual < array.length -1; atual++) {
        let vM = func(array, atual)
        let vA = array[atual]
        let vMO = array[vM]
       

        array[atual] = vMO
        array[vM] = vA
    }
    return array
}

console.log(ordenaValores(numeros, menorValor))

