// console.log('1');
//
// // 宏1
// setTimeout(function() {
//   console.log('2');
//   process.nextTick(function() {
//     console.log('3');
//   })
//   new Promise(function(resolve) {
//     console.log('4');
//     resolve();
//   }).then(function() {
//     console.log('5')
//   })
// })
//
// // 微1
// new Promise(function(resolve) {
//   console.log('7');
//   resolve();
// }).then(function() {
//   console.log('8')
// })
// process.nextTick(function() {
//   console.log('6');
// })
//
// // 宏2
// setTimeout(function() {
//   console.log('9');
//   process.nextTick(function() {
//     console.log('10');
//   })
//   new Promise(function(resolve) {
//     console.log('11');
//     resolve();
//   }).then(function() {
//     console.log('12')
//   })
// })

// 微任务首先执行nextTick部分
// 1 7 8 6 2 4 3 5 9 11 10 12
// 1 7 6 8 2 4 3 5 9 11 10 12

// let tree = {
//   value: "-",
//   left: {
//     value: '+',
//     left: {
//       value: 'a',
//     },
//     right: {
//       value: '*',
//       left: {
//         value: 'b',
//       },
//       right: {
//         value: 'c',
//       }
//     }
//   },
//   right: {
//     value: '/',
//     left: {
//       value: 'd',
//     },
//     right: {
//       value: 'e',
//     }
//   }
// }

// let res = []
// let stack = [tree]
// let count = 0
// function breadthFirst(tree) {
//   let node = stack[count]
//   if(node) {
//     res.push(node.value)
//     if(node.left) stack.push(node.left)
//     if(node.right) stack.push(node.right)
//     count ++
//     breadthFirst()
//   }
// }
// breadthFirst()
// console.log(res)

// Function.prototype._new = function(Obj, ...args) {
//   Obj = Obj || window
//   let obj = Object.create(Obj.prototype)
//   obj = Obj.apply(obj, args)
//   return obj instanceof Obj ? obj : Obj
// }
//防抖函数
// function debounce(func, wait) {
//   let timer
//   return function() {
//     let content = this
//     let arguments = Array.prototype.splice.call(arguments)
//     if(timer) clearTimeout(timer)
//     let later = function() {
//       timer = null
//       func.apply(content, arguments)
//     }
//     timer = setTimeout(later, wait)
//   }
// }
// 节流函数
// function throttle(func, wait, mustRun) {
//   let timer
//   let start = new Date()
//   return function() {
//     let curTime = new Date()
//     let that = this,
//         args = Array.prototype.slice.call(arguments)
//     if (curTime - start >= mustRun) {
//       func.apply(that, args)
//       start = curTime
//     } else {
//       timer = setTimeout(func, wait)
//     }
//   }
// }

function render() {
  console.log("===>渲染完毕")
}

function observe(obj) {
  if(obj && typeof obj === 'object' ) {
    Object.keys(obj).forEach(key => { defineReactive(obj, key, obj[key]) })
    function defineReactive(obj, key, value) {
      observe(obj)
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function() {
          return value
        },
        set: function(newV) {
          observe(newV)
          if(newV !== value) {
            value = newV
            render()
          }
        }
      
      })
    }
  } else {
    return
  }
}



let obj = { name: "zhubajie" }
observe(obj)