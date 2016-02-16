'use strict';

/**
  * string.spec.js

  * Explores new String features in ECMAScript 6
  */
describe('an ES6 String', () => {

    it('has a .startsWith() method', () => {
        let test = 'Bubba';
        expect(test.startsWith('B')).toBe(true);
    });

    it('has a .startsWith() method that is case sensitive', () => {
        let test = 'Bubba';
        expect(test.startsWith('b')).toBe(false);
    });

    it('has an .endsWith() method', () => {
        let test = 'Bubba';
        expect(test.endsWith('a')).toBe(true);
    });

    it('has an .includes() method', () => {
        let test = 'Bubba';
        expect(test.includes('ubb')).toBe(true);
    });

    it('has a .repeat() method', () => {
        let test = 'x';
        let expected = 'xxxxx';
        expect(test.repeat(5).length).toBe(5);
        expect(test.repeat(5)).toEqual(expected);
    });

    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
    it('supports interpolation using backticks (``)', () => {
        let name = 'Bubba';
        let test = `Hello ${name}`;
        let expected = 'Hello Bubba';
        expect(test).toEqual(expected);
        expect(`${name.toUpperCase()}`).toEqual('BUBBA');
    });

    it('can be multiline using backticks (``)', () => {
        let test = `
Roses are #ff0000
Violets are #0000ff`;
        let expected = '\nRoses are #ff0000\nViolets are #0000ff';
        expect(test).toEqual(expected);
    });



});





