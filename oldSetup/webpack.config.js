module.exports = {

  // Application entry point
  entry: "./app/app.js",

  // Compiled JavaScript output file
  output: {
    filename: "public/bundle.js"
  },

  // Transformations
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  // Debug Dev Tool
  devtool: "eval-source-map"
};