const cube = createCube1(3)
//   /\_\_\_\  2 espacios 1 triangulo 3 frentes
//  /\/\_\_\_\ 1 espacio 2 triangulos 3 frentes
// /\/\/\_\_\_\0 espacio 3 triangulos 3 frentes
// \/\/\/_/_/_/0 espacio 3 triangulos 3 frentes
//  \/\/_/_/_/ 1 espacio 2 triangulos 3 frentes
//   \/_/_/_/  2 espacios 1 triangulo 3 frentes
// Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: /, \, _ y (espacio en blanco).

function createCube(size) {
    espacios = " "
    frenteArr = "_\\"
    frenteAbj = "_/"
    costadoArr = "/\\"
    costadoAbj = "\\/"
    dibujo = ""

    for (let i = size; i > 0; i--) {
        dibujo += (espacios.repeat(Math.abs(i-1)) + costadoArr.repeat(size-Math.abs(i)+1) + frenteArr.repeat(size) + "\n")
    }
    for (let j = 0; j < size; j++) {
        dibujo += (espacios.repeat(Math.abs(j)) + costadoAbj.repeat(size-Math.abs(j)) + frenteAbj.repeat(size))
        j < (size-1) ? dibujo += "\n" : ""
    }

    return console.log(dibujo)
}

function createCube1(size) {
    head = []
    foot = []

    for (let i = 1; i <= size; i++) {
        head.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size))
        foot.push(" ".repeat(i - 1) + "\\/".repeat(size - (i-1)) + "_/".repeat(size))
    }
    
    return console.log([...head, ...foot].join("\n"))
}
