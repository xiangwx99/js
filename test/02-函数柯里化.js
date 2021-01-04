function  add1(x, y, z) {
  return x + y
}

function add2(x) {
  return function(y) {
    return x + y
  }
}

function add3(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

console.log(add1(2, 3))
console.log(add2(2)(3))
console.log(add3(2)(3)(4))
