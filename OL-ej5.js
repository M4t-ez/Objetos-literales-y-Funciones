const leer = require("prompt-sync")();

function main() {
    const nombresDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const semana = [
        [
            { titulo: "Lavar ropa", fechaInicio: "10/10/2010", terminada: false },
            { titulo: "Jugar con mascota", fechaInicio: "22/2/2012", terminada: true }
        ],
        [],
        [
            { titulo: "Ordenar cuarto", fechaInicio: "3/5/2025", terminada: true },
            { titulo: "Cocinar", fechaInicio: "7/8/2023", terminada: false },
            { titulo: "Ejercicio", fechaInicio: "1/1/2024", terminada: false }
        ],
        [],
        [
            { titulo: "Practicar programacion", fechaInicio: "17/11/2023", terminada: false }
        ],
        [],
        []
    ];
    let tarea;

    console.log("    ***Mostrando tareas de todos los días de la semana***");

    for (let i = 0; i < semana.length; i++) {
        if (semana[i].length > 0) {
            console.log("    - " + nombresDias[i] + ":");

            for (let j = 0; j < semana[i].length; j++) {
                tarea = semana[i][j];

                console.log("        " + (j + 1) + ". " + tarea.titulo);
                console.log("            - fechaInicio: " + tarea.fechaInicio);

                if (tarea.terminada === true) {
                    console.log("            - Terminada");
                } else {
                    console.log("            - Sin terminar");
                }
            }
        }
    }
}

main();