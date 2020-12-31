function sayHello(wait) {
  console.log('Hello')
  setTimeout(() => {
    sayHello(wait)
  }, wait)
  
}

sayHello(1000)

