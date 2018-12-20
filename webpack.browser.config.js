const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  new ManifestPlugin({
      fileName: 'asset-manifest.json'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
})
]

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    devtool: dev ? "none" : "source-map",
    entry: {
        app: "./src/client.js",
    },
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: "babel-loader"
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
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    plugins
};