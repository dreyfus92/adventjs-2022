const heights = [1, 1000, 900, 800]

function checkJump(heights: number[]) {
    const maxJump = heights.indexOf(Math.max(...heights));
    const left = heights.slice(0, maxJump + 1);
    const right = heights.slice(maxJump + 1);
    return (
        !(left.length <= 1 || !right.length) &&
        left.slice(1).every((number, index) => {
            return number >= left[index];
        }) &&
        right.slice(1).every((number, index) => {
            return number <= right[index];
        })
    );
}


console.log(checkJump(heights))