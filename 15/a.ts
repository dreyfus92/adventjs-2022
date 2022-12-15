// Write a function that takes a pathn and returns the optimal path
// The optimal path is the path with the lowest sum of numbers

// Example:
// Input: [[0], [3, 4], [9, 8, 1]]
// Output: [0, 3, 8]
// Explanation: 0 + 3 + 8 = 11



function getOptimalPath(path: number[][]) {
    const maxDepth = path.length - 1;
    let min = Number.MAX_SAFE_INTEGER;

    const traverseTree = (acc: number, currentHeight: number, currentIndex: number) => {
        acc += path[currentHeight][currentIndex];
        if (currentHeight < maxDepth) {
            traverseTree(acc, currentHeight + 1, currentIndex);
            traverseTree(acc, currentHeight + 1, currentIndex + 1);
        } else {
            min = Math.min(min, acc);
        }
    };

    traverseTree(0, 0, 0);
    return min;
}

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]]))