const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'), //arquivo inicial da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'), //caminho para o arquivo de saída
    filename: 'bundle.js' //arquivo de saída
  },
  resolve: {
    extensions: [ //extensões
      '.js', 
      '.jsx',
      '.ts',
      '.tsx',
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins : [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [ //regras para o webpack converter corretamente
      {
        test: /\.(j|t)sx$/, //converterá esse arquivo para um que o navegador entenda
        exclude: /node_modules/, //exlucindo o node_modules
        use: { // e usando o babel-loader para fazer isso
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  }
};