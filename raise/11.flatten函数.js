let arr=[1,2,3,[4,5],[6,[7,[8]]]]
function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten(arr))