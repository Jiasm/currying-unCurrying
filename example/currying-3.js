const data = ['1', '2', '3', '4']
console.log(data.map(parseInt))

console.log(data.map(curry(parseInt)))

function curry (func) {
  return function (arg) {
    return func(arg)
  }
}
