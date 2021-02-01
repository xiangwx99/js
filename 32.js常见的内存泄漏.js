/**
 * 1. 以外的全局变量: 在函数的内部忘记使用var声明变量, 实际上js会把bar挂载到全局变量上,意外创建一个全局变量;
 *                 另一个意外的全局变量可能由 this 创建。
 *    解决方法: 在JavaScript文件头上加上use struct, 使用严格模式避免全局变量, 此时下列中的this指向undefined,如果必须使用全局变量存储大量数据时，确保用完以后把它设置为 null 或者重新定义。
 * **/
function foo() {
  bar = "this is a global variable"
}

function foo() {
  bar = "this is a global variable"
}
foo()

/**
 * 2.被遗忘的计时器或者回调函数: setInterval
 * **/

/**
 * 3.脱离DOM的引用: 如果把DOM 存成字典（JSON 键值对）或者数组，此时，同样的 DOM 元素存在两个引用：一个在 DOM 树中，另一个在字典中。那么将来需要把两个引用都清除。
 * **/

var elements = {
  button: document.getElementById('button'),
  image: document.getElementById('image'),
  text: document.getElementById('text')
};
function doStuff() {
  image.src = 'http://some.url/image';
  button.click();
  console.log(text.innerHTML);
  // 更多逻辑
}
function removeButton() {
  // 按钮是 body 的后代元素
  document.body.removeChild(document.getElementById('button'));
  // 此时，仍旧存在一个全局的 #button 的引用
  // elements 字典。button 元素仍旧在内存中，不能被 GC 回收。
}

/**
 * 4.闭包: 闭包的关键是匿名函数可以访问父级作用域的变量。
 * **/

var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
    if (originalThing)
      console.log("hi");
  };
  
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log(someMessage);
    }
  };
};

setInterval(replaceThing, 1000);