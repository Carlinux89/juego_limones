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
let puntaje = 0;
let vidas = 3;
let velocidadcaida = 200;

function iniciar() {
    setInterval(bajarLimon, velocidadcaida); //primerPrarametro: funcion, segundoParametro: tiempo en milisegundos
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
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

function moverDerecha() {
    personajeX += 10;
    actualizarPantalla();
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
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado() {
    if (limonX + ANCHO_LIMON > personajeX && limonX < personajeX + ANCHO_PERSONAJE && limonY + ALTO_LIMON > personajeY && limonY < personajeY + ALTO_PERSONAJE) {
        //alert("Atrapado!!\u{1F601}");
        aparecerLimon();
        puntaje = puntaje + 1;
        mostrarSpan("txtPuntaje", puntaje);
    }
}

function aparecerLimon() {
    limonX = generarAleatorio(0, canvas.width - ANCHO_LIMON);
    limonY = 0;
    actualizarPantalla();
}

function detectarPiso() {
    if (limonY + ALTO_LIMON >= canvas.height - ALTURA_SUELO) {
        aparecerLimon();
        vidas = vidas - 1;
        mostrarSpan("txtVidas", vidas);
    }
}