const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './frontend/app.js',
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },

  watch: true,
  //devtool: 'source-map',

  module: {
    rules: [
      {
          test: /\.hbs$/,
          loader: "handlebars-loader"
        },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
  },
  devServer: {
    hot: true,
    inline: true
  },
};