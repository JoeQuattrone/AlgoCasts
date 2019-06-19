// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//    const newStr = str.split(' ')
//    const newArr = []
//    newStr.forEach(word => {
//       newArr.push(word[0].toUpperCase() + word.slice(1))
//    })
//    return newArr.join(' ')
// }

// function capitalize(str) {
//   const words = []
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//   return words.join(' ')
// }

// function capitalize(str) {
//   let result = str[0].toUpperCase()
//   for (let char of str.slice(1)) {
//     if(result.slice(-1) === " ") {
//       result += char.toUpperCase()
//     } else {
//       result += char
//     }
//   }
//   return result
// }

function capitalize(str) {
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result 
}


capitalize('a short sentence')

module.exports = capitalize;
