//getCompleted('01:00:00', '03:00:00') // '1/3'
// getCompleted('02:00:00', '04:00:00') // '1/2'
// getCompleted('01:00:00', '01:00:00') // '1/1'
//getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('02:10:10', '04:30:30') // '1/3'
// getCompleted('03:30:30', '05:50:50') // '3/5

// function getCompleted(part, total) {
//     let indexPart = part.indexOf(":")
//     let indexTotal= total.indexOf(":")
//     let partDivided = Number(part.slice(0,indexPart))
//     let totalDivided = Number(total.slice(0,indexTotal))

//     if(partDivided == totalDivided){
//         partDivided = 1
//         totalDivided = 1 
//     } else { 
//         if(part.slice(0,2) % 2 === 0 && total.slice(0,2) % 2 === 0){
//             while (partDivided % 2 === 0) {
//                 partDivided = partDivided / 2
//                 totalDivided = totalDivided / 2
//             }
//         }
//     }
//     partDivided == 0 ? partDivided = 1 : ""
//     totalDivided == 0 ? totalDivided = 1 : ""
//     return `${partDivided}/${totalDivided}`
// }

function getCompleted(part, total) {
    const MCD = (a, b) => {
        let c;
        while (b) {
          c = b
          b = a % b
          a = c
        }
        return a
    }

    part = part.split(":")
    total = total.split(":")

    let partRed = +part[0] * 3600 + +part[1] * 60 + +part[2]
    let totalRed = +total[0] * 3600 + +total[1] * 60 + +total[2]
    const MCDiv = MCD(partRed, totalRed)

    const partEnd = partRed / MCDiv
    const totalEnd = totalRed / MCDiv

    return partEnd + "/" + totalEnd
}