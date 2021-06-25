//Exercicio 3
//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < number.length; index += 1) {
  result += number[index]/number.length;
}

console.log(result);