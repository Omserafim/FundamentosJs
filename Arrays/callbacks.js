const nomes = ["Evaldo", "Mari", "Camis"];

//Forma tradicional
nomes.forEach(function (nome) {
    console.log(nome)
})

//Arrow function
nomes.forEach((nome) => {
    console.log(nome)
})

//Function externa
function imprimiNomeEIndice(nome, i) {
    console.log(nome, i)
}

nomes.forEach(imprimiNomeEIndice)