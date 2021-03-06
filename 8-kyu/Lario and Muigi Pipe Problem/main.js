// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.
// Task

// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
// Example

// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  let newArr = []
  let ordered = numbers.sort((a,b)=> a-b)
  let lowest = ordered[0]
  let highest = ordered[ordered.length -1]
  for(let i = lowest; i <= highest; i++ ){
    newArr.push(i)
  }
  return newArr
}


console.log(pipeFix([1,2,3,5,6,8,9]))
console.log(pipeFix([1,2,3,12]))
console.log(pipeFix([6,9]))
console.log(pipeFix([-1,4]))
console.log(pipeFix([1,2,3]))
