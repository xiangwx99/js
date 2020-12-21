// 思路
/**
 * 1. 创建一个对象
 * 2. 将obj的__proto__指向fn的prototype实现继承(使用指定的原型对象及其属性去创建一个新的对象)
 * 3. 改变this的指向， 执行构造函数，传递参数，fn.call() 或者 fn.apply()
 * 4. 返回新的对象obj
 */

function _new(Obj, ...args) {
  let obj = Object.create(Obj.prototype)
  console.log(obj)    // Person {}
  console.log(args)   // ['猪八戒', '18']
  let result = Obj.apply(obj, args)
  return result instanceof Object ? result : obj
}

function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function() {
    console.log('hello' + ' ' +  this.name)
  }
}

let  p1 = _new(Person, '猪八戒', '18')
p1.sayName()
console.log(p1 instanceof Person)