/// <binding />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-typescript");

    grunt.initConfig({
        typescript: {
            base: {
            	src: ['Scripts/**/*.ts'],
				dest: 'wwwroot/',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    singleFile: true,
                    sourceMap: true,
					basePath: 'Scripts'
                }
            }
        }
    });

    grunt.registerTask('default', ['typescript']);
};