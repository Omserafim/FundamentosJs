const pessoa = {
    nome: "Otavio",
    idade: 23,
    telefone: 21321312312,
    email: "omserafim@gmail.com"
}

// Caso eu queira armazenar uma propriedade especifica do objeto?

const {nome} = pessoa
console.log(nome)

// Fazendo isso com as funções

/*function imprimiDados (dados) {

    return (dados)
}*/

//console.log(imprimiDados(pessoa))
// Aqui imprimiu o objeto inteiro, e se eu quiser so imprimir o nome e a idade?

function imprimiDados (dados) {
    const {nome, idade} = dados
    return nome, idade
}

// Perceba que nesse caso eu consigo limitar as propriedades, mesmo nao sabendo os valores
console.log(imprimiDados(pessoa))