/** 模拟视图的渲染 **/
function render() {
  console.log("视图渲染了一次...")
}

let data = { name: "李银河", location: { x: 100, y: 100 }, arr1: [1, 2, 3, 4] }
let arr1 = [1, 2, 3]

observe(data)
observe(arr1)

function observe(data) {
  if (!data || typeof data !== "object") {
    return
  }
  Object.keys(data).forEach(key => defineReactive(data, key, data[key]))
  
  function defineReactive(obj, key, value) {
    observe(value)
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      set: function (newValue) {
        if (value !== newValue) {
          value = newValue
          console.log(value + "=====> set方法")
          render()
        }
      },
      get: function () {
        return value
      }
    })
  }
}

data.name = "猪八戒"
console.log(data)

console.log("========>数组")
data.arr1.push(1) // 不会执行render函数