<template>
  <section class="container sb-view" :aria-labelledby="`${p.slug}-titel`">
    <!-- Samme hero som de andre behandlingssider (BehandlingHero.vue) -->
    <BehandlingHero :h1-id="`${p.slug}-titel`" :titel="p.h1" :eyebrow="eyebrow" :lead="p.lead"
      :broedkrummer="broedkrummer" :pris-fra="p.pris" pris-forled="" pris-enhed="pr. behandling" pris-anker="pris"
      pris-knap-tekst="Se pris"
      :billede="billede"
      :fakta="p.heroFakta" :fakta-label="`${p.navn} kort fortalt`" :booking-kilde="p.slug" />

    <section class="sec" aria-labelledby="hvad-titel">
      <div class="sb-split">
        <div>
          <div class="sec__head">
            <p class="sec__eyebrow">Behandlingen</p>
            <h2 id="hvad-titel">{{ p.hvad.titel }}</h2>
          </div>
          <p v-for="(t, i) in p.hvad.tekst" :key="'hvad-' + i">{{ t }}</p>
        </div>

        <aside class="sec--kort sb-kort" aria-label="Kort fortalt">
          <h3>Kort fortalt</h3>
          <ul class="tjek">
            <li v-for="k in p.hvad.kort" :key="k">{{ k }}</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- Hudlag: viser hvor produktet laegges. Inline SVG, saa det er skarpt
         og kan rettes. Lagenes navne staar ogsaa som tekst i listen ved siden af. -->
    <section class="sec sec--panel" aria-labelledby="lag-titel">
      <div class="sb-lag">
        <figure class="sb-lag__figur">
          <svg viewBox="0 0 320 250" role="img" :aria-labelledby="`${p.slug}-lag-t ${p.slug}-lag-d`">
            <title :id="`${p.slug}-lag-t`">Hudens lag og hvor {{ p.navn }} lægges</title>
            <desc :id="`${p.slug}-lag-d`">Tværsnit med tre lag: overhud øverst, læderhud i midten og fedtvæv nederst. {{ p.navn }} lægges i {{ p.lag === 'fedt' ? 'fedtvævet under huden' : 'læderhuden' }}.</desc>
            <rect x="10" y="20" width="300" height="34" rx="8" class="lag lag--over" />
            <rect x="10" y="60" width="300" height="80" rx="8" class="lag" :class="{ 'lag--aktiv': p.lag === 'hud' }" />
            <rect x="10" y="146" width="300" height="84" rx="8" class="lag" :class="{ 'lag--aktiv': p.lag === 'fedt' }" />
            <text x="26" y="42" class="lag__navn">Overhud</text>
            <text x="26" y="105" class="lag__navn" :class="{ 'lag__navn--aktiv': p.lag === 'hud' }">Læderhud</text>
            <text x="26" y="193" class="lag__navn" :class="{ 'lag__navn--aktiv': p.lag === 'fedt' }">Fedtvæv</text>
            <!-- Depotet -->
            <g :transform="p.lag === 'fedt' ? 'translate(0 88)' : ''">
              <ellipse cx="222" cy="100" rx="52" ry="20" class="depot" />
              <ellipse cx="222" cy="100" rx="26" ry="10" class="depot depot--kerne" />
            </g>
            <!-- Naal / kanyle -->
            <line x1="250" y1="6" x2="224" :y2="p.lag === 'fedt' ? 186 : 98" class="naal" />
          </svg>
          <figcaption>Det mørke lag er dér, {{ p.navn }} lægges. Tegningen er forenklet.</figcaption>
        </figure>

        <div>
          <div class="sec__head">
            <p class="sec__eyebrow">Sådan virker det</p>
            <h2 id="lag-titel">Hvor lægges {{ p.navn }}?</h2>
          </div>
          <p>{{ p.laeggesTekst }}</p>
          <dl class="sb-lagliste">
            <div>
              <dt>Overhud</dt>
              <dd>Hudens yderste lag. Her virker cremer.</dd>
            </div>
            <div :class="{ 'er-aktiv': p.lag === 'hud' }">
              <dt>Læderhud</dt>
              <dd>Her sidder hudens kollagen, elastin og fugt.<span v-if="p.lag === 'hud'"> <b>{{ p.navn }} lægges her.</b></span></dd>
            </div>
            <div :class="{ 'er-aktiv': p.lag === 'fedt' }">
              <dt>Fedtvæv</dt>
              <dd>Laget under huden, der giver ansigtet støtte.<span v-if="p.lag === 'fedt'"> <b>{{ p.navn }} lægges her.</b></span></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="sec" aria-labelledby="hvem-titel">
      <div class="sec__head">
        <p class="sec__eyebrow">Passer det til dig?</p>
        <h2 id="hvem-titel">{{ p.hvem.titel }}</h2>
        <p class="sec__lead">{{ p.hvem.lead }}</p>
      </div>
      <div class="sb-hvem">
        <div class="sb-hvem__kort">
          <h3>Et godt valg, hvis</h3>
          <ul class="tjek">
            <li v-for="t in p.hvem.passer" :key="t">{{ t }}</li>
          </ul>
        </div>
        <div class="sb-hvem__kort sb-hvem__kort--nej">
          <h3>Vælg noget andet, hvis</h3>
          <ul class="sb-nej">
            <li v-for="(t, i) in p.hvem.passerIkke" :key="'nej-' + i" v-html="t"></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="sec sec--panel" aria-labelledby="forloeb-titel">
      <div class="sec__head">
        <p class="sec__eyebrow">Forløb</p>
        <h2 id="forloeb-titel">Sådan foregår en behandling med {{ p.navn }}</h2>
      </div>
      <ol class="trin trin--4">
        <li>
          <span class="trin__nr" aria-hidden="true">01</span>
          <h3>Gratis forundersøgelse</h3>
          <p>Lægen ser på din hud og dit ansigt og fortæller, om {{ p.navn }} er det rigtige – eller om noget andet passer bedre.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">02</span>
          <h3>48 timers betænkningstid</h3>
          <p>Lovpligtig ved kosmetisk behandling. Du behandles aldrig samme dag som forundersøgelsen.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">03</span>
          <h3>Behandlingen</h3>
          <p>{{ p.laeggesTekst }}</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">04</span>
          <h3>Forløb og vurdering</h3>
          <p>{{ p.forloebTekst }}</p>
        </li>
      </ol>
    </section>

    <section class="sec" aria-labelledby="efter-titel">
      <div class="sec__head">
        <p class="sec__eyebrow">Efter behandlingen</p>
        <h2 id="efter-titel">Det skal du regne med bagefter</h2>
      </div>
      <div class="sb-efter">
        <div class="sb-efter__kort">
          <h3>Normalt de første dage</h3>
          <ul class="sb-prik">
            <li v-if="p.lag === 'hud'">Små buler ved indstiksstederne – typisk væk inden for 1–2 dage</li>
            <li v-else>Hævelse og ømhed i siden af ansigtet i 1–2 dage</li>
            <li>Rødme omkring indstikkene</li>
            <li>Blå mærker kan forekomme</li>
          </ul>
        </div>
        <div class="sb-efter__kort">
          <h3>Undgå de første 24 timer</h3>
          <ul class="sb-prik">
            <li>Makeup</li>
            <li>Sauna</li>
            <li>Hård træning</li>
          </ul>
        </div>
        <div class="sb-efter__kort">
          <h3>Behandles ikke</h3>
          <ul class="sb-prik">
            <li>Gravide og ammende</li>
            <li>Ved aktiv infektion i området</li>
            <li>Ved allergi over for indholdsstofferne</li>
            <li>Personer under 18 år</li>
          </ul>
        </div>
      </div>
      <p class="bemaerk">
        <b>Har du en vigtig begivenhed?</b> Læg behandlingen mindst et par uger før,
        så rødme og eventuelle blå mærker er væk.
      </p>
    </section>

    <section class="sec sec--panel" aria-labelledby="forskel-titel">
      <div class="sec__head">
        <p class="sec__eyebrow">Hvad er forskellen?</p>
        <h2 id="forskel-titel">{{ p.forskel.titel }}</h2>
        <p class="sec__lead">{{ p.forskel.tekst }}</p>
      </div>
      <div class="sb-tabel-wrap">
        <table class="sb-tabel">
          <caption class="sr-only">Sammenligning af Ejal40, Profhilo og Profhilo Structura</caption>
          <thead>
            <tr>
              <th scope="col"><span class="sr-only">Egenskab</span></th>
              <th v-for="x in alle" :key="'th-' + x.slug" scope="col" :class="{ 'er-denne': x.slug === p.slug }">
                <router-link v-if="x.slug !== p.slug" :to="x.path">{{ x.navn }}</router-link>
                <span v-else>{{ x.navn }}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in raekker" :key="r.k">
              <th scope="row">{{ r.label }}</th>
              <td v-for="x in alle" :key="r.k + x.slug" :class="{ 'er-denne': x.slug === p.slug }">{{ r.v(x) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="sb-videre">
        Er du i tvivl? <router-link to="/behandlinger/skinbooster/">Se overblikket over vores skinboostere</router-link>.
      </p>
    </section>

    <section id="pris" class="sec priskort" aria-labelledby="pris-titel">
      <div class="priskort__intro">
        <p class="sec__eyebrow">Pris</p>
        <h2 id="pris-titel">Pris på {{ p.navn }}</h2>
        <p>
          Prisen er pr. behandling. Hvor mange behandlinger du har brug for, aftaler du med
          lægen ved forundersøgelsen, inden du beslutter dig. Du betaler først efter behandlingen.
        </p>
        <p>Se alle priser på <router-link to="/priser/">prissiden</router-link>.</p>
      </div>
      <dl class="prisliste">
        <div>
          <dt>{{ p.navn }}<small>Pr. behandling</small></dt>
          <dd>{{ p.pris }} kr.</dd>
        </div>
        <div>
          <dt>Forundersøgelse<small>Hos læge, uforpligtende</small></dt>
          <dd>Gratis</dd>
        </div>
      </dl>
    </section>

    <section class="sec sec--panel" aria-labelledby="faq-titel">
      <div class="sec__head">
        <p class="sec__eyebrow">Spørgsmål</p>
        <h2 id="faq-titel">Ofte stillede spørgsmål om {{ p.navn }}</h2>
      </div>
      <FaqList :items="p.faqs" />
    </section>

    <RelateredeBehandlinger :slug="p.slug" />

    <section class="sec cta-kort" aria-labelledby="cta-titel">
      <div>
        <h2 id="cta-titel">Book en gratis forundersøgelse</h2>
        <p>
          Vi har klinikker i <router-link to="/klinik/esbjerg/">Esbjerg</router-link> og
          <router-link to="/klinik/vejle/">Vejle</router-link>. Forundersøgelsen er gratis og
          uforpligtende, og du bliver ikke behandlet samme dag.
        </p>
      </div>
      <div class="cta-kort__handling">
        <button class="knap knap--hvid" type="button" @click="openBooking">
          Book gratis forundersøgelse
        </button>
        <a class="knap knap--lys-kant" :href="CLINIC_SMS_HREF" aria-label="Send os en sms på 53 50 37 50">
          Send os en sms
        </a>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import FaqList from '@/components/FaqList.vue'
import BehandlingHero from '@/components/BehandlingHero.vue'
import RelateredeBehandlinger from '@/components/RelateredeBehandlinger.vue'
import imgEjal40 from '@/assets/behandlinger/ejal40.webp'
import imgProfhilo from '@/assets/behandlinger/profhilo.webp'
import imgStructura from '@/assets/behandlinger/profhilo-structura.webp'
import { BOOKING_URL, CLINIC_SMS_HREF } from '@/config/booking'
import { broedkrummerFor, broedkrummeSchema, findBehandling, KATEGORIER } from '@/data/behandlinger'
import { findSkinboosterProdukt, skinboosterProdukter } from '@/data/skinboosterProdukter'

const props = defineProps({
  produkt: { type: String, required: true } // 'ejal40' | 'profhilo' | 'profhilo-structura'
})

// Ruten er fast pr. produkt (se router), saa produktet skifter ikke undervejs.
const p = findSkinboosterProdukt(props.produkt)
const alle = skinboosterProdukter()

// Klinikkens egne fotos af produkterne. Alt-teksten beskriver, hvad man ser.
const BILLEDER = {
  ejal40: { src: imgEjal40, w: 1350, h: 1800, fokus: 'center 45%', alt: 'To røde æsker med Ejal40 skinbooster, 40 mg hyaluronsyre i 2 ml, på en hylde i klinikken' },
  profhilo: { src: imgProfhilo, w: 1349, h: 1800, fokus: 'center 60%', alt: 'Hvid æske med Profhilo, 32 mg + 32 mg hyaluronsyre i 2 ml, på et bord i klinikken' },
  'profhilo-structura': { src: imgStructura, w: 1440, h: 1800, fokus: 'center 60%', alt: 'Æsker med Profhilo Structura, 45 mg + 45 mg hyaluronsyre i 2 ml, i en vindueskarm i klinikken' }
}
const billede = BILLEDER[p.slug]

const broedkrummer = broedkrummerFor(p.slug)
const eyebrow = KATEGORIER.find(k => k.id === findBehandling(p.slug)?.kategori)?.navn || ''

const raekker = [
  { k: 'bedst', label: 'Bedst til', v: x => x.sammenlign.bedstTil },
  { k: 'lag', label: 'Arbejder i', v: x => x.sammenlign.arbejderI },
  { k: 'indhold', label: 'Indhold', v: x => x.sammenlign.indhold },
  { k: 'forloeb', label: 'Forløb', v: x => x.sammenlign.forloeb },
  { k: 'pris', label: 'Pris pr. behandling', v: x => `${x.pris} kr.` }
]

const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}${p.path}`
const stripTags = s => String(s || '').replace(/<[^>]*>/g, '').trim()

const openBooking = () => {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: p.slug } }))
  window.gtagEvent?.('booking_click', { placement: p.slug, component: 'SkinboosterProduktView' })
}

const procedureLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: p.navn,
  alternateName: p.meta.alternateName,
  description: p.lead,
  url: CANONICAL,
  image: `${SITE_URL}/og/skinbooster.webp`,
  bodyLocation: 'Face, Skin',
  procedureType: 'https://schema.org/NoninvasiveProcedure',
  howPerformed: `${p.laeggesTekst} ${p.forloebTekst}`,
  preparation: 'Gratis forundersøgelse hos læge og 48 timers lovpligtig betænkningstid inden behandling.',
  followup: 'Ingen makeup, sauna eller hård træning i 24 timer. Rødme og hævelse aftager typisk inden for 1–2 dage.',
  contraindication: 'Graviditet og amning. Aktiv infektion i området. Allergi over for indholdsstofferne.',
  areaServed: ['Esbjerg', 'Vejle', 'Danmark'],
  provider: {
    '@type': 'MedicalClinic',
    name: 'DK Skønhedsklinik',
    url: SITE_URL,
    '@id': `${SITE_URL}/#organization`
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'DKK',
    price: String(p.prisTal),
    description: `${p.navn}, pr. behandling`,
    url: BOOKING_URL,
    availability: 'https://schema.org/InStock'
  },
  potentialAction: { '@type': 'ReserveAction', target: BOOKING_URL }
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: p.faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) }
  }))
}

