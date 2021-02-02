function deepClone(obj) {
  let data = null
  if (obj && typeof obj === "object") {
    if (obj instanceof RegExp) { return new RegExp(obj) }
    if (obj instanceof Date) { return new Date(obj) }
    data = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        data[key] = deepClone(obj[key])
      }
    }
  } else {
    data = obj
  }
  return data
}

let a = {
  name: "猪八戒",
  location: { x: 100, y: 100 },
  arr: [1, 2, 3],
  time: new Date()
}
let b = deepClone(a)
b.arr[0] = [1, 2, 3]
console.log(a)
console.log(b)