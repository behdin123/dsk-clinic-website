<template>
    <div class="OmOS">
        <div id="Art-works-dark-version-image" class="bg-img img">
            <div class="OmOsBannerDiv">
                <div class="Bannertxt">
                    <h1 data-aos="fade-right" data-aos-duration="3000">Mød Arash</h1>
                    <p>"Skønhed findes i alle mennesker, men hvis der er noget, du ønsker at forbedre eller justere for
                        at føle dig mere tilpas i dit udseende, står jeg klar til at hjælpe dig på en tryg og
                        professionel måde."</p>

                    <p>
                        Med mere end 20 års erfaring inden for kosmetiske behandlinger har Arash en dyb forståelse for,
                        hvordan skønhed kan styrke både selvtillid og velvære.
                        Hans filosofi bygger på en respektfuld og individuel tilgang,
                        hvor målet er at fremhæve din naturlige skønhed og hjælpe dig med at føle dig tilpas i din egen
                        hud.
                    </p>

                    <p>
                        Som klinikkens ansvarlige læge prioriterer Arash tryghed, æstetik og høj faglighed i alle
                        behandlinger.
                        Uanset om du ønsker en diskret forbedring eller en større forandring, kan du være sikker på at
                        være i erfarne hænder.
                    </p>
                </div>

                <div class="BannerPng">
                    <p>Klinikkens ansvarlige læge</p>
                    <p>Arash Bagheri</p>
                    <img src="../../assets/OmOsArash.webp" alt="">
                </div>
            </div>
            <div class="scroll-indicator">
                <span>scroll ned</span>
                <div class="line"></div>
            </div>
        </div>

        <!-- Om DK Skønhedsklinik (موجود) -->
        <div class="container Multimediedesigner VIKING OmKlinik">
            <div class="VIKING-image">
                <img data-aos="fade-right" class="first-img" src="../../assets/Clinic_consultation_2.webp" width="100%"
                    height="auto">
            </div>
            <div class="txt h1 h2 first-txt margin-left">
                <h3 data-aos="fade-up" data-aos-duration="1000">Vores klinikker</h3>
                <h2 data-aos="fade-up" data-aos-duration="1000">Om DK Skønhedsklinik</h2>

                <p data-aos="fade-up" data-aos-duration="1000">
                    <b>DK Skønhedsklinik</b> har klinikker i både <b>Vejle</b> og <b>Esbjerg</b>, hvor vi tilbyder
                    professionelle kosmetiske behandlinger i trygge og moderne omgivelser.
                    Vores klinikker er indrettet med fokus på komfort og kvalitet, så du kan føle dig godt tilpas fra
                    det øjeblik, du træder ind. Vi arbejder altid
                    med højeste faglighed for at sikre de bedste resultater for vores kunder.
                </p>

                <p>
                    Uanset om du ønsker en <b>Rynkebehandling</b>, <b>filler</b>, <b>skinbooster</b> eller andre
                    æstetiske forbedringer, er du i kyndige hænder hos vores specialuddannede behandlere.
                    Hos DK Skønhedsklinik er vores mission at hjælpe dig med at fremhæve din naturlige skønhed på en
                    sikker og professionel måde.
                </p>

                <p>
                    Vi tror på, at skønhed ikke handler om forandring, men om at fremhæve de træk, der gør dig unik.
                    Vores behandlinger er skræddersyet til den enkelte kunde, og vi lægger stor vægt på at skabe et
                    <b>harmonisk</b>
                    og <b>naturligt</b> udseende, der passer til din ansigtsform og dine ønsker.
                </p>
            </div>
        </div>

        <!-- Clinics Mini (Esbjerg + Vejle) -->
        <section class="clinics-mini" aria-labelledby="clinics-title">
            <div class="container clinics-mini__inner">
                <h2 id="clinics-title" class="clinics-mini__title" data-aos="fade-up" data-aos-duration="800">
                    Vores afdelinger
                </h2>

                <div class="clinics-mini__grid" role="list">
                    <!-- Card: Esbjerg -->
                    <router-link v-for="c in clinics" :key="c.slug" class="clinics-mini__card"
                        :to="c.route ? { name: c.route } : c.href" role="listitem"
                        :aria-label="`Se klinikken i ${c.city}`" data-aos="fade-up" data-aos-duration="900">
                        <figure class="clinics-mini__figure">
                            <div class="clinics-mini_card-hover">
                                <h3>{{ c.city }}</h3>
                            </div>
                            <img :src="c.img" :alt="c.alt" loading="lazy" />
                            <figcaption class="clinics-mini__caption">
                                <span class="clinics-mini__city">{{ c.city }}</span>
                                <span class="clinics-mini__cta">Se klinikken</span>
                            </figcaption>
                        </figure>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Patientinformation (جدید) -->
        <section id="patientinformation" class="container patientinfo" aria-labelledby="pi-title">
            <header class="pi-header" data-aos="fade-up" data-aos-duration="800">
                <h2 id="pi-title">Patientinformation (lovpligtigt)</h2>
                <p class="pi-intro">
                    Hos os er tryghed, naturlighed og lægefaglighed i centrum. Her finder du kort og klart
                    information om behandler, samtykke, betænkningstid, aldersgrænser, journal og dine
                    rettigheder.
                </p>
            </header>

            <div class="pi-grid">
                <article class="pi-card" data-aos="fade-up" data-aos-duration="800">
                    <h3>Hvem udfører behandlingerne?</h3>
                    <p>
                        Alle behandlinger udføres af klinikkens ansvarlige læge, <b>Arash Bagheri</b>.
                        Du kan slå op i Autorisationsregisteret for at se autorisationsstatus.
                    </p>
                    <p class="pi-links">
                        <a href="https://autregweb.sst.dk/Authorization.aspx?id=081Q1" target="_blank" rel="noopener">
                            Autorisationsregister (STPS)
                        </a>
                    </p>
                </article>

                <article class="pi-card" data-aos="fade-up" data-aos-duration="900">
                    <h3>Informeret samtykke</h3>
                    <ul class="pi-list">
                        <li>Du modtager <b>mundtlig</b> information om effekt, risici, alternativer
                            og efterpleje ved forundersøgelse med vores læge.</li>
                        <li>Du har også mulighed for at spørge efter en <b>skriftlig</b> beskrivelse af effect, risici,
                            alternativer
                            og efterpleje</li>
                    </ul>
                </article>

                <article class="pi-card" data-aos="fade-up" data-aos-duration="1000">
                    <h3>Betænkningstid</h3>
                    <ul class="pi-list">
                        <li><b>Større behandlinger:</b> 1 uge fra mundtlig information til samtykke.</li>
                        <li><b>Mindre behandlinger (fx botulinumtoxin):</b> 48 timer til samtykke.</li>
                    </ul>
                </article>

                <article class="pi-card" data-aos="fade-up" data-aos-duration="1100">
                    <h3>Øvrige forhold</h3>
                    <ul class="pi-list">
                        <li><b>Aldersgrænse:</b> Ingen kosmetiske behandlinger til personer under 18 år.</li>
                        <li><b>Journal & fotos:</b> Foto før (og ved kontrol efter) indgår i journalen iht. reglerne.
                        </li>
                        <li><b>Hygiejne:</b> Sterilt engangsudstyr anvendes og genbruges aldrig.</li>
                    </ul>
                </article>
            </div>
        </section>

        <!-- Timeline: Dit forløb med lægen (جدید) -->
        <section class="patientinfo container slice is-steps" aria-labelledby="pi-flow-title">
            <div class="slice-inner column">
                <h2 id="pi-flow-title" class="slice-title" data-aos="fade-up" data-aos-duration="800">Dit forløb med
                    lægen</h2>
                <ol class="steps-flow">
                    <div class="steps-rail" aria-hidden="true"></div>
                    <li class="step-card" data-aos="fade-up" data-aos-duration="800">
                        <div class="step-badge" aria-hidden="true">
                            <p>1</p>
                        </div>
                        <div class="step-content">
                            <h4 class="step-title">Book en <br> Forundersøgelse</h4>
                            <p class="step-text"> Lægen guider dig fra starten. Vi gennemgår din ønsker, helbred og
                                snakker om realistiske resultater, og laver
                                journalføring.</p>
                        </div>
                    </li>
                    <li class="step-card" data-aos="fade-up" data-aos-duration="900">
                        <div class="step-badge" aria-hidden="true">
                            <p>2</p>
                        </div>
                        <div class="step-content">
                            <h4 class="step-title">Behandlingsplan & betænkningstid</h4>
                            <p class="step-text">De fleste injektionsbehandlinger kræver <b>48 timers</b>
                                betænkningstid, så du har god mulighed for at overveje din behandlingsplan</p>
                        </div>
                    </li>
                    <li class="step-card" data-aos="fade-up" data-aos-duration="1000">
                        <div class="step-badge" aria-hidden="true">
                            <p>3</p>
                        </div>
                        <div class="step-content">
                            <h4 class="step-title">Behandling & opfølgning med lægen</h4>
                            <p class="step-text">Behandlingen udføres af samme læge. Efter behandlingen sørger lægen for
                                grundig opfølgning og du får vejledning til det videre forløb</p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>

        <!-- FAQ (جدید) -->
        <section v-if="faqs.length" id="faq" class="faq">
            <h2 class="section-title">Ofte stillede spørgsmål</h2>

            <div class="faq-list">
                <details v-for="(item, i) in faqs" :key="i" class="faq-item">
                    <!-- vi bevarer <b> fra COPY_SECTION, derfor v-html -->
                    <summary class="faq-q" v-html="item.q"></summary>
                    <div class="faq-a">
                        <p v-for="(p, j) in (Array.isArray(item.a) ? item.a : [item.a])" :key="j" v-html="p" />
                    </div>
                </details>
            </div>
        </section>

        <!-- CTA (ساده و سازگار با روال فعلی سایت) -->
        <div class="container callout-cta" data-aos="fade-up" data-aos-duration="800">
            <div>
                <h3 class="cta-note">De fleste behandlinger kræver forundersøgelse og betænkningstid</h3>
                <a href="/booking" @click.prevent="openBooking" class="inline-link arrow læs-mere" aria-label="Book en forundersøgelse">Book
                    forundersøgelse</a>
            </div>
        </div>

    </div>
