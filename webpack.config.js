module.exports = {
  entry: './app.js',
  output: {
    path: './public/build',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {test: /\.(js|jsx)$/,loader: 'babel'}
    ]
  }
}
