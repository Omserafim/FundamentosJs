const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "18997621332"]
  };

  cliente.endereço = {
    rua: "Rua Josefh Climber",
    numero: 1332,
    apartamento: true,
    complemento: "Ap 232"}


    // Percoberrendo entre as chaves
   // =================================================================================================
   for (let chave in cliente) {
       console.log(chave)
    }
// Percoberrendo entre os valores
// =============================================================================================
   for (let chave in cliente) {
        console.log(cliente[chave])
    }
// Percoberrendo entre os valores
// =============================================================================================
   for (let chave in cliente) {
        console.log(`A chave ${chave}, tem o valor ${cliente[chave]}`)
    }

