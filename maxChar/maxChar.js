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

    var returnedEl = '';
    var currentMax = 0;
    for (var key in strObj) {
        console.log('current key: ' + key);
        if ((strObj[key]) > currentMax) {
            console.log('current element: ' + strObj[key]);
            currentMax = strObj[key];
            console.log('current max: ' + currentMax);
            returnedEl = key;
            console.log(returnedEl);
        };
    };
    console.log('');
    console.log('**************************');
    console.log('final max: ' + currentMax);
    console.log('maxed character: ' + returnedEl);
    console.log('**************************');
};

maxChar("aabcccccccd");
maxChar("apple 1231111");
