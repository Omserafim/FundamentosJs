const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
return medias[indice] < 7
})
console.log(reprovados)

// O que aconteceu aqui foi o seguinte, os alunos foram filtrados, somente aqueles que tem a nota em medias na posição indice menor do que 7