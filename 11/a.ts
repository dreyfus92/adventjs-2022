function getCompleted(part: string, total: string) {
    const getSeconds = (time: string) => {
        const [hours, minutes, seconds] = time.split(':')
        return parseInt(hours, 10) * 60 ** 2 + parseInt(minutes, 10) * 60 + parseInt(seconds, 10)
    }

    const MCD = (numerator: number, denominator: number) => {
        while (numerator % denominator !== 0) {
            const aux = denominator
            denominator = numerator % denominator
            numerator = aux
        }
        return denominator
    }

    const numerator = getSeconds(part)
    const denominator = getSeconds(total)
    const divisor = MCD(numerator, denominator)

    return `${numerator / divisor}/${denominator / divisor}`
}

getCompleted('01:00:00', '03:00:00')