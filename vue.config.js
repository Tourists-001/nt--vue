module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://open.duyiedu.com',
      },
    }
  }
}
