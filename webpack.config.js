const path = require('path');
const rxPaths = require('rxjs/_esm5/path-mapping')();

if (typeof process.env['WITH_FIX'] === 'string') {
  rxPaths['rxjs/internal/Observable'] = 'rxjs/_esm5/internal/Observable';
}

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: rxPaths
  },
  mode: 'development'
};
