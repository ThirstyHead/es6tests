'use strict';

let Jasmine = require('jasmine');
let jasmine = new Jasmine();
let SpecReporter = require('jasmine-spec-reporter');
let noop = function() {};

jasmine.configureDefaultReporter({print: noop});    // remove default reporter logs
jasmine.addReporter(new SpecReporter());
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();
