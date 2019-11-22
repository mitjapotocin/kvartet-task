module.exports = function(grunt) {

	var root = '../../',
		lessRoot = root + 'less/',
		imagesRoot = root + 'images/',

		lessIcons = lessRoot + 'icons/',
		SVGImagesSrc = imagesRoot + 'svg/',
		SVGImagesDest = imagesRoot + 'svg2png/',
		SVGImagesCompile = root + '.svg/'

	var fileName = {
		pngFallback: {},
		svgData: {},
	};

	fileName.pngFallback[lessIcons + 'icons-png-fallback.less'] = SVGImagesCompile + 'icons.fallback.css';
	fileName.svgData[lessIcons + 'icons-svg-data.less'] = SVGImagesCompile + 'icons.data.svg.css';

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		grunticon: {
			imagesSvg: {
				files: [{
					expand: true,
					cwd: SVGImagesSrc,
					src: ['**/*.svg'],
					dest: SVGImagesCompile
				}],

				options: {
					cssprefix: ".__GRUNTICON__-",
				}
			}
		},
		'string-replace':{
			changePNGPaths:{
				files: fileName.pngFallback,
				options: {
					replacements:[
						{
							pattern:/'png\//g,
							replacement:"'../images/svg2png/"
						},
						{
							pattern:/\.__GRUNTICON__/g,
							replacement:".svg"
						}
					]
				}
			},
			changeSVGPaths:{
				files:fileName.svgData,
				options: {
					replacements:[
						{
							pattern:/\.__GRUNTICON__/g,
							replacement:".svg .svg"
						}
					]
				}
			}
		},
		copy: {
			pngs: {
				files: [
					{
						expand: true,
						cwd: SVGImagesCompile + 'png/',
						src: ['*.png'],
						dest: SVGImagesDest,
						// filter: 'isFile'
					}
				]
			}
		}

	});

	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('create-svg-icons', [
		'grunticon:imagesSvg',
			'copy:pngs',
				'string-replace:changePNGPaths',
				'string-replace:changeSVGPaths'
	]);
	grunt.registerTask('default', ['create-svg-icons']);

};