</template>





<script setup>
import { useHead } from '@unhead/vue'
import imgEsbjerg from '@/assets/klinik/esbjerg.webp'
import imgVejle from '@/assets/klinik/vejle.webp'

// اگر روت‌نیم‌ها فرق دارند، فقط name را عوض کن یا به جای name، path بده.
const clinics = [
    { slug: 'vejle', city: 'Vejle', img: imgVejle, alt: '...', route: 'clinic-vejle' },
    { slug: 'esbjerg', city: 'Esbjerg', img: imgEsbjerg, alt: '...', route: 'clinic-esbjerg' }
]

/**
 * FAQ data (DK) — کوتاه و شفاف
 */
const faqs = [
    {
        q: 'Hvem udfører mine behandlinger?',
        a: 'Alle behandlinger udføres af klinikkens ansvarlige læge, <b>Arash Bagheri</b>.'
    },
    {
        q: 'Hvad betyder informeret samtykke?',
        a: 'Du får <b>mundtlig</b> information om behandling ved forundersøgelse, omkring risici og alternativer. Først derefter – og efter evt. betænkningstid – kan du give samtykke.'
    },
    {
        q: 'Hvor lang er betænkningstiden?',
        a: '<b>Mindre behandlinger</b> som botulinumtoxin: <b>48 timer</b>.'
    },
    {
        q: 'Behandler I personer under 18 år?',
        a: 'Nej. Kosmetiske behandlinger udføres ikke på personer under <b>18 år</b>.'
    },
    {
        q: 'Tager I før/efter-fotos?',
        a: 'Ja. Der tages <b>foto før</b> (og ved kontrol <b>efter</b>) som del af journalføring iht. reglerne.'
    }
]

