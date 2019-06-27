/*RECIBE UNA CADENA
VERIFICA SI ES PALINDROMO
CUENTA EL NUMERO DE PALABRAS EN LA CADENA
CUENTA EL NUMERO DE LETRAS
NUMERO DE VOCALES 
CUENTA EL NUMERO DE CONSONANTES
IMPRIMER TODA LA INFORMACION */ 
 
var cad = require("./cadena");

const cade ="anita lava la tina";

var e= cad.palindromo(cade);
var d= cad.contarpalabras(cade);
var c= cad.numletras(cade);
var b= cad.vocales(cade);
var a= cad.consonantes(cade);

console.log("Es palindromo: "+cade);
console.log("Palabras: "+d);
console.log("Letras: "+c);
console.log("Vocales: "+b);
console.log("Consonantes: "+a);

