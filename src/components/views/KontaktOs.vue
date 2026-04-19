<template>
    <main>
        <div class="flex">
            <div class="kontaktOs-wrapper">
                <div class="KontaktOsHeader">
                    <h1>Kontakt DK Skønhedsklinik </h1>
                    <h2>– Vi står klar til at hjælpe dig!</h2>
                    <p class="mobile-hide">Har du spørgsmål til vores behandlinger eller ønsker du at booke en gratis
                        konsultation?</p>
                </div>
                <div class="Informations">
                    <img src="../../assets/icons/phoneIcon.webp" alt="" aria-hidden="true">
                    <p><a href="tel:+4553503750">+45 53 50 37 50</a></p>
                </div>
                <div class="Informations">
                    <img src="../../assets/icons/mailIcon.webp" alt="" aria-hidden="true">
                    <p><a href="mailto:dr_arash_bagheri@yahoo.com">dr_arash_bagheri@yahoo.com</a></p>
                </div>
                <div class="Informations">
                    <img src="../../assets/icons/mapIcon.webp" alt="" aria-hidden="true">
                    <p class="map-links">
                        <a href="https://maps.google.com/?q=Søndergade+50,+7100+Vejle">Søndergade 50, 7100 Vejle</a>
                        <span class="separator">-</span>
                        <a href="https://maps.google.com/?q=Havnegade+6,+6700+Esbjerg">Havnegade 6, 6700 Esbjerg</a>
                    </p>
                </div>
            </div>

            <div class="klinikken">
                <img src="../../assets/OmOs.webp" alt="klinik miljø">
            </div>

            <div class="scroll-indicator">
                <span>scroll ned</span>
                <div class="line"></div>
            </div>
        </div>
    </main>


    <section id="veninde-rabat" class="friend-offer section-wrapper width-margin">
        <div class="section-text">
            <div>
                <h2> <span>Tag din veninde med </span> <span>– og spar 200 kr. hver</span> </h2>
                <p class="subhead">
                    Kom to sammen til hudbehandling, filler eller skinbooster og få 200 kr. i rabat pr. person.
                </p>
                <p>
                    Gør besøget hyggeligt og trygt: Når I booker sammen og får jeres behandling samme dag,
                    får I hver 200 kr. rabbat på jeres behandling. Tilbuddet gælder ved kosmetiske behandlinger udført
                    af vores autoriserede behandlere og kan ikke kombineres med andre kampagner.
                </p>
                <p>
                    Skriv <i>“veninde-rabat”</i> i kommentarfeltet ved booking – eller
                    <a class="inline-link" href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank"
                            rel="noopener noreferrer" aria-label="Instagram DK Skønhedsklinik"
                        data-tooltip="Går til: Instagram - skriv en DM" :to="{ name: 'kontaktos' }">
                        kontakt os
                    </a> 
                    for hjælp til at finde en fælles tid.
                </p>
            </div>
            <button type="button" class="general_button  arrow" @click="openBookingFromHero"
                aria-label="Book gratis forundersøgelse">
                Book gratis forundersøgelse
            </button>
        </div>

        <div class="section-media">
            <img src="../../assets/cecilie-mette.webp" alt="Skinbooster behandling – frisk og ungdommelig hud" loading="lazy"
                decoding="async">
        </div>
    </section>



    <section id="follow-insta-wrapper" class="section-wrapper  follow-insta-wrapper">
        <div class="width-margin flex-row">
            <div class="section-text">
                <div class="follow-insta-text">
                    <b>For at se vores seneste tilbud, og nyheder</b>
                    <h2>Follow os for nyheder og tilbud</h2>
                    <p>
                        På vores Sociale Medier hjælper vi dig med de spørgsmål du måtte have,
                        og samtidig kan du også se vores tilbud og nyheder som du kan få gavn af
                    </p>
                </div>
                <div class="follow-insta-icons-wrapper">
                    <p>Du skriv en besked til os på Facebook eller Instagram og vi vil svar hurtigst muligt</p>
                    <div class="follow-insta-icons">
                        <a class="soc NavFacebook" href="https://www.facebook.com/profile.php?id=100054595142567"
                            target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img class="icon facebook" src="../../assets/icons/Facebook_Logo_Primary.webp" width="23"
                                height="23" alt="" />
                        </a>
                        <a class="soc NavInstagram" href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank"
                            rel="noopener noreferrer" aria-label="Instagram">
                            <img class="icon" src="../../assets/icons/Instagram_Glyph_Gradient.webp" width="23"
                                height="23" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="section-media">
                <img src="../../assets/DK_Skønhedsklinik.webp" alt="Skinbooster behandling – frisk og ungdommelig hud"
                    loading="lazy" decoding="async">
            </div>
        </div>
    </section>


    <!-- Sektion: Bliv ringet op – indsæt på Kontakt-siden -->
    <section id="ring-mig-op" class="callback section-wrapper width-margin">
        <div class="section-text">
            <h2>Bliv ringet op – vælg et tidspunkt, der passer dig</h2>
            <p class="subhead">Har du spørgsmål eller vil du hurtigt finde en tid? Udfyld dine oplysninger – så ringer
                vi dig op.</p>
            <p>
                Vi kontakter dig typisk inden for én hverdag. Vælg gerne hvilket tidsrum der passer bedst, og hvilken
                klinik
                du ønsker (Vejle eller Esbjerg). Rådgivningen er uforpligtende, og forundersøgelsen er gratis.
            </p>
        </div>

        <!-- Bemærk: name-attributter + skjult _subject -->
        <form class="callback-form" @submit.prevent="submitCallback" ref="cbForm" novalidate>
            <input type="hidden" name="_subject" value="Ring mig op – kontaktformular" />

            <div class="form-row">
                <label for="cb-name">Navn</label>
                <input id="cb-name" v-model="cb.name" name="name" type="text" required autocomplete="name" />
            </div>

            <div class="form-row">
                <label for="cb-phone">Telefon</label>
                <input id="cb-phone" v-model="cb.phone" name="phone" type="tel" required inputmode="tel"
                    placeholder="+45 …" pattern="^(\+45\s?)?\d{8}$" title="Indtast 8 cifre (evt. med +45 foran)" />
            </div>

            <div class="form-row">
                <label for="cb-time">Bedste tidspunkt at ringe</label>
                <select id="cb-time" v-model="cb.best" name="best_time">
                    <option value="Hele dagen">Hele dagen</option>
                    <option value="07-12">16.00 – 18.00</option>
                    <option value="12-16">18.00 – 20.00</option>
                    <option value="16-20">20.00 – 21.00</option>
                </select>
            </div>

            <fieldset class="form-row">
                <legend>Foretrukken klinik</legend>
                <!-- Samme name for alle radioer -->
                <label><input type="radio" value="Vejle" v-model="cb.clinic" name="clinic" /> Vejle</label>
                <label><input type="radio" value="Esbjerg" v-model="cb.clinic" name="clinic" /> Esbjerg</label>
                <label><input type="radio" value="Ingen præference" v-model="cb.clinic" name="clinic" /> Ingen
                    præference</label>
            </fieldset>

            <div class="form-row">
                <label for="cb-note">Evt. bemærkning</label>
                <textarea id="cb-note" v-model="cb.note" name="note" rows="3"
                    placeholder="Skriv gerne hvad du ønsker rådgivning om…"></textarea>
            </div>

            <label class="consent">
                <!-- Unchecked felter sendes ikke — det er ok -->
                <input type="checkbox" v-model="cb.consent" name="consent" value="ja" required />
                Jeg accepterer, at DK Skønhedsklinik må kontakte mig vedr. min henvendelse.
            </label>

            <!-- (Valgfrit) honeypot anti-spam -->
            <input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" />

            <!-- Feedback (tilgængelig live-region) -->
            <p v-if="status === 'success'" class="form-success" role="status" aria-live="polite">
                Tak! Vi ringer dig op snarest.
            </p>
            <p v-if="status === 'error'" class="form-error" role="alert" aria-live="assertive">
                {{ errorMessage }}
            </p>

            <button type="submit" class="btn" :disabled="status === 'sending'">
                {{ status === 'sending' ? 'Sender…' : 'Ring mig op' }}
            </button>
        </form>
    </section>
