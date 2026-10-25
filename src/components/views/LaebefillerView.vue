<template>
  <section class="container laeber-view" aria-labelledby="laeber-title">
    <AppBreadcrumbs :sti="broedkrummer" />

    <header class="laeber-hero">
      <p class="eyebrow">Filler · Læber</p>
      <h1 id="laeber-title">Læbefiller i Esbjerg &amp; Vejle – lagt af læge</h1>
      <p class="lead">
        Læbefiller – eller lip filler, som mange kalder det – giver fylde, form og en
        tydeligere læbekant med hyaluronsyre. Hos
        DK Skønhedsklinik lægges den af en læge, og vi arbejder i små mængder ad gangen,
        så resultatet bliver naturligt og passer til resten af dit ansigt.
      </p>
      <ul class="chips">
        <li>Gratis forundersøgelse</li>
        <li>Fra 1.650 kr. pr. ml</li>
        <li>48 timers betænkningstid</li>
      </ul>

      <MediaPlaceholder
        class="hero-media"
        alt="Læbefillerbehandling hos DK Skønhedsklinik"
        motiv="Hero: nærbillede af læber med naturligt resultat, eller lægen under behandling i klinikken"
        ratio="16 / 7" />
    </header>

    <section class="block" aria-labelledby="hvad-title">
      <h2 id="hvad-title">Hvad er læbefiller?</h2>
      <p>
        Læbefiller, lip filler og læbeforstørrelse dækker over det samme: en ikke-permanent
        behandling med hyaluronsyre – et stof, kroppen selv
        danner. Det lægges med en tynd kanyle i og omkring læben, hvor det binder vand og
        giver fylde. Resultatet er synligt med det samme og nedbrydes langsomt af kroppen
        igen over 6–12 måneder.
      </p>
      <p>
        Fordi materialet er ikke-permanent, er en læbefiller aldrig en endelig beslutning.
        Hyaluronsyre kan desuden opløses igen med enzymet hyaluronidase, hvis resultatet
        ikke blev som ønsket. Tal med lægen om det ved forundersøgelsen.
      </p>
    </section>

    <section class="block" aria-labelledby="omraader-title">
      <h2 id="omraader-title">Hvad kan vi gøre med dine læber?</h2>

      <h3>Mere volumen</h3>
      <p>
        Den klassiske læbeforstørrelse. Vi tilfører fylde jævnt i over- og underlæbe, typisk
        med lidt mere i underlæben, så proportionerne bliver naturlige. De fleste starter med
        0,5–1 ml.
      </p>

      <h3>Tydeligere læbekant</h3>
      <p>
        Her handler det ikke om volumen, men om kontur. En præcis læbekant giver læben et
        skarpere, mere defineret udtryk – velegnet hvis kanten er blevet udvisket med årene.
      </p>

      <h3>Asymmetri</h3>
      <p>
        Få læber er helt symmetriske. Filler kan udligne forskelle i højde eller fylde mellem
        de to sider eller mellem over- og underlæbe.
      </p>

      <h3>Læbelinjer over munden</h3>
      <p>
        De lodrette linjer over overlæben – ofte kaldet rygerrynker. De behandles med en blødere
        filler lagt overfladisk, og kombineres nogle gange med
        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }">skinbooster</router-link>
        for bedre hudkvalitet i området.
      </p>

      <h3>Nedadvendte mundvige</h3>
      <p>
        Små mængder filler i mundvigene kan løfte et udtryk, der virker træt eller surt, uden
        at ændre selve læben.
      </p>

      <MediaPlaceholder
        class="omraade-media"
        alt="Oversigt over de fem områder omkring læberne, der kan behandles med filler"
        motiv="SVG-diagram: ansigtsudsnit med de fem markerede områder – volumen, læbekant, asymmetri, læbelinjer og mundvige"
        ratio="16 / 9" />
    </section>

    <section class="block" aria-labelledby="forloeb-title">
      <h2 id="forloeb-title">Sådan foregår behandlingen</h2>
      <ol class="steps">
        <li>
          <b>Gratis forundersøgelse.</b> Lægen ser på dine læber, dine ønsker og din ansigtsform
          og fortæller, hvad der realistisk kan opnås – og hvad der ikke kan.
        </li>
        <li>
          <b>48 timers betænkningstid.</b> Lovpligtig ved kosmetisk behandling. Du behandles
          aldrig samme dag som forundersøgelsen.
        </li>
        <li>
          <b>Bedøvende creme.</b> Lægges på 20–30 minutter før, så behandlingen er til at holde ud.
          Selve injektionerne tager 20–30 minutter.
        </li>
        <li>
          <b>Kontrol.</b> Vi ser dig igen, når hævelsen har lagt sig, og kan justere, hvis der
          er behov for det.
        </li>
      </ol>
    </section>

    <section class="block" aria-labelledby="haevelse-title">
      <h2 id="haevelse-title">Hævelse dag for dag</h2>
      <p>
        Hævelse efter læbefiller er helt normalt og det, de fleste bliver overraskede over.
        Et typisk forløb ser sådan ud:
      </p>
      <ul class="timeline">
        <li><b>Dag 0–1:</b> Mest hævet. Læberne kan føles spændte og se større ud, end resultatet bliver.</li>
        <li><b>Dag 2–3:</b> Hævelsen aftager tydeligt. Eventuelle blå mærker kan vise sig.</li>
        <li><b>Dag 4–7:</b> Læberne begynder at ligne det endelige resultat.</li>
        <li><b>Efter 2 uger:</b> Fillerren har sat sig. Først her kan resultatet vurderes.</li>
      </ul>
      <p class="note">
        Planlæg derfor ikke en læbefiller tæt på en bryllupsdag, et jobinterview eller en ferie.
        Regn med to uger.
      </p>
    </section>

    <section class="block" aria-labelledby="pris-title">
      <h2 id="pris-title">Pris</h2>
      <table class="price-table">
        <tbody>
          <tr>
            <th scope="row">Læbefiller<span>Hyaluronsyre, ikke-permanent</span></th>
            <td>1.650 kr. pr. ml</td>
          </tr>
          <tr>
            <th scope="row">Forundersøgelse<span>Hos læge, uforpligtende</span></th>
            <td>Gratis</td>
          </tr>
        </tbody>
      </table>
      <p>
        Hvor meget der skal bruges, afhænger af dine læber og hvad du gerne vil opnå. De fleste
        starter med 0,5–1 ml. Det aftaler du med lægen ved forundersøgelsen, inden du beslutter dig.
        Se alle priser på <router-link to="/priser/">prissiden</router-link>.
      </p>
    </section>

    <section class="block" aria-labelledby="faq-title">
      <h2 id="faq-title">Ofte stillede spørgsmål</h2>
      <div class="faq-list">
        <details v-for="(item, i) in faqs" :key="i" class="faq-item">
          <summary class="faq-q">{{ item.q }}</summary>
          <div class="faq-a"><p>{{ item.a }}</p></div>
        </details>
      </div>
    </section>

    <RelateredeBehandlinger slug="laebefiller" />

    <section class="closing" aria-labelledby="cta-title">
      <h2 id="cta-title">Book en gratis forundersøgelse</h2>
      <p>
        Vi har klinikker i <router-link to="/klinik/esbjerg/">Esbjerg</router-link> og
        <router-link to="/klinik/vejle/">Vejle</router-link>. Forundersøgelsen er gratis og
        uforpligtende, og du bliver ikke behandlet samme dag.
      </p>
      <div class="booking-button">
        <button class="general_button arrow" type="button" @click="openBooking"
          aria-label="Book gratis forundersøgelse">
          Book gratis forundersøgelse
        </button>
      </div>
      <p class="phone-line">
        Hellere ringe? <a :href="phoneHref">{{ phone }}</a>
      </p>
    </section>
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'
import MediaPlaceholder from '@/components/MediaPlaceholder.vue'
import RelateredeBehandlinger from '@/components/RelateredeBehandlinger.vue'
import { BOOKING_URL, CLINIC_PHONE, CLINIC_PHONE_HREF } from '@/config/booking'
import { broedkrummerFor, broedkrummeSchema } from '@/data/behandlinger'

