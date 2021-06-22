// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



function squareSum(numbers){
  let squareNum = numbers.map(num=> Math.pow(num, 2))
  return squareNum.reduce((a,b)=>a + b, 0)

  }


console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))