const _setInterval = (fn, delay, ...rest) => {
  let lastTime = Date.now();
  return setInterval(() => {
    let now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = lastTime + delay;
      fn(...rest);
    }
  }, 1);
};

const timer = _setInterval(() => {
  console.log('执行了')
}, 500)
