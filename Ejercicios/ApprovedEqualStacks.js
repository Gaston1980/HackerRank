//Pasa todods los tests de HackerRank
//https://www.hackerrank.com/challenges/one-month-preparation-kit-equal-stacks/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-four
function equalStacks(h1, h2, h3) {
    let container =[h1,h2,h3]
    //console.log(container)
    let sumArray = container.map((e)=> e.reduce((acc,elem)=> acc + elem))
    
for(let i=0; i<Infinity;i++){//Loop for infinito, corta cuando se cumple la condicion
    //console.log(sumArray)
    //console.log(container)
   if(sumArray.every((e)=> e === sumArray[0]))//si se cumple la condicion de que todos los elementos de sumArray son iguales, salgo del for y return el valor
   break; 
    let maxSum = Math.max(...sumArray)
    //console.log(maxSum)
    let maxSumIndex = sumArray.indexOf(maxSum)
    //console.log(maxSumIndex)
    let shifted = container[maxSumIndex].shift()
    //console.log(shifted)
    //console.log(container)
    sumArray[maxSumIndex] = sumArray[maxSumIndex] - shifted
    //console.log(sumArray)
}
return sumArray[0]
}

var h1 = [3, 2, 1, 1, 1];
var h2 = [4, 3, 2];
var h3 = [1, 1, 4, 1];
console.log(equalStacks(h1,h2,h3))

//Notas: primero creamos un array contenedor que va a contener a arrays h1,h2,h3
//Luego vamos a crear un array donde vamos a guardar la suma de h1, h2, h3
//Dentro de un for loop infinito, vamos a repetir los siguientes paso hasta que se cumpla
// la condicion de corte y retorne el value la funcion
// 1)Encontrar cual es el valor maximo dentro de sumArray
// 2)Encontrar el indice de ese maxSum
// 3)Eliminar con shift el elemento en container segun el indice maxSumIndex
// 4)Restar al maxSum el elemento shifteado
// 5)Repetir todas estas operaciones hasta que todos los elem dentro de
// sumArray sean iguales, porque quiere decir que encontramos a los 3 stacks con la misma altura
// Retornar la altura 
// Video explicativo: https://www.youtube.com/watch?v=6po8ugf7F8M