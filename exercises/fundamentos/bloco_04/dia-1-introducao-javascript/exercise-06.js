//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peças= "Rainha";

switch (peças.toLowerCase()) {
  case "peao":
    console.log("movimenta-se uma casa para frente e captura na diagonal");
      break;

  case "torre":
    console.log("movimenta-se nos pontos cardinais");
      break;


  case "cavalo":
    console.log("Se movimenta em L");
      break;


  case "bispo":
    console.log("Se movimenta em diagonais");
      break;


  case "rainha":
    console.log("Se movimenta tanto nos ponto cardinais como nos diagonais");
      break;

  case "rei":
    console.log("Se movimenta nos pontos cardinais");
      break;

  default:
    console.log("Coloque uma peça de xadrez válida");
} 


