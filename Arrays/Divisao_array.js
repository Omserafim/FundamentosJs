const aluno = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme',
 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

// Desafio é separar os alunos 
          
         //Indice que começa     //Indice que termina
aluno.slice(0,                         10)

// Ou seja eu falei que queria separar os elementos do indice 0 até o indice 10

console.log(aluno)

// Perceba que imprimiu todos os alunos, pq? Pq o metodo slice não alera o array original ele cria um novo array, portanto devo salvar,sendo assim

const sala1 = aluno.slice(0, aluno.length/ 2)
const sala2 = aluno.slice(aluno.length/ 2) // Aqui como eu estou lidando com o resto dos alunos eu só divido por 2 e ele vai pegar o resto

console.log(sala1)
console.log(sala2)