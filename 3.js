let intentos = 0;
let numRandom;

do {
  numRandom = Math.floor(Math.random() * 100) + 1;
} while (numRandom > 100);

console.log(numRandom);

function adivinar() {
  let userGuess = parseInt(document.getElementById("userGuess").value);
  if (userGuess === numRandom) {
    mostrarMensaje("¡Correcto! Has adivinado el número.");
  } else {
    intentos++;
    if (intentos === 5) {
      mostrarMensaje(
        "Incorrecto.El número era: " +
          numRandom +
          " Perdiste. Quieres probar otra vez?"
      );
      document.getElementById("userGuess").disabled = true;
      document.getElementById("Adivinar").disabled = true;
    } else {
      mostrarMensaje("Incorrecto. Intenta de nuevo.");
    }
  }
}

function mostrarMensaje(mensaje) {
  let intentosMensaje = "Intentos: " + intentos;
  document.getElementById("feedback").innerText =
    mensaje + "\n" + intentosMensaje;
}

function nuevoJuego() {
  document.getElementById("userGuess").value = "";
  mostrarMensaje("");
  document.getElementById("userGuess").disabled = false;
  intentos = 0;
  document.getElementById("feedback").innerText = "";
}
