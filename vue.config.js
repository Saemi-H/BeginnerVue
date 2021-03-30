module.exports = {
    devServer:{
        proxy:{
            '^/api':{
                target: 'http://localhost:5000',
                chnageOrigin: true,
                logLevel: 'debug',
                pathRewirte: {'^/api':'/'},
            }
        }
    }
}