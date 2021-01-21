/**
 *  1. 宏任务 => setTimeout/setInterval/script (可以理解为外层同步代码)
 *  2. 微任务 =>  Promise/MutaionObserver/Object.observe（已废弃；Proxy 对象替代）/process.nextTick（Node.js）
 * **/


console.log('1')                         // 宏任务: h1[0]
setTimeout(function () {         // 宏任务: h2[0]
  console.log('2')
});

new Promise(function (resolve) {
  console.log('3');                      // 宏任务: h1[1]
  resolve();                             // 微任务: w1[0]
}).then(function () {
  console.log('4')
  setTimeout(function () {
    console.log('5')
  });
});

// 1 3 4 2 5

console.log('script start');

setTimeout(function() {
  console.log('timeout1');
}, 10);

new Promise(resolve => {
  console.log('promise1');
  resolve();
  setTimeout(() => console.log('timeout2'), 10);
}).then(function() {
  console.log('then1')
})

console.log('script end');

// script start, promise1, script end,

