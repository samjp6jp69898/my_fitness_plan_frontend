const path = require('path');

module.exports = {
  entry: './src/main.js', // 設定專案的進入點
  output: {
    path: path.resolve(__dirname, 'dist'), // 設定輸出的目錄
    filename: 'bundle.js' // 設定輸出的檔案名稱
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 使用 Vue Loader 處理 .vue 檔案
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/, // 使用 Babel 轉譯 ES6 語法
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 設定 Vue 的別名
    },
    extensions: [".*", ".js", ".vue", ".json"] // 設定可省略的副檔名
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // 設定開發伺服器的根目錄
    port: 9000, // 設定開發伺服器的埠號
    historyApiFallback: true // 設定路由的歷史記錄模式
  }
};
