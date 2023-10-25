const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 20, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers)) // => true

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])) // => false

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente

function checkStepNumbers(systemNames, stepNumbers) {
    return !systemNames.some((e, i) => stepNumbers[i] > stepNumbers[
        i + systemNames.slice(i + 1).indexOf(e) + 1
    ])
  }