const addTwoNumbers = function(l1, l2) {
  let a = l1.reverse().join("") * 1
  let b = l2.reverse().join("") * 1
  return (a + b).toString().split("").reverse()
};

const addTwoNumbers2 = function(l1, l2) {
  let left = "", right = ""
  for (let i in l1) {
    left = left + l1[i]
  }
  for (let i in l2) {
    right = right + l2[i]
  }
  let sum = left * 1 + right * 1
  return sum.toString().split("").reverse()
};



console.log(addTwoNumbers([2,4,3], [5,6,4]))

console.log(addTwoNumbers2([2,4,3], [5,6,4]))