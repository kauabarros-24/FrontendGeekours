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
      component: () => import('../views/login-signup/LoginView.vue')
    },
    {               
      path: '/SignUp',
      name: 'signup',	
      component: () => import('../views/login-signup/SignUpView.vue')
    },
    {               
      path: '/GeekStore',
      name: 'geekstore',	
      component: () => import('../views/GeekSoreView.vue')
    },
    {               
      path: '/Messages',
      name: 'messages',	
      component: () => import('../views/MessagesView.vue')
    },
    {
      path: '/Profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/Settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/Community',
      name: 'community',
      component: () => import('../views/CommunityView.vue')
    },
    {
      path: '/Notifications',
      name: 'notifications',
      component: () => import('../views/NotificationsView.vue')
    },
    {
      path: '/ForgotPassword',
      name: 'forgotpassword',
      component: () => import('../views/login-signup/ForgotPassView.vue')
    },
  ]
})
export default router
