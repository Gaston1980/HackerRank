//Pasa todos los tests de HackerRank
//There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//Example
// n = 7;
// ar = [1,2,1,2,1,3,2]
//There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2
function sockMerchant(n, ar) {
    let counter = 1;
    let timesRepeat = [];
    let sortedArr = ar.sort((a,b) => {return a - b})
   
    for(let i=0; i<sortedArr.length; i++){
        if(sortedArr[i] === sortedArr[i+1]){
           counter ++ 
        }else{
           timesRepeat.push(counter)
           counter = 1
        }
    }
    let pairs = timesRepeat.map(e => {return Math.floor(e / 2)})
    //console.log("Pairs:",pairs)
    let result = pairs.reduce((acc, e) => acc + e,0)
    return result 
}
var ar = [1,2,1,2,1,3,2]
var n = 7
console.log(sockMerchant(n,ar))

//NOTAS: Aca tenemos que ordenar el array que recibimos por parametro de menor a mayor
// luego recorrerlo e ir comparando el elemento[i] con el siguiente elemento[i+1]
// si son iguales voy sumando 1 al contador iniciado en 1
// cuando ya no sean iguales, paro de contar y pusheo el valor del
// contador a un array auxiliar y reseteo a 1 al contador
// Asi sucesivamente. Una vez tenga el array con la cant de repeteciones por elemento
// voy a a ver cuantos pares puedo formar por cada cantidad, pusheando el resultado a un nuevo array aux
// Una vez que tengo el array con todos los pares posibles de armar por elemento, sumo todo
// y me va dar la cantidad de pares total posibles de formar