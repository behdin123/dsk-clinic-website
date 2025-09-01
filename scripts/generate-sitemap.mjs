import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SITE_URL = process.env.SITE_URL || 'https://dsklinik.dk'

const routesJson = path.resolve(__dirname, '../src/seo/routes.public.json')
const publicOut  = path.resolve(__dirname, '../public/sitemap.xml')
const distOut    = path.resolve(__dirname, '../dist/sitemap.xml')

const routes = JSON.parse(fs.readFileSync(routesJson, 'utf8'))
const now = new Date().toISOString()

const urls = routes.map(r => {
  const loc = new URL((r.path || '/').replace(/\/+$/, '') || '/', SITE_URL).toString()
  const changefreq = r.changefreq || 'monthly'
  const priority = typeof r.priority === 'number' ? r.priority.toFixed(1) : '0.7'
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}).join('')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`.trim()

fs.mkdirSync(path.dirname(publicOut), { recursive: true })
fs.writeFileSync(publicOut, xml, 'utf8')
if (fs.existsSync(path.resolve(__dirname, '../dist'))) {
  fs.writeFileSync(distOut, xml, 'utf8')
}
console.log('✅ sitemap.xml generated')