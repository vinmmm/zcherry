module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ],
        browserifyOptions:{
          debug: true
        }
      },
      app: {
        src : 'src/js/app.js',
        dest: 'js/app.js'
      }
    },
    stylus : {
      dev:{
        options:{
          linenos : true
        },
        files : {
          './css/app.css' : './src/stylus/index.styl'
        }
      }
    },
    watch: {
      files: ['./src/**/*'],
      tasks: ['build']
    },
    connect: {
    server: {
      options: {
        port: 9000,
       
        keepalive: true,
        open: {
          target: 'http://localhost:9000'
        }
      }
    }
  }
  })

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['build', 'watch', 'connect']);
  grunt.registerTask('build', ['browserify:app', 'stylus']);
  //grunt.registerTask('serve', ['connect:server']);

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
