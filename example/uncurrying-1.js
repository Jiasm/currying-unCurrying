const unCurrying = require('../common-unCurrying')

let map = unCurrying([].map)
let tags = map(document.querySelectorAll('*'), item => item.tagName)

tags = [...new Set(tags)]
