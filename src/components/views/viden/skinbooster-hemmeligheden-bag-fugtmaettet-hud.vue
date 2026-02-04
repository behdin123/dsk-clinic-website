<template>
  <VidenArticleLayout eyebrow="Vidensunivers" :title="pageTitle" author="DK Skønhedsklinik" :published="publishedHuman"
    :publishedISO="publishedISO" :date="'08.'" :month="'okt'" :readingTime="readingTime" :categories="['Skinbooster']"
    :heroSrc="heroSrc" heroAlt="Skinbooster – injektion af tynd hyaluronsyre for intensiv fugt og glød"
    :related="relatedPosts" :breadcrumbs="[
      { label: 'Forside', to: { name: 'home' } },
      { label: 'Viden', to: { name: 'viden' } },
      { label: pageTitle }
    ]">
    <!-- Intro -->
    <template #intro>
      <p class="intro">
        <i>Fugt indefra – uden at ændre din ansigtsform.</i> <br>
        Skinbooster er en målrettet fugtbehandling, hvor en tynd, let stabiliseret hyaluronsyre
        injiceres i hudens øverste lag. Resultatet er intens fugt, glød og bedre elasticitet.
        Her får du den komplette guide: hvad
        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
          aria-label="Skinbooster – informationsside" data-tooltip="Går til: Skinbooster">Skinbooster</router-link> er,
        hvordan den adskiller sig fra
        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
          aria-label="Filler – informationsside" data-tooltip="Går til: Filler behandling">filler</router-link>,
        hvem den egner sig til – og hvad du kan forvente før, under og efter.
      </p>
    </template>

    <!-- Body -->
    <section class="section-group">
      <!-- Hvad er Skinbooster -->
      <div id="hvad-er-skinbooster" class="section-kort-text">
        <h2 class="section-title">Hvad er Skinbooster – og hvad gør den for huden?</h2>
        <p>
          En <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – informationsside"
            data-tooltip="Går til: Skinbooster"><b>Skinbooster</b></router-link>
          er i sin kerne en <i>fugtbehandling via mikroinjektion</i>. Den består af en
          tyndtflydende, let krydsbundet hyaluronsyre, som fordeles i mikrodoser i dermis. Hyaluronsyre findes
          naturligt i huden og binder vand som en svamp – men mængden falder med alderen. Når vi fylder
          de biologiske “depoter” op indefra, kan vi <strong>genoprette fugtniveauet</strong>, øge <strong>gløden</strong> og støtte
          <strong>elasticiteten</strong>. Overfladiske tørhedslinjer udglattes, og teksturen bliver mere ensartet.
        </p>
        <p>
          Vigtigt:
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – informationsside" data-tooltip="Går til: Skinbooster"><b>Skinbooster</b></router-link>
          skaber
          <i>ikke</i> volumen eller kontur som en klassisk
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
            aria-label="Filler – informationsside" data-tooltip="Går til: Filler behandling"><b>filler</b></router-link>.
          Den forbedrer <strong>hudkvalitet</strong> – ikke ansigtsform. Behandlingen kan anvendes i ansigt, på hals,
          décolleté og hænder (fine “handske-rynker”). Også ujævnheder som små akne-ar får ofte et pænere udtryk.
        </p>
        <!-- [[IMG: mikrodråber i dermis – alt: "Mikroinjektioner af skinbooster i hudens øverste lag"]] -->
      </div>

      <!-- Tegn på at du vil have gavn -->
      <div id="kandidat" class="section-kort-text">
        <h2 class="section-title">Tegn på at din hud kan have gavn af Skinbooster</h2>
        <p>
          Tænk
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – informationsside" data-tooltip="Går til: Skinbooster"><b>Skinbooster</b></router-link>
          som et <i>fugtlager</i> indbygget i huden. Den er særlig relevant, hvis du oplever
          vedvarende tørhed på trods af god creme, hvis makeup sætter sig i fine linjer, eller hvis overfladen
          virker ru og ujævn. Den passer også til tidlige alderstegn, hvor huden føles mindre “fjedrende”.
        </p>
        <ul class="no-margin">
          <li>Tør, “træt” hud med manglende <strong>glød</strong> – selv ved konsekvent hudpleje.</li>
          <li>Fine tørhedslinjer på kinder/overlæbe, som makeup fremhæver.</li>
          <li>Ujævn tekstur med små ar/porer, der ønskes blødere.</li>
          <li>Begyndende tab af <strong>spændstighed</strong> uden behov for egentlig løft.</li>
          <li>Solpræget hud med grovere overflade (pigment kræver separat indsats – fugt forbedrer helhedsindtrykket).
          </li>
        </ul>
        <p>
          Kort sagt: En <strong>naturlig, fugtmættet</strong> og mere elastisk hud – uden dramatisk downtime.
        </p>
      </div>

      <!-- Forskel fra filler -->
      <div id="skinbooster-vs-filler" class="section-kort-text">
        <h2 class="section-title">Hvordan adskiller Skinbooster sig fra almindelig filler?</h2>
        <p>
          <strong>Konsistens: </strong>
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – informationsside" data-tooltip="Går til: Skinbooster"><b>Skinbooster</b></router-link>
          er tynd og flydende, så den kan brede fugt i vævet – ikke bygge struktur.
          <br> <br>
          <strong>Placering:</strong> Den lægges som mange små, <i>overfladiske</i> dråber i et bredt område, fremfor dybere,
          fokuserede depoter.
          <br> <br>
          <strong>Formål:</strong> Fokus er <i>hudkvalitet</i> (hydrering, glød, elasticitet) – ikke kontur
          eller volumen. 
          <br> <br>
          <strong>Holdbarhed:</strong> Effekten topper efter et kurforløb og kan opleves i 6+ måneder med
          vedligehold hver 6–12 måneder.
          <br> <br>
          <strong>Opløselighed:</strong> Produktet kan opløses med hyaluronidase, men behovet
          er sjældent.
        </p>
        <p>
          Er du tilfreds med ansigtsformen, men savner <strong>bedre hud</strong>, er
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – informationsside" data-tooltip="Går til: Skinbooster"><b>Skinbooster</b></router-link>
          ideel.
          Mangler du samtidig
          løft/volumen, kombinerer vi med
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
            aria-label="Filler – informationsside" data-tooltip="Går til: Filler behandling"><b>filler</b></router-link>.
        </p>
      </div>

      <!-- Sådan foregår det -->
      <div id="forloeb" class="section-kort-text">
        <h2 class="section-title">Sådan foregår en Skinbooster-behandling</h2>
        <p>
          Vi renser huden og kan lægge bedøvelsescreme for komfort. Produktet injiceres i <i>mikrodråber</i>
          punktvist med fin nål eller mesopistol. Lige efter kan der ses små “papler” (myggestik-lignende),
          som jævnes ud i løbet af timer til et døgn. En ansigtsbehandling tager typisk 15–20 minutter.
        </p>
        <p>
          <strong>Efterpleje:</strong> Undgå makeup samme dag og hold igen med træning/sauna/svømmehal i 24 timer. Berør huden
          skånsomt. Små blå mærker kan forekomme og forsvinder oftest inden 5–7 dage. De fleste er job-klare næste dag.
        </p>
        <!-- [[IMG: papler lige efter behandling – alt: "Små, midlertidige papler efter skinbooster"]] -->
      </div>

      <!-- Smerte & downtime -->
      <div id="smerte-downtime" class="section-kort-text">
        <h2 class="section-title">Gør det ondt – og hvor meget downtime er der?</h2>
        <p>
          Oplevelsen er typisk <i>mild til moderat</i> og føles med bedøvelse mest som korte tryk.
          Downtime er lav: rødme/let hævelse i 0–48 timer. Du kan som regel anvende makeup fra næste dag.
          Brug SPF og undgå hård træning det første døgn.
        </p>
      </div>

      <!-- Hvor mange behandlinger -->
      <div id="antal" class="section-kort-text">
        <h2 class="section-title">Hvor mange behandlinger? – 3 trin til varig glød</h2>
        <p>
          Standardforløbet er <strong>3 behandlinger med ca. 4 ugers mellemrum</strong>. Det bygger fugtdepoterne gradvist op
          og giver mest langtidsholdbar effekt. Efter kuren anbefales vedligehold hver <strong>6–12 måneder</strong>. Mange
          vælger en booster omkring 8 måneder, afhængigt af hudtype og mål.
        </p>
      </div>

      <!-- Makeup & hverdag -->
      <div id="makeup" class="section-kort-text">
        <h2 class="section-title">Kan du gå på arbejde – og hvornår må du bruge makeup?</h2>
        <p>
          De fleste kan arbejde <strong>næste dag</strong>. Undgå makeup på behandlingsdagen af hensyn til indstik. Vælg gerne
          mineralmakeup første gang efter behandlingen og husk daglig SPF – særligt i den første uge.
        </p>
      </div>

      <!-- Resultater -->
      <div id="resultater" class="section-kort-text">
        <h2 class="section-title">Hvilke resultater kan du forvente?</h2>
        <p>
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – informationsside" data-tooltip="Går til: Skinbooster"><b>Skinbooster</b></router-link>
          giver
          en <i>helhedsforbedring</i>, hvor spejlbilledet ser friskere ud – uden at ansigtsformen
          ændres. Resultaterne bygger sig op over uger og topper efter et kurforløb.
        </p>
        <ul class="no-margin">
          <li><strong>Fugt &amp; glød:</strong> Dugfrisk hud med synlig vitalitet.</li>
          <li><strong>Finere tekstur:</strong> Færre tørhedslinjer og mere ensartet overflade.</li>
          <li><strong>Bedre elasticitet:</strong> Huden føles mere “bouncy”.</li>
          <li><strong>Naturligt look:</strong> Ingen ændring af konturer – blot pænere hud.</li>
          <li><strong>Varighed:</strong> Typisk 6+ måneder efter fuldt forløb (kan vedligeholdes).</li>
        </ul>
        <!-- [[IMG: før/efter makro hudtekstur – alt: "Hud før/efter skinbooster: mindre tørhedslinjer og glattere overflade"]] -->
      </div>

      <!-- Er det noget for dig -->
      <div id="egnet" class="section-kort-text">
        <h2 class="section-title">Er Skinbooster den rette behandling for dig?</h2>
        <p>
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – informationsside" data-tooltip="Går til: Skinbooster"><b>Skinbooster</b></router-link> er
          til
          dig, der ønsker <strong>bedre hudkvalitet</strong> uden drastiske indgreb. Ved dybe mimiske linjer
          supplerer vi ofte med
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
            aria-label="Botox – informationsside" data-tooltip="Går til: Botox"><b>botox</b></router-link>,
          mens volumen/tabte konturer håndteres med
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
            aria-label="Filler – informationsside" data-tooltip="Går til: Filler"><b>filler</b></router-link>.
          Har du ar/struktur, kan
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'microneedling' } }" class="inline-link"
            aria-label="Microneedling – informationsside"
            data-tooltip="Går til: Microneedling"><b>microneedling</b></router-link>
          være et godt supplement.
        </p>
      </div>

      <!-- Kombinationer -->
      <div id="kombination" class="section-kort-text">
        <h2 class="section-title">Kombination med andre behandlinger</h2>
        <ul class="kombination-margin">
          <li>
            <b>
              <router-link :to="{ name: 'behandling-dynamic', params: { type: 'microneedling' } }" class="inline-link"
                aria-label="Microneedling – informationsside"
                data-tooltip="Går til: Microneedling">Microneedling</router-link>
              +
              <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
                aria-label="Skinbooster – informationsside"
                data-tooltip="Går til: Skinbooster">Skinbooster</router-link>:
            </b> ekstra kollagenstimuli og jævnere tekstur.
          </li>
          <li>
            <b>
              <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                aria-label="Botox – informationsside" data-tooltip="Går til: Botox">Botox</router-link>
              +
              <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
                aria-label="Skinbooster – informationsside"
                data-tooltip="Går til: Skinbooster">Skinbooster</router-link>:
            </b> færre mimiklinjer og flottere hudoverflade.
          </li>
          <li>
            <b>
              <router-link :to="{ name: 'behandling-dynamic', params: { type: 'prp' } }" class="inline-link"
                aria-label="PRP – informationsside" data-tooltip="Går til: PRP behandling">PRP</router-link>
              +
              <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
                aria-label="Skinbooster – informationsside"
                data-tooltip="Går til: Skinbooster">Skinbooster</router-link>:
            </b> vækstfaktorer + fugt til særligt sarte områder (fx under øjnene).
          </li>
        </ul>
      </div>

      <!-- Sikkerhed -->
      <div id="sikkerhed" class="section-kort-text">
        <h2 class="section-title">Sikkerhed og bivirkninger</h2>
        <p>
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – informationsside" data-tooltip="Går til: Skinbooster"><b>Skinbooster</b></router-link> er
          generelt en <strong>meget sikker</strong> behandling, når den udføres korrekt. Almindelige, forbigående
          reaktioner er rødme, ømhed og små blå mærker. Alvorlige komplikationer er <i>sjældne</i>; vi arbejder sterilt
          og har hyaluronidase til rådighed ved behov. Endelig egnethed vurderes ved lægelig konsultation.
        </p>
        <p class="note">
          Oplysningerne er generelle og kan ikke erstatte personlig lægefaglig vurdering.
        </p>
      </div>
    </section>


    <!-- CTA midt i artiklen -->
    <template #cta>
      <h3>Få en personlig plan for din hud</h3>
      <p>Book en gratis forundersøgelse – Skinbooster udføres af erfaren læge.</p>
      <b class="inline-link arrow læs-mere" @click="openBookingFromHero">Book tid</b>
    </template>

    <!-- FAQ -->
    <template #faq>
      <section id="faq" class="faq">
        <h2 class="section-title faq-title"><span>Ofte stillede spørgsmål om</span> <span>Skinbooster</span></h2>
        <div class="faq-list">
          <details v-for="(item, i) in faqs" :key="i" class="faq-item">
            <summary class="faq-q" v-html="item.q"></summary>
            <div class="faq-a">
              <p v-html="item.a"></p>
            </div>
          </details>
        </div>
      </section>
    </template>
  </VidenArticleLayout>
