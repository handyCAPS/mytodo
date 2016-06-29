const path = require('path');

module.exports = {

    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js',
        publicPath: '/dist/js'
    },
    devServer: {
      inline: true,
      port: 3333,
      historyApiFallback: true
    },
    module: {
      loaders: [
      // js
      {
        test: /\.js$/,
        loader: ['babel'],
        // include: path.join(__dirname, 'src/js'),
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react'],
            cacheDirectory: './.webpack-cache'
        }
      },
      // scss
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/
      }
      ]
    },
    sassLoader: {
      // includePaths: [ path.join(__dirname, 'src/scss')]
    }

};

// module.exports = {
//   entry: './dev/jsx/index.js',
//   output: {
//     path: 'dist/js',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js?$/,
//         exclude: /(node_modules|bower_components|backend|dashboard|dist|templates)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015', 'react'],
//           cacheDirectory: '.webpack-cache'
//         }
//       }
//     ]
//   }
// };
