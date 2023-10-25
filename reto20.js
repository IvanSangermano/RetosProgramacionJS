/*Por ejemplo. A Francia (17) no se mandarían diecisiete renos diésel (17 * 1). 
Hay renos con mayor capacidad de carga, pero tampoco se mandaría un reno nuclear (50), 
ya que se estaría desaprovechando su capacidad. Se mandaría un reno eléctrico (10), uno gasolina (5) y dos diésel (2 * 1).

A España (37) no se podría mandar un equipo formado por tres eléctricos (3 * 10), 
uno gasolina (5) y dos diésel (2 * 1), ya que no puede haber más eléctricos que a gasolina. 
Tampoco dos eléctricos (2 * 10), tres gasolina (3 * 5) y dos diésel (2 * 1), pues no puede haber más a gasolina que a diésel. 
Habría que mandar dos eléctricos (2 * 10), dos a gasolina (2 * 5) y siete a diésel (7 * 1).*/

const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
  ]
  
  const gifts = [
    //{ country: 'Spain', weight: 30 },
    //{ country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
  ]

  howManyReindeers(reindeerTypes, gifts)

  function howManyReindeers(reindeerTypes, gifts) {
    return gifts.map((gift) => {
        let max = gift.weight;
        let reindeers = reindeerTypes
            .map((x) => [x.type, x.weightCapacity])
            .filter((x) => x[1] < max)
            .sort((a, b) => a[1] - b[1]);
    
        let res = reindeers.map(([type]) => ({
            type,
            num: 0,
        }));

        reindeers.map((_, i) => {
            let sliced = reindeers.slice(0, reindeers.length - i)
            let sum = sliced.reduce((sum, e) => sum + e[1], 0);
            sliced.map((_, i) => {
                res[i].num += Math.floor(max / sum);
            });
            max %= sum;
        });
        console.log(res)
        return {
            country: gift.country,
            reindeers: res.reverse(),
        };
    });
  }

// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]