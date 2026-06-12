const leer = require("prompt-sync")();
function main (){
    const objeto = {
    prop1: "A",
    prop2: "B",
    prop3: "C"
};

delete objeto.prop2;

console.log(objeto);



}
main ();