<template>
  <section class="container priser-view" aria-labelledby="priser-title">
    <header class="side-hero">
      <div>
        <p class="sec__eyebrow">Priser</p>
        <h1 id="priser-title">Priser på botox, filler og hudbehandlinger</h1>
        <p class="side-hero__lead">
          Her er vores priser i Esbjerg og Vejle. Alle behandlinger udføres af klinikkens læge,
          og forundersøgelsen er altid gratis og uforpligtende – også hvis du vælger ikke at
          blive behandlet bagefter.
        </p>
        <ul class="side-hero__chips">
          <li>Gratis forundersøgelse hos læge</li>
          <li>Samme priser i Esbjerg og Vejle</li>
          <li>Ingen binding</li>
        </ul>
        <div class="side-hero__handling">
          <button class="knap knap--primaer" type="button" @click="openBooking">
            Book gratis forundersøgelse
          </button>
          <a class="knap knap--sekundaer" href="#med-i-prisen" @click.prevent="tilSektion('med-i-prisen')">Det er med i prisen</a>
        </div>
      </div>

      <aside class="overblik" aria-labelledby="overblik-titel">
        <p id="overblik-titel" class="overblik__titel">Mest valgte behandlinger</p>
        <dl class="overblik__liste">
          <div v-for="row in overblik" :key="row.label">
            <dt><router-link :to="`/behandlinger/${row.type}/`">{{ row.label }}</router-link></dt>
            <dd>{{ row.price }}</dd>
          </div>
          <div>
            <dt>Forundersøgelse hos læge</dt>
            <dd>Gratis</dd>
          </div>
        </dl>
        <p class="overblik__note">Du betaler først efter behandlingen.</p>
      </aside>
    </header>

    <section v-for="group in priceGroups" :key="group.id" :id="group.id" class="sec priskort"
      :aria-labelledby="`grp-${group.id}`">
      <div class="priskort__intro">
        <h2 :id="`grp-${group.id}`">{{ group.title }}</h2>
        <p>{{ group.intro }}</p>
      </div>
      <dl class="prisliste">
        <div v-for="row in group.rows" :key="row.label">
          <dt>
            <router-link v-if="row.type" :to="`/behandlinger/${row.type}/`">{{ row.label }}</router-link>
            <span v-else>{{ row.label }}</span>
            <small v-if="row.note">{{ row.note }}</small>
          </dt>
          <dd>{{ row.price }}</dd>
        </div>
      </dl>
    </section>

    <section id="med-i-prisen" class="sec sec--panel" aria-labelledby="inkl-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Hvad du får</p>
        <h2 id="inkl-title">Det er med i prisen</h2>
      </div>
      <ul class="tjek tjek--2">
        <li><b>Forundersøgelse hos læge.</b> Gennemgang af dine ønsker, din sygehistorie og hvad der er realistisk at opnå. Den er gratis, uanset om du bliver behandlet.</li>
        <li><b>Selve behandlingen</b> udført af klinikkens ansvarlige læge, Arash Bagheri – ikke af en kosmetolog.</li>
        <li><b>Kontrol efter behov.</b> Ved botox kan effekten vurderes efter 14 dage, hvor dosis kan finjusteres.</li>
        <li><b>Rådgivning om efterbehandling</b> og hvad du skal undgå de første døgn.</li>
      </ul>
    </section>

    <section class="sec" aria-labelledby="forloeb-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Forløbet</p>
        <h2 id="forloeb-title">Sådan foregår det</h2>
      </div>
      <ol class="trin">
        <li>
          <span class="trin__nr" aria-hidden="true">01</span>
          <h3>Gratis forundersøgelse</h3>
          <p>Online eller i klinikken. Du får en anbefaling, en pris og svar på dine spørgsmål – uden at binde dig til noget.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">02</span>
          <h3>Mindst 48 timers betænkningstid</h3>
          <p>Lovpligtig ved kosmetisk behandling. Tiden er din til at tænke over det.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">03</span>
          <h3>Behandling og opfølgning</h3>
          <p>Behandlingen udføres af lægen, og du får besked om, hvornår resultatet kan vurderes.</p>
        </li>
      </ol>
    </section>

    <section class="sec sec--panel" aria-labelledby="priser-faq">
      <div class="sec__head">
        <p class="sec__eyebrow">Spørgsmål</p>
        <h2 id="priser-faq">Ofte stillede spørgsmål om priser</h2>
      </div>
      <FaqList :items="faqs" />
    </section>

    <section class="sec cta-kort" aria-labelledby="cta-title">
      <div>
        <h2 id="cta-title">Er du i tvivl om, hvad der passer til dig?</h2>
        <p>
          Det finder vi ud af sammen ved forundersøgelsen. Den koster ikke noget, og du
          forpligter dig ikke til behandling. Klinikkerne ligger i
          <router-link to="/klinik/esbjerg/">Esbjerg</router-link> og
          <router-link to="/klinik/vejle/">Vejle</router-link>.
        </p>
      </div>
      <div class="cta-kort__handling">
        <button class="knap knap--hvid" type="button" @click="openBooking">
          Book gratis forundersøgelse
        </button>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import FaqList from '@/components/FaqList.vue'

