const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  entry: {
    index : './chat/client/src/page-index.js',
    chat : './chat/client/src/page-chat.js',
    register : './chat/client/src/page-register.js'
  },
  mode: 'development',
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
      alias: {
          vue: 'vue/dist/vue.js'
      },
  },
};