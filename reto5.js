const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let combinaciones = []

    combinaciones.push( [], [giftsCities[0]])
    giftsCities.shift()

    giftsCities.map(x=> {
        let newList = combinaciones.map(combinaciones => {
            let _combinacion = [...combinaciones]
            if(_combinacion.length < maxCities) {
                _combinacion.push(x)
            }
            return _combinacion
        })
        combinaciones = combinaciones.concat(newList)
    })

    combinaciones.shift()

    return Math.max(...combinaciones.map(x=> {
        let sum = x.reduce((total, num) => total + num)
        return sum > maxGifts ? 0 : sum
    }))
}

