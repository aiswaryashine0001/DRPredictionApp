const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './src/app.js', // Update this to your main JS file

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },

  // Resolve settings for modules
  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      http: require.resolve('stream-http'),
      https: require.resolve('stream-http'), // Optional
    },
  },

  // Additional configurations (loaders, plugins, etc.)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loaders for CSS files
      },
      {
        test: /\.(png|jpe?g|gif|svg|bmp|webp)$/, // Add other image formats if needed
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]', // Output file name
            outputPath: 'assets/', // Output directory for images
          },
        },
      },
      // You can add other loaders here if needed
    ],
  },

  // Development server configuration (updated)
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve from the 'dist' folder
    compress: true,
    port: 3000, // Adjust to your desired port
  },
};
