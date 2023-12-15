//Pasa todos los tests de HackerRank
//Given an array of integers, where all elements but one occur twice, 
//find the unique element.
//Example
// [1,2,2,1,5,6,2,6]
//The unique element is 5.
// The function return an integer
function lonelyinteger(a) {
  
    for (var i = 0; i < a.length; i++) {
      let repeats = a.filter((e)=> e === a[i])
      //console.log("Repeats:",repeats)
        if (repeats.length === 1){
          let result = repeats.join()
          return result
        }
      }
    }


var a = [1,2,2,1,5,6,2,6]
console.log(lonelyinteger(a))

//NOTAS: recorro el array que me llega por argumento con un for
// en cada posicion [i] comparo el elemento con todos los del array
// para ver si se repite utilizando un filter
// chequeo si el nuevo array filtrado contiene solo 1 elemento
// de ser asi retorno ese elemento utilizando el .join()
// para que devuelva solo el elemento y no el array