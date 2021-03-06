let a1 = new bar()
// let a2 = new foo()
// console.log(a1, a2)

console.log(a1, baz)

/**
 * 代码会报错 => 1. class 声明会提升，但不会初始化赋值。Foo 进入暂时性死区，类似于 let、const 声明变量。
 *             2. class 声明内部会启用严格模式。
 *             3. class 的所有方法（包括静态方法和实例方法）都是不可枚举的。
 *             4. class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有[[construct]]，不能使用 new 来调用
 *             5. 必须使用 new 调用 class。
 *             6. class 内部无法重写类名。
 * **/


function bar() {
  this.a = "aaa"
  baz = 1
}
class foo {
  constructor(props) {
    this.a = "aaa"
  }
}