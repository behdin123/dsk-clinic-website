<template>
    <VidenArticleLayout eyebrow="Vidensunivers" :title="pageTitle" author="DK Skønhedsklinik"
        :published="publishedHuman" :publishedISO="publishedISO" :date="'05.'" :month="'okt'" :readingTime="readingTime"
        :categories="['Botox', 'Filler']" :heroSrc="heroSrc" heroAlt="Illustration af ansigtets anatomi"
        :related="relatedPosts"
        :breadcrumbs="[{ label: 'Forside', to: { name: 'home' } }, { label: 'Viden', to: { name: 'viden' } }, { label: pageTitle }]">


        <!-- Intro -->

        <template #intro>
            <p class="intro">

                <i>Har du nogensinde undret dig over, hvorfor en filler skal lægges bestemte steder, eller hvorfor Botox
                    i ét område kan løfte et andet?</i> Hemmeligheden ligger i ansigtets anatomi. <b>Dit ansigt består
                    af et finafstemt samspil mellem knogler, muskler, fedtlag og hud</b> – og kendskab til den struktur
                er afgørende, når man udfører kosmetiske behandlinger. I denne artikel tager vi dig med “bag facaden” og
                forklarer ansigtets opbygning. <br><br> Det er ikke blot nørdet viden; det vil hjælpe dig til at forstå,
                <i>hvorfor</i> vi foreslår bestemte behandlinger, og <i>hvordan</i> vi opnår et naturligt resultat ved
                at arbejde med – og ikke imod – din anatomi. Vores erfarne læge deler desuden, hvordan anatomisk viden
                øger både effekt og sikkerhed, når du får lavet noget. Tag med på en lille anatomirejse i skønhedens
                tegn!
            </p>
        </template>

        <!-- Body -->
        <section>
            <h2 class="section-title">Ansigtets lag – knogler, muskler, fedtpuder og hud</h2>
            <p>
                Tænk ansigtet som et hus: Knogler = skelet, muskler = bevægelse, fedtpuder = polstring, hud = facade.
                For pæne, naturlige resultater skal vi forstå, hvad der ligger under huden. Kort fortalt:
            <ul>
                <li>
                    <b>Knoglerne:</b> Pandeben, kindben, kæbe og næse udgør fundamentet. Knoglerne former dine konturer
                    og
                    hvor “defineret” ansigtet ser ud. Med alderen svinder dele af knoglen – især kæbe og kindben –
                    hvilket
                    kan give mindre markante træk. Dybt lagt <router-link
                        :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>filler</b></router-link> ved kindben/kæbelinje kan
                    kompensere ved
                    nænsomt
                    at “genopbygge” fundamentet.
                </li>

                <div class="section-media">
                    <img :src="AnatomiSrc1" :alt="AnatomiSrc1Alt" />
                </div>

                <li>
                    <b>Musklerne:</b> Små mimiske muskler styrer brynløft, smil, knib m.m. Når de arbejder, opstår
                    <i>dynamiske rynker</i> (fx kragetæer og panderynker). Præcis placering og dybde er nøglen i
                    <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                        aria-label="Botox behandling – informations side"
                        data-tooltip="Går til: Botox behandling"><b>Botox-behandling:</b></router-link> Vi dæmper den
                    relevante
                    del af musklen – ikke nabomuskler – for et roligt,
                    naturligt udtryk.
                </li>

                <li>
                    <b>Fedtdepoter/fedtpuder:</b> Små “puder” giver blødhed og ungdommelig fylde – især i kinder,
                    tindinger
                    og omkring øjne. Med tiden skrumper og synker de (tyngdekraft), så volumen flytter sig nedad.
                    Derfor opstår fx nasolabiale folder og “hamsterposer”. Her virker <router-link
                        :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>filler</b></router-link> bedst ved at
                    genopbygge
                    kind/tinding – ikke kun ved at fylde i selve linjen.
                </li>

                <div class="section-media">
                    <img :src="AnatomiSrc2" :alt="AnatomiSrc2Alt" />
                </div>

                <li>
                    <b>Hud og underhud:</b> Hudens kvalitet (kollagen, elastin, fugt) påvirker det, vi ser. Ofte følger
                    huden
                    det, der sker under den: Når vi giver volumen, løfter overfladen sig. Har du løs, overskydende hud,
                    arbejder vi direkte på huden – fx laser,
                    <router-link :to="{ name: 'behandling-dynamic', params: { type: 'microneedling' } }"
                        class="inline-link" aria-label="Microneedling behandling – informations side"
                        data-tooltip="Går til: Microneedling behandling"><b>microneedling</b></router-link>
                    eller hudopstramning. Overhudens porer/pigment kræver hudpleje og peelings – ikke Botox/filler.
                </li>
            </ul>
            </p>

            <p>
                <b>Essensen:</b> Ansigtet er lag-på-lag. Vi spørger: Er det <i>volumen</i> (knogle/fedt), <i>mimik</i>
                (muskel)
                eller <i>hudkvalitet</i>, der dominerer – eller en kombination? Planen tilpasses lagene, så resultatet
                bliver
                harmonisk.
            </p>

            <div class="section-media">
                <img :src="AnatomiSrc3" :alt="AnatomiSrc3Alt" />
            </div>
        </section>

        <section>
            <h2 class="section-title">Hovedområder i ansigtet og deres anatomi</h2>
            <p>
                Det er nyttigt at se ansigtet i regioner. Her er et hurtigt overblik – fra toppen og ned:
            </p>
            <ul>
                <li>
                    <b>Øvre ansigt (pande og tindinger):</b> Panden styres af den store frontalis-muskel – overaktivitet
                    giver
                    vandrette linjer. <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }"
                        class="inline-link" aria-label="Botox behandling – informations side"
                        data-tooltip="Går til: Botox behandling"><b>Botox</b></router-link> her glatter typisk
                    effektivt.
                    Tindinger mister ofte fedt med alderen,
                    hvilket
                    kan give indfald og “skelettede” sider – <router-link
                        :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>filler</b></router-link> kan diskret genskabe
                    fylden.
                </li>

                <li>
                    <b>Mellem ansigt (øjenomgivelser og kinder):</b> Øjenområdet har meget tynd hud og ringmuskel
                    omkring øjet
                    (orbicularis oculi), som skaber smilerynker. Under øjet kan en fordybning (tear trough) og poser
                    skyldes
                    fedtflytning. Vi kombinerer <router-link
                        :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>filler</b></router-link> i fordybningen med
                    hudforbedring
                    (Skinbooster/PRP) og
                    eventuelt
                    <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                        aria-label="Botox behandling – informations side"
                        data-tooltip="Går til: Botox behandling"><b>Botox</b></router-link> ved siden af øjet – altid
                    med
                    respekt for kar og nerver. Kinder løftes bedst ved at
                    genskabe
                    strukturen på kindbenet og lateralt; det reducerer linjer som følge af tyngde, fremfor at
                    “overfylde” selve
                    folden.
                </li>

                <li>
                    <b>Nedre ansigt (mund, kæbelinje, hage):</b> Læber består mest af muskel og blødt væv –
                    <b>læbefiller</b>
                    ændrer form/volumen, men kræver kendskab til kar-nervenet. Kæbelinjen kan styrkes med dyb
                    <router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>filler</b></router-link>
                    langs knoglen; hos nogle hjælper <b>Botox</b> i platysma (Nefertiti-løft) på nedtrækket fra halsen.
                    Hagens proportioner påvirker profilen markant – en lille mængde dyb <b>hagefiller</b> kan give flot
                    balance
                    til læber og næse.
                </li>
            </ul>
        </section>

        <section>
            <h2 class="section-title">Symmetri og proportioner</h2>
            <p>
                Ingen har perfekt symmetri – målet er et mere <i>balanceret indtryk</i>. Vi retter skævheder nænsomt:
            </p>
            <ul class="no-margin">
                <li><b>Bryn:</b> Et lavere bryn kan løftes en anelse med målrettet <router-link
                        :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                        aria-label="Botox behandling – informations side"
                        data-tooltip="Går til: Botox behandling"><b>Botox</b></router-link>.</li>
                <li><b>Kæbe/hage:</b> Manglende fylde i den ene side kan udlignes med <router-link
                        :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>filler</b></router-link>.</li>
                <li><b>Proportioner:</b> Vi holder øje med den klassiske tredeling i højden og læbernes 2:1-forhold
                    (underlæbe lidt større end overlæbe) for et naturligt udtryk.</li>
                <li><b>Folder:</b> Nasolabial- og marionetlinjer blødgøres – ikke fjernes – så ansigtet bevarer liv og
                    mimik.
                </li>
            </ul>
        </section>

        <section>
            <h2 class="section-title">Aldersforandringer i ansigtets anatomi</h2>
            <p>
                Hvad ændrer sig typisk – og hvad gør vi?
            <ul class="no-margin">
                <li><b>Knogler:</b> Let resorption i kind/kæbe → mindre definition. <i>Løsning:</i> Dyb <router-link
                        :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>filler</b></router-link>
                    til
                    struktur.</li>
                <li><b>Muskler:</b> Overaktiv mimik (fx pande) → linjer sætter sig. <i>Løsning:</i>
                    <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                        aria-label="Botox behandling – informations side"
                        data-tooltip="Går til: Botox behandling"><b>Botox</b></router-link> i
                    udvalgte
                    områder.
                </li>
                <li><b>Fedtdepoter:</b> Volumentab og “sydgående” væv → folder/poser. <i>Løsning:</i> <router-link
                        :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                        aria-label="Filler behandling – informations side"
                        data-tooltip="Går til: Filler behandling"><b>filler</b></router-link> i
                    bærende
                    punkter.</li>
                <li><b>Hud:</b> Mindre kollagen/elastin/fugt → fine linjer og løshed. <i>Løsning:</i> hudrettet
                    behandling
                    (
                        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
                        aria-label="skinbooster behandling – informations side"
                        data-tooltip="Går til: Skinbooster behandling"><b>Skinbooster</b></router-link>, 
                        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'microneedling' } }"
                        class="inline-link" aria-label="Microneedling behandling – informations side"
                        data-tooltip="Går til: Microneedling behandling"><b>microneedling</b></router-link>) – evt. kombineret med opstramning.</li>
            </ul class="no-margin">
            </p>

            <p>
                Ofte er det kombinationen, der giver det <i>naturligt unge</i> resultat: struktur (filler) + ro på mimik
                (Botox)
                +
                bedre hudkvalitet (Skinbooster/PRP/microneedling).
            </p>
        </section>

        <section>
            <h2 class="section-title">Hvordan vi anvender anatomisk viden i klinikken</h2>
            <p>
                Vores læge arbejder konsekvent lag-for-lag – med sikkerhed først og et roligt, naturligt udtryk som mål:
            <ul class="no-margin">
                <li><b>Sikkerhed:</b> Vi undgår kar-tætte zoner, bruger sterile teknikker og vælger nål/kanyle efter
                    område.
                </li>
                <li><b>Korrekt plan:</b> Tear trough med stump kanyle; fine linjer meget overfladisk; kindben dybt på
                    knoglen.
                </li>
                <li><b>Gradvis skulpturering:</b> Små, kontrollerede mængder – hellere bygge op over tid end at
                    “overfylde”.
                </li>
                <li><b>Tryghed:</b> Vi informerer undervejs og vurderer reaktioner – hvad er normalt, og hvornår skal vi
                    se dig.
                </li>
            </ul>
            </p>

            <div class="section-media">
                <img :src="AnatomiSrc4" :alt="AnatomiSrc4Alt" />
            </div>

            <p>
                <b>Anatomi + æstetik:</b> Vi forener faglig viden med blik for proportioner. Eksempel: Ved ønsket om
                større
                læber
                vurderer vi også hage/kæbe – ofte giver en lille <b>hagefiller</b> mere harmonisk profil end kun volumen
                i
                læber.
            </p>
        </section>

        <section>
            <h2 class="section-title">Sikkerhed og anatomisk ekspertise</h2>
            <p>
                Anatomien er vores sikkerhedsnet. Vi kender “farezoner”, planlægger nødprocedurer (som vi heldigvis
                sjældent
                får brug for) og siger nej, hvis ønsket løsning ikke matcher anatomien. Det er sådan, vi beskytter både
                resultatet og dig.
            </p>
        </section>

        <section>
            <h2 class="section-title">Konklusion – vejen til et harmonisk ansigt</h2>
            <p>
                Smukke, naturlige resultater skabes ved at arbejde i de rigtige <i>lag</i> – med respekt for dine
                proportioner.
                Vores tilgang kombinerer <b>Botox</b> til mimik, <b>filler</b> til struktur og hudforbedrende
                behandlinger
                (fx 
                <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
                        aria-label="skinbooster behandling – informations side"
                        data-tooltip="Går til: Skinbooster behandling"><b>Skinbooster</b></router-link>, 
                        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'prp' } }" class="inline-link"
                        aria-label="PRP behandling – informations side"
                        data-tooltip="Går til: PRP behandling"><b>PRP</b></router-link>, 
                        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'microneedling' } }" class="inline-link"
                        aria-label="Microneedling behandling – informations side"
                        data-tooltip="Går til: microneedling behandling"><b>microneedling</b></router-link>) for kvaliteten i overfladen. Vil du have en ærlig, anatomisk styret
                plan?
                Book en uforpligtende forundersøgelse – så gennemgår vi din ansigtsanatomi og lægger en plan, der ligner
                dig.
            </p>
        </section>


        <!-- CTA midt i artiklen -->
        <template #cta>
            <h3>Kontakt os og få et uforpligtende tilbud</h3>
            <p>Book en gratis forundersøgelse – vi rådgiver ærligt og lægefagligt.</p>
            <b class="inline-link arrow læs-mere" @click="openBookingFromHero">Book tid</b>
        </template>
    </VidenArticleLayout>


