let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const ALTURA_SUELO = 30;
const ALTO_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
let personajeX = canvas.width / 2;

function iniciar() {
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo() {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}

function dibujarPersonaje() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(personajeX, canvas.height - (ALTURA_SUELO + ALTO_PERSONAJE), ANCHO_PERSONAJE, ALTO_PERSONAJE);
}

function moverIzquierda() {
    personajeX -= 10;
    actualizarPantalla();
}

function actualizarPantalla() {
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}