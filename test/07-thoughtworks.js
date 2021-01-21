let array = [1, 2, 3, 4, 4, 5, 4]
let newArr = []

function chaiFen(arr) {
  newArr = []
  let length = Math.floor(arr.length / 2)
  for (let i = 0; i < length; i++) {
    let chaiFenArr = arr.slice(2 * i, 2 * i + 2)
    add(chaiFenArr)
  }
  if (2 * length + 1 === arr.length) {
    let chaiFenArr = [arr[arr.length - 1]]
    add(chaiFenArr)
  }
}

function add(arr) {
  let sum = arr.reduce((pre, cur) => pre + cur)
  newArr.push(sum)
}

chaiFen(array)

while(newArr.length > 2) {
  console.log(newArr)
  chaiFen(newArr)
}

let result = newArr.length === 2 ? newArr[1] * newArr[1] + newArr[0] * newArr[0] : newArr[0] * newArr[0]
console.log(result)