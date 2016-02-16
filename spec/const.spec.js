'use strict';

/**
  * const.spec.js

  * Explores new const features in ECMAScript 6
  */
describe('an ES6 const', () => {

    it('primitive CANNOT be changed once it is initialized', () => {
        const PI = 3.1415;
        // uncomment to view eslint error
        // PI = 3.2;
        expect(PI).toEqual(PI);
    });

    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
    it('object CAN be changed once it is initialized', () => {
        const person = {
            name: 'Bubba'
        };

        person.name = 'Jane';
        expect(person.name).toEqual('Jane');
    });
});





