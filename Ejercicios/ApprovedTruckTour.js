/*
Explanation: https://www.youtube.com/watch?v=s_x94vqfHOw
Dado un array 2D como argumento, buscar desde cual estacion de
petroleo comenzar el recorrido, partiendo con un tanque en 0 litros
se debe recorrer todas las estaciones.
Tener en cuenta cuantos litros puedo cargar en cada estacion
y la distancia a la proxima estacion. 1Km consume 1 Litro de petroleo.
Retornar el indice de la estacion donde debo comenzar el recorrido.

*/ 

function truckTour (petrolpumps){
    var row = petrolpumps.length;
    var initialPetrol = 0;
    var index = 0;

    console.log("PetrolPumps",petrolpumps)

    for (let i=0; i<row; i++){// rows
       
            initialPetrol = initialPetrol + petrolpumps[i][0]
            console.log("initialPetrol:",initialPetrol)
            initialPetrol = initialPetrol - petrolpumps[i][1]
            if(initialPetrol < 0){
            initialPetrol = 0;
            index = i + 1;
            console.log("Indice:",index)
        }
    }
    return index
}




var petrolpumps = [[1,5],[10,3],[3,4]] // Array 2D
console.log(truckTour(petrolpumps))
/* Indice Litros   Km to next estacion
     0      1       5
     1      10      3
     2      3       4

     Explicacion: se empieza con 0 litros, comprobar en cada estacion(petrolpump)
     si cargando el pretoleo que tiene me alcanza para llegar
     a la proxima estacion. Sino me alcanza, reseteo el tanque a 0
     y pruebo comenzar desde la siguiente estacion.
     Retornar el indice de la estacion desde donde debo comenzar el recorrido.
*/