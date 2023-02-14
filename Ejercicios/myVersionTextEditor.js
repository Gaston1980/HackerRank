function processData(input) {
    let cleaninput = input.slice(1)
    console.log("Cleaninput:",cleaninput)
    let prints =[];
    let prevString = []// para conservar las versiones anteriores de String en cada transformacion y asi poder volver hacia atras
    let string = ""
    for(let i=0; i<cleaninput.length;i++){
        if(cleaninput[i][0] === "1"){
        prevString.push(string)    
        var s = string.concat(cleaninput[i].slice(2))
        string = s
        console.log(s)
        }
        if(cleaninput[i][0] === "2"){
        prevString.push(string)
        var deleted = string.slice(-cleaninput[i].slice(2))
        var replaced = string.replace(deleted,"")
        console.log(replaced)
        string = replaced
        }
        if(cleaninput[i][0] === "3"){
          let index = cleaninput[i].slice(2)
          console.log(index)
          let character = string.charAt(index-1)
          console.log(character)
          prints.push(character)
          console.log(prints)
        }
        if(cleaninput[i][0] === "4"){
        string = prevString.pop()

        }
    }
    return prints.join("\n")//para que retorne cada caracter en una nueva linea
} 

//var input = [8,"1 abc", "3 3", "2 3","1 xy", "3 2", "4","4","3 1"]
var input = [8,"1 abcde", "1 fg", "3 6", "2 5", "4", "3 7","4","3 4"]
console.log(processData(input))
//NOTA: pasa solo 5 de 16 tests en HackerRank

/* VERSION HACKERRANK (xq el input no llega como array sino que llega asi:
    input = 8
            1 abc
            3 3
            2 3
            1 xy
            3 2
            4
            4
            3 1
function processData(input) {
   let newInput =  input.split("\n")
   let cleaninput = newInput.slice(1) //elimino primer elemento que no me sirve
    //console.log("Cleaninput:",cleaninput)
    //console.log("Length:",cleaninput.length)
    let prints =[];
    let prevString = []// para conservar las versiones anteriores de String en cada transformacion y asi poder volver hacia atras
    let string = ""
    for(let i=0; i<cleaninput.length;i++){
        if(cleaninput[i][0] === "1"){
        //console.log("entre al primer if")
        prevString.push(string)    
        var s = string.concat(cleaninput[i].slice(2))
        string = s
        //console.log(s)
        }
        if(cleaninput[i][0] === "2"){
        prevString.push(string)
        var deleted = string.slice(-cleaninput[i].slice(2))
        var replaced = string.replace(deleted,"")
        //console.log(replaced)
        string = replaced
        }
         if(cleaninput[i][0] === "3"){
          let index = cleaninput[i].slice(2)
          //console.log(index)
          let character = string.charAt(index-1)
          //console.log(character)
          prints.push(character)
         // console.log(prints)
        }
        if(cleaninput[i][0] === "4"){
        string = prevString.pop()

        }
    }
    return console.log(prints.join("\n"))
}
*/ 