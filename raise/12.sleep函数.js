let p = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("1s到了")
  }, 1000)
})

p.then((s) => console.log(s))

//////////////////////////////////////////////

function sleep(wait) {
  return new Promise((resolve) => setTimeout(resolve, wait))
}

async function func() {
  console.log("====开始")
  await sleep(1000)
  console.log("====执行了")
}

func()

/////////////////////////////////////
function bar(callback, wait) {
  console.log("执行了bar")
  setTimeout(callback, wait)
}

function baz() {
  console.log("====执行了baz")
}
bar(baz, 1000)
