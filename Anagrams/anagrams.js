// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
// keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
// alert(keysSorted);

function anagrams(stringA, stringB) {
    let splStr1 = stringA.toLowerCase().split('').sort().join('').replace(/\s/g, '');
    let splStr2 = stringB.toLowerCase().split('').sort().join('').replace(/\s/g, '');
    console.log(splStr1);
    console.log(splStr2);
    console.log(splStr1 == splStr2);

}

module.exports = anagrams;

anagrams('te st', 'best');
anagrams('test', 'es tt');
