const leer = require("prompt-sync")();

const dolar_a_peso=1300;

function main(){
    let pesos =-1
    let dolares =-1
    pesos=Number(leer("ingresa los pesos a convertir:"));

    dolares = convertiradolar(pesos);
    console.log("Dolares: ", dolares);

}

function convertiradolar(pesosaconvertir){

   return pesosaconvertir/dolar_a_peso;
}

main();