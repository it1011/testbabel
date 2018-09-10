const HTMLWebpackPlugin = require('html-webpack-plugin');
// const hot
const webpack = require('webpack');
module.exports = {
    devServer: {
        hot:true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            
                                "useBuiltIns": "usage",
                                // "targets": {
                                //     "chrome": "45",
                                //     "ie": "10"
                                //   },
                                //   debug:true,
                                //   loose:false,
                                //   modules: false
                              
                        }]]
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}