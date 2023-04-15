// Obtener el elemento del DOM donde se mostrará el texto
let $cambioNombre = document.getElementById("cambioNombre");

// Crear un arreglo con las palabras a mostrar
let words = ["HTML, CSS, JS", "Boostrap, GitHub"];

// Función que escribe y borra una palabra
export function writeAndEraseWord(word) {
  // Crear un arreglo con cada letra de la palabra
  let wordArray = word.split("");

  // Crear un contador para  el seguimiento de las letras mostradas
  let i = 0;

  // Crear un intervalo para mostrar cada letra con una pausa de 100ms
  let intervalId = setInterval(function () {
    // Mostrar la siguiente letra
    $cambioNombre.innerHTML += wordArray[i];

    // Agrega otra letra
    i++;

    // Si se han mostrado todas las letras, detener el intervalo
    if (i == wordArray.length) {
      clearInterval(intervalId);

      // Crear otro intervalo para borrar las letras con una pausa de 100ms
      let j = wordArray.length - 1;
      let intervalId2 = setInterval(function () {
        // Borrar la última letra
        $cambioNombre.innerHTML = $cambioNombre.innerHTML.slice(0, -1);

        // Decrementar el contador
        j--;

        // Si se han borrado todas las letras, detener el intervalo y llamar a la función de nuevo con la siguiente palabra
        if (j < 0) {
          clearInterval(intervalId2);
          // Obtener la siguiente palabra
          let nextWord = words[(words.indexOf(word) + 1) % words.length];
          // Llamar a la función con la siguiente palabra
          writeAndEraseWord(nextWord);
        }
      }, 200);
    }
  }, 80);
}
export default {
  writeAndEraseWord,
};

// Llamar a la función por primera vez con la primera palabra
// writeAndEraseWord(words[0]);
