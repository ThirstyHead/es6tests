'use strict';

/**
  * map.spec.js
  *
  * Explores new map object in ECMAScript 6
  * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  */
describe('an ES6 map object', () => {
    it('has a .get() and .set() method', () => {
        let family = new Map();
        family.set('dad', 'Bubba');
        family.set('mom', 'Jane');
        expect(family.get('mom')).toEqual('Jane');
    });

    it('has a .size property', () => {
        let family = new Map();
        family.set('dad', 'Bubba');
        family.set('mom', 'Jane');
        expect(family.size).toEqual(2);
    });

    it('has a .has() method', () => {
        let family = new Map();
        family.set('dad', 'Bubba');
        family.set('mom', 'Jane');
        expect(family.has('mom')).toEqual(true);
        expect(family.has('kid')).toEqual(false);
    });

    it('has a .delete() method', () => {
        let family = new Map();
        family.set('dad', 'Bubba');
        family.set('mom', 'Jane');
        expect(family.has('dad')).toEqual(true);
        family.delete('dad');
        expect(family.has('dad')).toEqual(false);
        expect(family.size).toEqual(1);
    });

    it('has a .clear() method', () => {
        let family = new Map();
        family.set('dad', 'Bubba');
        family.set('mom', 'Jane');
        expect(family.size).toEqual(2);
        family.clear();
        expect(family.size).toEqual(0);
    });

    it('has a .forEach() method', () => {
        let family = new Map();
        family.set('dad', 'Bubba');
        family.set('mom', 'Jane');
        family.forEach( (value, key) => {
            expect(family.has(key)).toEqual(true);
            expect(family.get(key)).toEqual(value);
        });
    });

});





