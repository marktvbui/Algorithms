// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // start each sentence with uppercase
    // look for spaces, then uppercase index after spaces

    // console.log(str[0].toUpperCase()+ str.slice(1));
    let cap = str.split(' ');

    // for (var i = 0; i < cap.length; i++) {
        // console.log(cap[i].charAt(0).toUpperCase());
        // console.log(cap[i]);
        // console.log("test " + cap.slice(1));
    // }
    let arrayWords = [];
    for (let char of cap) {
        arrayWords.push(char.charAt(0).toUpperCase() + char.slice(1));
    }
    let finalString = arrayWords.join(' ');
    console.log(finalString);
}

// module.exports = capitalize;

capitalize('lazy me what is going on?');
