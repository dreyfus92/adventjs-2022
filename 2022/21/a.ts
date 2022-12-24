
type Gift = {
    name: string
    quantity: number
}

function printTable(gifts: Gift[]) {
    const giftsNewArray = gifts.map(x => [x.name, x.quantity])
    giftsNewArray.unshift(["Gift", "Quantity"])

    const [lengthGift, lengthQuantity] = [
        Math.max(...giftsNewArray.map(x => x[0].toString().length)),
        Math.max(...giftsNewArray.map(x => `${x[1]}`.length))
    ]

    giftsNewArray.splice(1, 0, ["-".repeat(lengthGift), "-".repeat(lengthQuantity)])

    const tables = giftsNewArray.map(x => {
        const name = x[0] + " ".repeat(lengthGift - x[0].toString().length)
        const quantity = x[1] + " ".repeat(lengthQuantity - `${x[1]}`.length)
        return "| " + name + " | " + quantity + " |" + "\n"
    }).join("")

    const top = "+".repeat(lengthGift + lengthQuantity + 7) + "\n"
    const bottom = top.replace(/\+/g, "*").trim()

    return top + tables + bottom
}

console.log(printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
]))
