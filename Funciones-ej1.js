const leer = require("prompt-sync")();
function main() {
    const personajes = [
        "Harry Potter",
        "Hermione Granger",
        "Ron Weasley",
        "Albus Dumbledore",
        "Severus Snape",
        "Lord Voldemort",
        "Draco Malfoy",
        "Sirius Black",
        "Rubeus Hagrid",
        "Luna Lovegood"
    ];
    let opcion=-1;
    let indiceImpostor=-1;
    let impostor=-1;

    mostrarPersonajes(personajes);

    opcion = Number(leer("    "));

    indiceImpostor = generarImpostor(personajes);
    impostor = personajes[indiceImpostor];

    console.log("");
    informarResultado(opcion, indiceImpostor, impostor);
}

function mostrarPersonajes(personajes) {
    console.log("Selecciona un número de personaje para encontrar al impostor:");
    for (let i = 0; i < personajes.length; i++) {
        console.log("    " + (i + 1) + " - " + personajes[i]);
    }
}

function generarImpostor(personajes) {
    return Math.floor(Math.random() * personajes.length);
}

function informarResultado(opcionElegida, indiceImpostor, nombreImpostor) {
    if (opcionElegida - 1 === indiceImpostor) {
        console.log("¡Adivinaste! El impostor es: " + nombreImpostor);
    } else {
        console.log("¡Oh no! No has adivinado el impostor. Algo misterioso está ocurriendo...");
        console.log("Cuidado con " + nombreImpostor + "!");
    }
}



main();