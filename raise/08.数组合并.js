const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
const arr2 = ['A', 'B', 'C', 'D']
const ret = []
let tmp = arr2[0]
let j = 0
for (let i = 0; i < arr1.length; i++) {
  if (tmp === arr1[i].charAt(0)) {
    ret.push(arr1[i])
  } else {
    ret.push(tmp)
    ret.push(arr1[i])
    tmp = arr2[++j]
  }
}
ret.push(arr2[j])
console.log(ret)