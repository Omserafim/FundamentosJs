const minhaFuncao = function () {
    console.log("Execução ")
}

let funcaoArrow = (mensagem) => {
return mensagem + "Obrigado!"
}

const dobrarNumeros = (n1 = 1, n2) => {
    return n1 * n2
}

console.log(dobrarNumeros(8))

// Funcão declarada

function criarNome (nome) {
    return `Olá ${nome}`
}



const pessoa1 = criarNome
const pessoa = criarNome("Otavio")

console.log(typeof pessoa1)
console.log(typeof pessoa)

const otavio = criarNome("Otávio")
console.log(otavio)
// =========================================

const saudar = (nome, resposta) => {
    const horaAtual = new Date().getHours()
    
    const cumprimento = () => {
        return ", como vai?" 
    }
    if (horaAtual <= 12) {
        return resposta("Bom dia", nome), console.log(cumprimento())
    } else if (horaAtual <= 17) {
        return resposta("Boa tarde", nome), console.log(cumprimento())
    } else if (horaAtual <= 22) {
        return resposta("Boa noite", nome), console.log(cumprimento())
    } else {
        return resposta("Vai durmir", nome), console.log(cumprimento())
    }
}

const callBack =  (saudacao, nome) => {
    console.log(saudacao, nome)
}
saudar("Otavio", callBack)

/*  Perceba que nesse caso a funcao chamada CallBack é necessariamente uma callback, pois
 ela foi passada como parâmetro de outra funcao maior a "saudar" */