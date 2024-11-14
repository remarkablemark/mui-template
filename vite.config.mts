import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [createHtmlPlugin(), react()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
      test: resolve(__dirname, 'test'),
    },
  },
});
