// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Phone Numbers
test('Valid Phone Number', () => {
    expect(functions.isPhoneNumber("760-612-9251")).toBe(true);
});
test('Valid Phone Number with area code', () => {
    expect(functions.isPhoneNumber("1+(760)-612-9251")).toBe(true);
});
test('No Dashes', () => {
    expect(functions.isPhoneNumber("7606129251")).toBe(false);
});
test('Incorrect Dashes', () => {
    expect(functions.isPhoneNumber("132/321/1203")).toBe(false);
});

//password
test('Password starting with number', () => {
    expect(functions.isStrongPassword("1abc")).toBe(false);
});
test('Password with 3 characters', () => {
    expect(functions.isStrongPassword("abc")).toBe(false);
});
test('Valid Password with 14 Letter Characters', () => {
    expect(functions.isStrongPassword("abcdefghijklmn")).toBe(true);
});
test('Valid Password with Mixed Characters', () => {
    expect(functions.isStrongPassword("ab_d123hij_l65")).toBe(true);
});

//Email
test('Valid Email Address gmail.com', () => {
    expect(functions.isEmail("jackwagner654@gmail.com")).toBe(true);
});
test('Valid Email Address yahoo.com', () => {
    expect(functions.isEmail("a@yahoo.com")).toBe(true);
});
test('Email missing extension', () => {
    expect(functions.isEmail("jackwagner654")).toBe(false);
});
test('No @ character', () => {
    expect(functions.isEmail("jackwagner654gmail.com")).toBe(false);
});

test('1) is hex color?', () => {
    expect(functions.isHexColor("nov")).toBe(false);
})
test('1) is hex color?', () => {
    expect(functions.isHexColor("nov")).toBe(false);
})
test('1. not a hex color', () => {
    expect(functions.isHexColor("#1DCF33")).toBe(true);
})
test('2. not a hex color', () => {
    expect(functions.isHexColor("#7D92B1")).toBe(true);
})

test('testing if a valid date', () => {
    expect(functions.isDate("1 / 2 / 20")).toBe(false);
});
test('testing if a valid date', () => {
    expect(functions.isDate("12 / 2222/ 4444 ")).toBe(false);
});
test('testing if a valid date', () => {
    expect(functions.isDate("02/03/1033")).toBe(true);
});
test('testing if a valid date', () => {
    expect(functions.isDate("02/03/1033")).toBe(true);
});
