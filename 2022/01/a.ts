const gifts = ['cat', 'game', 'socks']


function wrapping(gifts: string[]) {
    let wrappedGifts = []
    const star = '*'
    for (let i = 0; i < gifts.length; i++) {
        wrappedGifts.push(
            `${star.repeat(gifts[i].length + 2)}\n*${gifts[i]
            }*\n${star.repeat(gifts[i].length + 2)}`
        )
    }
    return wrappedGifts
}

console.log(wrapping(gifts))