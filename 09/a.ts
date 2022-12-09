const leds = [0, 0, 0, 1]

// Every 7 seconds, the leds change state in this way:

// If the led is off, it turns on if the led on its left (index - 1) was on before.
// If the led is on, it remains on.

function countTime(leds: number[]) {
    let time = 0
    for (let i = 0; i < leds.length; i++) {
        if (i === 0 && leds[i] === 0) {
            leds[i] = 1
            time += 7
        } else if (leds[i] === 0 && leds[i - 1] === 1 && leds[i + 1] === 0) {
            leds[i] = 1
            time += 7
        }
    }
    return time
}

console.log(countTime(leds))