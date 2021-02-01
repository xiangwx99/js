function _Promise(constructor) {
  let self = this
  self.status = "pending"
  self.value = undefined
  self.reason = undefined
  self.onFullfilledArray = []
  self.onRejectedArray = []
  function resolved(value) {
    if(self.status === "pending") {
      self.status = "resolved"
      self.value = value
      self.onFullfilledArray.forEach(function f() {
        f(value)
      })
    }
  }
  function rejected(reason) {
    if(self.status === "pending") {
      self.status = "rejected"
      self.reason = reason
      self.onRejectedArray.forEach(function f() {
        f(reason)
      })
    }
  }
  try {
    constructor(resolved, rejected)
  } catch (e) {
    rejected(e)
  }
}

_Promise.prototype.then = function (onFullfilled, onRejected) {
  let self = this
  switch (self.value) {
    case "pending":
      self.onFullfilledArray.push(function () {
        onFullfilled(self.value)
      })
      self.onRejectedArray.push(function () {
        onRejected(self.reason)
      })
    case "resolved":
      onFullfilled(self.value)
      break
    case "rejected":
      onRejected(self.reason)
      break
    default:
      break
  }
}