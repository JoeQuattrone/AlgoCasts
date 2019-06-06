// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const arr = str.split('')
//   let countChar = {}
//
//   for (char of arr) {
//     countChar[char] = 0
//   }
//   for (char of arr) {
//     countChar[char] += 1
//   }
//   let currentMax = 0
//   let key = ''
//   for(char in countChar) {
//     if (countChar[char] > currentMax) {
//       key = char
//       currentMax = countChar[char]
//     }
//   }
//   return key
// }


function maxChar(str) {
  let countChar = {}

  // for (char of str) {
  //   if(!countChar[char]) {
  //     countChar[char] = 1
  //   } else {
  //     countChar[char]++
  //   }
  // }

  for (char of str) {
    countChar[char] = countChar[char] + 1 || 1
  }

  let currentMax = 0
  let key = ''
  for(char in countChar) {
    if (countChar[char] > currentMax) {
      key = char
      currentMax = countChar[char]
    }
  }
  return key
}
module.exports = maxChar;
