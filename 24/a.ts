
function canExit(maze: string[][]) {
  function replace(str: string) {
    return str
      .replace(/[S][\sE]/g, "SS")
      .replace(/[\sE][S]/g, "SS")
      .split("");
  }

  const x: string[] = [];
  new Array(maze[0].length * maze.length).fill(0).forEach(() => {
    const check = [...maze];
    maze.map((horizontal, i) => {
      maze[i] = replace(horizontal.join(""));
      const v = maze[0].map((_, i) => replace(maze.map((x) => x[i]).join("")));
      maze[i] = v.map((x) => x[i]);
    });
    check.flat().join("") == maze.flat().join("") && x.push(check);
  });

  return !x.flat(2).includes("E");
}

console.log(canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]));