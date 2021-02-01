// 原型链继承: 将继承类的prototype 指向 父类的实例

// 构造函数继承： 将调用构造函数的方法创建实例

// 组合继承
// function F(name, age) {
//   this.name = name
//   this.age = age
// }
// F.prototype.gender = "男"
// function S(name, age) {
//   F.call(this, age, name)
// }
//
// S.prototype = new F()
// S.prototype.constructor = S
// let s = new S("猪八戒", 12)
// console.log(s)
// console.log(s.__proto__)
// console.log(s.__proto__.__proto__)

// 原型式继承
// function F(obj) {
//   function F() {}
//   F.prototype = obj
//   return new F()
// }
//
// function createAnother(original){
//   let clone = F(original); // 通过调用 object() 函数创建一个新对象
//   clone.sayHi = function(){  // 以某种方式来增强对象
//     console.log("hi");
//   };
//   return clone; // 返回这个对象
// }
//
// var person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"]
// };
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi(); //"hi"
// console.log(anotherPerson)
// console.log(anotherPerson.__proto__)

// function getOuter(){
//   var date = '815';
//   function getDate(str){
//     console.log(str + date);  //访问外部的date
//   }
//   return getDate('今天是：'); //"今天是：815"
// }
// getOuter();

// let data = []
// for (var i = 0; i < 2; i++) {
//   data[i] = (function (i) {
//     return function () {
//       console.log(i)
//     }
//   })(i)
// }
// console.log(data[0]())
// console.log(data[1]())

/**
 * this: 默认绑定, 显示绑定, 隐式绑定, new绑定, 箭头函数绑定
 * **/

// function deepClone(obj) {
//   let data = null
//   if (obj && typeof obj === 'object') {
//     data = Array.isArray(obj) ? [] : {}
//     for (let i in obj) {
//       data[i] = deepClone(obj[i])
//     }
//   } else {
//     data = obj
//   }
//   return data
// }
//
// let obj = {name: "123", person: { age: 12 }}
// let clone = deepClone(obj)
// clone.person.age = 100
// console.log(obj)
// console.log(clone)

// Function.prototype._bind = function () {
//   let func = this
//   let that = [].slice.call(arguments)[0]
//   let arg1 = [].slice.call(arguments, 1)
//
//   let fBound = function () {
//     return func.apply(this instanceof fBound ? this : that, arg1.concat([].slice.call(arguments)))
//   }
//   fBound.prototype = func.prototype
//   return fBound
// }

/**
 *  Object.assign()原理
 *
 * **/

// let obj1 = { name: "猪八戒" }
// let obj2 = { age: 12, name: "孙悟空", person: { name: "孙悟空" } }
// //
// // let obj3 = Object.assign(obj1, obj2)
// // obj2.person.name = "唐三藏"
// // console.log(obj3)
// // console.log(obj1)
// // console.log(obj1 === obj3)
// // Object.prototype._assign = function () {
// //   let target = [].slice.call(arguments)[0]
// //   let args = [].slice.call(arguments, 1)
// //   for (let i = 0; i < args.length; i++) {
// //     for (let j in args[i]) {
// //       target[j] = args[i][j]
// //     }
// //   }
// //   return target
// // }
// //
// // Object.defineProperty(Object.prototype, "_assign", {
// //   enumerable: false
// // })
// //
// // let obj4 = Object._assign(obj1, obj2)
// // console.log(obj4)
// // console.log(obj4 === obj1)
//
// for (var i = 0; i < 4; i++) {
//   (function (i) {
//     let j = i
//     setTimeout(() => console.log(j), j * 1000)
//   })(i)
// }

// function C() {}
// let  c = new  C()
// console.log(c)
// console.log(Object.getPrototypeOf(c))
// console.log(C.prototype.constructor)
// console.log(C.prototype)

/**
 * map
 * **/

