const leds = [0, 0, 1, 0, 0]

function countTime(leds: number[]) {
    const arrayofZeros = leds.join('').split('1')
    arrayofZeros[0] += arrayofZeros.pop()
    return arrayofZeros.sort((a, b) => b.length - a.length)[0].length * 7
}

console.log(countTime(leds))