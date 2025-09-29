// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Views
import AppHome from '@/components/views/AppHome.vue'

const Behandlinger = () => import('@/components/views/AppBehandlinger.vue')
const OmOs        = () => import('@/components/views/OmOS.vue')
const KontaktOs   = () => import('@/components/views/KontaktOs.vue')

// Vi accepterer både med og uden trailing slash — og canonicaliserer til med slash
export const routes = [
  { path: '/', name: 'home', component: AppHome },

  // behandlingsruter – allerede OK
  {
    path: '/behandlinger/:type(botox|filler|skinbooster|prp|mesotherapy|microneedling)/',
    name: 'behandling-dynamic',
    component: Behandlinger,
    props: r => ({ type: String(r.params.type || '').toLowerCase() }),
  },
  {
    path: '/behandlinger/:type(botox|filler|skinbooster|prp|mesotherapy|microneedling)',
    redirect: to => `/behandlinger/${String(to.params.type).toLowerCase()}/`,
  },

  // SÆT DISSE 2 IND:
  { path: '/omos/', name: 'omos', component: OmOs },
  { path: '/omos', redirect: '/omos/' },

  { path: '/kontaktos/', name: 'kontaktos', component: KontaktOs },
  { path: '/kontaktos', redirect: '/kontaktos/' },

  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() { return { top: 0 } },
})

export default router