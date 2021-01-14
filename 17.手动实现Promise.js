/**
 * 1. promise是一个对象或者是函数， 该对象或者函数有一个then方法
 * 2. thenable是一个对象或者函数，用来定义then方法
 * 3. value是promise状态成功时的值
 * 4. reason是promise状态失败时的值
 *
 *
 * 要求：
 *      1. 一个promise必须有三个状态pending，resolved(fulfilled), rejected相当于pending状态的时候,可以转移到fulfilled(resolve)或者
 *         rejected状态. 当处于fulfilled(resolved)状态或者rejected状态的时候,就不可改变
 *      2. 一个promise必须有一个then方法, then方法接受两个参数
 *      3. 为了实现链式调用, then方法必须返回一个promise
 * **/

// 版本1.0 ===========> 不支持异步操作
function _Promise1(constructor) {
  let self = this
  self.status = 'pending'    // 定义改变前的初始状态
  self.value = undefined     // 定义状态为resolved的时候的状态
  self.reason = undefined    // 定义状态为rejected的时候的状态
  function resolve(value) {
    if(self.status === 'pending') {
      self.value = value
      self.status = 'resolved'
    }
  }
  function reject(reason) {
    if(self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected'
    }
  }
  try {
    // 调用传入的函数, 并且将resolve, reject函数当做参数传入
    constructor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

_Promise1.prototype.then = function(onFullfilled, onRejected) {
  let self = this
  switch (self.status) {
    case 'resolved':
      onFullfilled(self.value)
      break
    case 'rejected':
      onRejected(self.reason)
      break
    default:
  }
}

let p1 = new _Promise1(function(resolve,reject) { setTimeout(function () {
  resolve(1)
}, 1) });
p1.then(function(x) { console.log(x) })

let p2 = new _Promise1(function (resolve, reject) {
  resolve(1)
})
p2.then(function(x) { console.log(x) })

// 基础版2.0 ===========> 支持异步操作但是不支持then链式调用返回一个promise
function _Promise2(constructor) {
  let self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined
  self.onFullfilledArray = []
  self.onRejectedArray = []
  // 异步函数刚开始不会执行下面的方法, 所以先调用then方法, 将异步函数加入数组, 再继续使用resolve(reject)方法
  function resolve(value) {
    if(self.status === 'pending') {
      self.status = 'resolved'
      self.value = value
      self.onFullfilledArray.forEach(function func(f) {
        f(self.value)
        // 如果状态从pending转换为resolved则遍历执行里面的异步方法
      })
    }
  }
  function reject(reason) {
    if(self.status === 'pending') {
      self.status = 'rejected'
      self.value = reason
      self.onRejectedArray.forEach(function func(f) {
        f(self.value)
        // 如果状态从pending转换为rejected则遍历执行里面的异步方法
      })
    }
  }
  try {
    constructor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
// 这个then方法返回的不是一个promise
_Promise2.prototype.then = function (onFullfilled, onRejected) {
  let self = this
  switch (self.status) {
    case 'pending':
      // 状态为pending的时候 ==> 向数组里面添加方法
      self.onFullfilledArray.push(function () {
        onFullfilled(self.value)
      })
      self.onRejectedArray.push(function () {
        onRejected(self.reason)
      })
      break
    case 'resolved':
      onFullfilled(self.value)
      break
    case 'rejected':
      onRejected(self.reason)
      break
    default:
      return
  }
}

// then方法返回一个promise, 同时在返回的promise构造体里面增加错误处理的部分
_Promise2.prototype.then = function(onFullfilled, onRejected) {
  let self = this
  let promise2
  switch (self.value) {
    case 'pending':
      promise2 = new _Promise2(function (resolve, reject) {
        self.onFullfilledArray.push(function () {
          try {
            let temple = onFullfilled(self.value)
            resolve(temple)
          } catch (e) {
            reject(e)
          }
        })
        self.onRejectedArray.push(function (resolve, reject) {
          try {
            let temple = onRejected(self.reason)
            reject(temple)
          } catch (e) {
            reject(e)
          }
        })
      })
      break
    case 'resolved':
      promise2 = new _Promise2(function (resolve, reject) {
        try {
          let temple = onFullfilled(self.value)
          // 将then里面的方法传递到下一个promise状态里面
          resolve(temple)
        } catch (e) {
          reject(e)
        }
      })
      break
    case 'rejected':
      promise2 = new _Promise2(function (resolve, reject) {
        try {
          let temple = onRejected(self.reason)
          reject(temple)
        } catch (e) {
          reject(e)
        }
      })
      break
    default:
      return
  }
}

// 到这儿实现了then的链式调用但是then函数里面的onFullfilled, onRejected方法的返回值可以是对象, 函数, 甚至是一个promise





let p3 = new _Promise2(function(resolve,reject) { setTimeout(function () {
  resolve(1)
}, 1000) });
p3.then(function(x) { console.log(x) })


let p4 = new _Promise2(function (resolve, reject) {
  resolve(1)
})
p4.then(function(x) { console.log(x) })