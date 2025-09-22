import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// درمان‌های معتبر
const CANONICAL = ['botox','filler','skinbooster','prp','mesotherapy','microneedling']

const normalize = (p='/', root='/') => {
  let s = String(p || root).trim()
  if (!s.startsWith('/')) s = '/' + s
  s = s.replace(/\/+$/, '') || '/'
  return s.toLowerCase()
}

// اگر JSON داری، خوبه؛ ولی اینجا هم یک لیست مینیمال می‌سازیم که مطمئن باشیم
const BASE_ROUTES = ['/', '/omos', '/kontaktos']
const BEHANDLING_ROUTES = CANONICAL.map(t => `/behandlinger/${t}`)
const INCLUDED_ROUTES = Array.from(new Set(
  [...BASE_ROUTES.map(normalize), ...BEHANDLING_ROUTES.map(normalize)]
))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { port: 5173, open: true },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || ''
          if (/\.(png|jpe?g|gif|svg|webp)$/i.test(name)) return 'assets/images/[name]-[hash][extname]'
          if (/\.(woff2?|ttf|otf|eot)$/i.test(name))   return 'assets/fonts/[name]-[hash][extname]'
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },

  // === نکته‌ی مهم برای vite-ssg ===
  ssgOptions: {
    // رندر فولدری:
    dirStyle: 'nested',            // => kontaktos/index.html و behandlinger/botox/index.html
    // به‌صورت صریح بگو چه مسیرهایی بسازد:
    includedRoutes: () => INCLUDED_ROUTES,
    // تمیزتر شدن HTML خروجی (اختیاری)
    formatting: 'minify',
  },
})