const heights = [1, 1000, 900, 800]

function checkJump(heights: number[]) {
    const inflection = heights.indexOf(Math.max(...heights));
    const left = heights.slice(0, inflection + 1);
    const right = heights.slice(inflection + 1);
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