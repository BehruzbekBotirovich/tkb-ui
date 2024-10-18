import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/pages/dashboard/DashboardPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Asosiy sahifa',
      redirect: { name: "dashboard" }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/arizalar',
      name: 'main',
      component: () => import("@/pages/applications/ApplicationsPage.vue")
    },

  ]
})

export default router
