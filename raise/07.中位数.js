const findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2).sort()
  let mid = Math.floor(arr.length / 2)
  console.log(arr.length)
  if (arr.length % 2 !== 0) {
    return arr[mid]
  } else {
    return (arr[mid] + arr[mid - 1]) / 2
  }
};

console.log(findMedianSortedArrays([3, -2], [-1]))