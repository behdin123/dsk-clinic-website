<template>
    <VidenArticleLayout eyebrow="Vidensunivers" :title="pageTitle" author="DK Skønhedsklinik"
        :published="publishedHuman" :publishedISO="publishedISO" :date="'01.'" :month="'okt'" :readingTime="readingTime"
        :categories="['Botox', 'Filler']" :heroSrc="heroSrc" heroAlt="Illustration af forskellen mellem botox og filler"
        :related="relatedPosts" :breadcrumbs="[
            { label: 'Forside', to: { name: 'home' } },
            { label: 'Viden', to: { name: 'viden' } },
            { label: pageTitle }
        ]">
        <!-- Intro -->
        <template #intro>
            <p class="intro">
                <i>Botox eller filler – eller begge dele?</i>
                De to populære kosmetiske behandlinger bliver ofte nævnt i flæng, men de virker på vidt forskellige
                måder.
                I denne guide gennemgår vi forskellene på botox og filler: Hvad egner de sig til, hvordan foregår
                behandlingerne, og hvilke resultater kan du forvente? Læs med og bliv klogere, så du kan træffe det
                rigtige valg for dig.
            </p>
        </template>

        <!-- Body -->
        <section class="section-group">
            <div id="kort-om-botox" class="section-kort-text">
                <h2 class="section-title">Kort om Botox</h2>
                <p><router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                        aria-label="Botox behandling – informations side"
                        data-tooltip="Går til: Botox behandling"><b>Botox:</b></router-link> et muskelafslappende stof
                    (Botulinum toxin type A), der injiceres i små ansigtsmuskler
                    for midlertidigt at lamme dem. Formålet er at glatte de rynker, som musklernes bevægelser forårsager
                    –
                    typisk i den øverste del af ansigtet (pande, mellem bryn, øjenomgivelser). Botox er altså ideel til
                    <i>mimiske rynker</i>, der fremkommer når du fx rynker panden eller kniber øjnene sammen.
                </p>
                <p>En Botox-behandling tager få minutter og virkningen indtræder efter et par dage. Resultatet varer ca.
                    3–4 måneder. Fordelen ved Botox er, at det er en enkel og effektiv måde at se mere udhvilet ud.
                    Ulempen
                    er, at det ikke kan bruges til alt – fx kan Botox ikke give fylde eller løfte hud, den kan kun
                    afspænde muskler.</p>
            </div>

            <div id="kort-om-filler" class="section-kort-text">
                <h2 class="section-title">Kort om filler</h2>
                <p><router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>Filler:</b></router-link> en gele bestående af
                    hyaluronsyre, som sprøjtes ind under rynker eller i områder, man
                    ønsker mere volumen/definition. Filler “fylder” rynker ud indefra eller former ansigtstræk. Typiske
                    anvendelser er <i>læbeforstørrelse</i>, udfyldning af <i>smilerynker/nasolabiale folder</i>,
                    opbygning
                    af <i>kindben</i> eller markering af <i>kæbelinje</i>. Filler kan også bruges under øjnene mod mørke
                    rande og i tindinger, der er blevet hule.</p>
                <p>En filler-behandling kan tage 15–30 min. Resultatet ses med det samme (med forbehold for lidt
                    hævelse).
                    Holdbarheden er 6–12 måneder, nogle gange længere afhængig af område. Fordelen ved filler er, at man
                    kan forme ansigtet subtilt uden kirurgi. Ulempen er, at der kan være lidt downtime med hævelse og at
                    det kræver en dygtig behandler for at se naturligt ud – ellers kan man risikere overfyldte områder.
                </p>
            </div>
        </section>

        <!-- Sammenligning -->
        <section id="botox-vs-filler">
            <h2 class="section-title">Botox vs. filler – hvad skal jeg vælge?</h2>
            <p class="sr-only">Sammenligning af anvendelse, effekt, varighed, velegnede områder, downtime og risici</p>
            <div class="table-wrap">
                <table>
                    <thead>
                        <th scope="col">Botox</th>
                        <th scope="col">Filler</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Anvendelse</b></td>
                            <div>
                                <td>
                                    Udglatning af mimiske rynker (især pande, bryn, øjne). Kan også bruges mod fx
                                    tandkødssmil og spændingshovedpine.
                                </td>
                                <td>
                                    Fyldning af statiske rynker (mund- og næseomgivelser), volumengivning (læber,
                                    kinder, hage) og kontur (kæbe, næsekorrektion m.m.).
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <td><b>Effekt</b></td>
                            <div>
                                <td>Muskler slapper af → huden folder ikke så meget → rynker glattes.</td>
                                <td>Volumen under huden → løfter huden op og udfylder fordybninger/rynker.</td>
                            </div>
                        </tr>
                        <tr>
                            <td><b>Varighed</b></td>
                            <div>
                                <td>3–4 måneder pr. behandling (gentages ca. 2–3 gange/år for vedligeholdelse).</td>
                                <td>6–12 måneder typisk (gentages ca. 1 gang/år pr. område; læber oftere).</td>
                            </div>
                        </tr>
                        <tr>
                            <td><b>Velegnet til</b></td>
                            <div>
                                <td>Panderynker, bekymringsrynke, kragetæer. Forebyggelse af rynkedannelse. <i>Ikke</i>
                                    til
                                    volumentab.
                                </td>
                                <td>Dybderynker omkring mund, læber, kindben, kæbe, hage, tindinger. Genskabe tabt
                                    fylde.
                                    <i>Ikke</i> til aktive rynker forårsaget af muskler.
                                </td>
                            </div>
                        </tr>
                        <tr>
                            <td><b>Downtime</b></td>
                            <div>
                                <td>Næsten ingen. Rødmen kan forekomme i 30 min, sjældent små blå mærker.</td>
                                <td>Mild. Hævelse i få dage (især læber), blå mærker kan forekomme.</td>
                            </div>
                        </tr>
                        <tr>
                            <td><b>Risici</b></td>
                            <div>
                                <td>For meget kan give midlertidig mimik-reduktion (frosset look). Meget sjældent
                                    spredning →
                                    hængende øjenlåg (går over).</td>
                                <td>Overfyldning kan se unaturligt ud. Sjældne risici: infektion, granulomer,
                                    karokklusion
                                    (alvorligt men yderst sjældent – kræver øjeblikkelig lægehjælp og enzym for at
                                    opløse).</td>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Kombination / CTA -->
        <section class="section-group" id="botox-og-filler">
            <div class="section-text">
                <p><strong>Kort sagt:</strong> Botox og filler er <u>ikke</u> konkurrenter men snarere komplimenter. De
                    fleste
                    æstetiske
                    klinikker (som os) anbefaler ofte en kombination for optimalt resultat: Botox i panden/bryn for at
                    glatte
                    øverste ansigt, filler i kind/læbe for at løfte nederste ansigt. Valget afhænger af dit specifikke
                    behov:
                </p>
                <ul>
                    <li>Har du dynamiske rynker når du bevæger ansigtet? – Start med
                        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                            aria-label="Botox behandling – informations side" data-tooltip="Går til: Botox behandling">
                            <b>Botox</b>
                        </router-link>.
                    </li>
                    <li>Har du slap hud eller volumetab, der gør dig hul eller træt? – <router-link
                            :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                            aria-label="Filler behandling – informations side"
                            data-tooltip="Går til: Filler behandling"><b>Filler</b></router-link> er løsningen.</li>
                    <li>Er det både og? – Begge dele, i rigtig rækkefølge og mængde, kan kombineres.</li>
                </ul>
                <p>
                    Hos DK Skønhedsklinik tilbyder vi begge behandlinger og guider dig til, hvad der gavner dig mest.
                    <b class="inline-link" @click="openBookingFromHero">Book en gratis
                        konsultation</b>, så laver vi en skræddersyet plan.
                </p>
            </div>
            <div class="section-media">
                <img :src="klinikSrc" :alt="klinikAlt" />
            </div>
        </section>

        <!-- Eksempel -->
        <section id="kombinationsbehandling">
            <h2 class="section-title">Eksempel – kombinationsbehandling</h2>
            <p>For at illustrere samspillet: Lad os sige, du er i slut-40’erne og oplever både rynker i panden, dyk ved
                mundvigene og generelt “træt” ansigt. En mulig plan kunne være:</p>
            <ul>
                <li><router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                        aria-label="Botox behandling – informations side"
                        data-tooltip="Går til: Botox behandling"><b>Botox:</b></router-link> i panden og mellem bryn for
                    at
                    glatte panderynker og løfte brynene en smule (åbner
                    øjnene op).
                </li>
                <li><router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>Filler:</b></router-link> 1 ml i hver kind for at
                    løfte let
                    og reducere marionetlinjerne, samt 1 ml i læberne
                    for at
                    genvinde tabt fylde og mindske de lodrette linjer på overlæben.</li>
            </ul>
            <p>Resultatet 2 uger senere: Et friskere ansigt hvor panden er glat men stadig let bevægelig, øjnene virker
                mere
                åbne, og de nedadvendte mundvige er væk takket være fylde i kinderne. Læberne ser ud som for 10 år siden
                – ingen
                rynkelinjer, bare en naturlig fylde.</p>
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
                <h2 class="section-title faq-title"><span>Ofte stillede spørgsmål om</span> <span>Botox vs.
                        filler</span></h2>
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
// Denne blok kører i modulescope (ikke setup) og må gerne exportere options.
import heroSrc from '@/assets/Botox.webp'

