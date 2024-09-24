import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // assetsDir: 'public/sample/v1/assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // publicDir: resolve(__dirname, 'src'),
});
