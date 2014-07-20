var config = {
	chromeManifest: {
		dist: {
			options: {
				buildnumber: 'both',
				background: {
					target: 'scripts/background.js',
					exclude: [
						'background/scripts/chromereload.js'
					]
				}
			},
			src: 'src',
			dest: 'dist'
		}
	};
};

grunt.initConfig(config);
grunt.loadNpmTasks('grunt-chrome-manifest');
grunt.registerTask('default', ['chromeManifest:dist']);