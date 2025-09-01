import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/components/views/AppHome.vue'

const CANONICAL_TYPES = [
  'botox','filler','skinbooster','prp','mesotherapy','microneedling'
]

const routes = [
  { path: '/', name: 'home', component: AppHome },

  // صفحهٔ لیست درمان‌ها (اگر نداری حذفش کن)
  // { path: '/behandlinger', name: 'behandlinger', component: () => import('@/components/views/Behandlinger.vue') },

  // یک Route داینامیک ولی canonical و کوچک
  {
    // محدود کردن type به گزینه‌های مجاز با Regex:
    path: '/behandlinger/:type(botox|filler|skinbooster|prp|mesotherapy|microneedling)',
    name: 'behandling-dynamic',
    component: () => import('@/components/views/AppBehandlinger.vue'),
    // نرمال‌سازی prop
    props: route => ({ type: String(route.params.type || '').toLowerCase() }),
    // سازگاری با لینک‌های قدیمیِ بزرگ‌حرف:
    alias: ['/Behandlinger/:type']
  },

  { path: '/omos', name: 'omos', component: () => import('@/components/views/OmOS.vue'), alias: ['/OmOS'] },

  { path: '/kontaktos', name: 'kontaktos', component: () => import('@/components/views/KontaktOs.vue'), alias: ['/KontaktOs'] }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){ return { top: 0 } }
})

// گارد: مسیر را و پارامتر type را lowercase می‌کند و نامعتبرها را به /behandlinger می‌فرستد
router.beforeEach((to, from, next) => {
  // ۱) کل مسیر را lowercase کن
  const lower = to.path.toLowerCase()
  if (to.path !== lower) {
    return next({ path: lower, query: to.query, hash: to.hash, replace: true })
  }

  // ۲) اگر در مسیر درمان‌ها هستیم، type را چک کن
  if (to.name === 'behandling-dynamic') {
    const type = String(to.params.type || '').toLowerCase()
    if (!CANONICAL_TYPES.includes(type)) {
      // اگر type نامعتبر بود، می‌تونی ببری به صفحه لیست یا هوم
      return next({ path: '/', replace: true })
      // یا اگر صفحه /behandlinger داری:
      // return next({ path: '/behandlinger', replace: true })
    }
    // اگر پارامتر کوچک نبود، کوچک کن (حالت لبه‌ای)
    if (to.params.type !== type) {
      return next({ name: 'behandling-dynamic', params: { ...to.params, type }, query: to.query, hash: to.hash, replace: true })
    }
  }

  next()
})

// بالاتر از afterEach تعریف کن
let isFirstNavigation = true

router.afterEach((to) => {
  // از اولین ناوبری عبور کن تا اگر EM یک page_load زد، دوبل نشود
  if (isFirstNavigation) {
    isFirstNavigation = false
    return
  }

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    const page_location = window.location.origin + to.fullPath
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location,
      page_path: to.fullPath
    })
  }
})
export default router;