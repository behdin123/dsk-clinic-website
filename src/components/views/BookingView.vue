<template>
  <section class="container booking-view" aria-labelledby="booking-title">
    <header class="booking-hero">
      <p class="eyebrow">DK Skønhedsklinik</p>
      <h1 id="booking-title">Book tid i Esbjerg eller Vejle</h1>
      <p class="lead">
        Vælg et tidspunkt herunder. Din første tid er altid en <b>gratis og uforpligtende
        forundersøgelse</b> hos klinikkens læge – også hvis du ender med ikke at blive behandlet.
      </p>
    </header>

    <section class="booking-embed" aria-labelledby="vaelg-tid">
      <h2 id="vaelg-tid" class="sr-only">Vælg tidspunkt</h2>

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

    <section class="after-booking" aria-labelledby="efter-title">
      <h2 id="efter-title">Hvad sker der, når du har booket?</h2>
      <ol class="steps">
        <li>
          <span class="step-no">1</span>
          <div>
            <h3>Forundersøgelse hos læge</h3>
            <p>Vi taler om dine ønsker, gennemgår din sygehistorie og finder ud af, hvad der er realistisk. Du får en anbefaling og en pris. Den er gratis.</p>
          </div>
        </li>
        <li>
          <span class="step-no">2</span>
          <div>
            <h3>Mindst 48 timers betænkningstid</h3>
            <p>Lovpligtig ved kosmetisk behandling. Du bestemmer selv, om du vil gå videre.</p>
          </div>
        </li>
        <li>
          <span class="step-no">3</span>
          <div>
            <h3>Behandlingen</h3>
            <p>Udføres af klinikkens ansvarlige læge, Arash Bagheri. Du får besked om, hvornår resultatet kan vurderes.</p>
          </div>
        </li>
      </ol>
      <p class="muted">
        Se <router-link to="/priser/">priserne</router-link> på alle behandlinger, inden du booker.
      </p>
    </section>

    <section class="clinics" aria-labelledby="hvor-title">
      <h2 id="hvor-title">Hvor holder vi til?</h2>
      <div class="clinic-grid">
        <article class="clinic-card">
          <h3><router-link to="/klinik/esbjerg/">Esbjerg</router-link></h3>
          <address>Havnegade 6, 6700 Esbjerg</address>
          <p class="hours">Mandag–fredag 17:00–20:00</p>
        </article>
        <article class="clinic-card">
          <h3><router-link to="/klinik/vejle/">Vejle</router-link></h3>
          <address>Søndergade 50, 7100 Vejle</address>
          <p class="hours">Søndag 11:00–18:00</p>
        </article>
      </div>

      <p class="contact-line">
        Passer ingen af tiderne, eller er du i tvivl? Skriv en SMS eller ring på
        <a :href="phoneHref">{{ phone }}</a>, eller brug
        <router-link to="/kontaktos/">kontaktformularen</router-link>.
      </p>
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
  flex-direction: column;
  max-width: var(--maal);
  margin: 0 auto;
  padding: 70px 20px 100px !important;
  color: $c-dark;
}

.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0);
  white-space: nowrap; border: 0;
}

.booking-hero {
  margin-bottom: 34px;

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: .12em;
    font-size: .8rem;
    color: $c-blue;
    margin-bottom: 10px;
  }

  h1 { margin-bottom: 16px; }
  .lead { max-width: 64ch; }
}

.booking-embed {
  margin-bottom: 60px;
  border: 1px solid rgba(21, 54, 85, .14);
  border-radius: 14px;
  padding: 10px;
  background: #fff;
  min-height: 620px;

  :deep(iframe) {
    width: 100% !important;
    min-height: 600px;
    border: 0;
    display: block;
  }
}

.embed-fallback {
  padding: 20px;
  text-align: center;

  a { color: $c-blue; }
}

.after-booking { margin-bottom: 56px; }

h2 { margin-bottom: 18px; }

.steps {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  li {
    display: flex;
    gap: 14px;
    border: 1px solid rgba(21, 54, 85, .14);
    border-radius: 12px;
    padding: 22px;
  }

  h3 { margin-bottom: 6px; font-size: 1.05rem; }
  p { font-size: .95rem; }
}

.step-no {
  flex: 0 0 34px;
  height: 34px;
  border-radius: 50%;
  background: $c-blue;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.muted {
  margin-top: 20px;
  font-size: .95rem;

  a { color: $c-blue; }
}

.clinic-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.clinic-card {
  border: 1px solid rgba(21, 54, 85, .14);
  border-radius: 12px;
  padding: 22px;

  h3 { margin-bottom: 8px; }

  a {
    color: $c-dark;
    text-decoration: none;
    border-bottom: 1px dotted $c-blue;

    &:hover { color: $c-blue; }
  }

  address { font-style: normal; margin-bottom: 8px; }
  .hours { font-size: .93rem; color: rgba(21, 54, 85, .72); }
}

.contact-line {
  margin-top: 22px;
  max-width: 70ch;

  a { color: $c-blue; }
}

@media only screen and (max-width: 600px) {
  .booking-view { padding: 110px 16px 70px !important; }
  .booking-embed { min-height: 560px; padding: 6px; }
}

/* ===== Under 1000 px: samme opskrift som klinikssiderne =====
   Hver blok paa siden staar i 90 % bredde, centreret, saa alt deler samme
   venstre- og hoejrekant og skalerer selv fra tablet til mobil. */
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
