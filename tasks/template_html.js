/*
 * grunt-template-html
 * https://github.com/Lam/grunt-template-html
 *
 * Copyright (c) 2013 Lam Te
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  var consolidate = require('consolidate'),
      _ = grunt.util._;

  grunt.registerMultiTask('template', 'Your task description goes here.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var done = this.async();

    var data = this.data;
    if (data.partials && data.cwd) {
      var partials = grunt.file.expand(data.partials).map(function(filepath){
        return filepath.replace(data.cwd, '').split('.')[0];
      });
      data.options.partials = _.extend(data.options.partials || {}, _.object(partials,partials));
    }

     if (data.data) {
      data.options.data = _.extend(data.options.data || {}, grunt.file.readJSON(data.data));
     }

    var i = 0, length = this.filesSrc.length;
    this.files.forEach(function(f) {
      var dest = f.dest;
      
      consolidate[data.engine](f.src, data.options, function(err, html){
        if (err)
        {
          grunt.log.error(err);
          done(false);
        }

        grunt.file.write(f.dest, html);
        grunt.log.writeln("HTML written to '"+ f.dest +"'");
        i++;
        if (i === length){
          done(true);
        } 
      });
    });
  });

};
