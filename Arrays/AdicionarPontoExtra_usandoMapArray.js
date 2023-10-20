const notas = [10, 9.5, 8, 7, 6];

//Desafio um aluno recebeu um ponto extra em suas notas, vc precisa adicionar esse ponto as suas notas

notas.map((nota) => {
    return nota + 1
}
)

console.log(notas)

const notasAtualizada = notas.map((nota) => {
    // Como não fazer a nota passar de 10?
        return nota + 1 >= 10 ? 10 : nota + 1
        
   

}
)

console.log(notasAtualizada)

const notasAtualizada1 = notas.map((nota) => {
    // Como não fazer a nota passar de 10 utilizando if e else?
        if (nota + 1 >= 10) {
            return 10
        } else {
            return nota + 1
        }
        
}
)

console.log(notasAtualizada1)

