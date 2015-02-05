/// <binding AfterBuild='typescript' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        typescript: {
            base: {
                src: ['Scripts/**/*.ts'],
                dest: 'wwwroot/app.js',
                options: {
                    module: 'amd',
                    target: 'es5'
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-typescript");
};