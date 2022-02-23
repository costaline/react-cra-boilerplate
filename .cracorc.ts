export default {
  babel: {
    presets: [
      ['@emotion/babel-preset-css-prop'],
    ],
  },

  plugins: [
    {
      plugin: require('craco-alias'),
      options: {
        source: "tsconfig",
        baseUrl: require('./tsconfig.paths.json').compilerOptions.baseUrl,
        tsConfigPath: './tsconfig.paths.json'
      }
    },
  ]
}
