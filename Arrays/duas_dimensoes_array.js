const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias]
console.log(listaDeAlunosEMedias)

// Como acessar a posição dos alunos dentro dos AlunosEMedias?

console.log(`A aluna da posição 2 da lista de alunos é a ${listaDeAlunosEMedias[0][2]} e sua média é a ${listaDeAlunosEMedias[1][2]}`)
/* Perceba que aqui eu referenciei primeiro na lista externa que envolve alunos e medias, chamei pelo indice 1 alunos e após 
referenciei a posição 2 dentro da lista interna qual seja alunos*/