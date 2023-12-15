//Pasa todos los tests de HackerRank
//Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
//Lily decides to share a contiguous segment of the bar selected such that:
//The length of the segment matches Ron's birth month, and,
//The sum of the integers on the squares is equal to his birth day.
//Determine how many ways she can divide the chocolate.
function birthday(s,m,d) {
    let counter = 0
    let fraction = m;
    for(let i=0; i<s.length; i++){
        let slicedChocolate = s.slice(i,i+fraction)//Voy partiendo el chocolate en la fraccion determinada
        let days = slicedChocolate.reduce((acc,elem)=> {return acc + elem}) //sumo los numeros de la fraccion de chocolate
        //console.log("Days:",days)
        if(days === d) counter += 1 //si la suma es igual al dia de cumpleaños, aumento en 1 al contador
    }
   return counter// devuelvo la cantidad de fracciones de chocolates que son posibles cortar, que cumple la condicion
}
var s = [2,2,1,3,2]// [2,2]--> 2+2 [2,1]-->2+1 [1,3]--> 1+3 [3,2]-->3+2 (Solo 2 veces da 4)
var m = 2; //el length del slice()
var d = 4; //la suma total del reduce, si coincide, se aumenta el contador en 1
console.log(birthday(s,m,d))

//NOTAS:
//Primero tenemos que saber el largo max de la fraccion de chocolate
// que debe ser igual al numero de mes de cumple
// Luego, se debe sumar los numeros que integran esa fraccion de chocolate
// Si la suma es igual al dia de cumpleaños, es una fraccion valida y se aumenta el contador.
// Se retorna el valor del contador final
//https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one