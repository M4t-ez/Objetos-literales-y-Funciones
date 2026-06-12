const leer = require("prompt-sync")();
function main (){
    const objeto = {
    prop1: 1,
    prop2: "B",
    prop3: false,
    prop4: "D31",
    prop5: "Enter",
    prop6: true,
    prop7: 3.4
};

objeto.prop1 = true;
objeto.prop4 = 9.3;
objeto.prop7 = "Hello world";

console.log(objeto);


}
main ();