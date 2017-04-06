
var  gulp = require('gulp');

var livereload = require('gulp-livereload'),
	uglify = require('gulp-uglify'),
	clean =require('gulp-clean-css'),
	webserver = require('gulp-webserver');
	gulp.task('webserver',function(){
		gulp.src('./')
			.pipe(webserver({
				livereload:true,
				open:true
			}));	
		
	});
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
	
	gulp.task('default',['webserver','watchCss','watchJS','watchHtml']);
