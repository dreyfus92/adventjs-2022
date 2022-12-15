// Write a function that takes a path and returns the optimal path

// Example:
// Input: [[0], [3, 4], [9, 8, 1]]
// Output: [0, 3, 8]
// Explanation: 0 + 3 + 8 = 11

function getOptimalPath(path: number[][]) {
    const res = path.reduceRight((previous, current) => {
        return current.map((val, index) => {
            return val + Math.min(previous[index], previous[index + 1])
        })
    })
    return res[0]
}

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]]))