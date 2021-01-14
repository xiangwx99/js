function _Promise(constructor) {
  let self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined
  function resolve(value) {
    if(self.status === 'pending') {
      self.status = 'resolve'
      self.value = value
    }
  }
  function reject(reason) {
    if(self.status === 'pending') {
      self.status = 'reject'
      self.value = reason
    }
  }
  try {
    constructor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
_Promise.prototype.then = function(onFillfilled, onRejected) {
  let self = this
  switch (self.status) {
    case 'resolve':
      onFillfilled(self.value)
      break
    case 'reject':
      onRejected(self.reason)
      break
    default:
  }
}

let p = new _Promise(function (resolve, reject) {
  resolve(1)
})
p.then(function(x) {
  console.log(x)
})