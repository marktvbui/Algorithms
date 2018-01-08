const reverseInt = require('./index');

test('ReverseInt function exists', () => {
    expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
    expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
    expect(reverseInt(8)).toEqual(8);
    expect(reverseInt(17)).toEqual(71);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(123)).toEqual(321);
});

test('ReverseInt flips a negative number', () => {
    expect(reverseInt(-7)).toEqual(-7);
    expect(reverseInt(-23)).toEqual(-32);
    expect(reverseInt(-123)).toEqual(-321);
    expect(reverseInt(-67)).toEqual(-76);
});