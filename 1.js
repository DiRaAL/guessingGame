let numRandom;
    do {
      numRandom = Math.floor(Math.random() * 100) + 1;
    } while (numRandom > 100);
    //return numRandom;  (no deja correr el codigo)//
  
    console.log(numRandom)

    
function adivinar() {
  
  let userGuess = parseInt(document.getElementById("userGuess").value)
  if (userGuess === numRandom) 
  {
    mostrarMensaje("¡Correcto! Has adivinado el número.")
  } else 
  {
    mostrarMensaje("Incorrecto. Intenta de nuevo."+numRandom)
  }
    
}

function mostrarMensaje(mensaje) {
  document.getElementById("feedback").innerText = mensaje
}

function nuevoJuego() {
  document.getElementById("userGuess").value = ""
  mostrarMensaje("")
}

