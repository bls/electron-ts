module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');

    grunt.initConfig({

        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: ["src/**/*.ts", "!src/typings/**/*.d.ts", "!src/test/**/*.d.ts"]
            }
        },

        ts: {
            default: { tsconfig: true },
            options: { compiler: './node_modules/.bin/tsc' }
        },

    });

    grunt.registerTask('default', ['compile']);
    grunt.registerTask('compile', ['ts', 'tslint']);
};

