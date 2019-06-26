/*
RECIBE UNA CADENA
-VERIFICA SI ES PALINDROMO
-CUENTA EL NUMERO DE PALABRAS EN LA CADENA
--CUENTA EL NUMERO DE LETRAS
-NUMERO DE VOCALES 
-CUENTA EL NUMERO DE CONSONANTES
-IMPRIMER TODA LA INFORMACION */ 


function palindromo(cadena){
    var comparar= cadena.split('').reverse().join(''); 
    if ( comparar == cadena ){
        console.log("Si es palindromo"); 
    }
    console.log("Si es palindromo"); 
    
}

    

function contarpalabras(cadena){
    cadena= cadena.split(' ');
    for (let i = 0; i <cadena .length; i++ ){
    var aux = cadena[i].split('');
    var contador= contador+1;      
    cadena[i]= aux.join('');

}
//return cadena split('').length; 
return contador; 

}

console.log(contarpalabras("anitalavalatina")); 

function numletras (cadena){
    for (let i = 0; i <cadena .length; i++ ){
        if (i==' ')continue;
        var cont=cont+1;
    }
    
        return cont;
//return cadena.split(" ").join('').length;  
    }

console.log("numero letras: "+ numletras("anitalavalatina")); 

function vocales(cadena){
    var numvocales = cadena.match(/[aeiou]/gi).length;
    console.log("Vocales:"+numvocales);
}

function consonantes(cadena){
    var conson= cadena.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    console.log("Las consonantes son:"+conson);
}

module.exports.palindromo = palindromo;
module.exports.contarpalabras = contarpalabras;
module.exports.numletras = numletras;
module.exports.vocales = vocales;
module.exports.consonantes = consonantes;
