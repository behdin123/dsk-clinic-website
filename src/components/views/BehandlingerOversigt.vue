<template>
  <section class="container oversigt-view">
    <!-- Samme hero som behandlingssiderne -->
    <BehandlingHero h1-id="oversigt-titel" titel="Kosmetiske behandlinger i Esbjerg & Vejle – udført af læge"
      eyebrow="Behandlinger" :lead="lead" :broedkrummer="broedkrummer" pris-anker="alle"
      pris-knap-tekst="Se alle behandlinger"
      :billede="{ src: imgHero, w: 1200, h: 1200, alt: 'Lægen behandler en patient i klinikken' }"
      :fakta="heroFakta" fakta-label="Klinikken kort fortalt" booking-kilde="oversigt" />

    <!-- Alle behandlinger, grupperet efter kategori -->
    <section id="alle" class="sec" aria-labelledby="alle-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Alle behandlinger</p>
        <h2 id="alle-title">Find den behandling, der passer til dig</h2>
        <p class="sec__lead">
          Vi har samlet behandlingerne i {{ kategorier.length }} grupper. Hver behandling har sin
          egen side med forløb, bivirkninger, pris og svar på de mest stillede spørgsmål.
        </p>
      </div>

      <nav class="kat-nav" aria-label="Spring til en gruppe">
        <a v-for="k in kategorier" :key="k.id" :href="`#${k.anker}`" @click.prevent="tilSektion(k.anker)">
          {{ k.navn }} <span>{{ k.behandlinger.length }}</span>
        </a>
      </nav>

      <div class="kategorier">
        <section v-for="k in kategorier" :id="k.anker" :key="k.id" class="kategori"
          :aria-labelledby="`${k.anker}-titel`">
          <header class="kategori__head">
            <h2 :id="`${k.anker}-titel`">{{ k.navn }}</h2>
            <p>{{ k.kort }}</p>
          </header>

          <ul class="kort-gitter">
            <li v-for="b in k.behandlinger" :key="b.slug">
              <router-link :to="b.path" class="beh-kort">
                <span class="beh-kort__billede">
                  <img v-if="b.billede" :src="b.billede" width="1200" height="800" loading="lazy" decoding="async"
                    :alt="`${b.navn} hos DK Skønhedsklinik`">
                </span>
                <span class="beh-kort__tekst">
                  <span v-if="b.forael" class="beh-kort__tag">{{ foraelNavn(b) }}</span>
                  <h3>{{ b.kortTitel || b.navn }}</h3>
                  <span class="beh-kort__beskrivelse">{{ b.kort }}</span>
                  <span class="beh-kort__fod">
                    <span v-if="b.prisTekst" class="beh-kort__pris">{{ storForbogstav(b.prisTekst) }}</span>
                    <span class="beh-kort__mere">Læs mere <span class="pil" aria-hidden="true"></span></span>
                  </span>
                </span>
              </router-link>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <!-- Fra problem til behandling -->
    <section class="sec sec--panel" aria-labelledby="guide-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Vejledning</p>
        <h2 id="guide-title">Hvilken behandling passer til dig?</h2>
        <p class="sec__lead">
          Start med det, du gerne vil ændre. Du behøver ikke vide det på forhånd – lægen vurderer
          det sammen med dig ved den gratis forundersøgelse.
        </p>
      </div>
      <ul class="guide">
        <li v-for="g in guide" :key="g.slug">
          <span class="guide__problem">{{ g.problem }}</span>
          <router-link :to="g.path" class="guide__svar">{{ g.navn }} <span class="pil" aria-hidden="true"></span></router-link>
        </li>
      </ul>
    </section>

    <!-- Forloebet er det samme for alle behandlinger -->
    <section class="sec" aria-labelledby="forloeb-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Forløb</p>
        <h2 id="forloeb-title">Sådan foregår det – uanset behandling</h2>
      </div>
      <ol class="trin">
        <li>
          <span class="trin__nr" aria-hidden="true">01</span>
          <h3>Gratis forundersøgelse</h3>
          <p>Lægen ser på dine ønsker og fortæller, hvad der realistisk kan opnås – og hvad der ikke kan. Du får prisen, før du beslutter dig.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">02</span>
          <h3>48 timers betænkningstid</h3>
          <p>Lovpligtig ved kosmetisk behandling. Du bliver aldrig behandlet samme dag som forundersøgelsen.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">03</span>
          <h3>Behandling og kontrol</h3>
          <p>Lægen udfører behandlingen, og du betaler først bagefter. Vi ser på resultatet ved en kontrol efter behov.</p>
        </li>
      </ol>
    </section>

    <section class="sec sec--panel" aria-labelledby="faq-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Spørgsmål</p>
        <h2 id="faq-title">Ofte stillede spørgsmål om vores behandlinger</h2>
      </div>
      <FaqList :items="faqs" />
    </section>

    <section class="sec cta-kort" aria-labelledby="cta-title">
      <div>
        <h2 id="cta-title">Book en gratis forundersøgelse</h2>
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
        <p>Hellere ringe? <a :href="CLINIC_PHONE_HREF">{{ CLINIC_PHONE }}</a></p>
      </div>
    </section>
  </section>
