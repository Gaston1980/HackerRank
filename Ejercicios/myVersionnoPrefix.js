function noPrefix(words) {
const bad = "BAD SET";
const good = "GOOD SET";
let array = []
 for(let i = 0; i<words.length; i++){
    for(let j=i+1; j<words.length;j++){
        if(words[i].includes(words[j]) || words[j].includes(words[i])|| words[i] === words[j]){
            array.push(words[j])
            console.log(words[j])
            console.log(words[i])
            console.log(array)
            
        } 
    }
 }
 console.log(array)
 if(array.length){
    console.log(bad +"\n"+ array[array.length - 1])
 }else{
    console.log(good)
 }
}

//var words = ["aab", "defgab", "abcde", "aabcde", "bbbbbbbbbb", "jabjjjad"]
//var words =["aab","aac","aacghgh","aabghgh"]
var words = ["aab","defgab","abcde","cedaaa","bbbbbbbbbb","jabjjjad"]                
//NOTA: solo pasa 10 tests de 42 HackerRank                                     


console.log(noPrefix(words))