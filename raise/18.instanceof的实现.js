function instanceofObj(a, b) {
  // 模拟 a instanceof b, 即判断a.__proto__ 是否等于 b.prototype
  let aProto = a.__proto__
  let bPrototype = b.prototype
  let state = false
  while(true) {
    if (aProto == null) {
      state = false
      break
    }
    if (aProto === bPrototype) {
      state = true
      break
    }
    aProto = aProto.__proto__
  }
  return state
}

console.log(instanceofObj([], Array))
