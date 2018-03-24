function unCurrying (func, ...preArgs) {
  return function (reference, ...args) {
    return func.apply(reference, [].concat(preArgs, args))
  }
}

module.exports = unCurrying
