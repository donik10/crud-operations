import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/components/LoginView.vue'
import DashboardView from '@/components/DashboardView.vue'
import StudentsView from '@/components/StudentsView.vue'
import PaymentsView from '@/components/PaymentsView.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/students',
    name: 'Students',
    component: StudentsView
  },
  {
    path: '/payments',
    name: 'Payments',
    component: PaymentsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
