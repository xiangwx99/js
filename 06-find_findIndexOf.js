Array.prototype._find = function (callback) {
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      return i
    }
  }
}

let arr = [1, 3, 4, 6, 7]
let res = arr._find(item => item === 7)
console.log(res)