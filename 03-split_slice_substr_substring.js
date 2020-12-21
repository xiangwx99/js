// 1.split用于字符串转数组, 按照指定参数的形式进行切割
console.log("======================>使用split")
let str = 'a-b-g-jj-gg'
console.log(str.split('-'));                  // [ 'a', 'b', 'g', 'jj', 'gg' ]

// 数组部分

// 2.splice(操作位置开始下标; 删除数组个数; 在下标为参数1的位置添加元素) => 改变原数组, 返回值为删除的元素(无删除则为空数组)
console.log("======================>使用splice")
let arr1 = [1, 2, 3, 4, 5, 6]
console.log(arr1.splice(3), arr1);            // [4, 5, 6] [1, 2, 3]
console.log(arr1.splice(1, 2), arr1);         // [2, 3] [1]
console.log(arr1.splice(1, 2, 'ha'), arr1);   // [] [1, 'ha]

// 3.slice(操作位置开始下标; 截取截止位置但是不包含此位置) => 不改变原数组, 返回值为截取的部分(数组, 字符串均可用)
console.log("======================>使用slice")
let arr2 = [1, 2, 3, 4, 5, 6]
console.log(arr2.slice(1), arr2);             // [ 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]
console.log(arr2.slice(1, 3), arr2);          // [ 2, 3 ] [ 1, 2, 3, 4, 5, 6 ]

// 4.substr(操作开始位置, 用于截取指定长度字符串) => 返回为截取部分,只能用于字符串
console.log("======================>使用substr")
let arr3 = '123456'
console.log(arr3.substr(1), arr3);            // '23456' '123456'
console.log(arr3.substr(1, 2), arr3);         // '23' '123456'

// 5.substring(操作开始位置, 结束位置但是不包含此位置) => 返回为截取部分
console.log("======================>使用substring")
let arr4 = '123456'
console.log(arr4.substring(1), arr4);         // '23456' '123456'
console.log(arr4.substring(1,4), arr4);       // '234' '123456'