</template>

<!-- Modulescope: kortdata til oversigten -->
<script>
import heroSrc from '@/assets/Mette.webp'

export default {
  name: 'SkinboosterHemmelighedenBagFugtmaettetHud',
  videnCard: {
    slug: 'skinbooster-hemmeligheden-bag-fugtmaettet-hud',
    title: 'Skinbooster – hemmeligheden bag fugtmættet hud',
    excerpt: 'Hvad er Skinbooster, hvordan adskiller den sig fra filler, og hvem har gavn af den? Få hele guiden.',
    img: heroSrc,
    alt: 'Skinbooster – intensiv fugt indefra',
    cats: ['Skinbooster'],
    dateISO: '2025-10-08',
    dateHuman: '08. oktober 2025',
    date: '08.',
    month: 'okt',
    reading: 9,
    to: { name: 'viden-artikel-skinbooster-hemmeligheden-bag-fugtmaettet-hud' },
  },
}
</script>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import VidenArticleLayout from '@/components/VidenArticleLayout.vue'

/* Assets til indhold */
import heroSrc from '@/assets/Mette.webp'

/* Meta/SEO */
const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}/viden/skinbooster-hemmeligheden-bag-fugtmaettet-hud/`
const OG_IMAGE = `${SITE_URL}/og/blog-skinbooster-hemmeligheden-bag-fugtmaettet-hud.webp`
const pageTitle = 'Skinbooster – hemmeligheden bag fugtmættet hud'
const desc = 'Komplet guide til Skinbooster: intens fugt indefra, glød og elasticitet. Sådan foregår behandlingen – og hvem den egner sig til.'

/* Dato / læsetid */
const publishedISO = '2025-02-15'
const publishedHuman = '15. februar 2025'
const readingTime = ref(9)

onMounted(() => {
  const text = document.querySelector('.blog-content')?.innerText || ''
  const words = text.trim().split(/\s+/).length
  readingTime.value = Math.max(5, Math.round(words / 200))
})

/* CTA-handler (samme mønster som i din template) */
const openBookingFromHero = () => {
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'skinbooster_article' } }))
  window.gtagEvent?.('booking_click', { placement: 'article', component: 'SkinboosterHemmeligheden' })
}

/* Relaterede kort – interne behandlinger */
const relatedPosts = [
  {
    to: { name: 'behandling-dynamic', params: { type: 'skinbooster' } },
    img: heroSrc,
    title: 'Skinbooster – hydrering & glød',
    cat: 'Behandling',
  },
  {
    to: { name: 'behandling-dynamic', params: { type: 'microneedling' } },
    img: heroSrc,
    title: 'Microneedling – tekstur & ar',
    cat: 'Behandling',
  },
]

/* FAQ-indhold */
const faqs = [
  {
    q: '<b>Hvor mange Skinbooster-behandlinger skal jeg have?</b>',
    a: 'Standard er 3 behandlinger med ca. 4 ugers interval. Derefter vedligehold hver 6–12 måneder – afhænger af hudtype og mål.',
  },
  {
    q: '<b>Gør Skinbooster ondt – og kan jeg gå på arbejde dagen efter?</b>',
    a: 'Med bedøvelsescreme oplever de fleste mildt ubehag. Du kan typisk arbejde dagen efter (nogle allerede samme dag). Makeup: fra næste dag.',
  },
  {
    q: '<b>Skinbooster eller filler – hvad skal jeg vælge?</b>',
    a: 'Skinbooster forbedrer hudkvalitet (fugt, glød, elasticitet). Filler bruges til volumen/kontur. Ofte kombineres de, alt efter mål.',
  },
  {
    q: '<b>Hvor længe holder effekten?</b>',
    a: 'Efter et fuldt forløb oplever mange 6+ måneders effekt, som aftager gradvist. En booster-behandling kan forlænge resultatet.',
  },
  {
    q: '<b>Er behandlingen sikker?</b>',
    a: 'Ja, når den udføres korrekt. Almindelige reaktioner er rødme, ømhed og små blå mærker. Sjældne komplikationer håndteres med sikre protokoller.',
  },
]

/* JSON-LD */
const stripTags = (s) => String(s || '').replace(/<[^>]*>/g, '').trim()
const faqLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(item => ({
    '@type': 'Question',
    name: stripTags(item.q),
    acceptedAnswer: { '@type': 'Answer', text: stripTags(item.a) },
  })),
}))

const articleLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: pageTitle,
  description: desc,
  image: [OG_IMAGE],
  author: { '@type': 'Organization', name: 'DK Skønhedsklinik' },
  publisher: {
    '@type': 'Organization',
    name: 'DK Skønhedsklinik',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo_blue.aacd9554.svg` },
  },
  datePublished: publishedISO,
  dateModified: publishedISO,
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
}))

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Viden', item: `${SITE_URL}/viden/` },
    { '@type': 'ListItem', position: 3, name: pageTitle, item: CANONICAL },
  ],
}

/* Head */
useHead({
  title: `${pageTitle} | Vidensunivers`,
  meta: [
    { name: 'description', content: desc },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { property: 'og:type', content: 'article' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: desc },
    { property: 'og:url', content: CANONICAL },
    { property: 'og:image', content: OG_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: desc },
    { name: 'twitter:image', content: OG_IMAGE },
  ],
  link: [
    { rel: 'canonical', href: CANONICAL },
    { rel: 'alternate', hreflang: 'da', href: CANONICAL },
  ],
  script: [
    { type: 'application/ld+json', children: JSON.stringify(articleLd.value) },
    { type: 'application/ld+json', children: JSON.stringify(breadcrumbLd) },
    { type: 'application/ld+json', children: JSON.stringify(faqLd.value) },
  ],
})
</script>


<style scoped lang="scss">
@use '../../css/style.scss';

.no-margin {
    margin: 25px 15px !important;

    li {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
        list-style: disc;
    }
}

.kombination-margin{
  margin: 25px 15px !important;
  li{
    margin-bottom: 20px;
    list-style: decimal;
  }
}
</style>