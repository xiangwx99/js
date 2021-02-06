function queryTarget(arr, target) {
  let left = 0, right = arr.length - 1
  while(left <= right) {
    let mid = Math.floor((right - left) / 2) + left
    if (arr[mid] > target) {
      right = mid - 1
    } else if (arr[mid] < target) {
      left = mid + 1
    } else if (arr[mid] = target) {
      return mid
    }
  }
  return -1
}

function deepQueryTarget(left, right, arr, key) {
  if (left > right) {
    return -1
  }
  let mid = Math.floor((left + right) / 2)
  if (arr[mid] === key) {
    return mid
  } else if (arr[mid] > key) {
    right = mid - 1
    return deepQueryTarget(left, right, arr, key)
  } else if (arr[mid] < key) {
    left = mid + 1
    return deepQueryTarget(left, right, arr, key)
  }
}

console.log(queryTarget([1, 2, 3, 4, 5, 5], 5))
console.log(deepQueryTarget(0, 5, [1, 2, 3, 4, 5, 5], 5))