const SITE_URL = 'https://dsklinik.dk'

const priceGroups = [
  {
    id: 'rynker',
    title: 'Rynkebehandling med botox',
    intro: 'Prisen afhænger af, hvor mange områder der behandles – fx pande, mellem brynene og omkring øjnene.',
    rows: [
      { label: 'Botox – 1 område', price: '550 kr.', type: 'botox' },
      { label: 'Botox – 2 områder', price: '1.100 kr.', type: 'botox' },
      { label: 'Botox – 3 områder', price: '1.650 kr.', type: 'botox', note: 'Holdbarhed typisk 3–4 måneder' }
    ]
  },
  {
    id: 'volumen',
    title: 'Filler – volumen og kontur',
    intro: 'Hyaluronsyre til læber, kinder, kæbelinje, hage og statiske linjer. Kan opløses igen med hyaluronidase.',
    rows: [
      { label: 'Filler – 1 ml', price: '1.350 kr.', type: 'filler', note: 'Holdbarhed 6–12 måneder afhængigt af område' }
    ]
  },
  {
    id: 'hudkvalitet',
    title: 'Hudkvalitet, glød og ar',
    intro: 'Behandlinger der arbejder med hudens fugt, tekstur og kollagen frem for volumen.',
    rows: [
      { label: 'Skinbooster – per session', price: 'Fra 1.350 kr.', type: 'skinbooster', note: 'Prisen afhænger af typen af skinbooster' },
      { label: 'Mesotherapy – per session', price: 'Fra 750 kr.', type: 'mesotherapy', note: 'Prisen afhænger af cocktail og område' },
      { label: 'Microneedling – ansigt, per session', price: 'Fra 1.050 kr.', type: 'microneedling', note: 'Et forløb over flere sessioner giver bedst resultat' }
    ]
  },
  {
    id: 'konsultation',
    title: 'Forundersøgelse',
    intro: 'Forundersøgelsen er en lægefaglig vurdering – ikke et salgsmøde. Den er gratis og uforpligtende.',
    rows: [
      { label: 'Forundersøgelse hos læge', price: 'Gratis', note: 'Online eller i klinikken' }
    ]
  }
]

/* Overblik i heroen: hentes fra prislisten, saa tallene aldrig kan skilles ad */
const alleRaekker = priceGroups.flatMap((g) => g.rows)
const overblik = ['Botox – 1 område', 'Filler – 1 ml', 'Skinbooster – per session']
  .map((label) => alleRaekker.find((r) => r.label === label))
  .filter(Boolean)


/* Ankerlink: rul blødt hen til sektionen og laeg den midt paa skaermen */
const tilSektion = (id, blok = 'center') => {
  const el = document.getElementById(id)
  if (!el) return
  const roligt = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: roligt ? 'auto' : 'smooth', block: blok })
  history.replaceState(null, '', `#${id}`)
}

const faqs = [
  {
    q: 'Hvad koster botox?',
    a: 'Fra 550 kr. for ét område. To områder koster 1.100 kr. og tre områder 1.650 kr. Effekten holder typisk 3–4 måneder, og prisen dækker også den kontrol, hvor dosis kan finjusteres efter 14 dage.'
  },
  {
    q: 'Hvad koster 1 ml filler?',
    a: '1.350 kr. pr. ml – også for læbefiller. Hvor meget der skal bruges, afhænger af området og af, hvad du gerne vil opnå. Det finder vi ud af ved forundersøgelsen, inden du beslutter dig.'
  },
  {
    q: 'Er forundersøgelsen virkelig gratis?',
    a: 'Ja. Den er gratis og uforpligtende, uanset om du vælger at blive behandlet bagefter. Ved kosmetisk behandling er en forundersøgelse desuden et lovkrav.'
  },
  {
    q: 'Er priserne de samme i Esbjerg og Vejle?',
    a: 'Ja. Begge klinikker har samme priser og samme læge.'
  },
  {
    q: 'Hvorfor står der "fra" ved nogle behandlinger?',
    a: 'Fordi forbruget varierer. Ved skinbooster afhænger prisen af produkttypen, og ved mesotherapy af cocktail og område. Du får den præcise pris ved forundersøgelsen, før der bliver behandlet.'
  },
  {
    q: 'Hvornår skal jeg betale?',
    a: 'Du betaler i forbindelse med selve behandlingen – ikke ved forundersøgelsen. Der er mindst 48 timers betænkningstid mellem de to.'
  }
]

