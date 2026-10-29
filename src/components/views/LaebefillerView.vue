<template>
  <section class="container laeber-view" aria-labelledby="laeber-title">
    <div class="laeber-top">
    <AppBreadcrumbs :sti="broedkrummer" />

    <header class="side-hero">
      <div>
        <p class="sec__eyebrow">Filler · Læber</p>
        <h1 id="laeber-title">Læbefiller i Esbjerg &amp; Vejle – lagt af læge</h1>
        <p class="side-hero__lead">
          Læbefiller – eller lip filler, som mange kalder det – giver fylde, form og en
          tydeligere læbekant med hyaluronsyre. Hos DK Skønhedsklinik lægges den af en læge, og
          vi arbejder i små mængder ad gangen, så resultatet bliver naturligt og passer til
          resten af dit ansigt.
        </p>
        <ul class="side-hero__chips">
          <li>Gratis forundersøgelse</li>
          <li>Udføres af læge</li>
          <li>48 timers betænkningstid</li>
        </ul>
        <div class="side-hero__handling">
          <button class="knap knap--primaer" type="button" @click="openBooking">
            Book gratis forundersøgelse
          </button>
          <a class="knap knap--sekundaer" href="#pris" @click.prevent="tilSektion('pris')">Se pris</a>
        </div>
      </div>

      <figure class="side-hero__media">
        <img :src="imgHero" width="1800" height="2400" fetchpriority="high" decoding="async"
          alt="Læge Arash Bagheri lægger læbefiller hos en patient i klinikken">
      </figure>
    </header>
    </div>

    <dl class="fakta" aria-label="Læbefiller i tal">
      <div><dt>1.350 kr.</dt><dd>pr. ml hyaluronsyre</dd></div>
      <div><dt>0,5–1 ml</dt><dd>starter de fleste med</dd></div>
      <div><dt>20–30 min.</dt><dd>tager selve injektionerne</dd></div>
      <div><dt>6–12 mdr.</dt><dd>holder resultatet typisk</dd></div>
    </dl>

    <section class="sec" aria-labelledby="hvad-title">
      <div class="laeber-split">
        <div>
          <div class="sec__head">
            <p class="sec__eyebrow">Behandlingen</p>
            <h2 id="hvad-title">Hvad er læbefiller?</h2>
          </div>
          <p>
            Læbefiller, lip filler og læbeforstørrelse dækker over det samme: en ikke-permanent
            behandling med hyaluronsyre – et stof, kroppen selv danner. Det lægges med en tynd
            kanyle i og omkring læben, hvor det binder vand og giver fylde. Resultatet er synligt
            med det samme og nedbrydes langsomt af kroppen igen over 6–12 måneder.
          </p>
          <p>
            Fordi materialet er ikke-permanent, er en læbefiller aldrig en endelig beslutning.
            Hyaluronsyre kan desuden opløses igen med enzymet hyaluronidase, hvis resultatet
            ikke blev som ønsket. Tal med lægen om det ved forundersøgelsen.
          </p>
        </div>

        <aside class="sec--kort laeber-kort" aria-label="Kort fortalt">
          <h3>Kort fortalt</h3>
          <ul class="tjek">
            <li>Hyaluronsyre – et stof, kroppen selv danner</li>
            <li>Resultatet ses med det samme</li>
            <li>Nedbrydes af kroppen over 6–12 måneder</li>
            <li>Kan opløses igen med hyaluronidase</li>
            <li>Lægges af klinikkens læge</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="sec" aria-labelledby="omraader-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Muligheder</p>
        <h2 id="omraader-title">Hvad kan vi gøre med dine læber?</h2>
        <p class="sec__lead">Fem ting, læbefiller kan hjælpe med – alene eller i kombination.</p>
      </div>

      <div class="omraader">
        <article class="omraade">
          <h3><span class="omraade__nr" aria-hidden="true">1</span>Mere volumen</h3>
          <p>
            Den klassiske læbeforstørrelse. Vi tilfører fylde jævnt i over- og underlæbe, typisk
            med lidt mere i underlæben, så proportionerne bliver naturlige. De fleste starter med
            0,5–1 ml.
          </p>
        </article>
        <article class="omraade">
          <h3><span class="omraade__nr" aria-hidden="true">2</span>Tydeligere læbekant</h3>
          <p>
            Her handler det ikke om volumen, men om kontur. En præcis læbekant giver læben et
            skarpere, mere defineret udtryk – velegnet hvis kanten er blevet udvisket med årene.
          </p>
        </article>
        <article class="omraade">
          <h3><span class="omraade__nr" aria-hidden="true">3</span>Asymmetri</h3>
          <p>
            Få læber er helt symmetriske. Filler kan udligne forskelle i højde eller fylde mellem
            de to sider eller mellem over- og underlæbe.
          </p>
        </article>
        <article class="omraade">
          <h3><span class="omraade__nr" aria-hidden="true">4</span>Læbelinjer over munden</h3>
          <p>
            De lodrette linjer over overlæben – ofte kaldet rygerrynker. De behandles med en blødere
            filler lagt overfladisk, og kombineres nogle gange med
            <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }">skinbooster</router-link>
            for bedre hudkvalitet i området.
          </p>
        </article>
        <article class="omraade">
          <h3><span class="omraade__nr" aria-hidden="true">5</span>Nedadvendte mundvige</h3>
          <p>
            Små mængder filler i mundvigene kan løfte et udtryk, der virker træt eller surt, uden
            at ændre selve læben.
          </p>
        </article>
        <LaebeOmraader />
      </div>
    </section>

    <section class="sec sec--panel" aria-labelledby="forloeb-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Forløb</p>
        <h2 id="forloeb-title">Sådan foregår behandlingen</h2>
      </div>
      <ol class="trin trin--4">
        <li>
          <span class="trin__nr" aria-hidden="true">01</span>
          <h3>Gratis forundersøgelse</h3>
          <p>Lægen ser på dine læber, dine ønsker og din ansigtsform og fortæller, hvad der realistisk kan opnås – og hvad der ikke kan.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">02</span>
          <h3>48 timers betænkningstid</h3>
          <p>Lovpligtig ved kosmetisk behandling. Du behandles aldrig samme dag som forundersøgelsen.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">03</span>
          <h3>Bedøvende creme</h3>
          <p>Lægges på 20–30 minutter før, så behandlingen er til at holde ud. Selve injektionerne tager 20–30 minutter.</p>
        </li>
        <li>
          <span class="trin__nr" aria-hidden="true">04</span>
          <h3>Kontrol</h3>
          <p>Vi ser dig igen, når hævelsen har lagt sig, og kan justere, hvis der er behov for det.</p>
        </li>
      </ol>
    </section>

    <section class="sec" aria-labelledby="haevelse-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Efter behandlingen</p>
        <h2 id="haevelse-title">Hævelse dag for dag</h2>
        <p class="sec__lead">
          Hævelse efter læbefiller er helt normalt og det, de fleste bliver overraskede over.
          Et typisk forløb ser sådan ud:
        </p>
      </div>
      <ol class="tidslinje">
        <li><span class="tidslinje__dag">Dag 0–1</span><p>Mest hævet. Læberne kan føles spændte og se større ud, end resultatet bliver.</p></li>
        <li><span class="tidslinje__dag">Dag 2–3</span><p>Hævelsen aftager tydeligt. Eventuelle blå mærker kan vise sig.</p></li>
        <li><span class="tidslinje__dag">Dag 4–7</span><p>Læberne begynder at ligne det endelige resultat.</p></li>
        <li><span class="tidslinje__dag">Efter 2 uger</span><p>Filleren har sat sig. Først her kan resultatet vurderes.</p></li>
      </ol>
      <p class="bemaerk">
        <b>Planlæg derfor ikke en læbefiller tæt på en bryllupsdag, et jobinterview eller en ferie.</b>
        Regn med to uger.
      </p>
    </section>

    <section id="pris" class="sec priskort" aria-labelledby="pris-title">
      <div class="priskort__intro">
        <p class="sec__eyebrow">Pris</p>
        <h2 id="pris-title">Pris på læbefiller</h2>
        <p>
          Hvor meget der skal bruges, afhænger af dine læber og hvad du gerne vil opnå. De fleste
          starter med 0,5–1 ml. Det aftaler du med lægen ved forundersøgelsen, inden du beslutter dig.
        </p>
        <p>Se alle priser på <router-link to="/priser/">prissiden</router-link>.</p>
      </div>
      <dl class="prisliste">
        <div>
          <dt>Læbefiller<small>Hyaluronsyre, ikke-permanent</small></dt>
          <dd>1.350 kr. pr. ml</dd>
        </div>
        <div>
          <dt>Forundersøgelse<small>Hos læge, uforpligtende</small></dt>
          <dd>Gratis</dd>
        </div>
      </dl>
    </section>

    <section class="sec sec--panel" aria-labelledby="faq-title">
      <div class="sec__head">
        <p class="sec__eyebrow">Spørgsmål</p>
        <h2 id="faq-title">Ofte stillede spørgsmål om læbefiller</h2>
      </div>
      <FaqList :items="faqs" />
    </section>

    <RelateredeBehandlinger slug="laebefiller" />

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
        <p>Hellere ringe? <a :href="phoneHref">{{ phone }}</a></p>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import FaqList from '@/components/FaqList.vue'
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'
import LaebeOmraader from '@/components/LaebeOmraader.vue'
import RelateredeBehandlinger from '@/components/RelateredeBehandlinger.vue'
import imgHero from '@/assets/behandlinger/filler.webp'
import { BOOKING_URL, CLINIC_PHONE, CLINIC_PHONE_HREF } from '@/config/booking'
import { broedkrummerFor, broedkrummeSchema } from '@/data/behandlinger'

