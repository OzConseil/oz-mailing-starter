var getConfig = require('./ConfigUtil');
var config = getConfig.get('project');
var emailServiceConfig = getConfig.get('emailService');
var path = require('path');

module.exports = {
    getService: function(){
        var emailService = require(path.join('../EmailService', config.emailTransporter));
        return new emailService(emailServiceConfig);
    }
}