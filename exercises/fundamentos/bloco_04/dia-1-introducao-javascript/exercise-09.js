//Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false
//Bonus: use somente um if .

let a = 4;
let b = 1;
let c = 12;

let isOdd = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  isOdd = true;
}  
console.log(isOdd);