// Samme kilde som de synlige broedkrummer – de kan ikke komme til at afvige.
const breadcrumbLd = broedkrummeSchema(broedkrummer)

useHead({
  title: p.meta.title,
  htmlAttrs: { lang: 'da' },
  meta: [
    { name: 'description', content: p.meta.desc },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: p.meta.ogTitle },
    { property: 'og:description', content: p.meta.desc },
    { property: 'og:url', content: CANONICAL },
    { property: 'og:image', content: `${SITE_URL}/og/skinbooster.webp` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: p.meta.ogTitle },
    { name: 'twitter:description', content: p.meta.desc },
    { name: 'twitter:image', content: `${SITE_URL}/og/skinbooster.webp` }
  ],
  link: [
    { rel: 'canonical', href: CANONICAL },
    { rel: 'alternate', hreflang: 'da-DK', href: CANONICAL },
    { rel: 'preload', as: 'image', href: billede.src, fetchpriority: 'high' }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(procedureLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbLd) }
  ]
})
</script>

<style lang="scss" scoped>
$c-dark: #153655;
$c-blue: #2d58a1;
$kant: rgba(21, 54, 85, .10);
$skygge: 0 10px 30px rgba(21, 54, 85, .06);

/* Samme ramme som laebefiller-siden: hvidt baand i fuld bredde, afsnit paa
   maalet, --sektion-luft over og under hvert afsnit (App.vue). */
