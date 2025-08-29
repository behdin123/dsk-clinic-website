import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '@/components/views/AppHome.vue';

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/Behandlinger/:type',
    name: 'Behandlinger',
    component: () => import('@/components/views/AppBehandlinger.vue'),
    props: true
  },
  /* {
    path: '/VIDEO',
    name: 'video',
    component: () => import('@/components/views/VIDEO.vue')
  }, */
  {
    path: '/OmOS',
    name: 'OmOS',
    component: () => import('@/components/views/OmOS.vue')
  },
  {
    path: '/KontaktOs',
    name: 'KontaktOs',
    component: () => import('@/components/views/KontaktOs.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(/*to, from, savedPosition*/) {
    return { top: 0 };
  },
});

export default router;