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

  if (int < 0)
    {
      num = int.toString();
      for (var i = num.length -1; i >= 0; i--) {
        reverseNum += num[i];
      }
      finalNum = parseInt(reverseNum) * -1;
      console.log('reversed negative number: ' + finalNum);
      return finalNum;
    } else
    {
      num = int.toString();
      for (var i = num.length -1; i >= 0; i--) {
        reverseNum += num[i];
      }
      finalNum = parseInt(reverseNum);
      console.log('reversed number: ' + finalNum);
      return finalNum;
    }

  // solution with helpers
//   console.log('number to reverse: ' + int);
//   const reverseNum = int
//     .toString()
//     .split('')
//     .reverse()
//     .join('');

//   test = parseInt(reverseNum) * Math.sign(int);
//   console.log('reversed :' + test);
//   return test;
// }

reverseInt(500);
reverseInt(123);
reverseInt(38);
reverseInt(-4);
reverseInt(-27);
