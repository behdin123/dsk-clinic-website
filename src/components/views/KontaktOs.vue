<template>
    <main>
        <div class="flex">
            <!-- Adresser, telefon og aabningstider stod baade her OG i de to
                 klinikkort lige nedenunder. Heroen gentog altsaa sig selv, foer
                 man havde scrollet én gang. Den bruger nu pladsen paa det, kortene
                 IKKE siger: hvad man kan forvente, og én handling man kan tage. -->
            <div class="kontaktOs-wrapper">
                <div class="KontaktOsHeader">
                    <p class="sec__eyebrow sec__eyebrow--lys">Kontakt</p>
                    <h1>Kontakt DK Skønhedsklinik</h1>
                    <p class="kontakt-undertitel">Vi svarer typisk inden for én hverdag</p>
                    <p class="hero-lead">
                        Ring, skriv eller få en opringning. Vi hjælper dig med at finde den rigtige
                        behandling og en tid i Vejle eller Esbjerg – og forundersøgelsen er gratis
                        og uforpligtende.
                    </p>
                </div>

                <ul class="hero-punkter">
                    <li>Behandlingen udføres af læge</li>
                    <li>Gratis forundersøgelse</li>
                    <li>Klinik i Vejle og Esbjerg</li>
                </ul>

                <p class="hero-handlinger">
                    <a class="hero-knap hero-knap--primaer" href="tel:+4553503750">Ring 53 50 37 50</a>
                    <button class="hero-knap hero-knap--sekundaer" type="button" @click="openBookingFromHero">
                        Book forundersøgelse
                    </button>
                </p>

                <p class="hero-mail">
                    Skriver du hellere?
                    <a href="mailto:dr_arash_bagheri@yahoo.com">Send os en mail</a>
                </p>
            </div>

            <div class="klinikken">
                <img src="../../assets/Clinic_consultation.webp"
                    alt="Læge Arash Bagheri under en forundersøgelse på DK Skønhedsklinik" />
            </div>

        </div>
    </main>

    <!-- Aabningstider stod kun i footeren. Paa en kontaktside er det det
         foerste, folk leder efter - og de to klinikker har ikke samme tider. -->
    <section id="klinikker" class="kontakt-klinikker" aria-labelledby="kontakt-klinikker-titel">
        <div class="kontakt-klinikker__head">
            <p class="sec__eyebrow">Vores klinikker</p>
            <h2 id="kontakt-klinikker-titel">Hvor og hvornår kan du møde os?</h2>
            <p class="kontakt-klinikker__lead">
                Samme læge, samme priser og samme behandlinger begge steder.
                Forundersøgelsen er gratis og uforpligtende.
            </p>
        </div>

        <div class="kontakt-klinikker__grid">
            <article class="kontakt-kort">
                <h3>Vejle</h3>
                <dl>
                    <div>
                        <dt>Adresse</dt>
                        <dd>
                            <address>Søndergade 50<br />7100 Vejle</address>
                        </dd>
                    </div>
                    <div>
                        <dt>Åbningstider</dt>
                        <dd>
                            Søndag 11:00–18:00
                            <span class="kontakt-kort__note">Andre tider kan aftales – dog kun søndag indtil videre</span>
                        </dd>
                    </div>
                    <div>
                        <dt>Telefon</dt>
                        <dd><a href="tel:+4553503750">+45 53 50 37 50</a></dd>
                    </div>
                </dl>
                <p class="kontakt-kort__links">
                    <router-link to="/klinik/vejle/">Se klinikken</router-link>
                    <a href="https://maps.google.com/?q=Søndergade+50,+7100+Vejle" target="_blank" rel="noopener">Få rutevejledning</a>
                </p>
            </article>

            <article class="kontakt-kort">
                <h3>Esbjerg</h3>
                <dl>
                    <div>
                        <dt>Adresse</dt>
                        <dd>
                            <address>Havnegade 6<br />6700 Esbjerg</address>
                        </dd>
                    </div>
                    <div>
                        <dt>Åbningstider</dt>
                        <dd>
                            Mandag–fredag 17:00–20:00
                            <span class="kontakt-kort__note">Andre tidspunkter kan aftales</span>
                        </dd>
                    </div>
                    <div>
                        <dt>Telefon</dt>
                        <dd><a href="tel:+4553503750">+45 53 50 37 50</a></dd>
                    </div>
                </dl>
                <p class="kontakt-kort__links">
                    <router-link to="/klinik/esbjerg/">Se klinikken</router-link>
                    <a href="https://maps.google.com/?q=Havnegade+6,+6700+Esbjerg" target="_blank" rel="noopener">Få rutevejledning</a>
                </p>
            </article>
        </div>
    </section>


    <!-- Sektion: Bliv ringet op – indsæt på Kontakt-siden -->
    <section id="ring-mig-op" class="callback section-wrapper width-margin">
        <div class="section-text">
            <p class="sec__eyebrow">Hurtig kontakt</p>
            <h2>Bliv ringet op – vælg et tidspunkt, der passer dig</h2>
            <p class="subhead">Har du spørgsmål eller vil du hurtigt finde en tid? Udfyld dine oplysninger – så ringer
                vi dig op.</p>
            <p>
                Vælg gerne hvilket tidsrum der passer bedst, og hvilken klinik du ønsker.
                Rådgivningen er uforpligtende.
            </p>

            <ol class="kontakt-trin">
                <li>
                    <span class="kontakt-trin__nr">1</span>
                    <span>Du udfylder felterne – det tager under et minut.</span>
                </li>
                <li>
                    <span class="kontakt-trin__nr">2</span>
                    <span>Vi ringer dig op, typisk inden for én hverdag.</span>
                </li>
                <li>
                    <span class="kontakt-trin__nr">3</span>
                    <span>Vi finder en tid i Vejle eller Esbjerg. Forundersøgelsen er gratis.</span>
                </li>
            </ol>
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
                    <option value="16.00 – 18.00">16.00 – 18.00</option>
                    <option value="18.00 – 20.00">18.00 – 20.00</option>
                    <option value="20.00 – 21.00">20.00 – 21.00</option>
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


    <!-- Slaaet fra indtil videre: ingen kunder har naevnt tilbuddet,
         og priserne er i forvejen i den lave ende. Taendes med
         visVenindeRabat = true i script-blokken. -->
    <section v-if="visVenindeRabat" id="veninde-rabat" class="friend-offer section-wrapper width-margin">
        <div class="section-text">
            <div>
                <p class="sec__eyebrow">Tilbud</p>
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
                    <p class="sec__eyebrow">Sociale medier</p>
                    <h2>Følg os for nyheder og tilbud</h2>
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
</template>




