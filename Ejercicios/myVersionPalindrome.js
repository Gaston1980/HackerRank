/* VERIFICAR SI EL STRING RECIBIDO (SOLO MINUSCULAS A-Z)ES O PUEDE SER UN PALINDROMO
SACANDO UN CARACTER SI FUERA NECESARIO.
RETORNAR -2 SI ES UN PALINDROMO 
RETORNAR -1 SI AL SACARLE UN CARACTER TAMPOCO SE LOGRA CONVERTIR EN PALINDROMO
RETORNAR EL INDICE DEL CARACTER EXTRAIDO SI AL HACERLO SE CONVIERTE EN UN PALINDROMO
NOTA: EL CARACTER PUEDER SER EXTRAIDO DESDE LA IZQUIERDA O DESDE LA DERECHA DEL STRING, COMENZANDO DESDE EL PRINCIPIO O EL FIN DEL STRING
HASTA LLEGAR AL MEDIO DEL MISMO
*/

function palindromeIndex(s) {
    var toArray = s.split("")
    var start = 0, end = s.length -1;
    if(toArray.reverse().join("") === s)return -2
    while(start < end){
        if (s.charAt(start) === s.charAt(end))// si las strings son iguales movemos los punteros hacia el centro
        {
            start++;
            end--;
            console.log("Start:",start)
            console.log("End:",end)
        }

        else{ 
            if(s.replace(s[start],"") === s.replace(s[start],"").split("").reverse().join("")) return start
            if(s.replace(s[end],"") === s.replace(s[end],"").split("").reverse().join("")) return end 
            return -1
    }
    
    }
    return -1
}

console.log(palindromeIndex("aaaaaaahaaananaaaahaaaaaaa"))
//funciona pero no pasa todos los tests de hackerrank