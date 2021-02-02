function render() {
  console.log('模拟视图的更新')
}
let obj = {
  name: '前端工匠',
  age: { age: 100 },
  arr: [1, 2, 3]
}
let handler = {
  get(target, key) {
    if (typeof target[key] === 'object' && target[key] !== null) {
      return new Proxy(target[key], handler)
    }
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    if (key === 'length') { return true }
    render()
    return Reflect.set(target, key, value)
  }
}

let proxy = new Proxy(obj, handler)
proxy.age.name = '浪里行舟' // 支持新增属性
console.log(proxy.age.name) // 模拟视图的更新 浪里行舟
proxy.arr[0] = '浪里行舟' //支持数组的内容发生变化
console.log(proxy.arr) // 模拟视图的更新 ['浪里行舟', 2, 3 ]
proxy.arr.length-- // 无效
console.log(obj)