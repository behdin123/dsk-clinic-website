import AppHome from '@/components/views/AppHome.vue'

export const routes = [
  { path: '/', name: 'home', component: AppHome },

  {
    path: '/behandlinger/:type(botox|filler|skinbooster|prp|mesotherapy|microneedling)',
    name: 'behandling-dynamic',
    component: () => import('@/components/views/AppBehandlinger.vue'),
    props: route => ({ type: String(route.params.type || '').toLowerCase() }),
  },

  { path: '/omos', name: 'omos', component: () => import('@/components/views/OmOS.vue') },
  { path: '/kontaktos', name: 'kontaktos', component: () => import('@/components/views/KontaktOs.vue') },
]

export default routes