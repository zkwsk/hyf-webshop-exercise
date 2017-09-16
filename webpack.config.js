module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    // 'loaders' specify which particular loaders will be used. 'test' specifies the type of files the loader should run on.
    // 'exclude' specifies the files or folders the loader should not run on and 'loader' specifies the loader.
    // NOTE: It's no longer allowed to omit the '-loader' suffix when using loaders.
    // see https://webpack.js.org/guides/migrating/#automatic-loader-module-name-extension-removed
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        // since transformations are now opt-in in Babel, we have to specify everything that we want to be transpiled by babel. for this purpose, we use 'presets' within a 'query' object. 'presets' are defined as an array.
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
