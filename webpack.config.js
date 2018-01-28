var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                loaders: ['style-loader','css-loader']
            }
        ]
    }
}