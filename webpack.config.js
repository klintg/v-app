module.exports = {
  entry: "./client.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders:[{
      test:/\.js?$/,
      exclude: /(node_modules| server.js)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
