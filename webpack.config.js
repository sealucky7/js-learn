const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },

  watch: true
};