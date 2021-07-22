This is a minimal reproduction of an issue observed when attempting to bundle the [ShareDB](https://github.com/share/sharedb) client into a bundle using [Rollup](https://rollupjs.org/).

### Desired Behavior

When we run `npm install; npm run build`, the output `bundle.js` should contain the ShareDB client library.

### Actual Behavior

When we run `npm install; npm run build`, the output `bundle.js` does not contain the ShareDB client library. Instead, Rollup guesses at a browser global to use for that library.

Rollup outputs the following:

```
No name was provided for external module 'sharedb/lib/client' in output.globals – guessing 'sharedb'
```

However, I would expect this not to be the case, since we _are_ using both `@rollup/plugin-node-resolve` and `@rollup/plugin-commonjs`, which together should resolve the import path `sharedb/lib/client` and transpile the CommonJS implementation into ES6 for inclusion in the bundle.

It's unclear why this is not happening.

The implementation in `build.js` is a pared down version of the [VizHub Community Edition Build](https://github.com/vizhub-open-core/vizhub-open-core/blob/1dcc2c33896e088c545023a8bd7940e535dc6235/packages/vizhub-ce/src/build.js).
