// see https://github.com/rozek/build-configuration-study

import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/locally-unique-id-generator.ts',
  output: [
    {
      file:     './dist/locally-unique-id-generator.js',
      format:    'umd', // builds for both Node.js and Browser
      name:      'newUniqueId', // required for UMD modules
      noConflict:true,
      sourcemap: true,
      exports:   'default',
      plugins:   [terser({ format:{ comments:false, safari10:true } })],
    },{
      file:     './dist/locally-unique-id-generator.esm.js',
      format:   'esm',
      sourcemap:true
    }
  ],
  plugins: [
    typescript(),
  ],
};
