// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
//   14
//   fizzbuzz
//   16

function fizzBuzz(num) {
    for (var i = 1; i <= num; i++){
        if ( !(i % 3) && ( !(i % 5) ) ) {
            console.log('fizzbuzz');
        } else if ( !(i % 3) ){
            console.log('fizz');
        } else if ( !(i % 5) ) {
            console.log('buzz');
        } else {
            (console.log(i));
        }
    }
};

fizzBuzz(100);