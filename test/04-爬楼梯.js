// 每次最多 1或者2
/**
 *  0     1     2     3    4     5     6     7
 *  1     1     2     3    5     8     13    21
 * **/

function func(n) {
  if(n === 0 || n === 1) {
    return 1
  }
  return func(n - 1) + func(n - 2)
}

console.log(func(1))
console.log(func(2))
console.log(func(3))
console.log(func(5))
console.log(func(10))