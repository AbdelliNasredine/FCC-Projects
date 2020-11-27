/**
 * URL : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
 */

function checkCashRegister(price, cash, cid) {
  const round = (num) => Math.round(num * 100) / 100;
  const units = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  const cidAsObject = cid.reduce((obj, current) => {
    obj[current[0]] = current[1];
    return obj;
  }, {});
  const totalAmountInCID = round(
    cid.reduce((acc, current) => acc + current[1], 0)
  );
  let changeDue = cash - price;

  if (totalAmountInCID < changeDue)
    return { status: "INSUFFICIENT_FUNDS", change: [] };

  if (totalAmountInCID == changeDue) return { status: "CLOSED", change: cid };

  let change = {};
  let changeArray = [];
  for (let unit in units) {
    while (changeDue >= units[unit] && cidAsObject[unit]) {
      console.log("Before", changeDue, cidAsObject[unit]);
      change[unit] = !change[unit]
        ? parseFloat(units[unit])
        : change[unit] + units[unit];
      changeDue = round(changeDue - units[unit]);
      cidAsObject[unit] = round(cidAsObject[unit] - units[unit]);
      console.log("After", changeDue, cidAsObject[unit]);
    }
    if (change.hasOwnProperty(unit)) changeArray.push([unit, change[unit]]);
  }

  console.log("change", changeArray);

  if (changeDue == 0) {
    return { status: "OPEN", change: changeArray };
  }
  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

const r1 = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
const r2 = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(r1, r2);
