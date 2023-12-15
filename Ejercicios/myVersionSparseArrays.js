//Pasa todos los tests de hackerRank
//There is a collection of input strings and a collection of query strings. 
//For each query string, determine how many times it occurs in the list of input strings. 
//Return an array of the results.
//Example:
//strings = ["a","b","c","a","c"]  queries = ["a","b","c"]
// Result: [2,1,2] --->cant de veces que se repite cada query en el array de strings
function matchingStrings(strings, queries) {
    let contador = 0;
    let results = [];
    for(i=0; i<queries.length; i++){
        for(j=0; j<strings.length; j++){
            if(queries[i] === strings[j]){
               contador = contador + 1;
            
        }
       
            }
            results.push(contador)
            contador = 0;
            
    }
     return results
}
 var strings = ["aba","baba","aba","xzxb"]
 var queries = ["aba","xzxb","ab"]
 console.log(matchingStrings(strings,queries))

 //NOTAS: for anidados funciona asi:

 //  i  j    i  j  etc...
 //  0  0    1  0
 //  0  1    1  1
 //  0  2    1  2
 //  0  3    1  3
 //  0  4    1  4

 // el for de adentro (j) es el que hace todo el recorrido
 // en cada parada del indice de (i)
 // Fijarse bien el scope del if, y de cada for para saber
 // donde ir sumando al contador (dentro del if)
 // donde pushear el contador total (fuere del for j, dentro del for i)
 // donde resetear el contador (fuere del for j, dentro del for i)
 // donde retornar el resultado final (fuera del for i, antes de la llave que cierra la funcion)