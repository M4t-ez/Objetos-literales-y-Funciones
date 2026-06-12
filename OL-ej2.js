const leer = require("prompt-sync")();

function main() {
    const dias = ["L", "M", "Mi", "J", "V", "S", "D"];
    const nombresDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const semana = [[], [], [], [], [], [], []];
    let diaElegido;
    let indiceDia = -1;
    let cantidad;
    let titulo;
    let fechaInicio;
    let terminada;
    let tarea;

    console.log("Seleccione dia a modificar: L-M-Mi-J-V-S-D");
    diaElegido = leer();

    for (let i = 0; i < dias.length; i++) {
        if (dias[i] === diaElegido) {
            indiceDia = i;
        }
    }

    if (indiceDia === -1) {
        console.log("Dia no válido.");
    } else {
        cantidad = Number(leer("Cuantas tareas deseas agregar?\n"));

        console.log("");
        console.log("### Agregando " + cantidad + " tareas al dia " + nombresDias[indiceDia] + " ###");

        for (let i = 0; i < cantidad; i++) {
            titulo = leer("    Titulo: ");
            fechaInicio = leer("    Fecha inicio (dd/mm/aaaa): ");
            terminada = leer("    Terminada (s/n): ");

            tarea = {
                titulo: titulo,
                fechaInicio: fechaInicio,
                terminada: terminada === "s"
            };

            semana[indiceDia].push(tarea);
            console.log("");
        }

        console.log("### Tareas agregadas ###");
        console.log("");
        console.log(semana);
    }
}

main();