</template>

<script setup>
/**
 * Oversigtssiden /behandlinger/. Alt indhold om behandlingerne (navn,
 * kort tekst, pris, billede, kategori) laeses fra det centrale register
 * src/data/behandlinger.js - en ny live-behandling dukker selv op her.
 */
import { useHead } from '@unhead/vue'
import BehandlingHero from '@/components/BehandlingHero.vue'
import FaqList from '@/components/FaqList.vue'
import imgHero from '@/assets/behandlinger/botox-hvem.webp'
import { CLINIC_PHONE, CLINIC_PHONE_HREF } from '@/config/booking'
import {
  SITE_URL, aktiveKategorier, behandlingerIKategori, liveBehandlinger, findBehandling,
  broedkrummerFor, broedkrummeSchema
} from '@/data/behandlinger'

const CANONICAL = `${SITE_URL}/behandlinger/`
const broedkrummer = broedkrummerFor(null)

const kategorier = aktiveKategorier().map(k => ({ ...k, behandlinger: behandlingerIKategori(k.id) }))
const live = liveBehandlinger()

const lead = 'Rynkebehandling, filler og behandlinger for bedre hudkvalitet – alle udført af læge Arash Bagheri. Her får du overblikket: hvad behandlingerne kan, hvad de koster, og hvor du kan læse mere.'

const laveste = Math.min(...live.map(b => b.prisFra).filter(Boolean))
const heroFakta = [
  { v: `${live.length} behandlinger`, k: 'udført af læge' },
  { v: '20+ år', k: 'erfaring med kosmetiske behandlinger' },
  { v: '2 klinikker', k: 'i Esbjerg og Vejle' },
  { v: `Fra ${laveste.toLocaleString('da-DK')} kr.`, k: 'for botox i ét område' }
]

const foraelNavn = b => findBehandling(b.forael)?.navn || ''
const storForbogstav = t => t.charAt(0).toUpperCase() + t.slice(1)

/* Fra problem til behandling - formuleringerne bygger paa det, der
   allerede staar paa behandlingssiderne. Kun live-sider vises. */
const guide = [
  { slug: 'botox', problem: 'Rynker i panden, mellem brynene eller ved øjnene' },
  { slug: 'filler', problem: 'Tabt volumen i kinderne, dybe smilelinjer eller marionetlinjer' },
  { slug: 'laebefiller', problem: 'Tynde læber, en utydelig læbekant eller asymmetri' },
  { slug: 'skinbooster', problem: 'Tør, træt hud og fine linjer' },
  { slug: 'microneedling', problem: 'Akne-ar, store porer eller ujævn hudtekstur' },
  { slug: 'mesoterapi', problem: 'Mat hud, der mangler glød' }
].map(g => ({ ...g, ...findBehandling(g.slug) }))
  .filter(g => g.status === 'live')

const faqs = [
  {
    q: 'Hvilken behandling skal jeg vælge?',
    a: 'Det behøver du ikke vide på forhånd. Ved den gratis forundersøgelse ser lægen på dine ønsker og anbefaler den behandling, der passer – eller fortæller ærligt, hvis ingen af dem er den rigtige løsning.'
  },
  {
    q: 'Hvem udfører behandlingerne?',
    a: 'Alle behandlinger udføres af klinikkens læge, Arash Bagheri. Klinikken er registreret hos Styrelsen for Patientsikkerhed.'
  },
  {
    q: 'Hvad koster en forundersøgelse?',
    a: 'Forundersøgelsen er gratis og uforpligtende. Du betaler først efter behandlingen. Se alle priser på prissiden.'
  },
  {
    q: 'Kan jeg blive behandlet samme dag?',
    a: 'Nej. Der er 48 timers lovpligtig betænkningstid mellem forundersøgelse og behandling ved kosmetiske indgreb.'
  },
  {
    q: 'Er der en aldersgrænse?',
    a: 'Ja. Kosmetiske behandlinger udføres ikke på personer under 18 år.'
  },
  {
    q: 'Hvor ligger klinikkerne?',
    a: 'I Esbjerg på Havnegade 6 (åbent mandag–fredag 17:00–20:00) og i Vejle på Søndergade 50 (åbent søndag 11:00–18:00). Andre tider kan aftales.'
  }
]

