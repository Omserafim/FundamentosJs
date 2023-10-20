

  const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin = (nome) => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return acesso(nome)
  }
  
  console.log(usuarioLogin("Luke"))

  // Perceba que aqui eu compus as duas funções, ou seja, ambas estão no mesmo escopo

  // Perceba que a função usuario login fará o o processamento das suas intruções além disso executará a função acesso

  // Imagine que eu preciso criar um tempo maior para login para um cargo 

  const diretoriaLogin = (nome) => {
    let array = []
    for( i = 0; i < 900000; i++){
        array.push(i)
    }
    return acesso(nome)
  }
  
  diretoriaLogin("Leia")

  // E como eu altero o tempo a partir de cargos? 

  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
