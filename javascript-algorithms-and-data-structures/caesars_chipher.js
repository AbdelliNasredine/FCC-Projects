/**
 * One of the simplest and most widely known ciphers is
 * a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted
 * by some set amount.
 * A common modern use is the ROT13 cipher, where the values
 * of the letters are shifted by 13 places. Thus 'A' ↔ 'N',
 * 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string
 * as input and returns a decoded string. All letters will be uppercase.
 * Do not transform any non-alphabetic character
 * (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
  const isAlpha = (char) => char.match(/[A-Z]/);

  const decode = (char) => {
    let newCharCode = (char.charCodeAt(0) - 65 + 13) % 26;
    // console.log(newCharCode, String.fromCharCode(newCharCode + 65));
    return String.fromCharCode(newCharCode + 65);
  };

  return str
    .split("")
    .reduce((accumulator, current) => {
      // console.log("current char:", current);
      accumulator.push(isAlpha(current) ? decode(current) : current);
      return accumulator;
    }, [])
    .join("");
}

const r = rot13("SERR PBQR PNZC");
console.log(r);
