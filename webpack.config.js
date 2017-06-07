/*
Webpack Configuration
---
Webpack is used to bundle up all of libraries (mostly .js)
that are used by the front-end into one file so that they
can be easily loaded on the client-side.
*/

// TODO: Change the development source mapping to made debugging feasible

const path = require('path');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: [
    path.resolve(ROOT_PATH, 'client/index.jsx'),
  ],
  module: {
    loaders:[
      // Load .jsx files with Babel
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
      }
    ],
  },
  resolve: {
    // Try these extensions when loading eg. require('./example')
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(ROOT_PATH, './public/build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, './public'),
    historyApiFallback: true,
    hot: true,
    inline: true,
  }
}