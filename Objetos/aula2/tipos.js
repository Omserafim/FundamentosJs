/*const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: "1155555550",
  }; */

// Caso eu queira armazenar mais 1 um telefone, como eu faço?
// Simples eu posso armazenar esses telefones em um lista

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "18997621332"]
  };

  console.log(cliente.telefone)

// E se eu quiser acessar só o telefone 2? Simples acessar ele pelo index

console.log(cliente.telefone[1])