console.log("====================================================================================浅拷贝")
// 1.浅拷贝
/**
 *  1. 将需要拷贝的数据(obj)作为形参传入
 *  2. 声明一个变量(data),来储存拷贝出来的内容
 *  3. 循环obj中的每一项, 判断obj上有在这一项
 *  4. 将obj中的每一项赋值给data
 *  5. 将data返回
 * */

// 1.利用函数实现浅拷贝
function shallowCopy(obj) {
  let data = {}
  for(let i in obj) {
    if(obj.hasOwnProperty(i)) {
      data[i] = obj[i]
    }
  }
  return data
}

let obj = { name: '猪八戒', age: 18, work: { salary: 8000 } }
let obj1 = shallowCopy(obj)
obj1.name = '孙悟空'          //name是基本数据类型所以会开辟一个新的地址来存储拷贝的内容 => 原始的name不会被修改
obj1.work.salary = '6000'    //work是引用类型，浅拷贝会直接拷贝它的地址，所以原数据的这个值也会改变
console.log(obj)

// 2.直接赋值

// 3.使用Object.assign(target, ...source)

console.log("====================================================================================深拷贝")
/**
 * 1. 将要拷贝的数据 obj 以参数的形式传参
 * 2. 声明一个变量 来储存我们拷贝出来的内容
 * 3. 判断 obj 是否是引用类型数据，如果不是，则直接赋值即可（ 可以利用 obj instanceof Type 来进行判断），
 * 4. 由于用 instanceof 判断array 是否是object的时候，返回值为true, 所以我们在判断的时候，直接判断obj 是否是Array 就可避免这个问题
 * 5. 根据判断的不同类型，再给之前的变量赋予不同的类型： [ ] : { }
 * 5. 循环obj 中的每一项，如果里面还有复杂数据类型，则直接利用递归再次调用copy函数
 * 6. 最后 将 这个变量 return 出来即可
 * */

// 1.方法一
function  deepCopy(obj) {
  let data = null
  if(obj && typeof obj === 'object') {
    // 判断obj是数组还是对象
    data = Array.isArray(obj) ? [] : {};
    for(let i in obj) {
      data[i] = deepCopy(obj[i])
    }
  } else {
    data = obj
  }
  return data
}

let deepObj1 = {
  name:"test",
  main:{ a:1, b:2 },
  fn:function(){},
  friends:[1,2,3,[22,33]]
}

let deepObj2 = deepCopy(deepObj1)
deepObj2.main.a = 2
console.log(deepObj2)
console.log(deepObj1)

// 2.方法二: 使用JSON.stringify(X)方法(不足之处在于: 其中X只能是Number, String, Boolean, Array, 扁平对象，即那些能够被 JSON 直接表示的数据结构。)
let temp = JSON.stringify(deepObj1)
console.log(temp)
let deepObj3 = JSON.parse(temp)
console.log(deepObj3)