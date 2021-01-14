// 1.使用bind的例子
let obj = { name: "猪八戒" };
let greeting = function(str, lang){
  this.value = 'greetingValue';
  console.log("Welcome "+this.name+" to "+str+" in "+lang);
};
let objGreeting = greeting.bind(obj, 'the world');
objGreeting('JS')
/**
 *  bind一共做了四件事情
 *  1. bind改变了greeting中this的指向, 使this指向了obj. 所以this.name == '猪八戒' => 最后bind返回一个函数
 *  2. 可以在调用greeting的时候就开始给greeting传递参数(例子中greeting的第一个参数为: the world)
 *  3. 在调用objGreeting这个函数的时候,再传入剩余的参数(例子中greeting的第二个参数为: JS)
 *  4. bind()函数会创建一个新绑定的函数(bound function. BF).绑定函数也可以使用new运算符构造,提供的this值会被忽略,
 *     但前置参数仍会提供给模拟函数.
 * */
 Function.prototype._bind = function() {
   let thatFunc = this
   let thatArg = arguments[0]
   // bind时候传入的参数
   let args = Array.prototype.slice.call(arguments, 1)
   if (typeof thatFunc !== 'function') {
     throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
   }
   return function() {
     console.log(this)
     // 将bind时候传入的参数与新函数创建的参数合成为一个参数
     let funcArgs = args.concat(Array.prototype.slice.call(arguments))
     thatFunc.apply(thatArg, funcArgs)
   }
 }

let objGreeting2 = greeting._bind(obj, 'the world');
objGreeting2('JS')

/**
 * bind() 函数会创建一个新绑定函数（bound function，BF）。绑定函数也可以使用new运算符构造，提供的this值会被忽略，但前置参数仍会提供给模拟函数。
 * 新的this指向就应该是new运算符构造出来的this指向，即newObj
 *
 *
 * newObj.value应该打印出greeting的value属性，因为newObj应该“继承”自greeting。而我们的myBind，因为内部没有对prototype进行任何的更新，
 * 那么newObj默认继承自_bind返回的匿名函数的原型对象，即Object，Object上没有value，当然打印出来的就是undefined
 * **/
console.log("==================>使用new")
let newObj1 = new objGreeting('JS');  // Welcome undefined to the world in JS
console.log(newObj1.value);           // greetingValue
let newObj2 = new objGreeting2('JS'); // Welcome 猪八戒 to the world in JS
console.log(newObj2.value);           // undefined

Function.prototype._bind2 = function() {
  let thatFunc = this,
    thatArg = arguments[0];
  let args = Array.prototype.slice.call(arguments, 1)
  if (typeof thatFunc !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }
  let fBound  = function() {
    return thatFunc.apply(this instanceof fBound
      ? this
      : thatArg,
      args.concat(Array.prototype.slice.call(arguments)));
  };
  fBound.prototype = thatFunc.prototype;
  return fBound;
}