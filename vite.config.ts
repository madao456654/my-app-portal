import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/my-app-portal/', // GitHub Pages用に相対パスを設定
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        logMasker: resolve(__dirname, 'log-masker/index.html'),
        financeApp: resolve(__dirname, 'finance-app/index.html'),
      },
    },
  },
});
