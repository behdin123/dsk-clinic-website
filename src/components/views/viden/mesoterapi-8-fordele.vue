<template>
  <VidenArticleLayout
    eyebrow="Vidensunivers"
    :title="pageTitle"
    author="DK Skønhedsklinik"
    :published="publishedHuman"
    :publishedISO="publishedISO"
    :date="'15.'"
    :month="'feb'"
    :readingTime="readingTime"
    :categories="['Mesoterapi']"
    :heroSrc="heroSrc"
    heroAlt="Mesoterapi – injektionsbehandling til hud, hår og figur"
    :related="relatedPosts"
    :breadcrumbs="[
      { label: 'Forside', to: { name:'home' } },
      { label: 'Viden', to: { name:'viden' } },
      { label: pageTitle }
    ]"
  >
    <!-- Intro -->
    <template #intro>
      <p class="intro">
        <i>Mesoterapi – lille indgreb, mange anvendelser.</i>
        Behandlingen har eksisteret i årtier og leverer nærende stoffer direkte til hudens mellemste lag.
        Med tilpassede “cocktails” kan mesoterapi målrettes hudkvalitet, hårtab, små fedtdepoter
        og mere. Her gennemgår vi <b>8 konkrete fordele</b> – og hvornår behandlingen giver bedst mening.
      </p>
    </template>

    <!-- Body -->
    <section class="section-group">
      <!-- 1. Hudforyngelse -->
      <div id="meso-hud" class="section-kort-text">
        <h2 class="section-title">1) Hudforyngelse – glattere, sundere hud</h2>
        <p>
          Mesoterapi til huden består typisk af mikrodoser af vitaminer, mineraler, antioxidanter,
          aminosyrer og <i>tynd</i> hyaluronsyre. Injektionerne placeres overfladisk i dermis, hvor
          de kan støtte cellefornyelse, hydrering og kollagenstimulering. Over uger oplever mange
          <i>mere glød, finere porer og færre fine linjer</i>. Metoden kaldes også biorevitalisering.
        </p>
        <p>
          Vil du primært fugtbooste hudens overflade, kan vi også supplere med
          <router-link :to="{ name:'behandling-dynamic', params:{ type:'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – informationsside" data-tooltip="Går til: Skinbooster">
            skinbooster</router-link>. Hvor skinbooster er en ren fugtbehandling, kan
          <b>mesoterapi</b> skræddersys til <i>både</i> fugt, antioxidanter og peptider.
        </p>
        <!-- [[IMG: mesoterapi ansigt – alt: "Mikroinjektioner i ansigtets hud ved mesoterapi"]] -->
      </div>

      <!-- 2. Lokal fedtreduktion -->
      <div id="meso-fedtreduktion" class="section-kort-text">
        <h2 class="section-title">2) Lokal fedtreduktion – farvel til små depoter</h2>
        <p>
          Ved “injektionslipolyse” anvendes mesoterapi i små fedtdepoter – fx dobbelthage eller
          “håndtag”. Opløsninger med fedtopløsende stoffer deaktiverer gradvist fedtcellerne, som
          herefter nedbrydes og udskilles naturligt. Forløbet kræver typisk flere sessioner med
          2–4 ugers mellemrum. Forvent gradvise, målbare forbedringer ved <i>små til moderate</i> depoter.
        </p>
        <!-- [[IMG: dobbelthage før/efter skitse – alt: "Illustration af lokal fedtreduktion ved injektionslipolyse"]] -->
      </div>

      <!-- 3. Cellulite -->
      <div id="meso-cellulite" class="section-kort-text">
        <h2 class="section-title">3) Cellulite – glattere lår og balder</h2>
        <p>
          Cellulite påvirkes af mikrocirkulation, fedtvolumen og bindevævets struktur. Meso-cocktails
          kan målrettes disse faktorer (fx koffein/carnitin for lipolyse, cirkulationsfremmende
          ekstrakter samt peptider/enzymkomplekser). Resultatet er typisk <i>glattere hud og mindre synlig “appelsinhud”</i>
          efter et serieforløb. Realistiske forventninger er vigtige – vi taler om forbedring, ikke perfektion.
        </p>
        <!-- [[IMG: cellulite-områder illustreret – alt: "Målområder ved cellulite-behandling"]] -->
      </div>

      <!-- 4. Hårtab -->
      <div id="meso-hartab" class="section-kort-text">
        <h2 class="section-title">4) Stimulering af hårvækst</h2>
        <p>
          Meso til hovedbunden kombinerer vitaminer (fx biotin), aminosyrer og mineraler – ofte sammen
          med peptider, der kan støtte anagen-fasen. Behandlingen er velegnet ved tidligt diffust hårtab
          og kan kombineres med
          <router-link :to="{ name:'behandling-dynamic', params:{ type:'prp' } }" class="inline-link"
            aria-label="PRP hår – informationsside" data-tooltip="Går til: PRP behandling">
            PRP</router-link> for synergi. Man ser typisk færre udfældede hår efter uger, og herefter
          fremkomst af nye “babyhår”.
        </p>
        <!-- [[IMG: mesoterapi i hovedbund – alt: "Mikroinjektioner i hovedbunden ved hårtab"]] -->
      </div>

      <!-- 5. Ar -->
      <div id="meso-ar" class="section-kort-text">
        <h2 class="section-title">5) Ar – skånsom forbedring af struktur</h2>
        <p>
          Ved akne-ar og mindre, flade ar kan mesoterapi blødgøre vævet og understøtte remodellering.
          I praksis kombinerer vi ofte meso med
          <router-link :to="{ name:'behandling-dynamic', params:{ type:'microneedling' } }" class="inline-link"
            aria-label="Microneedling – informationsside" data-tooltip="Går til: Microneedling">
            microneedling</router-link> for en mere tydelig effekt.
          Forvent gradvis udjævning over et serieforløb.
        </p>
      </div>

      <!-- 6. Fine linjer -->
      <div id="meso-linjer" class="section-kort-text">
        <h2 class="section-title">6) Fine linjer – mere elastisk hud</h2>
        <p>
          Hvor dybe mimiske linjer bedst håndteres med
          <router-link :to="{ name:'behandling-dynamic', params:{ type:'botox' } }" class="inline-link"
            aria-label="Botox – informationsside" data-tooltip="Går til: Botox">
            botox</router-link>, er mesoterapi stærk til netværk af fine, overfladiske linjer – fx
          på kinder, hals eller overlæbe. Mikrodoser af hyaluronsyre, peptider og antioxidanter kan
          forbedre hudens fugt og eftergivelighed, så linjerne fremstår mindre.
        </p>
      </div>

      <!-- 7. Pigment -->
      <div id="meso-pigment" class="section-kort-text">
        <h2 class="section-title">7) Pigmentkorrektion – mere jævn hudtone</h2>
        <p>
          Udvalgte meso-cocktails (fx med tranexamsyre, C-vitamin eller glutathion) kan anvendes som
          supplement ved ujævn pigmentering. Ofte kombinerer vi med skånsom overfladebehandling.
          Solbeskyttelse er altid en forudsætning for varig effekt. Forvent gradvis udjævning gennem et serieforløb.
        </p>
      </div>

      <!-- 8. Minimal downtime -->
      <div id="meso-downtime" class="section-kort-text">
        <h2 class="section-title">8) Minimal downtime – maksimal fleksibilitet</h2>
        <p>
          Mesoterapi er <i>minimalt invasiv</i>: typisk lidt rødme, hævelse eller små blå mærker
          i dage – fremfor uger. Det gør behandlingen velegnet for dig, der ønsker forbedringer uden
          lang restitution. Mange vælger mesoterapi som “trin 1” og supplerer med
          <router-link :to="{ name:'behandling-dynamic', params:{ type:'filler' } }" class="inline-link"
            aria-label="Filler – informationsside" data-tooltip="Går til: Filler">
            filler</router-link> eller andre målrettede tiltag ved behov.
        </p>
      </div>
    </section>

    <!-- Evidens/forventninger -->
    <section id="evidens" class="section-group">
      <div class="section-text">
        <h2 class="section-title">Evidens og forventningsafstemning</h2>
        <p>
          Resultater afhænger af indikation, produktvalg og teknik. Ved enkelte anvendelser (fx
          injektionslipolyse til dobbelthage, tranexamsyre ved melasma, peptider ved tidligt hårtab)
          er evidensen voksende. Vi arbejder med <b>CE-mærkede præparater</b> og kliniske protokoller,
          og anbefaler ofte serieforløb med løbende evaluering.
        </p>
        <p class="note">
          Oplysningerne er generelle og kan ikke erstatte lægefaglig vurdering. Tilpasning sker
          altid efter individuel konsultation.
        </p>
      </div>
      <div class="section-media">
        <img :src="mediaIllustration" alt="Mesoterapi – skånsom, målrettet behandling" loading="lazy" decoding="async" />
      </div>
    </section>

    <!-- CTA midt i artiklen -->
    <template #cta>
      <h3>Kontakt os og få en personlig vurdering</h3>
      <p>Book en gratis forundersøgelse – behandlingen udføres af erfaren læge.</p>
      <b class="inline-link arrow læs-mere" @click="openBookingFromHero">Book tid</b>
    </template>

    <!-- FAQ -->
    <template #faq>
      <section id="faq" class="faq">
        <h2 class="section-title faq-title"><span>Ofte stillede spørgsmål om</span> <span>mesoterapi</span></h2>
        <div class="faq-list">
          <details v-for="(item, i) in faqs" :key="i" class="faq-item">
            <summary class="faq-q" v-html="item.q"></summary>
            <div class="faq-a"><p v-html="item.a"></p></div>
          </details>
        </div>
      </section>
    </template>
  </VidenArticleLayout>
