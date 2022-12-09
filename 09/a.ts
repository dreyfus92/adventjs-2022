const leds = [0, 1, 1, 0, 1]

function countTime(leds: number[]) {
    const arrayofZeros = leds.join('').split('1')
    arrayofZeros[0] += arrayofZeros.pop()
    return arrayofZeros.sort((a, b) => b.length - a.length)[0].length * 7
}

console.log(countTime(leds))