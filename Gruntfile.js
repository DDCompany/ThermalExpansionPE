module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            foundation: {
                tsconfig: './foundation/tsconfig.json'
            },

            expansion: {
                tsconfig: './expansion/tsconfig.json'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('foundation', ['ts:foundation']);
    grunt.registerTask('expansion', ['ts:expansion']);
};