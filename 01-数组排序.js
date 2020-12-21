// 主要针对可以转换为数字的字符串(下面例子均为升序)
// 1.利用sort方法排序
function sortArray1(arr) {
  // 假如前面大于后面 => true
  return arr.sort((pre, cur) => pre - cur)
}

// 2.冒泡排序
function sortArray2(arr) {
  let temp;
  for(let i = 0; i < arr.length-1; i++){
    for(let j=0; j < arr.length-1; j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

// 3.选择排序
function sortArray3(arr) {
  let temp;
  for(let i=0; i < arr.length-1; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

// 4.快速排序
function sortArray4(arr){
  if(arr.length <= 1){
    return arr;
  }
  let left = [];
  let right = [];
  let midIndex = parseInt(arr.length / 2);
  let mid = arr[midIndex];
  for(let i = 0 ; i < arr.length ; i++){
    if(i == midIndex) continue;
    if(arr[i] < mid){
      left.push(arr[i])
    }else{
      right.push(arr[i]);
    }
  }
  return sortArray4(left).concat([mid],sortArray4(right));
}

// 5.插入排序
function sortArray5(arr) {
  for(let i = 0; i < arr.length; i++){
    let n=i;
    while(arr[n] > arr[n+1] && n >= 0){
      let temp = arr[n];
      arr[n] = arr[n+1];
      arr[n+1] = temp;
      n--;
    }
  }
  return arr
}

// 6.希尔排序
function sortArry6(arr){
  let interval = parseInt(arr.length / 2);  //分组间隔设置
  while(interval > 0){
    for(let i = 0 ; i < arr.length ; i ++){
      let n = i;
      while(arr[n] < arr[n - interval] && n > 0){
        let temp = arr[n];
        arr[n] = arr[n - interval];
        arr[n - interval] = temp;
        n = n - interval;
      }
    }
    interval = parseInt(interval / 2);
  }
  return arr;
}

let arr = [1, 5, 6, 2, 6, 7, 2]
console.log(sortArray2(arr))