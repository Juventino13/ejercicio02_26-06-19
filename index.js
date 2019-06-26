/*RECIBE UNA CADENA
VERIFICA SI ES PALINDROMO
CUENTA EL NUMERO DE PALABRAS EN LA CADENA
CUENTA EL NUMERO DE LETRAS
NUMERO DE VOCALES 
CUENTA EL NUMERO DE CONSONANTES
IMPRIMER TODA LA INFORMACION */ 

var cad = require("./cadena");

const cadena ="anita lava la tina";

var a= cad.consonantes(cadena);
var b= cad.vocales(cadena);
var c= cad.numletras(cadena);
var d= cad.contarpalabras(cadena);
var e= cad.palindromo(cadena);