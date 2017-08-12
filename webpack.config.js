var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var publicPath = 'http://127.0.0.1:20006/dist_web/';

var entry = {
  app: "./src/index.js",
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
    // inject: false,
    template: './src/index.html'
  }),
  new webpack.ProvidePlugin({
    _: "lodash"
  })
];


module.exports = {
  entry: entry,
  output: {
    // filename: "./dist_web/bundle.js"
    // filename: '[name].js',
    filename: 'module.[hash].js',
    path: __dirname + '/dist_web',
    publicPath: publicPath,
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      //   {
      //   test: /\.html$/,
      //   loader: 'html-loader'
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: plugins,
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // alias: {
    //   lodash: "lodash/lodash.min.js"
    // }
  }
};