'use strict';

module.exports = {
    mode: 'production',
    entry: './js/script.js',
    output: {
      filename: 'bundle.min.js',
      path: __dirname + '/js'
    },
    watch: true,
  
    module: {}
};