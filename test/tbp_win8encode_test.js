'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.tbp_win8encode = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var buf = grunt.file.read('test/fixtures/test.js', { encoding: null });
    var missingBOM = (buf[0] !== 0xEF && buf[1] !== 0xBE && buf[2] !== 0xBB);

    test.equal(missingBOM, false, 'Has BOM');

    test.done();
  },

  tearDown : function(done) {
    grunt.file.write('test/fixtures/test.js', '', { encoding: 'iso-8859-1' });
    done();
  }
};
