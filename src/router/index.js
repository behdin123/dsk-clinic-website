// Views
import AppHome from '@/components/views/AppHome.vue'
const behandlinger = () => import('@/components/views/AppBehandlinger.vue')
const omos        = () => import('@/components/views/OmOS.vue')
const kontaktos   = () => import('@/components/views/KontaktOs.vue')
// DISABLED: Viden universe
// const viden   = () => import('@/components/views/vidensunivers.vue')

// NEW: clinic routes (lazy-loaded)
const clinicVejle   = () => import('@/components/views/ClinicVejle.vue')
const clinicEsbjerg = () => import('@/components/views/ClinicEsbjerg.vue')

// DISABLED: Viden article routes
// --- AUTO routes for alle artikler i /views/viden/*.vue ---
// const articleModules = import.meta.glob('@/components/views/viden/*.vue') // lazy

// Filnavn -> slug (BotoxVsFiller -> botox-vs-filler)
const toSlug = (fileBase) =>
  fileBase
    .replace(/\.vue$/,'')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')   // camelCase/PascalCase -> kebab
    .replace(/\s+/g, '-')                      // spaces -> hyphen
    .toLowerCase()

/* DISABLED: Viden article routes
const articleRoutes = Object.entries(articleModules).flatMap(([fullPath, loader]) => {
  const fileBase = fullPath.split('/').pop() || ''
  const slug = toSlug(fileBase)
  const name = `viden-artikel-${slug}`

  return [
    {
      path: `/viden/${slug}/`,
      name,
      component: loader,                       // lazy-loaded SFC
      meta: { pageClass: 'page-viden-article' }
    },
    {
      path: `/viden/${slug}`,
      redirect: `/viden/${slug}/`
    }
  ]
})
*/
const articleRoutes = [] // Empty array - viden routes disabled

// Vi accepterer både med/uden trailing slash og canonicaliserer til MED slash
export const routes = [
  { path: '/', name: 'home', component: AppHome },

  // DISABLED: Botox treatment route
  // {
  //   path: '/behandlinger/:type(botox|filler|skinbooster|mesotherapy|microneedling)/',
  //   name: 'behandling-dynamic',
  //   component: behandlinger,
  //   props: r => ({ type: String(r.params.type || '').toLowerCase() }),
  // },
  // {
  //   path: '/behandlinger/:type(botox|filler|skinbooster|mesotherapy|microneedling)',
  //   redirect: to => `/behandlinger/${String(to.params.type).toLowerCase()}/`,
  // },

  // ACTIVE: Non-botox treatments only
  {
    path: '/behandlinger/:type(filler|skinbooster|mesotherapy|microneedling)/',
    name: 'behandling-dynamic',
    component: behandlinger,
    props: r => ({ type: String(r.params.type || '').toLowerCase() }),
  },
  {
    path: '/behandlinger/:type(filler|skinbooster|mesotherapy|microneedling)',
    redirect: to => `/behandlinger/${String(to.params.type).toLowerCase()}/`,
  },

  { path: '/omos/', name: 'omos', component: omos },
  { path: '/omos', redirect: '/omos/' },

  { path: '/kontaktos/', name: 'kontaktos', component: kontaktos },
  { path: '/kontaktos', redirect: '/kontaktos/' },

  // DISABLED: Viden universe routes
  // { path: '/viden/', name: 'viden', component: viden, meta: { pageClass: 'page-viden-index' } },
  // { path: '/viden', redirect: '/viden/' },

  // --- Klinikker (Vejle / Esbjerg) ---
  { path: '/klinik/vejle/',   name: 'clinic-vejle',   component: clinicVejle },
  { path: '/klinik/vejle',    redirect: '/klinik/vejle/' },

  { path: '/klinik/esbjerg/', name: 'clinic-esbjerg', component: clinicEsbjerg },
  { path: '/klinik/esbjerg',  redirect: '/klinik/esbjerg/' },

  ...articleRoutes,

]
