const path = require('path');

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
        }
    ]
  }
};