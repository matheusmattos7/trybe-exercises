//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
//Exercicio 9

let numbers = [];

for (index = 1; index <= 25 ;index +=1 ){
  numbers.push(index) ;
}

console.log(numbers);

// Exercicio anterior a cima.

for (let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]/2);
}