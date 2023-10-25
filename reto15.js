// Arriba coloca  :     P     R     B     P
// Si abajo tiene :    P P   B P   R P   B R

// Las combinaciones también son al revés. Por ejemplo, si abajo es B P, 
// arriba es R. Pero también será R si abajo es P B. También si abajo tienes 
// dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo 
// es B B, arriba es B.

//    R
//   P B
//  R B B
// B P R P

//decorateTree('B B') // ['B', 'B B']
//decorateTree('R R P R R') //["R","R R","P B P","R B B R","R R P R R"]

console.log(decorateTree('B P R P'))

// function decorateTree(base) {
//     let treeBash = [base]
//     let i = 0
//     reduceBase = (a, b) => {
//         if(a == b) return a
//         else {
//             return ['B', 'R', 'P'].filter(x => x != a && x != b).pop()
//         } 
//     }

//     while(treeBash[i].length !== 1){
//         let newBash = []
//         treeBash[i].split(" ").reduce((acc, crr) => {
//             newBash.push(reduceBase(acc, crr))
//             return crr
//         })
//         treeBash.push(newBash.join(" "))
//         i++
//     }

//     return treeBash.reverse()
// }

function decorateTree(base) {
    const dict = {
        "PP": "P",
        "BB": "B",
        "RR": "R",
        "BP": "R",
        "PB": "R",
        "BR": "P",
        "RB": "P",
        "PR": "B",
        "RP": "B"
    }
    
    base = base.split(" ")
    let list = new Array(base.length).fill(base)
    return list.reduce((total, x) =>
        total.concat(
        [new Array(total.at(-1).length - 1).fill("-").map((_, i) => {
            return dict[total.at(-1).slice(i, i + 2).join("")]
        })]
        ), [base]
    ).slice(0, base.length).map(x => x.join(" ")).reverse()
}