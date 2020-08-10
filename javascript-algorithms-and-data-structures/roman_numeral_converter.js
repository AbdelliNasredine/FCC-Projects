/**
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided
 * in upper-case.
 */

function convertToRoman(num) {
  const romanSymbols = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
  let chunks = [];
  while (num) {
    chunks.push(num % 10);
    num = Math.floor(num / 10);
  }
  // TODO : converse each chunk to symbol
}

convertToRoman(36);
