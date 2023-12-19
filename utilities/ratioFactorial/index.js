const ratioNums = require('../ratio/index')
const factorialNum = require('../factorial/index')

const ratioAndFactorial = (num1, num2, num3) => {
  const object = {
    ratio: ratioNums(num1, num2),
    factorial: factorialNum(num3),
  }
  return object
}

module.exports = ratioAndFactorial
