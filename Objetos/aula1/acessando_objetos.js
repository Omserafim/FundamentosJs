const clientes = {
    nome: "André",
    idade: 32,
    cpf: "111222545",
    email: "andre@dominio.com"
}

console.log(`O nome do cliente é ${clientes.nome} e 
essa pessoa tem ${clientes.idade} anos`)

console.log(`Os 3 primeiros digitos do cpf são ${clientes.cpf.substring(0, 3)}`)