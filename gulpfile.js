var gulp = require('gulp');
var inlineCss = require('gulp-inline-css');
var browserSync = require('browser-sync').create();


var config = {
    src: {
        html: './src/index.html',
        css: ['./src/css/lib/ink.css', './src/css/style.css']
    },
    dist: './dist'
}


gulp.task('serve', function() {
    browserSync.init({
        server: "./dist"
    });
    gulp.watch([config.src.html, config.src.css], ['default']);
});

gulp.task('default', function() {
    return gulp.src(config.src.html)
        .pipe(inlineCss({
            extraCss: "",                   // Default: ""          => Extra css to apply to the file
            applyStyleTags: true,           // Default: true        => Whether to inline styles in <style></style>
            applyLinkTags: true,            // Default: true        => Whether to resolve `<link rel="stylesheet">` tags and inline the resulting styles
            removeStyleTags: true,          // Default: true        => Whether to remove the original <style></style> tags after (possibly) inlining the css from them
            removeLinkTags: true,           // Default: true        => Whether to remove the original `<link rel="stylesheet">` tags after (possibly) inlining the css from them
            preserveMediaQueries: false,    // Default: false       => Preserves all media queries (and contained styles) within `<style></style>` tags as a refinement when `removeStyleTags` is `true`. Other styles are removed.
            applyWidthAttributes: true,     // Default: false       => Whether to use any CSS pixel widths to create `width` attributes on elements.
            applyTableAttributes: true,     // Default: false       => Whether to apply the `border`, `cellpadding` and `cellspacing` attributes to `table` elements.
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});