const broedkrummer = broedkrummerFor('laebefiller')

const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}/behandlinger/filler/laeber/`

const phone = CLINIC_PHONE
const phoneHref = CLINIC_PHONE_HREF

const faqs = [
  {
    q: 'Hvad koster læbefiller?',
    a: '1.650 kr. pr. ml. De fleste starter med 0,5–1 ml. Forundersøgelsen hos lægen er gratis, og du betaler først, når du er behandlet.'
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
    price: '1650',
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
    { name: 'description', content: 'Læbefiller i Esbjerg og Vejle lagt af læge – naturlig fylde og tydeligere læbekant. Fra 1.650 kr. pr. ml. Book en gratis forundersøgelse.' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'Læbefiller i Esbjerg & Vejle | Lagt af læge' },
    { property: 'og:description', content: 'Naturlig fylde og tydeligere læbekant, lagt af læge. Fra 1.650 kr. pr. ml. Gratis forundersøgelse.' },
    { property: 'og:url', content: CANONICAL },
    { property: 'og:image', content: `${SITE_URL}/og/home.webp` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Læbefiller i Esbjerg & Vejle | Lagt af læge' },
    { name: 'twitter:description', content: 'Naturlig fylde og tydeligere læbekant. Fra 1.650 kr. pr. ml.' }
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
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  padding: 70px 20px 100px !important;
  color: $c-dark;
}

.laeber-hero {
  margin-bottom: 54px;

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: .12em;
    font-size: .8rem;
    color: $c-blue;
    margin-bottom: 10px;
  }

  h1 { margin-bottom: 18px; }

  .lead {
    max-width: 64ch;
    line-height: 1.7;
  }
}

.hero-media { margin-top: 30px; }
.omraade-media { margin-top: 28px; }

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 24px 0 0;

  li {
    border: 1px solid rgba(45, 88, 161, .25);
    border-radius: 999px;
    padding: 8px 16px;
    font-size: .9rem;
    font-weight: 600;
    color: $c-blue;
  }
}

.block {
  margin-bottom: 54px;

  h2 { margin-bottom: 18px; }

  h3 {
    margin: 26px 0 8px;
    font-size: 1.1rem;
    color: $c-blue;
  }

  p {
    max-width: 72ch;
    line-height: 1.7;
    margin-bottom: 14px;
  }

  .note {
    border-left: 3px solid $c-blue;
    padding-left: 16px;
    font-style: italic;
  }
}

.steps {
  max-width: 72ch;
  padding-left: 20px;
  line-height: 1.7;

  li { margin-bottom: 14px; }
}

.timeline {
  max-width: 72ch;
  padding-left: 18px;
  line-height: 1.7;

  li { margin-bottom: 10px; }
}

.price-table {
  width: 100%;
  max-width: 620px;
  border-collapse: collapse;
  margin-bottom: 18px;

  th, td {
    border-bottom: 1px solid rgba(21, 54, 85, .12);
    padding: 16px 0;
    text-align: left;
    vertical-align: top;
  }

  th {
    font-weight: 600;

    span {
      display: block;
      font-weight: 400;
      font-size: .85rem;
      color: rgba(21, 54, 85, .62);
      margin-top: 4px;
    }
  }

  td {
    text-align: right;
    white-space: nowrap;
    font-weight: 700;
    color: $c-blue;
  }
}

.faq-list { max-width: 72ch; }

.faq-item {
  border-bottom: 1px solid rgba(21, 54, 85, .12);

  .faq-q {
    cursor: pointer;
    padding: 16px 0;
    font-weight: 600;
    list-style: none;

    &::-webkit-details-marker { display: none; }

    &::after {
      content: '+';
      float: right;
      color: $c-blue;
      font-weight: 400;
    }
  }

  &[open] .faq-q::after { content: '–'; }

  .faq-a p {
    padding: 0 0 16px;
    line-height: 1.7;
    margin: 0;
  }
}

.closing {
  h2 { margin-bottom: 14px; }

  p {
    max-width: 68ch;
    line-height: 1.7;
  }

  .booking-button { margin: 22px 0 14px; }

  .phone-line {
    font-size: .95rem;

    a { color: $c-blue; font-weight: 600; }
  }
}

@media (max-width: 700px) {
  .laeber-view { padding: 50px 18px 70px !important; }
}
</style>
