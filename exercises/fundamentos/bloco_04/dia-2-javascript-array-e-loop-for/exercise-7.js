//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
//Exercicio 7

let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerValue = number[0];

for (index = 1; index < number.length; index +=1) {
    if (number[index] < lowerValue) {
        lowerValue = number[index]
    }
}

console.log(lowerValue);