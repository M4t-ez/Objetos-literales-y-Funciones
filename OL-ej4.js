const leer = require("prompt-sync")();

function main() {
    const dias = ["L", "M", "Mi", "J", "V", "S", "D"];
    const nombresDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const semana = [
        [
            { titulo: "Lavar ropa", fechaInicio: "10/10/2010", terminada: false },
            { titulo: "Jugar con mascota", fechaInicio: "10/10/2010", terminada: false }
        ],
        [],
        [
            { titulo: "Ordenar cuarto", fechaInicio: "10/10/2010", terminada: false },
            { titulo: "Ejercicio", fechaInicio: "10/10/2010", terminada: false }
        ],
        [],
        [],
        [],
        []
    ];
    let diaElegido;
    let indiceDia = -1;
    let numeroTarea;
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
        console.log("        ***Mostrando tareas del día " + nombresDias[indiceDia] + "**");

        for (let i = 0; i < semana[indiceDia].length; i++) {
            console.log("    " + (i + 1) + "- " + semana[indiceDia][i].titulo);
        }

        console.log("");
        numeroTarea = Number(leer("Seleccione una tarea a actualizar como Terminada?\n"));

        tarea = semana[indiceDia][numeroTarea - 1];

        console.log("");
        console.log("### Actualizando la tarea '" + tarea.titulo + "' del día " + nombresDias[indiceDia] + " como Terminada ###");
        console.log("");

        tarea.terminada = true;

        console.log(semana);
    }
}

main();