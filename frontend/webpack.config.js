const path = require('path');
//const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')




const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

module.exports = {
    // mode: 'development',
    entry: './source/js/index.js',
    devtool: 'source-map',
    output: {
      //filename: filename('js'),
      // publicPath: "/static/",
        filename: "[name].js",
        path: path.resolve(__dirname, 'build'), 
    },
     resolve: {
       extensions: ['.js', '.wav', 'woff2'],
       alias: {
        normalize_css: __dirname + '/node_modules/normalize.css/normalize.css',
       },
       fallback: { "path": false },
      },


     devServer: {
       port: 4200,
       open: true,
     },

        module: {
            rules:
            [{
              test: /s[ac]ss$/,
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader?url=false',
                'sass-loader',
              ]},
              // {
              //   test: /\.s[ac]ss/,

              //   use: MiniCssExtractPlugin.loader({

              //   use: ['style-loader', 'css-loader', 'sass-loader'],
              //   }),
              // },
              {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                use: ['file-loader'],
            
              },
             
              {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                type: 'asset/resource',
                use: ['file-loader'],
                // options: { 
                //   name: "[name].ext"
                // },
              } 
            ],
        },


          plugins: [
            // new HTMLWebpackPlugin({
            //   template: './source/index.html',
            // }),

            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
              patterns: [
              {
              from: path.resolve(__dirname, 'source/samples'),
              to: path.resolve(__dirname, 'build/samples')
              },
              {
              from: path.resolve(__dirname, 'source/image'),
              to: path.resolve(__dirname, 'build/image')
              },
              {
                from: path.resolve(__dirname, 'source/fonts'),
                to: path.resolve(__dirname, 'build/fonts')
                },

            ]}),
            new MiniCssExtractPlugin({
              filename: "[name].css",
            }),

           ]
    };
