
//Pasa todos los tests de HackerRank
/*Given an array of integers, calculate the ratios of its elements 
that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line 
with  places after the decimal.*/
function plusMinus(arr) {
    
    let positives = [];
    let negatives = [];
    let zeros = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0) positives.push(arr[i])
        if(arr[i] < 0) negatives.push(arr[i])
        if(arr[i] === 0) zeros.push(arr[i])
    }
    let positivesRatio = (positives.length / arr.length).toFixed(6)
    let negativesRatio = (negatives.length / arr.length).toFixed(6)
    let zerosRatio = (zeros.length / arr.length).toFixed(6)
    console.log(positivesRatio + "\n" + negativesRatio + "\n" + zerosRatio)
}

var arr = [1,1,1,0,-1,-1]
console.log(plusMinus(arr))

//NOTAS: el metodo .toFixed(n) imprime la cantidad de decimales que indicamos 
// en n, ejem, .toFixed(4)  ----> .0000   hasta cuatro decimales
// "\n" dentro de un console.log, imprime en una nueva linea