.sb-view {
  background: #fff;
  box-shadow: 0 0 0 100vmax #fff;
  clip-path: inset(0 -100vmax);
  color: $c-dark;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--maal);
  padding: 0 !important;
}

.sb-view > * { margin-bottom: var(--sektion-luft) !important; margin-top: var(--sektion-luft) !important; }
.sb-view > :deep(.bh-hero) { margin-bottom: 0 !important; margin-top: 0 !important; }

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

.sb-view p { line-height: 1.7; }
.sb-view .sec > p,
.sb-split p,
.sb-lag p { max-width: 64ch; }

.sb-view h3 { color: $c-dark; }

/* Hvad er: tekst + "kort fortalt" (navy kort som paa laebefiller) */
.sb-split {
  align-items: start;
  display: grid;
  gap: 40px 56px;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, .75fr);
}

.sb-kort {
  background: $c-dark !important;
  border: 0 !important;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .14) !important;
  color: #fff;
  padding: 32px 32px 18px !important;
}

.sb-kort h3 {
  color: rgba(255, 255, 255, .7);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .13em;
  margin: 0 0 6px;
  text-transform: uppercase;
}

.sb-kort .tjek { gap: 0; }

.sb-kort .tjek li {
  border-bottom: 1px solid rgba(255, 255, 255, .14);
  color: #fff;
  font-weight: 600;
  padding: 14px 0 14px 34px;
}

