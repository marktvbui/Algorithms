// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var reversed = '';
    console.log('string to reverse: ' + str);
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
        console.log(reversed);
    }
    return reversed;
}
reverse('Hello');
reverse('Greetings!@');
reverse(' ! M a r k ?  *   $ ');
reverse('apple');