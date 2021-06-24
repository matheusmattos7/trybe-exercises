// Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 5067.69;
let aliquotaINSS;
let aliquotaIR;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * (8/100);
} else if (salarioBruto <= 2594.92 ) { 
  aliquotaINSS = salarioBruto * 9/100;
} else if (salarioBruto <= 5189.82 ) { 
  aliquotaINSS = salarioBruto * 11/100;
} else  { 
  aliquotaINSS = 570,88;
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = salarioBase;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 7.5/100) - 142.8;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 15/100) - 354.8;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 22.5/100) - 636.13;
} else {
  aliquotaIR = (salarioBase * 27.5/100) - 869.36;
} 

console.log("Salário: " + (salarioBase - aliquotaIR));