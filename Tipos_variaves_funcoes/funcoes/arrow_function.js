// Declaração de função
function apresentar (nome) {
    return `Meu nome é ${nome}`
}

// Arrow function
            //Parametro      // Retorno
const apresentar = nome => `Meu nome é ${nome}`

// Arrow com dois ou mais parametros
const soma = (n1, n2)  =>  n1 + n2 // Nesse caso quando haver 2 ou mais parâmetros necessariamente preciso utilizar colchetes nos parametros

// Arrow function com + de 1 linha de instrução

const somaNUmerosPequenos = (n1, n2) => {
    if (n1 || n2 > 10) {
        return "somente numeros de um a 9"
    } else {
        return n1 + n2
    }
}


/* Nesse caso se a arrow function tiver mais parametros e mais de uma linha
 de instrução eu necessariamente precisarei utilizar colchetes e chaves e a palavra return */