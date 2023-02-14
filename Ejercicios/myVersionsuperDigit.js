function superDigit(n, k) {
  var array = []
if(n.length === 1 && k === 1) return Number(n) 

for(let i =0; i<k; i++ ){
  array.push(n)
  console.log("Array:",array)
  }
var arrayJoined = array.join("")
var arraySplitted = arrayJoined.split("")
var arraySingles = arraySplitted.map(e => Number(e))
console.log("ArraySingles:", arraySingles)
var suma = arraySingles.reduce((acc,e)=> acc + e)
console.log("Suma:",suma)

if(suma < 10) return suma

n = String(suma)
k = 1
return superDigit(n, k)
/*var sum = suma
while(sum > 9){
 var string = sum.toString()
 var split = string.split("")
 toNumber = split.map(e => Number(e))
 var sum = toNumber.reduce((acc, e)=> acc + e)
}
  return sum
  */
}



n = "14807932704"
k = 5
console.log(superDigit(n, k))
//NOTA: funciona pero no pasa todos los tests de HackerRank, timeout! 6/11
// version con while comentada xq tampoco pasa todos los tests 7/11