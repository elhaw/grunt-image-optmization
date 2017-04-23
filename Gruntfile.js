module.exports = function (grunt) { 
require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		
		imagemin: {
		    png: {
		      options: {
		        optimizationLevel: 3
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'src/images',
		          src: ['**/*.png'],
		          // Could also match cwd line above. i.e. project-directory/img/
		          dest: 'dist/images',
		          ext: '.png'
		        }
		      ]
		    },
		    jpg: {
		      options: {
		        progressive: true
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'src/images',
		          src: ['*.jpg'],
		          // Could also match cwd. i.e. project-directory/img/
		          dest: 'dist/images',
		          ext: '.jpg'
		        }
		      ]
		    }
		}
	
    });
	grunt.registerTask('default', ['imagemin']);
};