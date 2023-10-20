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

    // Preciso validar a compra de um cliente e verificar se ele tem endereço cadastrado

let chavesObjeto = Object.keys(cliente)
console.log(chavesObjeto)

if (chavesObjeto.includes("endereço")) { // Caso for verdadeiro e ele tem endereço exibe
    console.log(`Compra validada, enviado para ${cliente.endereço.rua}, Nº ${cliente.endereço.numero}`)

} else { // Caso ele não tenha endereço, ou seja, for falso, exibe isso
    console.log("Error ! Cliente não possui endereço")
}