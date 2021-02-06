/**
 *  1.不绑定key => 节点位置不变, 但是innerText改变
 *  2.绑定key => dom节点位置发生变化, 但是内容没更新
 *
 *  增删: 没有key的情况， 节点位置不变，内容也更新了 ; 有key的情况， 节点删除了 A, B 节点，新增了 F, G 节点
 * **/


/**
 * beforeCreated => created => beforeMounted => 子 => mounted
 *
 * **/
// html语义化 =》 使文章更加的结构化, 便于阅读, 有利于SEO优化, 方便代码的维护

// 盒子模型: border-box: width = width + padding-left + padding-right + border-left-width + border-right-width
// 盒子模型: content-box: width = width
// 浮动元素特征: 开启BFC, 脱离标准流, 不占用空间, 导致父元素的高度坍塌
// 父元素设置: overflow: hidden; div:after { content: "", display: block; clear: both }; 父元素后面加div并设置clear
//js基本数据类型: number, string, boolean, null, undefined, symbol
// string number object boolean undefined
// 事件代理利用的原理: 应该利用的是事件的冒泡, 触发子事件通过捕获传递到子事件, 然后冒泡又触发父事件
// 阻止默认事件: e.preventDefault, 阻止冒泡: e.stopPropagation
// cookie有哪些特征: 每次请求都会携带cookie, 没有设置过期时间则在浏览器关闭就

// call和apply用处相似只是传入的第二个参数有差异(apply传入的第二个参数为数组), 主要用法就是某函数调用call,apply方法, 为他绑定一个this, bind则是返回一个函数
// typeof, instanceof, Object.prototype.toString.call()
// 在跨域请求前， 会发送一个options请求，返回服务器支持哪种请求方式
Function.prototype._apply = function () {
  let that = [].slice.call(arguments)[0], args = [].slice.call(arguments, 1)
  let key = "func"
  while(that.hasOwnProperty(key)) {
    key = Math.random() * 10 + "func"
  }
  that[key] = this
  let res = that[key](args)
  delete that[key]
  return res
}

Function.prototype._bind = function () {
 let that = Array.prototype.slice.call(arguments)[0], args1 = Array.prototype.slice.call(arguments, 1), func = this
 let found = function () {
    return func.apply(this instanceof found ? this : that, args1.concat([].slice.call(arguments)))
 }
 found.prototype = func.prototype
  return found
}

function debounce(func, wait) {
  let timer
  return function () {
    if (timer) clearTimeout(timer)
    let that = this, args = [].slice.call(arguments)
    let latter = function () {
      clearTimeout(timer)
      func.apply(that, args)
    }
    timer = setTimeout(latter, wait)
  }
}

function throttle(func, wait, mustT) {
  let start = Date.now(), timer
  return function () {
    let cur = Date.now()
    clearTimeout(timer)
    if (cur - start > mustT) {
      func.apply()
      start = cur
    } else {
      timer = setTimeout(func, wait)
    }
  }
}

function deepClone(obj) {
  let data
  if (obj && typeof obj === 'object') {
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Date) return new Date(obj)
    data = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        data[key] = deepClone(obj[key])
      }
    }
  } else {
    data = obj
  }
  return data
}

function flatten1(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

function flatten2(arr) {
  let newArr = []
  if (Array.isArray(arr)) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        newArr.push(...flatten2(item))
      } else {
        newArr.push(item)
      }
    })
  } else {
    newArr.push(arr)
  }
  return newArr
}

Array.prototype._map = function (callback) {
  for (let i in this) {
    this[i] = callback(this[i], i, this)
  }
}
Object.defineProperty(Array.prototype, "_map", {
  enumerable: false
})

function _new() {
  let args = Array.prototype.slice.call(arguments)
  let obj = Object.create(args[0].prototype)
  let res = args[0].apply(obj, args[1])
  return res instanceof args[0] ? res : obj
}

function f() {
  console.log("执行了")
  let timer = setTimeout(function () {
    f()
    clearTimeout(timer)
  }, 1000)
}

