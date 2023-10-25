//console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10))
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

//carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

//carryGifts(['game', 'bike', 'book', 'toy'], 4)
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

//carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro

//console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 2));

// function carryGifts1(gifts, maxWeight) {
//     if (!gifts.every(gift => maxWeight >= gift.length)) {
//       return []
//     }
//     let carry = ['']
//     gifts.map(gift => {
//       const previousWeight = carry.at(-1).replace(/ /g, '').length
//       if ((previousWeight + gift.length) <= maxWeight) {
//         carry[carry.length - 1] += ' ' + gift
//         carry[carry.length - 1] = carry[carry.length - 1].trim()
//         return
//       }
//       carry.push(gift)
//     })
//     return carry
// }

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 12))

function carryGifts(gifts, maxWeight) {
    let bag = [];
    let actuallyBag = 0;

    gifts.map((gift) => {
        let currBag = bag[actuallyBag]  ? bag[actuallyBag].replace(/ /g, '').length : ""
        if(gift.length > maxWeight) return
        if(bag.length == 0 && gift.length <= maxWeight) return bag.push(gift)
        return currBag + gift.length <= maxWeight 
        ? bag[actuallyBag] += ` ${gift}` 
        : (bag.push(gift), actuallyBag++)
    });
    return bag;
}


