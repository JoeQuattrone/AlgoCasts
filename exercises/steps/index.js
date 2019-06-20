// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// my solution
function steps(n) {
  let str = ''
  const hash = '#'
  for (let i = 0; i < n; i++) {
    str += ' '
  }

  for (let i = 0; i < n; i++) {
    str = hash + str.slice(0, -1)
    console.log(str)
  }
}

// make string of n length filled with empty spaces
// each iteration of loop prepend n and delete last character of string
// console.log string on each iteration

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//
//     console.log(stair)
//   }
// }

// recursion
// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return
//   }
//
//   if (n === stair.length) {
//     console.log(stair)
//     return steps(n, row + 1)
//   }
//
//   if (stair.length <= row) {
//     stair += '#'
//   } else {
//     stair += ' '
//   }
//   steps(n, row, stair)
// }
module.exports = steps;
