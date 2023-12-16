//Pasa todos los tests de HackerRank
//https://www.hackerrank.com/challenges/one-month-preparation-kit-caesar-cipher-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two
function caesarCipher(s, k) {
    if(k > 26){//26 es la cant total de letras del abc
    k = k%26 // aca obtengo realmente lo que tengo que cortar luego de dar al menos una vuelta el abc
    }
    const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const ABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let sliceabc = abc.slice(0,k);
    let sliceLeftabc = abc.slice(k)
    let sliceABC = ABC.slice(0,k)
    let sliceLeftABC = ABC.slice(k)
    let newabc = []
    let newABC = []
    newabc.push(sliceabc)//pusheo el corte de k al final
    newabc.unshift(sliceLeftabc)//pusheo el resto del array al principio
    newABC.push(sliceABC)
    newABC.unshift(sliceLeftABC)
    let flatabc = newabc.flat(Infinity)//aca dejo un solo array con strings dentro
    let flatABC = newABC.flat(Infinity)
    //console.log(abc,ABC,sliceabc,sliceABC,newabc,newABC,flatabc,flatABC,sliceLeftabc,sliceLeftABC)
    let convertedWord = []
    let splittedS = s.split("")//convierte el string en array
    
for(let i=0; i<splittedS.length; i++){
    if(abc.includes(splittedS[i])){//chequeo si es minuscula
        let index = abc.findIndex((e) => e === splittedS[i])
        convertedWord.push(flatabc[index])
    }else if(ABC.includes(splittedS[i])){//chequeo si es una mayuscula
        let index = ABC.findIndex(e => e === splittedS[i])
        convertedWord.push(flatABC[index])//busco en el array rotado el equivalente segun posicion
    }else{////sino es letra minuscula ni mayuscula
        convertedWord.push(splittedS[i])
        
    }  
}
return convertedWord.join("")//Devuelvo lo que hay suelto dentro del array, convertido a una string
}
var s = "middle-Outz"
var k = 28
console.log(caesarCipher(s,k))