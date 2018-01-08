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
  var test;
  num = int.toString();
  for (var i = num.length - 1; i >= 0; i--) {
    reverseNum += num[i];
  }
  test = parseInt(reverseNum) * Math.sign(int);
  console.log(test);
  return test;
}


reverseInt(123);
reverseInt(38);
reverseInt(-4);
reverseInt(-27);
