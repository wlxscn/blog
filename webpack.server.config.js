const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    })
];

if ( !dev ) {
    plugins.push( new BundleAnalyzerPlugin( {
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    } ) );
}

module.exports = {
    mode: dev ? "development" : "production",
    devtool: dev ? "none" : "source-map",
    entry: {
        server: "./src/server.js",
    },
    resolve: {
        modules: [
            path.resolve( "./src" ),
            "node_modules",
        ],
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
              test: /\.scss$/,
              use: [
                    MiniCssExtractPlugin.loader,
                    { 
                      loader: 'css-loader',
                    },
                    'sass-loader'
                ]
            },
            {
              test: /\.(png|jp(e)?g|gif)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192
                  }
                }
              ]
            }
        ],
    },
    externals: [nodeExternals()],
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    node: {
        __dirname: true
    },
    plugins,
};