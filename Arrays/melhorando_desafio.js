let alunos = ['João', 'Juliana', 'Caio', 'Ana']
let medias = [10, 8, 7.5, 9]

const listaDeAlunosEMedias = [alunos, medias]

function procuraNomeENota (aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        //const alunos = listaDeAlunosEMedias[0]
        //const media = listaDeAlunosEMedias[1]
        // posso melhorar esse code e fazer isso
        const [alunos, media] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = media[indice];

        console.log(`O ${aluno}, está cadastrado e tem a média de ${mediaDoAluno}`)
    } else {
        console.log("Aluno não encontrado")
    }
    
}
procuraNomeENota("João")


// const [alunos, media] = listaDeAlunosEMedias
// Isso que eu fiz se chama desestruturação de code, ela ajuda a otimizar o code.