var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var publicPath = 'http://127.0.0.1:20006/dist_web/';

var entry = {
  app: "./src/index.ts",
  vendor: [
    "lodash"
  ]
};
var plugins = [
  // new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  // new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" })
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.[hash].min.js',
  }),
  // new ExtractTextPlugin('css/[contenthash].css', {
  //   allChunks: true
  // }),
  new HtmlWebpackPlugin({
    title: 'TypeScript Demo',
    template: './src/index.html'
  })
];


module.exports = {
  entry: "./src/index.ts",
  output: {
    // filename: "./dist_web/bundle.js"
    // filename: '[name].js',
    filename: 'module.[hash].js',
    path: __dirname + '/dist_web',
    publicPath: publicPath,
    libraryTarget: 'umd'
  },
  plugins: plugins,
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
    //   {
    //   test: /\.html$/,
    //   loader: 'html-loader'
    // },
    {
      test: /\.tsx?$/,
      loader: "ts-loader",
      // loader: "awesome-typescript-loader",
      exclude: /(node_modules)/
    }]
  }
};