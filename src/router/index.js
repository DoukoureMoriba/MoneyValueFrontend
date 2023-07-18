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

    {
      path: '/Edit_pair_dashboard/:id',
      name: 'Edit_pair_dashboard',
      component: () => import('../views/Edit_pair_dashboard.vue'),
      props:true
    },

    {
      path: '/Dashboard_money',
      name: 'Dashboard_money',
      component: () => import('../views/Dashboard_money.vue'),
    },

    {
      path: '/Add_money_dashboard',
      name: 'Add_money_dashboard',
      component: () => import('../views/Add_money_dashboard.vue'),
    },

    {
      path: '/Edit_money_dashboard/:id',
      name: 'Edit_money_dashboard',
      component: () => import('../views/Edit_money_dashboard.vue'),
      props:true
    },
  ]

})

export default router
