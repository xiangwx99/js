// getters state mutation action module

function C() {
  let a = b = 0
  a++
  return a
}

C()
console.log(typeof a, typeof b)
console.log(b)

// ``模板字符串  spread/rest  对象解构 箭头函数 let/const

// == 等值
// === 等值 && 等类型

// setInterval(() => console.log(0), 1000)
// setTimeout(() => console.log(0), 1000)

// typeof 结果 => undefine object function number string boolean
// console.log(undefined == null)
// splice slice contact join unshift shift pop push map filter forEach reduce
// call => (, ,  ,) apply => (, []), bind => function
