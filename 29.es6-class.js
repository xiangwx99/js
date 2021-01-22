class Person {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return  x + "猪八戒"
  }
}

let p1 = new Person("你好", "12")
console.log(p1)
console.log(typeof Person)
console.log(p1.__proto__)

console.log(p1 instanceof Person)