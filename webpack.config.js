const path = require('path');

module.exports = {
  mode: 'production', // or development
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'docs'),
    publicPath: 'docs/',
  },
  // devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    inline: true,
    contentBase: path.join(__dirname, './docs'),
    publicPath: '/',
    watchContentBase: true,
    port: 3000,
  },
};
