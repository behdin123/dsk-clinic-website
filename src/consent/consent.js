/**
 * DK Skønhedsklinik — samtykkestyring
 * ------------------------------------------------------------------
 * Ét sted der afgør, om Google Analytics og Meta Pixel må køre.
 *
 * Princip: scripts indlæses IKKE, før brugeren har sagt ja. Det er
 * strengere end at indlæse dem og bede dem lade være, og det er den
 * eneste måde at være sikker på, at der ikke gemmes noget på brugerens
 * enhed, inden samtykket foreligger — som Datatilsynet kræver.
 *
 * Kategorier:
 *   necessary  — altid til, kræver ikke samtykke (router, sprogvalg, selve samtykket)
 *   statistics — Google Analytics 4
 *   marketing  — Meta Pixel
 */

export const CONSENT_VERSION = 1
const STORAGE_KEY = 'dsk_consent'
const MAX_AGE_DAYS = 365

const GA4_ID = 'G-J67ED74YZ9'
const PIXEL_ID = '1944687146287742'

const isClient = typeof window !== 'undefined'
const listeners = new Set()

let state = null
let ga4Loaded = false
let pixelLoaded = false

/* ---------------------------------------------------------------- state */

function defaults() {
  return {
    version: CONSENT_VERSION,
    decidedAt: null,
    categories: { necessary: true, statistics: false, marketing: false },
  }
}

function load() {
  if (!isClient) return defaults()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaults()
    const parsed = JSON.parse(raw)

    // Ny version af banneret, eller samtykke ældre end et år → spørg igen.
    if (parsed.version !== CONSENT_VERSION) return defaults()
    const age = Date.now() - new Date(parsed.decidedAt).getTime()
    if (!parsed.decidedAt || age > MAX_AGE_DAYS * 864e5) return defaults()

    return {
      version: CONSENT_VERSION,
      decidedAt: parsed.decidedAt,
      categories: {
        necessary: true,
        statistics: parsed.categories?.statistics === true,
        marketing: parsed.categories?.marketing === true,
      },
    }
  } catch {
    return defaults()
  }
}

function persist() {
  if (!isClient) return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* privat browsing eller fuld storage — samtykket gælder så kun denne session */
  }
}

function ensure() {
  if (!state) state = load()
  return state
}

/* --------------------------------------------------------------- public */

/** Har brugeren truffet et valg? Falsk = banneret skal vises. */
export function hasDecision() {
  return ensure().decidedAt !== null
}

/** Nuværende samtykke. Altid et objekt, aldrig null. */
export function getConsent() {
  return { ...ensure().categories }
}

export function consentRecord() {
  return JSON.parse(JSON.stringify(ensure()))
}

/**
 * Gem et valg og aktivér det med det samme.
 * @param {{statistics:boolean, marketing:boolean}} categories
 */
export function setConsent(categories) {
  const before = getConsent()
  state = {
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
    categories: {
      necessary: true,
      statistics: categories.statistics === true,
      marketing: categories.marketing === true,
    },
  }
  persist()

  const after = getConsent()
  const revoked =
    (before.statistics && !after.statistics) || (before.marketing && !after.marketing)

  apply()
  listeners.forEach((fn) => fn(after))

  // Et tilbagetrukket samtykke skal standse behandlingen. Scripts, der
  // allerede er indlæst, kan ikke fjernes fra siden — så vi rydder deres
  // cookies og genindlæser, så de ikke kører videre.
  if (revoked && isClient) {
    clearTrackingCookies()
    window.setTimeout(() => window.location.reload(), 150)
  }
}

export function acceptAll() {
  setConsent({ statistics: true, marketing: true })
}

export function rejectAll() {
  setConsent({ statistics: false, marketing: false })
}

/** Nulstil valget helt, så banneret vises igen. */
export function resetConsent() {
  if (isClient) {
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignoreres */
    }
  }
  state = defaults()
}

