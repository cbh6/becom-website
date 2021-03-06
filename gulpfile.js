 var
     env = require('minimist')(process.argv.slice(2)),
     gulp = require('gulp'),
     uglify = require('gulp-uglify'),
     concat = require('gulp-concat'),
     gulpif = require('gulp-if'),
     connect = require('gulp-connect'),
     modRewrite = require('connect-modrewrite'),
     imagemin = require('gulp-imagemin'),
     include = require("gulp-include"),
     del = require('del'),
     less = require('gulp-less'),
     sass = require('gulp-sass'),
     LessPluginCleanCSS = require('less-plugin-clean-css'),
     LessPluginAutoPrefix = require('less-plugin-autoprefix'),
     cleanCSS = require('gulp-clean-css'),
     htmlmin = require('gulp-htmlmin');


 var
     srcDir = 'src/',
     buildDir = 'build/',
     assetsDir = buildDir + 'assets/',
     sassFiles = '/styles/sass/**/*.scss',
     cleancss = new LessPluginCleanCSS({
         advanced: true
     }),
     autoprefix = new LessPluginAutoPrefix({
         browsers: ["last 2 versions"]
     });

 gulp.task('sass', function() {
     return gulp.src(srcDir + '/styles/sass/**/*.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest(assetsDir + 'css'))
         .pipe(connect.reload());
 });

 gulp.task('less', function() {
     return gulp.src(srcDir + '/styles/less/**/*.less')
         .pipe(less({
             plugins: [autoprefix, cleancss]
         }))
         .on('error', function(error) {
             console.log(error.toString());
             this.emit('end');
         })
         .pipe(gulp.dest(assetsDir + 'css'))
         .pipe(connect.reload());
 });

 gulp.task('js', function() {
     return gulp.src(srcDir + 'js/main.js')
         .pipe(concat('main.js'))
         .pipe(include())
         .on('error', console.log)
         .pipe(uglify())
         .pipe(gulp.dest(assetsDir + 'js/'))
         .pipe(connect.reload());
 });

 gulp.task('scrolljs', function() {
     return gulp.src(srcDir + 'js/scroll.js')
         .pipe(concat('scroll.js'))
         .pipe(include())
         .on('error', console.log)
         .pipe(uglify())
         .pipe(gulp.dest(assetsDir + 'js/'))
         .pipe(connect.reload());
 });

 gulp.task('mail', function() {
     return gulp.src(srcDir + 'php/sendmail.php')
         .pipe(concat('sendmail.php'))
         .pipe(gulp.dest('./' + buildDir))
         .pipe(connect.reload());
 });

  gulp.task('video', function() {
     return gulp.src(srcDir + 'video/*')
         .pipe(gulp.dest(assetsDir + 'video/'))
         .pipe(connect.reload());
 });

 gulp.task('img', function() {
     return gulp.src(srcDir + 'img/**/*')
         .pipe(imagemin({
             optimizationLevel: 3,
             progressive: true,
             interlaced: true
         }))
         .pipe(gulp.dest(assetsDir + 'img'))
         .pipe(connect.reload());
 });

 gulp.task('html', function() {
     return gulp.src([srcDir + 'html/**/*.html'])
         .pipe(include())
         .on('error', console.log)
         .pipe(htmlmin({
             collapseWhitespace: true
         }))
         .pipe(gulp.dest('./' + buildDir))
         .pipe(connect.reload());
 });

 gulp.task('clean', function() {
     return del([
         buildDir + '**/*'
     ]);
 });

 gulp.task('css', function() {
     return gulp.src(srcDir + 'styles/**/*.css')
         .pipe(cleanCSS())
         .pipe(gulp.dest(assetsDir + 'css'));
 });

 // PaperKit Lib building
 gulp.task('paperkit-css', function() {
     return gulp.src('lib/PaperKit/css/*.css')
         .pipe(cleanCSS())
         .pipe(gulp.dest(assetsDir + 'css'));
 });
 gulp.task('paperkit-fonts', function() {
     return gulp.src('lib/PaperKit/fonts/*')
         .pipe(gulp.dest(assetsDir + 'fonts'));
 });


 // Call Watch
 gulp.task('monitor', function() {
     gulp.watch(srcDir + 'styles/sass/**/*.scss', ['sass']);
     gulp.watch(srcDir + 'js/**/*.js', ['js', 'scrolljs']);
     gulp.watch(srcDir + 'html/**/*.html', ['html']);
     gulp.watch(srcDir + 'img/**/*.{jpg,png,gif}', ['img']);
 });

 // Connect (Livereload)
 gulp.task('connect', function() {
     connect.server({
         root: [buildDir],
         livereload: true,
         port: 3000,
         middleware: function() {
             return [
                 modRewrite([
                     '^/$ /index.html',
                     '^([^\\.]+)$ $1.html'
                 ])
             ];
         }
     });
 });

 // Lib task
 gulp.task('lib', ['paperkit-css', 'paperkit-fonts']);

 // watch task
 gulp.task('watch', ['default', 'connect', 'monitor']);

 // Default task
 gulp.task('default', ['sass', 'css', 'js', 'scrolljs', 'html', 'img', 'lib', 'video']);