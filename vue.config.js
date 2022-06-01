const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Dai Yi Lin',
    }
  },
  // crossorigin: "use-credentials",
  transpileDependencies: true,
  publicPath: './'
})