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
			'templates': ['src/templates/**/*.html']
		},

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

		/* Instead of concatenating .less files, you can use the `@import` statament at the main.less */
		/* It helps things stay clear */
		less: {
			default: {
				files: {
					'src/styles/dist/main.css': 'src/styles/main.less'
				}
			}
		},

		/* Generates an optimized Javascript file for production */
		uglify: {
			default: {
				files: {
					'src/app/application.min.js': ['<%= files.app %>']
				}	
			}
		}

	});
};