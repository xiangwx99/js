function statistics(str) {
  let obj = {}
  for (let i = 1; i < str.length; i++) {
    let key = str[i]
    if(obj[key]) {
      obj[key]++
    } else {
      obj[key] = 1
    }
  }
  return obj
}

let str = 'dsfjsahfsaoifhisufhlAdjs'
console.log(statistics(str))