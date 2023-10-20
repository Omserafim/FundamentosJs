/* Crie uma função que recebe como argumento o nome de um aluno.
Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.*/ 

let nomes = ['João', 'Juliana', 'Caio', 'Ana']
let notas = [10, 8, 7.5, 9]

const listaDeAlunosEMedias = [nomes, notas]

function procuraNomeENota (aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(`O ${aluno}, está cadastrado e tem a média de ${mediaDoAluno}`)
    } else {
        console.log("Aluno não encontrado")
    }
    
}
procuraNomeENota("João")