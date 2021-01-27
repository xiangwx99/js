function curry(fn, currArgs){      // 这里的fn就是sum方法
  return function() {
    let args=[].slice.call(arguments);
    // 首次调用时未提供参数currArgs，因此不用进行拼接执行
    if(currArgs !== undefined){
      args=args.concat(currArgs);  // 这里的currArgs是上次递归传递进来的，也就是上次递归的args
    }
    // 递归调用
    if(args.length < fn.length){
      return curry(fn, args);
    }
    return fn.apply(null, args);   // 这里调用了apply方法，将收集起来的args参数全都传入fn中
  }
}

function sum(a, b, c){
  return a + b + c;
}
const fn=curry(sum);
console.log(
  fn(1)(2)(3),
  fn(1)(2,3),
  fn(1,2,3),
  fn(1, 2)(3)
)
