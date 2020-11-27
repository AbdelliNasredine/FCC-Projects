/**
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided
 * in upper-case.
 */

function convertToRoman(num) {
  const symbols = {
    M: 1000,
    CM: 900,
    DC: 600,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    LX: 60,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    VI: 6,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let symbol in symbols) {
    while (num >= symbols[symbol]) {
      roman += symbol;
      num -= symbols[symbol];
    }
  }

  return roman;
}

convertToRoman(3);
convertToRoman(891);
convertToRoman(2014);
convertToRoman(1006);
convertToRoman(3999);
