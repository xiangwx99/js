let a = {
  i: 1,
  toString() {
    return a.i++
  }
  // 或者重写valueOf()方法
}
if (a == 1 && a == 2 && a ==3) {
  console.log(a)
  console.log("=====> 来了, 老弟!")
}

let b = [1, 2, 3]
let index = 0
b.toString = function () {
  return this[index++]
}
if (b == 1 && b == 2 && b == 3) {
  console.log(b)
  console.log("=====> 来了, 老弟!")
}