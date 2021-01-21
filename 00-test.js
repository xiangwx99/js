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
 * **/
