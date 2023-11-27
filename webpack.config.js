const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'

const webpackConfig = {
  entry: {
    content_script: path.resolve(__dirname, 'src/content_script.ts'),
    background: path.resolve(__dirname, 'src/background.ts'),
  },

  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '..' }],
    }),
  ],
}

module.exports = webpackConfig
