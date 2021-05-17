const a = ["sst", "ban", "cli", "cli", "ban", "ban"]


function sortWithMap(array) {
  let map = new Map()
  array.forEach((item) => map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1))

  return [...map]
    .sort((a, b) => a[1] > b[1] ? -1 : 0)
    .map(i => i[0])
}

console.log(sortWithMap(a))


function sortWithReduce(array) {
  let sortObject = array.reduce((ac, val) => {
    val in ac ? ac[val] += 1 : ac[val] = 1
    return ac
  }, {})

  return Object.entries(sortObject)
    .sort((a, b) => a[1] > b[1] ? -1 : 0)
    .map(i => i[0])
}

console.log(sortWithReduce(a))


function ftr(a) {
  let summ = 0

  function creatKarStrange(c) {
    if (c) {
      summ = summ + c
      return creatKarStrange
    }
    return summ
  }

  return creatKarStrange(a)
}


console.log(ftr(1)(2)(3)(4)(5)())


function sum(a, b) {
  return a + b
}

function mult(a, b) {
  return a * b
}


function calc(fn) {
  return (a) => (b) => fn(a, b)
}

console.log(calc(mult)(2)(3))


let t = [1,2]
t.num=3
console.log(t)













