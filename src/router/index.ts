import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JoinUsView from '../views/JoinUsView.vue'
import DefaultLayoutVue from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      ],
    },
  ],
})

export default router