</template>


<script>

// Denne blok kører i modulescope (ikke setup) og må gerne exportere options. 
import heroSrc from '@/assets/artikler/Emma-3.webp'

/* Assets */
import AnatomiSrc1 from '@/assets/artikler/Emma.webp'
const AnatomiSrc1Alt = 'Illustration af Emma ansigts model'

import AnatomiSrc2 from '@/assets/artikler/Emma-1.webp'
const AnatomiSrc2Alt = 'Illustration af Emma ansigts model'

import AnatomiSrc3 from '@/assets/artikler/Emma-2.webp'
const AnatomiSrc3Alt = 'Illustration af Emma ansigts model'

import AnatomiSrc4 from '@/assets/artikler/Emma-4.webp'
const AnatomiSrc4Alt = 'Illustration af Emma ansigts model'

export default {
    name: 'AnsigtetsAnatomi',
    videnCard: {
        slug: 'ansigtets-anatomi',
        title: 'Ansigtets anatomi – forstå dit ansigt før kosmetisk behandling',
        excerpt: 'Lær hvordan ansigtets knogler, muskler, fedt og hud spiller sammen. Få indblik i, hvorfor anatomisk viden er nøglen til naturlige, sikre kosmetiske behandlinger.',
        img: heroSrc, alt: 'Illustration af ansigtets anatomi',
        cats: ['Botox', 'Filler'],
        dateISO: '2025-10-05',
        dateHuman: '5. oktober 2025', date: '05.',
        month: 'okt',
        reading: 15, to: { name: 'viden-artikel-ansigtets-anatomi' },
    },
}


