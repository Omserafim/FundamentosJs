const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = objPersonagem


console.log(objPersonagem, objPersonagem2)


objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) 
console.log(objPersonagem2.nome) 

/* Perceba que quando eu altero qualquer um dos objetos, todos os objetos,
são alterados */

// Já com variaveis é diferente

let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100

// Para contornar essa situação eu utilizo o método Object.create()

const objPersonagem1 = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem1)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento