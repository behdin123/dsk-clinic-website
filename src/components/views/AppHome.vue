<template>
  <div class="home">

    <div id="image-dark-version-home" :class="['bg-img', 'img']">

      <div class="hero-content-wrapper">
        <div class="hero-title">
          <p class="hero-eyebrow">DK Skønhedsklinik</p>
          <h1 data-aos="fade-right" data-aos-duration="3000">Lægebehandlet
            Botox, Filler & Hudbehandlinger i
            <span class="locs">Esbjerg &amp; Vejle</span>
          </h1>
        </div>

        <p class="mobile-show hero-lead">
          Behandlingerne udføres af læge Arash Bagheri, der har mere end 20 års erfaring.
        </p>

        <p class="mobile_hide" data-aos="fade-right" data-aos-duration="3000">
          Hos DK Skønhedsklinik får du sikre, lægebehandlede kosmetiske behandlinger med fokus på naturlige resultater.
          Vi tilbyder
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }" class="inline-link"
            aria-label="Botox rynkebehandling – læs mere" data-tooltip="Går til: Botox">
            <strong>Botox</strong>
          </router-link>,
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }" class="inline-link"
            aria-label="Filler – læs mere" data-tooltip="Går til: Filler">
            <strong>Filler</strong>
          </router-link>,
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'mesotherapy' } }" class="inline-link"
            aria-label="Mesotherapy – læs mere" data-tooltip="Går til: Mesotherapy">
            <strong>Mesotherapy</strong>
          </router-link>
          og
          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }" class="inline-link"
            aria-label="Skinbooster – læs mere" data-tooltip="Går til: Skinbooster">
            <strong>Skinbooster</strong>
          </router-link>
          – skræddersyet til dine behov i Esbjerg og Vejle.
        </p>

        <p class="mobile_hide">
          Book en gratis forundersøgelse og få ærlig rådgivning hele vejen til opfølgning.
        </p>

        <div>
          <ul class="mobile-show hero-punkter" data-aos="fade-right" data-aos-duration="3000">
            <li>Gratis forundersøgelse</li>
            <li>Uforpligtende rådgivning</li>
          </ul>

          <div class="booking-button">
            <button class="general_button" type="button" @click="openBookingFromHero"
              aria-label="Book gratis forundersøgelse">
              <span class="mobile_hide">Book nu</span>
              <span class="mobile-show">Book gratis forundersøgelse</span>
            </button>
            <a class="mobile-show hero-ring"
              href="sms:+4553503750?&amp;body=Hej%20DK%20Sk%C3%B8nhedsklinik%2C%20jeg%20vil%20gerne%20h%C3%B8re%20mere%20om%20"
              aria-label="Send os en sms på 53 50 37 50">
              Send os en sms
            </a>
          </div>
        </div>
      </div>

      <!-- <picture class="hero-arash-image">

        <source srcset="@/assets/Arash_Bagheri4.webp" type="image/webp" media="(max-width: 600px)" />
        <img src="@/assets/Arash_Bagheri3.webp" alt="">
      </picture> -->



      <div class="scroll-indicator">
        <span>scroll ned</span>
        <div class="line"></div>
      </div>

    </div>

    <!-- Behandlinger: kortene laeses fra det centrale register, saa navn,
         tekst og pris er de samme som i menuen og paa oversigtssiden. -->
    <section class="fs-baand" aria-labelledby="fs-beh-titel">
      <div class="fs-indre">
        <div class="fs-hoved">
          <div class="sec__head behandlings-title">
            <p class="sec__eyebrow">Behandlinger</p>
            <h2 id="fs-beh-titel">Find den behandling, der passer til dig</h2>
            <p class="sec__lead">
              Alle behandlinger udføres af klinikkens læge og begynder med en gratis forundersøgelse.
            </p>
          </div>
          <router-link to="/behandlinger/" class="fs-alle">
            Se alle behandlinger<span class="pil" aria-hidden="true"></span>
          </router-link>
        </div>

        <ul class="fs-kortliste">
          <li v-for="b in forsideBehandlinger" :key="b.slug">
            <router-link :to="b.path" class="fs-kort" :aria-label="`${b.navn} – læs mere`">
              <div class="fs-kort__medie">
                <img :src="b.billede" alt="" width="700" height="525" loading="lazy" decoding="async">
              </div>
              <div class="fs-kort__krop">
                <p class="fs-kort__kategori">{{ b.kategoriNavn }}</p>
                <h3>{{ b.navn }}</h3>
                <p class="fs-kort__tekst">{{ b.kort }}</p>
                <p class="fs-kort__fod">
                  <span class="fs-kort__pris">{{ b.pris }}</span>
                  <span class="fs-kort__pil" aria-hidden="true"><span class="pil"></span></span>
                </p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>

    <!-- Klinikkens laege -->
    <section class="fs-baand fs-baand--navy fs-baand--laege" aria-labelledby="fs-laege-titel">
      <div class="fs-indre fs-laege">
        <figure class="fs-laege__portraet">
          <img src="../../assets/Arash_Bagheri2.webp" width="800" height="1271" loading="lazy" decoding="async"
            alt="Læge Arash Bagheri, indehaver af DK Skønhedsklinik">
        </figure>

        <div class="fs-laege__tekst">
          <p class="sec__eyebrow">Klinikkens læge</p>
          <h2 id="fs-laege-titel">Læge Arash Bagheri</h2>
          <blockquote class="fs-laege__citat">
            <p>
              Mit navn er Arash Bagheri, læge og indehaver af DK Skønhedsklinik. Jeg har været læge
              i 30 år – de seneste 17 i det danske sundhedsvæsen – og har mere end 20 års erfaring inden for
              kosmetiske behandlinger. Jeg brænder for at hjælpe mine patienter til øget selvtillid og velvære.
            </p>
            <p>
              I DK Skønhedsklinik sørger jeg for, at hver behandling lever op til vores høje standarder for
              sikkerhed, etik og æstetik. Vi går aldrig på kompromis med din tryghed.
            </p>
          </blockquote>
          <p class="fs-laege__lille">
            Vi står altid klar til at hjælpe og rådgive dig på den bedst mulige måde. Du kan kontakte os
            med alle de spørgsmål, du måtte have om din huds friskhed og glød.
          </p>
          <router-link to="/omos/" class="fs-alle fs-alle--lys">
            Læs mere om klinikkens læge<span class="pil" aria-hidden="true"></span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Forundersoegelse -->
    <section class="fs-baand" aria-labelledby="fs-forund-titel">
      <div class="fs-indre split">
        <div class="split__tekst">
          <div class="sec__head">
            <p class="sec__eyebrow">Forundersøgelse</p>
            <h2 id="fs-forund-titel">Book en gratis online forundersøgelse</h2>
          </div>
          <p>
            <strong>Klar til at tage første skridt?</strong> Hos DK Skønhedsklinik tilbyder vi en gratis og
            uforpligtende online konsultation, hvor du sammen med lægen kan gennemgå dine ønsker og muligheder
            for behandlingen. Vi sørger for, at du føler dig tryg ved at tale om eventuelle gener, risici og
            mulige komplikationer.
          </p>
          <ul class="tjek fs-tjek">
            <li>Konsultationen udføres af klinikkens læge</li>
            <li>Gratis og uforpligtende</li>
            <li>Behandling tidligst 2 dage efter konsultationen</li>
          </ul>
          <div class="fs-handling">
            <button class="knap knap--primaer" type="button" @click="openBookingFromHero">
              Book gratis forundersøgelse
            </button>
          </div>
        </div>

        <div class="split__medie fs-medie fs-medie--hoej">
          <img :src="imgOmOs" width="1100" height="1366" loading="lazy" decoding="async"
            alt="Læge Arash Bagheri under en konsultation hos DK Skønhedsklinik">
        </div>
      </div>
    </section>

    <!-- Sociale medier: fire faste fliser i stedet for en slider. Ingen
         script, ingen autoplay - paa mobil ruller raekken vandret med
         scroll-snap. Billederne er opslag med tekst, saa de maa ikke blive smaa. -->
    <section class="fs-baand fs-baand--navy fs-some" aria-labelledby="fs-some-titel">
      <div class="fs-indre">
        <div class="fs-hoved">
          <div class="sec__head">
            <p class="sec__eyebrow">Sociale medier</p>
            <h2 id="fs-some-titel">Seneste opslag fra klinikken</h2>
            <p class="sec__lead">Tilbud, nyheder og ledige tider deler vi først på Instagram.</p>
          </div>
          <a class="fs-alle fs-alle--lys" :href="INSTAGRAM_URL" target="_blank" rel="noopener noreferrer">
            Følg os på Instagram<span class="pil" aria-hidden="true"></span>
          </a>
        </div>

        <ul class="fs-some__liste" aria-label="Seneste opslag">
          <li v-for="o in opslag" :key="o.alt">
            <a class="fs-some__flise" :href="INSTAGRAM_URL" target="_blank" rel="noopener noreferrer">
              <img :src="o.lille" :srcset="`${o.lille} 640w, ${o.stor} 1000w`"
                sizes="(max-width: 700px) 72vw, (max-width: 1000px) 44vw, 240px" width="640" height="640"
                loading="lazy" decoding="async" :alt="o.alt">
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Om klinikkerne -->
    <section class="fs-baand" aria-labelledby="fs-klinik-titel">
      <div class="fs-indre split split--medie-foerst">
        <div class="split__tekst">
          <div class="sec__head">
            <p class="sec__eyebrow">Om klinikkerne</p>
            <h2 id="fs-klinik-titel">Ekspertise og kvalitet i hver behandling</h2>
          </div>
          <p>
            Vores læge, som har mere end <strong>20 års erfaring</strong> inden for skønhedsbehandlinger,
            vil sørge for, at du får en behandling, der er skræddersyet til dig. Vi specialiserer os
            i æstetiske løsninger, der tilpasses dine individuelle behov.
          </p>
          <p>
            I vores klinik kombinerer vi den <strong>nyeste teknologi</strong> med høj faglig ekspertise for at
            sikre naturlige og harmoniske resultater. Vi prioriterer sikkerhed, kvalitet og kundetilfredshed,
            så du kan føle dig tryg gennem hele forløbet.
          </p>
          <div class="fs-handling">
            <router-link to="/omos/" class="knap knap--sekundaer">Læs mere om DK Skønhedsklinik</router-link>
            <button class="fs-alle fs-alle--knap" type="button" @click="openBookingFromHero">
              Book gratis forundersøgelse<span class="pil" aria-hidden="true"></span>
            </button>
          </div>
        </div>

        <div class="split__medie fs-medie">
          <img :src="imgClinic" width="1000" height="663" loading="lazy" decoding="async"
            alt="Læge Arash Bagheri taler med en patient i klinikken">
        </div>
      </div>
    </section>

    <section class="why-us-section" aria-labelledby="why-us-title">
      <div class="why-us-container hvorfor">
        <div class="hvorfor__tekst">
          <p class="sec__eyebrow">Hvorfor os</p>
          <h2 id="why-us-title" class="hvorfor__titel">Hvorfor vælge DK Skønhedsklinik?</h2>
          <p>
            Alle behandlinger udføres af klinikkens ansvarlige læge, Arash Bagheri – ikke af en kosmetolog.
            Vi går efter subtile forbedringer frem for drastiske forandringer: Du vil se friskere ud, men
            stadig ligne dig selv.
          </p>
          <p>
            Klinikken er registreret hos Styrelsen for Patientsikkerhed, og vi følger alle regler om
            forundersøgelse og 48 timers betænkningstid.
          </p>
          <button class="hvorfor__knap" type="button" @click="openBookingFromWhy">
            Book gratis forundersøgelse
          </button>
        </div>

        <dl ref="hvorforRef" class="hvorfor__tal">
          <div>
            <dt><span data-tal="20">20</span>+</dt>
            <dd>års erfaring med kosmetiske behandlinger.</dd>
          </div>
          <div>
            <dt><span data-tal="30">30</span></dt>
            <dd>år som læge – heraf 17 i det danske sundhedsvæsen.</dd>
          </div>
          <div>
            <dt><span data-tal="2">2</span></dt>
            <dd>
              klinikker i
              <router-link :to="{ name: 'clinic-vejle' }">Vejle</router-link> og
              <router-link :to="{ name: 'clinic-esbjerg' }">Esbjerg</router-link>
              – aftener i Esbjerg og søndage i Vejle.
            </dd>
          </div>
          <div>
            <dt>0 kr.</dt>
            <dd>for forundersøgelsen. Gratis og uforpligtende – du betaler først efter behandlingen.</dd>
          </div>
        </dl>
      </div>
    </section>


    <section v-if="faqs.length" id="faq" class="faq">
      <div class="sec sec--kort faq-kort">
        <div class="sec__head">
          <p class="sec__eyebrow">Spørgsmål</p>
          <h2 id="faq-title">Ofte stillede spørgsmål</h2>
        </div>

        <FaqList :items="faqs" />
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useHead } from '@unhead/vue'
import FaqList from '@/components/FaqList.vue'
import imgOmOs from '@/assets/DSK-samtale.webp'
import imgClinic from '@/assets/behandlinger/consultation.webp'
import { findBehandling, KATEGORIER } from '@/data/behandlinger'
import insta1 from '@/assets/Instagram/din_skønhed.webp'
import insta1Lille from '@/assets/Instagram/din_skønhed-640.webp'
import insta2 from '@/assets/Instagram/Filler_behandling.webp'
import insta2Lille from '@/assets/Instagram/Filler_behandling-640.webp'
import insta3 from '@/assets/Instagram/Mesotherapy_Arash.webp'
import insta3Lille from '@/assets/Instagram/Mesotherapy_Arash-640.webp'
import insta4 from '@/assets/Instagram/Skinbooster_Arash12.webp'
import insta4Lille from '@/assets/Instagram/Skinbooster_Arash12-640.webp'

const INSTAGRAM_URL = 'https://www.instagram.com/dk_skonhedsklinik/'

// Fire opslag fra klinikkens Instagram. Alt-teksten gengiver opslagets tekst.
const opslag = [
  { stor: insta1, lille: insta1Lille, alt: 'Opslag: Din skønhed – din beslutning. Lægen behandler en patient i klinikken' },
  { stor: insta2, lille: insta2Lille, alt: 'Opslag: Filler behandling fra 1.350 kr. Lægen lægger filler hos en patient' },
  { stor: insta3, lille: insta3Lille, alt: 'Opslag: Mesoterapi fra 750 kr. i Vejle og Esbjerg. Lægen behandler en patient' },
  { stor: insta4, lille: insta4Lille, alt: 'Opslag: Skinbooster fra 1.350 kr. Lægen giver en patient en skinbooster' }
]

// Forsidens seks kort. Samme kilde som menu, footer og oversigtssiden.
const stort = t => (t ? t.charAt(0).toUpperCase() + t.slice(1) : '')
const forsideBehandlinger = ['botox', 'filler', 'laebefiller', 'skinbooster', 'microneedling', 'mesoterapi']
  .map(findBehandling)
  .filter(b => b && b.status === 'live')
  .map(b => ({
    ...b,
    kategoriNavn: KATEGORIER.find(k => k.id === b.kategori)?.navn || '',
    pris: stort(b.prisTekst)
  }))
import heroMobil from '@/assets/BannerFrontPageMobile6.webp'
import heroTablet from '@/assets/BannerFrontPageMobile3.webp'
import heroDesktop from '@/assets/BannerBehandling3.webp'

const faqs = [
  {
    q: "<b>Gør behandlingerne ondt?</b>",
    a: "De fleste af vores behandlinger er relativt hurtige og med minimal smerte. Ved fx filler bruges lokalbedøvende creme efter behov.",
  },
  {
    q: "<b>Hvem udfører behandlingerne?</b>",
    a: "Alle behandlinger hos DK Skønhedsklinik udføres af klinikkens ansvarlige læge, Arash Bagheri. Du er dermed altid i erfarne hænder hos os.",
  },
  {
    q: "<b>Hvordan foregår en konsultation?</b>",
    a: "Til en gratis konsultation taler vi om dine ønsker og eventuelle bekymringer. Vi gennemgår din sygehistorie for at sikre, at behandlingen er forsvarlig for dig. Du får en anbefaling på behandlingstype, og vi forklarer alt om forløbet, efterforløbet og pris. Du har derefter mindst 48 timers betænkningstid før evt. behandling, jf. lovgivningen.",
  },
  {
    q: "<b>Har I åbent om aftenen?</b>",
    a: "Ja. I Esbjerg har vi åbent mandag til fredag kl. 17-20, og i Vejle har vi åbent om søndagen kl. 11-18. Vi ved mange har travlt i dagtimerne, så vi forsøger at være fleksible. Kontakt os for at finde et tidspunkt der passer dig.",
  },
  {
    q: "<b>Kan jeg få en hurtig tid?</b>",
    a: "Typisk kan vi tilbyde konsultation inden for 1 uge og selve behandlingen 2-3 dage efter (pga. lovpligtig betænkningstid). Akutte tider kan forekomme ved afbud – hold øje med vores sociale medier, hvor vi annoncerer ledige tider med kort varsel.",
  },
];

const stripTags = (s) => String(s || '').replace(/<[^>]*>/g, '').trim()

const faqLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(item => ({
    '@type': 'Question',
    name: stripTags(item.q),
    acceptedAnswer: {
      '@type': 'Answer',
      text: Array.isArray(item.a)
        ? item.a.map(stripTags).join('\n\n')
        : stripTags(item.a)
    }
  }))
}))

useHead({
  title: 'Botox & filler i Esbjerg & Vejle | DK Skønhedsklinik',
  meta: [
    { name: 'description', content: 'Kosmetisk klinik i Esbjerg og Vejle med botox, filler, skinbooster, mesotherapy og microneedling – udført af læge. Book gratis forundersøgelse.' },
    { name: 'keywords', content: 'botox esbjerg, botox vejle, rynkebehandling, kosmetisk klinik esbjerg, kosmetisk klinik vejle, skønhedsklinik vejle, filler vejle, skønhedsklinik esbjerg, filler esbjerg, hudpleje vejle, mesotherapy, skinbooster, microneedling' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { name: 'geo:region', content: 'DK-86,DK-82' },
    { name: 'geo:placename', content: 'Vejle, Esbjerg, Danmark' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'DK Skønhedsklinik – lægebehandlede skønhedsbehandlinger' },
    { property: 'og:description', content: 'Naturlige og harmoniske resultater. Book gratis forundersøgelse i dag.' },
    { property: 'og:url', content: 'https://dsklinik.dk/' },
    { property: 'og:image', content: 'https://dsklinik.dk/og/home.webp' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'DK Skønhedsklinik' },
    { name: 'twitter:image', content: 'https://dsklinik.dk/og/home.webp' }
  ],
  link: [
    /* Heroens baggrundsbillede ligger i CSS og opdages ellers foerst sent
       (LCP). Preload med media, saa hver skaermstoerrelse kun henter sit. */
    { rel: 'preload', as: 'image', href: heroMobil, media: '(max-width: 500px)', fetchpriority: 'high' },
    { rel: 'preload', as: 'image', href: heroTablet, media: '(min-width: 501px) and (max-width: 1200px)', fetchpriority: 'high' },
    { rel: 'preload', as: 'image', href: heroDesktop, media: '(min-width: 1201px)', fetchpriority: 'high' },
    { rel: 'canonical', href: 'https://dsklinik.dk/' },
    { rel: 'alternate', hreflang: 'da-DK', href: 'https://dsklinik.dk/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalClinic",
            "@id": "https://dsklinik.dk/#esbjerg",
            "name": "DK Skønhedsklinik – Esbjerg",
            "url": "https://dsklinik.dk/klinik/esbjerg/",
            "telephone": "+45 53 50 37 50",
            "email": "dr_arash_bagheri@yahoo.com",
            "image": "https://dsklinik.dk/og/home.webp",
            "logo": "https://dsklinik.dk/og/logo.webp",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Havnegade 6",
              "addressLocality": "Esbjerg",
              "postalCode": "6700",
              "addressCountry": "DK"
            },
            "hasMap": "https://maps.google.com/?q=Havnegade+6,+6700+Esbjerg",
            "geo": { "@type": "GeoCoordinates", "latitude": 55.4639497, "longitude": 8.4543111 },
            "areaServed": ["Esbjerg", "Varde", "Ribe", "Bramming", "Sydvestjylland"],
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "17:00", "closes": "20:00" }
            ],
            "parentOrganization": { "@id": "https://dsklinik.dk/#organization" },
            "sameAs": [
              "https://share.google/GKWF9sJbSFoxUsfJA",
              "https://www.facebook.com/profile.php?id=100054595142567",
              "https://www.instagram.com/dk_skonhedsklinik/"
            ]
          },
          {
            "@type": "MedicalClinic",
            "@id": "https://dsklinik.dk/#vejle",
            "name": "DK Skønhedsklinik – Vejle",
            "url": "https://dsklinik.dk/klinik/vejle/",
            "telephone": "+45 53 50 37 50",
            "email": "dr_arash_bagheri@yahoo.com",
            "image": "https://dsklinik.dk/og/home.webp",
            "logo": "https://dsklinik.dk/og/logo.webp",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Søndergade 50",
              "addressLocality": "Vejle",
              "postalCode": "7100",
              "addressCountry": "DK"
            },
            "hasMap": "https://maps.google.com/?q=S%C3%B8ndergade+50,+7100+Vejle",
            "geo": { "@type": "GeoCoordinates", "latitude": 55.7064855, "longitude": 9.5302675 },
            "areaServed": ["Vejle", "Kolding", "Fredericia", "Horsens", "Trekantområdet"],
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "11:00", "closes": "18:00" }
            ],
            "parentOrganization": { "@id": "https://dsklinik.dk/#organization" },
            "sameAs": [
              "https://share.google/xmCE5ekm5KMWgjowu",
              "https://www.facebook.com/profile.php?id=100054595142567",
              "https://www.instagram.com/dk_skonhedsklinik/"
            ]
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqLd.value)
    }
  ]
})

const openBookingFromHero = () => {
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'home_hero' } }))
  // (اختیاری) آنالیتیکس:
  window.gtagEvent?.('booking_click', { placement: 'home_hero', component: 'AppHome' })
}

/* Tallene i "Hvorfor vaelge" taeller op, naar sektionen kommer i syne.
   HTML'en indeholder de rigtige tal (Google, skaermlaesere, uden JS);
   de saettes kun til 0, hvis animationen faktisk kan koere. Én observer,
   der slipper igen efter foerste visning, og requestAnimationFrame. */
const hvorforRef = ref(null)

onMounted(() => {
  const el = hvorforRef.value
  if (!el || !('IntersectionObserver' in window)) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const tal = [...el.querySelectorAll('[data-tal]')]
  tal.forEach((n) => { n.textContent = '0' })

  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return
    io.disconnect()
    const start = performance.now()
    const varighed = 1400
    const trin = (nu) => {
      const p = Math.min(1, (nu - start) / varighed)
      const k = 1 - Math.pow(1 - p, 3)
      tal.forEach((n) => { n.textContent = String(Math.round(Number(n.dataset.tal) * k)) })
      if (p < 1) requestAnimationFrame(trin)
    }
    requestAnimationFrame(trin)
  }, { threshold: 0.35 })

  io.observe(el)
})

const openBookingFromWhy = () => {
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'home_why' } }))
  window.gtagEvent?.('booking_click', { placement: 'home_why', component: 'AppHome' })
}

</script>



<style lang="scss">
@use '../css/style.scss';

.hero-content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  

  .mobile_hide {
    width: 48%;
  }
}

.hero-arash-image {
  bottom: 0;
  right: 15%;
  width: auto;
  min-width: 355px;
  height: 85%;
  /* max-height: 612.35px; */
  min-height: 504.6px;
  display: flex;

  img {
    width: 100%;
    height: auto;
  }
}

.why-us-section {
  background: #153655;
  padding: 100px 0;
}

.why-us-container {
  max-width: var(--maal);
  margin: 0 auto;
}



/*  A. Link ser ud som tekst – men med tydelig hover/focus affordance */
.inline-link {
  color: inherit;
  /* samme farve som brødtekst */
  text-decoration: none;
  /* fjern standard-underline */
  background-image: linear-gradient(currentColor, currentColor) !important;
  background-repeat: no-repeat !important;
  background-size: 0% 1px !important;
  /* “animation” af underline */
  background-position: 0 100% !important;
  transition: background-size .2s ease;
}

.læs-mere {
  display: flex;
  align-items: center;
  max-width: 360px;

  span {
    margin-right: 20px;
    font-size: 30px;
    color: #fff;
    transition: 0.2s transform;
  }
}

.læs-mere:hover {
  span {
    transform: translateX(3px);
  }
}

.inline-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
}


.inline-link:hover,
.inline-link:focus {
  background-size: 100% 1px !important;
  /* subtil underline ved hover/focus  */
}

.inline-link:focus-visible {
  outline: 2px solid currentColor;
  /* tydelig tastaturfokus */
  outline-offset: 2px;
  border-radius: 2px;
}

/*  B. Tooltip (på hover OG tastaturfokus) */
.inline-link[data-tooltip] {
  position: relative;
}

.inline-link[data-tooltip]:hover::after,
.inline-link[data-tooltip]:focus::after {
  content: attr(data-tooltip);
  position: absolute;
  left: 0;
  bottom: calc(100% + 8px);
  padding: 6px 8px;
  font-size: .75rem;
  line-height: 1;
  color: #fff;
  background: rgba(0, 0, 0, .85);
  border-radius: 6px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
}

.inline-link[data-tooltip]:hover::before,
.inline-link[data-tooltip]:focus::before {
  content: "";
  position: absolute;
  left: 10px;
  bottom: calc(100% + 2px);
  border: 6px solid transparent;
  border-top-color: rgba(0, 0, 0, .85);
  /* lille “pil” */
}

@media (prefers-reduced-motion: no-preference) {

  .inline-link[data-tooltip]:hover::after,
  .inline-link[data-tooltip]:focus::after {
    animation: tooltip-in .15s ease-out;
  }

  @keyframes tooltip-in {
    from {
      opacity: 0;
      transform: translateY(4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.hero-eyebrow {
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.8;
  width: 100% !important;
  margin-bottom: 0.5rem;
}

.hero-title {
  line-height: 1.1;
  letter-spacing: -.5px;
  max-width: 35vw;
}

.hero-title .locs {
  white-space: nowrap;
}

.booking-button {
  position: relative;
  z-index: 4;
}

.mobile-show {
  display: none !important;
}

.sliderContainer {
  background: #153655;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  h2 {
    color: #fff !important;
    margin-bottom: 30px;
    font-size: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
}

.slider {
  position: relative;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  position: relative;
  /* برای موقعیت‌دهی متن */
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  width: 20vw;
  border-radius: 15px;
  aspect-ratio: 1 / 1;
  height: auto;
}

.text-overlay {
  position: absolute;
  bottom: 4px;
  left: 20px;
  background-color: rgba(0, 0, 255, 0.7);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
}

.text-overlay h1 {
  margin: 0;
  font-size: 24px;
  color: #fff !important;
  justify-content: start !important;
}

.text-overlay h2 {
  margin: 0 !important;
}

.text-overlay p {
  margin: 10px 0;
  font-size: 16px;
}

.text-overlay .price {
  font-size: 20px;
  font-weight: bold;
}

.text-overlay button {
  background-color: #fff;
  color: blue;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.text-overlay button:hover {
  background-color: #dfe9ff;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #2d58a1;
  color: #fff;
  border: none;
  font-size: 24px;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 4;
  width: 50px;
  height: 50px;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.dots span {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dots span.active {
  background-color: #2d58a1;
}

.Arash_Bagheri_Portrait {
  max-width: 400px;
  width: 20vw;
  height: 100%;
  min-width: 355px;
  padding: 20px 0 0 0;
  display: flex;
  margin-right: 5%;

  img {
    width: 100%;
    height: auto;
  }
}

.info {
  a {
    margin-top: 10px;
    color: #fff;
    font-size: 18px;
  }
}

.secondary-color {
  background: var(--secondary-color) !important;
}


/* تصویر هیرو به‌صورت المان واقعی */
.hero-picture {
  position: absolute;
  inset: 0;
  /* top:0 right:0 bottom:0 left:0 */
  z-index: 0;
  /* پشت همه */
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  /* CLS کمتر */
}

/* مطمئن شو کانتینر زمینه نسبی دارد */
.bg-img {
  position: relative;
  background-image: url('@/assets/BannerBehandling3.webp');

}

/* Forsiden er undtagelsen: her er baggrundsbilledet selve indholdet, og
   paddingen bestemmer hvor stor en del af det man faar at se. Luften er
   stadig lige stor i top og bund - den er bare stoerre end paa de sider,
   hvor baggrunden kun er en tone.
   Bemaerk: dette style-blok er IKKE scoped, saa variablen skal haenge paa
   .home - ellers siver den ud til alle andre siders heroer. */
.home .bg-img {
  --hero-luft: clamp(56px, 15vh, 140px);
}

/* Kun store monitorer: mere luft, saa laegens billede kommer helt med.
   Laptops (under 1000 px skaermhoejde) beholder den gamle vaerdi. */
@media (min-height: 1000px) {
  .home .bg-img { --hero-luft: clamp(56px, 20vh, 190px); }
}

/* Overlay قبلی بمانَد ولی z-index منطقی باشد */
.bg-img::before {
  z-index: 1;
  /* بالای تصویر، زیر متن */
}

/* متن‌ها بالاتر از اورلی */
.bg-img h1,
.bg-img h2,
.bg-img p,
.booking-button,
.mobile-show {
  position: relative;
  z-index: 2;
}


.bg-img {

  h1 {
    position: relative;
  }

  h2 {
    font-size: 30px;
    font-weight: bold !important;
  }

  p {
    font-size: 22px !important;
    position: relative;
  }

  /* Overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.1); */
    /* Sort overlay med 50% gennemsigtighed */
    z-index: 1;
    /* Sørger for, at overlayet ligger over baggrunden */
  }
}

.icons {
  width: 5%;
  height: auto;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
}

.home {
  .bg-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    isolation: isolate;
    background-position: right;
  }
}

#Info-div {
  h2 {
    color: #fff !important;
    font-size: 18px !important;
    margin: 10px 0 !important;
    font-weight: bold;
    padding-left: 0 !important;
  }

  p {
    color: #fff !important;
    font-size: 22px;
    width: 30vw;
  }
}

.more-text {
  transition: opacity 0.5s ease;
}

.see-mere {
  cursor: pointer;
}

.see-mere:hover {
  opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* End state of leave */
  {
  opacity: 0;
}

.txt-box {
  width: 50%;
  margin-right: 5%;
}

.VIKING-image {
  position: relative;
  overflow: hidden;

  .first-img {
    height: 100%;
    width: 100% !important;
    border-radius: 15px;
    aspect-ratio: 1/1;
    object-fit: cover;
    position: relative;
  }
}

.primary-color {
  background: var(--primary-color) !important;
  padding: 50px 0;

  .container-width {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}


.slider {
  max-width: var(--maal);
}

.Ekspertise-txt {

  .general_button {
    max-width: 300px;
  }

  .inline-link:hover,
  .inline-link:focus {
    background-size: 0px !important;
  }
}

.Multimediedesigner {
  padding: 50px 0;
  .txt {
    color: var(--quaternary-color) !important;
  }

  .first-txt {
    justify-content: space-between;
  }
}


.Multimediedesigner {
  strong {
    color: #2d58a1;
  }
}


@media only screen and (max-width: 1780px) {
  .bg-img {
    p {
      font-size: 20px !important;
      line-height: 27px;
      position: relative;
    }
  }
}

@media only screen and (max-width: 1550px) {
  .contain .informations {
    margin: 0 !important;

    .info {
      margin: 70px 0px 50px 100px !important;
    }
  }

  .hero-title {
    margin-bottom: 20px !important;
  }

  .home .fs-medie img {
  aspect-ratio: 1 / 1 !important; 
  }

  .bg-img {
    p {
      font-size: 18px !important;
    }
  }

  .hero-content-wrapper {
    max-width: 1200px;
  }

  .booking-button {
    margin-top: 10px;
  }

  .slide img {
  width: 25vw;
 }


  #Info-div {
    p {
      width: 42vw;
      font-size: 18px;
    }
  }


  .slider {
    max-width: 1200px !important;
  }


  h2 {
    font-size: 36px;
  }

  .hero-title {
    max-width: 40vw;
  }

  .img p {
    font-size: 22px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}


@media only screen and (max-width: 1640px) {

  .Arash_Bagheri_Portrait,
  .hero-arash-image {
    max-width: 400px;
    min-width: 305px;
    min-height: 466px;
  }
}


/* @media only screen and (min-width: 1750px) {
  .card {
    width: 30% !important;
    height: 520px !important;
  }
} */

/* 4K Monitor */
@media only screen and (min-width: 1640px) {
  .img {
    h1 {
      font-size: 45px !important;
    }

    h3 {
      font-size: 30px !important;
    }
  }

  .bg-img p {
    font-size: 20px !important;
    line-height: 1.4;
    position: relative;
  }

  .container {
    h1 {
      font-size: 45px;
    }
  }
}

.img {
  h1 {
    margin: 0;
    text-align: left;
    color: #fff;
  }

  h2 {
    margin-top: 0 !important;
    font-size: 26px;
    color: var(--titleBanner-color) !important;
  }

  p {
    color: #fff !important;
    font-size: 22px;
  }
}

.secondary-color {
  background: var(--secondary-color) !important;
}

.Multimediedesigner {
  position: relative;
  background: var(--primary-color) !important;

  .ui {
    margin-right: 5%;
  }

  .webmock {
    .first-img {
      width: 28vw;
      height: auto;
    }
  }

  .txt {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
  }

  .ui-ux {
    display: flex;
    flex-direction: column;

    img {
      margin-top: 85px;
    }
  }
}

.min-concept {
  padding: 110px 8% 70px 8%;
  background: var(--secondary-color);

  h1 {
    margin-bottom: 30px;
  }

  .gyldne-trekant {
    width: 40vw;
  }
}

.txt-two {
  margin: 30px 0 0 0;
}

.contain {
  display: flex;
  flex-direction: column;
  background: #153655;
  align-items: center;

  .informations {
    display: flex;
    justify-content: center;
    align-items: end;
    margin: 0 15%;

    .info {
      margin: 80px 100px;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 100%;
        max-width: 100px;
      }
    }
  }
}

.website {
  padding: 110px 8% 70px 8%;
  background: var(--secondary-color);

  h1 {
    margin-bottom: 30px;
  }

  .code-lang {
    width: 25vw;
  }
}


.om-mig {
  height: auto;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  background: var(--primary-color);
  padding: 50px 8% 50px 8%;

  .om-mig-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20%;

    h1 {
      margin-bottom: 30px;
    }
  }

  .bussines-card {
    height: 100%;

    img {
      width: 42vw;
    }
  }
}

.displayFlex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 2000px) {
  .webmock {
    .first-img {
      width: 24vw !important;
    }

    .second-img {
      width: 73%;
    }
  }
}


@media only screen and (max-width: 1380px) {
  .bg-img {
    h1 {
      font-size: 40px !important;
    }

    p {
      font-size: 20px !important;
    }
  }

  h2 {
    margin: 0 !important
  }

  .info {
    margin: 80px 5vw !important;
  }






  
  .Multimediedesigner {
    max-height: unset;
  }
}


@media only screen and (max-width: 1120px) {
  .bg-img {
    h1 {
      font-size: 35px;
    }

    p {
      font-size: 18px !important;
    }
  }

  .container {
    flex-direction: column;
  }




  .contain .informations {
    flex-direction: column-reverse !important;
    align-items: center;
  }


  #Info-div {
    padding: 40px 8% 10px 8%;
    margin: 0 !important;

    p {
      width: auto;
    }
  }

  .contain .informations .info {
    width: 80vw;
    margin: 30px 5vw !important;
  }

  .flex-direction {
    flex-direction: column !important;
  }

  .webmock {
    .second-img {
      display: flex !important;
      width: 90%;
      margin: 50px 0 0 0;
    }
  }

  .ui-ux {
    img {
      margin-top: 40px !important;
    }
  }


  #uix {
    flex-direction: row;
    justify-content: space-between;
  }

  .om-mig {
    padding: 0 !important;
    flex-direction: column;

    .om-mig-txt {
      padding: 100px 7% !important;
      width: 85%;
      margin-right: 0 !important;

      h1 {
        padding: 0 !important;
      }
    }
  }

  #facts-btn {
    align-items: center;
    justify-content: center;
  }

  .txt-box {
    display: flex;
    flex-direction: column;
    width: auto !important;
  }

  .bussines-card {
    height: 100%;

    img {
      width: 100% !important;
    }
  }



  .gyldne-trekant {
    width: 65vw !important;
  }

  .code-lang {
    margin: 20px 0 50px 0 !important;
    width: 65vw !important;
    height: 80%;
    overflow: hidden;
    position: relative;
  }


  .informations {
    flex-direction: row;

    .info {
      img {
        width: 45%;
      }
    }
  }

}






