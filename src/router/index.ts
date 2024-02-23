import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JoinUsView from '../views/JoinUsView.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/ServiceView.vue'
import DefaultLayoutVue from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayoutVue,
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView,
        },
        {
          path: 'joinus',
          name: 'JoinUs',
          component: JoinUsView,
        },
        {
          path: 'service',
          name: 'service',
          component: ServiceView,
        },
        {
          path: 'about',
          name: 'About',
          component: AboutView,
        },
      ],
    },
  ],
})

export default router
