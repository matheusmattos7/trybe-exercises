//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let firstAngle = 45
let secondAngle = 45
let thirdAngle = 90

let soma = (firstAngle+secondAngle+thirdAngle)

if (soma = 180) {
  console.log(true)
} else if (soma > 180) {
  console.log(false)
} else {
  console.log(error)
}