.h1 {

  h1,
  h3 {
    padding-left: 0 !important;
  }
}

@media only screen and (max-width: 1050px) {

  .container_carts a {
    width: 45% !important;
  }


  .sliderContainer {
    padding: 50px 5%;
  }

}


@media only screen and (max-width: 940px) {
  .image {
    width: 100% !important;
  }

  .info[data-v-48676f02] {
    margin: 40px 5vw 0 5vw !important;
  }

  .om-mig-txt {
    width: auto !important;
  }
}

@media only screen and (max-width: 840px) {

  .bg-img {

    h1,
    h2,
    p {
      color: #fff !important;
    }
  }

  .bg-img::after {
    display: none !important;
  }

  .bg-img::before {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));
  }

  .mobile_hide {
    display: none !important;
  }

  .mobile-show {
    display: block !important;
  }

  .img .booking-button {
    margin-left: 0 !important;
  }

}

@media only screen and (max-width: 800px) {
  .primary-color {
    padding: 50px 0;
  }

  .scroll-indicator {
    display: none !important;
  }

  #app .bg-img {
    min-height: auto;
  }
}


@media only screen and (max-width: 850px) {
  .bg-img {
    background-image: url("/src/assets/BannerFrontPageMobile5.webp") !important;
    background-position: right !important;
  }

  .container_carts a {
    width: 80% !important;
  }

  #facts-btn {
    justify-content: center !important;
  }

  .image {
    margin: 20px 0 0 0 !important;
  }

  .container_carts{
    justify-content: center !important;
  }

  .website {
    padding: 50px 5% 50px 5%;
  }

  .flex-direction {
    margin: 0;
  }

  .txt-box {
    width: auto !important;
  }

  .informations {
    flex-direction: row;

    .info {
      margin: 80px 2vw !important;

      img {
        width: 70%;
      }
    }
  }



  .booking-button {
    margin: 20px 0 !important;
  }


}

@media only screen and (max-width: 660px) {
  .contain .informations .info {
    width: 90%;
  }

  .faq {
    padding: 50px 5% !important;
  }


  #Info-div {
    padding: 40px 0% 10px 0%;
  }

  #Info-div:first-child {
    padding-top: 0 !important;
  }

  .container {
    justify-content: left;

    .ui {
      margin-right: 5%;
    }
  }

  .om-mig .om-mig-txt {
    padding: 50px 7% !important;
  }


  .min-concept {
    padding: 50px 5% 70px 5% !important;
  }

  .image {
    margin: 20px 0 50px 0 !important;
  }

  .image {
    width: 100% !important;
  }

  .website {
    padding: 50px 6% 0 6% !important;
  }

  .om-mig-txt {
    padding: 50px 7% !important;
  }

  .min-concept {
    padding: 50px 5% 20px 5%;
  }

  .website {
    padding: 110px 6% 0 6% !important;
  }

  .concept-txt-box {
    flex-direction: column !important;
  }

  .informations {
    flex-direction: column;

    .info {
      margin: 20px auto !important;
    }
  }

  .bg-img h1 {
    font-size: 30px !important;
  }

  .bg-img h2 {
    width: 55vw;
    font-size: 22px !important;
    margin-top: 15px !important;
    line-height: 40px;
  }

  .booking-button {
    margin-top: 35px;
  }

}

@media only screen and (max-width: 500px) {
  .home {
    .bg-img {
      background-image: url("/src/assets/BannerFrontPageMobile6.webp") !important;

      p {
        width: 100% !important;
      }
    }
    .hero-title {
      max-width: none !important;
    }
  }


  .Behandlinger-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }



  .section-title {
    font-size: 30px !important;
    width: 90%;
  }


  .card-content {
    height: 95%;
  }

  .sliderContainer h2 {
    margin-bottom: 30px !important;
    font-size: 25px;
    color: #fff !important;
  }

  #uix {
    flex-direction: column;
  }

  .webmock {
    .second-img {
      width: 100%;
    }
  }

  .informations:first-child {
    margin-top: 0 !important;
  }

  .informations .info img {
    width: 90%;
  }

  .sliderContainer {
    h1 {
      padding: 0 !important;
    }
  }

}

@media only screen and (max-width: 430px) {
  h2 {
    font-size: 35px;
  }


  .ux {
    align-items: flex-start !important;
  }

  .default-bg::after {
    height: 80px;
  }
}

@media only screen and (max-width: 390px) {
  .bg-img {
    h2 {
      width: 68%;
    }
  }

  .hero-title {
    line-height: 1.2;
  }

  .bg-img h1 {
    font-size: 26px !important;
  }

  .mobile-show {
    p {
      width: 90% !important;
    }
  }


  .txt-two {
    width: 90vw;
  }
}


.container_carts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  margin: 20px auto 0 auto;

  a {
    text-decoration: none;
    width: 30%;
  }
}

@media only screen and (max-width: 1300px) {
  .card {
    flex-grow: .5;
  }

  .slide img {
    width: 50vw;
  }
}

@media only screen and (max-width: 900px) {
  .slider-container {
    padding: 50px 2%;
  }

  .slide img {
    width: 100%;
  }

  .container h2 {
    font-size: 32px;
  }
}

@media only screen and (max-width: 600px) {

  .prev,
  .next {
    width: 40px !important;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .slider-container h1 {
    padding: 0 !important;
  }

}

@media only screen and (max-width: 500px) {

  .prev,
  .next {
    display: none !important;
  }

  .hero-content-wrapper {
    height: 90%;
  }
}

@media only screen and (max-width: 450px) {
  .hero-arash-image {
    min-width: unset !important;
    min-height: unset !important;
    height: 85%;
  }

  .hero-content-wrapper {
    height: 90%;
  }
}

.card {
  position: relative;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow: hidden;
  color: white;
  text-align: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale .5s ease;
  cursor: pointer;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
}

.card.microneedling::before {
  background-position: bottom;
}

.card:hover {
  scale: 1.1;
}

.card-content {
  position: relative;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;

  h3 {
    color: #fff;
  }
}

.card h3 {
  margin: 0;
  font-size: 2.5rem;
  padding: 0 !important;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  text-decoration: none;
}

.card p {
  margin: 10px 0 0;
  font-size: 1.2rem;
  text-align: start;
}

/* تصاویر برای کارت‌ها */

.card.botox::before {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%), url('@/assets/Carts/Botox.webp');
}

.card.filler::before {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%), url('@/assets/Carts/Filler.webp');
}

.card.skinbooster::before {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%), url('@/assets/Carts/Skinbooster.webp');
}

.card.mesotherapy::before {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%), url('@/assets/Carts/Mesotherapy.webp');
}

