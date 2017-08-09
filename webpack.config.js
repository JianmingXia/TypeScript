var entry = {
  app: "./src/index.ts",
  // vendor: [
  //   "lodash"
  // ]
};

module.exports = {
  entry: entry,
  output: {
    filename: "./dist_web/bundle.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        // loader: "awesome-typescript-loader",
        exclude: /(node_modules)/
      }
    ]
  }
};