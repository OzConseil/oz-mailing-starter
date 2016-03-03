var gulp = require('gulp');
var inlineCss = require('gulp-inline-css');
var _ = require('lodash');
var path = require('path');
var rename = require('gulp-rename');
var debug = require('debug')('inline');

// Config
var getConfig = require('../utils/ConfigUtil');
var config = getConfig.get('project');
var emailConfig = getConfig.get('email');

gulp.task('inline', function(){

    var destFolder = config.translate ? config.tmpPath : config.dstPath;

    debug('Reading ' + config.src.html + ' & inlining css ...');
    var file = gulp.src(config.src.html)
        .pipe(inlineCss({
            extraCss: "",
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true,
            preserveMediaQueries: false,
            applyWidthAttributes: true,
            applyTableAttributes: true
        }));

    // Create all "index_<lang>.html"
    _.forEach(emailConfig, function(conf, lang){
        debug('Creating index_' + lang + '.html in ' + destFolder + ' folder ...');
        file.pipe(rename('index_' + lang + '.html'))
            .pipe(gulp.dest(destFolder));
    });

});