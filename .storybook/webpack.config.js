const path = require("path");

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, "../src/"),
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
