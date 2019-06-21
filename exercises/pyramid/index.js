// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'



// recursion
function pyramid(n, row = 0, level = '') {
  if ( row === n) {
    return
  }
  if (level.length === 2 * n -1 ) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2)
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' '
  }
  pyramid(n, row, level + add)
}
//  if n = row, return
//  if n*2 -1 = stair.length

// function pyramid(n) {
//   const columns = n * 2 - 1
//   let str = ''
//   const hash = '#'
//
//   for (let i = 0; i < columns; i++) {
//     str += ' '
//   }
//
//   for (let i = 0; i < columns; i++) {
//     str = str.slice(0, columns/2 - i) + hash + str.slice(columns/2, -1)
//     console.log(str)
//   }
// }

// function pyramid(n) {
//   const columns = n * 2 - 1
//   const midpoint = Math.floor(columns/2)
//
//   for (let i = 0; i < n; i++) {
//     let level = ''
//
//     for (let x = 0; x < columns; x++) {
//       if (midpoint - i <= x && midpoint + i >= x) {
//         debugger
//         level = level + '#'
//       } else {
//         level = level + ' '
//       }
//     }
//     console.log(level)
//   }
// }
// if row is less than column add i* 2 -1  hashes to the row
// x is not going to the next row after adding hash
// each row hash two more hashes than the previous row
// all hashes are centered
// hashes increase by two for each row
// find columns given n colums = n * 2 - 1
// iterate though string and insert a hash into the middle of the string each time

pyramid(4)

module.exports = pyramid;
