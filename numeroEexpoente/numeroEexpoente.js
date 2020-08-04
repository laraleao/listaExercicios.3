// Fazer um programa no qual o usuário deve digitar um
// número e o expoente dele. Mostrar na tela o resultado.
// Programar usando FOR ou WHILE.

function numeroExpoente() {
  let numeroPrincipal = Number(document.getElementById("calc-numero").value);
  let expoentePrincipal = Number(
    document.getElementById("calc-expoente").value
  );
  let resultado = document.getElementById("calculo");

  resultado = Math.pow(numeroPrincipal, expoentePrincipal);

  alert(`O resultado é ${resultado}.`);
}
