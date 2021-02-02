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
  let self = this, $_promise
  switch (self.value) {
    case "pending":
      $_promise = new _Promise(function (resolve, reject) {
        self.onFullfilledArray.push(function () {
          try {
            let temple = onFullfilled(self.value)
            resolve(temple)
          } catch (e) {
            reject(e)
          }
        })
        self.onRejectedArray.push(function () {
          try {
            let temple = onRejected(self.reason)
            reject(temple)
          } catch (e) {
            reject(e)
          }
        })
      })
    case "resolved":
      $_promise = new _Promise(function (resolve, reject) {
        try {
          let temple = onFullfilled(self.value)
          resolve(temple)
        } catch (e) {
          reject(e)
        }
      })
      break
    case "rejected":
      $_promise = new _Promise(function (resolve, reject) {
        try {
          let temple = onRejected(self.reason)
          reject(temple)
        } catch (e) {
          reject(e)
        }
      })
      break
    default:
      break
  }
}