import { rollup } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { terser } from 'rollup-plugin-terser';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

// Inspired by
// https://rollupjs.org/guide/en/#rolluprollup
const buildBundle = async ({ inputOptions, outputOptions }) => {
  const bundle = await rollup(inputOptions);
  const { output } = await bundle.generate(outputOptions);
  await bundle.write(outputOptions);
  await bundle.close();
};

// Build the client bundle, non-optimized.
const buildClient = async (otType) => {
  await buildBundle({
    inputOptions: {
      input: `client-${otType}.js`,
      plugins: [commonjs(), nodePolyfills(), nodeResolve()],
    },
    outputOptions: {
      file: `sharedb-client-${otType}-browser.js`,
      format: 'umd',
      name: 'ShareDBClient',
    },
  });
};

// Optimize the size of the bundle.
const buildOptimized = async (otType) => {
  await buildBundle({
    inputOptions: {
      input: `client-${otType}.js`,
      // Results:
      //  - Terser alone           --> 86.4 kB
      //  - Closure Compiler alone --> 84.2 kB
      //  - Both                   --> 83.6 kB
      // Went with both.
      plugins: [
        commonjs(),
        nodePolyfills(),
        nodeResolve(),

        // Unfortunately we can't use advanced compilation
        // because it mangles property names that are important.
        compiler(),

        terser(),
      ],
    },
    outputOptions: {
      file: `sharedb-client-${otType}-browser.min.js`,
      format: 'umd',
      name: 'ShareDBClient',
    },
  });
};

// Provide a build that bundles JSON0 as the default OT Type.
await buildClient('json0');
await buildOptimized('json0');

// Provide a build that bundles JSON1 as the default OT Type.
await buildClient('json1');
await buildOptimized('json1');
