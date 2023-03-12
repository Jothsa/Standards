const presetEnv = require('postcss-preset-env');
const jit = require('postcss-jit-props');
const mixins = require('postcss-mixins');
const openProps = require('open-props');

const config = {
  plugins: [
    mixins(),
    jit(openProps),
    presetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};

module.exports = config;
