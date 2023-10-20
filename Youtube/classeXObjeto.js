const livro = {
    nome: "React Native",
    editora: "Casa de Código",
    paginas: 213,
    anunciar: function () {
        console.log(`A alura indica o livro ${this.nome}`)
    }
}

livro.anunciar()

// Função Construtora
const Livros = function (n, e, p) {
    this.nome = n;
    this.editora = e;
    this.paginas =  p;
    this.exibir = function () {
       return `O nome do produto é ${this.nome}`
    }

}

const livros2 = new Livros("Otávio", "Poliana", 232)

console.log(livros2.nome)

// Classes

class Livro1 {
    constructor(n, e, p) {
        this.nome = n 
        this.editora = e,
        this.paginas = p
    }
    anunciarLivro() {
        return `O título do livro é ${this.nome}`
    }
    anunciarEditora() {
        return `A editora do livro é ${this.editora}`
    }
}

const NodeJS = new Livro1 ("Otávio", "sagas", 2331)
console.log(NodeJS.anunciarEditora())

console.log(typeof Livros)
console.log(typeof Livro1)

// Pergunta e se eu quiser herdar propriedades da classe e acresentar coisas a mais?

//Crio uma nova classe e "extends" CLASSE que quero herdar
                    
class LivroEColecao extends Livro1 {
    constructor (nome, editora, nC){
        super (nome, editora) /* Utilizando a palavra super, 
        eu escolho quais propriedades eu quero da classe antiga */
        this.nomeColecao = nC
    }
}

const LivroColecao = new LivroEColecao ("Otávio","JUS", "Peter")

console.log(LivroColecao.anunciarEditora())