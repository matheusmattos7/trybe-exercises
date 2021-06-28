//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 5;
let asterisco = "";

for (let colunas = 0; colunas < n; colunas += 1) {
  for (let linhas = 0; linhas < n; linhas += 1) {
    asterisco += "*";
  }
  console.log(asterisco);
  asterisco = "";
}