</template>

<!-- Modulescope: eksportér kortdata til oversigten -->
<script>
import heroSrc from '@/assets/behandlinger/konsultation.webp'

export default {
  name: 'Mesoterapi8Fordele',
  videnCard: {
    slug: 'mesoterapi-8-fordele',
    title: 'Mesoterapi – 8 fordele ved behandlingen',
    excerpt: 'Få et overblik over, hvad mesoterapi kan: hudfornyelse, hårtab, lokal fedtreduktion, pigment m.m.',
    img: heroSrc,
    alt: 'Mesoterapi – mikroinjektioner til hudforbedring',
    cats: ['Mesoterapi'],
    dateISO: '2025-02-15',
    dateHuman: '15. februar 2025',
    date: '15.',
    month: 'feb',
    reading: 7,
    to: { name: 'viden-artikel-mesoterapi-8-fordele' },
  },
}
</script>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import VidenArticleLayout from '@/components/VidenArticleLayout.vue'

/* Assets (du har allerede brugt dette billede i projektet) */
import mediaIllustration from '@/assets/Carts/Skinbooster.webp'

/* Meta/SEO */
const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}/viden/mesoterapi-8-fordele/`
const OG_IMAGE = `${SITE_URL}/og/blog-mesoterapi-8-fordele.webp`
const pageTitle = 'Mesoterapi – 8 fordele ved behandlingen'
const desc =
  'Mesoterapi leverer næring direkte i dermis. Læs om 8 fordele: hudforyngelse, hårtab, lokal fedtreduktion, pigment, cellulite m.m. Klinisk, skånsom behandling.'

/* Dato / læsetid */
const publishedISO = '2025-02-15'
const publishedHuman = '15. februar 2025'
const readingTime = ref(8)

onMounted(() => {
  const text = document.querySelector('.blog-content')?.innerText || ''
  const words = text.trim().split(/\s+/).length
  readingTime.value = Math.max(5, Math.round(words / 200))
})

/* CTA-handler (samme mønster som din template) */
const openBookingFromHero = () => {
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'meso_article' } }))
  window.gtagEvent?.('booking_click', { placement: 'article', component: 'Mesoterapi8Fordele' })
}

/* Relaterede kort (interne services) */
const relatedPosts = [
  {
    to: { name: 'behandling-dynamic', params: { type: 'mesotherapy' } },
    img: heroSrc,
    title: 'Mesoterapi – hud & hår',
    cat: 'Behandling',
  },
  {
    to: { name: 'behandling-dynamic', params: { type: 'prp' } },
    img: mediaIllustration,
    title: 'PRP – vækstfaktorer',
    cat: 'Behandling',
  },
]

/* FAQ */
const faqs = [
  {
    q: '<b>Hvor mange mesoterapi-behandlinger skal jeg have?</b>',
    a: 'Det afhænger af indikation. Hudkvalitet: ofte 2–3 behandlinger med 2–4 ugers interval. Hårtab: 4–8 behandlinger med 1–2 uger imellem. Lokal fedt/cellulite: typisk serieforløb. Efterfølgende vedligehold planlægges individuelt.',
  },
  {
    q: '<b>Gør mesoterapi ondt – og hvor meget downtime er der?</b>',
    a: 'Vi kan lægge bedøvende creme. De fleste oplever let ubehag ved stik. Downtime er typisk rødme/hævelse i 1–3 dage. Almindelige aktiviteter kan som regel genoptages samme dag/ dagen efter.',
  },
  {
    q: '<b>Kan mesoterapi erstatte botox eller filler?</b>',
    a: 'Nej, formålene er forskellige. Mesoterapi forbedrer hudkvalitet og kan mindske fine linjer. Dyb mimikrynkning behandles bedst med <a href="#" onclick="window.dispatchEvent(new CustomEvent(\'open-booking\'))">botox</a>; volumetab/markering løses med filler. Ofte kombineres behandlinger for bedste resultat.',
  },
  {
    q: '<b>Er resultaterne permanente?</b>',
    a: 'Nej. Hud og hår er dynamiske væv. Effekter vedligeholdes med plejeregimer og opfølgende behandlinger (fx hver 6.–12. måned for hud).',
  },
  {
    q: '<b>Hvem bør undgå mesoterapi?</b>',
    a: 'Graviditet/amning, aktiv hudinfektion i området, kendt allergi for indholdsstoffer eller visse systemiske sygdomme kan være kontraindikationer. Den endelige vurdering foretages ved lægelig konsultation.',
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

.note {
  font-style: italic;
  opacity: .9;
}

.sr-only {
  margin-bottom: 15px;
  text-align: left;
}
</style>
