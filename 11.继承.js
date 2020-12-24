// ES5的继承

/**
 * 1. 原型链实现继承(利用原型让一个引用类型继承另一个引用类型的属性和方法，即让原型对象等于另一个类型的实例)
 * */
function FatherType() {
  this.property = true
}
FatherType.prototype.getFatherType = function() {
  return this.property
}

function SonType() {
  this.sonproperty = false
}
SonType.prototype = new FatherType()
SonType.prototype.getSonType = function() {
  return this.sonproperty
}

let instance = new SonType()
console.log(instance.getFatherType()) // true
console.log(instance.getSonType())    // false
console.log(instance.__proto__)       // FatherType { property: true, getSonType: [Function] }
console.log(instance)                 // FatherType { sonproperty: false }
