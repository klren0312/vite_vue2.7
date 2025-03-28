import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import DefineOptions from 'unplugin-vue-define-options/vite'
import path from 'path'
import VueMacros from 'unplugin-vue-macros/vite'
import tailwindcss from '@tailwindcss/vite'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    base: '/vite_vue2.7',
    server: {
      host: true,
      port: 28847,
    },
    plugins: [
      VueMacros({
        plugins: {
          vue: vue(),
        },
      }),
      DefineOptions(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: false,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),
      tailwindcss(),
      legacy({
        targets: ['defaults', 'ie >= 11'],
        modernPolyfills: true,
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
      Components({
        resolvers: [ElementUiResolver()],
      }),
    ],
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            'element-ui': ['element-ui'],
            echarts: ['echarts', 'vue-echarts'],
          },
        },
      },
    },
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: path.resolve('src') + '/',
        },
      ],
    },
  }
}