</template>




<script setup>
import { useHead } from '@unhead/vue'
import { reactive, ref } from 'vue'

/* --- STATE --- */
const cb = reactive({
    name: '',
    phone: '',
    best: 'Hele dagen',
    clinic: 'Ingen præference',
    note: '',
    consent: false,
})

const status = ref('idle')           // 'idle' | 'sending' | 'success' | 'error'
const errorMessage = ref('')
const cbForm = ref(null)             // <- fordi du har ref="cbForm" i <form>

/* --- SUBMIT --- */
async function submitCallback(e) {
    status.value = 'sending'
    errorMessage.value = ''

    const form = e.target

    // 1) HTML5-validering (viser browserens beskeder)
    if (!form.checkValidity()) {
        form.reportValidity()
        status.value = 'idle'
        return
    }

    const data = new FormData(form)

    // 2) Honeypot (anti-spam)
    if (data.get('website')) {
        status.value = 'success'
        form.reset()
        cb.name = ''
        cb.phone = ''
        cb.best = 'Hele dagen'
        cb.clinic = 'Ingen præference'
        cb.note = ''
        cb.consent = false
        return
    }

    try {
        const resp = await fetch('https://formspree.io/f/myznpyzb', {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json' },
        })

        if (resp.ok) {
            status.value = 'success'
            form.reset()
            cb.name = ''
            cb.phone = ''
            cb.best = 'Hele dagen'
            cb.clinic = 'Ingen præference'
            cb.note = ''
            cb.consent = false
            setTimeout(() => { if (status.value === 'success') status.value = 'idle' }, 5000)
        } else {
            const err = await resp.json().catch(() => ({}))
            status.value = 'error'
            errorMessage.value =
                (err?.errors && err.errors.map(x => x.message).join(', ')) ||
                'Noget gik galt. Prøv igen.'
        }
    } catch {
        status.value = 'error'
        errorMessage.value = 'Forbindelsen fejlede. Prøv igen.'
    }
}

