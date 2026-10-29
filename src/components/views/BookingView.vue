<template>
  <section class="container booking-view" aria-labelledby="booking-title">
    <header class="side-hero">
      <div>
        <p class="sec__eyebrow">Booking</p>
        <h1 id="booking-title">Book tid i Esbjerg eller Vejle</h1>
        <p class="side-hero__lead">
          Vælg et tidspunkt herunder. Din første tid er altid en <b>gratis og uforpligtende
          forundersøgelse</b> hos klinikkens læge – også hvis du ender med ikke at blive behandlet.
        </p>
        <ul class="side-hero__chips">
          <li>Gratis forundersøgelse</li>
          <li>Udføres af læge</li>
          <li>Du betaler efter behandlingen</li>
        </ul>
        <div class="side-hero__handling">
          <a class="knap knap--primaer" href="#vaelg-tid">Vælg en tid</a>
          <router-link class="knap knap--sekundaer" to="/priser/">Se priser</router-link>
        </div>
      </div>

      <aside class="sec--kort kontakt-boks" aria-labelledby="kontakt-titel">
        <h2 id="kontakt-titel">Hellere skrive eller ringe?</h2>
        <p>Vi svarer typisk inden for én hverdag.</p>
        <div class="kontakt-boks__knapper">
          <a class="knap knap--primaer" :href="smsHref">Send en sms</a>
          <a class="knap knap--sekundaer" :href="phoneHref">Ring {{ phone }}</a>
        </div>
        <dl class="kontakt-boks__tider">
          <div><dt>Esbjerg</dt><dd>Mandag–fredag 17:00–20:00</dd></div>
          <div><dt>Vejle</dt><dd>Søndag 11:00–18:00</dd></div>
        </dl>
        <p class="kontakt-boks__note">
          Eller brug <router-link to="/kontaktos/">kontaktformularen</router-link>.
        </p>
      </aside>
    </header>

    <section class="sec sec--kort booking-embed" aria-labelledby="vaelg-tid">
      <div class="sec__head">
        <p class="sec__eyebrow">Vælg tid</p>
        <h2 id="vaelg-tid">Find en ledig tid</h2>
      </div>

      <div :id="containerId" class="gecko-container"></div>

      <p v-if="failed" class="embed-fallback">
        Bookingkalenderen kunne ikke indlæses.
        <a :href="bookingUrl" target="_blank" rel="noopener">Åbn booking i et nyt vindue</a>
        eller ring til os på <a :href="phoneHref">{{ phone }}</a>.
      </p>

      <noscript>
        <p class="embed-fallback">
          Bookingkalenderen kræver JavaScript.
          <a :href="bookingUrl" target="_blank" rel="noopener">Åbn booking i et nyt vindue</a>
          eller ring på {{ phone }}.
        </p>
      </noscript>
    </section>

    <section class="sec" aria-labelledby="efter-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Forløbet</p>
        <h2 id="efter-title">Hvad sker der, når du har booket?</h2>
      </div>
      <ol class="trin">
        <li>
          <span class="trin__nr" aria-hidden="true">01</span>
          <h3>Forundersøgelse hos læge</h3>
          <p>Vi taler om dine ønsker, gennemgår din sygehistorie og finder ud af, hvad der er realistisk. Du får en anbefaling og en pris. Den er gratis.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">02</span>
          <h3>Mindst 48 timers betænkningstid</h3>
          <p>Lovpligtig ved kosmetisk behandling. Du bestemmer selv, om du vil gå videre.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">03</span>
          <h3>Behandlingen</h3>
          <p>Udføres af klinikkens ansvarlige læge, Arash Bagheri. Du får besked om, hvornår resultatet kan vurderes.</p>
        </li>
      </ol>
    </section>

    <section class="sec" aria-labelledby="hvor-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Klinikker</p>
        <h2 id="hvor-title">Hvor holder vi til?</h2>
      </div>
      <div class="klinik-kort">
        <article class="sec--kort">
          <h3>Esbjerg</h3>
          <dl>
            <div><dt>Adresse</dt><dd><address>Havnegade 6, 6700 Esbjerg</address></dd></div>
            <div><dt>Åbent</dt><dd>Mandag–fredag 17:00–20:00</dd></div>
          </dl>
          <router-link to="/klinik/esbjerg/" class="klinik-kort__link">Se klinikken i Esbjerg</router-link>
        </article>
        <article class="sec--kort">
          <h3>Vejle</h3>
          <dl>
            <div><dt>Adresse</dt><dd><address>Søndergade 50, 7100 Vejle</address></dd></div>
            <div><dt>Åbent</dt><dd>Søndag 11:00–18:00</dd></div>
          </dl>
          <router-link to="/klinik/vejle/" class="klinik-kort__link">Se klinikken i Vejle</router-link>
        </article>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import {
  BOOKING_URL, BOOKING_EMBED_SCRIPT, BOOKING_EMBED_CONTAINER_ID,
  CLINIC_PHONE, CLINIC_PHONE_HREF
} from '@/config/booking'

const SITE_URL = 'https://dsklinik.dk'
const containerId = BOOKING_EMBED_CONTAINER_ID
const smsHref = 'sms:+4553503750?&body=Hej%20DK%20Sk%C3%B8nhedsklinik%2C%20jeg%20vil%20gerne%20booke%20en%20tid%20til%20'
const bookingUrl = BOOKING_URL
const phone = CLINIC_PHONE
const phoneHref = CLINIC_PHONE_HREF
const failed = ref(false)

