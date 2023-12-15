//Pasa todos los tests de HackerRank
//A pangram is a string that contains every letter of the alphabet. 
//Given a sentence determine whether it is a pangram in the English alphabet. 
//Ignore case. Return either pangram or not pangram as appropriate.

function pangrams(s) {
   let counter = 0;
   let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]//26
   let lowerCases = s.toLowerCase()
   //console.log(lowerCases)
   for(let i=0; i<alphabet.length; i++){
    if(lowerCases.includes(alphabet[i]))
    counter += 1
   }
   if(counter === 26) return "pangram"
   return "not pangram"
}

var s = "We promptly judged antique ivory buckles for the next prize"
console.log(pangrams(s))

//NOTAS: recorro la frase que viene por argumento, pasandola antes a minusculas
// y chequeo con el metodo includes() si contiene la letra del abc
// si la tiene voy sumando 1 al contador
// si el contador llega al total de las letras del abcdario (26)
//quiere decir que es pangram, sino, not pangram