const string = 'what the hell?';
const chars = {};
for (let char of string) {
    chars[char] = chars[char] + 1 || 1;
}

console.log(chars);