import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { createHead } from '@unhead/vue'
import VueLazyload from 'vue-lazyload'

// (اختیاری) مسیرهای پابلیک که برای سایت‌مپ هم می‌سازی
import publicRoutes from './seo/routes.public.json'

// درمان‌های معتبر برای صفحات داینامیک
const CANONICAL_TYPES = [
  'botox','filler','skinbooster','prp','mesotherapy','microneedling'
]

// نرمالایزر مسیر
const normalize = (p) => {
  let s = String(p || '/').trim()
  if (!s.startsWith('/')) s = '/' + s
  // حذف اسلش انتهایی (به‌جز /)
  s = s.replace(/\/+$/, '') || '/'
  return s.toLowerCase()
}

// لیست نهایی مسیرهایی که باید prerender شوند
const INCLUDED_ROUTES = (() => {
  const fromJson = Array.isArray(publicRoutes)
    ? publicRoutes.map(r => normalize(r.path))
    : ['/','/omos','/kontaktos']

  // اطمینان از وجود همه درمان‌ها
  const behandlings = CANONICAL_TYPES.map(t => `/behandlinger/${t}`)

  // یکتا + مرتب
  return Array.from(new Set([...fromJson, ...behandlings])).sort()
})()

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    // خروجی فولدری بساز (behandlinger/botox/index.html)
    dirStyle: 'nested',
    includedRoutes: () => INCLUDED_ROUTES,
  },
  ({ app, router, isClient }) => {
    // Head برای SSR/SSG لازم است
    app.use(createHead())

    // Lazyload فقط سمت کلاینت
    if (isClient) {
      app.use(VueLazyload, {
        preLoad: 1.3,
        attempt: 1,
        // error/loading را اگر نیاز داری جایگزین کن
      })
    }

    // ===== روت‌گاردها =====
    router.beforeEach((to) => {
      // در زمان SSG (سمت سرور) هیچ ریدایرکتی انجام نده تا prerender کامل شود
      if (!isClient) return true

      // همه مسیرها lowercase
      const lower = to.path.toLowerCase()
      if (to.path !== lower) {
        return { path: lower, query: to.query, hash: to.hash, replace: true }
      }

      // ولیدیشن type درمان‌ها
      if (to.name === 'behandling-dynamic') {
        const type = String(to.params.type || '').toLowerCase()
        if (!CANONICAL_TYPES.includes(type)) {
          return { path: '/', replace: true }
        }
        if (to.params.type !== type) {
          return {
            name: 'behandling-dynamic',
            params: { ...to.params, type },
            query: to.query,
            hash: to.hash,
            replace: true
          }
        }
      }
      return true
    })

    // اسکرول و آنالیتیکس بعد از ناوبری (فقط کلاینت)
    let first = true
    router.afterEach((to) => {
      if (!isClient) return

      // behavior: 'auto' سازگارتر از 'instant'
      window.scrollTo({ top: 0, behavior: 'auto' })

      if (!first) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.origin + to.fullPath,
            page_path: to.fullPath,
          })
        }
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'PageView')
        }
      }
      first = false
    })
  }
)