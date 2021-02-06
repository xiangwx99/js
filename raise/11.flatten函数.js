let arr=[1,2,3,[4,5],[6,[7,[8]]]]
function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

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

function flat3(array) {
  return array.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flat3(cur) : cur), [])
}

console.log(flatten(arr))
console.log(flat(arr))
console.log(flat3(arr))