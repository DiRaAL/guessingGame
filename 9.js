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

  if (userGuess === numRandom || intentos === 10) {
    if (userGuess === numRandom) {
      mostrarMensaje("Correcto! Has adivinado el número.");
    } else {
      mostrarMensaje("Incorrecto. El número era: " + numRandom + ". Perdiste.");
    }
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
  document.getElementById("feedback").innerText = mensaje + "\n" + intentosMensaje;
}


function volverInicio() {
  window.location.href = "Bienvenido.html";
}

//para almacenar información 
function almacenarEnLocalStorage(nombre, intentos, resultado) {
  let estadisticas = JSON.parse(localStorage.getItem("estadisticas")) || [];
  estadisticas.push({ nombre: nombre, intentos: intentos, resultado: resultado });
  if (estadisticas.length > 10) {
    estadisticas = estadisticas.slice(estadisticas.length - 10);
  }
  localStorage.setItem("estadisticas", JSON.stringify(estadisticas));
}

//mostrar tabla almacenamiento local
function mostrarTablaDesdeLocalStorage() {
  let estadisticas = JSON.parse(localStorage.getItem("estadisticas")) || [];
  let tbody = document.getElementById("cuerpoTablaEstadisticas");
  tbody.innerHTML = "";

  estadisticas.forEach((jugador) => {
    let fila = document.createElement("tr");

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = jugador.nombre;
    fila.appendChild(celdaNombre);

    let celdaIntentos = document.createElement("td");
    celdaIntentos.textContent = jugador.intentos;
    fila.appendChild(celdaIntentos);

    let celdaResultado = document.createElement("td");
    celdaResultado.textContent = jugador.resultado;
    fila.appendChild(celdaResultado);

    tbody.appendChild(fila);
  });
}

function actualizarRango() {
  const selectDificultad = document.getElementById("difficulty");
  const rangoMessage = document.getElementById("rangeMessage");
  const dificultadSeleccionada = selectDificultad.value;

  switch (dificultadSeleccionada) {
    case "facil":
      rangoMessage.textContent = "Prueba tu suerte adivinando un número del 1 al 5:";
      break;
    case "intermedio":
      rangoMessage.textContent = "Prueba tu suerte adivinando un número del 1 al 10:";
      break;
    case "dificil":
      rangoMessage.textContent = "Prueba tu suerte adivinando un número del 1 al 100:";
      break;
    default:
      rangoMessage.textContent = "Prueba tu suerte adivinando un número:";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("difficulty").value = "facil";
  actualizarRango();
  mostrarTablaDesdeLocalStorage();
});




/*// Definir los estados
const estados = {
  INICIO: 'inicio',
  ADIVINANDO: 'adivinando',
  ACIERTO: 'acierto',
  FALLO: 'fallo'
};

// Definir la máquina de estados
class MaquinaDeEstados {
  constructor() {
    this.estadoActual = estados.INICIO;
    this.nombreUsuario = '';
    this.intentos = 0;
  }

  // Método para cambiar el estado
  cambiarEstado(nuevoEstado) {
    this.estadoActual = nuevoEstado;
    console.log(`La máquina está ahora en estado: ${nuevoEstado}`);
  }

  // Método para iniciar el juego
  iniciarJuego(nombreUsuario) {
    this.nombreUsuario = nombreUsuario;
    this.intentos = 0;
    this.cambiarEstado(estados.ADIVINANDO);
    console.log(`Hola ${this.nombreUsuario}, vamos a empezar el juego.`);
  }

  // Método para adivinar
  adivinar(respuesta) {
    this.intentos++;
    if (respuesta === 'correcta') {
      this.cambiarEstado(estados.ACIERTO);
    } else {
      this.cambiarEstado(estados.FALLO);
    }
  }

  // Método para mostrar el resultado
  mostrarResultado() {
    switch (this.estadoActual) {
      case estados.ACIERTO:
        console.log(`¡Felicitaciones ${this.nombreUsuario}! Has adivinado en ${this.intentos} intentos.`);
        break;
      case estados.FALLO:
        console.log(`Lo siento ${this.nombreUsuario}, has fallado en tu intento número ${this.intentos}.`);
        break;
      default:
        console.log('El juego no ha finalizado todavía.');
        break;
    }
  }
}

// Uso de la máquina de estados
const maquina = new MaquinaDeEstados();
maquina.iniciarJuego('Usuario1');
maquina.adivinar('incorrecta');
maquina.adivinar('incorrecta');
maquina.adivinar('correcta');
maquina.mostrarResultado();
*/