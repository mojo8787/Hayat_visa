const path = require('path');

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            // Removed fallback as it is no longer valid in modern Webpack
            alias: {
                '@': path.resolve(__dirname, 'src/')
            }
        }
    },
    devServer: {
        watchFiles: {
            paths: ['src/**/*', 'public/**/*'],  // Specify which files to watch
            options: {
                usePolling: true  // Enable polling if needed for file changes detection
            }
        }
    }
}
