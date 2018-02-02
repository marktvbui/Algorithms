// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(int) {
    let num = '';
    let reverseNum = '';
    num = int.toString();
    for (var i = num.length - 1; i >= 0; i--) {
      reverseNum += num[i];
    }
    var reversedInt = parseInt(reverseNum) * Math.sign(int);
    return reversedInt;
}

module.exports = reverseInt;

