
var gulp = require('gulp'),
  	gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();
    
var livereload = require('gulp-livereload'),
	uglify = require('gulp-uglify'),
	clean =require('gulp-clean-css'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	concat = require('gulp-concat'),
	prefixer = require('gulp-autoprefixer'),
	webserver = require('gulp-webserver');
	gulp.task('webserver',function(){
		gulp.src('./')
			.pipe(webserver({
				livereload:true,
				open:true
			}));	
		
	});
var imgArr = ['img/*.{png,jpg,gif,svg}','img/**/*.{png,jpg,gif,svg}'];
	gulp.task('html',function(){
		return gulp.src('*.html')
					.pipe(gulp.dest('build'));
	});
	
	gulp.task('js',function(){
		return  gulp.src('js/*.js')
					.pipe(uglify())
					.pipe(gulp.dest('build/js'));
	});
	 gulp.task('css',function(){
	 	return gulp.src('css/*.css')
	 				.pipe(clean())
	 				.pipe(gulp.dest('build/css'));
	 });
	gulp.task('watchCss',function(){
		gulp.watch('css/*.css',['css'])
	});
	
	gulp.task('watchJS',function(){
		gulp.watch('js/*.js',['js'])
	});
	gulp.task('watchHtml',function(){
		gulp.watch('*.html',['html'])
	});
	
	
	gulp.task('img',function(){
		
		return gulp.src(imgArr).pipe(imagemin({
			progressive:true,
			svgPlugins:[{removeViewBox:false}],
			use:[pngquant()]			
		}))
		.pipe(gulp.dest('build/img'));		
		
	})
	gulp.task('imghome',function(){
		
		return gulp.src('img/home/*.{png,jpg,gif,svg}').pipe(imagemin({
			progressive:true,
			svgPlugins:[{removeViewBox:false}],
			use:[pngquant()]			
		}))
		.pipe(gulp.dest('build/img/home'));		
		
	})
	gulp.task('prefixer',function(){
		return gulp.src('css/*.css')
					.pipe(autoprefixer({
							browsers: ['last 2 versions'], // 主流浏览器的最新两个版本
      						cascade: false // 是否美化属性值
					}))
					.pipe(gulp.dest('build/css'));		
		
	});
	gulp.task('move',function(){
		return gulp.src('source/')
					.pipe(gulp.dest('build/source'));
		
	})
	gulp.task('images',['img','imghome']);
	gulp.task('default',['webserver','watchCss','watchJS','watchHtml','img','move']);
