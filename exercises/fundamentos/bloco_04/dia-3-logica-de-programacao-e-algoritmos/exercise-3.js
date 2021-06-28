//3- Agora inverta o lado do triângulo. Por exemplo:
//1° Criar espaços em brancos.

let n = 5;
let inputLine = "";
let astericos = "*";
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + " ";
    } else {
      inputLine = inputLine + astericos;
    }
  }
  console.log(inputLine);
  inputLine = "";
  inputPosition -= 1;
}