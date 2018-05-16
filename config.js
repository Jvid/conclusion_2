const path = require('path')
exports.entry = {
  vendors: ['react', 'react-dom', 'react-router'],
  index: path.resolve('./index.js'),
}