const path = require("path");

const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(...dirs) {
  return path.join(__dirname, '..', ...dirs);
}

module.exports = {
  resolve: {
    alias: {
       '@': resolve('src'),
       '~': resolve('src', 'components'),
    }
  },
  module: {
    rules: [
      {
            test: /decorator\.html$/,
            exclude: /node_modules/,
            use: {loader: 'html-loader'}
      },
      {
        test: /\.(scss|css)$/,
        //include: path.resolve(__dirname, "../src/"),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              data: `@import "src/styles/${process.env.VUE_APP_BRAND}.scss";`,
            }
          }
        ],
      }
    ]
  }
};
