const salaJS = ["Otávio", "Rafinha", "Tadei", "Helena"]
const salaPython = ["Jhonin", "Pedro", "Luiz", "Gabriela"]

salaJS.concat(salaPython) // Esta função nao altera o array pricipal, portanto preciso criar uma nova variavel

const salasUnificadas = salaJS.concat(salaPython)

console.log(salasUnificadas)

salaJS[1] = "Rafaela"

