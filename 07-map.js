Array.prototype._map = function(callback) {
  let newArr = []
  for(let i = 0; i < this.length; i++) {
    let res = callback(this[i], i)
    newArr.push(res)
  }
  return newArr
}

let arr = [1, 2, 3, 4]
let res = arr._map(item => {
  return item * 2
})
console.log(res)