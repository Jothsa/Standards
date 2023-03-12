import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { sveltekit } from '@sveltejs/kit/vite';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, "src/index.ts"),
  //     name: "easyLCH",
  //     fileName: "easyLCH",
  //   },
  // },
  plugins: [
    sveltekit(),
    stylelint(),
  ],
});