function func(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

function fill(value, start, end) {
  let that = this
  let ends = end ? end : that.length
  console.log(start)
  for (let i in that) {
    if (i >= start && i < ends) {
      that[i] = value
    }
  }
  return that
}

Array.prototype._filter = function (callback) {
  let newArr = []
  for (let i in this) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr
}
// arr._filter(item => item === 3)

function sleep1() {
  return new Promise((resolve, rejected) => setTimeout(function () {
    resolve("aaa")
  }, 1000))
}
// sleep().then(value => console.log(value))

function $_ajax(methods, data, url) {
  let xml = new XMLHttpRequest()
  if (methods === "get") {
    url += "?"
    url += data
    xml.open(methods, url)
    xml.send()
  } else {
    xml.open(methods, url)
    xml.send(data)
  }
  xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
      console.log(xml.responseText)
    }
  }
}

function _new(fn, ...args) {
  let obj = Object.create(fn.prototype)
  let res = fn.apply(obj, args)
  return res instanceof obj ? res : obj
}

function _created(obj) {
  function F() {}
  F.prototype = obj
  return new  F()
}

function loop() {
  console.log( "===")
  let timer = setTimeout(function () {
    loop()
    clearTimeout(timer)
  }, 1000)
}

async function start() {
  console.log("开始")
  await sleep()
  console.log("结束")
}
function sleep() {
  return new Promise(resolve => setTimeout(function () {
    resolve()
  }, 1000))
}

function jsonP() {
  let scriptElement = document.createElement("script")
  script.src = "http://127.0.0.1:8080/?" + "callback"
  document.head.appendChild(scriptElement)
}

function _promise(constructor) {
  let self = this
  self.status = "pending"
  self.value = undefined
  self.reason = undefined
  self.onFullfilledArray = []
  self.onRejectedArray = []
  function resolve(value) {
    if (self.status = "pending") {
      self.status = "resolved"
      self.value = value
      self.onFullfilledArray.forEach((f) => f(self.value))
    }
  }
  function rejected(reason) {
    if (self.status = "pending") {
      self.status = "rejected"
      self.reason = reason
      self.onRejectedArray.forEach(function (f) {
        f(self.reason)
      })
    }
  }
  try {
    constructor(resolve, rejected)
  } catch (e) {
    rejected(e)
  }
}
_promise.prototype.then = function (onFullFilled, onRejected) {
  let self = this
  switch (self.status) {
    case "pending":
      _promise = new _promise(function (resolve, rejected) {
        self.onFullfilledArray.push(function () {
          try {
            let temple = onFullFilled(self.value)
            resolve(temple)
          } catch (e) {
            rejected(e)
          }
        })
        self.onRejectedArray.push(function () {
          try {
            let temple = onRejected(self.value)
            rejected(temple)
          } catch (e) {
            rejected(e)
          }
        })
      })
    case "resolved":
      _promise = new _promise(function (resolve, rejected) {
        try {
          let template = onFullFilled(self.value)
          resolve(template)
        } catch (e) {
          rejected(e)
        }
      })
      break
    case "rejected":
      _promise = new _promise(function (resolve, rejected) {
        try {
          let template = onRejected(self.value)
          rejected(template)
        } catch (e) {
          rejected(e)
        }
      })
      break
    default:
      break
  }
}

function mixin(arr) {
  let length = arr.length, otherArr = []
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * length)
    if (arr[index]) {
      otherArr.push(arr[index])
      arr.splice(index, 1)
      --i
    }
  }
  return arr.concat(otherArr)
}

//用两个栈来实现一个队列，完成队列的Push和Pop操作。
var stackPush = [];
var stackPop = [];

function push(node) {
  // write code here
  stackPush.push(node);
}

function pop() {
  if (stackPop.length==0 && stackPush.length==0) {
    console.log("Queue is empty!");
  } else if (stackPop.length==0) {
    while (!stackPush.length==0) {
      stackPop.push(stackPush.pop());
    }
  }
  return stackPop.pop();
}//用两个栈来实现一个队列，完成队列的Push和Pop操作。
var stackPush = [];
var stackPop = [];

function push(node) {
  // write code here
  stackPush.push(node);
}

function pop() {
  if (stackPop.length==0 && stackPush.length==0) {
    console.log("Queue is empty!");
  } else if (stackPop.length==0) {
    while (!stackPush.length==0) {
      stackPop.push(stackPush.pop());
    }
  }
  return stackPop.pop();
}

function flatten1(arr) {
  return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatten1(cur) : cur), [])
}

function deleteArray(arr) {
  // return arr.filter((item, index, arr) => arr.indexOf(item) === index)
  return arr.reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), [])
}

console.log(deleteArray([1,1111, 1]))