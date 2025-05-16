const { defineConfig } = require("cypress");
const webpackConfig = require("./webpack.config.js");

module.exports = defineConfig({
  // component: {
  // devServer: {
  //  framework: 'react',
  //  bundler: 'webpack',
  //  webpackConfig,
  // },
  //specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  //},
  e2e: {
    baseUrl: "https://google.com",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
