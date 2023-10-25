const heights1 = [1, 3, 8, 5, 2]
//console.log(checkJump(heights1)); // true
/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/
const heights2 = [1, 7, 3, 5]
//console.log(checkJump(heights2)); // false
/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/

//console.log(checkJump([1, 2, 2, 2, 1,1,1])) //true
//console.log(checkJump([1, 2, 3])) //false
//console.log(checkJump([1,1,1]));
//console.log(checkJump([5, 4, 3, 2, 1])) //false

// FUNCIONA TAMBIEN
function checkJump(heights) {
    let index = heights.indexOf(Math.max(...heights))

    return !heights.some((a, i, heights) => {  
        if(heights[index] == heights[heights.length-1] || heights[index] == heights[0]) return true; 
        if(a > heights[i+1] && i<index) return true;
        if(a < heights[i+1] && i>index) return true;
    })
}

function checkJump1(heights) {
    const left = heights.splice(0, heights.indexOf(Math.max(...heights)))
    const conditionLeft = left
      .slice(1)
      .every((l, i) => l >= left[i])
    const conditionRight = heights
      .slice(1)
      .every((h, i) => h <= heights[i])
  
    return conditionLeft && conditionRight && !!left.length && heights.length > 1
  }