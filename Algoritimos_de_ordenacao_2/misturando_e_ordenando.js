const {editoraFolha, editoraGalho} = require('./lista_livros_ordenada')

function juntaListas (lista1, lista2) {
    let listaFinal = []
    let indexAtualLista1 = 0
    let indexAtualLista2 = 0
    let atual = 0

    while (indexAtualLista1 < lista1.length && indexAtualLista2 < lista2.length) {
// Como eu faço para acessar os valores das listas ?
// Como ideia eu criei duas variaveis que armazenam as listas na posição um, ou seja, seu valor.
        let produtoAtualLista1 = lista1[indexAtualLista1]
        let produtoAtualLista2 = lista2[indexAtualLista2]
/* Aqui eu crio a condição se o produto no index X for menor que o produto da lista 2 no index X,
vai para a listaFinal */
        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1
        // Aqui eu faço esse ++ para ir para a proxima posição, evitando que o valor seja substituido
            indexAtualLista1++     
        } else {
            listaFinal[atual] = produtoAtualLista2
            indexAtualLista2++
        }
        atual++
    }

    while (indexAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[indexAtualLista1]
        indexAtualLista1++
        atual++
    }

    while (indexAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[indexAtualLista2]
        indexAtualLista2++
        atual++  
    }
    
    return listaFinal;}

    console.log(juntaListas(editoraFolha, editoraGalho))