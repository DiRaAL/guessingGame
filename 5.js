let numRandom;
let intentos = 0;

do {
  numRandom = Math.floor(Math.random() * 100) + 1;
} while (numRandom > 100);

console.log(numRandom);

function adivinar() {
  let userGuess = parseInt(document.getElementById("userGuess").value);
  let diferencia = Math.abs(numRandom - userGuess);

  intentos++;

  if (userGuess === numRandom) {
    mostrarMensaje("Correcto! Has adivinado el número.");
  }
  if (intentos === 5) {
    mostrarMensaje(
      "Incorrecto. El número era: " +
        numRandom +
        ". Perdiste. ¿Quieres probar otra vez?"
    );
    document.getElementById("userGuess").disabled = true;
    document.getElementById("Adivinar").disabled = true;
    return;
  }
  if (diferencia <= 10) {
    mostrarMensaje("Caliente! Estás muy cerca del número.");
    return;
  }

  mostrarMensaje("Incorrecto. Intenta de nuevo.");
}
function mostrarMensaje(mensaje) {
  let intentosMensaje = "Intentos: " + intentos;
  document.getElementById("feedback").innerText =
    mensaje + "\n" + intentosMensaje;
}

function nuevoJuego() {
  do {
    numRandom = Math.floor(Math.random() * 100) + 1;
  } while (numRandom > 100);

  document.getElementById("userGuess").value = "";
  document.getElementById("userGuess").disabled = false;
  document.getElementById("Adivinar").disabled = false;
  intentos = 0;
  mostrarMensaje("");
}
