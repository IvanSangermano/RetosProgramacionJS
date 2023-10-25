checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter

function checkPart1(part) {
    const partArray = part.split('')
    let count = 0

    for (let i = 0; i < partArray.length; i++) {
        partArray[i] !== partArray[partArray.length-i-1] ? count += 1 : ""
    }
    return console.log(count <= 2 ? true : false);
}

function checkPart(part) {
    return console.log([...part].some((a, i, arr) => {
        let word = arr.filter((_, a) => a != i)
        return word.join("") == word.reverse().join("")
    }))
}