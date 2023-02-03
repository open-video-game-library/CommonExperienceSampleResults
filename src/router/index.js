// Composables
import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../views/Home.vue'
// import Upload from '../views/Upload.vue'
// import Complete from '../views/Complete.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import('@/views/Upload.vue'),
      },
      {
        path: '/upload/complete',
        name: 'Complete',
        component: () => import('@/views/Complete.vue'),
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/Admin.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