.sb-kort .tjek li:last-child { border-bottom: 0; }
.sb-kort .tjek li::before { top: 14px; }

/* Hudlag */
.sb-lag {
  align-items: center;
  display: grid;
  gap: 40px 56px;
  grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr);
}

.sb-lag__figur { margin: 0; }

.sb-lag__figur svg {
  display: block;
  height: auto;
  max-width: 420px;
  width: 100%;
}

.sb-lag__figur figcaption {
  color: rgba(21, 54, 85, .7);
  font-size: .88rem;
  line-height: 1.5;
  margin-top: 12px;
}

.lag { fill: #fff; stroke: rgba(21, 54, 85, .16); stroke-width: 1; }
.lag--over { fill: rgba(45, 88, 161, .10); }
.lag--aktiv { fill: $c-dark; stroke: $c-dark; }

.lag__navn {
  fill: rgba(21, 54, 85, .75);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.lag__navn--aktiv { fill: #fff; }

.depot { fill: rgba(255, 255, 255, .22); }
.depot--kerne { fill: rgba(255, 255, 255, .55); }
.naal { stroke: $c-blue; stroke-linecap: round; stroke-width: 3; }

.sb-lagliste { margin: 22px 0 0; }

.sb-lagliste > div {
  border-top: 1px solid rgba(21, 54, 85, .12);
  display: grid;
  gap: 4px 20px;
  grid-template-columns: 110px minmax(0, 1fr);
  padding: 12px 0;
}

.sb-lagliste dt {
  color: rgba(21, 54, 85, .7);
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .1em;
  padding-top: 3px;
  text-transform: uppercase;
}

.sb-lagliste dd { line-height: 1.6; margin: 0; }
.sb-lagliste .er-aktiv dt { color: $c-blue; }

/* Hvem passer det til */
.sb-hvem {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.sb-hvem__kort,
.sb-efter__kort {
  background: #fff;
  border: 1px solid $kant;
  border-radius: 18px;
  box-shadow: $skygge;
  box-sizing: border-box;
  padding: 28px 28px 30px;
}

.sb-hvem__kort h3,
.sb-efter__kort h3 {
  font-size: 1.08rem;
  margin: 0 0 16px;
}

.sb-hvem__kort--nej { background: rgba(45, 88, 161, .045); box-shadow: none; }

.sb-nej,
.sb-prik {
  display: grid;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sb-nej li,
.sb-prik li {
  color: rgba(21, 54, 85, .88);
  line-height: 1.6;
  padding-left: 22px;
  position: relative;
}

.sb-nej li::before {
  background: rgba(21, 54, 85, .45);
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  top: .78em;
  width: 12px;
}

.sb-prik li::before {
  background: $c-blue;
  border-radius: 50%;
  content: '';
  height: 6px;
  left: 2px;
  position: absolute;
  top: .62em;
  width: 6px;
}

.sb-nej :deep(a) {
  color: $c-blue;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

/* Efter behandlingen */
.sb-efter {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.bemaerk {
  background: rgba(45, 88, 161, .06);
  border-left: 3px solid $c-blue;
  border-radius: 0 10px 10px 0;
  color: $c-dark;
  line-height: 1.6;
  margin: 32px 0 0;
  max-width: none !important;
  padding: 14px 18px;
}

/* Sammenligning */
.sb-tabel-wrap {
  background: #fff;
  border: 1px solid $kant;
  border-radius: 18px;
  overflow-x: auto;
}

.sb-tabel {
  border-collapse: collapse;
  min-width: 620px;
  width: 100%;
}

.sb-tabel th,
.sb-tabel td {
  border-bottom: 1px solid rgba(21, 54, 85, .10);
  line-height: 1.5;
  padding: 14px 18px;
  text-align: left;
  vertical-align: top;
}

.sb-tabel tbody tr:last-child th,
.sb-tabel tbody tr:last-child td { border-bottom: 0; font-weight: 700; }

.sb-tabel thead th { color: $c-dark; font-size: 1rem; }

.sb-tabel tbody th {
  color: rgba(21, 54, 85, .7);
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  white-space: nowrap;
}

.sb-tabel .er-denne { background: rgba(45, 88, 161, .07); }

.sb-tabel a,
.sb-videre a {
  color: $c-blue;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.sb-videre { margin: 20px 0 0; }

@media (max-width: 900px) {
  .sb-split,
  .sb-lag { grid-template-columns: minmax(0, 1fr); }
  .sb-efter { grid-template-columns: minmax(0, 1fr); }
  .sb-lag__figur svg { margin: 0 auto; max-width: 340px; }
}

@media (max-width: 700px) {
  .sb-hvem { grid-template-columns: minmax(0, 1fr); }
  .sb-tabel { min-width: 540px; }
  .sb-tabel th,
  .sb-tabel td { padding: 12px 12px; }
  .sb-tabel tbody th { white-space: normal; width: 84px; }
  .sb-hvem__kort,
  .sb-efter__kort { padding: 24px 22px; }
  .sb-lagliste > div { grid-template-columns: minmax(0, 1fr); }
}

/* Under 1000 px: samme opskrift som klinikssiderne - 90 % bredde */
@media only screen and (max-width: 1000px) {
  .sb-view > * {
    box-sizing: border-box;
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: none !important;
    width: 90% !important;
  }
}

/* Heroen staar inde i containeren, som er 90 % under 1000 px - den skal
   ikke krympe igen */
@media (max-width: 1000px) {
  .sb-view :deep(.bh-hero__indre) { width: 100%; }
}
</style>
