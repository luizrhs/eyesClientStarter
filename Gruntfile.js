module.exports = function(grunt) {

	'use strict';


	/* Karma */
	grunt.loadNpmTasks('grunt-karma');

	/* Less */
	grunt.loadNpmTasks('grunt-contrib-less');

	/* Watch */
	grunt.loadNpmTasks('grunt-contrib-watch');

	/* Uglify */
	grunt.loadNpmTasks('grunt-contrib-uglify');

	/* JsHint */
	grunt.loadNpmTasks('grunt-contrib-jshint');

	/* CssMin */
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	grunt.initConfig({

		/* Helper paths to important files to the application */
		/* You may edit this the way you want */
		files: {
			'app'      : ['src/app/**/*.js'],
			'unit'     : ['test/unit/**/*Spec.js'],
			'e2e'      : ['test/e2e/**/*Spec.js'],
			'less'     : ['src/styles/**/*.less'],
			'html'     : ['src/index.html'],
			'templates': ['src/templates/**/*.html'],
			'karma'    : {
				'unit': 'config/karma.conf.js',
				'e2e' : 'config/karma.e2e.conf.js'
			}
		},

		/* jshint task */
		/* Hinting your Javascript is always nice. Don't skip it! */
		jshint: {
			globals: {
				'jQuery'    : true,
				'$'         : true,
				'angular'   : true,
				'module'    : true,
				'inject'    : true,
				'define'    : true,
				'require'   : true,
				'jasmine'   : true,
				'describe'  : true,
				'it'        : true,
				'expect'    : true,
				'beforeEach': true,
				'afterEach' : true
			},
			files: ['<%= files.app %>', '<%= files.unit %>', '<%= files.e2e %>', 'Gruntfile.js']
		},

		/* less task */
		/* Instead of concatenating .less files, you can use the `@import` statament at the main.less */
		/* It helps things stay clear */
		less: {
			defaults: {
				files: {
					'src/styles/dist/main.css': 'src/styles/main.less'
				}
			}
		},

		/* uglify task */
		/* Generates an optimized Javascript file for production. */
		uglify: {
			defaults: {
				files: {
					'src/app/application.min.js': ['<%= files.app %>']
				}	
			}
		},


		/* karma task */
		/* Karma spec runner. */
		karma: {
			unit: {
				configFile: '<%= files.karma.unit %>'
			},
			e2e: {
				configFile: '<%= files.karma.e2e %>'
			}
		},

		watch: {
			less: {
				files: ['<%= files.less %>'],
				tasks: ['less']
			},
			jshint: {
				files: ['<%= files.app %>'],
				tasks: ['jshint']
			}
		}

	});
};