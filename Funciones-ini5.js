const leer = require("prompt-sync")();

function main(){
    let palabra = "matias esta enfermo";
    let palabrarecortada= "def";

    palabrarecortada= recortar(palabra, 2 , 7);

    console.log(palabrarecortada);

}

function recortar(palabra,posInicial,posFinal){

    return palabra.slice(posInicial , posFinal + 1);
}

main();