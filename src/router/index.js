// Views
import AppHome from '@/components/views/AppHome.vue'
const behandlinger = () => import('@/components/views/AppBehandlinger.vue')
const omos        = () => import('@/components/views/OmOS.vue')
const kontaktos   = () => import('@/components/views/KontaktOs.vue')

// Vi accepterer både med/uden trailing slash og canonicaliserer til MED slash
export const routes = [
  { path: '/', name: 'home', component: AppHome },

  {
    path: '/behandlinger/:type(botox|filler|skinbooster|prp|mesotherapy|microneedling)/',
    name: 'behandling-dynamic',
    component: behandlinger,
    props: r => ({ type: String(r.params.type || '').toLowerCase() }),
  },
  {
    path: '/behandlinger/:type(botox|filler|skinbooster|prp|mesotherapy|microneedling)',
    redirect: to => `/behandlinger/${String(to.params.type).toLowerCase()}/`,
  },

  { path: '/omos/', name: 'omos', component: omos },
  { path: '/omos', redirect: '/omos/' },

  { path: '/kontaktos/', name: 'kontaktos', component: kontaktos },
  { path: '/kontaktos', redirect: '/kontaktos/' },


]
