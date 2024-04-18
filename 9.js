let numRandom;
let intentos = 0;
let rangoMin;
let rangoMax;
let nombreJugador;

// Función para establecer los rangos de los números aleatorios según la dificultad seleccionada
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

// Función para generar un número aleatorio dentro de un rango específico
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para comenzar un nuevo juego
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

// Función iniciar juego
function iniciarJuego() {
  var nombre = document.getElementById("inputNombre").value.trim();
  if (nombre === "") {
    alert("Por favor ingresa tu nombre.");
    return;
  }
  nombreJugador = nombre;
  window.location.href = "Adivina.html";
}

// Funcion mostrar estadísticas
function mostrarEstadisticas() {
  window.location.href = "Estadisticas.html";
}

// Función adivinar numero
function adivinar() {
  let userGuess = parseInt(document.getElementById("userGuess").value);
  let diferencia = Math.abs(numRandom - userGuess);

  intentos++;
}




