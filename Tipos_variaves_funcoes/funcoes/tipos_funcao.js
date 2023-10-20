// Função sem parâmetro e sem retorno

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

// Função com parâmetro e sem retorno

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

// Função sem paramêtro e com retorno

function cumprimentar(){
    return 'Oi gente!'
   }
// Perceba que aqui eu fiz mais uma função para fazer com a minha função acima.
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Otávio') // “Oi gente! Meu nome é Paula”

// Função com parâmetro e com retorno

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   console.log(operacaoMatematica(15, 30, 45))