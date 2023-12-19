// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/'
    ,
    devServer: {
          proxy: 'https://localhost:3000/',
      }
}
