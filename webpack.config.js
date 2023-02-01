const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    entry: './src/scripts/index.js',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /.(js|jsx?)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(woff2?|ttf|otf|eot)$/,
          type: 'asset/resource',
          generator: {
            filename: './assets/fonts/[name][ext]',
          },
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: './assets/img/[name][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: './src/assets/img/',
            to: './assets/img/',
          },
          {
            from: './src/assets/fonts/',
            to: './assets/fonts/',
          },
        ],
      }),
    ],
    devServer: {
      watchFiles: ['src/*.html'],
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 8080,
    },
  };

  if (isProduction) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    );
  }

  return config;
};
