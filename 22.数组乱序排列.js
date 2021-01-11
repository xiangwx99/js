let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function outOfOrder(arr) {
  let len = arr.length
  let newArr = []
  for(let i = 0; i < len; i++) {
    let index = Math.floor(Math.random() * len)
    if (arr[index]) {
      newArr.push(arr[index])
    }
    arr.splice(index, 1)
  }
  return newArr.concat(arr)
}

console.log(outOfOrder(arr))