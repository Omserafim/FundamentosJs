const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0

notas.forEach(function (nota, indice, array) {
    console.log(nota, indice, array)
    somaDasNotas += nota 
    
})


console.log(somaDasNotas)

let mediaDasNotas = somaDasNotas / notas.length
console.log(mediaDasNotas)