/// <binding />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-typescript");
	grunt.loadNpmTasks("grunt-browserify");

    grunt.initConfig({
        typescript: {
        	dist: {
            	src: ['Scripts/**/*.ts'],
				dest: 'wwwroot/lib/',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    sourceMap: true,
					basePath: 'Scripts'
                }
            }
        },
        browserify: {
        	dist: {
        		src: ['wwwroot/lib/*.js'],
        		exclude: ['wwwroot/app.js'],
        		dest: 'wwwroot/app.js',
        		browserifyOptions: {
    				debug: true
				}
        	}
        }
    });

    grunt.registerTask('default', ['typescript:dist', 'browserify:dist']);
};