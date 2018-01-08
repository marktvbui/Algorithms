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
  let finalNum;

  console.log('number to reverse: ' + int);

    num = int.toString();
    for (var i = num.length - 1; i >=0; i--) {
      reverseNum += num[i];
    }
    if (int < 0) {
      finalNum = parseInt(reverseNum) * -1;
      console.log('reversed -num: ' + finalNum);
    } else
    {
      finalNum = parseInt(reverseNum);
      console.log('reversed num: ' + finalNum);
    }

//  solution with helpers
//  console.log('number to reverse: ' + int);
//  const reverseNum = int
//    .toString()
//    .split('')
//    .reverse()
//    .join('');

//  const test = parseInt(reverseNum) * Math.sign(int);
//  console.log('reversed :' + test);
//  return test;
}

reverseInt(15)
reverseInt(981)
reverseInt(500)
reverseInt(-15)
reverseInt(-90)