console.log('1');

// 宏1
setTimeout(function() {
  console.log('2');
  process.nextTick(function() {
    console.log('3');
  })
  new Promise(function(resolve) {
    console.log('4');
    resolve();
  }).then(function() {
    console.log('5')
  })
})

// 微1
new Promise(function(resolve) {
  console.log('7');
  resolve();
}).then(function() {
  console.log('8')
})
process.nextTick(function() {
  console.log('6');
})

// 宏2
setTimeout(function() {
  console.log('9');
  process.nextTick(function() {
    console.log('10');
  })
  new Promise(function(resolve) {
    console.log('11');
    resolve();
  }).then(function() {
    console.log('12')
  })
})

// 微任务首先执行nextTick部分
// 1 7 8 6 2 4 3 5 9 11 10 12
// 1 7 6 8 2 4 3 5 9 11 10 12