var gulp = require('gulp');
var path = require('path');
var _ = require('lodash');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var fs = require('fs');
var debug = require('debug')('translate');

// Config
var getConfig = require('../utils/ConfigUtil');
var config = getConfig.get('project');
var translations = getConfig.get('translations');


// Get files from tmp folder & translate them into dist folder

gulp.task('translate', function(){

    _.forEach(translations, function(translation){

        var lang = translation.lang;
        var filePath = path.join(config.tmpPath, 'index_' + lang + '.html');

        debug('Reading ' + filePath + ' & translate it ...');
        var file = gulp.src(path.join(config.tmpPath, 'index_' + lang + '.html'));

        _.forEach(translation, function(stringToAdd, stringToReplace){
            if(stringToAdd !== 'lang'){
                file.pipe(replace(stringToReplace, stringToAdd));
            }
        });

        file.pipe(gulp.dest(config.dstPath));
    });
})