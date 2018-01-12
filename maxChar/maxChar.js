// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("aabcccccccd") === "c"
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

    var maxKey = '';
    var currentMax = 0;
    for (var key in strObj) {
        if ((strObj[key]) > currentMax) {
            currentMax = strObj[key];
            maxKey = key;
        };
    };
    console.log('');
    console.log('final max: ' + currentMax);
    console.log('maxed character: ' + maxKey);
    console.log('');
    return maxKey;
};

maxChar("aabcccccccd");
maxChar("apple 1231111");


module.exports = maxChar;