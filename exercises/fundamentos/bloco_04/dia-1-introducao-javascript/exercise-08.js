// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let x = 1;
let y = 2;
let z = 5;

let isEven = false;

if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
  isEven = true;
} 
  console.log(isEven);