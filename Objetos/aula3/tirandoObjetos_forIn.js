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

    for (let chave in cliente) { // AO final há um A chave endereço, tem o valor [object Object]
        // Para filtrar os campos eu posso selecionar só os tipos que ele exiba
        let filtro = cliente[chave];
        if (typeof filtro !== "object" && "function") {
            console.log(`A chave ${chave}, tem o valor ${cliente[chave]}`)}
        
    } 
    