const openBookingFromHero = () => {
    window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'home_hero' } }))
    // (اختیاری) آنالیتیکس:
    window.gtagEvent?.('booking_click', { placement: 'home_hero', component: 'AppHome' })
}

const ORG_ID = 'https://dsklinik.dk/#org'
const BOOKING_URL = 'https://dsklinik.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=64c857a01938e8ee26f9d9f8fca49125b10711&bId=10711&dTpl=1&sSToken=7147f9ee6e0f4459509dbaca658244d6'

useHead({
    title: 'Kontakt DK Skønhedsklinik – Vejle & Esbjerg | Gratis konsultation',
    meta: [
        { name: 'description', content: 'Kontakt DK Skønhedsklinik i Vejle og Esbjerg. Skriv en sms til os +45 53 50 37 50 eller direkte på vore sociale medier for en gratis forundersøgelse.' },
        { name: 'keywords', content: 'kontakt skønhedsklinik, hudlæge Vejle, hudlæge Esbjerg, book konsultation' },
        { name: 'author', content: 'DK Skønhedsklinik' },
        { name: 'geo:region', content: 'DK-86,DK-82' },
        { name: 'geo:placename', content: 'Vejle, Esbjerg, Danmark' },
        { property: 'og:title', content: 'Kontakt DK Skønhedsklinik' },
        { property: 'og:description', content: 'Har du spørgsmål? Kontakt os for rådgivning og gratis forundersøgelse.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://dsklinik.dk/og/contact.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:image', content: 'https://dsklinik.dk/og/contact.webp' },
        { name: 'twitter:title', content: 'Kontakt os' },
        { property: 'og:site_name', content: 'DK Skønhedsklinik' },
        { property: 'og:locale', content: 'da_DK' },
        { property: 'og:url', content: 'https://dsklinik.dk/kontaktos/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }
    ],
    link: [
        { rel: 'canonical', href: 'https://dsklinik.dk/kontaktos/' },
        { rel: 'alternate', hreflang: 'da-DK', href: 'https://dsklinik.dk/kontaktos/' }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": ORG_ID,
                "name": "DK Skønhedsklinik",
                "url": "https://dsklinik.dk/",
                "logo": "https://dsklinik.dk/og/home.webp",
                "sameAs": [
                    "https://www.facebook.com/people/DK-Sk%C3%B8nhedsklinik/100054595142567/",
                    "https://www.instagram.com/dk_skonhedsklinik/"
                ]
            })
        },

        // شعبه‌ی Vejle
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                "@id": "https://dsklinik.dk/#clinic-vejle",
                "name": "DK Skønhedsklinik – Vejle",
                "url": "https://dsklinik.dk/kontaktos/",
                "image": "https://dsklinik.dk/og/logo.webp",
                "parentOrganization": { "@id": ORG_ID },
                "telephone": "+45 53 50 37 50",
                "email": "dr_arash_bagheri@yahoo.com",
                "priceRange": "kr",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Søndergade 50",
                    "postalCode": "7100",
                    "addressLocality": "Vejle",
                    "addressCountry": "DK"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 55.7064855, "longitude": 9.5302675 },
                "hasMap": "https://maps.google.com/?q=Søndergade+50,+7100+Vejle",
                "areaServed": "Vejle",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "17:00", "closes": "20:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Saturday", "Sunday"],
                        "opens": "11:00", "closes": "18:00"
                    }
                ],
                "potentialAction": { "@type": "ReserveAction", "target": BOOKING_URL }
            })
        },

        // شعبه‌ی Esbjerg
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                "@id": "https://dsklinik.dk/#clinic-esbjerg",
                "name": "DK Skønhedsklinik – Esbjerg",
                "url": "https://dsklinik.dk/kontaktos/",
                "image": "https://dsklinik.dk/og/logo.webp",
                "parentOrganization": { "@id": ORG_ID },
                "telephone": "+45 53 50 37 50",
                "email": "dr_arash_bagheri@yahoo.com",
                "priceRange": "DKK",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Havnegade 6",
                    "postalCode": "6700",
                    "addressLocality": "Esbjerg",
                    "addressCountry": "DK"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 55.4639497, "longitude": 8.4543111 },
                "hasMap": "https://maps.google.com/?q=Havnegade+6,+6700+Esbjerg",
                "areaServed": "Esbjerg",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "17:00", "closes": "20:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Saturday", "Sunday"],
                        "opens": "11:00", "closes": "18:00"
                    }
                ],
                "potentialAction": { "@type": "ReserveAction", "target": BOOKING_URL }
            })
        },
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "@id": "https://dsklinik.dk/#contact",
                "name": "Kontakt DK Skønhedsklinik",
                "url": "https://dsklinik.dk/kontaktos/",
                "mainEntityOfPage": { "@id": "https://dsklinik.dk/#org" }
            })
        },
        // 👇 denne skal også have trailing slash
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Forside", "item": "https://dsklinik.dk/" },
                    { "@type": "ListItem", "position": 2, "name": "Kontakt", "item": "https://dsklinik.dk/kontaktos/" }
                ]
            })
        }
    ]
})

