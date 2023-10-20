const listaLivros = require('./array')

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio]

    if (valorBuscado === atual.preco) {
        return meio
    } 
}