const currying = require('../common-currying')

let sum = (a, b, c) => a + b + c // 一个进行三个参数求和的函数
let sum1 = currying(sum, 10)     // 固定第一个参数

console.log(sum1(1, 1))          // 12
console.log(sum1(2, 2))          // 14

let sum2 = currying(sum1, 20)    // 固定第二个参数

console.log(sum2(1))             // 31
console.log(sum2(2))             // 32