/**
 * FAQPage schema (JSON-LD) — بر اساس faqs بالا
 */
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(f => ({
        '@type': 'Question',
        'name': f.q,
        'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a.replace(/<[^>]*>/g, '')
        }
    }))
}

useHead({
    title: 'Om os – DK Skønhedsklinik (lægebehandlede behandlinger)',
    meta: [
        { name: 'description', content: 'Lær klinikken og vores ansvarlige læge at kende. Naturlige, harmoniske resultater i Vejle og Esbjerg.' },
        { name: 'keywords', content: 'om DK Skønhedsklinik, læge Arash Bagheri, hudlæge Danmark, skønhedsbehandlinger' },
        { name: 'author', content: 'DK Skønhedsklinik' },
        { name: 'geo:region', content: 'DK-86,DK-82' },
        { name: 'geo:placename', content: 'Esbjerg, Vejle' },
        { property: 'og:title', content: 'Om DK Skønhedsklinik' },
        { property: 'og:description', content: 'Ekspertise, tryghed og kvalitet i hver behandling.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://dsklinik.dk/og/about.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:image', content: 'https://dsklinik.dk/og/about.jpg' },
        { property: 'og:url', content: 'https://dsklinik.dk/omos/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Om DK Skønhedsklinik' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }
    ],
    link: [
        { rel: 'canonical', href: 'https://dsklinik.dk/omos/' },
        { rel: 'alternate', hreflang: 'da-DK', href: 'https://dsklinik.dk/omos/' }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "Om DK Skønhedsklinik",
                "url": "https://dsklinik.dk/omos/",
                "mainEntity": {
                    "@type": "Person",
                    "name": "Arash Bagheri",
                    "jobTitle": "Læge",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "DK Skønhedsklinik",
                        "url": "https://dsklinik.dk/"
                    }
                }
            })
        },
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Forside", "item": "https://dsklinik.dk/" },
                    { "@type": "ListItem", "position": 2, "name": "Om os", "item": "https://dsklinik.dk/omos/" }
                ]
            })
        },
        {
            type: 'application/ld+json',
            key: 'faq-jsonld',
            children: JSON.stringify(faqSchema)
        }
    ]
})

