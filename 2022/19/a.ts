const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]


function sortToys(toys: string[], positions: number[]): string[] {
    const sortedToys: string[] = []
    for (let i = 0; i < positions.length; i++) {
        sortedToys[positions[i]] = toys[i]
    }
    return sortedToys.filter(toy => toy !== '')
}

console.log(sortToys(moreToys, morePositions))

