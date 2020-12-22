// 1.使用call的例子
let Person = {
  fullName: function(args) {
    console.log(args + this.firstName + this.lastName)
  }
}

let p1 = { firstName: '猪', lastName: '八戒' }
Person.fullName.call(p1, 'Hello')

/** call做了以下几件事情
 *  1.Person.fullName.call(p1, 'Hello')这个函数调用的时候this的指向改变了(this绑定为传入的第一个参数)
 *  2.从call函数传入的第二个参数开始，作为person.fullName的参数传入。
 *  3.不更改person和person1的任何属性和方法。
 */
 
Function.prototype._call = function(obj, ...args) {
  // 第一个参数为null的情况下: obj => 指向window
  obj = obj || window
  // 为了防止对象已经有了此属性,所以在这儿随机生成不重复属性
  let uniqueID = '00' + Math.random()
  while(obj.hasOwnProperty(uniqueID)) {
    uniqueID = '00' + Math.random()
  }
  // 将函数添加到这个属性
  obj.uniqueID = this
  // 执行函数, 并返回结果
  let res = obj.uniqueID(...args)
  // 删除对象添加的属性
  delete obj[uniqueID]
  return res
}

/**
 * apply与call的不同为: apply传递的参数为数组
 */

Function.prototype._apply = function(obj, args) {
  // 第一个参数为null的情况下: obj => 指向window
  obj = obj || window
  // 为了防止对象已经有了此属性,所以在这儿随机生成不重复属性
  let uniqueID = '00' + Math.random()
  while(obj.hasOwnProperty(uniqueID)) {
    uniqueID = '00' + Math.random()
  }
  // 将函数添加到这个属性
  obj.uniqueID = this
  // 执行函数, 并返回结果
  let res = obj.uniqueID(args)
  // 删除对象添加的属性
  delete obj[uniqueID]
  return res
}

Person.fullName._call(p1, 'Hello')
Person.fullName._apply(p1, ['Hello', '12'])