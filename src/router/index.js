import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MusiciansView from '../views/MusiciansView.vue'
import SuperPlaysView from '../views/SuperPlaysView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/musicians',
      name: 'musicians',
      component: MusiciansView,
    },
    {
      path: '/superplays',
      name: 'superplays',
      component: SuperPlaysView,
    },
  ],
})

export default router
