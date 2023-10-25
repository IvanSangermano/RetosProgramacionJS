const year = 2022
const holidays = ['01/06', '04/01', '12/24']

function countHours(year, holidays) {
    let count = 0

    holidays.map((day) =>{
        let dayAndYearString = `${day}/${year}`
        let dayToDate = new Date(dayAndYearString)

        let cuenta = false;
        if(dayToDate.getDay() === 0| dayToDate.getDay() === 6)
        {
            cuenta = false;
        }else{
            cuenta = true;
            count++;
        }
    })
    return (2*count)
}

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log(countHours(year,holidays)) // 2 días -> 4 horas extra en el año