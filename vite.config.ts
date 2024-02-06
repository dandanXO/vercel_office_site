import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import Checker from 'vite-plugin-checker'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    // !process.env.VITEST ? Checker({ vueTsc: true }) : undefined
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
