
/* USAR RECURSIVIDAD
Dado n = un string numero entero  y k=un entero que representa la
cant de veces se va a concatenar n.
Eencontrar el ultimo y unico digito, sumando cada digito de individualmente hasta que
el resultado final sea de un solo digito. Retornar un entero
Ejem:
n="15"
k=5
n*k="1515151515"
1+5+1+5+1+5+1+5+1+5 ---> 30 ---> 3+0 --->3 (como es un solo digito paro aca y devuelto esto)
SuperDigit= 3
Return 3
NOTA: conviene resolver primero la suma de digitos de n hasta llegar a un digito como resultado
 y luego multiplicarlo por k
*/ 

function superDigit(n, k) {
 if (n.length === 1) return n;
 const digit = (n.split('').reduce((res, d) => res + Number(d)) * k) + ""
 console.log("Digit",digit)
 return superDigit(digit, 1)
}

n = "9"
k = 5
console.log(superDigit(n, k))

/* Explicacion:
In the code above, we set our base case with the if statement. 
If the length of n is equal to 1, we will return n. 
The following code we name our constant variable digit, 
and with digit we split the large string amount to 
individual string elements and then we use the reduce method 
to add up all the amounts which we define within the parenthesis.
 In it we have the accumulator as res (result) 
 and the current value as d. Then within the arrow function 
 we add the res to d in which we used the Number method 
 to change it from a string to a number and afterwards 
 we multiply by k and then lastly change it back to a string. 
 And of course our last line of code will be to call 
 the superDigit function with the parameters digit 
 and 1 so that if the amount is still not just a number 
 it will get passed through the function again.
NOTA:
Concatenar el número con una cadena o string vacío
Por último, puedes concatenar el número con una cadena o
string vacío para poder conformar la cadena que estás buscando,
como puedes ver a continuación:

let num = 10;
console.log («Convertir número 10 a String =», (num + "") );

// devuelve como resultado Convertir número 10 a String = "10"
*/ 