const openBooking = () => {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'priser' } }))
  window.gtagEvent?.('booking_click', { placement: 'priser', component: 'PriserView' })
}

const offerLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': `${SITE_URL}/priser/#priser`,
  name: 'Priser – DK Skønhedsklinik',
  url: `${SITE_URL}/priser/`,
  provider: { '@id': `${SITE_URL}/#organization` },
  itemListElement: [
    { type: 'botox', name: 'Botox – 1 område', price: '550' },
    { type: 'botox', name: 'Botox – 2 områder', price: '1100' },
    { type: 'botox', name: 'Botox – 3 områder', price: '1650' },
    { type: 'filler', name: 'Filler – 1 ml', price: '1350' },
    { type: 'skinbooster', name: 'Skinbooster – per session', price: '1350' },
    { type: 'mesotherapy', name: 'Mesotherapy – per session', price: '750' },
    { type: 'microneedling', name: 'Microneedling – ansigt', price: '1050' }
  ].map((o, i) => ({
    '@type': 'Offer',
    position: i + 1,
    name: o.name,
    price: o.price,
    priceCurrency: 'DKK',
    availability: 'https://schema.org/InStock',
    areaServed: ['Esbjerg', 'Vejle'],
    url: `${SITE_URL}/behandlinger/${o.type}/`,
    itemOffered: {
      '@type': 'MedicalProcedure',
      name: o.name,
      url: `${SITE_URL}/behandlinger/${o.type}/`
    }
  }))
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Priser', item: `${SITE_URL}/priser/` }
  ]
}

useHead({
  title: 'Priser | Botox, filler og hudbehandling | DK Skønhedsklinik',
  meta: [
    { name: 'description', content: 'Se priser på botox fra 550 kr., filler 1.350 kr. pr. ml, skinbooster, mesotherapy og microneedling i Esbjerg og Vejle. Gratis forundersøgelse hos læge.' },
    { name: 'keywords', content: 'botox pris, hvad koster botox, filler pris, læbefiller pris, skinbooster pris, microneedling pris, priser skønhedsklinik esbjerg, priser kosmetisk klinik vejle' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { name: 'geo:region', content: 'DK-86,DK-82' },
    { name: 'geo:placename', content: 'Esbjerg, Vejle, Danmark' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'Priser – botox, filler og hudbehandlinger | DK Skønhedsklinik' },
    { property: 'og:description', content: 'Botox fra 550 kr., filler 1.350 kr. pr. ml. Gratis forundersøgelse hos læge i Esbjerg og Vejle.' },
    { property: 'og:url', content: `${SITE_URL}/priser/` },
    { property: 'og:image', content: `${SITE_URL}/og/home.webp` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Priser | DK Skønhedsklinik' },
    { name: 'twitter:description', content: 'Botox fra 550 kr., filler 1.350 kr. pr. ml. Gratis forundersøgelse hos læge.' },
    { name: 'twitter:image', content: `${SITE_URL}/og/home.webp` }
  ],
  link: [
    { rel: 'canonical', href: `${SITE_URL}/priser/` },
    { rel: 'alternate', hreflang: 'da-DK', href: `${SITE_URL}/priser/` }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(offerLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbLd) }
  ]
})
</script>

<style lang="scss" scoped>
$c-dark: #153655;
$c-blue: #2d58a1;

.priser-view {
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

/* Prisgrupperne staar taettere end andre sektioner - de hoerer sammen */
.priskort { margin-bottom: 20px; }
.priskort:last-of-type { margin-bottom: 64px; }
#konsultation { margin-bottom: 64px; }

/* Overblik i heroen: navy kort med de mest valgte priser */
.overblik {
  background: $c-dark;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .14);
  box-sizing: border-box;
  color: #fff;
  padding: 32px 32px 28px;
}

.overblik__titel {
  color: rgba(255, 255, 255, .7);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .13em;
  margin: 0 0 10px;
  text-transform: uppercase;
}

.overblik__liste { margin: 0; }

.overblik__liste > div {
  align-items: baseline;
  border-bottom: 1px solid rgba(255, 255, 255, .14);
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding: 14px 0;
}

.overblik__liste dt { color: #fff; font-weight: 600; }
.overblik__liste dt a { color: #fff; text-decoration: none; }
.overblik__liste dt a:hover,
.overblik__liste dt a:focus-visible { text-decoration: underline; text-underline-offset: 3px; }

.overblik__liste dd {
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
}

.overblik__note {
  color: rgba(255, 255, 255, .75);
  font-size: .9rem;
  margin: 16px 0 0;
}

/* Under 1000 px: samme opskrift som klinikssiderne - 90 % bredde */
@media only screen and (max-width: 1000px) {
  .priser-view {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .priser-view > * {
    box-sizing: border-box;
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: none !important;
    width: 90% !important;
  }
}
</style>
