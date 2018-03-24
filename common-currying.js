function currying (func, ...preArgs) {
  let self = this
  return function (...args) {
    return func.apply(self, [].concat(preArgs, args))
  }
}

module.exports = currying
