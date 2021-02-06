let arr = [9, 8, 4, 1, 3, 2, 5, 7, 6, 10]
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
}
console.log(arr)