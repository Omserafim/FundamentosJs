const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   console.log(objPersonagem)

// E se eu quiser remover a propriedade aliado:? Só utulizar a propriedade delete

delete objPersonagem.aliado

console.log(objPersonagem)

// Posso remover também utilizando o colchetes

delete objPersonagem["status"]

console.log(objPersonagem)
