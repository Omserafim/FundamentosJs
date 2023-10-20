// Declaração de Função

function minhaFuncao (param) {
    //bloco de código
}

//minhaFuncao("param")

// Expressão de função

//const soma = function (n1, n2) {return n1 + n2}

// console.log(soma(1, 3))

// Qual a diferença das duas? A expressão de função não tem NOME, 
// Diferença principal

console.log(apresentacao())

function apresentacao () {
    return "Olá"
}

console.log(soma(1, 1))
const soma = function (n1, n2) {return n1 + n2}

/* Perceba que a função declarada pode ser chamada antes mesmo de ser feita, já a expressão de função não, 
vez que ela se comporta como uma var, isto é chamado de HOISTING */ 