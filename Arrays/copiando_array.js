const notas = [1, 2, 3, 4, 5]

const novasNotas = [...notas]

novasNotas.push(10)
console.log(`As novas notas são ${novasNotas}`)
console.log(`As notas originais são ${notas}`)

/*Perceba que em nenhum momento eu alterei o array notas,
somente alterei o array novasNotas */

// Mas pq deu esse problema? 
// Quando eu fiz novasNotas = notas
// Para o JS esses dois array são quase que os mesmos.

// Portanto para eu copiar um array eu necessariamente tenho que colocar os pontos 