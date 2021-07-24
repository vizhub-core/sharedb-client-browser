# sharedb-client-browser

A browser build of the [ShareDB](https://github.com/share/sharedb) client suitable for use from a CDN.

This build introduces the browser global `ShareDBClient`.

By using [Rollup](https://rollupjs.org/), [rollup-plugin-polyfill-node](https://github.com/snowpackjs/rollup-plugin-polyfill-node), and [Google Closure Compiler](https://github.com/ampproject/rollup-plugin-closure-compiler) and [Terser](https://github.com/TrySound/rollup-plugin-terser), the bundle ends up at 65kB.

See also [GitHub Issue for ShareDB: Browser build for client](https://github.com/share/sharedb/issues/499).
