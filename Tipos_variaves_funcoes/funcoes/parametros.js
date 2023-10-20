/* function soma () {
    return 2 + 2;
}

// console.log(soma()) */

// Com parâmetros 
function soma (a, b) {
    return a + b
}

// Meus argumentos são 1 e 3
console.log(soma(1, 3))

// Ordem dos parâmtros

function nomeIdade (nome, idade) {
    return `Meu nome é ${nome}, e minha idade é ${idade}`
}

console.log(nomeIdade(40, "Otávio")) // Perceba que é necessário se atentar com a idade.

function multiplica(n1, n2) {
    return n1 * n2
}

multiplica(soma(4, 5), soma(3, 3)) /* Perceba que essa função foi executada, mas não foi exibida, vez que só pedimos para ela ser executada,
isto é, não mandamos imprimir seu resultado */

console.log(multiplica(soma(4, 5), soma(3, 3)))