export function onConsentChange(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

/* -------------------------------------------------------------- loading */

/** Indlæs de scripts, det aktuelle samtykke tillader. Kaldes ved opstart. */
export function apply() {
  if (!isClient) return
  const c = getConsent()
  if (c.statistics) loadGA4()
  if (c.marketing) loadPixel()
}

function preconnect(origin) {
  if (document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) return
  const l = document.createElement('link')
  l.rel = 'preconnect'
  l.href = origin
  l.crossOrigin = ''
  document.head.appendChild(l)
}

function loadGA4() {
  if (ga4Loaded || !isClient) return
  ga4Loaded = true

  preconnect('https://www.googletagmanager.com')
  preconnect('https://www.google-analytics.com')

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA4_ID, { send_page_view: false })
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
  })
}

function loadPixel() {
  if (pixelLoaded || !isClient) return
  pixelLoaded = true

  preconnect('https://connect.facebook.net')

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable */

  window.fbq('init', PIXEL_ID)
  window.fbq('track', 'PageView')
}

/* --------------------------------------------------------------- events */

/**
 * Sidevisning ved navigation i SPA'en. Sender kun til de kanaler,
 * brugeren har sagt ja til.
 */
export function trackPageView(path) {
  if (!isClient) return
  const c = getConsent()
  const url = path ? window.location.origin + path : window.location.href

  if (c.statistics && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: url,
      page_path: path || window.location.pathname + window.location.search,
    })
  }
  if (c.marketing && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
  }
}

/**
 * Én indgang til alle hændelser.
 *
 * @param ga4Name  hændelsens navn i Google Analytics
 * @param params   valgfri parametre
 * @param meta     null, hvis hændelsen kun hører til i GA4.
 *                 En streng = Metas standardhændelse, fx 'Schedule'.
 *                 { custom: 'Navn' } = egen hændelse, når ingen
 *                 standardhændelse beskriver det, der faktisk skete.
 */
export function trackEvent(ga4Name, params = {}, meta = null) {
  if (!isClient) return
  const c = getConsent()

  if (c.statistics && typeof window.gtag === 'function') {
    window.gtag('event', ga4Name, {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
      ...params,
    })
  }

  if (meta && c.marketing && typeof window.fbq === 'function') {
    if (typeof meta === 'string') {
      window.fbq('track', meta, params)
    } else if (meta.custom) {
      window.fbq('trackCustom', meta.custom, params)
    }
  }
}

/* --------------------------------------------------------------- global */

// Bevarer den eksisterende window.gtagEvent(), så kaldesteder rundt i
// koden virker uændret — men nu først efter samtykke.
if (isClient) {
  window.gtagEvent = (name, params = {}) => trackEvent(name, params)
}

/* -------------------------------------------------------------- cookies */

const TRACKING_COOKIES = ['_ga', '_gid', '_gat', '_fbp', '_fbc']

function clearTrackingCookies() {
  if (!isClient) return
  const host = window.location.hostname
  const domains = [host, '.' + host, '.' + host.split('.').slice(-2).join('.')]

  document.cookie.split(';').forEach((raw) => {
    const name = raw.split('=')[0].trim()
    const isTracker =
      TRACKING_COOKIES.includes(name) || name.startsWith('_ga_') || name.startsWith('_gac_')
    if (!isTracker) return
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`
    })
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  })
}

/* --------------------------------------------------------- cookie-tabel */

/**
 * Anden lag-oplysning. Datatilsynet kræver navn, formål og levetid.
 * Holdes her, så banneret og cookiepolitikken ikke kan komme ud af trit.
 */
export const COOKIE_TABLE = {
  necessary: [
    { name: 'dsk_consent', purpose: 'Husker dit cookievalg', ttl: '12 måneder', provider: 'dsklinik.dk' },
  ],
  statistics: [
    { name: '_ga', purpose: 'Adskiller besøgende i besøgsstatistikken', ttl: '24 måneder', provider: 'Google' },
    { name: '_ga_J67ED74YZ9', purpose: 'Holder styr på den enkelte session', ttl: '24 måneder', provider: 'Google' },
  ],
  marketing: [
    { name: '_fbp', purpose: 'Måler om et besøg kom fra en annonce på Facebook eller Instagram', ttl: '3 måneder', provider: 'Meta' },
    { name: '_fbc', purpose: 'Gemmer annonce-id fra det klik, der førte hertil', ttl: '3 måneder', provider: 'Meta' },
  ],
}
