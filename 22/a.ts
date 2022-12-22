const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]


function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  const systemsCheck = systemNames.every((system, index) => {
    return (
      stepNumbers[index] <= stepNumbers[index + systemNames.slice(index + 1).indexOf(system) + 1])
  })
  return systemsCheck
}

//for index = 0
// stepNumbers[0] <= stepNumbers[0 + systemNames.slice(0 + 1).indexOf(system) + 1])
// 1 <= stepNumbers[0 + systemNames.slice(0 + 1).indexOf("tree_1") + 1])
// 1 <= stepNumbers[0 + 1 + 1])
// 1 <= stepNumbers[2])
// 1 <= 10
// true


//for index = 1
// stepNumbers[1] <= stepNumbers[1 + systemNames.slice(1 + 1).indexOf(system) + 1])
// 33 <= stepNumbers[1 + systemNames.slice(1 + 1).indexOf("tree_2") + 1])
// 33 <= stepNumbers[1 + systemNames.slice(1 + 1).indexOf("tree_2") + 1])
// 33 <= stepNumbers[1 + 2 + 1])
// 33 <= stepNumbers[4])
// 33 <= 44
// true

//for index = 2
// stepNumbers[2] <= stepNumbers[2 + systemNames.slice(2 + 1).indexOf(system) + 1])
// 10 <= stepNumbers[2 + systemNames.slice(2 + 1).indexOf("house") + 1])
// 10 <= stepNumbers[2 + systemNames.slice(2 + 1).indexOf("house") + 1])
// 10 <= stepNumbers[2 + 2 + 1])
// 10 <= stepNumbers[5])
// 10 <= 20
// true

console.log(checkStepNumbers(systemNames, stepNumbers))