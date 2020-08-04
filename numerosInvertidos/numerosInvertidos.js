// Faça um programa no qual o usuário deve digitar a
// sequência de números de 1 a 10, invertida. Caso digite
// algum número fora da sequência, interromper e mostrar
// uma mensagem "Você errou a sequência". Do contrário,
// mostrar uma mensagem "Você terminou a sequência
// corretamente". Programar usando FOR

// com o WHILE

// let repeat = 10;

// while (repeat > 0) {
//   let numero = window.prompt("Digite o número da sequência:");

//   if (numero == repeat) {
//     repeat--;
//   } else {
//     window.alert("Você errou a sequência!");
//     break;
//   }
// }
// if (repeat == 0) {
//   window.alert("Você acertou a sequência!");
// }

// com o FOR

function numerosInvertidos() {
  /*   let numero = Number(document.getElementById("numeros").value);

  if (numero != 10) {
    console.log("Você errou a sequência.");
  } else {
    alert("Você acertou a sequência.");
  } */
  for (i = 10; i >= 1; i--) {
    const numero = parseInt(window.prompt("Número?"));
    console.log(numero);
    if (numero != i) {
      window.alert("Número errado!");
    } else {
      window.alert("Acertou! Continue com a sequência.");
    }
  }
}
//   for (i = 10; i >= 1; i--) {
//     console.log("Você acertou a sequência.");
//     break;
//   }
// }
// if ((numeroFinal = 1)) {
//   console.log("Você acertou a sequeência.");
// }