.card.microneedling::before {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%), url('@/assets/Carts/Microneedling.webp');
}

@media (max-width: 768px) {
  .card h3 {
    font-size: 2.2rem;
  }
}

.section-title {
  text-align: center;
  font-size: 40px;
  margin: 0 !important;
  color: var(--titleBanner-color) !important;
  letter-spacing: -.5px;
}

/* ===== Maalestokken paa forsiden =====
   Samme venstre- og hoejrekant som paa klinikssiderne, om os, kontakt og
   priser. Baandene beholder deres fulde baggrund, men indholdet holdes inde
   paa var(--maal) via baandets egen sideluft - aldrig mindre end gutteren.
   De gamle 1500/1200/1000 px-graenser og %-sideluft i reglerne ovenfor
   overstyres her samlet, i stedet for at blive rettet én for én.
   Ligger sidst og er scoped med .home, saa intet siver ud til andre sider. */
.home .bg-img,
.home .Behandlinger-section,
.home .contain.first-mode,
.home .Multimediedesigner,
.home .sliderContainer,
.home .why-us-section,
.home .faq {
  box-sizing: border-box;
  padding-inline: max(var(--gutter), calc((100% - var(--maal)) / 2)) !important;
}

.home .hero-content-wrapper,
.home .container-width,
.home .informations,
.home .why-us-container {
  box-sizing: border-box;
  margin-inline: 0 !important;
  max-width: none !important;
  padding-inline: 0 !important;
}

/* Citat-sektionen: portraet + tekst skal kunne staa inden for maalet.
   Teksten havde fast 42vw-bredde og 100 px venstremargen, saa den skoed
   ud over hoejrekanten paa brede skaerme. */
.home .contain .informations {
  gap: 48px;
  width: 100%;
}

@media (min-width: 801px) {
  .home .contain .informations .info {
    flex: 1 1 0;
    margin-inline: 0 !important;
    min-width: 0;
  }

  .home #Info-div p {
    max-width: 64ch;
    width: auto;
  }
}

/* ===== Forsidens hero under 1200 px =====
   Over 1200 px gaelder desktop-heroen. Herunder er der to layouts med
   faelles indhold og stil:
     - mobil (til 500 px): budskab - laegens ansigt - handling, oppefra og ned
     - tablet og lille laptop (501-1200 px): tekst i venstre spalte,
       laegen til hoejre. Én regel, der skalerer selv med clamp().
   Alt er scoped med .home - AppHome's style er global. */

/* --- Faelles: indhold, typografi, chips og knapper --- */
@media (max-width: 1200px) {
  .home .bg-img .mobile_hide { display: none !important; }
  .home .bg-img .mobile-show { display: block !important; }
  .home .scroll-indicator { display: none !important; }

  .home .bg-img::after {
    content: '';
    display: block !important;
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  .home .hero-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-block: 0 !important;
    position: relative;
    width: 100%;
    z-index: 3;
  }

  /* Ingen 3 sekunders indtoning paa det foerste, brugeren ser */
  .home .bg-img [data-aos] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  .home .hero-title { margin: 0 !important; max-width: none; }

  .home .hero-title h1,
  .home .bg-img p.hero-lead,
  .home .hero-eyebrow {
    text-shadow: 0 1px 12px rgba(10, 22, 36, .45);
  }

  .home .hero-eyebrow {
    align-items: center;
    display: flex;
    font-size: .72rem;
    font-weight: 600;
    gap: 10px;
    letter-spacing: .13em;
    margin: 0 0 10px;
    opacity: .9;
  }

  .home .hero-eyebrow::before {
    background: currentColor;
    content: '';
    height: 1px;
    width: 22px;
  }

  .home .hero-title h1 {
    line-height: 1.18;
    margin: 0;
    text-wrap: balance;
  }

  .home .bg-img p.hero-lead {
    color: rgba(255, 255, 255, .84);
    line-height: 1.55;
    margin: 12px 0 0;
    width: auto;
  }

  /* Chips under hinanden i venstre side, let moerk sloeret bund og en
     svag skygge, saa de kan ses paa den lyse vaeg. */
  .home .bg-img .hero-punkter {
    align-items: flex-start;
    display: flex !important;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    margin: 0 0 18px;
    padding: 0;
  }

  .home .hero-punkter li {
    -webkit-backdrop-filter: blur(6px);
    align-items: center;
    backdrop-filter: blur(6px);
    background: rgba(10, 22, 36, .30);
    border: 1px solid rgba(255, 255, 255, .26);
    border-radius: 999px;
    box-shadow: 0 4px 14px rgba(10, 22, 36, .22);
    color: #fff;
    display: flex;
    font-size: .9rem;
    font-weight: 600;
    gap: 6px;
    line-height: 1.35;
    padding: 6px 11px 6px 9px;
  }

  .home .hero-punkter li::before {
    background: #9fc0f5;
    border-radius: 50%;
    content: '';
    flex: 0 0 auto;
    height: 6px;
    width: 6px;
  }

  /* Knapper som paa kontaktsiden: hvid primaer, gennemsigtig sekundaer */
  .home .booking-button { margin: 0 !important; }

  .home .booking-button .general_button,
  .home .hero-ring {
    border-radius: 12px;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 700;
    max-width: none;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
  }



  .home .hero-ring {
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    background: rgba(10, 22, 36, .35);
    border: 1.5px solid rgba(255, 255, 255, .55);
    color: #fff !important;
  }
}

/* --- Mobil (til 500 px) ---
   Billedet ankres i bunden i fuld bredde, saa ansigtet lander mellem
   tekst og knapper. Heroen holdes under skaermhoejden. */