// Åbner booking-modal fra andre komponenter: dispatch et globalt event
const openBooking = () => {
    if (typeof window === 'undefined') return
    window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'omos_cta' } }))
    window.gtagEvent?.('booking_click', { placement: 'omos_cta', component: 'OmOS' })
}
</script>


<style lang="scss" scoped>
@use '../css/style.scss';

:root {
    --pi-card-bg: #ffffff;
    --pi-text-muted: #6b7280;

}

.OmOS {
    background: #fff;
}



.txt {
    h1 {
        color: var(--quaternary-color) !important;
    }
}

.bg-img {
    padding: 0 !important;
}


h2 {
    font-size: 36px;
}

.step-card {
    background: #fff;
    text-align: left;
}

.step-title {
    font-size: 24px;
    font-weight: 400 !important;
}

.step-title,
.step-card {
    color: #000 !important;
}

.OmOsBannerDiv {
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;

    div {
        width: 50%;

        h1 {
            width: 95%;
        }

        p:nth-child(3) {
            font-size: 20px !important;
            font-weight: lighter;
            margin-top: 20px;
        }

        p:nth-child(4) {
            font-size: 20px !important;
            font-weight: lighter;
        }
    }

    .Bannertxt {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .BannerPng {
        width: 22vw;
        height: 100%;
        z-index: 4;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            border-radius: 20px;
            inset: 0;
            background: linear-gradient(to top,
                    rgba(0, 0, 0, 0.65) 0%,
                    rgba(0, 0, 0, 0.0) 55%);
            z-index: 1;
            pointer-events: none;
            /* klik går igennem */
        }

        p {
            position: absolute;
            left: 30px;
            right: 20px;
            color: #fff;
            margin: 0;
            z-index: 2;
        }

        p:nth-child(2) {
            bottom: 15px;
            font-size: 40px !important;
            margin: 0;
        }

        p:first-child {
            font-size: 24px !important;
            bottom: 65px !important;
            margin: 0;
        }

        img {
            border-radius: 20px;
            height: auto;
            width: 100%;
        }
    }
}

