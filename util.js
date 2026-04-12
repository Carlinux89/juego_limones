function generarAleatorio(min, max) {
    let random = Math.random(); // entre 0 y 1
    //EJEMPLO: max 600, min 5
    let numero = random * (max - min); // entre 0 y max
    let numeroEntero = Math.ceil(numero); // entero
    //EJEMPLO
    numeroEntero = numeroEntero + min; // entre min y max
    return numeroEntero;
}

function mostrarSpan(idSpan, valor) {
    let componente = document.getElementById(idSpan);
    componente.textContent = valor;
}

function cambiarVelocidad(nuevaVelocidad) {
    clearInterval(intervaloLimon);
    velocidadCaida = nuevaVelocidad;
    intervaloLimon = setInterval(bajarLimon, velocidadCaida);
}