</script>




<style lang="scss" scoped>
@use '../css/style.scss';

main {
    display: flex;
    height: 65vh;
    min-height: 800px;
    align-content: center;
    background-image: url('@/assets/BannerBehandling.webp') !important;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;

    p {
        width: 30vw;
    }

    /* Overlay */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 65vh;
        min-height: 800px;
        background-color: rgba(0, 0, 0, 0.3);
        /* Sort overlay med 50% gennemsigtighed */
        z-index: 1;
        /* Sørger for, at overlayet ligger over baggrunden */
    }
}

.kontaktOs-wrapper {
    width: 50%;
    margin-right: 5%;

    .Informations {
        img {
            width: 40px;
            height: 40px;
            margin-right: 20px;
        }
    }

    .map-links {
        display: flex;
        gap: 20px;
        width: auto !important;

        .separator {
            color: #fff;
        }
    }
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
}

.flex_info {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    position: relative;
    width: 60vw;

}

.KontaktInformation {
    margin-top: 0 !important;
}

.Mail {
    padding-top: 0 !important;
}

h2 {
    font-size: 36px;
    line-height: 1.2;
    color: var(--quaternary-color) !important;
}

.section-wrapper {
    display: flex;
    padding: 100px 0;
    justify-content: space-between;

    .section-text {
        width: 40%;
        line-height: 1.6;
        font-size: 16px;

        i, .inline-link {
            color: #2d58a1;
            font-weight: bold;
        }
    }

    .section-media {
        width: 40%;
        aspect-ratio: 1/1;

        img {
            width: 100%;
            height: 100%;
            border-radius: 15px;
            object-fit: cover;
            object-position: top;
        }
    }
}

.general_button {
    max-width: 300px !important;
    width: auto !important;
    align-items: center;
    display: flex;
}

.friend-offer {
    flex-direction: row-reverse;

    .section-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h2 {
        display: flex;
        flex-direction: column;
    }
}

