<template>
    <VidenArticleLayout eyebrow="Vidensunivers" :title="pageTitle" author="DK Skønhedsklinik"
        :published="publishedHuman" :publishedISO="publishedISO" :date="'03.'" :month="'okt'" :readingTime="readingTime"
        :categories="['Botox']" :heroSrc="heroSrc" heroAlt="Illustration af Botox injektion" :related="relatedPosts"
        :breadcrumbs="[
            { label: 'Forside', to: { name: 'home' } },
            { label: 'Viden', to: { name: 'viden' } },
            { label: pageTitle }
        ]">



        <!-- Intro -->
        <template #intro>
            <p class="intro"> <i>Rynker – vi får dem alle med tiden, men hvad nu hvis der fandtes en simpel behandling,
                    der kunne udglatte dem?</i> Det gør der: Botox. Botox er blevet et populært værktøj til at skrue
                tiden et par år tilbage på ens udseende. Men måske tænker du: <i>“Er det ikke det der gift, der lammer
                    musklerne? Ser man ikke kunstig ud?”</i> I denne guide forklarer vi alt, hvad du bør vide om
                Botox-behandling mod rynker. Fra hvordan det virker, og hvor længe det holder, til om man kan bevare sin
                naturlige mimik.
            </p>
            <p class="intro">Målet er at give dig et ærligt, lægefagligt indblik, så du kan vurdere, om Botox er
                noget for dig</p>
        </template>

        <!-- Body -->
        <section>
            <h2 class="section-title">Hvad er Botox, og hvordan virker det?</h2>
            <p>
                <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                    aria-label="Botox behandling – informations side"
                    data-tooltip="Går til: Botox behandling"><b>Botox</b></router-link>
                er varemærket for <b>Botulinum Toxin type A</b> – et renset protein, som i meget små doser midlertidigt
                afslapper udvalgte ansigtsmuskler. Når musklen går “på pause”, folder huden mindre, og de <i>mimiske
                    rynker</i>
                glattes. Effekten aftager gradvist, hvorefter musklen fungerer normalt igen. Botox virker på rynker, der
                skyldes
                muskelaktivitet (fx pande, bekymringsrynke og smilerynker ved øjnene), mens rynker og furer fra tyngde
                og tab af
                fylde typisk behandles bedre med
                <router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                    aria-label="Filler behandling – informations side"
                    data-tooltip="Går til: Filler behandling"><b>filler</b></router-link>
                eller andre metoder. Metoden er veldokumenteret gennem årtier – først medicinsk, siden 2002 også
                kosmetisk – og
                har en høj sikkerhedsprofil ved korrekt anvendelse.
            </p>
        </section>

        <section>
            <h2 class="section-title">Hvilke rynker kan behandles med Botox?</h2>
            <p>
                De mest efterspurgte områder er i den øverste ansigtsdel: de vandrette <i>panderynker</i>, det lodrette
                “<i>11-tal</i>”
                mellem brynene (bekymringsrynken) og <i>smilerynker</i>/<i>kragetæer</i> ved øjenkrogene. Her kan
                målrettede små
                doser give et friskere og mere udhvilet udtryk uden at fjerne mimikken. Botox kan desuden hjælpe ved et
                <i>tandkødssmil</i>, hvor en diskret dosis dæmper overlæbens løft, samt ved overaktive
                <i>masseter</i>-muskler,
                der giver kæbespændinger eller en meget markeret kæbelinje. Også de små <i>bunny lines</i> på næseryggen
                kan
                udglattes. Afhængigt af dine mål vurderer vi sammen, hvor behandlingen giver mest mening – og anbefaler
                alternativ behandling, hvis Botox ikke er den rette løsning.
            </p>
        </section>

        <section>
            <h2 class="section-title">Hvordan foregår en Botox-behandling?</h2>
            <p>
                Forløbet starter med en forundersøgelse hos vores kosmetiske læge, hvor ønsker, anatomi og eventuelle
                kontraindikationer gennemgås. I Danmark gælder en lovpligtig <b>48 timers</b> betænkningstid før første
                behandling. På selve dagen desinficeres huden, og små mængder injiceres præcist med en <u>meget tynd
                    nål</u>. De
                fleste oplever kun et kort, let stik og kan fortsætte dagen som normalt. Vi anbefaler, at du undgår hård
                træning
                samme dag og ikke masserer det behandlede område de første timer. Effekten begynder ofte at kunne mærkes
                efter
                få dage og er fuldt udviklet efter <b>10–14 dage</b>, hvor vi tilbyder kontrol og finjustering ved
                behov.
            </p>
        </section>

        <section>
            <h2 class="section-title">Gør det ondt, og er der bivirkninger?</h2>
            <p>
                Ubehaget er beskedent og beskrives oftest som myggestik-lignende prik. Der kan ses let rødme eller
                hævelse lige
                efter behandlingen, og sjældent et lille blåt mærke, som kan dækkes med makeup fra næste dag. I meget få
                tilfælde kan en nærliggende muskel påvirkes kortvarigt, fx et let hængende øjenlåg; tilstanden er
                forbigående og
                forebygges med korrekt teknik og efterråd. Enkelte kan opleve let hovedpine første døgn. Allergiske
                reaktioner
                er ekstremt sjældne. Samlet set regnes Botox for en af de mest sikre kosmetiske behandlinger, når den
                udføres af
                en erfaren behandler.
            </p>
        </section>

        <section>
            <h2 class="section-title">Bevarer man et naturligt udtryk med Botox?</h2>
            <p>
                Ja. Et naturligt resultat afhænger af <b>dosering og teknik</b>. Vores mål er at <u>blødgøre</u>
                rynkerne – ikke
                at fjerne al bevægelse. Vi arbejder konsekvent efter “less is more” og justerer hellere ved 14-dages
                kontrollen
                end at overbehandle. Skulle der opstå en kosmetisk ubalance, som fx et midlertidigt “Mephisto-bryn”, kan
                vi
                finjustere med små tilpasninger i dosis og placering. Resultatet skal være harmonisk, levende og tro mod
                dit
                ansigts naturlige udtryk.
            </p>
        </section>

        <section>
            <h2 class="section-title">Botox som forebyggelse – hvornår giver det mening?</h2>
            <p>
                Det “rigtige” tidspunkt afhænger af dine træk. Ser du rynker i hvile, er behandling relevant nu. Har du
                endnu
                ingen rynker i hvile, kan mikrodoser – ofte kaldet “baby Botox” – være en forebyggende mulighed, men er
                ikke et
                krav. Kosmetisk behandling kræver i Danmark <b>minimum 18 år</b>. Tidlig indsats kan forhindre, at
                enkelte
                rynker graver sig dybt, og kan dermed lette vedligeholdelsen på sigt, men beslutningen bør altid tages
                ud fra en
                individuel vurdering.
            </p>
        </section>

        <section>
            <h2 class="section-title">Andre anvendelser – ud over rynkebehandling</h2>
            <p>
                Botox har også veldokumenterede anvendelser uden for klassisk rynkebehandling. Ved <i>hyperhidrose</i>
                kan
                injektioner i fx armhuler dæmpe svedproduktionen i <b>4–6 måneder</b> ad gangen og markant forbedre
                hverdagen
                for dem, der er hårdt ramt. Ved <i>kronisk migræne</i> bruges Botox medicinsk i et fast mønster over
                pande,
                tindinger og nakke; kosmetiske behandlinger i pande/bryn kan for nogle have en gavnlig sideeffekt på
                spændingshovedpine. Injektion i <i>masseter</i> kan reducere tænderskæren og afhjælpe kæbespændinger –
                og som
                sideeffekt slanke en meget kraftig kæbelinje. Endelig kan et stramt <i>platysma</i> på halsen behandles
                i
                udvalgte tilfælde (ofte kaldet et Nefertiti-løft). Vi rådgiver altid ud fra indikation, sikkerhed og
                forventet
                effekt.
            </p>
        </section>

        <section>
            <h2 class="section-title">Sikkerhed og lovkrav</h2>
            <p>
                Hos DK Skønhedsklinik udføres behandlingerne af vores erfarne kosmetiske læge i overensstemmelse med
                danske
                regler, herunder forundersøgelse og <b>48 timers</b> betænkningstid før første behandling. Vi anvender
                EU-godkendte produkter (fx Botox©/Azzalure©), følger strenge hygiejneprocedurer og er tilgængelige ved
                akutte
                spørgsmål. Skulle noget uventet opstå, står vi klar til at hjælpe – tryghed og kvalitet er altid
                førsteprioritet.
            </p>
        </section>

        <section>
            <h2 class="section-title">Konklusion – friskere udseende med fornuft</h2>
            <p>
                Korrekt udført er Botox et veldokumenteret, skånsomt redskab til at blødgøre mimiske rynker og fremhæve
                et
                friskere udtryk – uden at ændre, hvem du er. Vil du vide, hvad
                <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
                    aria-label="Botox behandling – informations side"
                    data-tooltip="Går til: Botox behandling"><b>Botox</b></router-link>
                – eller eventuelt
                <router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
                    aria-label="Filler behandling – informations side"
                    data-tooltip="Går til: Filler behandling"><b>filler</b></router-link>
                – kan gøre for dig? Book en uforpligtende forundersøgelse og få ærlig rådgivning samt en plan, der
                passer til
                dine træk, dine ønsker og din hverdag.
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
import heroSrc from '@/assets/Cecilie-botox.webp'

