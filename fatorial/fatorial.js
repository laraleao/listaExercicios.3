// Fazer um programa que calcule o fatorial de um número.
// Fatorial é a multiplicação do próprio número por todos
// abaixo dele até 1. Exemplo do fatorial de 5 seria:
// 5x4x3x2x1 = 120. Fatorial de 5 é 120.

function fatorial() {
  var numero = document.getElementById("calc-fatorial").value;

  // contador usado para receber número de fatoriais
  var numeroFatoriais = numero;

  for (i = 1; i < numeroFatoriais; i++) {
    numero = numero * i;
    console.log(`Contador: ${numeroFatoriais} - numero: ${numero}`);
  }
  alert(numero);
}
