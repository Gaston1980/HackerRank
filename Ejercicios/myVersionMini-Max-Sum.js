//Pasa todos los tests de hackerRank
/*Given five positive integers, find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers. Then print the respective minimum and maximum 
values as a single line of two space-separated long integers.*/

function miniMaxSum(arr) {
    let orderedArray = arr.sort((a,b)=> {return a - b})
    let maxInt = orderedArray.pop()
    let minSum = orderedArray.reduce((acc,elem)=>{return acc + elem},0)
    orderedArray.shift()
    let maxSum = orderedArray.reduce ((acc,elem)=> {return acc + elem},maxInt)
    console.log(minSum + " " + maxSum)
}


var arr =[9,2,10,7,3]
console.log(miniMaxSum(arr))

//Notas: primero ordeno el array de menor a mayor, luego saco el ultimo elemento
// para que me queden los 4 enteros menores y los sumo.
// luego saco el primer elemento del array y sumo los que quedan que son los mayores enteros
// y le sumo tambien el ultimo elemento que habia eliminado antes.