const broedkrummer = broedkrummerFor('laebefiller')

const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}/behandlinger/filler/laeber/`

const phone = CLINIC_PHONE
const phoneHref = CLINIC_PHONE_HREF


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
    q: 'Hvad koster læbefiller?',
    a: '1.350 kr. pr. ml. De fleste starter med 0,5–1 ml. Forundersøgelsen hos lægen er gratis, og du betaler først, når du er behandlet.'
  },
  {
    q: 'Hvor længe holder læbefiller?',
    a: 'Typisk 6–12 måneder. Læberne er et område med meget bevægelse, så fillerren nedbrydes hurtigere her end mange andre steder i ansigtet.'
  },
  {
    q: 'Gør det ondt?',
    a: 'Vi lægger bedøvende creme på 20–30 minutter før behandlingen. De fleste oplever det som ubehageligt snarere end smertefuldt.'
  },
  {
    q: 'Hvor lang tid er man hævet?',
    a: 'Mest de første to døgn. Efter en uge ligner læberne stort set det endelige resultat, og efter to uger har fillerren sat sig helt.'
  },
  {
    q: 'Kan læbefiller fjernes igen?',
    a: 'Hyaluronsyre kan opløses med enzymet hyaluronidase. Det er en af grundene til, at vi kun bruger ikke-permanent filler. Spørg lægen ved forundersøgelsen.'
  },
  {
    q: 'Kan jeg blive behandlet samme dag?',
    a: 'Nej. Der er 48 timers lovpligtig betænkningstid mellem forundersøgelse og behandling ved kosmetiske indgreb.'
  },
  {
    q: 'Er der en aldersgrænse?',
    a: 'Ja, du skal være fyldt 18 år.'
  }
]

const openBooking = () => {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'laebefiller' } }))
  window.gtagEvent?.('booking_click', { placement: 'laebefiller', component: 'LaebefillerView' })
}

const procedureLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Læbefiller',
  alternateName: ['Lip filler', 'Læbeforstørrelse', 'Filler i læberne'],
  description: 'Behandling af læberne med ikke-permanent hyaluronsyre-filler for volumen, kontur og symmetri. Udføres af læge i Esbjerg og Vejle.',
  url: CANONICAL,
  image: `${SITE_URL}/og/home.webp`,
  bodyLocation: 'Lips',
  procedureType: 'https://schema.org/NoninvasiveProcedure',
  howPerformed: 'Bedøvende creme påføres 20–30 minutter før. Hyaluronsyre lægges med tynd kanyle i og omkring læben i små mængder. Behandlingen tager 20–30 minutter.',
  preparation: 'Gratis forundersøgelse hos læge og 48 timers lovpligtig betænkningstid inden behandling.',
  followup: 'Hævelse i 2–3 døgn. Endeligt resultat vurderes efter 2 uger ved kontrol.',
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
    price: '1350',
    description: 'Pr. ml hyaluronsyre-filler',
    url: BOOKING_URL,
    availability: 'https://schema.org/InStock'
  },
  potentialAction: { '@type': 'ReserveAction', target: BOOKING_URL }
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

// Samme kilde som de synlige broedkrummer – de kan ikke komme til at afvige.
const breadcrumbLd = broedkrummeSchema(broedkrummer)

useHead({
  title: 'Læbefiller i Esbjerg & Vejle | Hos læge | DK Skønhedsklinik',
  htmlAttrs: { lang: 'da' },
  meta: [
    { name: 'description', content: 'Læbefiller i Esbjerg og Vejle lagt af læge – naturlig fylde og tydeligere læbekant. Fra 1.350 kr. pr. ml. Book en gratis forundersøgelse.' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'Læbefiller i Esbjerg & Vejle | Lagt af læge' },
    { property: 'og:description', content: 'Naturlig fylde og tydeligere læbekant, lagt af læge. Fra 1.350 kr. pr. ml. Gratis forundersøgelse.' },
    { property: 'og:url', content: CANONICAL },
    { property: 'og:image', content: `${SITE_URL}/og/home.webp` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Læbefiller i Esbjerg & Vejle | Lagt af læge' },
    { name: 'twitter:description', content: 'Naturlig fylde og tydeligere læbekant. Fra 1.350 kr. pr. ml.' }
  ],
  link: [
    { rel: 'canonical', href: CANONICAL },
    { rel: 'alternate', hreflang: 'da-DK', href: CANONICAL }
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

.laeber-view {
  color: $c-dark;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--maal);
  padding: 40px 20px 72px !important;
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

.laeber-view p { line-height: 1.7; }
.laeber-view .sec > p,
.laeber-split p { max-width: 64ch; }

/* Hvad er: tekst + "kort fortalt" */
.laeber-split {
  align-items: start;
  display: grid;
  gap: 40px 56px;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, .75fr);
}

/* "Kort fortalt": samme udtryk som overblikket paa prissiden -
   navy kort, lille titel i versaler og raekker adskilt af tynde streger */
.laeber-kort {
  background: $c-dark !important;
  border: 0 !important;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .14) !important;
  color: #fff;
  padding: 32px 32px 18px !important;
}

.laeber-kort h3 {
  color: rgba(255, 255, 255, .7);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .13em;
  margin: 0 0 6px;
  text-transform: uppercase;
}

.laeber-kort .tjek { gap: 0; }

.laeber-kort .tjek li {
  border-bottom: 1px solid rgba(255, 255, 255, .14);
  color: #fff;
  font-weight: 600;
  padding: 14px 0 14px 34px;
}

.laeber-kort .tjek li:last-child { border-bottom: 0; }

.laeber-kort .tjek li::before { top: 14px; }

/* Fem omraader + diagram = et helt gitter (3 x 2) */
.omraader {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.omraade {
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .06);
  box-sizing: border-box;
  padding: 24px 24px 26px;
}

.omraade h3 {
  color: $c-dark;
  font-size: 1.08rem;
  margin: 0 0 8px;
}

.omraade p {
  color: rgba(21, 54, 85, .82);
  font-size: .97rem;
  line-height: 1.65;
  margin: 0;
}

.omraade a { color: $c-blue; }

.omraade--medie {
  box-shadow: none;
  margin: 0;
  padding: 0;
}

/* Hævelse: tidslinje med prikker - vandret paa store skaerme */
.tidslinje {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  position: relative;
}

.tidslinje::before {
  background: rgba(45, 88, 161, .22);
  content: '';
  height: 2px;
  left: 6px;
  position: absolute;
  right: 6px;
  top: 6px;
}

.tidslinje li {
  padding-top: 30px;
  position: relative;
}

.tidslinje li::before {
  background: #fff;
  border: 3px solid $c-blue;
  border-radius: 50%;
  box-sizing: border-box;
  content: '';
  height: 14px;
  left: 0;
  position: absolute;
  top: 0;
  width: 14px;
}

.tidslinje__dag {
  color: $c-blue;
  display: block;
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .1em;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.tidslinje p {
  color: rgba(21, 54, 85, .85);
  font-size: .97rem;
  margin: 0;
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

@media (max-width: 900px) {
  .laeber-split { grid-template-columns: minmax(0, 1fr); }
  .omraader { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 700px) {
  .omraader { grid-template-columns: minmax(0, 1fr); }

  .tidslinje { gap: 22px; grid-template-columns: minmax(0, 1fr); padding-left: 30px; }
  .tidslinje::before { bottom: 6px; height: auto; left: 6px; right: auto; top: 6px; width: 2px; }
  .tidslinje li { padding-top: 0; }
  .tidslinje li::before { left: -30px; top: 3px; }
}

/* Under 1000 px: samme opskrift som klinikssiderne - 90 % bredde */
@media only screen and (max-width: 1000px) {
  .laeber-view {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .laeber-view > * {
    box-sizing: border-box;
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: none !important;
    width: 90% !important;
  }
}

/* ===== Hero i hvidt baand =====
   Heroen skal kunne baere siden: et hvidt baand i fuld bredde, der klart
   adskiller den fra indholdet paa den graa side. box-shadow + clip-path
   giver fuld bredde uden vandret scroll. */
.laeber-view { padding-top: 0 !important; }

.laeber-top {
  background: #fff;
  box-shadow: 0 0 0 100vmax #fff;
  clip-path: inset(0 -100vmax);
  margin-bottom: 56px;
  padding: 28px 0 56px;
}

.laeber-top .side-hero { margin-bottom: 0; }
.laeber-top .side-hero h1 { font-size: clamp(2rem, 3.4vw, 2.8rem); }
.laeber-top .side-hero__media img { max-height: 600px; }

/* Numrene paa kortene svarer til numrene i diagrammet */
.omraade h3 {
  align-items: center;
  display: flex;
  gap: 10px;
}

.omraade__nr {
  align-items: center;
  background: #2d58a1;
  border-radius: 50%;
  color: #fff;
  display: inline-flex;
  flex: 0 0 24px;
  font-size: .78rem;
  height: 24px;
  justify-content: center;
}

@media (max-width: 900px) {
  .laeber-top { padding: 20px 0 40px; }
}
</style>
