// 想要继承就必须提供一个父类
function Person(name) {
  this.name = name
  this.age = 10
  this.sayName = function() {
    console.log(this.name)
  }
}
/**
 * 1. 原型链实现继承
 *      特点: 1. 实例可继承的属性有: 实例的构造函数属性, 父类构造函数属性, 父类原型的属性. (新实例不会继承父类实例属性)
 *      缺点: 1. 新实例无法向父类构造函数传参
 *           2. 继承单一
 *           3. 所有新实例都会共享父类实例的属性.(原型上的属性是共享的, 一个实例修改了原型属性, 另外一个实例的原型属性也会被修改)
 * */
console.log("=======================================> 原型链继承")
function Per() {
  this.name = 'KoBe'
}
Per.prototype = new Person()
let per1 = new Per()
console.log(per1.name)                 // "KoBe"
console.log(per1 instanceof Person)    // true

/**
 * 2. 构造函数继承
 *       重点: 用call()或者apply()将父类构造函数引入子类函数(在子函数中做了父类函数的自执行(复制))
 *       特点: 1. 只继承了父类构造函数的属性, 没有继承父类原型的属性
 *            2. 解决了原型链继承缺点1, 2, 3
 *            3. 可以继承多个构造函数属性(call多个)
 *            4. 在子实例中可向父实例传参
 *      缺点:  1. 只能继承父类构造函数的属性
 *            2. 无法实现构造函数的复用(每次用每次都要重新调用)
 *            3. 每个新实例都有父类构造函数的副本,臃肿
 *
 * **/
console.log("=======================================> 借用构造函数继承")
function Con() {
  Person.call(this, 'Kobe')
  this.age = 12
}
let con1 = new Con()
console.log(con1.name)                 // "KoBe"
console.log(con1.age)                  // 12
console.log(con1 instanceof Person)    // false

/**
 * 3. 组合继承
 *        重点: 结合了两种模式的优点, 传参和复用
 *        特点: 1. 可以继承父类原型上的属性, 可以传参, 可以复用
 *             2. 每个新实例引入的构造函数属性是私有的
 *        缺点: 调用了两次父类构造函数(耗内存), 子类的构造函数会代替原型上的那个父类构造函数
 * **/
console.log("=======================================> 组合继承")
function SubType(name) {
  Person.call(this, name)            // 借用构造函数模式
}
SubType.prototype = new Person()     // 原型链继承
let sub = new SubType("KoBe")
console.log(sub.name)                // "KoBe" => 继承了构造函数的属性
console.log(sub.age)                 // 10 => 继承了父类原型的属性

/**
 * 4. 原型式继承
 *    重点: 用一个函数包装一个对象, 然后返回这个函数的调用, 这个函数就变成了个可以随意增添属性的实例或对象. Object.create()即使这个原理
 *    特点: 类似于复制一个对象, 用函数来包装
 *    缺点: 1. 所有实例都会继承原型上的属性
 *         2. 无法实现复用(新实例属性都是后面添加的)
 * **/
console.log("=======================================> 原型式继承")
// 先封装一个函数容器, 用来输出对象和承载继承的原型
function content(obj) {
  function F() {}
  F.prototype = obj      // 继承了传入的参数
  return new F()         // 返回函数对象
}
let sup = new Person()   // 拿到父类的实例
let sup1 = content(sup)
console.log(sup1.age)    // 10 继承了父类函数的属性

/**
 * 5. 寄生式继承
 *    重点: 就是给原型式继承外面套了个壳子
 *    优点: 没有创建自定义类型, 因为只是套了个壳子返回对象(这个), 这个函数顺理成章就成了创建的新对象
 *    缺点: 没用到原型, 无法复用
 * **/
console.log("=======================================> 寄生式继承")
function Content(obj) {
  function F() {}
  F.prototype = obj        // 继承了传入的参数
  return new F()           //
}
let sub1 = new Person()
// 以上是原型式继承, 给原型式继承再套个壳子传递参数
function subobject(obj) {
  let sub1 = content(obj)
  sub1.name = 'KoBe'
  return sub1
}
let sup2 = subobject(sup1)
// 这个函数经过声明之后就成了可添加属性的对象
console.log(typeof subobject)     // function
console.log(typeof sup2)          // object
console.log(sup2.name)            // KoBe 返回了一个sub对象, 继承了sub1的属性

/**
 * 6. 寄生组合式继承
 *    寄生: 在函数内返回对象然后调用
 *    组合: 1. 函数的原型等于另外一个实例 2. 在函数中用apply或call引入另外一个构造函数,可传参
 *    重点: 修复了组合继承的问题
 * **/
console.log("=======================================> 寄生组合继承")
// 寄生
function Content1(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
// content就是F实例的另一种表示法
let con = content(Person.prototype)
// con实例(F实例)的原型继承了父类函数的原型
// 以上更像是原型链继承, 只不过只继承了原型属性

// 组合
function Sub() {
  Person.call(this)      // 这个继承了父类构造函数的属性
}                        // 解决了组合式两次调用构造函数属性的缺点
//重点
Sub.prototype = con   // 继承了con实例
con.constructor = Sub // 一定要修复实例
let sub2 = new Sub()
// Sub的实例就继承了构造函数属性, 父类实例, con的函数属性
console.log(sub1.age)  // 10