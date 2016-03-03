var gulp = require('gulp');
var debug = require('debug')('email');
var path = require('path');
var _ = require('lodash');
var fs = require('fs');
var emailServiceUtil = require('../utils/EmailServiceUtil');

// Config
var getConfig = require('../utils/ConfigUtil');
var config = getConfig.get('project');
var emailConfig = getConfig.get('email');

gulp.task('email', function(){

    // Get instance of email service class & connect it
    var emailService = emailServiceUtil.getService();
    emailService.connect();

    _.forEach(emailConfig, function(langObject, lang) {
        var file = path.join(config.dstPath, 'index_' + lang + '.html');
        getFileContent(file, function(html){

            if(config.debug){
                if(!emailService.setToDebugEmail()){
                    debug('Invalid debug email');
                    return;
                }
                emailService.sendEmail(html, langObject.subject);
            }else{
                _.forEach(langObject.receivers, function(emailAdress){
                    if(!emailService.setTo(emailAdress)){
                        debug('Invalid email ' + emailAdress);
                        return;
                    }
                    emailService.sendEmail(html, langObject.subject);
                });
            }
        });
    })
});


function getFileContent(path, cb){
    fs.readFile(path, 'utf8', function(err, fileContent){
        if(err){
            debug('Cannot get ' + file);
        }
        cb(fileContent);
    });
}