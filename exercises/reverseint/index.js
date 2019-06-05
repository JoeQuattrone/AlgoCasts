// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = ''
  const sign = Math.sign(n)
  const strN = n.toString().replace(/-/, "")

  for (char of strN) {
    reversed = char + reversed
  }
  let result = parseInt(reversed, 10) * sign
  return result
}

// function reverseInt(n) {
//   let reversed = ''
//   const sign = Math.sign(n)
//   const strN = n.toString().replace(/-/, "")
//
//   for (char of strN) {
//     reversed = char + reversed
//   }
//
//   let arr = reversed.split('')
//
//
//   while(arr[0] === "0") {
//     arr.shift()
//   }
//   return parseInt(arr.join(''), 10) *sign
// }

module.exports = reverseInt;
