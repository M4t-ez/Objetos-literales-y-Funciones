const leer = require("prompt-sync")();

function main() {
    const dias = ["L", "M", "Mi", "J", "V", "S", "D"];
    const nombresDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const semana = [
        [{ titulo: "Lavar ropa", fechaCreacion: "2/3/2025", terminada: false }],
        [],
        [{ titulo: "Ordenar cuarto", fechaCreacion: "5/6/2024", terminada: false }],
        [],
        [],
        [{ titulo: "Practicar programacion", fechaCreacion: "17/11/2023", terminada: true }],
        []
    ];
    let diaElegido;
    let indiceDia = -1;

    console.log("Ingrese inicial del día a revisar tareas L-M-Mi-J-V-S-D?");
    diaElegido = leer();

    for (let i = 0; i < dias.length; i++) {
        if (dias[i] === diaElegido) {
            indiceDia = i;
        }
    }

    if (indiceDia === -1) {
        console.log("Dia no válido.");
    } else {
        console.log("### Mostrando " + semana[indiceDia].length + " tarea/s del día " + nombresDias[indiceDia] + " ###");
        console.log("");

        for (let i = 0; i < semana[indiceDia].length; i++) {
            console.log("    Tarea Nº " + (i + 1) + ":");
            console.log("        - " + semana[indiceDia][i].titulo);
            console.log("        - " + semana[indiceDia][i].fechaCreacion);
            if (semana[indiceDia][i].terminada === true) {
                console.log("        - Terminada");
            } else {
                console.log("        - Sin terminar");
            }
        }

        console.log("");
        console.log("### Fin de tareas ###");
    }
}

main();