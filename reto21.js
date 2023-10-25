console.log(printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 },
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ]))
  
//   function printTable(gifts) {
//     const maxStringName = Math.max(...gifts.map(x => x.name.length), 4)
//     const maxStringQuan = Math.max(...gifts.map(x => x.quantity.toString().length), 8)

//     let listado = gifts.map((gift) => {
//         return "| "+ gift.name + ` `.repeat(gift.name.length < maxStringName ? maxStringName - gift.name.length : 0) + " | " 
//         + gift.quantity + ` `.repeat(gift.quantity.toString().length < maxStringQuan ? maxStringQuan - gift.quantity.toString().length  : 0) + " |"
//      })

//     return `+`.repeat(maxStringName+maxStringQuan+7) + "\n" 
//     + "| Gift" + ` `.repeat(maxStringName > 4 ? maxStringName-4 : 0) 
//     + " | Quantity" + ` `.repeat(maxStringQuan > 8 ? maxStringQuan-8 : 0) + " |" + "\n" 
//     + "| " + `-`.repeat(maxStringName) + " | " + `-`.repeat(maxStringQuan) + " |"+ "\n" 
//     + listado.join("\n") + "\n"
//     + `*`.repeat(maxStringName+maxStringQuan+7)
//   }

function printTable(gifts) {
    gifts = gifts.map(x => [x.name, '' + x.quantity])
    gifts.unshift(["Gift", "Quantity"])

    let lengthGift = Math.max(...gifts.map(x => x[0].length))
    let lengthQuantity = Math.max(...gifts.map(x => x[1].length))

    gifts.splice(1, 0, ["-".repeat(lengthGift), "-".repeat(lengthQuantity)])
    let tables = gifts.reduce((str, x) => str +
        "| " + x[0].padEnd(lengthGift) +
        " | " + x[1].padEnd(lengthQuantity) +
        " |" + "\n", ''
    )

    let top = "+".repeat(lengthGift + lengthQuantity + 7) + "\n"
    let bottom = "*".repeat(lengthGift + lengthQuantity + 7)

    return top + tables + bottom
}
  
/*
   ++++++++++++++++++++++++++++++++++++++
   | Gift               | Quantity      |
   | ---------------------------------- |
   | PlayStation 5      | 9234782374892 |
   | Book Learn Web Dev | 23531         |
   **************************************
    +++++++++++++++++++++
    | Gift   | Quantity |
    | ----   | -------- |
    | Game   | 2        |
    | Bike   | 1        |
    | Bookan | 3        |
    *********************
  */