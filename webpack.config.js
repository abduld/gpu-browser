'use strict';


var _ = require('underscore');
var pkg = require('./package.json');


module.exports = {
  devtool: 'eval',
  resolve: {
    modulesDirectories: ['src/js', 'semantic/dist'],
    extensions: ['', '.es6', '.js', '.md']
  },
  entry: {
    'main': './src/js/main.es6'
  },
  output: {
    path: 'dist/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  target: 'atom',
  externals: _.keys(pkg.dependencies),
  module: {
    loaders: [
      { test: /\.es6$/, loader: 'babel-loader' },
      { test: /\.md$/, loader: "html!markdown" },
      { test: /\.jsx$/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      {
          test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
          loader: "imports?define=>false"
      }
    ]
  }
};
