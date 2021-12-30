import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/pages/Index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: {
      navigation: '首页'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/User.vue'),
    meta: {
      navigation: '个人中心'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
