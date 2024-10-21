import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Asosiy sahifa',
      redirect: "/dashboard"
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/DashboardLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/dashboard/DashboardPage.vue'),
        },
        {
          path: 'arizalar',
          name: 'applications',
          component: () => import("@/pages/applications/ApplicationsPage.vue")
        },
      ]
    },

  ]
})

export default router
