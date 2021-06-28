//4- Depois, faça uma pirâmide com n asteriscos de base:
// Exercicio 4

let n = 5;
let asterisco = "*";
let espacoBranco = "";

let meio = (n + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (lineIndex = 0; lineIndex <= meio; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > ladoEsquerdo && columnIndex < ladoDireito) {
      espacoBranco = espacoBranco + asterisco;
    } else {
      espacoBranco = espacoBranco + " ";
    }
  }
  console.log(espacoBranco);
  espacoBranco = "";
  ladoDireito += 1;
  ladoEsquerdo -= 1;
}