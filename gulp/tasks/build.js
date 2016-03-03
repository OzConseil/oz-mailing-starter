var gulp = require('gulp');
var getConfig = require('../utils/ConfigUtil');
var config = getConfig.get('project');

var tasks = ['inline'];
if(config.translate){
    tasks.push('translate');
}

gulp.task('build', tasks);