import { rollup } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from "rollup-plugin-terser";
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
const buildClient = async () => {
  await buildBundle({
    inputOptions: {
      input: 'client.js',
      plugins: [
        commonjs(),
        nodePolyfills(),
        nodeResolve(),
      ],
    },
    outputOptions: {
      file: 'sharedb-client-browser.js',
      format: 'iife',
    },
  });
};

// Optimize the size of the bundle.
const buildOptimized = async () => {
  await buildBundle({
    inputOptions: {
      input: 'client.js',
      // Results:
      //  - Terser alone           --> 86.2 kB
      //  - Closure Compiler alone --> 68.0 kB
      //  - Both --> 67.2 kB
      // Went with both.
      plugins: [
        commonjs(),
        nodePolyfills(),
        nodeResolve(),
        compiler({ compilation_level: 'ADVANCED' }),
        terser(),
      ],
    },
    outputOptions: {
      file: 'sharedb-client-browser.min.js',
      format: 'iife'
    },
  });
};

await buildClient();
await buildOptimized();
