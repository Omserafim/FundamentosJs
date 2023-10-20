const clientes = {
    nome: "André",
    idade: 32,
    cpf: "111222545",
    email: "andre@dominio.com"
}

console.log(`O nome do cliente é ${clientes["nome"]} e 
essa pessoa tem ${clientes["idade"]} anos`)

// Mas qual o uso efetivo para ela?

const chaves = ["nome", "idade", "cpf", "email", "altura"]

chaves.forEach((chave) => {
    console.log(`A chave é ${chave} e tem valor de ${clientes[chave]}`);

})