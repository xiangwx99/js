let arr1 = [1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8]
let arr2 = [0, 1, 2, 3, 4]

// 交集
let arr3 = arr1.filter(item => arr2.indexOf(item) !== -1)
console.log([...new Set(arr3)])

// 并集
let arr4 = arr1.concat(arr2)
console.log(arr4)

// 差集
let arr5 = arr1.filter(item => arr2.indexOf(item) === -1)
console.log(arr5)