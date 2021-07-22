import { rollup } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';

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
      ],
// Solved it! The trick is to _not_ declare this as external.
//      external: ['sharedb/lib/client'],
    },
    outputOptions: {
      file: 'bundle.js',
      format: 'iife',
    },
  });
};

buildClient();
