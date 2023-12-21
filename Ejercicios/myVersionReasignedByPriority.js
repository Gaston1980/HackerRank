//Dado un array de enteros donde cada uno representa el nivel de prioridad de una actividad
// Devolver un array donde se represente cada actividad segun su prioridad donde 1
// es lo mas prioritario. No cambiar el orden de las actividades, sino asignarle su nivel de prioridad

const reasignedPriorities = (priorities) => {
    let newarray = new Set(priorities)
    let sortedArray = Array.from(newarray).sort((a,b)=> {return a - b})
    console.log(sortedArray)
    let index = []
    console.log(index) 

    for(let i=0; i<priorities.length; i++){
        let indice = sortedArray.indexOf(priorities[i]) + 1
        console.log(indice)
        index.push(indice)
    }
return index
}


var priorities = [2,5,2,6,8,5]
console.log(reasignedPriorities(priorities))

//Challenge de entrevista tecnica Live Code de 30 min para Remotasks

