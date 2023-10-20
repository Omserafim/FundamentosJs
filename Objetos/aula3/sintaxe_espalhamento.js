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

let ligarParaCliente = (telefoneComercial, 
    telefoneResidencial) => {
        console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
     
}

ligarParaCliente(cliente.telefone[0], cliente.telefone[1])

// Posso utilizar a sintaxe de espalhamento aqui

ligarParaCliente(...cliente.telefone)
/* O espalhamento fora utilizado para passar parâmetros e tornar
desnecessário passar os parâmetros 1 por 1
*/

let encomenda = {
    destinatario: cliente.nome,
    endereco: cliente.endereço
}

console.log(encomenda)
/* Perceba que aqui ele separa o objeto, contudo eu quero
que apareça todas as propriedades do objeto endereço
sem aparecer que ele é um objeto, desta feita eu posso 
usar o espalhamento no endereco*/

encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereço
}

console.log(encomenda)
/* Perceba que aqui ele não separa isto é 
mostra tudo de uma vez.*/

