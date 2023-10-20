const arrayVazio = []

console.log(arrayVazio)
console.log(arrayVazio.length)

// Posso interagir com esse array


const arrayVazia = [,,,];
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])

// Perceba que existe 3 elementos, mas esses são indefinidos

const arrayVazia1 = [,,,];
console.log(arrayVazia1.length)
arrayVazia1.push(50)
console.log(arrayVazia1)
console.log(arrayVazia1.length)

// Agora perceba que há 4 elementos, sendo eles 3 indefinidos e o ultimo 50, pois eu adicionei