</script>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import VidenArticleLayout from '@/components/VidenArticleLayout.vue'

/* Meta/SEO */
const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}/viden/ansigtets-anatomi/`
const OG_IMAGE = `${SITE_URL}/og/blog-ansigtets-anatomi.webp`
const pageTitle = 'Ansigtets anatomi – forstå dit ansigt før kosmetisk behandling'
const desc = 'En dybdegående guide til ansigtets anatomi og hvorfor kendskab til knogler, muskler, fedt og hudlag er afgørende for naturlige, sikre kosmetiske behandlinger.'


/* Dates / reading time */
const publishedISO = '2025-10-05'
const publishedHuman = '5. oktober 2025'
const readingTime = ref(15)

onMounted(() => {
    const text = document.querySelector('.blog-content')?.innerText || ''
    const words = text.trim().split(/\s+/).length
    readingTime.value = Math.max(3, Math.round(words / 200))
})

const openBookingFromHero = () => {
    window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'home_hero' } }))
    window.gtagEvent?.('booking_click', { placement: 'home_hero', component: 'AppHome' })
}


/* Relaterede kort */
const relatedPosts = [{
    to: { name: 'behandling-dynamic', params: { type: 'botox' } },
    img: heroSrc,
    title: 'Botox – rynker & løft',
    cat: 'Behandling',
},
{
    to: { name: 'behandling-dynamic', params: { type: 'filler' } },
    img: heroSrc,
    title: 'Filler – kontur & fylde',
    cat: 'Behandling',
},
]


/* JSON-LD */
const articleLd = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: pageTitle,
    description: desc,
    image: [OG_IMAGE],
    author: { '@type': 'Organization', name: 'DK Skønhedsklinik' },
    publisher: { '@type': 'Organization', name: 'DK Skønhedsklinik', logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo_blue.aacd9554.svg` } },
    datePublished: publishedISO, dateModified: publishedISO, mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }
}))


const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [{
        '@type': 'ListItem',
        position: 1,
        name: 'Forside',
        item: SITE_URL
    },
    {
        '@type': 'ListItem',
        position: 2, name:
            'Viden', item:
            `${SITE_URL}/viden/`
    },
    {
        '@type': 'ListItem',
        position: 3,
        name: pageTitle,
        item: CANONICAL
    }]
}

/* Head */

useHead({
    title: `${pageTitle} | Vidensunivers`,
    meta: [{ name: 'description', content: desc },
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
    { name: 'twitter:image', content: OG_IMAGE }],
    link: [{ rel: 'canonical', href: CANONICAL },
    { rel: 'alternate', hreflang: 'da', href: CANONICAL }],
    script: [{
        type: 'application/ld+json',
        children: JSON.stringify(articleLd.value)
    },
    {
        type: 'application/ld+json',
        children: JSON.stringify(breadcrumbLd)
    }]
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
</style>