.Multimediedesigner {
    max-width: 1500px;
    margin: 0 auto;
    padding: 100px 0 !important;

    .txt {
        width: 45% !important;
        padding-left: 0%;
        margin-right: 0%;
    }
}

.VIKING-image {
    position: relative;
    overflow: hidden;
    width: 45% !important;
}

.bg-img p {
    z-index: 3;
    width: 70% !important;
    line-height: 1.6;
    text-shadow: none !important;
    font-size: 22px !important;
}

@media only screen and (max-width: 2150px) {
    .bg-img p {
        width: 85% !important;
    }
}

@media only screen and (max-width: 1950px) {
    .OmOsBannerDiv {
        div {
            h1 {
                width: 95%;
            }

            p:nth-child(3) {
                font-size: 16px !important;
                font-weight: lighter;
                margin-top: 20px;
            }

            p:nth-child(4) {
                font-size: 16px !important;
                font-weight: lighter;
            }
        }
    }
}

@media only screen and (max-width: 1750px) {
    .bg-img p {
        width: 75% !important;
        font-size: 22px !important;
    }

    .OmOsBannerDiv {
        div {
            h1 {
                width: 95%;
            }

            p:nth-child(3) {
                font-size: 16px !important;
                font-weight: lighter;
            }

            p:nth-child(4) {
                font-size: 16px !important;
                font-weight: lighter;
            }
        }

        .BannerPng {
            p:nth-child(2) {
                bottom: 10px;
                font-size: 2.13rem !important;
            }

            p:first-child {
                font-size: 1.2rem !important;
                bottom: 60px !important;
            }
        }
    }
}



@media only screen and (max-width: 1550px) {
    .OmOsBannerDiv {
        margin: 0 auto;
        max-width: 1200px;

        div {
            width: 45%;
        }
    }

    .patientinfo {
        .pi-intro {
            width: 60% !important;
        }
    }


    .Multimediedesigner,
    .patientinfo,
    .slice-inner,
    .clinics-mini__inner {
        max-width: 1200px !important;
    }

    .Multimediedesigner {
        padding: 70px 0 !important;
    }

    .bg-img {
        height: 82vh !important;
    }

    .OmOsBannerDiv .BannerPng {
        width: 28vw;
    }

    .Bannertxt {
        padding-left: 0 !important;
    }

    h2 {
        font-size: 36px;
    }

    .Multimediedesigner .txt {
        margin-right: 0 !important;
        width: 50% !important;

        p {
            font-size: 16px !important;
        }
    }

    .bg-img p {
        width: 90% !important;
    }

    .img h1 {
        padding: 0 0 0 0 !important;
    }

    .pi-card {
        width: 43% !important;
    }
}

@media only screen and (max-width: 1380px) {
    .bg-img {
        height: auto !important;
    }

    .scroll-indicator {
        display: none;
    }

    .Multimediedesigner {
        max-height: unset !important;
    }

    .VIKING-image {
        position: relative;
        overflow: hidden;
        max-height: 700px;

        img {
            height: 100% !important;
            width: 100% !important;
            position: relative;
        }
    }
}

