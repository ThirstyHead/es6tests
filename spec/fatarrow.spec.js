'use strict';

/**
  * fatarrow.spec.js

  * Explores new fat arrow features in ECMAScript 6
  */
describe('an ES6 fat arrow', () => {

    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    it('can be used instead of the function keyword', () => {
        let numbers = [1,2,3];
        let sum = 0;

        // forEach with a function
        numbers.forEach(function(i){
            sum += i;
        });
        expect(sum).toEqual(6);

        // forEach with a fat arrow closure
        sum = 0;
        numbers.forEach( (i) => {
            sum += i;
        });
        expect(sum).toEqual(6);
    });

});





