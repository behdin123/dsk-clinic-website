/**
 * DK Skønhedsklinik — hvor kom den besøgende fra?
 * ------------------------------------------------------------------
 * Husker utm-parametre og Metas klik-id (fbclid) fra landingssiden, og
 * sender en anonym reference til booking-trackeren (Cloudflare Worker),
 * når bookingkalenderen åbnes. Trackeren kobler den til Geckos webhook.
 *
 * Kun med marketing-samtykke: uden det gemmes og sendes intet.
 * Ingen formularfelter, navne eller sideadresser med behandlingsnavne.
 */
import { getConsent, onConsentChange } from '@/consent/consent'

// Adressen er ikke hemmelig (den står i sidens kode), så den har en fast
// standardværdi; GitHub Actions-buildet har ingen .env-fil.
const TRACKER_URL =
  import.meta.env.VITE_BOOKING_TRACKER_URL || 'https://dsk-booking-tracker.behdin2010.workers.dev'
const STORAGE_KEY = 'dsk_attr'
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

const isClient = typeof window !== 'undefined'

// Det, landingsadressen indeholdt. Ligger kun i hukommelsen, indtil der
// er samtykke — så forsvinder det, hvis den besøgende siger nej.
let landing = null

function readLanding() {
  const q = new URLSearchParams(window.location.search)
  const found = {}
  PARAMS.forEach((p) => {
    const v = q.get(p)
    if (v) found[p] = v.slice(0, 200)
  })
  const fbclid = q.get('fbclid')
  if (fbclid) found.fbclid = fbclid.slice(0, 500)
  if (!Object.keys(found).length) return null
  found.ts = Date.now()
  return found
}

function persist() {
  if (!landing || !getConsent().marketing) return
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(landing))
  } catch {
    /* privat browsing — så gælder kun hukommelsen */
  }
}

function stored() {
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || 'null')
  } catch {
    return null
  }
}

function cookie(name) {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return m ? decodeURIComponent(m[1]) : null
}

if (isClient) {
  landing = readLanding()
  persist()
  onConsentChange((c) => {
    if (c.marketing) persist()
    else {
      try {
        window.sessionStorage.removeItem(STORAGE_KEY)
      } catch {
        /* ignoreres */
      }
    }
  })
}

/**
 * Kaldes når bookingkalenderen åbnes. Sender kun noget ved
 * marketing-samtykke, og kun hvis trackerens adresse er sat.
 * @param {string} source  hvor på siden, fx 'booking_button' eller 'booking_page'
 */
export function registerBookingIntent(source) {
  if (!isClient || !TRACKER_URL || !getConsent().marketing) return
  if (typeof crypto === 'undefined' || typeof crypto.randomUUID !== 'function') return

  const attr = stored() || landing || {}
  // _fbc sættes af Pixel ud fra fbclid; findes den ikke endnu, bygges den
  // i Metas eget format af det fbclid, landingsadressen havde.
  const fbc = cookie('_fbc') || (attr.fbclid ? `fb.1.${attr.ts}.${attr.fbclid}` : null)

  const payload = {
    ref: crypto.randomUUID(),
    consent: 'marketing',
    source,
    utm_source: attr.utm_source || null,
    utm_medium: attr.utm_medium || null,
    utm_campaign: attr.utm_campaign || null,
    utm_content: attr.utm_content || null,
    utm_term: attr.utm_term || null,
    fbc,
    fbp: cookie('_fbp'),
  }

  const url = TRACKER_URL.replace(/\/$/, '') + '/pending'
  const body = JSON.stringify(payload)
  try {
    // text/plain = ingen CORS-preflight; trackeren læser det som JSON.
    const blob = new Blob([body], { type: 'text/plain' })
    if (navigator.sendBeacon && navigator.sendBeacon(url, blob)) return
  } catch {
    /* falder tilbage til fetch */
  }
  fetch(url, { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'text/plain' } }).catch(
    () => {}
  )
}
