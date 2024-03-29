// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   let counter = 0
//
//   for (char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       counter += 1
//     }
//   }
//   return counter
// }

// function vowels(str) {
//   return str.toLowerCase().match(/[aeiou]/g) ? str.toLowerCase().match(/[aeiou]/g).length : 0
// }

function vowels(str) {
  try {
    return str.toLowerCase().match(/[aeiou]/g).length
  }
  catch(err) {
    return 0
  }
}

module.exports = vowels;