export default {
    name: 'HvadErBotox',
    videnCard: {
        slug: 'hvad-er-botox',
        title: 'Hvad er Botox? – guide til rynkebehandling',
        excerpt: 'Overvejer du Botox mod rynker? Læs hvordan behandlingen virker, hvor længe den holder, og hvordan du bevarer et naturligt resultat.',
        img: heroSrc, alt: 'Illustration af Botox injektion',
        cats: ['Botox'],
        dateISO: '2025-10-03',
        dateHuman: '3. oktober 2025',
        date: '03.',
        month: 'okt',
        reading: 12,
        to: { name: 'viden-artikel-hvad-er-botox' },
    },
} 
</script>

<script setup>

import { ref, computed, onMounted, nextTick } from 'vue'
import { useHead } from '@unhead/vue'
import VidenArticleLayout from '@/components/VidenArticleLayout.vue'

/* Assets */
const klinikAlt = 'Illustration af Skinbooster behandling'

/* Meta/SEO */
const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}/viden/hvad-er-botox/`
const OG_IMAGE = `${SITE_URL}/og/blog-hvad-er-botox.webp`
const pageTitle = 'Hvad er Botox? – guide til rynkebehandling'
const desc = 'Få en gennemgang af Botox: Hvad det er, hvilke rynker det virker på, hvordan behandlingen foregår og om du bevarer et naturligt ansigtsudtryk. Få svar her.'

/* Dates / reading time */
const publishedISO = '2025-10-03'
const publishedHuman = '3. oktober 2025'
const readingTime = ref(12)

onMounted(() => {
    const text = document.querySelector('.blog-content')?.innerText || ''
    const words = text.trim().split(/\s+/).length
    readingTime.value = Math.max(3, Math.round(words / 200))
})


const openBookingFromHero = () => {
    window.dispatchEvent(
        new CustomEvent('open-booking',
            { detail: { source: 'home_hero' } }))
    window.gtagEvent?.('booking_click',
        { placement: 'home_hero', component: 'AppHome' })
}


/* Relaterede kort */
const relatedPosts = [{
    to: { name: 'behandling-dynamic', params: { type: 'botox' } },
    img: heroSrc, title: 'Botox – rynkebehandling',
    cat: 'Behandling',
},
{ to: { name: 'behandling-dynamic', params: { type: 'filler' } }, img: heroSrc, title: 'Filler – volumetab', cat: 'Behandling', },]


/* JSON-LD */

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
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo_blue.aacd9554.svg` }
    }, datePublished: publishedISO, dateModified: publishedISO, mainEntityOfPage:
        { '@type': 'WebPage', '@id': CANONICAL }
}))



const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forside', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Viden', item: `${SITE_URL}/viden/` },
        { '@type': 'ListItem', position: 3, name: pageTitle, item: CANONICAL }
    ]
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
    { rel: 'alternate', hreflang: 'da', href: CANONICAL }
    ],

    script: [
        { type: 'application/ld+json', children: JSON.stringify(articleLd.value) },
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbLd) }]

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
