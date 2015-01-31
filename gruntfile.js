module.exports =  function(grunt) {

	// Load the plugin that provides the "uglify" task.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserSync: {
		    bsFiles: {
		        src : 'assets/css/*.css'
		    },
		    options: {
		        server: {
		            baseDir: "./"
		        }
		    }
		},

		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'assets/css/',
					src: ['*.css', '!*.min.css'],
					dest: 'prod/css/',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			options: {
				manage: false,
				preserveComments: 'all'
			},
			my_target: {
				files: {
					'prod/js/script.min.js': ['assets/js/script.js']
				}
			}
		}
	});

	// Load the plugin that provides the "css minify" task.
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Load the plugin that provides the "browser-sync" task.
	grunt.loadNpmTasks('grunt-browser-sync');
	
	// Default task(s).
	grunt.registerTask('default', ["uglify", "cssmin", "browserSync"]);
};