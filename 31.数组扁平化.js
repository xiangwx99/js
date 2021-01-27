function flat(array) {
  let newArr = []
  if (Array.isArray(array)) {
    array.forEach(item => {
      if (Array.isArray(item)) {
        newArr.push(...flat(item))
      } else {
        newArr.push(item)
      }
    })
  } else {
    newArr.push(array)
  }
  return newArr
}

let arr = [1, [2, 3, 4], 5, [6, 7], 8]
console.log(flat(arr))