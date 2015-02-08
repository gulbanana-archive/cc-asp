/// <binding />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.initConfig({
        browserify: {
        	vendor: {
        		src: [],
        		dest: 'wwwroot/vendor.js',
        		options: {
        			require: ['react'],
        			transform: [['uglifyify', { global: true }]],
        		}
        	},
        	app: {
        		src: ['./Scripts/**/*.ts'],
        		dest: 'wwwroot/app.js',
        		options: {
        			external: ['react'],
        			browserifyOptions: {
        				plugin: [['tsify', { noImplicitAny: true }]],
        				debug: true
        			}
        		}
        	}
        },
    	concat: {
    		'wwwroot/main.js': ['wwwroot/vendor.js', 'wwwroot/app.js']
		}
    });

    grunt.registerTask('default', ['browserify', 'concat']);
};