export default {
    name: 'BotoxVsFiller',
    videnCard: {
        slug: 'botox-vs-filler',
        title: 'Botox vs Filler – Hvad er forskellen?',
        excerpt:
            'Lær hvordan Botox og filler adskiller sig – virkning, anvendelse, holdbarhed og kombination.',
        img: heroSrc, // samme som artikelns hero
        alt: 'Illustration af forskellen mellem botox og filler',
        cats: ['Botox', 'Filler'],
        dateISO: '2025-10-01',
        dateHuman: '1. oktober 2025',
        date: '01.',
        month: 'okt',
        reading: 5,
        to: { name: 'viden-artikel-botox-vs-filler' },
    },
}
</script>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import VidenArticleLayout from '@/components/VidenArticleLayout.vue'

/* Assets */
import klinikSrc from '@/assets/Carts/Skinbooster.webp'
const klinikAlt = 'Illustration af Skinbooster behandling'

/* Meta/SEO */
const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}/viden/botox-vs-filler/`
const OG_IMAGE = `${SITE_URL}/og/blog-botox-vs-filler.webp`
const pageTitle = 'Botox vs Filler – Hvad er forskellen?'
const desc = 'Lær forskellen på Botox og filler: Hvordan de virker, hvad de bruges til, holdbarhed og hvem de egner sig til. Få ekspertråd fra DK Skønhedsklinik.'

/* Dates / reading time */
const publishedISO = '2025-10-01'
const publishedHuman = '1. oktober 2025'
const readingTime = ref(5)

onMounted(() => {
    const text = document.querySelector('.blog-content')?.innerText || ''
    const words = text.trim().split(/\s+/).length
    readingTime.value = Math.max(3, Math.round(words / 200))
})


const openBookingFromHero = () => {
    window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'home_hero' } }))
    // (اختیاری) آنالیتیکس:
    window.gtagEvent?.('booking_click', { placement: 'home_hero', component: 'AppHome' })
}

/* FAQ data */
const faqs = [
    {
        q: '<b>Er filler eller botox bedst mod rynker i panden?</b>',
        a: 'Mod panderynker er <b>Botox</b> klart bedst, da disse rynker skyldes muskelbevægelser. Filler bruges sjældent i panden (kun ved meget dybe furer som ikke kan løftes med Botox alene).'
    },
    {
        q: '<b>Kan man nøjes med filler i stedet for botox omkring øjnene?</b>',
        a: 'Omkring øjnene (kragetæer) er Botox standarden, da linjerne kommer af smil/bevægelse. Filler bruges nogle gange under øjet (tåretrug) for at løfte en fordybning, men ikke i selve smilerynkerne.'
    },
    {
        q: '<b>Hvad koster det at få både botox og filler?</b>',
        a: 'Det afhænger af omfanget. Hos os koster fx 1 område botox 850 kr., og 1 ml filler 3000 kr. Vi laver individuelle tilbud for kombinationer.'
    },
    {
        q: '<b>Er der alderbegrænsning for botox eller filler?</b>',
        a: 'Man skal være myndig (+18 år) for at få behandling. Ellers ingen øvre aldersgrænse – vi behandler efter behov, ikke alder.'
    },
    {
        q: '<b>Kan man “overdo” botox og filler?</b>',
        a: 'Ja. For meget botox kan give et stift udseende – det retter sig i løbet af få måneder. For meget filler kan give unaturlige proportioner. Vi praktiserer “less is more”.'
    }
]

/* Relaterede kort – giver reel værdi at linke til behandlingerne */
const relatedPosts = [
    {
        to: { name: 'behandling-dynamic', params: { type: 'botox' } },
        img: heroSrc,
        title: 'Botox – rynkebehandling',
        cat: 'Behandling',
    },
    {
        to: { name: 'behandling-dynamic', params: { type: 'filler' } },
        img: klinikSrc,
        title: 'Filler – volumen & form',
        cat: 'Behandling',
    },
]

/* JSON-LD */
const stripTags = (s) => String(s || '').replace(/<[^>]*>/g, '').trim()
const faqLd = computed(() => ({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
        '@type': 'Question', name: stripTags(item.q),
        acceptedAnswer: { '@type': 'Answer', text: stripTags(item.a) }
    }))
}))
const articleLd = computed(() => ({
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: pageTitle, description: desc, image: [OG_IMAGE],
    author: { '@type': 'Organization', name: 'DK Skønhedsklinik' },
    publisher: {
        '@type': 'Organization', name: 'DK Skønhedsklinik',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo_blue.aacd9554.svg` }
    },
    datePublished: publishedISO, dateModified: publishedISO,
    mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }
}))
const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forside', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Viden', item: `${SITE_URL}/viden/` },
        { '@type': 'ListItem', position: 3, name: pageTitle, item: CANONICAL }
    ]
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
        { name: 'twitter:image', content: OG_IMAGE }
    ],
    link: [
        { rel: 'canonical', href: CANONICAL },
        { rel: 'alternate', hreflang: 'da', href: CANONICAL }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(articleLd.value) },
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbLd) },
        { type: 'application/ld+json', children: JSON.stringify(faqLd.value) }
    ]
})
</script>

<style scoped lang="scss">
@use '../../css/style.scss';

.sr-only {
    margin-bottom: 15px;
    text-align: left;
}

section ul li {
  margin-bottom: 0 !important;
  margin-top: 0 !important;
}
</style>
