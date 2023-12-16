//Pasa todos los tests de HackerRank
//The median of a list of numbers is essentially its middle element after sorting.
//The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
//Example
//arr = [5, 3, 1, 2, 4]
//The sorted array arr' = [1, 2, 3, 4, 5]. The middle element and the median is 3.
function findMedian(arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    let halfLength = sortedArray.length / 2
    let median = Math.floor(halfLength);
    return sortedArray[median];
}

//NOTAS:se aclara que el length del arr que recibo por argumento va ser siempre impar
// por lo que no tengo que validar y hacer un caso si fuera par
    