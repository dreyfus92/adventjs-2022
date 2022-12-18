function dryNumber(dry: number, numbers: number) {
    const dryNumbers: number[] = []
    if (dry <= 9 && dry > 0) {
        for (let i = 1; i <= numbers; i++) {
            const num = i
            const numToString = num.toString()
            if (numToString.includes(dry.toString())) dryNumbers.push(num)
        }
        return dryNumbers
    } else return []
}

console.log(dryNumber(1, 15))