@media only screen and (max-width: 1280px) {
    .bg-img {
        padding: 50px 0 !important;
    }

    .OmOsBannerDiv {
        padding: 0 10% 0 10%;
        flex-direction: column-reverse;
        align-items: center;

        div {
            width: 60%;
        }

        .BannerPng {
            width: 50vw;

            p:nth-child(2) {
                left: 20px;
                bottom: 0;
            }

            p:first-child {
                left: 20px;
                bottom: 60px !important;
            }
        }
    }

    .bg-img p {
        font-size: 18px !important;
    }
}

@media only screen and (max-width: 1120px) {
    .Multimediedesigner .txt {
        width: 100% !important;
    }

    .VIKING-image {
        width: 85vw !important;
    }

    .OmKlinik {
        padding: 40px 8% 40px 8% !important;
    }
}

@media only screen and (max-width: 1000px) {
    .OmOsBannerDiv {
        padding: 10px 10% 0 10%;

        div {
            margin-top: 30px;
            width: 70%;
        }

        .BannerPng {
            width: 60vw !important;
        }
    }

    .pi-card {
        width: 40% !important;
    }

    .OmKlinik {
        flex-direction: column-reverse !important;
    }

}

@media only screen and (max-width: 850px) {
    .bg-img {
        padding: 380px 0;
    }

    .OmOsBannerDiv {
        padding: 10px 0 0 0;

        div {
            margin-top: 30px;
            width: 77%;
        }

        .BannerPng {
            width: 80vw !important;
            margin-top: 1px;
        }
    }

    .patientinfo .pi-intro {
        width: 100% !important;
    }


}

@media only screen and (max-width: 670px) {
    .pi-card {
        width: 90% !important;
    }
}

@media only screen and (max-width: 550px) {
    .bg-img {
        padding: 50px 0 !important;

        p {
            width: 100% !important;
        }
    }

    .OmOsBannerDiv .BannerPng {
        p:nth-child(2) {
            left: 20px;
            bottom: 0;
        }

        p:first-child {
            left: 20px;
            bottom: 60px !important;
        }
    }

    .container h2 {
        font-size: 30px;
    }

    .VIKING-image {
        width: 100% !important;
    }
}

@media only screen and (max-width: 380px) {
    .OmOsBannerDiv {
        padding: 120px 0 0 0;

        div {
            width: 88%;
        }

        .BannerPng {
            width: 100% !important;
        }
    }
}



.primary {
    background: var(--primary-color) !important;
}

.secondary {
    background: var(--secondary-color) !important;
}

.img p {
    color: #fff !important;
    font-size: 22px;
    padding: 0 !important;
}

.is-steps {
    max-width: unset !important;
    background: #f4f3f0 !important;

    ol {
        padding: 0 !important;
    }
}

.column {
    flex-direction: column;
}

.steps-flow {
    margin-top: 0 !important;
}


.img {
    position: relative;
    /* Gør det muligt for ::before at positionere sig relativt til .img */
    background-image: url('@/assets/BannerBehandling.webp') !important;
    background-size: cover;
    background-position: center !important;
    overflow: hidden;
    display: flex;
    align-items: center;

    /* Overlay */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        /* Sort overlay med 50% gennemsigtighed */
        z-index: 1;
        /* Sørger for, at overlayet ligger over baggrunden */
    }

    h1 {
        margin-left: 0;
        position: relative;
        z-index: 2;
        font-size: 55px;
        padding: 1vw 0 0 0 !important;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

        b {
            color: #CC9F00;
            font-weight: bold;
            position: relative;
        }
    }
}

@media only screen and (max-width: 1020px) {
    h1 {
        padding-left: 0 !important;
    }
}

.OmOsBannerDiv {
    h1 {
        color: #fff !important;
    }
}

.pi-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}


