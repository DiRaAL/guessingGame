let numRandom;
let intentos = 0;
let rangoMin;
let rangoMax;

function establecerRangos(dificultad) {
  switch (dificultad) {
    case "facil":
      rangoMin = 1;
      rangoMax = 5;
      break;
    case "intermedio":
      rangoMin = 1;
      rangoMax = 10;
      break;
    case "dificil":
      rangoMin = 1;
      rangoMax = 100;
      break;
    default:
      rangoMin = 1;
      rangoMax = 100;
  }
}

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nuevoJuego() {
  const selectDificultad = document.getElementById("difficulty");
  const dificultadSeleccionada = selectDificultad.value;

  establecerRangos(dificultadSeleccionada);
  numRandom = generarNumeroAleatorio(rangoMin, rangoMax);

  document.getElementById("userGuess").value = "";
  document.getElementById("userGuess").disabled = false;
  document.getElementById("Adivinar").disabled = false;
  intentos = 0;
  mostrarMensaje("");
}

function adivinar() {
  let userGuess = parseInt(document.getElementById("userGuess").value);
  let diferencia = Math.abs(numRandom - userGuess);

  intentos++;

  if (userGuess === numRandom) {
    mostrarMensaje("Correcto! Has adivinado el número.");
    document.getElementById("userGuess").disabled = true;
    document.getElementById("Adivinar").disabled = true;
  } else if (intentos === 10) {
    mostrarMensaje(
      "Incorrecto. El número era: " +
        numRandom +
        ". Perdiste. ¿Quieres probar otra vez?"
    );
    document.getElementById("userGuess").disabled = true;
    document.getElementById("Adivinar").disabled = true;
  } else if (diferencia <= 10) {
    mostrarMensaje("Caliente! Estás muy cerca del número.");
  } else {
    mostrarMensaje("Incorrecto. Intenta de nuevo.");
  }
}

function mostrarMensaje(mensaje) {
  let intentosMensaje = "Intentos: " + intentos;
  document.getElementById("feedback").innerText =
    mensaje + "\n" + intentosMensaje;
}









