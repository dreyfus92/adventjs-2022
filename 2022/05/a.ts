const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3


function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number) {
    let max = 0
    return giftsCities.sort((a, b) => b - a).reduce((acc, curr) => {
        const sum = acc + curr
        const maxReached = max === maxCities || sum > maxGifts || sum === maxGifts - 1
        if (maxReached) return acc
        max++
        return sum
    }, 0)
}


getMaxGifts(giftsCities, maxGifts, maxCities)