@media (max-width: 500px) {
  .home .bg-img {
    background-color: #56422f;
    background-position: 50% 100% !important;
    background-size: 100% auto !important;
    padding-block: 26px 24px !important;
  }

  /* Billedets overkant (bredde x 1519/1361 = 111.6vw over bunden) toner
     blidt over i vaeggens farve, saa der ikke staar en vandret kant. */
  .home .bg-img::before {
    background: linear-gradient(to bottom,
      #56422f 0%, #56422f 35%, rgba(86, 66, 47, 0) 100%);
    bottom: calc(111.6vw - 90px);
    content: '';
    display: block !important;
    height: 130px;
    inset-inline: 0;
    pointer-events: none;
    position: absolute;
    top: auto;
    z-index: 0;
  }

  .home .bg-img::after {
    background:
      linear-gradient(to bottom,
        rgba(10, 22, 36, .55) 0%,
        rgba(10, 22, 36, .30) 24%,
        rgba(10, 22, 36, 0) 42%),
      linear-gradient(to top,
        rgba(10, 22, 36, .62) 0%,
        rgba(10, 22, 36, .32) 18%,
        rgba(10, 22, 36, 0) 34%);
  }

  .home .hero-content-wrapper {
    min-height: clamp(480px, calc(100svh - 300px), 580px);
  }

  .home .hero-content-wrapper > div:last-child { margin-top: auto; }

  .home .hero-title h1 {
    font-size: clamp(1.55rem, 6.9vw, 1.95rem) !important;
  }

  .home .bg-img p.hero-lead {
    font-size: .98rem;
    max-width: 25ch;
  }

  /* Lave telefoner (iPhone SE o.l.): manchetten ville skubbe teksten ned
     over ansigtet. Budskabet baeres af H1 og chips. */
  @media (max-height: 700px) {
    .home .bg-img p.hero-lead { display: none !important; }
  }

  .home .booking-button .general_button,
  .home .hero-ring {
    width: 100% !important;
  }

  .home .hero-ring { margin-top: 10px; }

  .home .booking-button { margin-bottom: 20px !important; }
}

/* --- Tablet og lille laptop (501-1200 px) ---
   Det brede billede med moerk vaeg til venstre og laegen til hoejre.
   cover + forankring til hoejre holder ansigtet fri af tekstspalten i hele
   intervallet; spalten er max 52 % og alt skalerer med clamp(). */
@media (min-width: 501px) and (max-width: 1200px) {
  .home .bg-img {
    background-color: #1b1712;
    justify-content: flex-start;
    background-image: url('@/assets/BannerFrontPageMobile3.webp') !important;
    background-position: 80% 15% !important;
    background-size: cover !important;
    padding-block: clamp(40px, 6vw, 72px) !important;
  }

  .home .bg-img::before { display: none !important; }

  .home .bg-img::after {
    background:
      linear-gradient(90deg,
        rgba(10, 22, 36, .50) 0%,
        rgba(10, 22, 36, .22) 45%,
        rgba(10, 22, 36, 0) 70%),
      linear-gradient(to top,
        rgba(10, 22, 36, .35) 0%,
        rgba(10, 22, 36, 0) 30%);
  }

  .home .hero-content-wrapper {
    margin-inline: 0 !important;
    max-width: min(52%, 560px) !important;
  }

  .home .hero-content-wrapper > div:last-child { margin-top: 26px; }

  .home .hero-title h1 {
    font-size: clamp(1.75rem, 3.4vw, 2.5rem) !important;
  }

  .home .bg-img p.hero-lead {
    font-size: clamp(.98rem, 1.4vw, 1.08rem);
    max-width: 40ch;
  }

  .home .booking-button {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
}

/* ===== Under 1000 px: samme opskrift som klinikssiderne =====
   Baandene beholder fuld baggrund; 5 % sideluft giver indholdet de samme
   90 % som paa alle andre sider. */
@media only screen and (max-width: 1000px) {
  .home .bg-img,
  .home .Behandlinger-section,
  .home .contain.first-mode,
  .home .Multimediedesigner,
  .home .sliderContainer,
  .home .why-us-section,
  .home .faq {
    padding-inline: 5% !important;
  }

  /* Behandlingskortene fylder de 90 % og finder selv antallet af
     kolonner: 1 paa mobil, 2 paa tablet, 3 ved ca. 1000 px. */
  .home .container_carts {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  .home .container_carts a { width: auto !important; }

  /* Titlen foelger kortets bredde, saa "Microneedling" ikke stikker ud */
  .home .container_carts .card h3 {
    font-size: clamp(1.6rem, 3.2vw, 2rem) !important;
  }

  /* Citat-sektionen: portraet og tekst i hele bredden */
  .home .contain .informations,
  .home .contain .informations .info,
  .home #Info-div p {
    box-sizing: border-box;
    margin-left: 0 !important;
    margin-right: 0 !important;
    max-width: none;
    width: 100% !important;
  }
}

/* ===== "Hvorfor vaelge" - tal i stedet for en punktliste =====
   Fire tal, der kan maales og tjekkes (fra faktabanken), med en tynd
   streg under hvert - til venstre teksten og én handling. */
.home .why-us-section { padding-block: clamp(56px, 8vw, 100px); }

/* Som hos Cerix: tallene til venstre og teksten til hoejre paa store
   skaerme; paa mobil teksten foerst og tallene to og to under. */
.home .hvorfor {
  align-items: center;
  display: grid;
  gap: clamp(40px, 6vw, 96px);
  grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
}

.home .hvorfor__tal { order: -1; }

.home .hvorfor .sec__eyebrow { color: rgba(255, 255, 255, .78) !important; }
.home .hvorfor .sec__eyebrow::before { background: rgba(255, 255, 255, .6) !important; }

.home .hvorfor__titel {
  color: #fff !important;
  font-size: clamp(1.8rem, 2.6vw, 2.4rem);
  line-height: 1.18;
  margin: 0 0 20px;
}

.home .hvorfor__tekst p:not(.sec__eyebrow) {
  color: rgba(255, 255, 255, .82);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 14px;
  max-width: 52ch;
}

.home .hvorfor__knap {
  background: #fff;
  border: 0;
  border-radius: 12px;
  color: #1e4078;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 14px;
  padding: 15px 26px;
  transition: background-color .15s ease, transform .15s ease;
}

.home .hvorfor__knap:hover,
.home .hvorfor__knap:focus-visible { background: #eaf0fa; transform: translateY(-1px); }

.home .hvorfor__tal {
  display: grid;
  gap: clamp(28px, 3.5vw, 48px) clamp(24px, 3.5vw, 56px);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0;
}

.home .hvorfor__tal dt {
  border-bottom: 1px solid rgba(255, 255, 255, .28);
  color: #fff;
  font-size: clamp(2.875rem, 4.4vw, 4.125rem);
  font-variant-numeric: tabular-nums;
  font-weight: 300;
  letter-spacing: -.02em;
  line-height: 1;
  margin-bottom: 14px;
  padding-bottom: 18px;
}

.home .hvorfor__tal dd {
  color: rgba(255, 255, 255, .78);
  font-size: .98rem;
  line-height: 1.6;
  margin: 0;
}

.home .hvorfor__tal a {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 900px) {
  .home .hvorfor { grid-template-columns: minmax(0, 1fr); }
  .home .hvorfor__tal { order: 0; }
}

@media (max-width: 420px) {
  .home .hvorfor__tal { gap: 28px 20px; }
}

/* ===== Tekst + billede ("Book en gratis online forundersoegelse" og
   "Ekspertise og kvalitet") =====
   Én regel for alle bredder: to lige store spalter med fast mellemrum
   over 1000 px, én spalte under. Erstatter de gamle procentbredder med
   !important, der laa i otte media queries. */
.home .Multimediedesigner .container-width {
  align-items: center;
  display: grid;
  gap: clamp(40px, 5vw, 72px);
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.home .Multimediedesigner .container-width > * {
  margin: 0;
  min-width: 0;
  padding: 0;
  width: auto;
}

/* Billedet: fast kvadrat med height: auto. Den gamle regel
   (.VIKING-image .first-img { height: 100% }) gav en procent-hoejde inde i
   et gitter uden fast hoejde. Chrome/Firefox klarer det, men Safari paa
   iPhone beregner raekkens hoejde forkert, saa billedet blev tegnet hen
   over teksten. */
.home .Multimediedesigner .VIKING-image {
  align-self: start;
  overflow: hidden;
}

.home .Multimediedesigner .VIKING-image img {
  aspect-ratio: 1 / 1;
  display: block;
  height: auto !important;
  max-height: none;
  min-height: 0;
  width: 100% !important;
}

@media (max-width: 1000px) {
  .home .Multimediedesigner .container-width {
    gap: 32px;
    grid-template-columns: minmax(0, 1fr);
  }
}

/* ===== Laptop =====
   Tekst og billede i to lige store spalter med fast mellemrum, i stedet
   for procentbredder, der lagde teksten helt op ad billedet. Behandlings-
   kortene: tre pr. raekke, centreret, lavere kort. */
@media (min-width: 1001px) and (max-width: 1800px) {
  .home .container_carts {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }

  .home .container_carts a {
    flex: 0 0 calc((100% - 48px) / 3);
    width: auto !important;
  }

  .home .container_carts .card { height: 330px; }
}

/* Portraetbilledet beskaeres til kvadrat - hold laegens hoved i billedet */
.home .samtale-img { object-position: 50% 30%; }

/* FAQ: hvidt kort med eyebrow, ligesom om os og behandlingssiderne */
.home .faq .faq-kort {
  margin: 0;
  max-width: none;
  width: 100%;
}

.home .faq .faq-kort h2 {
  color: #153655 !important;
  text-align: left;
}

/* Citat-ikonet: width/height-attributterne giver formatet (ingen CLS),
   men hoejden skal foelge bredden, ellers bliver ikonet straekt. */
.home .icons img {
  aspect-ratio: 120 / 98;
  height: auto !important;
}

/* =====================================================================
   Forsiden - nye sektioner (nov. 2026)
   Samme system som resten af sitet: eyebrow -> H2 -> manchet, venstre-
   stillet, alt paa maalet (--maal), kort i det faelles kortsprog.
   Alt er scopet med .home, fordi denne style-blok ikke er scoped.
   ===================================================================== */
.home .fs-baand {
  background: #fff;
  box-sizing: border-box;
  color: #153655;
  padding-block: calc(var(--sektion-luft) * 2);
}

.home .fs-baand--navy { background: #153655; color: #fff; }

.home .fs-indre {
  box-sizing: border-box;
  margin-inline: auto;
  max-width: var(--maal);
  width: 90%;
}

.home .fs-baand *,
.home .fs-baand *::before,
.home .fs-baand *::after { box-sizing: border-box; }

/* Overskrifter: én stoerrelse paa hele forsiden */
#app .home .fs-baand h2,
#app .home .fs-slider-hoved h2 {
  color: #153655;
  font-size: clamp(1.65rem, 2.5vw, 2.25rem);
  letter-spacing: -.01em;
  line-height: 1.16;
  margin: 0;
  text-align: left;
}

#app .home .fs-baand--navy h2,
#app .home .fs-slider-hoved h2 { color: #fff !important; }

.home .fs-baand .sec__head { margin-bottom: 22px; }
.home .fs-baand .sec__lead { margin-top: 14px; }
.behandlings-title{
  max-width: 75ch;
}

.home .fs-baand--navy .sec__eyebrow,
.home .fs-slider-hoved .sec__eyebrow { color: rgba(255, 255, 255, .78); }
.home .fs-baand--navy .sec__eyebrow::before,
.home .fs-slider-hoved .sec__eyebrow::before { background: rgba(255, 255, 255, .6); }

.home .fs-baand .split__tekst > p {
  color: rgba(21, 54, 85, .86);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  margin: 0 0 16px;
  max-width: 62ch;
}

.home .fs-baand .split__tekst strong { color: #153655; }

/* Hoved med "se alle" til hoejre */
.home .fs-hoved {
  align-items: end;
  display: flex;
  gap: 24px 40px;
  justify-content: space-between;
  margin-bottom: 34px;
}

.home .fs-hoved .sec__head { margin-bottom: 0; }

.home .fs-alle {
  align-items: center;
  background: none;
  border: 0;
  color: #2d58a1;
  cursor: pointer;
  display: inline-flex;
  flex: none;
  font: inherit;
  font-weight: 700;
  gap: 8px;
  padding: 0;
  text-decoration: none;
}

.home .fs-alle .pil { transition: transform .2s ease; }
.home .fs-alle:hover .pil,
.home .fs-alle:focus-visible .pil { transform: translateX(4px); }
.home .fs-alle:hover,
.home .fs-alle:focus-visible { text-decoration: underline; text-underline-offset: 4px; }
.home .fs-alle--lys { color: #fff; }

/* ----- Behandlingskort ----- */
.home .fs-kortliste {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}

.home .fs-kortliste > li { display: flex; }

.home .fs-kort {
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .06);
  color: #153655;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  width: 100%;
}

.home .fs-kort:hover,
.home .fs-kort:focus-visible {
  border-color: rgba(45, 88, 161, .35);
  box-shadow: 0 18px 40px rgba(21, 54, 85, .12);
  transform: translateY(-3px);
}

.home .fs-kort:focus-visible { outline: 2px solid #2d58a1; outline-offset: 3px; }

.home .fs-kort__medie {
  aspect-ratio: 4 / 3;
  background: #eef1f6;
  overflow: hidden;
}

.home .fs-kort__medie img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transition: transform .5s ease;
  width: 100%;
}

.home .fs-kort:hover .fs-kort__medie img { transform: scale(1.04); }

.home .fs-kort__krop {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px 24px 20px;
}

.home .fs-kort__kategori {
  color: #2d58a1;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .12em;
  margin: 0 0 6px;
  text-transform: uppercase;
}

#app .home .fs-kort h3 {
  color: #153655;
  font-size: 1.3rem;
  line-height: 1.2;
  margin: 0 0 8px;
  text-align: left;
}

.home .fs-kort__tekst {
  color: rgba(21, 54, 85, .82);
  font-size: .97rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0 0 18px;
}

.home .fs-kort__fod {
  align-items: center;
  border-top: 1px solid rgba(21, 54, 85, .10);
  display: flex;
  justify-content: space-between;
  margin: auto 0 0;
  padding-top: 14px;
}

.home .fs-kort__pris { color: #153655; font-size: .95rem; font-weight: 700; }

.home .fs-kort__pil {
  align-items: center;
  border: 1px solid rgba(21, 54, 85, .16);
  border-radius: 50%;
  color: #2d58a1;
  display: inline-flex;
  flex: none;
  height: 34px;
  justify-content: center;
  transition: background .2s ease, color .2s ease, border-color .2s ease;
  width: 34px;
}

.home .fs-kort:hover .fs-kort__pil,
.home .fs-kort:focus-visible .fs-kort__pil { background: #2d58a1; border-color: #2d58a1; color: #fff; }

/* ----- Klinikkens laege ----- */
.home .fs-baand--laege { padding-bottom: 0; }

.home .fs-laege {
  align-items: end;
  display: grid;
  gap: 24px 64px;
  grid-template-columns: clamp(240px, 26vw, 360px) minmax(0, 1fr);
}

.home .fs-laege__portraet { align-self: end; margin: 0; }
.home .fs-laege__portraet img { display: block; height: auto; width: 100%; }

.home .fs-laege__tekst { padding-bottom: calc(var(--sektion-luft) * 2); margin-left: 40px; }

.home .fs-laege__citat {
  border-left: 2px solid rgba(255, 255, 255, .35);
  margin: 22px 0 20px;
  padding: 2px 0 2px 22px;
}

.home .fs-laege__citat p {
  color: #fff;
  font-size: 1.08rem;
  font-weight: 400;
  line-height: 1.7;
  margin: 0 0 14px;
  max-width: 60ch;
}

.home .fs-laege__citat p:last-child { margin-bottom: 0; }

.home .fs-laege__lille {
  color: rgba(255, 255, 255, .78);
  font-size: .97rem;
  font-weight: 400;
  line-height: 1.65;
  margin: 0 0 22px;
  max-width: 60ch;
}

/* ----- Split-sektionerne ----- */
.home .fs-medie img {
  aspect-ratio: 4 / 3;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .10);
  object-fit: cover;
}

.home .fs-medie--hoej img { aspect-ratio: 1 / 1; object-position: center 20%; }

.home .fs-tjek { margin: 4px 0 26px; }
.home .fs-tjek li { color: #153655; font-weight: 600; }

.home .fs-handling {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 26px;
  margin-top: 8px;
}

/* ----- Sociale medier: overskriften foelger resten ----- */
.home .sliderContainer .fs-slider-hoved {
  box-sizing: border-box;
  max-width: var(--maal);
  text-align: left;
  margin-bottom: 30px;
}

/* ----- Heroens eyebrow: samme udtryk som sektionernes ----- */
.home .hero-eyebrow {
  align-items: center;
  display: flex;
  /* Stoerre end sektionernes eyebrow: den staar oven paa et foto og
     skal baere klinikkens navn. 15-17 px. */
  font-size: clamp(.94rem, .3vw + .86rem, 1.06rem) !important;
  font-weight: 700;
  gap: 12px;
  letter-spacing: .14em !important;
  opacity: 1;
  color: rgba(255, 255, 255, .85);
}

.home .hero-eyebrow::before {
  background: rgba(255, 255, 255, .6);
  border-radius: 2px;
  content: '';
  flex: none;
  height: 2px;
  width: 30px;
}

/* ----- Sociale medier ----- */
.home .fs-some .sec__lead { color: rgba(255, 255, 255, .78); }

.home .fs-some__liste {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}

.home .fs-some__flise {
  aspect-ratio: 1 / 1;
  background: rgba(255, 255, 255, .06);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(6, 18, 32, .28);
  display: block;
  overflow: hidden;
  transition: transform .25s ease, box-shadow .25s ease;
}

.home .fs-some__flise img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.home .fs-some__flise:hover,
.home .fs-some__flise:focus-visible {
  box-shadow: 0 18px 40px rgba(6, 18, 32, .4);
  transform: translateY(-3px);
}

.home .fs-some__flise:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }

@media (max-width: 1000px) {
  /* Tablet: 2 x 2, saa teksten i opslagene kan laeses */
  .home .fs-some__liste { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-inline: auto; max-width: 640px; }
}

@media (max-width: 700px) {
  /* Mobil: én raekke, der rulles vandret. Naeste flise stikker frem,
     saa man kan se, at der er mere. Raekken gaar helt ud til skaermkanten. */
  .home .fs-some__liste {
    display: flex;
    gap: 14px;
    margin-inline: -5.6%;
    max-width: none;
    overflow-x: auto;
    padding: 4px 5.6% 14px;
    scroll-padding-inline: 5.6%;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  .home .fs-some__liste::-webkit-scrollbar { display: none; }
  .home .fs-some__liste > li { flex: 0 0 72%; scroll-snap-align: start; }
  .home .fs-some__flise:hover { transform: none; }
}

@media (max-width: 1000px) {
  .home .fs-kortliste { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .home .fs-laege { gap: 20px 40px; grid-template-columns: clamp(200px, 30vw, 300px) minmax(0, 1fr); }
}

@media (max-width: 880px) {
  .home .fs-medie { max-width: 520px; }
}

@media (max-width: 700px) {
  .home .fs-hoved { align-items: start; flex-direction: column; margin-bottom: 26px; }

  /* Paa mobil: kompakte raekker - billede til venstre, tekst til hoejre.
     Seks hoeje billedkort under hinanden er for langt at rulle. */
  .home .fs-kortliste { gap: 14px; grid-template-columns: minmax(0, 1fr); }
  .home .fs-kort { border-radius: 14px; flex-direction: row; }
  .home .fs-kort__medie { aspect-ratio: auto; flex: 0 0 108px; }
  .home .fs-kort__krop { padding: 14px 16px 12px; }
  #app .home .fs-kort h3 { font-size: 1.1rem; margin-bottom: 4px; }
  .home .fs-kort__kategori { font-size: .64rem; margin-bottom: 4px; }
  .home .fs-kort__tekst {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    font-size: .9rem;
    line-height: 1.5;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .home .fs-kort__fod { padding-top: 10px; }
  .home .fs-kort__pil { height: 28px; width: 28px; }
  .home .fs-kort:hover { transform: none; }

  /* Laegen: tekst foerst, portraet under - staar paa baandets bund */
  .home .fs-laege { grid-template-columns: minmax(0, 1fr); }
  .home .fs-laege__tekst { order: -1; padding-bottom: 0; }
  .home .fs-laege__portraet { margin: 0 auto; max-width: 240px; }
  .home .fs-laege__citat p { font-size: 1rem; }

  .home .fs-handling .knap { box-sizing: border-box; justify-content: center; width: 100%; }
}
</style>
