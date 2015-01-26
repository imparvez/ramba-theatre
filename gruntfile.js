module.exports =  function(grunt) {
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
					dest: 'assets/css/',
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
					'assets/js/main.min.js': ['assets/js/script.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('default', ["uglify", "cssmin", "browserSync"]);
};