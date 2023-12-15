//Pasa todos los tests de HackerRank
//Given a square matrix(Array 2D), calculate the absolute difference between the sums of its diagonals.
function diagonalDifference(arr) {
    const length = arr.length;
    console.log("Length:",length)
    let primaryDiagSum = 0;
    let secondaryDiagSum = 0;
    for (let i = 0; i < length; i++) {
        primaryDiagSum += arr[i][i];
        secondaryDiagSum += arr[i][length - i - 1];
    }
    return Math.abs(primaryDiagSum - secondaryDiagSum)
  }

  var arr = [[1,2,3],[4,5,6],[9,8,9]] // Array 2D
  console.log(diagonalDifference(arr))

  //NOTAS: Se recibe como argumento un array 2D
  //Este tipo de array se recorre por rows y columns
  //En el ejemplo que nos pasan, el array 2D quedaria asi:
  //     
  //     
  // i   0  1  2
  // 0   1  2  3  rows
  // 1   4  5  6  rows
  // 2   9  8  9  rows
  // Diagonal primaria seria : arr[0][0] arr[1][1]  arr[2][2]
  //                                1          5         9
  //
  // Diagonal secundaria seria : arr[0][2] arr[1][1]  arr[2][0]
  //                                  3         5           9
  // Math.abs() ---->para obtener el valor absoluto, que no sea ni positivo ni negativo
  // Ejem:  Math.abs(5 - 10)----> 5