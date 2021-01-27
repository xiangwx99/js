// Function.prototype._bind = function () {
//   let thatFunc = this
//   let args = Array.prototype.slice.call(arguments)
//   let obj = args[0]
//   let arg = args.slice(1)
//   let f =  function () {
//     return thatFunc.apply(this instanceof f ? this : obj, arg.concat([].slice.call(arguments)))
//   }
//   f.prototype = thatFunc.prototype
//   return f
// }

// function deepClone(obj) {
//   let data = null
//   if(obj && typeof obj === 'object') {
//     data = Array.isArray(obj) ? [] : {}
//     for (let key in obj) {
//       data[key] = deepClone(obj[key])
//     }
//   } else {
//     data = obj
//   }
//   return data
// }

// setTimeout(function () {
//   console.log(" set1");
//   new Promise(function (resolve) {
//     resolve();
//   }).then(function () {
//     new Promise(function (resolve) {
//       resolve();
//     }).then(function () {
//       console.log("then4");
//     });
//     console.log("then2 ");
//   });
// });
//
// new Promise(function (resolve) {
//   console.log("pr1");
//   resolve();
// }).then(function () {
//   console.log("then1");
// });
//
// setTimeout(function () {
//   console.log("set2");
// });
//
// console.log(2);
//
// new Promise(function (resolve) {
//   resolve();
// }).then(function () {
//   console.log("then3");
// });
//
// // pr1, 2, then1, then3, set1, then2, then4, set2

// function _new(fn, ...args) {
//   let result = Object.create(fn.prototype)
//   let re = fn.apply(result, args)
//
//   let obj = {}
//   obj.__proto__ = fn.prototype
//   fn.apply(obj, args)
//
//
//   return re instanceof Object ? re : result
// }

// function debounce(func, wait) {
//   let timer
//   return function () {
//     let that = this
//     if (timer) clearTimeout(timer)
//     let later = function () {
//       clearTimeout(timer)
//       func.apply(that, arguments)
//     }
//     setTimeout(later, wait)
//   }
// }

// function throttle(func, wait, mustTime) {
//   let start = new Date(), timer
//   return function () {
//     let that = this, cur = new Date()
//     clearTimeout(timer)
//     if (cur - start > mustTime) {
//       func.apply(that, arguments)
//       start = cur
//     } else {
//       timer = setTimeout(func, wait)
//     }
//   }
// }

// 清除浮动的方法
/***
 * 1. 最后一行加块级元素, clear: both
 * 2. 设置高度
 * 3. 伪元素: div:after
 *              content: ""
 *              display: block
 *              clear: both
 *  开启bfc: 浮动; overflow: auto|hidden|scroll;
 *
 *  1: syn = 1, seq = x
 *  2: syn = 1, ack = x + 1, ACK = 1; seq = y
 *  3: ACK = 1, seq = x + 1, ack = y + 1
 * **/
/**
 *  1.类, id, 标签, 属性, 后代, 伪类
 *  2.for循环, 先sort()再去重, indexof, filter, include, indexOf
 *  3.数组方法: filter, reduce, map, include, findIndex, indexOf, findIndexOf, forEach, sort(), splice, slice, concat, reserve, join, push, pop, shift
 *  4.vuex: state, mutation, getter, action,
 * **/
/**
 * 1.原子性
 * 2.一致性
 * 3.持久性
 * 4.隔离性
 * **/
// Function.prototype._bind = function () {
//   let content = Array.prototype.slice.call(arguments)[0]
//   let arg1 = Array.prototype.slice.call(arguments, 1)
//   let thatFunc = this
//   return function () {
//     thatFunc.apply(content, arg1.concat(Array.prototype.slice.call(arguments)))
//   }
// }
//
// Function.prototype._apply = function (obj, ...args) {
//   obj = window || obj
//   let unqied = "00" + Math.random()
//   while(obj.hasOwnProperty(unqied)) {
//     unqied = "00" + Math.random()
//   }
//   obj[unqied] = this
//   let res = obj[unqied](args)
//   delete obj[unqied]
//   return res
// }
//
// function debounce(func, wait) {
//   let timer
//   return function () {
//     if(timer) clearTimeout(timer)
//     let content = this, argument = Array.prototype.slice.call(arguments)
//     let latter = function () {
//       clearTimeout(timer)
//       func.apply(content, argument)
//     }
//     timer = setTimeout(latter, wait)
//   }
// }
//
// function throttle(func, wait, mustT) {
//   let start = Date.now(), timer
//   return function () {
//     let cur = Date.now()
//     if(cur - start > mustT) {
//       func(this, arguments)
//       start = cur
//     } else {
//       timer = setTimeout(func, wait)
//     }
//   }
// }
//
// let count = 0, stack = [tree], res = []
// function breathFirst() {
//   if(stack[count]) {
//     res.push(stack[count].value)
//     stack.push(stack[count].left)
//     stack.push(stack[count].right)
//     count ++
//     breathFirst()
//   }
// }

/**
 *  301: 永久重定向 => 访问的资源已经分配了新的url, 以后应该使用现在的url
 *  302: 临时重定向 => 访问的资源已经暂时被
 * **/


// function curry(func, curArgs) {
//   return function() {
//     let args = [].slice.call(arguments)
//     if (curArgs !== undefined) {
//       args = args.concat(curArgs)
//     }
//     if (args.length < func.length) {
//       return curry(func, args)
//     }
//     console.log(args)
//     return func.apply(null, args)
//   }
// }
//
// function sum(a, b, c) {
//   return a + b + c
// }
//
// let fn = curry(sum)
// console.log(fn(1, 3)(2))

// function curry(func, curryArgs) {
//   return function() {
//     let args = Array.prototype.slice.call(arguments)
//     if (curryArgs !== undefined) {
//       args = args.concat(curryArgs)
//     }
//     if (args.length < func.length) {
//       return curry(func, args)
//     }
//     return func.apply(null, args)
//   }
// }
//
// function sum(a, b, c) {
//   return a + b + c
// }
//
// let fn = curry(sum)
// console.log(fn(1)(2, 3))

// function _new() {
//   let fn = [].slice.call(arguments)[0]
//   let args = [].slice.call(arguments, 1)
//   let obj = Object.create(fn.prototype)
//   let res = fn.apply(obj, args)
//
// }

Function.prototype._apply = function () {

}