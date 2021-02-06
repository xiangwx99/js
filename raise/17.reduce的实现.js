//reduce（）函数接受两个参数，一个函数一个累积变量的初始值。
//函数有四个参数：累计变量初值（默认第一个成员），当前变量值（默认第二个成员），当前位置，数组自身。
//arr.reduce(function(prev, cur, index, arr){}, initialValue)
Array.prototype.myReduce=function(fn,base){
  if(typeof fn !== 'function'){
    throw new TypeError("arguments[0] is not a function");//TypeError是错误的类型之一：类型错误
  }

  let initialArr = this;//调用myReduce()函数的当前对象
  let arr = initialArr.concat();//目的是返回一个等于初始数组的新数组，后面的操作都基于arr，这样初始数组不会发生改动
  let index, newValue;

  if(arguments.length == 2){
    arr.unshift(base);
    index = 0; //！！当前位置 指的是当前变量（第二个参数）针对调用该方法的数组位置即initialArr
  }else{
    index=1;
  }

  if(arr.length === 1){//长度为1 直接返回
    newValue=arr[0];
  }

  while(arr.length > 1){
    newValue = fn.call(null,arr[0],arr[1],index,initialArr);
    index++;
    arr.splice(0,2,newValue);//删除前两位 然后把累加值添加到第一位
  }
  return newValue;
};

Array.prototype._reduce = function (fn, initValue) {
  if (initValue === undefined && !this.length) {
    return new Error("myReduce of empty array with no initial value")
  }
  let result = initValue ? initValue : this[0]
  for (let i = initValue ? 0 : 1; i < this.length; i++) {
    result = fn(result, this[i], i, this)
  }
  return result
}

console.log([1, 2, 3]._reduce((pre, cur) => cur + pre))