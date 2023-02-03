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
        meta: { title: '' }
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import('@/views/Upload.vue'),
        meta: { title: '投稿' }
      },
      {
        path: '/upload/complete',
        name: 'Complete',
        component: () => import('@/views/Complete.vue'),
        meta: { title: '投稿完了' }
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/Admin.vue'),
        meta: { title: '管理' }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const DEFAULT_TITLE = 'Common Experience Sample'
router.afterEach((to) => {
  const title = to.meta.title ? `${to.meta.title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE
  document.title = title
})

export default router
