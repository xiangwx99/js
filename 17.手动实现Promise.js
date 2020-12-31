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

function _Promise(constructor) {
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
    constructor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

_Promise.prototype.then = function(onFullfilled, onRejected) {
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

var p = new _Promise(function(resolve,reject) { resolve(1) });
p.then(function(x) { console.log(x) })