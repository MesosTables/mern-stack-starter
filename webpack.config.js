var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    javascript: './src/index.js',
    html: './public/index.html'
  },
  output: {
   path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query:
      {
       "presets": ["es2015", "stage-1", "react"]
      }
    },
    {
  test: /\.html$/,
  loader: "file?name=[name].[ext]"
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
