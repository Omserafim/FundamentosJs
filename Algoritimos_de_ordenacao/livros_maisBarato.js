const livros = require('./lista_livros')

const precoLivros = [25, 15, 30, 50, 45, 20]

function menorValor (arrayProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial

    for (let atual = posicaoInicial; atual < arrayProdutos.length; atual++) {
        if (arrayProdutos[atual].preco < arrayProdutos[maisBarato].preco) {
            maisBarato = atual    }
          
    }   
    return maisBarato
}

module.exports = menorValor