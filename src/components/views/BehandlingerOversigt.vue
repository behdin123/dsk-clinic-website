<template>
  <section class="container oversigt-view">
    <!-- Samme hero som behandlingssiderne -->
    <BehandlingHero h1-id="oversigt-titel" titel="Kosmetiske behandlinger i Esbjerg & Vejle – udført af læge"
      eyebrow="Behandlinger" :lead="lead" :broedkrummer="broedkrummer" pris-anker="alle"
      pris-knap-tekst="Se alle behandlinger"
      :billede="{ src: imgHero, w: 1200, h: 1200, alt: 'Lægen behandler en patient i klinikken' }"
      booking-kilde="oversigt" />

    <!-- Alle behandlinger, grupperet efter kategori. Én raekke pr.
         behandling: billede, navn, én saetning, pris - hele raekken er linket. -->
    <section id="alle" class="sec" aria-labelledby="alle-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Alle behandlinger</p>
        <h2 id="alle-title">Find den behandling, der passer til dig</h2>
      </div>

      <div class="kategorier">
        <section v-for="k in kategorier" :id="k.anker" :key="k.id" class="kategori"
          :aria-labelledby="`${k.anker}-titel`">
          <header class="kategori__head">
            <h2 :id="`${k.anker}-titel`">{{ k.navn }}</h2>
            <p>{{ k.kort }}</p>
          </header>

          <ul class="beh-liste">
            <li v-for="b in k.behandlinger" :key="b.slug">
              <router-link :to="b.path" class="beh-raekke">
                <span class="beh-raekke__billede">
                  <img v-if="b.billede" :src="b.billede" width="1200" height="800" loading="lazy" decoding="async"
                    :alt="`${b.navn} hos DK Skønhedsklinik`">
                </span>
                <span class="beh-raekke__tekst">
                  <span v-if="b.forael" class="beh-raekke__tag">{{ foraelNavn(b) }}</span>
                  <h3>{{ b.kortTitel || b.navn }}</h3>
                  <span class="beh-raekke__beskrivelse">{{ b.kort }}</span>
                </span>
                <span class="beh-raekke__side">
                  <span v-if="b.prisTekst" class="beh-raekke__pris">{{ storForbogstav(b.prisTekst) }}</span>
                  <span class="beh-raekke__pil" aria-hidden="true"><span class="pil"></span></span>
                </span>
              </router-link>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <!-- Fra problem til behandling. Moerkt baand med fliser, saa det ikke
         ligner FAQ'en lige nedenunder: her vaelger man, der laeser man. -->
    <section class="sec guide-baand" aria-labelledby="guide-title">
      <div class="guide-baand__head">
        <p class="sec__eyebrow sec__eyebrow--lys">Vejledning</p>
        <h2 id="guide-title">Hvilken behandling passer til dig?</h2>
        <p>Start med det, du gerne vil ændre. Lægen vurderer det sammen med dig ved den gratis forundersøgelse.</p>
      </div>
      <ul class="guide">
        <li v-for="g in guide" :key="g.slug">
          <router-link :to="g.path" class="guide__flise">
            <span class="guide__problem">{{ g.problem }}</span>
            <span class="guide__svar">{{ g.navn }} <span class="pil" aria-hidden="true"></span></span>
          </router-link>
        </li>
      </ul>
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
        <a class="knap knap--lys-kant" :href="CLINIC_SMS_HREF" aria-label="Send os en sms på 53 50 37 50">
          Send os en sms
        </a>
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
import { CLINIC_SMS_HREF } from '@/config/booking'
import {
  SITE_URL, aktiveKategorier, behandlingerIKategori, liveBehandlinger, findBehandling,
  broedkrummerFor, broedkrummeSchema
} from '@/data/behandlinger'

const CANONICAL = `${SITE_URL}/behandlinger/`
const broedkrummer = broedkrummerFor(null)

const kategorier = aktiveKategorier().map(k => ({ ...k, behandlinger: behandlingerIKategori(k.id) }))
const live = liveBehandlinger()

const lead = 'Rynkebehandling, filler og behandlinger for bedre hudkvalitet – alle udført af læge Arash Bagheri i vores klinikker i Esbjerg og Vejle.'


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

/* ===== Grupper ===== */
#alle > .sec__head { margin-bottom: 40px; }

@media (max-width: 600px) {
  #alle > .sec__head { margin-bottom: 32px; }
}

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

/* Én raekke pr. behandling: billede | navn og saetning | pris og pil.
   Rolig og let at skanne - som en menu, ikke et galleri. */
.beh-liste {
  display: grid;
  gap: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.beh-raekke {
  align-items: center;
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 18px;
  box-shadow: 0 6px 22px rgba(21, 54, 85, .05);
  color: $c-dark;
  display: grid;
  gap: 28px;
  grid-template-columns: 200px minmax(0, 1fr) auto;
  padding: 12px 28px 12px 12px;
  text-decoration: none;
  transition: border-color .18s ease, box-shadow .18s ease, transform .18s ease;
}

.beh-raekke:hover,
.beh-raekke:focus-visible {
  border-color: rgba(45, 88, 161, .4);
  box-shadow: 0 14px 34px rgba(21, 54, 85, .10);
  transform: translateY(-2px);
}

.beh-raekke__billede {
  aspect-ratio: 3 / 2;
  background: rgba(45, 88, 161, .06);
  border-radius: 12px;
  display: block;
  overflow: hidden;
}

.beh-raekke__billede img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transition: transform .35s ease;
  width: 100%;
}

