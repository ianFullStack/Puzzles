 Write a function named "sumFromString" that takes one argument. That argument is a string of single-digit integer numbers. 
 Return the sum of those numbers within that string. The string will ONLY contain single-digit numbers, no letters, symbols, etc.

function sumFromString(string) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    total += Number(string[i]);
  }
  return total;
}
const str = '12345';

// returns 15 because 1 + 2 + 3 + 4 + 5 = 15
console.log(sumFromString(str));
