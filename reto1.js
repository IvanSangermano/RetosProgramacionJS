const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    let giftsEnvolved = []
    gifts.map((gift, i) => {
        const topes=`${"*".repeat((gift.length+2))}`
        const medio=`\n*${gift}*\n`
        const giftCambiado = topes + medio + topes
        
        giftsEnvolved[i] = giftCambiado
    
    })
    return giftsEnvolved
}

/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

console.log("arreglo", wrapping(gifts))