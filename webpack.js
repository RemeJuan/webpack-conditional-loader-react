const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  resolveLoader: {
    alias: {
      'conditional-loader-react': path.join(__dirname, './src')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['conditional-loader-react']
    }]
  }
}