// Array.prototype._map = function (callback) {
//   let arr = this, newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     let res = callback(arr[i], i)
//     newArr.push(res)
//   }
//   return newArr
// }
//
// let arr = [1, 2, 3, 4]
// let newArr = arr._map(x => x * 2)
// console.log( newArr)

// function curry(fn, args) {
//   return function () {
//     let arg = [].slice.call(arguments)
//     if (args !== undefined) {
//       arg = arg.concat(args)
//     }
//     if (fn.length > arg.length) {
//       return curry(fn, arg)
//     }
//     return fn.apply(null, arg)
//   }
// }
//
// function fn(a, b, c) {
//   return a + b + c
// }
//
// let a = curry(fn)
// console.log(a(1)(2)(3))
// console.log(a(1)(2, 3))
// console.log(a(1, 2, 3))

// function curry(fn, curArg) {
//   return function () {
//     let args = [].slice.call(arguments)
//     if (curArg !== undefined) {
//       args = args.concat(curArg)
//     }
//     if (args.length < fn.length) {
//       return curry(fn, args)
//     }
//     return fn.apply(null, args)
//   }
// }

// function func(arr) {
//   let data = []
//   if (Array.isArray(arr)) {
//     arr.forEach(item => {
//       if (Array.isArray(item)) {
//         data =  data.concat(...func(item))
//       } else {
//         data.push(item)
//       }
//     })
//   } else {
//     data.push(arr)
//   }
//   return data
// }

// function debounce(func, wait) {
//   let timer
//   return function () {
//     let that = this, args = [].slice.call(arguments)
//     if (timer) clearTimeout(timer)
//     let latter = function () {
//       clearTimeout(timer)
//       func.apply(that, args)
//     }
//     timer = setTimeout(latter, wait)
//   }
// }
//
// function throttle(func, wait, mustTime) {
//   let start = Date.now(), timer
//   return function () {
//     clearTimeout(timer)
//     let now = Date.now()
//     if (now - start > mustTime) {
//       func.apply(this, [].slice.call(arguments))
//       start = now
//     } else {
//       timer = setTimeout(func, wait)
//     }
//   }
// }
//
// let timer = setTimeout(() => {
//   console.log("===")}, 1000)
// console.log(timer)
// timer = clearTimeout(timer)
// console.log(timer)


// console.log(['1', '2', '3'].map(parseInt))
// // parseInt(1, 0), parseInt(2, 1), parseInt(3, 2)
// var ws = new WeakSet()
// var obj = {}
// var foo = {}
//
// ws.add(foo)
// ws.add(obj)
// ws.delete(obj)	// true
// ws.has(obj)	// false
// console.log(ws)

/**
 * http2.0多路复用:
 *  文件串行传输 => 请求文件a时, b文件只能够等待
 *  连接数过多 => 设置的apache的最大连接数为300， 浏览器发起的最大请求数为6， 也就是说服务器能承受的最高并发为50， 超过51个就只有等待
 *
 *  多路复用就是为了解决上面的两个问题： 最重要的两个概念就是帧和流, 帧代表最大最小的数据单位, 每个帧会标识该帧属于哪个流, 流也就是多条帧组成的数据
 *  多路复用就是一个tcp连接中可以存在多条流, 换句话说就是可以发送多条的请求, 对端可以通过帧中的标识知道属于哪个请求
 * **/
/**
 *   npm安装机制 : 发出npm install命令查询node_modules模块是否已经存在指定模块
 *    若存在则不重新安装, 若不存在则下载到.npm包中
 * **/

// Object.prototype.toString.call(); instanceof; Array.isArray()

/**
 * 1. 重绘: 指的是页面的background-color, color等改变发生
 * 2. 回流: 指的是页面的布局, 快读, 高度发生改变引起回流 回流必定重绘 重绘不一定回流
 * **/

