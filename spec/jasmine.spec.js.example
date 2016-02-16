'use strict';

/**
  * jasmine.spec.js

  * Explores various Jasmine capabilities
  */

// describe === 'Suite' in Jasmine
describe('a Jasmine spec', function() {

    // sharedVariable is used by beforeEach(), afterEach()
    var sharedVariable;

    // it == 'Spec' in Jasmine. (I am lazy and call them 'tests'...)
    it('can use simple matchers to return true or false', function() {
        // expect == 'Expectation' in Jasmine
        expect(true).toBe(true);

        // NOTE: Jasmine 'expectations' start with 'expect'
        //       and end with a 'matcher'.
        //       You can use .not to reverse matchers.
        expect(true).toBe(true);
        expect(false).not.toBe(true);
    });

    it('can use .toBe() to compare simple literals', function() {
        // NOTE: toBe() matches with '==='
        //       toBe() can only be used with simple literals
        var a = 1;
        var b = a;
        expect(b).toBe(1);
        expect(b).toBe(a);
    });

    it('can use .toEqual() to compare both simple literals and complex objects', function() {
        // Simple literal:
        var a = 1;
        var b = a;
        expect(a).toEqual(b);

        // Complex object:
        var person1 = {
            'firstName':'Bubba',
            'age': 21,
            'isCool': true
        };

        var person2 = {
            'firstName':'Bubba',
            'age': 21,
            'isCool': true
        };

        // NOTE: toBe() will fail when used on JSON objects
        //       person1 is NOT the same instance as person2
        //       Be sure to use toEqual when comparing JSON objects
        // expect(person1).toBe(person2);
        expect(person1).toEqual(person2);
    });

    it('can use .toBeTruthy() and .toBeFalsy() for JavaScript "truthy" comparisons', function() {
        // NOTE: toBeTruthy() matches with '=='
        //       It is used for JavaScript 'truthy' comparisons.
        //       In other words, it uses type-coercion on the
        //       argument to see if it evaluates to JavaScript true
        //       see also: toBeFalsy()
        expect(1).toBeTruthy();
        expect(0).toBeFalsy();
        expect('').toBeFalsy();

        // expect(0 == false).toBeTruthy();
        // expect('' == false).toBeTruthy();
        // expect('0' == false).toBeTruthy();
        // expect(0 == '0').toBeTruthy();
        // expect(0 == '').toBeTruthy();

        // expect('true' == true).not.toBeTruthy();
        // expect(false == 'false').not.toBeTruthy();
    });

    it('can use .toBeGreaterThan() and .toBeLessThan() to compare numbers', function() {
        var x = 100;
        var y = 150;
        expect(x).toBeLessThan(y);
        expect(y).toBeGreaterThan(x);
    });

    it('can use .toMatch() for RegEx matching', function() {
        var message = 'I like cheese.';
        expect(message).toMatch(/like/);
        expect(message).toMatch('like');
    });

    it('can use .toBeUndefined(), .toBeDefined(), and .toBeNull() ' +
       'for variable testing', function() {
        var foo;
        expect(foo).toBeUndefined();
        foo = 1;
        expect(foo).not.toBeUndefined();
        expect(foo).toBeDefined();
        foo = null;
        expect(foo).toBeNull();
        expect(foo).toBeDefined();
    });

    it('can use .toContain() to verify that an array contains a specific element', function() {
        var names = ['Geoff', 'Joshua'];
        expect(names).toContain('Joshua');
        expect(names).not.toContain('Bubba');
    });

    // beforeEach() is run before each test
    // to set the initial state
    beforeEach(function() {
        //console.log('beforeEach');
        sharedVariable = 1;
    });

    // afterEach() is run after each test
    // for resource cleanup
    afterEach(function() {
        //console.log('afterEach');
        sharedVariable = null;
    });

    it('can verify that shared variables are set by beforeEach()', function() {
        expect(sharedVariable).toBeDefined();
        expect(sharedVariable).not.toBeNull();
        // NOTE: initialized in beforeEach()
        expect(sharedVariable).toBe(1);

        // NOTE: I'm purposely changing the value to test that it gets reset correctly
        sharedVariable = 99;
        expect(sharedVariable).toBe(99);
    });

    it('can verify that shared variables are reset by afterEach()', function() {
        // NOTE: initialized in beforeEach()
        expect(sharedVariable).toBe(1);
    });

    // NOTE: this spec is disabled with xit(). You should NOT see any output.
    //      I've purposely made this test broken to prove that it's not being run.
    //      see also: xdescribe() to disable entire Suites
    xit('can ignore xit() specs', function() {
        expect(true).toBe(false);
    });

    // NOTE: it is perfectly acceptable to write out your assertions
    //       without corresponding expectations. These can be used
    //       for future specs, or to capture future features not yet implemented.
    it('TODO: can have stubbed out specs that aren\'t implemented yet');

});
