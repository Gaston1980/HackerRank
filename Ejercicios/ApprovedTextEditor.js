//https://www.hackerrank.com/challenges/one-week-preparation-kit-simple-text-editor/problem
// Explicacion: https://www.youtube.com/watch?v=txFuucg_Tf0
function processData(input) {
    input = input.split("\n")
    input.splice(0,1)
 
    let prevString = []// para conservar las versiones anteriores de String en cada transformacion y asi poder volver hacia atras
     let string = ""
     
     for(var i=0; i<input.length;i++){
         let elem = input[i]
         
         if(elem.length > 1){
             let splitted = elem.split(" ")
             let ops = splitted[0]
             let item = splitted[1]
         
         
         if(ops === "1"){
         prevString.push(string)    
         string = string + item
         
         }
         if(ops === "2"){
         prevString.push(string)
         string = string.slice(0, string.length - item)
         
         }
          if(ops === "3"){
           console.log(string[item-1])
 
         }
         }else{
         string = prevString.pop()
         }
         }
     }
      
    //NOTE: pasa todos los tests de Hacker Rank
    