<script setup>
import { useHead } from '@unhead/vue'
import { reactive, ref } from 'vue'

/* Veninde-rabatten er slaaet fra indtil videre. Saet til true for at
   vise sektionen igen - markup og styling staar uroert. */
const visVenindeRabat = false

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

const ORG_ID = 'https://dsklinik.dk/#organization'
const BOOKING_URL = 'https://dsklinik.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=64c857a01938e8ee26f9d9f8fca49125b10711&bId=10711&dTpl=1&sSToken=7147f9ee6e0f4459509dbaca658244d6'

useHead({
    title: 'Kontakt DK Skønhedsklinik | Esbjerg & Vejle',
    meta: [
        { name: 'description', content: 'Kontakt DK Skønhedsklinik i Vejle og Esbjerg. Skriv en sms til os +45 53 50 37 50 eller direkte på vore sociale medier for en gratis forundersøgelse.' },
        { name: 'keywords', content: 'kontakt skønhedsklinik, kosmetisk klinik Vejle, kosmetisk klinik Esbjerg, book konsultation' },
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
            innerHTML: JSON.stringify({
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
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                "@id": "https://dsklinik.dk/#vejle",
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
                        "dayOfWeek": ["Sunday"],
                        "opens": "11:00", "closes": "18:00"
                    }
                ],
                "potentialAction": { "@type": "ReserveAction", "target": BOOKING_URL }
            })
        },

        // شعبه‌ی Esbjerg
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                "@id": "https://dsklinik.dk/#esbjerg",
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
                    }
                ],
                "potentialAction": { "@type": "ReserveAction", "target": BOOKING_URL }
            })
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "@id": "https://dsklinik.dk/#contact",
                "name": "Kontakt DK Skønhedsklinik",
                "url": "https://dsklinik.dk/kontaktos/",
                "mainEntityOfPage": { "@id": "https://dsklinik.dk/#organization" }
            })
        },
        // 👇 denne skal også have trailing slash
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
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

