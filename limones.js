let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTURA_SUELO = 20;
const ALTO_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
const ANCHO_LIMON = 20;
const ALTO_LIMON = 20;

let personajeX = canvas.width / 2;
let personajeY = canvas.height - (ALTURA_SUELO + ALTO_PERSONAJE);
let limonX = canvas.width / 2;
let limonY = 0;

function iniciar() {
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
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
    detectarColision();
}

function moverDerecha() {
    personajeX += 10;
    actualizarPantalla();
    detectarColision();
}

function actualizarPantalla() {
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarLimon() {
    ctx.fillStyle = "green";
    ctx.fillRect(limonX, limonY, ANCHO_LIMON, ALTO_LIMON);
}

function bajarLimon() {
    limonY += 10;
    actualizarPantalla();
}

function detectarColision() {
    if (limonX + ANCHO_LIMON > personajeX && limonX < personajeX + ANCHO_PERSONAJE && limonY + ALTO_LIMON > personajeY && limonY < personajeY + ALTO_PERSONAJE) {
        alert("Atrapado!!\u{1F601}");
    }
}