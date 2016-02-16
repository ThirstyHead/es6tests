'use strict';

/**
  * set.spec.js
  *
  * Explores new set object in ECMAScript 6
  * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  */
describe('an ES6 set object', () => {
    it('is like an Array that only stores unique values', () => {
        let family = new Set();
        family.add('dad');
        family.add('mom');
        family.add('dad');
        family.add('dad');
        family.add('dad');
        expect(family.size).toEqual(2);
    });

    it('has an .add() method', () => {
        let family = new Set();
        family.add('dad');
        family.add('mom');
        family.add('dad');
        expect(family.size).toEqual(2);
    });

    it('has a .size property', () => {
        let family = new Set();
        family.add('dad');
        family.add('mom');
        family.add('dad');
        expect(family.size).toEqual(2);
    });

    it('has a .has() method', () => {
        let family = new Set();
        family.add('dad');
        family.add('mom');
        expect(family.has('mom')).toEqual(true);
        expect(family.has('kid')).toEqual(false);
    });

    it('has a .delete() method', () => {
        let family = new Set();
        family.add('dad');
        family.add('mom');
        expect(family.has('dad')).toEqual(true);
        family.delete('dad');
        expect(family.has('dad')).toEqual(false);
        expect(family.size).toEqual(1);
    });

    it('has a .clear() method', () => {
        let family = new Set();
        family.add('dad');
        family.add('mom');
        expect(family.size).toEqual(2);
        family.clear();
        expect(family.size).toEqual(0);
    });

    it('has a .forEach() method', () => {
        let family = new Set();
        family.add('dad');
        family.add('mom');
        family.add('dad');
        let sum = 0;
        family.forEach( (value) => {
            expect(value === 'dad' || value === 'mom').toEqual(true);
            sum++;
        });
        expect(sum).toEqual(2);
    });

});





