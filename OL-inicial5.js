const leer = require("prompt-sync")();
function main (){
    const objeto = {
    prop1: "A",
    prop2: "B",
    prop3: "C"
};

let temp;

temp = objeto.prop1;
objeto.prop1 = objeto.prop3;
objeto.prop3 = temp;

console.log(objeto);
}
main ();