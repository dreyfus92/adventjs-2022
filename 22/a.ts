const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]


function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  const systemsCheck = systemNames.every((system, index) => stepNumbers[index] <= stepNumbers[index + systemNames.slice(index + 1).indexOf(system) + 1])
  return systemsCheck
}
console.log(checkStepNumbers(systemNames, stepNumbers))