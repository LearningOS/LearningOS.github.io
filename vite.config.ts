import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mocks',
      watchFiles: true,
      enable: process.env.NODE_ENV === 'development',
      logger: true,
    }),
  ],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@type': path.resolve(__dirname, './src/types')
    },
  }
})