/*
 * grunt-tbp-win8encode
 * https://github.com/ThinkBigPartners/grunt-tbp-win8encode
 *
 * Copyright (c) 2014 Eric Dorsey
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('tbp_win8encode', 'Fix file encoding (UTF-8 with BOM) in Windows 8 Javascript apps.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({ });

    // Iterate over all specified file groups.
    this.filesSrc.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        var buf = grunt.file.read(filepath, { encoding: null });
        var missingBOM = (buf[0] !== 0xEF && buf[1] !== 0xBE && buf[2] !== 0xBB);
        if (missingBOM) {
          buf = '\ufeff' + buf;
        }
        grunt.file.write(filepath, buf, { encoding: 'utf-8' });
        grunt.log.writeln('File "' + filepath + '" encoded.');
      });
  });

};
