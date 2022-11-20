// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('adds 1 + 2 to equal 3', () => {
    expect(functions.isPhoneNumber("760-612-9251")).toBe(true);
});


//
test('adds 1 + 2 to equal 3', () => {
    expect(functions.isStrongPassword("1abc")).toBe(false);
});
test('adds 1 + 2 to equal 3', () => {
    expect(functions.isStrongPassword("760-612-9251")).toBe(true);
});
test('adds 1 + 2 to equal 3', () => {
    expect(functions.isStrongPassword("760-612-9251")).toBe(true);
});
test('adds 1 + 2 to equal 3', () => {
    expect(functions.isStrongPassword("760-612-9251")).toBe(true);
});