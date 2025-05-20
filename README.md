# sharedb-client-browser

A distribution of the [ShareDB](https://github.com/share/sharedb) client suitable for use in Vite, Rollup and other build tools that do not have built-in support for CommonJS and Node polyfills. Uses the venerable [Browserify](https://browserify.org/).

There are 3 UMD builds provided:

- `sharedb-client-umd.cjs` Just the ShareDB client
- `ot-json1-presence-umd.cjs` Includes `ot-json1` and `text-unicode` (both exposed to avoid duplication of `text-unicode` in a bundle where application logic needs direct access to it)
- `ot-json1-umd.cjs` Includes `ot-json1` and `text-unicode`

In order to work properly, the consuming 

The consuming project needs to put the following in the Vite config (modify depending on which builds you need):

```
  // Required to have Vite properly handle these CommonJS imports
  optimizeDeps: {
    include: [
      'sharedb-client-browser/dist/sharedb-client-umd.cjs',
      'sharedb-client-browser/dist/ot-json1-presence-umd.cjs'
    ]
  },
```

See also

 * [GitHub Issue for ShareDB: Browser build for client](https://github.com/share/sharedb/issues/499)
 * [GitHub Issue for VZCode: Presence cursors](https://github.com/vizhub-core/vzcode/issues/16)

## Upgrading ShareDB

To cut a new release when ShareDB increments versions:

```
npm run upgrade
npm i
git commit -m "Upgrade ShareDB" -a
# Adjust the following command as needed to match upstream ShareDB version
npm version patch
npm publish
git push
git push --tags
```

Then put a new release in GitHub
