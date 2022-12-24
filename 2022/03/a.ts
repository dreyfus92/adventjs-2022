const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24

function distributeGifts(packOfGifts: string[], reindeers: string[]) {
    let totalWeight = 0
    for (let i = 0; i < packOfGifts.length; i++) {
        const gift = packOfGifts[i]
        totalWeight += gift.length
    }
    let totalCapacity = 0
    for (let i = 0; i < reindeers.length; i++) {
        const reindeer = reindeers[i]
        totalCapacity += reindeer.length * 2
    }
    return Math.floor(totalCapacity / totalWeight)
}

console.log(distributeGifts(packOfGifts, reindeers))