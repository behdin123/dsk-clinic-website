<template>
  <section class="container priser-view" aria-labelledby="priser-title">
    <header class="priser-hero">
      <p class="eyebrow">DK Skønhedsklinik</p>
      <h1 id="priser-title">Priser på botox, filler og hudbehandlinger</h1>
      <p class="lead">
        Her er vores priser i Esbjerg og Vejle. Alle behandlinger udføres af klinikkens læge,
        og forundersøgelsen er altid gratis og uforpligtende – også hvis du vælger ikke at
        blive behandlet bagefter.
      </p>

      <ul class="hero-points">
        <li><b>Gratis</b> forundersøgelse hos læge</li>
        <li><b>Samme priser</b> i Esbjerg og Vejle</li>
        <li><b>Ingen binding</b> – du beslutter efter betænkningstiden</li>
      </ul>

      <div class="booking-button">
        <button class="general_button arrow" type="button" @click="openBooking"
          aria-label="Book gratis forundersøgelse">
          Book gratis forundersøgelse
        </button>
      </div>
    </header>

    <section v-for="group in priceGroups" :key="group.id" class="price-block"
      :aria-labelledby="`grp-${group.id}`">
      <div class="price-head">
        <h2 :id="`grp-${group.id}`">{{ group.title }}</h2>
        <p class="price-intro">{{ group.intro }}</p>
      </div>

      <table class="price-table">
        <caption class="sr-only">{{ group.title }} – priser</caption>
        <thead>
          <tr><th scope="col">Behandling</th><th scope="col">Pris</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in group.rows" :key="row.label">
            <th scope="row">
              <router-link v-if="row.type" :to="`/behandlinger/${row.type}/`">{{ row.label }}</router-link>
              <span v-else>{{ row.label }}</span>
              <small v-if="row.note">{{ row.note }}</small>
            </th>
            <td>{{ row.price }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="included" aria-labelledby="inkl-title">
      <h2 id="inkl-title">Det er med i prisen</h2>
      <ul class="included-list">
        <li><b>Forundersøgelse hos læge.</b> Gennemgang af dine ønsker, din sygehistorie og hvad der er realistisk at opnå. Den er gratis, uanset om du bliver behandlet.</li>
        <li><b>Selve behandlingen</b> udført af klinikkens ansvarlige læge, Arash Bagheri – ikke af en kosmetolog.</li>
        <li><b>Kontrol efter behov.</b> Ved botox kan effekten vurderes efter 14 dage, hvor dosis kan finjusteres.</li>
        <li><b>Rådgivning om efterbehandling</b> og hvad du skal undgå de første døgn.</li>
      </ul>
    </section>

    <section class="steps-block" aria-labelledby="forloeb-title">
      <h2 id="forloeb-title">Sådan foregår det</h2>
      <ol class="steps">
        <li>
          <span class="step-no">1</span>
          <div>
            <h3>Gratis forundersøgelse</h3>
            <p>Online eller i klinikken. Du får en anbefaling, en pris og svar på dine spørgsmål – uden at binde dig til noget.</p>
          </div>
        </li>
        <li>
          <span class="step-no">2</span>
          <div>
            <h3>Mindst 48 timers betænkningstid</h3>
            <p>Lovpligtig ved kosmetisk behandling. Tiden er din til at tænke over det.</p>
          </div>
        </li>
        <li>
          <span class="step-no">3</span>
          <div>
            <h3>Behandling og opfølgning</h3>
            <p>Behandlingen udføres af lægen, og du får besked om, hvornår resultatet kan vurderes.</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="faq" aria-labelledby="priser-faq">
      <h2 id="priser-faq" class="section-title">Ofte stillede spørgsmål om priser</h2>
      <div class="faq-list">
        <details v-for="(item, i) in faqs" :key="i" class="faq-item">
          <summary class="faq-q">{{ item.q }}</summary>
          <div class="faq-a"><p>{{ item.a }}</p></div>
        </details>
      </div>
    </section>

    <section class="closing">
      <h2>Er du i tvivl om, hvad der passer til dig?</h2>
      <p>
        Det finder vi ud af sammen ved forundersøgelsen. Den koster ikke noget, og du
        forpligter dig ikke til behandling. Klinikkerne ligger i
        <router-link to="/klinik/esbjerg/">Esbjerg</router-link> og
        <router-link to="/klinik/vejle/">Vejle</router-link>.
      </p>
      <div class="booking-button">
        <button class="general_button arrow" type="button" @click="openBooking"
          aria-label="Book gratis forundersøgelse">
          Book gratis forundersøgelse
        </button>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue'

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
      { label: 'Filler – 1 ml', price: '1.650 kr.', type: 'filler', note: 'Holdbarhed 6–12 måneder afhængigt af område' }
    ]
  },
  {
    id: 'hudkvalitet',
    title: 'Hudkvalitet, glød og ar',
    intro: 'Behandlinger der arbejder med hudens fugt, tekstur og kollagen frem for volumen.',
    rows: [
      { label: 'Skinbooster – per session', price: 'Fra 1.750 kr.', type: 'skinbooster', note: 'Prisen afhænger af typen af skinbooster' },
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

const faqs = [
  {
    q: 'Hvad koster botox?',
    a: 'Fra 550 kr. for ét område. To områder koster 1.100 kr. og tre områder 1.650 kr. Effekten holder typisk 3–4 måneder, og prisen dækker også den kontrol, hvor dosis kan finjusteres efter 14 dage.'
  },
  {
    q: 'Hvad koster 1 ml filler?',
    a: '1.650 kr. pr. ml – også for læbefiller. Hvor meget der skal bruges, afhænger af området og af, hvad du gerne vil opnå. Det finder vi ud af ved forundersøgelsen, inden du beslutter dig.'
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
    { type: 'filler', name: 'Filler – 1 ml', price: '1650' },
    { type: 'skinbooster', name: 'Skinbooster – per session', price: '1750' },
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
  title: 'Priser | Botox, filler og hudbehandlinger | DK Skønhedsklinik',
  meta: [
    { name: 'description', content: 'Se priser på botox fra 550 kr., filler 1.650 kr. pr. ml, skinbooster, mesotherapy og microneedling i Esbjerg og Vejle. Gratis forundersøgelse hos læge.' },
    { name: 'keywords', content: 'botox pris, hvad koster botox, filler pris, læbefiller pris, skinbooster pris, microneedling pris, priser skønhedsklinik esbjerg, priser kosmetisk klinik vejle' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { name: 'geo:region', content: 'DK-86,DK-82' },
    { name: 'geo:placename', content: 'Esbjerg, Vejle, Danmark' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'Priser – botox, filler og hudbehandlinger | DK Skønhedsklinik' },
    { property: 'og:description', content: 'Botox fra 550 kr., filler 1.650 kr. pr. ml. Gratis forundersøgelse hos læge i Esbjerg og Vejle.' },
    { property: 'og:url', content: `${SITE_URL}/priser/` },
    { property: 'og:image', content: `${SITE_URL}/og/home.webp` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Priser | DK Skønhedsklinik' },
    { name: 'twitter:description', content: 'Botox fra 550 kr., filler 1.650 kr. pr. ml. Gratis forundersøgelse hos læge.' },
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
  flex-direction: column;
  max-width: 1100px;
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

.priser-hero {
  margin-bottom: 60px;

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: .12em;
    font-size: .8rem;
    color: $c-blue;
    margin-bottom: 10px;
  }

  h1 { margin-bottom: 18px; }
  .lead { max-width: 66ch; }
}

.hero-points {
  list-style: none;
  padding: 0;
  margin: 26px 0 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  li {
    background: rgba(45, 88, 161, .07);
    border: 1px solid rgba(45, 88, 161, .16);
    border-radius: 999px;
    padding: 9px 18px;
    font-size: .95rem;
  }
}

.price-block {
  margin-bottom: 54px;

  .price-head h2 { margin-bottom: 8px; }
  .price-intro { max-width: 70ch; margin-bottom: 20px; }
}

.price-table {
  width: 100%;
  border-collapse: collapse;

  thead th {
    text-align: left;
    font-size: .78rem;
    text-transform: uppercase;
    letter-spacing: .08em;
    color: rgba(21, 54, 85, .6);
    border-bottom: 2px solid rgba(21, 54, 85, .14);
    padding: 0 0 10px;

    &:last-child { text-align: right; }
  }

  tbody tr { border-bottom: 1px solid rgba(21, 54, 85, .1); }

  tbody th {
    text-align: left;
    font-weight: 600;
    padding: 16px 16px 16px 0;

    a {
      color: $c-dark;
      text-decoration: none;
      border-bottom: 1px dotted $c-blue;

      &:hover { color: $c-blue; }
    }

    small {
      display: block;
      font-weight: 400;
      font-size: .85rem;
      color: rgba(21, 54, 85, .62);
      margin-top: 4px;
    }
  }

  tbody td {
    text-align: right;
    white-space: nowrap;
    font-weight: 700;
    font-size: 1.05rem;
    color: $c-blue;
    vertical-align: top;
    padding: 16px 0;
  }
}

.included,
.steps-block,
.closing {

  h2 { margin-bottom: 18px; }
}

.included-list {
  padding-left: 18px;
  max-width: 76ch;

  li { margin-bottom: 12px; }
}

.steps {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

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

.closing {
  background: rgba(45, 88, 161, .06);
  border-radius: 14px;
  padding: 34px;

  p { max-width: 62ch; margin-bottom: 8px; }

  a { color: $c-blue; }
}

.booking-button { margin-top: 22px; }

.faq { margin-bottom: 54px; }

@media only screen and (max-width: 600px) {
  .priser-view { padding: 110px 16px 70px !important; }

  .price-table tbody th { padding-right: 10px; }
  .price-table tbody td { font-size: 1rem; }
  .closing { padding: 24px; }
}
</style>
