const number = [6, 3, 100, 4, 2, 5]
const names = ["Mike" , "alpha", "tango", "otávio"]

const sorted = names.sort()
const sortedNumber = number.sort()

console.log(sorted)
console.log(sortedNumber)

// =======================================================

const sortCrescente = number.sort((a, b) => {
   return a - b
})

console.log(sortCrescente)

const sortDecreste = number.sort((a, b) => {
   return b - a
})

console.log(sortDecreste)

// =========================================================

const sortString = names.sort((a,b) => {
    return a.localeCompare(b)
})

console.log(sortString)

// ===========================================================
// OBJETOS

const livros = [ 
    {name: "HarryPotter", preco: 25},
    {name: "TheWitcher", preco: 105}, 
    {name: "AsCronicasDeNarnia", preco: 20 }, 
    {name: "DungeonsAndDragons", preco: 45},
    {name: "GameOfTrones", preco: 200}
]

const sortObjetosPreco = livros.sort((a, b) => { 
    return a.preco - b.preco
})
const sortObjetosName = livros.sort((a, b) => { 
    return a.name.localeCompare(b.name)
})

console.log(sortObjetosPreco)
console.log(sortObjetosName)

