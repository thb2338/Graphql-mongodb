var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        './src/server.js'
    ],
    target: 'node',
    output: {
        filename: 'build.js'
    },
    resolve: {
        extensions: ['.js','.json']
    },

    // externals: externals,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        _filename: true,
        _dirname: true,
        setImmediate: true,
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                loader: 'babel-loader',
                query:{
                    plugins: ['transform-runtime'],
                    presets: ['es2015','stage-3']
                },
                exclude: /node_modules/,
            },{
                test: /\.json$/,
                loader:'json-loader'
            }
        ]
    },
    plugins: [
         // OccurenceOrderPlugin is needed for webpack 1.x only
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        // new webpack.NoEmitOnErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
    ]
}

// function _externals(){
//     let manifest = require('./package.json')
//     let dependencies = manifest.dependencies
//     let externals = {}
//     for(let p in dependencies) {
//         externals[p] = 'common.js' + p
//     }
//     return externals
// }