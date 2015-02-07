/// <binding />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-typescript");

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: true
                }
            }
        },
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

    grunt.registerTask('default', ['bower:install', 'typescript']);
};