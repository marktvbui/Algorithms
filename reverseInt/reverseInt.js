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
  console.log('number to reverse: ' + int)
  let num = '';
  let reverseNum = '';
  num = int.toString();
  for (var i = num.length - 1; i >= 0; i--) {
    reverseNum += num[i];
  }
  console.log('reversed number: ' + reverseNum);
}


reverseInt(123);
reverseInt(38);
