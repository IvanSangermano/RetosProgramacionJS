// 1- Dejar un espacio después de cada coma, punto o signo de exclamación o interrogación.
// 2- Eliminar múltiples espacios en blanco y dejar sólo uno.
// 3- Las preguntas sólo deben terminar con un signo de interrogación.
// 4- La primera letra de cada oración debe estar en mayúscula.
// 5- Poner en mayúscula la palabra "Santa Claus" si aparece en la carta.
// 6- Eliminar espacios al inicio y al final.
// 7- Quitar espacios antes de coma o punto.
// 8- La primer letra de la carta debe estar en mayúscula.
// 9- Poner un punto al final de la frase si no tiene puntuación.

//Las cartas las escriben inglés y aquí tenemos un ejemplo:

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log(fixLetter("  Hi Santa claus. I'm a girl from Barcelona ,Spain . please, send me a bike.  Is it possible?"))
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

// A tener en cuenta:

// No te tienes que preocupar por los signos de puntuación que no sean coma, punto o interrogación.
// Asegúrate de respetar los saltos de línea y espacios originales.

function fixLetter(letter) {
  let correction = letter                   // CUALQUIER EXPRESION REGULAR QUE NO GUARDEMOS ENTRE PARENTESIS NO SE PUEDE VOLVER A TOMAR COMO PARAMETRO ej: $1
    .replace(/([,.?!])([^,.?!])/g, '$1 $2') //1$ toma el primer simbolo, deja un espacio y 2$ toma la letra/numero (que no sea alguno de esos caracteres) siguiente
    .replace(/\s+/g, ' ')                   //Elimina multiples espacios en blancos
    .replace(/([,.?!]{2,})/g, $1 => $1[0])  //Que se encuentren los simbolos repetidos y deje solo 1 del que está
    .replace(/([.?!])(\s)([A-z])/g,         //La primera letra de cada oracion se hace mayuscula
      (_, $1, $2, $3) => $1 + $2 + $3.toUpperCase()
    )
    .replace(/(santa claus)/gi, 'Santa Claus') //cambia cualquier santa claus por Santa Claus la i del "gi" es para que sea indistinto las may/min que tenga
    .trim()                                    //Elimina los espacio en blanco atras y delante de el texto
    .replace(/\s([,.?!])/g, '$1')              //Toma cualquier espacio en blanco seguido de un simbolo y elimina el espacio en blanco
    .replace(/^([A-z])/g, $1 => $1.toUpperCase())//La primer letra de la oracion se pone en mayusculas (^ indica que no hay nada antes que la primer letra)
    .replace(/([^.?!])$/g, '$1.')              //Todo lo que no sea ninguno de estos simbolos y este al final de todo el string ("$" y "/g") termina con un "."
    return correction 
  }

