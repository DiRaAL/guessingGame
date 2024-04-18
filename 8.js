let numRandom;
let tries = 0;
let rangeMin;
let rangeMax;


function establishRanges(difficulty) {
  switch (difficulty) {
    case "facil":
      rangeMin = 1;
      rangeMax = 5;
      break;
    case "intermedio":
      rangeMin = 1;
      rangeMax = 10;
      break;
    case "dificil":
      rangeMin = 1;
      rangeMax = 100;
      break;
    default:
      rangeMin = 1;
      rangeMax = 100;
  }
}

function generateNumRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newGame() {
  const selectDifficulty = document.getElementById("difficulty");
  const selectedDifficulty = selectDifficulty.value;

  establishRanges(selectedDifficulty);
  numRandom = generateNumRandom(rangeMin, rangeMax);

  document.getElementById("userGuess").value = "";
  document.getElementById("userGuess").disabled = false;
  document.getElementById("Adivinar").disabled = false;
  tries = 0;
  mostrarMensaje("");
}

function startGame() {
  var nombre = document.getElementById("inputNombre").value;
  if (nombre.trim() === "") {
    alert("Por favor ingresa tu nombre.");
    return;
  }
  var inputName = document.getElementById ("inputNombre")
  localStorage.setItem("name", getElementById(inputName))

  window.location.href = "Adivina.html";
}

function showStats() {
  window.location.href = "Estadisticas.html";
}

function guess() {
  let userGuess = parseInt(document.getElementById("userGuess").value);
  let diferencia = Math.abs(numRandom - userGuess);

  tries++;

  if (userGuess === numRandom) {
    mostrarMensaje("Correcto! Has adivinado el número.");
    document.getElementById("userGuess").disabled = true;
    document.getElementById("Adivinar").disabled = true;
    mostrarEstadisticas();
    actualizarTablaEstadisticas("Jugador", tries, "Adivinado");
  } else if (tries === 10) {
    mostrarMensaje(
      "Incorrecto. El número era: " +
        numRandom +
        ". Perdiste. ¿Quieres probar otra vez?"
    );
    document.getElementById("userGuess").disabled = true;
    document.getElementById("Adivinar").disabled = true;
    actualizarTablaEstadisticas("Jugador", tries, "Fallido");
  } else if (diferencia <= 10) {
    mostrarMensaje("Caliente! Estás muy cerca del número.");
  } else {
    mostrarMensaje("Incorrecto. Intenta de nuevo.");
  }
}


function showMessage(mensaje) {
  let triesMessage = "Intentos: " + tries;
  document.getElementById("feedback").innerText =
    mensaje + "\n" + triesMessage;
}

let win = guess === numRandom           //!//
let lose = (tries === 10)

function returnToStart() {
  window.location.href = "Bienvenido.html";
}

// no actualiza bien la informacion
// este codigo arregla eso supuestamente
//document.addEventListener("DOMContentLoaded", function () {
// document.getElementById("difficulty").value = "facil";
// actualizarRango();
//});

function updateRange() {
  const selectDifficulty = document.getElementById("difficulty");
  const rangeMessage = document.getElementById("rangeMessage");
  const selectedDifficulty = selectDifficulty.value;

  switch (selectedDifficulty) {
    case "intermedio":
      rangeMessage.textContent =
        "Prueba tu suerte adivinando un número del 1 al 10:";
      break;
    case "dificil":
      rangeMessage.textContent =
        "Prueba tu suerte adivinando un número del 1 al 100:";
      break;
    default:
      rangeMessage.textContent =
        "Prueba tu suerte adivinando un número del 1 al 5:";
      break;
    //default:
    //  rangoMessage.textContent = "Prueba tu suerte adivinando un número:";
  }
}

function initStats() {
  const statsTable = document.getElementById("statsTable");

  const statsJson = window.localStorage.getItem("stats");
  const stats = JSON.parse(statsJson);
  for (s of stats) {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.innerText = s.name;
    const tries = document.createElement("td");
    tries.innerText = s.tries;
    const result = document.createElement("td");
    result.innerText = s.result ? "Ganado" : "Perdido";

    row.appendChild(name);
    row.appendChild(tries);                //tf is all this//
    row.appendChild(result);
    statsTable.appendChild(row);
  }
}

/*var table = "";
var rows = 10;
var cols = 10;
for (var r = 0; r < rows; r++) {
  table += "<tr>";
  for (var c = 1; c <= cols; c++) {
    table += "<td>" + c + "</td>";
  }
  table += "</tr>";
}*/

var user = {
  "nombre":"//function call//",
  "intentos":"//function call//",
  "resultado":"//function call//",
}