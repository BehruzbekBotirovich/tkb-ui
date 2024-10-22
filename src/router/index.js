import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/LoginPage.vue')
    },
    {
      path: '/',
      name: 'Asosiy sahifa',
      redirect: "/dashboard"
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/dashboard/DashboardPage.vue'),
      children: [
        {
          path: '',
          name: 'dashboard_statistics',
          component: () => import('@/pages/dashboard/statistics/StatisticsPage.vue'),
        },
        {
          path: 'arizalar',
          name: 'dashboard_applications',
          component: () => import("@/pages/dashboard/applications/ApplicationsPage.vue")
        },
        {
          path: '500',
          component: () => import('@/pages/_500.vue'),
          name: 'dashboard_internal_server_error'
        },
      ]
    },

    {
      path: '/500',
      component: () => import('@/pages/_500.vue'),
      name: 'internal_server_error'
    },
    {
      path: '/404',
      component: () => import('@/pages/_404.vue'),
      name: 'not_found_main'
    },

  ]
})

export default router
