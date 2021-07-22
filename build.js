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

const buildClient = async () => {
  await buildBundle({
    inputOptions: {
      input: 'client.js',
      plugins: [
        nodePolyfills(),
        nodeResolve(),
        commonjs(),
//        compiler(),
//        terser(),
      ],
// Solved it! The trick is to _not_ declare this as external.
//      external: ['sharedb/lib/client'],
    },
    outputOptions: {
      file: 'bundle.js',
      format: 'umd',
      name: 'ShareDBClient'
    },
  });
};

const buildOptimized = async () => {
  await buildBundle({
    inputOptions: {
      input: 'bundle.js',
      plugins: [
        compiler({compilation_level:'ADVANCED'}),
      ],
    },
    outputOptions: {
      file: 'bundle.min.js',
      format: 'umd',
    },
  });
};

await buildClient();
await buildOptimized();
