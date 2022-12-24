
function checkPart(part: string) {
    return [...part].some((_x, i, arr) => {
        const w = arr.filter((_, y) => y != i)
        return w.join("") == w.reverse().join("")
    })
}


console.log(checkPart("wekew"))