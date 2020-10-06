// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: {},
        pugLoader: {},
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    // {
    //   use: '@gridsome/source-contentful',
    //   options: {
    //     // 使用變量
    //     space: 'process.env.CONTENTFUL_SPACE',
    //     accessToken: 'process.env.CONTENTFUL_TOKEN', // required
    //     host: 'cdn.contentful.com',
    //     environment: 'process.env.CONTENTFUL_ENVIRONMENT',
    //     typeName: 'Contentful'
    //   }
    // },
  ],
  css: {
    loaderoptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  },
}
