'use strict';

let Jasmine = require('jasmine');
let jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.configureDefaultReporter({
    showColors: true
});
jasmine.execute();
