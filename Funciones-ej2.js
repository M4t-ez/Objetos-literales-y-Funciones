const leer = require("prompt-sync")();

function main() {
    const filas = 7;
    const columnas = 10;
    let posHarry=-1;
    let posNewt=-1;
    let entrada="def";

    console.clear();
    console.log("Yo juro solemnemente que mis intenciones son malas");
    console.log("");

    posHarry = generarPosicion(filas, columnas);
    posNewt = generarPosicion(filas, columnas);

    while (posicionesIguales(posHarry, posNewt) === true) {
        posNewt = generarPosicion(filas, columnas);
    }

    imprimirMapa(filas, columnas, posHarry, posNewt);

    entrada = leer("");

    while (entrada !== "Travesura realizada") {
        posHarry = moverPersonaje(posHarry, filas, columnas, posNewt);
        posNewt = moverPersonaje(posNewt, filas, columnas, posHarry);

        console.clear();
        imprimirMapa(filas, columnas, posHarry, posNewt);

        entrada = leer("");
    }

    console.clear();
    console.log("Cerrando Mapa.");
}

function generarPosicion(filas, columnas) {
    const fila = Math.floor(Math.random() * filas);
    const columna = Math.floor(Math.random() * columnas);
    return { fila: fila, columna: columna };
}


function posicionesIguales(posA, posB) {
    return posA.fila === posB.fila && posA.columna === posB.columna;
}


function moverPersonaje(posicion, filas, columnas, posicionAEvitar) {
    let nuevaFila=-1;
    let nuevaColumna=-1;
    let direccion=-1;
    let movimientoValido = false;

    while (movimientoValido === false) {
        direccion = Math.floor(Math.random() * 4);

        nuevaFila = posicion.fila;
        nuevaColumna = posicion.columna;

        if (direccion === 0) {
            nuevaFila = posicion.fila - 1;
        } else if (direccion === 1) {
            nuevaFila = posicion.fila + 1;
        } else if (direccion === 2) {
            nuevaColumna = posicion.columna - 1;
        } else {
            nuevaColumna = posicion.columna + 1;
        }

        if (nuevaFila >= 0 && nuevaFila < filas && nuevaColumna >= 0 && nuevaColumna < columnas) {
            if (!(nuevaFila === posicionAEvitar.fila && nuevaColumna === posicionAEvitar.columna)) {
                movimientoValido = true;
            }
        }
    }

    return { fila: nuevaFila, columna: nuevaColumna };
}


function crearMapaVacio(filas, columnas) {
    const mapa = [];
    for (let i = 0; i < filas; i++) {
        mapa.push([]);
        for (let j = 0; j < columnas; j++) {
            mapa[i].push(".");
        }
    }
    return mapa;
}


function imprimirMapa(filas, columnas, posHarry, posNewt) {
    const mapa = crearMapaVacio(filas, columnas);

    mapa[posHarry.fila][posHarry.columna] = "H";
    mapa[posNewt.fila][posNewt.columna] = "N";

    for (let i = 0; i < mapa.length; i++) {
        let fila = "";
        for (let j = 0; j < mapa[i].length; j++) {
            fila = fila + mapa[i][j] + " ";
        }
        console.log(fila);
    }
}



main();