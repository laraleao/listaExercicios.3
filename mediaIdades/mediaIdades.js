// Desenvolva um programa no qual o usuário deve digitar
// o nome e a idade de 5 pessoas. Ao final mostrar a média
// de idade delas e a menor idade dentre essas pessoas.

function media() {
  let media1 = Number(document.getElementById("calc-media1").value);
  let media2 = Number(document.getElementById("calc-media2").value);
  let media3 = Number(document.getElementById("calc-media3").value);
  let media4 = Number(document.getElementById("calc-media4").value);
  let media5 = Number(document.getElementById("calc-media5").value);
  let resultado = document.getElementById("medias");

  resultado = (media1 + media2 + media3 + media4 + media5) / 5;

  alert(`A média de idades é ${resultado}.`);
}
