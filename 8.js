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

function iniciarJuego() {
  var nombre = document.getElementById("inputNombre").value;
  if (nombre.trim() === "") {
    alert("Por favor ingresa tu nombre.");
    return;
  }
  window.location.href = "Adivina.html";
}


function mostrarEstadisticas() {
  window.location.href = "Estadisticas.html";
}

function adivinar() {
  let userGuess = parseInt(document.getElementById("userGuess").value);
  let diferencia = Math.abs(numRandom - userGuess);

  intentos++;

  if (userGuess === numRandom) {
    mostrarMensaje("Correcto! Has adivinado el número.");
    document.getElementById("userGuess").disabled = true;
    document.getElementById("Adivinar").disabled = true;
    mostrarEstadisticas();
    actualizarTablaEstadisticas("Jugador", intentos, "Adivinado");
  } else if (intentos === 10) {
    mostrarMensaje(
      "Incorrecto. El número era: " +
        numRandom +
        ". Perdiste. ¿Quieres probar otra vez?"
    );
    document.getElementById("userGuess").disabled = true;
    document.getElementById("Adivinar").disabled = true;
    actualizarTablaEstadisticas("Jugador", intentos, "Fallido");
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

function volverInicio() {
  window.location.href = "Bienvenido.html";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("difficulty").value = "facil";
  actualizarRango();
});

function actualizarRango() {
  const selectDificultad = document.getElementById("difficulty");
  const rangoMessage = document.getElementById("rangeMessage");
  const dificultadSeleccionada = selectDificultad.value;

  switch (dificultadSeleccionada) {
    case "facil":
      rangoMessage.textContent =
        "Prueba tu suerte adivinando un número del 1 al 5:";
      break;
    case "intermedio":
      rangoMessage.textContent =
        "Prueba tu suerte adivinando un número del 1 al 10:";
      break;
    case "dificil":
      rangoMessage.textContent =
        "Prueba tu suerte adivinando un número del 1 al 100:";
      break;
    default:
      rangoMessage.textContent = "Prueba tu suerte adivinando un número:";
  }
}

var table = '';
var rows = 10;
var cols = 10
for (var r = 0; r < rows;r++);
{
table += '<tr>';
for (var c = 1;c <= cols; c++)
  {
    table += '<td>' + c + '</td>';
  }
table += '</tr>';
}
