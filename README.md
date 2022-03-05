# sharedb-client-browser

A browser build of the [ShareDB](https://github.com/share/sharedb) client suitable for use from a CDN.

There are two builds provided, one with `ot-json0` bundled as the default OT type, and one with `ot-json1` bundled as the default OT type (this build does _not_ include `ot-json0` in the bundle). These builds both introduce the browser global `ShareDBClient`.

Example use:

```html
<script src="https://cdn.jsdelivr.net/npm/sharedb-client-browser@2.2.41/sharedb-client-json1-browser.min.js"></script>
```

Files provided include:

 * sharedb-client-json0-browser.js
 * sharedb-client-json0-browser.min.js
 * sharedb-client-json1-browser.js
 * sharedb-client-json1-browser.min.js

See also [index of files in JSDelivr](https://cdn.jsdelivr.net/npm/sharedb-client-browser/) (shows file sizes).

This build uses [Rollup](https://rollupjs.org/), [rollup-plugin-polyfill-node](https://github.com/FredKSchott/rollup-plugin-polyfill-node), [Google Closure Compiler](https://github.com/ampproject/rollup-plugin-closure-compiler) and [Terser](https://github.com/TrySound/rollup-plugin-terser) to optimize bundle size.

Some `node_modules` hackery was done to replace `ot-json0` with `ot-json1` such that `ot-json0` is excluded entirely from the bundle.

See also [GitHub Issue for ShareDB: Browser build for client](https://github.com/share/sharedb/issues/499).
