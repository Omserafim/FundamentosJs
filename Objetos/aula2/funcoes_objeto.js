/* const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "18997621332"],
    saldo: 200
  }; */

  // Vou criar uma função para verificar se o cliente tem saldo para pagar

  const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "18997621332"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            return "Saldo insuficiente"
        } else {
            this.saldo > valor
        } 
        return `Pagamento Realiza, Saldo remanescente: ${this.saldo - valor}`
    }
  };

console.log(cliente.efetuaPagamento(205))

