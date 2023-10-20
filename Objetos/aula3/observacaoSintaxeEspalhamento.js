/* Sabe-se que é possivel mesclar objetos, formando
um só utlizando o espalhamento, vejamos*/

const mago1 = {
    nome: "Gandolf",
    classe: "Mago"
}
const mago2 = {
    poderes: "Eletricos",
    idade: 87
}

// Mesclando, importante lembrar que as propriedades são diferentes

const magoCompleto = {...mago1, ...mago2}
console.log(magoCompleto)

/* Importante lembrar que caso as propriedades dos objetos
 espalhados sejam iguais, estas serao reescritas, e
 assumirao o resultado do ultima propriedade de objetos.*/

 const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }
// Perceba que os 3 objetos tem as mesmas propriedades
const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)

/* Perceba que o JavaScript sobrescreve as chaves com 
o mesmo nome a cada ocorrência, fazendo com que o resultado 
final seja somente o último objeto 
declarado dentro do objeto personagens.*/