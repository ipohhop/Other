// входящий параметр массив , на выходе  должен быть массив уникальних и упорялоченных по использованию значений


const a = ["sst", "ban", "cli", "cli", "ban", "ban"]


function sortWithMap(array) {
  let map = new Map()
  array.forEach((item) => map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1))

  return [...map]
    .sort((a, b) => a[1] > b[1] ? -1 : 0)
    .map(i => i[0])
}

// console.log(sortWithMap(a))


function sortWithReduce(array) {
  let sortObject = array.reduce((ac, val) => {
    val in ac ? ac[val] += 1 : ac[val] = 1
    return ac
  }, {})

  return Object.entries(sortObject)
    .sort((a, b) => a[1] > b[1] ? -1 : 0)
    .map(i => i[0])
}

// console.log(sortWithReduce(a))


// создать функцию каррирования , каторая возвращает накомленное значение в случае вызова без аргументов
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


// console.log(ftr(1)(2)(3)(4)(5)())


// функция принимающая функцию , вызывая ее  при получении аргументов
function sum(a, b) {
  return a + b
}

function mult(a, b) {
  return a * b
}


function calc(fn) {
  return (a) => (b) => fn(a, b)
}

// console.log(calc(mult)(2)(3))


let t = [1, 2]
t.num = 3
// console.log(t)


// входящие параметры строка с (,[,{
// функция возвращает true в случае верного закрытия элементов , как в редакторе

let str = "[([sdfsdfsf]cfvbgdgd)][[]]"

function checkBrackets(str) {
  let stack = []

  let useIndex = 1

  str.split("").forEach(item => {
    if (item === "(" || item === "[" || item === "{") stack.push(item)
    if (item === ")" || item === "]" || item === "}") {

      let typeItem = item === ")" ? "(" : item === "]"
        ? "["
        : "{"

      if (stack[stack.length - 1] === typeItem) stack.pop()
      else {
        useIndex++
      }
    }
  })

  return stack.length === 0 && useIndex === 1
}

// console.log(checkBrackets(str))


// функция принимае массив чисел , вернуть массив элементов встречающихся только 1 раз
let array = [1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8]


function deleteRepeat(array) {
  const ac = {}
  array.forEach(item => {
    item in ac
      ? ++ac[item]
      : ac[item] = 1
  })

  return Object.entries(ac).filter(item => {
    if (item[1] === 1) return true
  }).map(item => item[0])
}


// console.log(deleteRepeat(array))


function User(name, age) {
  this.name = name
  this.age = age
}

let obj = new User("user", 18)

// console.log(obj instanceof User)


// first Task
let arraySortParams = [1, 2, 3, 4, 5]

function arrayPacker(array) {
  let resArray = null

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(resArray)
    if (!resArray) resArray = [array[i]]
    else resArray = [array[i], resArray]

  }
  return resArray
}

const resFirstPath = arrayPacker(arraySortParams)

function arrayUnPacker(array) {
  let resArray = []

  function recursSort(array) {

    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) resArray.push(array[i])
      else recursSort(array[i])
    }

  }

  recursSort(array)
  return resArray
}

// console.log(arrayUnPacker(resFirstPath))


// second Task

const correctObject = {
  1: {},
  2: {},
  3: {},
  4: {},
  5: {}
}

function packerObject(object) {
  const workArray = Object.keys(object)

  const res = workArray.reduceRight((acc, item) => {
    let obj = {}
    obj[item] = acc
    return obj
  }, {})

  return res
}

const resFirstPath1 = packerObject(correctObject)
console.log(resFirstPath1)

function rePackerObject(object) {
  let workArray = Object.entries(object)[0]
  console.log(workArray)

  let resObject = {}

  function recursSort(array) {
    resObject[array[0]] = {}
    if (array[1] && Object.keys(array[1]).length > 0) {
      recursSort(Object.entries(array[1])[0])
    }
  }

  recursSort(workArray)

  return resObject

}

console.log(rePackerObject(resFirstPath1))

// third task
const stringA = "acv2 cbf3 sdfs6 sxfgdfg5 sdgfsdgdfghd55555"

function sortWords(string) {
  const arrayOrigin = string.split(" ")
  console.log(arrayOrigin)

  function deleteWord(string) {
    let number = ""
    for (let i = 0; i < string.length; i++) if (!Number.isNaN(+string[i])) number += string[i]
    return +number
  }

  arrayOrigin.sort((a, b) => {

    if (deleteWord(b) < deleteWord(a)) return 1
    if (deleteWord(b) > deleteWord(a)) return -1
    if (deleteWord(b) == deleteWord(a)) return 0
  })

  return arrayOrigin

}

console.log(sortWords(stringA))

