/* Samme regel som .bg-img i App.vue: heroen foelger sit indhold i stedet
   for at vaere laast til browservinduets hoejde. */
main {
    align-items: center;
    display: flex;
    height: auto;
    min-height: 0;
    padding-block: var(--hero-luft);
    padding-inline: 0;
    background-image: url('@/assets/BannerBehandling.webp') !important;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;

    p {
        width: 30vw;
    }

    /* Overlay */
    /* Overlayet skal daekke heroen, uanset hvor hoej den bliver. */
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.3);
        /* Sort overlay med 50% gennemsigtighed */
        z-index: 1;
        /* Sørger for, at overlayet ligger over baggrunden */
    }
}

.kontaktOs-wrapper {
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

/* Heroens to spalter: samme gitter med fast mellemrum som resten af
   websiden, saa de vokser sammen i stedet for at efterlade et tomt baelte. */
.flex {
    align-items: center;
    display: grid;
    gap: clamp(32px, 3.5vw, 72px);
    grid-template-columns: minmax(0, 1fr) minmax(0, .85fr);
    margin: 0 auto;
    max-width: var(--maal);
    width: 100%;
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

/* Spalterne var 40 % + resten med space-between. Paa en bred skaerm blev
   mellemrummet i midten et tomt baelte, der voksede med skaermen. Nu et
   gitter med fast mellemrum. */
.section-wrapper {
    align-items: center;
    display: grid;
    gap: 64px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    padding: 100px 0;

    .section-text {
        width: auto;
        line-height: 1.6;
        font-size: 16px;

        i, .inline-link {
            color: #2d58a1;
            font-weight: bold;
        }
    }

    .section-media {
        width: auto;
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

/* Instagram-baandet har kun ét barn (.width-margin), ikke to spalter, saa
   gitteret hoerer hjemme et niveau laengere inde. Uden det her havnede hele
   baandet i foerste gitterspalte og laa klistret til venstre kant. */
.section-wrapper.follow-insta-wrapper { display: block; }

.follow-insta-wrapper .flex-row {
    align-items: center;
    display: grid;
    gap: 64px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.follow-insta-wrapper {
    /* Sektionen havde praecis samme navy som footeren og laeste derfor som
       en del af den. Nu lys som de to sektioner ovenfor: siden har én moerk
       top (hero) og én moerk bund (footer), og alt indhold imellem er lyst. */
    background: transparent;

    h2,
    b,
    p {
        color: #153655 !important;
    }

    .follow-insta-text p { color: rgba(21, 54, 85, .78) !important; }

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
                border: 1px solid rgba(21, 54, 85, .14);
                border-radius: 15px;
                background: #fff;
                padding: 5px 15px;
                text-decoration: none;
                transition: 0.3s opacity, 0.15s border-color;
            }

            .soc:hover { border-color: rgba(45, 88, 161, .4); }

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

    .KontaktOsHeader .kontakt-undertitel {
        font-size: 20px;
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

    .kontakt-undertitel {
        font-size: 22px;
        font-weight: 700;
        margin-top: 10px;
        width: auto;
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
    display: flex;
    width: auto;
    z-index: 3;

    /* Billedet havde height: 100%, som kun gav mening da heroen var
       laast til en fast hoejde. Nu holder det selv sit forhold. */
    img {
        aspect-ratio: 3 / 2;
        border-radius: 20px;
        height: auto;
        object-fit: cover;
        width: 100%;
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
    /* --maal styrer bredden paa alle skaermstoerrelser. */
    .flex {
        display: flex;
        max-width: var(--maal);
    }

    .KontaktOsHeader {
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

    /* --maal styrer bredden paa alle skaermstoerrelser. */
    .flex {
        display: flex;
        max-width: var(--maal);
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
        height: auto;
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
    main p { width: auto !important; }

    main .flex { gap: 28px; }

    .klinikken { margin-top: 4px; }

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
    /* Felterne flød foer paa baggrunden ved siden af tekstspalten.
       Samme kortramme som klinikkortene, saa siden har ét formsprog. */
    background: #fff;
    border: 1px solid rgba(21, 54, 85, .10);
    border-radius: 18px;
    box-shadow: 0 10px 30px rgba(21, 54, 85, .06);
    box-sizing: border-box;
    display: grid;
    gap: 20px;
    padding: 32px 30px;
    width: 44%;
}

.callback-form *,
.callback-form *::before,
.callback-form *::after { box-sizing: border-box; }

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

/* ===== Ensrettede formularelementer =====
   Select, radio og checkbox var browserens standard midt i en ellers
   designet side - og de ser forskellige ud i hver browser og paa hvert
   styresystem. Her tegnes de selv, saa de er ens alle steder. */

.callback-form label {
    color: #153655;
    font-size: .92rem;
}

.callback-form input[type="text"],
.callback-form input[type="tel"],
.callback-form select,
.callback-form textarea {
    background: #fff;
    border: 1px solid rgba(21, 54, 85, .18);
    border-radius: 10px;
    color: #153655;
    margin-right: 0;
    padding: .72rem .85rem;
    transition: border-color .15s ease, box-shadow .15s ease;
    width: 100%;
}

.callback-form input::placeholder,
.callback-form textarea::placeholder { color: rgba(21, 54, 85, .42); }

.callback-form input[type="text"]:focus,
.callback-form input[type="tel"]:focus,
.callback-form select:focus,
.callback-form textarea:focus {
    border-color: #2d58a1;
    box-shadow: 0 0 0 3px rgba(45, 88, 161, .14);
    outline: none;
}

.callback-form textarea { line-height: 1.6; resize: vertical; }

/* Select: egen pil, saa den ikke skifter udseende fra browser til browser */
.callback-form select {
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'%3E%3Cpath d='M1 1l6 6 6-6' fill='none' stroke='%232d58a1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-position: right 14px center;
    background-repeat: no-repeat;
    background-size: 14px 9px;
    cursor: pointer;
    padding-right: 40px;
}

/* Radio og checkbox tegnes selv */
.callback-form input[type="radio"],
.callback-form input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    background: #fff;
    border: 1.5px solid rgba(21, 54, 85, .32);
    cursor: pointer;
    display: grid;
    flex: 0 0 auto;
    height: 20px;
    margin: 0 10px 0 0;
    padding: 0;
    place-content: center;
    transition: border-color .15s ease, background-color .15s ease;
    width: 20px;
}

.callback-form input[type="radio"] { border-radius: 50%; }
.callback-form input[type="checkbox"] { border-radius: 6px; }

.callback-form input[type="radio"]::before {
    background: #fff;
    border-radius: 50%;
    content: '';
    height: 8px;
    transform: scale(0);
    transition: transform .12s ease;
    width: 8px;
}

.callback-form input[type="checkbox"]::before {
    content: '';
    height: 10px;
    width: 6px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transform-origin: center;
    transition: transform .12s ease;
    margin-top: -2px;
}

.callback-form input[type="radio"]:checked,
.callback-form input[type="checkbox"]:checked {
    background: #2d58a1;
    border-color: #2d58a1;
}

.callback-form input[type="radio"]:checked::before { transform: scale(1); }
.callback-form input[type="checkbox"]:checked::before { transform: rotate(45deg) scale(1); }

.callback-form input[type="radio"]:focus-visible,
.callback-form input[type="checkbox"]:focus-visible {
    box-shadow: 0 0 0 3px rgba(45, 88, 161, .22);
    outline: none;
}

/* Klinikvalget som klikbare felter - stoerre traefflade paa mobil */
.callback-form fieldset.form-row { gap: 8px; }

.callback-form fieldset.form-row legend {
    color: #153655;
    font-size: .92rem;
    font-weight: 600;
}

.callback-form fieldset.form-row > label {
    align-items: center;
    border: 1px solid rgba(21, 54, 85, .14);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    font-weight: 500;
    padding: 10px 12px;
    transition: border-color .15s ease, background-color .15s ease;
}

.callback-form fieldset.form-row > label:hover {
    background: rgba(45, 88, 161, .04);
    border-color: rgba(45, 88, 161, .3);
}

.callback-form .consent {
    align-items: flex-start;
    color: rgba(21, 54, 85, .82);
    font-weight: 500;
    line-height: 1.5;
}

.callback-form .consent input { margin-top: 1px; }

.callback-form .btn {
    border-radius: 10px;
    font-size: .95rem;
    padding: .95rem 1.1rem;
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

.callback.section-wrapper { align-items: center; }

/* Hvad sker der, naar man har trykket send? Spoergsmaalet staar altid,
   og svaret giver tekstspalten den vaegt, formularkortet har. */
.kontakt-trin {
    counter-reset: trin;
    display: grid;
    gap: 14px;
    list-style: none;
    margin: 26px 0 0;
    padding: 0;
}

.kontakt-trin li {
    align-items: center;
    display: flex;
    gap: 14px;
    line-height: 1.55;
}

.kontakt-trin__nr {
    align-items: center;
    background: rgba(45, 88, 161, .09);
    border-radius: 50%;
    color: #2d58a1;
    display: flex;
    flex: 0 0 auto;
    font-size: .88rem;
    font-weight: 700;
    height: 30px;
    justify-content: center;
    width: 30px;
}

/* Legenden stod 6 px laengere inde end de oevrige labels */
.callback-form fieldset.form-row legend { padding: 0; }

/* Eyebrow paa de moerke baand skal vaere laesbar */
.sec__eyebrow--lys { color: rgba(255, 255, 255, .78) !important; }
.sec__eyebrow--lys::before { background: rgba(255, 255, 255, .6) !important; }

/* ===== Klinikkort paa kontaktsiden ===== */
.kontakt-klinikker {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: var(--maal);
    padding: 70px 20px 10px;
    width: 100%;
}

.kontakt-klinikker *,
.kontakt-klinikker *::before,
.kontakt-klinikker *::after { box-sizing: border-box; }

.kontakt-klinikker__head { margin-bottom: 30px; max-width: 70ch; }

.kontakt-klinikker__head h2 {
    color: #153655;
    font-size: clamp(1.5rem, 2.4vw, 2rem) !important;
    margin: 0 0 12px;
}

.kontakt-klinikker__lead {
    color: rgba(21, 54, 85, .76);
    line-height: 1.7;
    margin: 0;
}

.kontakt-klinikker__grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.kontakt-kort {
    background: #fff;
    border: 1px solid rgba(21, 54, 85, .10);
    border-radius: 18px;
    box-shadow: 0 10px 30px rgba(21, 54, 85, .06);
    padding: 30px 28px;
}

.kontakt-kort h3 {
    color: #153655;
    font-size: 1.25rem;
    margin: 0 0 18px;
}

.kontakt-kort dl {
    border-top: 1px solid rgba(21, 54, 85, .08);
    margin: 0 0 20px;
}

.kontakt-kort dl > div {
    border-bottom: 1px solid rgba(21, 54, 85, .08);
    display: grid;
    gap: 14px;
    grid-template-columns: 112px minmax(0, 1fr);
    padding: 12px 0;
}

.kontakt-kort dt {
    color: rgba(21, 54, 85, .62);
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
}

.kontakt-kort dd {
    color: #153655;
    font-weight: 600;
    margin: 0;
}

.kontakt-kort address { font-style: normal; line-height: 1.5; }

.kontakt-kort__note {
    color: rgba(21, 54, 85, .60);
    display: block;
    font-size: .85rem;
    font-weight: 400;
    margin-top: 4px;
}

.kontakt-kort dd a { color: #2d58a1; font-size: 1.05rem; text-decoration: none; }
.kontakt-kort dd a:hover { text-decoration: underline; }

.kontakt-kort__links {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin: 0;
}

.kontakt-kort__links a {
    color: #2d58a1;
    font-weight: 600;
    font-size: .95rem;
    text-decoration: none;
}

.kontakt-kort__links a:hover { text-decoration: underline; }

@media (max-width: 880px) {
    .kontakt-klinikker { padding: 44px 20px 0; }
    .kontakt-klinikker__grid { grid-template-columns: minmax(0, 1fr); }
    .kontakt-kort { padding: 24px 20px; }
    .kontakt-kort dl > div { grid-template-columns: minmax(0, 1fr); gap: 4px; }
}

/* ===== Hero paa kontaktsiden =====
   Heroen gentog adresser, telefon og e-mail, som ogsaa staar i de to
   klinikkort lige nedenunder. Den bruger nu pladsen paa det, kortene ikke
   siger: hvad man kan forvente, og én tydelig handling. */
.KontaktOsHeader .hero-lead {
    color: rgba(255, 255, 255, .84) !important;
    font-size: clamp(15px, 1.02vw, 17px);
    line-height: 1.75;
    margin: 16px 0 0;
    max-width: 58ch;
    width: 100%;
}

.hero-punkter {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 12px;
    list-style: none;
    margin: 26px 0 0;
    padding: 0;
    position: relative;
    z-index: 3;
}

.hero-punkter li {
    align-items: center;
    background: rgba(255, 255, 255, .10);
    border: 1px solid rgba(255, 255, 255, .22);
    border-radius: 999px;
    color: #fff;
    display: flex;
    font-size: .88rem;
    font-weight: 600;
    gap: 8px;
    padding: 8px 16px 8px 13px;
}

.hero-punkter li::before {
    content: '';
    flex: 0 0 auto;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background: #9fc0f5;
}

.hero-handlinger {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin: 28px 0 0;
    position: relative;
    z-index: 3;
}

.hero-knap {
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    font-family: inherit;
    font-size: .95rem;
    font-weight: 700;
    padding: 16px 26px;
    text-decoration: none;
    transition: background-color .15s ease, transform .15s ease;
    white-space: nowrap;
}

.hero-knap--primaer { background: #fff; color: #1e4078 !important; }

.hero-knap--primaer:hover,
.hero-knap--primaer:focus-visible { background: #eaf0fa; transform: translateY(-1px); }

.hero-knap--sekundaer {
    background: transparent;
    border: 1.5px solid rgba(255, 255, 255, .55);
    color: #fff !important;
}

.hero-knap--sekundaer:hover,
.hero-knap--sekundaer:focus-visible {
    background: rgba(255, 255, 255, .12);
    border-color: #fff;
}

.hero-mail {
    color: rgba(255, 255, 255, .72) !important;
    font-size: .9rem;
    margin: 18px 0 0;
    position: relative;
    z-index: 3;
}

.hero-mail a {
    color: #fff !important;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
}

@media (max-width: 880px) {
    .hero-handlinger { flex-direction: column; }
    .hero-knap { text-align: center; width: 100%; box-sizing: border-box; }
}
</style>