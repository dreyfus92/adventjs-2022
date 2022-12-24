

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']


function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {

    const a1Set = [...new Set(a1)]
    const a2Set = [...new Set(a2)]
    const a3Set = [...new Set(a3)]
    const allSets = [...a1Set, ...a2Set, ...a3Set]

    const map = new Map()
    allSets.forEach((gift) => map.set(gift, map.has(gift) ? map.get(gift) + 1 : 1));
    const uniqueVals = allSets.filter((gift) => map.get(gift) === 1)

    return uniqueVals

}

getGiftsToRefill(a1, a2, a3)