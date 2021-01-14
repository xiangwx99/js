// function deepClone(obj) {
//   let data = null
//   if(obj && typeof obj === 'object') {
//     data = Array.isArray(obj) ? [] : {}
//     for(let i in obj) {
//       data[i] = deepClone(obj[i])
//     }
//   } else {
//     data = obj
//   }
//   return data
// }
//
// console.log(deepClone({name: '猪八戒'}))

// let arr = [1, 3, 4, 5, 5, 6, 6, 6, 7, 7]
// console.log(arr.filter((item, index, arr) => arr.indexOf(item) === index))

// function debounce(func, wait) {
//   let timer
//   return function() {
//     if (timer) clearTimeout(timer)
//     let self = this, args = Array.prototype.slice.call(arguments)
//     let later = function () {
//       clearTimeout(timer)
//       func.apply(self, args)
//     }
//     setTimeout(later, wait)
//   }
// }

// function throttle(func, wait, mustRun) {
//   let timer, start = Math.floor(Date.now())
//   return function() {
//     let args = Array.prototype.slice.call(arguments), that = this, curTime = Math.floor(Date.now())
//     if (curTime - start > mustRun) {
//       func.apply(that, args)
//       start = curTime
//     } else {
//       timer = setTimeout(func, wait)
//     }
//   }
// }

// function loop() {
//   console.log("===>")
//   setTimeout(loop, 1000)
// }
// loop()

/***
 *
 *       1
 *    2     3
 *  4  5   6  7
 *
 * 先: 1245367
 * 中: 4251637
 * 后: 4526731
 * 广度: 1234567
 * **/
// let tree = {
//   value: 1,
//   child: {
//     left: {
//       value: 2,
//       child: {
//         left: {
//           value: 4
//         },
//         right: {
//           value: 5
//         }
//       }
//     },
//     right: {
//       value: 3,
//       child: {
//         left: {
//           value: 6
//         },
//         right: {
//           value: 7
//         }
//       }
//     }
//   }
// }
//
// let arr1 = [], arr2 = [tree]
// function xian(tree) {
//   if (tree) arr1.push(tree.value)
//   if (tree && tree.child && tree.child.left) xian(tree.child.left)
//   if (tree && tree.child && tree.child.right) xian(tree.child.right)
// }
//
// let bfsArr = [tree], count = 0
// function breathFirst() {
//   let node = bfsArr[count]
//   if (node) {
//     if (node && node.child && node.child.left) bfsArr.push(node.child.left)
//     if (node && node.child && node.child.right) bfsArr.push(node.child.right)
//     count ++
//     breathFirst()
//   }
// }
// breathFirst()
// console.log(bfsArr)
// xian(tree)
// console.log(arr1);

// let arr = [1, 2, 3, 4, 5, 6]
// let length = arr.length
// for (let i = 0; i < length; i++) {
//   let index = Math.floor(Math.random() * length)
//   arr[i] = arr[index]
//   arr.slice(index, 1)
// }
// console.log()

// let arr = [9, 5, 6, 7, 2, 8, 10, 12, 45, 2]
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if(arr[j] < arr [i]) {
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
// }
// console.log(arr)
/**
 *    9 3 4 6 5 1   i = 0 ; j = 5
 *    1 3 4 6 5 9   i = 0 ; j = 5
 *
 *
 * ***/

// function _new(Fn, ...args) {
//   let obj = Object.create(Fn.prototype)
//   let res = Fn.apply(obj, args)
//   return res instanceof Fn ? res : obj
// }
//
// function P(name, age) {
//   this.name = name
//   this.age = age
// }
//
// let obj = _new(P, '猪八戒', 12)
// console.log(obj)

/**
 *  1. 客户端发起请求 => 客户端能够正常发送请求    SYN J
 *  2. 服务端接收请求, 然后响应请求 => 服务端能够正常接收请求且响应请求 SYN K ACK J+1
 *  3. 客户端接收请求 => 客户端能够正常的接收请求 ACK K+1
 * **/

// function create(proto) {
//   function F() {};
//   F.prototype = proto; // 将原型挂在构造函数的prototype上
//   F.prototype.constructor = F;
//   return new F(); // 返回新对象
// }
//
// console.log(create({name: '猪八戒'}.__proto__).constructor)

// function Person(name) {
//   this.name = name
//   this.age = 10
//   this.sayName = function () {
//     console.log(this.name)
//   }
// }
// // 原型链
// function Son() {
//   this.name = '猪八戒'
// }
// let son = new Son()
// son.__proto__ = Person.prototype

// bind方法 => 本来没有这个方法, 但是通过bind为他绑定这个方法
// Function.prototype._bind = function () {
//   let that = this
//   let obj = Array.prototype.slice.call(arguments)[0]
//   let arg1 = Array.prototype.slice.call(arguments, 1)
//   return function () {
//     that.apply(obj, arg1.concat(Array.prototype.slice.call(arguments)))
//   }
// }
//
// function P() {
//   console.log(this)
//   console.log("0")
//   console.log(arguments)
// }
//
// let a = { name: '猪八戒' }
// P._bind(a, '2')()

// apply方法
// Function.prototype._apply = function () {
//   let that = Array.prototype.slice.call(arguments)[0]
//   let args = Array.prototype.slice.call(arguments, 1)
//   let uniqueId = '00' + Math.random()
//   while(that.hasOwnProperty(uniqueId)) {
//     uniqueId = '00' + Math.random()
//   }
//   that[uniqueId] = this
//   let res = that[uniqueId](args)
//   delete that[uniqueId]
//   return res
// }
//
// function P() {
//   console.log(this.name)
// }
//
// let a = { name: '猪八戒' }
// P._apply(a)

