const leer = require("prompt-sync")();

function main() {
    let contador=-1;

    contador = Number(leer("Ingresa el numero desde donde iniciar la cuenta regresiva: "));

    cuentaRegresivaDesde(contador);
}

function cuentaRegresivaDesde(segundosInicial) {
    let contador = segundosInicial;

    const intervalo = setInterval(() => {
        console.log(contador);

        if (contador === 0) {
            clearInterval(intervalo);
            console.log("Fin de la cuenta regresiva!");
        }

        contador--;
    }, 1000);
}



main();