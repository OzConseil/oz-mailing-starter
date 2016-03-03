var nodeMailjet = require('node-mailjet');
var debug = require('debug')('mailjet');
var validator = require('email-validator');

function Mailjet(emailServiceConfig){
    debug('Use Mailjet as email service');
    this.config = emailServiceConfig;
}

Mailjet.prototype.connect = function(){
    debug('Connect');
    this.mailjet = nodeMailjet.connect(this.config.username, this.config.password);
    this.sendService = this.mailjet.post('send');
};

Mailjet.prototype.sendEmail = function(html, subject){
    var emailData = {
        'FromEmail': this.config.emailFrom,
        'FromName': this.config.name,
        'Subject': subject,
        'Html-part': html,
        'Recipients': this.to
    };

    this.sendService.request(emailData)
        .on('success', function(){
            debug('Email send to ' + emailData.Recipients);
        })
        .on('error', function(err){
            debug('Error while sending email to ' + emailData.Recipients  + ', ' + err);
        })
};

Mailjet.prototype.setTo = function(to){
    this.to = to;
    return validator.validate(this.to);
};

Mailjet.prototype.setToDebugEmail = function(){
    this.to = this.config.debugEmail;
    return validator.validate(this.to);
};

module.exports = Mailjet;