.follow-insta-wrapper {
    background: #153655;

    h2,
    b,
    p {
        color: #fff !important;
    }

    .section-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .follow-insta-icons {
            display: flex;
            gap: 25px;

            .soc {
                display: flex;
                align-items: center;
                border-radius: 15px;
                background: #fff;
                padding: 5px 15px;
                text-decoration: none;
                transition: 0.3s opacity;
            }

            .icon {
                width: 35px;
                height: 35px;
            }
        }
    }

    .soc:hover {
        opacity: .8;
    }

    .soc::before {
        content: "🠮";
        margin-right: 20px;
        font-size: 30px;
        color: #2d58a1;
    }

    .section-media {
        aspect-ratio: 16/9 !important;

        img {
            object-position: center;
        }
    }
}

@media only screen and (max-width: 1020px) {

    h1,
    h2 {
        padding-left: 0 !important;
    }

    .KontaktOsHeader h2 {
        font-size: 20px !important;
    }

    .KontaktOsHeader h1 {
        font-size: 50px !important;
    }

    .KontaktInformation {
        align-items: start !important;
        margin-top: 50px !important;
        padding-bottom: 20px;
    }

    .KontaktOsHeader p {
        font-size: 24px;
        width: 90% !important;
    }

    .flex_info {
        flex-direction: column;
    }
}

.KontaktOsHeader {
    h1 {
        font-size: 45px !important;
    }

    h2 {
        font-size: 22px !important;
        margin-top: 10px !important;
    }

    h1,
    h2,
    p {
        position: relative;
        z-index: 3;
        color: #fff !important;
    }

    p {
        font-size: 18px;
        width: 100%;
        line-height: 1.6;
        width: 55%;
    }
}

.Informations {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    padding: 10px 0;

    p {
        a:link {
            color: #fff !important;
            text-decoration: none;
        }

        a:visited {
            color: #fff;
        }

        a:hover {
            opacity: 0.8;
            text-decoration: underline;
        }
    }
}

.KontaktInformation {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 30px;

    p {
        color: #fff;
        position: relative;
        z-index: 3;
        width: auto !important;
        font-size: 18px;
        margin: 0;
        display: flex;
        align-items: center;
    }

    img {
        width: 40px;
        height: 40px;
        margin-right: 20px;
    }
}

.klinikken {
    width: 45%;
    display: flex;
    z-index: 3;

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
    }
}

.location-div {
    background: var(--secondary-color) !important;
    padding: 100px 0;

    h1 {
        color: var(--quaternary-color) !important;
        text-align: center;
        margin-bottom: 50px !important;
        font-size: 36px;
    }
}

.LessPadding {
    margin-bottom: 0 !important;
}

.map-container {
    position: relative;
    z-index: 3;
    width: 90%;
    height: 500px;
    max-width: 1000px;
    margin: 0 auto 0px auto;
}

.map-container iframe {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    /* Afrundede hjørner for flot design */
}

.secondaryColor {
    background: var(--primary-color) !important;
}

@media only screen and (max-width: 1950px) {
    .flex {
        display: flex;
        max-width: 1500px;
    }

    .KontaktOsHeader {
        width: 60vw !important;

        h1,
        h2,
        p {
            position: relative;
            z-index: 3;
            color: #fff !important;
        }
    }

    .KontaktInformation {
        margin-top: 0 !important;
    }

    .Mail {
        padding-top: 0 !important;
    }

    .flex_info {
        width: 75vw;
    }
}


@media only screen and (max-width: 1750px) {
    .klinikken {
        width: 45%;
    }

}


@media only screen and (max-width: 1550px) {
    main {
        height: 82vh;

        &::before {
            height: 82vh;
        }
    }

    .KontaktOsHeader {
        h1 {
            font-size: 36px !important;
        }

        p {
            font-size: 18px;
            width: 50%;
            line-height: 30px;
        }
    }

    .kontaktOs-wrapper .Informations {
        padding: 5px 0;

        img {
            width: 30px;
            height: 30px;
        }
    }

    .section-wrapper {
        padding: 70px 0;

        .section-text {
            width: 50%;
        }
    }

    .callback-form {
        width: 45% !important;
        gap: 15px !important;
    }

    .flex {
        display: flex;
        max-width: 1200px;
    }
}



@media only screen and (max-width: 1120px) {
    main {
        flex-direction: column;

        p {
            width: 65vw;
        }
    }


    .flex {
        flex-direction: column;
    }

    .kontaktOs-wrapper {
        width: 100%;
        margin-right: 0;
    }

    .klinikken {
        width: 70%;
    }
}

