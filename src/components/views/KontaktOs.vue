<template>
    <main :class="[{ 'dark-mode-cover-home': dark }]">

        <div class="flex">

            <div class="KontaktOsHeader">
                <h1>Kontakt DK Skønhedsklinik </h1>
                <h2>– Vi står klar til at hjælpe dig!</h2>
                <p>Har du spørgsmål til vores behandlinger eller ønsker du at booke en gratis konsultation?</p>
            </div>

            <div class="flex_info">
                <div class="KontaktInformation">
                    <div class="Informations">
                        <img src="../../assets/icons/mailIcon.webp" alt="" aria-hidden="true">
                        <p><a href="mailto:dr_arash_bagheri@yahoo.com">dr_arash_bagheri@yahoo.com</a></p>
                    </div>

                    <div class="Informations">
                        <img src="../../assets/icons/phoneIcon.webp" alt="" aria-hidden="true">
                        <p><a href="tel:+4553503750">+45 53 50 37 50</a></p>
                    </div>

                    <div class="Informations">
                        <img src="../../assets/icons/mapIcon.webp" alt="" aria-hidden="true">
                        <p>
                            <a href="https://maps.google.com/?q=Søndergade+50,+7100+Vejle">Søndergade 50, 7100 Vejle</a>

                            <a href="https://maps.google.com/?q=Havnegade+6,+6700+Esbjerg">Havnegade 6, 6700 Esbjerg</a>
                        </p>
                    </div>
                </div>
                <div class="klinikken">
                    <img src="../../assets/OmOs.webp" alt="klinik miljø">
                </div>
            </div>

        </div>

    </main>

    <div class="location-div" id="vejle">
        <h1>Vores Klinik i Vejle</h1>
        <div class="map-container">
            <iframe title="Kort over DK Skønhedsklinik – Vejle"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001.3672712397921!2d9.53026749213341!3d55.70648552777441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c82512ffcc1e5%3A0xaf67018cb8d0de85!2sS%C3%B8ndergade%2050%2C%207100%20Vejle!5e0!3m2!1sda!2sdk!4v1738930115456!5m2!1sda!2sdk"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>


    <div class="location-div secondaryColor" id="esbjerg">
        <h1>Vores Klinik i Esbjerg</h1>
        <div class="map-container LessPadding">
            <iframe title="Kort over DK Skønhedsklinik – Esbjerg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1007.5736945444714!2d8.454311073821758!3d55.46394968471335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b26d3658a9d7f%3A0xcd1359f470799971!2sHavnegade%206%2C%206700%20Esbjerg!5e0!3m2!1sda!2sdk!4v1738931329213!5m2!1sda!2sdk"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>


</template>




<script setup>
import { useHead } from '@unhead/vue'
const ORG_ID = 'https://dsklinik.dk/#org'
const BOOKING_URL = 'https://dsklinik.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=64c857a01938e8ee26f9d9f8fca49125b10711&bId=10711&dTpl=1&sSToken=7147f9ee6e0f4459509dbaca658244d6'

useHead({
    title: 'Kontakt DK Skønhedsklinik – Vejle & Esbjerg | Gratis konsultation',
    meta: [
        { name: 'description', content: 'Kontakt DK Skønhedsklinik i Vejle og Esbjerg. Skriv en sms til os +45 53 50 37 50 eller direkte på vore sociale medier for en gratis forundersøgelse.' },
        { property: 'og:title', content: 'Kontakt DK Skønhedsklinik' },
        { property: 'og:description', content: 'Har du spørgsmål? Kontakt os for rådgivning og gratis forundersøgelse.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://dsklinik.dk/og/contact.jpg' },
        { name: 'twitter:image', content: 'https://dsklinik.dk/og/contact.jpg' },
        { property: 'og:site_name', content: 'DK Skønhedsklinik' },
        { property: 'og:locale', content: 'da_DK' },
        { property: 'og:url', content: 'https://dsklinik.dk/kontaktos' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'robots', content: 'index, follow' }
    ],
    link: [
        { rel: 'canonical', href: 'https://dsklinik.dk/kontaktos' }
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
                "url": "https://dsklinik.dk/kontaktos#vejle",
                "image": "https://dsklinik.dk/og/logo.webp",
                "parentOrganization": { "@id": ORG_ID },
                "telephone": "+4553503750",
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
                "url": "https://dsklinik.dk/kontaktos#esbjerg",
                "image": "https://dsklinik.dk/og/logo.webp",
                "parentOrganization": { "@id": ORG_ID },
                "telephone": "+4553503750",
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
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://dsklinik.dk/#contact",
            "name": "Kontakt DK Skønhedsklinik",
            "url": "https://dsklinik.dk/kontaktos",
            "mainEntityOfPage": { "@id": "https://dsklinik.dk/#org" }
        },
        // 👇 این را اضافه کن
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Forside", "item": "https://dsklinik.dk/" },
                    { "@type": "ListItem", "position": 2, "name": "Kontakt", "item": "https://dsklinik.dk/kontaktos" }
                ]
            })
        }
    ]
})


