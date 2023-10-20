const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// Preciso alterar o array para este ser escrito somente com letras maisculas.

const nomesMaisculos = nomes.map (nome => {
    return nome.toUpperCase() // Necessariamente eu preciso colocar o toUpperCase(), com colchetes para ele executar a função toUpperCase
})

console.log(nomesMaisculos)

// Utilizando o For Clássico para colocar em maisculo

const nome = ["A", "l", "u", "r", "a"]

let nomesMaisculo = ""

for (let i = 0; i < nome.length; i++) {
    nomesMaisculo += nome[i].toUpperCase()
}

console.log(nomesMaisculo)


