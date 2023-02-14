// Explanation YouTube: https://www.youtube.com/watch?v=Nje2HJxcZ24
/*Chequear si al ordenar las filas/rows del Grid Array de la a-z
sus columnas tambien quedan ordenadas de arriba hacia abajo de la a-z tambien
Retornar Yes si se puede sino retornar NO
Ejem: c a b  ---->  a b c
      h j i  ---->  h i j
      o n m  ---->  m n o
      return YES  --- en este caso las columnas quedaron ordenadas tambien



*/



function gridChallenge(grid) {
let row = [];
 for(let i=0; i<grid.length;i++){
    let sorted = grid[i].split("").sort() 
    //var sorted2 = splitted.sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)
    row.push(sorted)
   
 }
 console.log("Row:",row)
 let column = row[0].length
 console.log("Column:",column)
 for(let j=0; j<row.length -1; j++){
   for(let h=0; h<column; h++){
      if(row[j][h] > row[j+1][h]) return "NO"
      console.log(row[j][h])
      console.log(row[j+1][h])
   }
 }
 return "YES"
}   
var array = ["cba","omn","azb"]
console.log(gridChallenge(array))
//NOTA: pasa los test HackerRank