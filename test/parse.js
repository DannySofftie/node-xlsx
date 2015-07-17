'use strict';
// nodemon -w . --exec npm test

var util = require('util'),
    fs = require('fs');

var log = function() {
  var args = Array.prototype.slice.call(arguments, 0);
  return util.log(util.inspect.call(null, args.length === 1 ? args[0] : args, false, null, true));
};

var xlsx = require('../lib/node-xlsx');

module.exports.parse = function(assert) {

  var fixture = JSON.parse(fs.readFileSync(__dirname + '/fixtures/test.json'));
  var filename = __dirname + '/fixtures/test.xlsx';
  var xlsObject;

  // parse file
  xlsObject = xlsx.parse(filename);
  assert.deepEqual(JSON.parse(JSON.stringify(xlsObject)), fixture);

  // parse buffer
  xlsObject = xlsx.parse(fs.readFileSync(filename));
  assert.deepEqual(JSON.parse(JSON.stringify(xlsObject)), fixture);

  assert.done();

};
