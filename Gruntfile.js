'use strict';

/* Grunt Modules and Commands
 * ==========================================================================
 */

module.exports = function(grunt) {
  // load grunt modules
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')

/* Module: SASS
 * ------------------------------------------------------
 * [Docs](https://npmjs.org/package/grunt-contrib-sass)
 *
 * Compile SASS and SCSS files into CSS.
 *
 * [sass_import]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import
 *
 * ### Commands ###
 *
 *   * `grunt sass` - Run all SASS commands (below).
 *   * `grunt sass:stylin` - Compile styles.
 *   * `grunt sass:stylin_min` - Compile styles and minify them.
 */
    , sass: {
          stylin: {
              files: [{
                  expand: true
                , cwd: 'static/scss'
                , src: ['*.scss']
                , dest: 'static/css'
                , ext: '.css'
              }]

            , options: {
                style: 'nested'
              }
          }
        , stylin_min: {
            files: [{
                expand: true // consider all scss files in the directory
              , cwd: 'static/scss'
              , src: ['*.scss']
              , dest: 'static/css'
              , ext: '.min.css'
            }],

            options: {
              style: 'compressed'
            }
          }
      }

/* Watch
 * ------------------------------------------------------
 * [Docs](https://npmjs.org/package/grunt-contrib-watch)
 *
 * Run grunt commands when files change.
 *
 * ### Commands ####
 *
 *   * `grunt watch` - Run all watch commands (below) in a single watch session.
 *
 *     The files listed by each command will be monitored.  When one changes,
 *     the specified tasks for that command will be run.  Multiple tasks my be
 *     run by each command, and multiple commands may be triggered by a single
 *     file change.
 *
 *   * `grunt watch:common` - Monitor common files and build them on change.
 *   * `grunt watch:lib` - Monitor library files and build them on change.
 *   * `grunt watch:pages` - Monitor webpages and build them on change.
 */
    , watch: {
          options: {
              interrupt: true     // interupts the current tasks if another file is changed, restarting them
            , atBegin: true       // runs all tasks when the watch server is started
          }
        , styles: {
              files: ['static/scss/**']
            , tasks: ['build_styles']
          }

      }
  }); // end grunt config


/* Grunt Tasks
 * ==========================================================================
 */

/* Task: Build and Friends
 * ------------------------------------------------------
 * Build the source code, or specific parts of it.
 *
 * Build should be used manually or to perform and application wide build.  It
 * will remove everything in `build/` and recreate the directory structure, then
 * add the built source code.
 *
 * More specific commands are used by `grunt watch` to only build parts affected
 * by the changed file.  They expect that `build/`'s directory structure is
 * already there.
 *
 * Run with `grunt build`.
 */

  grunt.registerTask('build', [
    'build_styles'
  ]);

  grunt.registerTask('build_styles', [
      'sass:stylin'
    , 'sass:stylin_min'
  ]);


/* Task: Default
 * ------------------------------------------------------
 * Define the default behavior that grunt should take when its not passed
 * any specific task or command to run.
 *
 * Run with `grunt`.
 */
  grunt.registerTask('default', [
    'watch'
  ]);

}; // end module.exports function