defineProps({
    dark: {},
});
</script>




<style lang="scss" scoped>
@use '../css/style.scss';

main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: 100vh;
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
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        /* Sort overlay med 50% gennemsigtighed */
        z-index: 1;
        /* Sørger for, at overlayet ligger over baggrunden */
    }
}

.flex {
    display: flex;
    flex-direction: column;
    margin-top: 30vh;
    padding: 0 18%;
}

.flex_info {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    position: absolute;
    width: 60vw;
    bottom: 0;
}

.KontaktInformation {
    margin-top: 0 !important;
}

.Mail {
    padding-top: 0 !important;
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
    width: 45vw;

    h1 {
        font-size: 70px !important;
    }

    h2 {
        font-size: 40px !important;
        margin-top: 10px !important;
    }

    h1,
    h2,
    p {
        position: relative;
        z-index: 3;
        color: #fff;
    }

    p {
        font-size: 24px;
        width: 45%;
    }
}

.Informations {
    position: relative;
    z-index: 3;
    display: flex;
    width: 12vw;
    min-width: 440px;
    padding: 20px 0;

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
        font-size: 22px;
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
    width: 35vw;
    display: flex;
    z-index: 3;

    img {
        width: 100%;
        height: auto;
        border-radius: 20px;
    }
}

.location-div {
    background: var(--secondary-color) !important;
    padding: 100px 0;

    h1 {
        color: var(--quaternary-color) !important;
        text-align: center;
        margin-bottom: 50px !important;
        font-size: 46px;
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
        flex-direction: column;
        padding: 0 13%;
    }

    .KontaktOsHeader {
        width: 60vw !important;

        h1 {
            font-size: 60px !important;
        }

        h2 {
            font-size: 30px !important;
            margin-top: 10px !important;
        }

        h1,
        h2,
        p {
            position: relative;
            z-index: 3;
            color: #fff;
        }

        p {
            font-size: 24px;
            width: 45%;
        }
    }

    .KontaktInformation {
        margin-top: 0 !important;
    }

    .Mail {
        padding-top: 0 !important;
    }
}


@media only screen and (max-width: 1750px) {
    .klinikken {
        width: 30vw;
    }
}


@media only screen and (max-width: 1500px) {
    .flex {
        margin-top: 25vh;
    }

    .KontaktOsHeader p {
        font-size: 22px;
        width: 50%;
        line-height: 30px;
    }
}

.dark-mode-cover-home {
    &::before {
        background-color: rgba(0, 0, 0, 0.5) !important;
    }

    h1 {
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
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
        margin-top: 20vh !important
    }
}

@media only screen and (max-width: 890px) {
    .klinikken {
        width: 45vw !important;
        right: 95px !important;
    }

    .flex {
        padding: 0 7%;
        margin-top: 19vh !important;
    }

    .Informations {
        padding: 12px 0;
    }
}


@media only screen and (max-width: 780px) {
    main {
        padding: 0 5%;

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
}

@media only screen and (max-width: 700px) {
    .flex {
        padding: 0 5%;
    }

    .KontaktOsHeader {
        width: auto !important;
    }

    .KontaktOsHeader h1 {
        padding: 10vw 0 0 0 !important;
        font-size: 45px !important;
    }

    .KontaktOsHeader h2 {
        font-size: 22px !important;
    }

    .KontaktOsHeader p {
        font-size: 20px !important;
    }

    .KontaktInformation {
        margin-top: 50px !important;

        p {
            font-size: 18px !important;
            flex-direction: column;
            align-items: flex-start;
        }
    }

    .klinikken {
        width: 50vw !important;
        right: 40px !important;
    }
}

@media only screen and (max-width: 600px) {
    .klinikken {
        width: 60vw !important;
        right: 40px !important;
    }

    .KontaktInformation {
        img {
            width: 30px;
            height: 30px;
            margin-right: 20px;
        }
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

    .klinikken {
        width: 82vw !important;
        right: unset !important;
    }
}
</style>