const openBooking = () => {
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'oversigt_cta' } }))
}

/* Blød rulning til en gruppe, under den faste navigation (100 px) */
const tilSektion = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const roligt = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const adfaerd = roligt ? 'auto' : 'smooth'
  const maal = () => window.scrollY + el.getBoundingClientRect().top - 116
  window.scrollTo({ top: maal(), behavior: adfaerd })
  history.replaceState(null, '', `#${id}`)
  // Navigationen skifter til fast undervejs, og indholdet rykker op -
  // ret til, naar rulningen er faerdig
  const ret = () => { if (Math.abs(maal() - window.scrollY) > 4) window.scrollTo({ top: maal(), behavior: adfaerd }) }
  if ('onscrollend' in window) requestAnimationFrame(() => window.addEventListener('scrollend', ret, { once: true }))
  else setTimeout(ret, 1200)
}

/* ===== Strukturerede data ===== */
const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Kosmetiske behandlinger i Esbjerg & Vejle',
  url: CANONICAL,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: live.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}${b.path}`,
      name: b.kortTitel || b.navn
    }))
  }
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
}

const breadcrumbLd = broedkrummeSchema(broedkrummer)

const TITEL = 'Kosmetiske behandlinger Esbjerg & Vejle | DK Skønhedsklinik'
const BESKRIVELSE = 'Alle kosmetiske behandlinger i Esbjerg og Vejle – botox, filler, skinbooster og mere. Udført af læge, fra 550 kr. Gratis forundersøgelse.'

useHead({
  title: TITEL,
  htmlAttrs: { lang: 'da' },
  meta: [
    { name: 'description', content: BESKRIVELSE },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'Kosmetiske behandlinger i Esbjerg & Vejle – udført af læge' },
    { property: 'og:description', content: BESKRIVELSE },
    { property: 'og:url', content: CANONICAL },
    { property: 'og:image', content: `${SITE_URL}/og/home.webp` },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: CANONICAL },
    { rel: 'alternate', hreflang: 'da-DK', href: CANONICAL },
    { rel: 'preload', as: 'image', href: imgHero, fetchpriority: 'high' }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(itemListLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbLd) }
  ]
})
</script>

<style lang="scss" scoped>
$c-dark: #153655;
$c-blue: #2d58a1;

/* ===== Samme ramme som laebefiller-siden =====
   Hvid baggrund i fuld bredde og --sektion-luft (App.vue) over og under
   hvert afsnit: 100 px mellem afsnit, 80 px paa mobil. */
.oversigt-view {
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

.oversigt-view > * { margin-bottom: var(--sektion-luft) !important; margin-top: var(--sektion-luft) !important; }
.oversigt-view > :deep(.bh-hero) { margin-bottom: 0 !important; margin-top: 0 !important; }

@media (max-width: 1000px) {
  .oversigt-view > * {
    box-sizing: border-box;
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: none !important;
    width: 90% !important;
  }
  .oversigt-view :deep(.bh-hero__indre) { width: 100%; }
}

/* ===== Hurtignavigation til grupperne ===== */
.kat-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 40px;
}

.kat-nav a {
  align-items: center;
  border: 1px solid rgba(21, 54, 85, .14);
  border-radius: 999px;
  color: $c-dark;
  display: inline-flex;
  font-size: .95rem;
  font-weight: 600;
  gap: 10px;
  min-height: 44px;
  padding: 6px 8px 6px 18px;
  text-decoration: none;
  transition: border-color .15s ease, background .15s ease;
}

.kat-nav a:hover,
.kat-nav a:focus-visible { background: rgba(45, 88, 161, .06); border-color: $c-blue; }

.kat-nav a span {
  align-items: center;
  background: rgba(45, 88, 161, .10);
  border-radius: 999px;
  color: $c-blue;
  display: inline-flex;
  font-size: .8rem;
  height: 28px;
  justify-content: center;
  min-width: 28px;
}

/* ===== Grupper med kort ===== */
.kategorier { display: grid; gap: 56px; }

.kategori { scroll-margin-top: 116px; }

.kategori__head {
  align-items: baseline;
  border-bottom: 1px solid rgba(21, 54, 85, .12);
  display: grid;
  gap: 6px 32px;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr);
  margin-bottom: 22px;
  padding-bottom: 14px;
}

.kategori__head h2 {
  color: $c-dark !important;
  font-size: clamp(1.35rem, 1.1rem + 1vw, 1.75rem) !important;
  margin: 0 !important;
  text-align: left;
}

.kategori__head p {
  color: rgba(21, 54, 85, .78);
  margin: 0;
  max-width: 60ch;
}

.kort-gitter {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}

.kort-gitter > li { display: flex; }

.beh-kort {
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .06);
  color: $c-dark;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  transition: border-color .18s ease, box-shadow .18s ease, transform .18s ease;
  width: 100%;
}

.beh-kort:hover,
.beh-kort:focus-visible {
  border-color: rgba(45, 88, 161, .4);
  box-shadow: 0 14px 34px rgba(21, 54, 85, .10);
  transform: translateY(-2px);
}

.beh-kort__billede {
  aspect-ratio: 3 / 2;
  background: rgba(45, 88, 161, .06);
  display: block;
  overflow: hidden;
}

.beh-kort__billede img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transition: transform .35s ease;
  width: 100%;
}

.beh-kort:hover .beh-kort__billede img { transform: scale(1.03); }

.beh-kort__tekst {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 22px 22px;
}

.beh-kort__tag {
  align-self: flex-start;
  background: rgba(45, 88, 161, .08);
  border-radius: 999px;
  color: $c-blue;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .06em;
  margin-bottom: 10px;
  padding: 4px 10px;
  text-transform: uppercase;
}

.beh-kort h3 {
  color: $c-dark !important;
  font-size: 1.18rem;
  line-height: 1.3;
  margin: 0 0 8px !important;
  text-align: left;
}

.beh-kort__beskrivelse {
  color: rgba(21, 54, 85, .82);
  font-size: .97rem;
  line-height: 1.6;
  margin-bottom: 18px;
}

.beh-kort__fod {
  align-items: center;
  border-top: 1px solid rgba(21, 54, 85, .10);
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 14px;
}

.beh-kort__pris { font-weight: 700; }

.beh-kort__mere {
  align-items: center;
  color: $c-blue;
  display: inline-flex;
  font-weight: 600;
  gap: 6px;
  white-space: nowrap;
}

.beh-kort__mere .pil,
.guide__svar .pil { height: .8em; transition: transform .18s ease; width: .8em; }

.beh-kort:hover .beh-kort__mere .pil,
.guide__svar:hover .pil { transform: translateX(3px); }

/* ===== Vejledning: problem -> behandling ===== */
.guide {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.guide li {
  align-items: center;
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 14px;
  display: grid;
  gap: 8px 24px;
  grid-template-columns: minmax(0, 1fr) auto;
  padding: 14px 18px;
}

.guide__problem { color: $c-dark; line-height: 1.5; }

.guide__svar {
  align-items: center;
  color: $c-blue;
  display: inline-flex;
  font-weight: 700;
  gap: 8px;
  text-decoration: none;
  white-space: nowrap;
}

.guide__svar:hover { text-decoration: underline; text-underline-offset: 3px; }

@media (max-width: 700px) {
  .kategori__head { grid-template-columns: minmax(0, 1fr); }
  .kategorier { gap: 44px; }
  .kat-nav { margin-bottom: 32px; }
}

/* Mobil: kortene som kompakte raekker (billede til venstre), saa hele
   oversigten kan ses med faa swipes i stedet for et langt billedgalleri */
@media (max-width: 600px) {
  .kort-gitter { gap: 12px; }
  .beh-kort { border-radius: 14px; flex-direction: row; }
  .beh-kort__billede { aspect-ratio: auto; flex: 0 0 96px; }
  .beh-kort__tekst { padding: 14px 16px 14px; }
  .beh-kort h3 { font-size: 1.05rem; margin-bottom: 4px !important; }
  .beh-kort__beskrivelse { font-size: .9rem; line-height: 1.5; margin-bottom: 10px; }
  .beh-kort__fod { padding-top: 10px; }
  .beh-kort__tag { margin-bottom: 6px; }
}

@media (max-width: 500px) {
  .guide li { grid-template-columns: minmax(0, 1fr); }
}

@media (prefers-reduced-motion: reduce) {
  .beh-kort, .beh-kort__billede img, .pil { transition: none; }
}
</style>
