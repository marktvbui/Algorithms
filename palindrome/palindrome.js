// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
    var originalStr = str;
    var reversed = '';
    for (var i = originalStr.length - 1; i >= 0; i--) {
        reversed += originalStr[i];
    }
    if (originalStr === reversed) {
        console.log('YES! ' + originalStr + ' is a palindrome');
        return true;
    } else {
        console.log('sorry, ' + originalStr + ' is not a palindrome');
        return false;
    }
}
palindrome('aba');
palindrome('pennep');
palindrome('abcdefg');
palindrome('1000000001');
// palindrome('!xxxx!');
// palindrome('Mark');