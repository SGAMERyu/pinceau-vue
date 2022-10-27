/// <reference types="histoire" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pinceau from "pinceau/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pinceau({
    configFileName: 'tokens.config',
  })],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'test'
    }
  },
  histoire: {
    setupFile: 'histoire.setup.ts'
  }
});