// function test () {
//   var a = "121"
//   console.log('start')
//   setTimeout(() => {
//     console.log('children2')
//     Promise.resolve().then(() => {console.log('children2-1')})
//   }, 0)
//   setTimeout(() => {
//     console.log('children3')
//     Promise.resolve().then(() => {console.log('children3-1')})
//   }, 0)
//   Promise.resolve().then(() => {console.log('children1')})
//   console.log('end')
// }
//
// test()
// // start end children1 children2 children2-1 children3 children3-1
// console.log(this.a)

// cookie可能会造成跨站请求攻击(csrf), 请求的时候加token, 因为浏览器会自动携带cookie, 而token需要手动加入请求头
// const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
// const arr2 = ['A', 'B', 'C', 'D']
// const ret = []
// let tmp = arr2[0]
// let j = 0
// for (let i = 0; i < arr1.length; i++) {
//   if (tmp === arr1[i].charAt(0)) {
//     ret.push(arr1[i])
//   } else {
//     ret.push(tmp)
//     ret.push(arr1[i])
//     tmp = arr2[++j]
//   }
// }
// ret.push(arr2[j])
// console.log(ret)


// var b = 10;
// (function b(){
//   var b = 20;
//   console.log(b);
// })();
//
// console.log(b)
// var b = 10;
// (function b() {
//   b = 20;
//   console.log(b)
// })()
//
// console.log(b)

/**
 * BFC: 格式化上下文 => 结界内浮动元素不会覆盖, 行内元素
 * float: left, right
 * position: fixed, absolute
 * overflow: visible
 * display: flex
 *
 * 里外元素互不影响
 * 浮动元素的高度也会计入
 * 浮动元素不会发生重叠
 *
 * **/

// function curry(fn, curArg) {
//   return function () {
//     let args = [].slice.call(arguments)
//     if (curArg !== undefined) {
//       args.concat(curArg)
//     }
//     if (fn.length > args.length) {
//       return curry(fn, args)
//     }
//     return fn.apply(null, args)
//   }
// }

// Function.prototype._bind = function () {
//   let func = this
//   let that = [].slice.call(arguments)[0]
//   let thatArg = [].slice.call(arguments, 1)
//   return function () {
//     let found = function () {
//       return func.apply(this instanceof found ? this : that, thatArg.concat([].slice.call(arguments)))
//     }
//     found.prototype = func.prototype
//   }
// }
// push pop shift unshift slice splice sort map filter concat join reverse
// var obj = {
//   '2': 3,
//   '3': 4,
//   'length': 2,
//   'splice': Array.prototype.splice,
//   'push': Array.prototype.push
// }
// obj.push(1)
// obj.push(2)
// console.log(obj)
var a = {n: 1};
var b = a;
a.x = a = {n: 2};


/**
 * a -> {n: 1}, b -> {n: 1}
 * a -> {n: 1, x: undefined}, b -> {n: 1,  x: undefine}
 * a -> {n: 2}, a -> {n: 2, x: {n: 2}}
 * **/
console.log(a.x)
console.log(b.x)
console.log(a, b)

/**
 *   栈: { n: 1 }   a,b
 *   栈: { n: 1, x: undefined }
 *   栈: { n: 2 } a
 *   栈: { n: 1, x: { n: 1 } } b
 *
 * **/
function curry(func, argsC) {
  return function () {
    let args = Array.prototype.slice.call(arguments)
    if (argsC !== undefined) {
      args = args.concat(argsC)
    }
    if (args.length < func.length) {
      return curry(func, args)
    }
    return func.apply(null, args)
  }
}
function sum(a, b, c) {
  return a + b + c
}
let fn = curry(sum)
console.log(fn(1)(2)(3))

Function.prototype._bind = function () {
  let func = this, that = [].slice.call(arguments)[0], arg1 = [].slice.call(arguments, 1)
  return function () {
    let fBound = function () {
      return func.apply(this instanceof fBound ? this : that, [].slice.call(arguments).concat(arg1))
    }
    fBound.prototype = func.prototype
    return fBound
  }
}