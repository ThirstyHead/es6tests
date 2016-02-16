'use strict';

/**
  * let.spec.js

  * Explores new let keyword in ECMAScript 6
  */
describe('an ES6 let statement', () => {

    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
    it('declares a block-scoped variable', () => {
        let numbers = [1,2,3];
        for(var i=0; i<numbers.length; i++){
            // do something
        }
        // The i variable isn't block-scoped,
        // so we can see it after the for loop is done.
        expect(i).toEqual(3);

        for(let j=0; j<numbers.length; j++){
            // do something
        }
        // NOTE: uncomment to see eslint error
        // expect(j).toBeUndefined();
    });

});





