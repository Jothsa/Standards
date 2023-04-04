/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    require('path').join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}',
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.subgrid': {
          'grid-template-columns': 'subgrid',
          'grid-template-rows': 'subgrid',
        },
        '.subgrid-rows': {
          'grid-template-rows': 'subgrid',
        },
        '.subgrid-cols': {
          'grid-template-columns': 'subgrid',
        },
      });
    }),
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
  ],
};
