<template>
  <section class="container prp-view" aria-labelledby="prp-title">
    <header class="prp-hero">
      <p class="eyebrow">DK Skønhedsklinik</p>
      <h1 id="prp-title">PRP-behandling tilbyder vi ikke længere</h1>
      <p class="lead">
        PRP (også kaldet vampyrbehandling) er ikke længere en del af klinikkens behandlinger –
        hverken til hud eller hår. Herunder kan du se, hvad vi anbefaler i stedet.
      </p>
    </header>

    <section class="prp-alternatives" aria-labelledby="alt-title">
      <h2 id="alt-title">Hvad kan du få i stedet?</h2>
      <p class="intro">
        Søgte du PRP for at få <b>friskere, mere fugtmættet hud</b> eller for at forbedre
        hudens kvalitet? Så er det især disse tre lægebehandlede muligheder, der er relevante
        i <router-link to="/klinik/esbjerg/">Esbjerg</router-link> og
        <router-link to="/klinik/vejle/">Vejle</router-link>:
      </p>

      <ul class="alt-list">
        <li>
          <h3><router-link :to="{ name: 'behandling-dynamic', params: { type: 'mesotherapy' } }">Mesotherapy</router-link></h3>
          <p>
            Mikroinjektioner med vitaminer, aminosyrer og antioxidanter. Ligger tættest på PRP,
            fordi den arbejder med hudens kvalitet, glød og fugt frem for volumen.
            Fra 750 kr. pr. session.
          </p>
        </li>
        <li>
          <h3><router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }">Skinbooster</router-link></h3>
          <p>
            Blød hyaluronsyre, der fugter huden indefra og forbedrer elasticitet og tekstur.
            Velegnet ved tør, mat hud og fine linjer. Fra 1.750 kr.
          </p>
        </li>
        <li>
          <h3><router-link :to="{ name: 'behandling-dynamic', params: { type: 'microneedling' } }">Microneedling</router-link></h3>
          <p>
            Kollagen-induktionsterapi, der stimulerer hudens egen heling. Det oplagte valg ved
            akne-ar, store porer og ujævn tekstur. Fra 1.050 kr.
          </p>
        </li>
      </ul>

      <p class="note">
        <b>Søgte du PRP mod hårtab?</b> PRP tilbyder vi ikke længere, men
        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'mesotherapy' } }">mesoterapi</router-link>
        kan i nogle tilfælde anvendes mod hårtab. Ved den gratis forundersøgelse vurderer
        lægen, om det er relevant i netop dit tilfælde.
      </p>

      <div class="booking-button">
        <button class="general_button arrow" type="button" @click="openBooking"
          aria-label="Book gratis forundersøgelse">
          Book gratis forundersøgelse
        </button>
      </div>
    </section>

    <section class="faq" aria-labelledby="prp-faq-title">
      <h2 id="prp-faq-title" class="section-title">Ofte stillede spørgsmål</h2>
      <div class="faq-list">
        <details v-for="(item, i) in faqs" :key="i" class="faq-item">
          <summary class="faq-q">{{ item.q }}</summary>
          <div class="faq-a"><p>{{ item.a }}</p></div>
        </details>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue'

const SITE_URL = 'https://dsklinik.dk'

const faqs = [
  {
    q: 'Tilbyder I PRP-behandling?',
    a: 'Nej. PRP er ikke længere en del af klinikkens behandlinger – hverken til hud eller hår.'
  },
  {
    q: 'Hvilken behandling ligner PRP mest?',
    a: 'Mesotherapy. Begge behandlinger arbejder med hudens kvalitet, glød og fugt via mikroinjektioner frem for at tilføre volumen.'
  },
  {
    q: 'Tilbyder I PRP mod hårtab?',
    a: 'Nej. Vi tilbyder mesoterapi, som i nogle tilfælde kan anvendes mod hårtab. Lægen vurderer ved den gratis forundersøgelse, om det er relevant for dig.'
  },
  {
    q: 'Kan jeg få rådgivning om, hvad der passer til min hud?',
    a: 'Ja. Forundersøgelsen er gratis og uforpligtende, og den udføres af klinikkens læge i både Esbjerg og Vejle.'
  }
]

const openBooking = () => {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'prp_udgaaet' } }))
  window.gtagEvent?.('booking_click', { placement: 'prp_udgaaet', component: 'PrpUdgaaet' })
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'PRP-behandling', item: `${SITE_URL}/behandlinger/prp/` }
  ]
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

useHead({
  title: 'PRP-behandling tilbydes ikke længere | DK Skønhedsklinik',
  htmlAttrs: { lang: 'da' },
  meta: [
    { name: 'description', content: 'Vi tilbyder ikke længere PRP i Esbjerg og Vejle. Se hvilke lægebehandlede alternativer vi anbefaler: mesotherapy, skinbooster og microneedling.' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'PRP-behandling tilbydes ikke længere | DK Skønhedsklinik' },
    { property: 'og:description', content: 'Se vores lægebehandlede alternativer til PRP i Esbjerg og Vejle.' },
    { property: 'og:url', content: `${SITE_URL}/behandlinger/prp/` },
    { property: 'og:image', content: `${SITE_URL}/og/home.webp` }
  ],
  link: [
    { rel: 'canonical', href: `${SITE_URL}/behandlinger/prp/` },
    { rel: 'alternate', hreflang: 'da-DK', href: `${SITE_URL}/behandlinger/prp/` }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqLd) }
  ]
})
</script>

<style lang="scss" scoped>
.prp-view {
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  padding: 140px 20px 100px !important;
}

.prp-hero {
  margin-bottom: 50px;

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: .12em;
    font-size: .8rem;
    color: #2d58a1;
    margin-bottom: 10px;
  }

  h1 {
    margin-bottom: 18px;
  }

  .lead {
    max-width: 62ch;
  }
}

.prp-alternatives {
  .intro {
    max-width: 70ch;
    margin-bottom: 30px;
  }
}

.alt-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  li {
    border: 1px solid rgba(0, 0, 0, .14);
    border-radius: 12px;
    padding: 22px;
  }

  h3 {
    margin-bottom: 10px;
  }

  a {
    color: #2d58a1;
    text-decoration: none;
    border-bottom: 1px dotted currentColor;
  }
}

.note {
  margin: 34px 0;
  padding: 18px 20px;
  border-left: 3px solid #2d58a1;
  background: rgba(45, 88, 161, .06);
  max-width: 70ch;
}

.booking-button {
  margin: 30px 0 70px;
}

.faq {
  margin-top: 20px;
}
</style>
