const distance = 30
const sleighs = [
    { name: "Gorusuke", consumption: 0.3 },
    { name: "Madeval", consumption: 0.5 },
    { name: "Lolivier", consumption: 0.7 },
    { name: "Hyuuh", consumption: 1 }
]

function selectSleigh(distance: number, sleighs: { name: string, consumption: number }[]) {
    const res = sleighs.reverse().find(item => item.consumption * distance <= 20);
    return res ? res.name : null
}

console.log(selectSleigh(distance, sleighs))