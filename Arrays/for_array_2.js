const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length


// Como fazer essa media utilizando o for

let somaDasNotas = 0

for (let i = 0 ; i < notas.length ; i++) {
    somaDasNotas += notas[i]
    
   
}

const mediaDasNotas = somaDasNotas / notas.length
console.log(mediaDasNotas)