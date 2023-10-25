// Dasher consume 9W para recorrer 30 de distancia
// Dancer consume 15W para recorrer 30 de distancia
// Rudolph consume 21W para recorrer 30 de distancia
// Midu consume 30W para recorrer 30 de distancia

// El mejor trineo con el que puede recorrer
// la distancia es Dancer.

// Dasher recorre la distancia pero es peor trineo
// Rudolph y Midu no pueden recorrer la distancia con 20W.

const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

console.log(selectSleigh1(distance, sleighs)) // => "Dancer"

function selectSleigh(distance, sleighs) {
    let bestSleigh = {}
    let SubSleighs = sleighs.reverse().some(a => {
        if(distance*a.consumption <= 20){
            return bestSleigh = a
        }  
    })
    !SubSleighs ? bestSleigh.name = null : ""
    return bestSleigh.name
}

function selectSleigh1(distance, sleighs) {
    let sleigh = sleighs.filter(
        x => 20 / x.consumption >= distance
    )
    .reverse()[0];
    return sleigh ? sleigh.name : null
}