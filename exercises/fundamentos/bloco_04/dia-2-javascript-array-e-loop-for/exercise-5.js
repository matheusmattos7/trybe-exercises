//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
//Exercicio 5

let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = number[0];

for (let index = 1; index < number.length; index += 1) {
  if (number[index] > maiorValor) {
    maiorValor = number[index];
  }
}

console.log(maiorValor);