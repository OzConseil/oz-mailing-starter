module.exports = {
    debug: ((process.env.NODE_ENV || 'development') === 'development'),
    src: {
        html: 'src/index.html',
        css: ['src/css/lib/ink.css', 'src/css/style.css']
    },
    dstPath: 'dist',
    configPath : 'config',
    tmpPath: 'tmp', // Used to translate
    translate: true, // Use translation with translation config ?
    emailTransporter: 'Mailjet' // Name should match file name in EmailService folder
};