import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/Login',
      name: 'login',	
      component: () => import('../views/LoginView.vue')
    },
    {               
      path: '/signUp',
      name: 'signup',	
      component: () => import('../views/SignUpView.vue')
    },
  ]
})
export default router
