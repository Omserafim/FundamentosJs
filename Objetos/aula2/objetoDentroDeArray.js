const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "18997621332"]
  };

  cliente.endereços = [{
    rua: "Rua Josefh Climber",
    numero: 1332,
    apartamento: true,
    complemento: "Ap 232"}

]

cliente.endereços.push({
    rua: "Rua SAD",
    numero: 212,
    apartamento: false,
    complemento: "Casa Verde"}
)

// Qual a vantagem de ter arrays? Utilizar seus métodos
// Exemplo Eu quero filrar só endereços de apartamento

const listaApenasAparatamentos = cliente.endereços.filter(
    (endereço) => endereço.apartamento === true
)

console.log(listaApenasAparatamentos)