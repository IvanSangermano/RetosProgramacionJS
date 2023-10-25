// Santa Claus está construyendo pirámides de hielo en el Polo Norte para entrenar a sus renos.
// Cada reno comienza en la cima de la pirámide y debe elegir el camino óptimo hacia abajo para recorrerlo en el menor 
//tiempo posible. Cada nivel tiene un número que determina el tiempo que necesita para llegar ahí.
//Al llegar a una posición, el reno solo puede deslizarse hacia abajo y en diagonal hacia la izquierda o la derecha. 
//Visualmente, la pirámide se ve así:
//     0
//    / \
//   7   4
//  / \ / \
// 2   4   6
// En código la representamos así:
// [
//   [0],
//   [7, 4],
//   [2, 4, 6]
// ]

//getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

console.log(getOptimalPath([[1], [3, 4], [9, 8, 1], [5, 8, 2, 3]])); // 5
// 0 -> 4 -> 1

//getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1

function getOptimalPath(path) {
    const calculateOptionNode = (nodes, index) => {
        return Math.min(nodes[index], nodes[index+1])
    }
    const shortestPath = path.reverse().reduce((acc, curr) => {
        console.log(acc, curr);
        return curr.map((node, idx) => {
            return node + calculateOptionNode(acc, idx)
        })
    })
    return shortestPath[0]
}