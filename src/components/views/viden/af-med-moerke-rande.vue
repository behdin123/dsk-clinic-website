<template>
    <VidenArticleLayout eyebrow="Vidensunivers" :title="pageTitle" author="DK Skønhedsklinik"
        :published="publishedHuman" :publishedISO="publishedISO" :date="'02.'" :month="'okt'" :readingTime="readingTime"
        :categories="['Mesoterapi', 'Skinbooster']" :heroSrc="heroSrc"
        heroAlt="Illustration af behandling mod mørke rande under øjnene" :related="relatedPosts" :breadcrumbs="[
            { label: 'Forside', to: { name: 'home' } },
            { label: 'Viden', to: { name: 'viden' } },
            { label: pageTitle }
        ]">

        <!-- Intro -->
        <template #intro>
            <p class="intro">
                <i>Spejlet siger, at du ser træt ud – selv når du føler dig frisk.</i>
                Mørke rande under øjnene er en udbredt udfordring. I denne guide forklarer vi kort,
                hvorfor de opstår, og hvordan de kan behandles effektivt – fra kliniske løsninger til
                hjemmepleje. Målet er, at du kan se lige så frisk ud, som du føler dig.
            </p>
        </template>

        <!-- Body -->
        <section>
            <h2 class="section-title">Hvorfor får man mørke rande under øjnene?</h2>
            <p>
                Mørke rande skyldes typisk <i>arv, hudtykkelse og skygge</i> fra en let hulhed under øjet.
                Med alderen mister vi kollagen og fedt, huden bliver <i>tyndere</i>, og fordybningen giver
                en skyggeeffekt. <i>Søvn, stress og dehydrering</i> kan gøre blodkar mere synlige og give et
                blåligt skær.
                <br><br>
                Farven kan stamme fra pigment/kar (synlig misfarvning) – eller fra skygge (hulhed).
                <b>Identificér årsagen</b>: Træk forsigtigt huden ud; forsvinder det mørke, er skygge hovedårsagen
                (volumentab). Bliver farven, er pigment/kar i spil. Ofte er begge dele relevante.
            </p>
            <p>
                <i style="font-weight:bold;">Skyggeeffekt eller pigment?</i><br>
                Skygge (hulhed) behandles bedst med <b>skinbooster under øjnene</b>. Pigment/tynd hud bedres med
                hudkvalitetsbehandling
                og solbeskyttelse. En erfaren behandler kan afklare det ved konsultation.
            </p>
        </section>

        <section>
            <h2 class="section-title">Behandling af mørke rande – hvilke muligheder findes?</h2>
            <p>
                Ofte virker en kombination af klinisk behandling og egenomsorg bedst. De primære muligheder:
            </p>
            <ul>
                <li>

                    <b>
                        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }"
                            class="inline-link" aria-label="Skinbooster – informationsside"
                            data-tooltip="Går til: Skinbooster">Skinbooster</router-link>
                    </b>
                    er meget tynd hyaluronsyre, der injiceres helt overfladisk i huden for at forbedre
                    hudkvalitet, fugt og finere linjer. Ved mørke rande kan en bedre hudstruktur og fugt give et
                    mere lyst og jævnt udtryk, men behandlingen retter ikke pigment eller tydelige
                    blodkar i sig selv.
                </li>
                <li>
                    <router-link :to="{ name: 'behandling-dynamic', params: { type: 'mesotherapy' } }"
                        class="inline-link" aria-label="Mesotherapy – læs mere"
                        data-tooltip="Går til: Mesotherapy"><b>Mesoterapi</b></router-link>:
                    Bedrer <i>hudkvalitet</i> ved tynd hud/fine linjer.
                    Mesoterapi tilfører fugt, vitaminer og antioxidanter. Ofte et forløb over 2–4 sessioner.
                </li>
                <li>
                    <b>Klinisk hudpleje og livsstil</b>: Øjencremer med retinol/vitamin C kan lysne og styrke hud,
                    koffein kan dæmpe hævelse. Brug <b>solcreme</b>, sov nok, drik vand og undgå meget salt – det
                    forebygger poser og forværring af rande.
                </li>
            </ul>
        </section>

        <section>
            <h2 class="section-title">Sådan foregår en skinbooster-behandling under øjnene</h2>
            <p>
                Forundersøgelse hos lægen og plan efter dine behov. På behandlingsdagen lægges evt. bedøvende creme;
                huden desinficeres, og der gives mikroinjektioner i meget små mængder i den overfladiske dermis. Selve
                behandlingen tager typisk 10–20 min. De fleste får et forløb på 2–3 sessioner, men det er noget der skal
                vurderes efter resultatet har vist sig; resultatet bygger sig gradvist op over uger
            </p>
        </section>

        <section>
            <h2 class="section-title">Resultater: hvad kan du forvente?</h2>
            <p>
                Ved behandling med <b>skinbooster</b> kan du forvente forbedret hydrering, elasticitet og hudglød
                omkring øjnene, hvilket ofte gør skyggen mindre markant. Effekten på ren pigmentering er begrænset, så
                ved brune
                mørke
                rande kombineres der ofte med solbeskyttelse, topikale midler eller andre teknologier. Holdbarhed efter
                et
                fuldt forløb er ofte 6–12 måneder, hvorefter en vedligeholdende behandling kan være relevant
            </p>
            <p>
                <b>Sikkerhed og mulige bivirkninger</b><br />
                Forbigående rødme/hævelse, små papler på indstiksstederne og blå mærker kan forekomme og forsvinder
                typisk i løbet af få dage. I erfarne hænder er intradermale HA-mikroinjektioner generelt veltolererede;
                området
                omkring øjnene er tyndt og kræver præcis teknik
            </p>
        </section>

        <section>
            <h2 class="section-title">Næste skridt – friskere øjenomgivelser i sigte</h2>
            <p>
                Skinbooster adresserer primært hudkvalitet/fugt (ikke volumen/pigment), mens mesoterapi kan målrette
                pigment/kar-delen, ofte som led i en kombinationsstrategi Hos DK Skønhedsklinik tilbyder vi en gratis,
                uforpligtende konsultation, hvor vores
                kosmetiske læge vurderer dine øjenomgivelser og rådgiver ærligt om den bedste løsning for dig.
                Book en forundersøgelse i dag – og se frem til <b>klarere, friskere øjne</b>.
            </p>
        </section>


        <!-- CTA midt i artiklen -->
        <template #cta>
            <h3>Kontakt os og få et uforpligtende tilbud</h3>
            <p>Book en gratis forundersøgelse – vi rådgiver ærligt og lægefagligt.</p>
            <b class="inline-link arrow læs-mere" @click="openBookingFromHero">Book tid</b>
        </template>



        <!-- FAQ -->
        <template #faq>
            <section id="faq" class="faq">
                <h2 class="section-title faq-title"><span>Ofte stillede spørgsmål om</span> <span>mørke rande</span>
                </h2>
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