@media only screen and (max-width: 890px) {
    .KontaktOsHeader {
        width: auto !important;

        p {
            width: auto !important;
        }
    }

    .flex {
        padding: 0 5%;
        margin-top: 50px !important;
        height: 100%;
        justify-content: space-between;
    }

    .Informations {
        padding: 12px 0;
    }

    .width-margin {
        max-width: 700px;
    }

    .klinikken {
        width: 80%;
    }
}


@media only screen and (max-width: 780px) {
    main {
        min-height: auto;
        p {
            width: auto !important;
        }
    }

    .location-div {
        padding: 40px 0;

        h1 {
            margin-bottom: 20px !important;
        }
    }

    .section-wrapper,
    .flex-row {
        flex-direction: column;
        align-items: center !important;
        gap: 20px;
    }

    .flex-row {
        gap: 50px !important;
    }

    .section-wrapper {
        padding: 50px 0;
    }

    .section-text,
    .section-media,
    .callback-form,
    .klinikken {
        width: 80% !important;
    }
}

@media only screen and (max-width: 700px) {

    .mobile-hide {
        display: none !important;
    }

    .KontaktOsHeader {
        width: auto !important;
        margin-bottom: 30px;
    }

    .KontaktOsHeader h1 {
        padding: 10vw 0 0 0 !important;
    }

    .KontaktInformation {
        p {
            font-size: 18px !important;
            flex-direction: column;
            align-items: flex-start;
        }
    }

}

@media only screen and (max-width: 660px) {
    .informations {
        flex-direction: row !important;
    }
}

@media only screen and (max-width: 600px) {
    .klinikken {
        width: 100% !important;
    }

    .KontaktInformation {
        img {
            width: 30px;
            height: 30px;
            margin-right: 20px;
        }
    }

    .section-text,
    .section-media,
    .callback-form {
        width: 90% !important;
    }

    h2 {
        font-size: 30px;
    }

}

@media only screen and (max-width: 500px) {
    .location-div {
        h1 {
            padding: 0 0 0 5% !important;
            padding-left: 0 !important;
            font-size: 30px !important;
        }
    }

    .KontaktOsHeader h1 {
        padding: 0 !important;
        font-size: 35px !important;
    }
}

@media only screen and (max-width: 430px) {
    .KontaktOsHeader h1 {
        font-size: 37px !important;
    }

    .KontaktOsHeader h2 {
        font-size: 20px !important;
    }

    .KontaktOsHeader p {
        font-size: 20px !important;
        line-height: 27px;
    }

    .KontaktInformation {
        margin-top: 20px !important;
    }
}



.callback {
    display: flex;
    gap: 1.25rem;
    align-items: start;

    h2 {
        margin-top: 0;
    }

    .section-text {
        width: 45%;
    }
}

.callback-form {
    display: grid;
    width: 40%;
    gap: 25px;
}

.form-row {
    display: grid;
    gap: .4rem;

    legend {
        margin-bottom: 10px;
    }
}

fieldset.form-row {
    border: 0;
    padding: 0;
    display: grid;
    gap: .5rem;
}

label {
    display: flex;
    align-items: center;
    font-weight: 600;
}

input,
select,
textarea {
    padding: .7rem .8rem;
    border: 1px solid #e2e2e2;
    border-radius: .6rem;
    font: inherit;
    margin-right: 10px;
}

.consent {
    display: flex;
    gap: .5rem;
    align-items: center;
    font-size: .95rem;
}

.btn {
    background: #2d58a1;
    color: #fff;
    border: 0;
    padding: .8rem 1.1rem;
    border-radius: .6rem;
    cursor: pointer;
    font-weight: 700;
}

.btn:hover {
    background-color: #1e4070;
}

.form-success {
    margin-top: 10px;
    padding: 10px 12px;
    border-radius: 8px;
    background: #e9f8ef;
    color: #116b2f;
    border: 1px solid #bfe7cd;
}

.form-error {
    margin-top: 10px;
    padding: 10px 12px;
    border-radius: 8px;
    background: #fdecec;
    color: #9c1c1c;
    border: 1px solid #f3b4b4;
}

button[disabled] {
    opacity: .7;
    cursor: not-allowed;
}

.hp {
    position: absolute;
    left: -9999px;
}
</style>