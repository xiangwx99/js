// 1.双重for循环去重
function duplicateRemoval1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1)
        j--;
      }
    }
  }
  return arr
}

// 2.使用filter方法去重
function duplicateRemoval2(arr) {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index)
}

//3.利用indexOf去重
function duplicateRemoval3(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// 4.使用sort()先排序后去重
function duplicateRemoval4(arr) {
  arr = arr.sort()
  let array = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] !== arr[i-1]) {
      array.push(arr[i])
    }
  }
  return array
}

// 5.使用ES6 Set去重(ES6中最常使用的方法)
function duplicateRemoval5(arr) {
  let setArray = new Set(arr)    // Set { 1, 2, 4, 5, 6, 7, 3 }
  // return Array.from(setArray) // 方法1
  return [...setArray]           // 方法2
}

// 6.利用includes去重
function duplicateRemoval6(arr) {
  let array = []
  for (let i = 0; i < arr.length; i++) {
    if(!array.includes(arr[i])) {
      array.push(arr[i])
    }
  }
  return array
}

// 7.使用reduce + includes
function duplicateRemoval7(arr) {
  return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], [])
}

// 8.使用特殊方法, 时间复杂度为O(n)
function duplicateRemoval8(arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item] = '';
  })
  return Object.keys(obj)
}


let arr = [1, 2, 4, 4, 5, 6, 6, 7, 7, 1, 1, 3, 3]
console.log(duplicateRemoval3(arr))