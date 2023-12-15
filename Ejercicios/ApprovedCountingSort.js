// https://www.hackerrank.com/challenges/one-month-preparation-kit-countingsort1/problem
// Explanation : https://edvins.io/counting-sort-1-code-challenge
// Dado un array como argumento, devolver un array de frecuencia de 100 elementos 0 donde
// en cada posicion va a representar el valor del elemento del array y el elelemtno en el array de frecuencia
// va a representar la cantidad de veces se repite
function countingSort(arr) { // arr =  [2,2,4,4,1]
    let freqArr = new Array(100).fill(0); // [0,0,0,0,0,....]
  
    for (let value of arr) { // recorro cada elemento del array -->value=2                 value=2                     value=4                 value=4                     value=1
      freqArr[value] += 1; // asi me va quedando                   [0,0,1,0,0,0 ......]  [0,0,2,0,0,0 ......]  [0,0,2,0,1,0 ......]  [0,0,2,0,2,0 ......]  [0,1,2,0,2,0 ......]
    }
  
    return freqArr;
  }
  var arr = [2,2,4,4,1]
  console.log(countingSort(arr))

  /*We create a frequency array (freqArr) variable and 
   begin initialising (new Array()) a new 100 elements array 
   where each value is 0 (Array.fill()).
   Then we use a for in loop to go through the given array. 
   During each loop, we use value of the given array (i) to access
   freqArr through bracket notation, where we increment its value 
   by 1.
  

  */ 
