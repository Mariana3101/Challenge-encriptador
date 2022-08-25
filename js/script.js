const inputTexto = document.getElementById("input-texto");
const mensajeTexto = document.getElementById("mensaje-texto");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");
const muneco = document.getElementById("muneco");
const mensajeTexto2 = document.getElementById("mensaje-texto2");
const soloLetras = "^[a-z !ñ]+$";

document.addEventListener("DOMContentLoaded", () => {
  btnEncriptar.addEventListener("click", encriptar);
  btnDesencriptar.addEventListener("click", desencriptar);
  btnCopiar.addEventListener("click", copiarTexto);
});

function encriptar(e) {
  e.preventDefault();
  mensajeTexto.value = "";
  let texto = inputTexto.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(" ");
    let nuevoTexto = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll("e", "enter");
      palabra = palabra.replaceAll("i", "imes");
      palabra = palabra.replaceAll("a", "ai");
      palabra = palabra.replaceAll("o", "ober");
      palabra = palabra.replaceAll("u", "ufat");

      nuevoTexto.push(palabra);
    }
    const resultado = nuevoTexto.join("");

    mensajeTexto.value = resultado;
    //Para ocultar el muneco y el label
    if (resultado) {
      desaparece();
    }
  } else {
    mostrarError("Solo palabras en minúsculas,sin acentos");

    return;
  }
}
/* Para desaparecer al muneco y el label  */
function desaparece() {
  muneco.style.display = "none";
  mensajeTexto2.style.display = "none";
}

function desencriptar(e) {
  e.preventDefault();
  mensajeTexto.value = "";
  let texto = inputTexto.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(" ");
    let nuevoTexto = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll("enter", "e");
      palabra = palabra.replaceAll("imes", "i");
      palabra = palabra.replaceAll("ober", "o");
      palabra = palabra.replaceAll("ai", "a");
      palabra = palabra.replaceAll("ufat", "u");

      nuevoTexto.push(palabra);
    }
    const resultado = nuevoTexto.join("");

    mensajeTexto.value = resultado;
  } else {
    mostrarError(+"Solo palabras en minúsculas,sin acentos");

    return;
  }
}

function mostrarError(mensaje) {
  const existeError = document.querySelector(".error");

  if (!existeError) {
    const formulario = document.getElementById("formulario");
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("error");

    divMensaje.textContent = mensaje;
    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

function copiarTexto(e) {
  e.preventDefault();
  const mensaje = mensajeTexto.value;

  navigator.clipboard.writeText(mensaje); // copiar texto al portapapeles
}

/* responsivo con flex 
https://www.w3schools.com/css/css3_flexbox_responsive.asp*/