.beh-raekke:hover .beh-raekke__billede img { transform: scale(1.04); }

.beh-raekke__tekst { display: flex; flex-direction: column; min-width: 0; }

.beh-raekke__tag {
  align-self: flex-start;
  background: rgba(45, 88, 161, .08);
  border-radius: 999px;
  color: $c-blue;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .06em;
  margin-bottom: 8px;
  padding: 3px 10px;
  text-transform: uppercase;
}

.beh-raekke h3 {
  color: $c-dark !important;
  font-size: 1.25rem;
  line-height: 1.3;
  margin: 0 0 6px !important;
  text-align: left;
}

.beh-raekke__beskrivelse {
  color: rgba(21, 54, 85, .8);
  font-size: .98rem;
  line-height: 1.55;
  max-width: 58ch;
}

.beh-raekke__side {
  align-items: center;
  display: flex;
  gap: 20px;
}

.beh-raekke__pris {
  color: $c-dark;
  font-weight: 700;
  white-space: nowrap;
}

.beh-raekke__pil {
  align-items: center;
  border: 1.5px solid rgba(45, 88, 161, .3);
  border-radius: 50%;
  color: $c-blue;
  display: inline-flex;
  flex: 0 0 44px;
  height: 44px;
  justify-content: center;
  transition: background .18s ease, border-color .18s ease, color .18s ease;
}

.beh-raekke__pil .pil { height: 14px; width: 14px; }

.beh-raekke:hover .beh-raekke__pil { background: $c-blue; border-color: $c-blue; color: #fff; }


/* ===== Vejledning: navy baand med fliser =====
   Bevidst anderledes end FAQ'en: moerk flade, fliser i et gitter, og hele
   flisen er et link videre. FAQ'en er lys og laeses som en liste. */
.guide-baand {
  background: $c-dark;
  border-radius: 18px;
  box-sizing: border-box;
  color: #fff;
  padding: clamp(30px, 4vw, 52px) clamp(22px, 4vw, 56px);
}

.guide-baand__head { margin-bottom: 28px; max-width: 62ch; }

.guide-baand__head h2 {
  color: #fff !important;
  margin: 0 0 10px !important;
  text-align: left;
}

.guide-baand__head p:not(.sec__eyebrow) {
  color: rgba(255, 255, 255, .8);
  line-height: 1.65;
  margin: 0;
}

.guide-baand .sec__eyebrow { color: rgba(255, 255, 255, .78) !important; }
.guide-baand .sec__eyebrow::before { background: rgba(255, 255, 255, .6) !important; }

.guide {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}

.guide > li { display: flex; }

.guide__flise {
  background: rgba(255, 255, 255, .06);
  border: 1px solid rgba(255, 255, 255, .14);
  border-radius: 14px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: space-between;
  padding: 20px 20px 18px;
  text-decoration: none;
  transition: background .18s ease, border-color .18s ease, transform .18s ease;
  width: 100%;
}

.guide__flise:hover,
.guide__flise:focus-visible {
  background: rgba(255, 255, 255, .11);
  border-color: rgba(255, 255, 255, .32);
  transform: translateY(-2px);
}

.guide__problem { font-size: 1.02rem; line-height: 1.5; }

.guide__svar {
  align-items: center;
  color: #9fc0f5;
  display: inline-flex;
  font-weight: 700;
  gap: 8px;
}

.guide__svar .pil { height: .8em; transition: transform .18s ease; width: .8em; }
.guide__flise:hover .guide__svar .pil { transform: translateX(3px); }

@media (max-width: 900px) {
  .beh-raekke { gap: 20px; grid-template-columns: 150px minmax(0, 1fr) auto; padding-right: 20px; }
  .beh-raekke__side { align-items: flex-end; flex-direction: column; gap: 10px; }
}

/* Mobil: kompakte fliser, saa vejledningen ikke bliver en lang stribe */
@media (max-width: 600px) {
  .guide { gap: 10px; }
  .guide__flise { gap: 10px; padding: 16px 18px; }
  .guide__problem { font-size: .98rem; }
}

@media (max-width: 700px) {
  .kategori__head { grid-template-columns: minmax(0, 1fr); }
  .kategorier { gap: 44px; }
}

/* Mobil: billede til venstre, tekst og pris til hoejre - pilen udgaar */
@media (max-width: 600px) {
  .beh-liste { gap: 12px; }
  .beh-raekke {
    align-items: stretch;
    border-radius: 14px;
    gap: 0;
    grid-template-columns: 96px minmax(0, 1fr);
    padding: 0;
  }
  .beh-raekke__billede { aspect-ratio: auto; border-radius: 0; grid-row: 1 / span 2; }
  .beh-raekke__tekst { padding: 14px 16px 6px; }
  .beh-raekke h3 { font-size: 1.05rem; margin-bottom: 4px !important; }
  .beh-raekke__beskrivelse { font-size: .9rem; line-height: 1.5; }
  .beh-raekke__side { align-items: flex-start; grid-column: 2; padding: 0 16px 14px; }
  .beh-raekke__pil { display: none; }
}


@media (prefers-reduced-motion: reduce) {
  .beh-raekke, .beh-raekke__billede img, .beh-raekke__pil, .guide__flise, .pil { transition: none; }
}
</style>
