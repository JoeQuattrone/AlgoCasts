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

function steps(n) {
  str = ''
  for (let i = 0; i < n ; i++ ) {
    str += ' '
  }

  let counter = 0
  const hash = '#'
  while (counter < n) {
    str = hash + str.slice(0, -1)
    counter++
    console.log(str)
  }
}

// make string of n length filled with empty spaces
// each iteration of loop prepend n and delete last character of string
// console.log string on each iteration

module.exports = steps;
