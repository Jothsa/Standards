import stylelint from 'vite-plugin-stylelint';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit(), stylelint()],
});
