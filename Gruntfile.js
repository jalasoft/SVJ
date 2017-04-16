module.exports = function(grunt) {

	grunt.initConfig({
		destDir: "build",
		srcDir: "src",
		clean: {
			build: {
				src: "<%=destDir%>"
			},
			js: {
				src: ["build/js/*.js", "!build/js/all.js"]
			}
			/*css: {
				src: [ "build/css/*.css", "!build/css/all.css"]
			}*/
		},
		copy: {
			css: {
				files: [
					{
						expand: true,
						cwd: 'src/css/',
						src: ['**/*.css'],
						dest: 'build/css/'
					}
				]
			},
			js : {
				files: [
				{
					expand: true,
					cwd: "src/js",
					src: [ "*.js"],
					dest: "build/js"
				}
				]
			},
			html: {
				src: [ "<%=srcDir%>/index.html" ],
				dest: "<%=destDir%>/index.html"
			},
			images: {
				expand: true,
				cwd: "src/images",
				src: [ "**/*.*"],
				dest: "build/images"
			}
		},
		concat: {
			js: {
				src: ["<%=srcDir%>/js/*.js"],
				dest: '<%= destDir%>/js/all.js'
			}
			/*css: {
				src: [ "<%=destDir%>/css/reset.css", "<%=destDir%>/css/HO.css", "<%=destDir%>/css/styles.css"],
				dest: "<%=destDir%>/css/all.css"
			}*/
		},
		sass: {
      		build: {
      			src: "src/sass/main.scss",
      			dest: "build/css/main.css"
      		}
      	},
		link_html: {
			build: {
				jsFiles: ['js/all.js'],
      			cssFiles: ['css/main.css'],
      			targetHtml: ['index.html'],
      			options: {
      				cwd: "build/"
      			}
      		}
      	},
      	watch: {
      		files: [ "src/**/*.js", "src/**/*.scss", "src/index.html"],
      		tasks: "default"
      	}
	});

	grunt.loadNpmTasks("grunt-contrib-clean")
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-link-html");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");

	grunt.registerTask("default", ["clean", "copy:html", "copy:js", "copy:images", "concat:js", "clean:js", "sass:build", "link_html:build"]);


};
