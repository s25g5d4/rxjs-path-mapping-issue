rxjs-path-mapping-issue
=======================================

This project is to address rxjs issue [#4070](https://github.com/ReactiveX/rxjs/issues/4070).
See comment [here](https://github.com/ReactiveX/rxjs/issues/4070#issuecomment-428901656).

## Usage

`npm run build && npm run start`

If no error is thrown, the test passes. Remember to run `npm install` first.

## Workaround for the Issue

I add an entry in rxjs' path-mapping file. Please see [webpack.config.js](webpack.config.js).

Run with fix: `npm run build-with-fix && npm run start`.
