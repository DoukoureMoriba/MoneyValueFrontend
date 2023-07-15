import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../views/Welcome.vue'),
    }
    ,
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
    },

    {
      path: '/Add_pair_dashboard',
      name: 'Add_pair_dashboard',
      component: () => import('../views/Add_pair_dashboard.vue'),
    },
  ]

})

export default router
