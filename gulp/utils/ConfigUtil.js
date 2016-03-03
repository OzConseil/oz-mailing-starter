var path = require('path');
var configPath = require('../../config/project.js').configPath;

module.exports = {
    get: function(config){
        return require(path.join('../..', configPath, config));
    }
};