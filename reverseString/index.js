// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // solution #1
    // using helpers and methods to work it out
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');

    // can also be written:
    // arr.split('').reverse().join('');
    // console.log(arr);

    // *********************************************

    // solution #2
    // this solution will loop through the string we get
    // let reversed = '';

    // we are declaring a variable 'character' and looping
    // through each str input and adding it to the begining
    // of the reversed string
    // let reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    //     console.log(reversed);
    // }

    // return reversed;

    // solution #2a
    // this solution is the old fashion for looop
    var reversed = '';
    console.log('string to reverse: ' + str);
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
        console.log(reversed);
    }
    return reversed;

    // **************************************************

    // solution #3
    // adding es6 syntax
    // return str.split('').reduce((rev, char) => char + rev, '');
}


module.exports = reverse;