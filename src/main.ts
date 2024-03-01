import 'virtual:uno.css'
import '@/assets/scss/main.scss'
import '@unocss/reset/tailwind-compat.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'aos/dist/aos.css'

import messages from './locales/index'

import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    legacy: false, //处理报错 Uncaught (in promise) SyntaxError: Not available in legacy mode (at message-compiler.esm-bundler.js:54:19)
    locale: localStorage.getItem('lang') || "en", // 注意 locale 属性~~~~~~~~！
    globalInjection: true,
    fallbackLocale: 'en',
    messages
  })
console.log(messages)
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router).use(i18n).mount('#app')