.patientinfo {
    max-width: 1500px;
    margin: 0 auto;
    padding: 70px 0;
    flex-direction: column;
    gap: 55px;

    p {
        line-height: 26px;
        margin: 22px 0 0 0;
    }

    .pi-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 24px;
        margin-top: 28px;
    }

    .pi-intro {
        width: 48%;
    }

    .pi-card {
        background: var(--pi-card-bg);
        border-radius: 20px;
        width: 40%;
        box-shadow: 0 8px 24px rgba(0, 0, 0, .06);
        padding: 20px 22px;

        h3 {
            margin: 0 0 10px 0;
            font-size: 22px;
            color: var(--quaternary-color);
        }

        .pi-list {
            padding-left: 18px;
            margin: 22px 0 0 0;

            li {
                margin: 8px 0;
                line-height: 1.6;
            }
        }

        .pi-links a {
            color: #000;
            text-decoration: underline;
        }
    }

    .pi-cta {
        margin-top: 26px;
        display: flex;
        align-items: center;
        gap: 12px;

        .btn {
            display: inline-block;
            padding: 12px 18px;
            border-radius: 12px;
            background: var(--primary-color);
            color: #fff !important;
            font-weight: 700;
            text-decoration: none;
            transition: transform .12s ease, box-shadow .12s ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 10px 24px rgba(0, 0, 0, .12);
            }
        }

        .cta-note {
            margin: 0;
            color: var(--pi-text-muted);
        }
    }
}


/* Responsivitet */
@media (max-width: 1120px) {

    .patientinfo,
    .faq,
    .clinics-mini__inner {
        padding: 40px 8% !important;
    }
}


/* ==== Clinics Mini (Esbjerg + Vejle) ==== */
.clinics-mini {
    background: #153655;
    padding: 60px 0;
}

.clinics-mini__inner {
    display: flex;
    flex-direction: column;
    max-width: 1500px;
    margin: 0 auto;
    gap: 16px;

    h2 {
        color: #fff !important;
    }
}

.clinics-mini__title {
    color: #fff;
    text-align: center;
    margin: 0 0 50px 0;
}

.clinics-mini__grid {
    display: flex;
    /* flex طبق خواسته */
    gap: 50px;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    /* برای ریسپانسیو */
}

.clinics-mini__card {
    flex: 1 1 420px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    text-decoration: none;
}

.clinics-mini__card:hover {
    ::after {
        background-color: #0000006f;
    }

    .clinics-mini__caption {
        opacity: 0;
    }

    .clinics-mini_card-hover {
        h3 {
            color: #fff;
        }
    }
}

.clinics-mini_card-hover {
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
        color: transparent;
        font-size: 40px;
        transition: color .2s ease-in-out;
    }
}

.clinics-mini__figure {
    margin: 0;
    position: relative;
    aspect-ratio: 16 / 10;
    /* نسبت تصویر تمیز */
    background: rgba(255, 255, 255, .05);
}

.clinics-mini__figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.clinics-mini__figure::after {
    /* گرادیان برای خوانایی کپشن */
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, .5) 100%);
}

.clinics-mini__caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    color: #fff;
    transition: opacity .2s ease;
    z-index: 1;
}

.clinics-mini__city {
    font-weight: 700;
    font-size: 18px;
}

.clinics-mini__cta {
    font-weight: 600;
    opacity: .95;
}

.pi-cta {
    align-items: center;
    justify-content: center !important;
    max-width: 1500px;
    margin: 0 auto;

    .btn-primary {
        margin-right: 40px;
    }
}

/* ریسپانسیو: در عرض‌های کوچک، دو کارت زیر هم */
@media (max-width: 900px) {
    .clinics-mini__grid {
        gap: 30px;
    }
}


.callout-cta {
    height: 120px !important;
    max-width: unset;
    padding: 0;
    background: #15365595;
    border-radius: 0;

    div {
        margin: 0 auto;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        h3 {
            font-size: 24px;
            color: #fff !important;
        }

        a {
            border: 2px solid #ffffff;
            color: #fff !important;
            padding: 20px;
            border-radius: 15px;
        }
    }

    .inline-link:hover,
    .inline-link:focus {
        background-size: 0 !important;
    }
}
</style>