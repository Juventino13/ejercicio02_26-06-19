/*
RECIBE UNA CADENA
-VERIFICA SI ES PALINDROMO
-CUENTA EL NUMERO DE PALABRAS EN LA CADENA
--CUENTA EL NUMERO DE LETRAS
-NUMERO DE VOCALES 
-CUENTA EL NUMERO DE CONSONANTES
-IMPRIMER TODA LA INFORMACION */ 
 

function palindromo(cadena){
    cadena=cadena.split(' ').join('');
    var comparar= cadena.split(' ').reverse().join('');
    if ( comparar === cadena ){
        return comparar;
    }
}
function contarpalabras(cadena){
    cadena= cadena.split(' ');
    for (let i = 0; i <cadena.length; i++ ){
    var aux = cadena[i].split(' ');      
    cadena[i]= aux.join('');
    var contador=i;
    }
    return contador+1; 
}

function numletras (cadena){
    cadena=cadena.split(' ').join('');
    for (let i = 0; i <cadena.length; i++ ){
        var cont=i+1;
    }
    return cont;
}

function vocales(cadena){
    var numvocales = cadena.match(/[aeiou]/gi).length;
    return numvocales;
}

function consonantes(cadena){
    var conson= cadena.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    return conson;
}

module.exports.palindromo = palindromo;
module.exports.contarpalabras = contarpalabras;
module.exports.numletras = numletras;
module.exports.vocales = vocales;
module.exports.consonantes = consonantes;
