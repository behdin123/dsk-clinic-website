import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// درمان‌های معتبر
// const CANONICAL = ['filler','skinbooster','prp','mesotherapy','microneedling'] // DISABLED: botox
const CANONICAL = ['botox','filler','skinbooster','mesotherapy','microneedling'] // DISABLED: prp

const normalize = (p='/', root='/') => {
  let s = String(p || root).trim()
  if (!s.startsWith('/')) s = '/' + s
  s = s.replace(/\/+$/, '') || '/'
  if (s !== '/' && !s.endsWith('/')) s += '/'
  return s.toLowerCase()
}

// اگر JSON داری، خوبه؛ ولی اینجا هم یک لیست مینیمال می‌سازیم که مطمئن باشیم
const BASE_ROUTES = ['/', '/omos', '/kontaktos', '/klinik/esbjerg', '/klinik/vejle']
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
  // vite-ssg læser KUN ssgOptions herfra – uden dette prerenderes behandlingssiderne ikke
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes: () => INCLUDED_ROUTES,
  },
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
})