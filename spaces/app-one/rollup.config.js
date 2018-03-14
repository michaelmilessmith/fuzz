import babel from 'rollup-plugin-babel'

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [
    'react'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
