const path = require('path')

module.exports = function({ env, paths }) {
  return {
    babel: {
      presets: [],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
    },
    webpack: {
      alias: {
        environment: path.join(
          __dirname,
          'src',
          'environments',
          process.env.CLIENT_ENV,
        ),
      },
    },
  }
}