// Geckos script indsætter kalenderen i containeren. Det må kun koere i browseren,
// og kun naar containeren findes – derfor ikke via useHead.
onMounted(() => {
  if (typeof document === 'undefined') return
  if (document.querySelector(`script[src="${BOOKING_EMBED_SCRIPT}"]`)) return

  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = BOOKING_EMBED_SCRIPT
  s.onerror = () => { failed.value = true }
  document.body.appendChild(s)

  window.gtagEvent?.('booking_page_view', { component: 'BookingView' })
})

const bookingLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/booking/#webpage`,
  name: 'Book tid – DK Skønhedsklinik',
  url: `${SITE_URL}/booking/`,
  description: 'Book en gratis forundersøgelse hos DK Skønhedsklinik i Esbjerg eller Vejle.',
  isPartOf: { '@id': `${SITE_URL}/#organization` },
  about: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Book gratis forundersøgelse',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: BOOKING_URL,
      inLanguage: 'da-DK',
      actionPlatform: [
        'https://schema.org/DesktopWebPlatform',
        'https://schema.org/MobileWebPlatform'
      ]
    },
    result: { '@type': 'Reservation', name: 'Gratis forundersøgelse hos læge' },
    provider: { '@id': `${SITE_URL}/#organization` }
  }
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Book tid', item: `${SITE_URL}/booking/` }
  ]
}

useHead({
  title: 'Book tid online | DK Skønhedsklinik i Esbjerg & Vejle',
  meta: [
    { name: 'description', content: 'Book en gratis forundersøgelse hos læge i Esbjerg eller Vejle. Vælg et ledigt tidspunkt i kalenderen – uforpligtende og uden binding.' },
    { name: 'keywords', content: 'book tid skønhedsklinik, book botox esbjerg, book filler vejle, gratis forundersøgelse, bestil tid kosmetisk klinik' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'Book tid – DK Skønhedsklinik i Esbjerg & Vejle' },
    { property: 'og:description', content: 'Vælg et ledigt tidspunkt til en gratis forundersøgelse hos læge.' },
    { property: 'og:url', content: `${SITE_URL}/booking/` },
    { property: 'og:image', content: `${SITE_URL}/og/home.webp` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Book tid – DK Skønhedsklinik' },
    { name: 'twitter:image', content: `${SITE_URL}/og/home.webp` }
  ],
  link: [
    { rel: 'canonical', href: `${SITE_URL}/booking/` },
    { rel: 'alternate', hreflang: 'da-DK', href: `${SITE_URL}/booking/` },
    { rel: 'preconnect', href: 'https://dsklinik.app4.geckobooking.dk' }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(bookingLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbLd) }
  ]
})
</script>

<style lang="scss" scoped>
$c-dark: #153655;
$c-blue: #2d58a1;

.booking-view {
  color: $c-dark;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--maal);
  padding: 56px 20px 72px !important;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.sec { margin-bottom: 64px; }

/* Kontakt-boksen i heroen */
.kontakt-boks { padding: 32px !important; }

.kontakt-boks h2 {
  color: $c-dark;
  font-size: 1.3rem;
  margin: 0 0 6px;
}

.kontakt-boks > p { color: rgba(21, 54, 85, .8); margin: 0; }

.kontakt-boks__knapper {
  display: grid;
  gap: 10px;
  margin: 20px 0 22px;
}

.kontakt-boks__tider { margin: 0; }

.kontakt-boks__tider > div,
.klinik-kort dl > div {
  border-top: 1px solid rgba(21, 54, 85, .10);
  display: grid;
  gap: 4px 16px;
  grid-template-columns: 90px minmax(0, 1fr);
  padding: 10px 0;
}

.kontakt-boks__tider dt,
.klinik-kort dt {
  color: rgba(21, 54, 85, .6);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .1em;
  padding-top: 2px;
  text-transform: uppercase;
}

.kontakt-boks__tider dd,
.klinik-kort dd { color: $c-dark; font-weight: 600; margin: 0; }

.klinik-kort address { font-style: normal; }

.kontakt-boks__note {
  font-size: .92rem;
  margin: 14px 0 0 !important;
}

.kontakt-boks__note a,
.klinik-kort__link { color: $c-blue; font-weight: 700; }

/* Bookingkalenderen */
.booking-embed { min-height: 620px; }
.booking-embed .sec__head { margin-bottom: 20px; }

.booking-embed :deep(iframe) {
  border: 0;
  display: block;
  min-height: 600px;
  width: 100% !important;
}

.embed-fallback {
  padding: 20px;
  text-align: center;

  a { color: $c-blue; }
}

@media (max-width: 600px) {
  .booking-embed { min-height: 560px; padding: 22px 16px !important; }
}

/* Klinikkortene */
.klinik-kort {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.klinik-kort article { padding: 28px !important; }

.klinik-kort h3 {
  color: $c-dark;
  font-size: 1.2rem;
  margin: 0 0 12px;
}

.klinik-kort dl { margin: 0 0 16px; }

.klinik-kort__link {
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 700px) {
  .klinik-kort { grid-template-columns: minmax(0, 1fr); }
}

/* Under 1000 px: samme opskrift som klinikssiderne - 90 % bredde */
@media only screen and (max-width: 1000px) {
  .booking-view {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .booking-view > * {
    box-sizing: border-box;
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: none !important;
    width: 90% !important;
  }
}
</style>
