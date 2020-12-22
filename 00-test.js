Function.prototype._bind = function () {
  let args = Array.prototype.slice.call(arguments)
  let that = args[0]
  let func = this
  return function () {
    func.apply(that, args.concat(Array.prototype.slice.call(arguments)))
  }
}

// 1. 创建一个对象 => 对象的作用域指向实例的作用域, 用构造函数的