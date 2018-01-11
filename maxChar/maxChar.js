// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    var strObj = {};
    var splitStr = str.split('');
    splitStr.forEach(function(el) {
        if (strObj[el]){
            strObj[el]++;
        } else {
            strObj[el] = 1;
        }
    });

    var max = 0;
    for (var test in strObj) {
        if ((strObj[test]) > max) {
            max = strObj;
            console.log(test);
            return test;
        };
    };
};

maxChar("abcccccccd")
// maxChar("apple 1231111")
