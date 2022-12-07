const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

function countHours(year: number, holidays: string[]) {
    let totalHours = 0
    for (let i = 0; i < holidays.length; i++) {
        const date = new Date(`${year}/${holidays[i]}`)
        const day = date.getDay()
        switch (day) {
            case 0:
                totalHours += 0
                break
            case 1:
                totalHours += 2
                break
            case 2:
                totalHours += 2
                break
            case 3:
                totalHours += 2
                break
            case 4:
                totalHours += 2
                break
            case 5:
                totalHours += 2
                break
            case 6:
                totalHours += 0
                break
        }
    }
    return totalHours
}

console.log(countHours(year, holidays))