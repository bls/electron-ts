module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-electron');

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

        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/html',
                    src: ['**'],
                    dest: 'dist/html'
                }]
            },
            json: {
                src: 'src/package.json',
                dest: 'dist/package.json'
            }
        },

        electron: {
            osxBuild: {
                options: {
                    name: 'BuiltApp',
                    dir: 'dist/',
                    out: '.',
                    version: '0.36.7',
                    platform: 'darwin',
                    arch: 'x64'
                }
            }
        }

    });

    grunt.registerTask('default', ['compile']);
    grunt.registerTask('compile', ['ts', 'tslint']);
    grunt.registerTask('package', ['copy', 'electron']);
};

