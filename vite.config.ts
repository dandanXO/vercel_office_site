import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import Checker from 'vite-plugin-checker'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      dts: 'typings/auto-imports.d.ts',
      imports: ['vue', 'vue-router'],
    }),
    UnoCSS(),
    Icons({
      customCollections: {
        nd: FileSystemIconLoader('src/assets/icons', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
    }),
    // !process.env.VITEST ? Checker({ vueTsc: true }) : undefined
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@icons': 'virtual:icons',
    },
  },
})
