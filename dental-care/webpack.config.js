const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


//Commonjs Modules
module.exports = {
    entry: { index: path.resolve(__dirname, "src", "index.js") },
    output: {
        path: path.resolve(__dirname, "dist")
      },
      resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
            { test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/, loader: 'file-loader' },
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ],
            }
  
          ]
      },
      devServer: {
        historyApiFallback: true,
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        })
      ]
  };