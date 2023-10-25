console.log(executeCommands([
    'MOV 5,V00',  // V00 es 5
    'MOV 10,V01', // V01 es 10
    'DEC V00',    // V00 ahora es 4
    'ADD V00,V01' // V00 = V00 + V01 = 14
  ]))
  
  // Output: [14, 10, 0, 0, 0, 0, 0]
  
  //executeCommands([
    'MOV 255,V00', // V00 es 255
    'INC V00',     // V00 es 256, desborda a 0
    'DEC V01',     // V01 es -1, desborda a 255
    'DEC V01'      // V01 es 254
  //])
  
  // Output: [0, 254, 0, 0, 0, 0, 0]
  
  //executeCommands([
    'MOV 10,V00', // V00 es 10
    'DEC V00',    // decrementa V00 en 1  <---┐
    'INC V01',    // incrementa V01 en 1      |
    'JMP 1',      // bucle hasta que V00 sea 0 ----┘
    'INC V06'     // incrementa V06 en 1
  //])
  
  // Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
/*
  MOV Vxx,Vyy: copia el valor del registro Vxx al registro Vyy;
  MOV n,Vxx: asigna la constante numérica n al registro Vxx (sobrescribe si ya tiene un valor);
  ADD Vxx,Vyy: calcula (Vxx + Vyy) y almacena el resultado en Vxx;
  DEC Vxx: decrementa el valor de Vxx en 1.
  INC Vxx: incrementa el valor de Vxx en 1.
  JMP i: salta a la instrucción número i si V00 es diferente de 0. 
  i está garantizado que sea un número de instrucción válido y 0 sería la primera instrucción.
*/
  function executeCommands(commands) {
    let cpu = [0, 0, 0, 0, 0, 0, 0, 0]

    let cmd = {
      MOV: (x) => {
        let mov = x.split(",")[0].split(" ")[1]
        cpu[+x.at(-1)] = (cpu[+mov.at(-1)] * +mov.startsWith("V")) + ~~mov
      },
      ADD: (x) => {
        let v1 = +x.split(",")[0].at(-1)
        let v2 = +x.split(",")[1].at(-1)
        let sum = cpu[v1] + cpu[v2]
        cpu[v1] = sum < 255 ? sum : sum-255
      },
      INC: (x) => {
        cpu[+x.at(-1)] = (cpu[+x.at(-1)] + 1) & 255
      },
      DEC: (x) => {
        cpu[+x.at(-1)] = (cpu[+x.at(-1)] - 1) & 255
      },
      JMP: (x) => {
        commands = commands
          .concat(
            commands.slice(+x.split(" ").at(-1),
              (commands.indexOf(x) + 1) * !!cpu[0])
          )
      }
    }
  
    for (let i = 0; i < commands.length; i++) {
      cmd[commands[i].split(" ")[0]](commands[i])
    }
  
    return cpu
  }