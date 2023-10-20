const livros = require('./lista_livros')
const troca = require('./troca')

function insertionSort(lista) {

    for (let atual = 1; atual < lista.lenght; atual++) {
        let analise = atual
        while (lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise]
            let itemAnterior = lista[analise - 1]

            lista[analise]= itemAnterior
            lista[analise - 1] = itemAnalise
            
            analise--
          
        }

    }  return lista
}
    

console.log(insertionSort(livros))
