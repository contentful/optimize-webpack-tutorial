var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [new LodashModuleReplacementPlugin],
  module: {
    rules: [
      {
        // Any files that match this regex will be included
        test: /\.js$/,
        // Exclude any files under the node_modules directory
        exclude: /node_modules/,
        use: {
          // use the babel-loader
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // Use the lodash plugin to reduce its size
            plugins:  ["lodash"]
          }
        }
      }
    ]
  },
};
