module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    watch:
      javascript:
        files: "coffee/*"
        tasks: "javascript:dev"
    coffee:
      compile:
        files:
          'js/mq-analyzer.js': 'coffee/app.coffee'

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-notify"

  grunt.registerTask "javascript:dev", "coffee"

  grunt.registerTask "default", "javascript:dev"