<script>
import heroSrc from '@/assets/Cecilie.webp'

export default {
    name: 'AfMedMoerkeRande',
    videnCard: {
        slug: 'af-med-moerke-rande',
        title: 'Mørke rande under øjnene – årsager og behandling',
        excerpt: 'Træt af mørke rande under øjnene? Læs om hvorfor de opstår, og hvordan de kan behandles effektivt.',
        img: heroSrc, alt: 'Illustration af behandling mod mørke rande under øjnene',
        cats: ['Mesoterapi', 'Skinbooster'], dateISO: '2025-10-02',
        dateHuman: '2. oktober 2025', date: '02.',
        month: 'okt', reading: 8, to: { name: 'viden-artikel-af-med-moerke-rande' },
    },
} 
</script>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import VidenArticleLayout from '@/components/VidenArticleLayout.vue'

/* Assets */
const klinikAlt = 'Illustration af Skinbooster behandling'
/* Meta/SEO */
const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}/viden/af-med-moerke-rande/`
const OG_IMAGE = `${SITE_URL}/og/blog-af-med-moerke-rande.webp`
const pageTitle = 'Mørke rande under øjnene – årsager og behandling'
const desc = 'Træt af at se træt ud? Vi forklarer hvorfor mørke rande opstår og gennemgår de mest effektive behandlinger (filler, PRP m.m.) til at fjerne dem.'

/* Dates / reading time */
const publishedISO = '2025-10-02'
const publishedHuman = '2. oktober 2025'
const readingTime = ref(8)

onMounted(() => {
    const text = document.querySelector('.blog-content')?.innerText || ''
    const words = text.trim().split(/\s+/).length
    readingTime.value = Math.max(3, Math.round(words / 200))
})


const openBookingFromHero = () => {
    window.dispatchEvent(new CustomEvent('open-booking',
        { detail: { source: 'home_hero' } }))
    window.gtagEvent?.('booking_click', { placement: 'home_hero', component: 'AppHome' })
}

/* FAQ data */
const faqs = [
    { q: '<b>Hvad er den typiske årsag til mørke rande?</b>', a: 'Ofte skyldes det en kombination af <i>genetik</i> og <i>volumentab</i> under øjnene, som skaber skygger. Hos nogle er pigmentering eller synlige kar også en stor faktor.' },
    { q: '<b>Kan mørke rande fjernes permanent?</b>', a: 'Ikke altid. Mange får markant bedring, men vedligehold og gode vaner (søvn, solbeskyttelse, skånsom øjenpleje) er vigtige. Valg mellem skinbooster, mesoterapi m.m. afhænger af, om det mest er pigment, kar, hudkvalitet eller skygge.' },
    { q: '<b>Hjælper øjencreme mod mørke rande?</b>', a: 'Klinisk formulerede øjencremer kan forbedre hudens tilstand og lysne huden lidt, men de kan ikke fjerne dybe rande. De er bedst som supplement til professionelle behandlinger og som forebyggelse.' }
]


/* Relaterede kort – giver reel værdi at linke til behandlingerne */

const relatedPosts = [
    { to: { name: 'behandling-dynamic', params: { type: 'filler' } }, img: heroSrc, title: 'Filler – volumen & form', cat: 'Behandling', },
    { to: { name: 'behandling-dynamic', params: { type: 'prp' } }, img: heroSrc, title: 'PRP – genopbygning af hud', cat: 'Behandling', },
]

/* JSON-LD */

const stripTags = (s) => String(s || '').replace(/<[^>]*>/g, '').trim()

const faqLd = computed(() => ({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({ '@type': 'Question', name: stripTags(item.q), acceptedAnswer: { '@type': 'Answer', text: stripTags(item.a) } }))
}))
const articleLd = computed(() => ({
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: pageTitle,
    description: desc,
    image: [OG_IMAGE],
    author: { '@type': 'Organization', name: 'DK Skønhedsklinik' },
    publisher: {
        '@type': 'Organization', name: 'DK Skønhedsklinik',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo_blue.aacd9554.svg` }
    },
    datePublished: publishedISO, dateModified: publishedISO, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }
}))
const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forside', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Viden', item: `${SITE_URL}/viden/` },
        { '@type': 'ListItem', position: 3, name: pageTitle, item: CANONICAL }]
}

/* Head */

useHead({
    title: `${pageTitle} | Vidensunivers`,
    meta: [{ name: 'description', content: desc }, {
        name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    { property: 'og:type', content: 'article' }, { property: 'og:locale', content: 'da_DK' },
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
    { name: 'twitter:image', content: OG_IMAGE }],
    link: [
        { rel: 'canonical', href: CANONICAL },
        { rel: 'alternate', hreflang: 'da', href: CANONICAL }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(articleLd.value) },
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbLd) },
        { type: 'application/ld+json', children: JSON.stringify(faqLd.value) }]
})

</script>

<style scoped lang="scss">
@use '../../css/style.scss';

.sr-only {
    margin-bottom: 15px;
    text-align: left;
}
</style>
