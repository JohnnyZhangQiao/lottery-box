import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/pages/Index.vue';
import { isLogin } from '@/utils/userLogin';

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
    path: '/boxDetail',
    name: 'BoxDetail',
    component: () => import('@/pages/boxDetail.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/User.vue'),
    meta: {
      navigation: '个人中心',
      requireAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (isLogin()) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
