const leer = require("prompt-sync")();

function main() {

    saludarA("matias");
    saludarA("erik");
    saludarA("matias2");
}

function saludarA(nombreSaludar) {
    console.log("Hola " + nombreSaludar + "!");
}

main();