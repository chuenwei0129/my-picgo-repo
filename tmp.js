// 按照犀牛书的定义, 这个可能不属于 curry, 就只是纯粹的链式调用罢了.尽管有些混淆, 还是跟大家分享一下.
const add = sum => {
  const fn = n => add(n + sum)
  fn.toString = () => sum
  return fn
}

add(1)(2)

const add = (...param) => {
  const addSum = param.reduce((prev, next) => prev + next)
  const fn = (...args) => {
    const sum = args.reduce((prev, next) => prev + next)
    return add(addSum + sum)
  }
  fn.valueOf = () => addSum
  return fn
}

console.log(+add(1)(1, 1, 1)(1)) // 5
console.log(+add(1)(2)(3, 4)) // 10

// bind 也是一种偏函数

function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args)
  }
}

function func(a, b, c) {
  return a + b + c
}
