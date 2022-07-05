import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not ie < 9'],
    }),
  ],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: path.resolve('src') + '/',
      },
    ],
  },
})
