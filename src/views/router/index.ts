import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import GlobalGuard from '@/views/router/Router/GlobalGuard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: GlobalGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
