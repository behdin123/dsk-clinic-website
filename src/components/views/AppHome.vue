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

    <div class="primary-color Behandlinger-section">
      <div class="container-width">
        <h2 class="section-title">Populære kosmetiske behandlinger</h2>
        <div class="container_carts">

          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }">
            <div class="card botox">
              <div class="card-content">
                <h3>Botox</h3>
                <p>
                  Få reduceret rynker og fine linjer med en sikker og effektiv behandling.
                  Perfekt til et naturligt og frisk look
                </p>
              </div>
            </div>
          </router-link>

          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }">
            <div class="card filler">
              <div class="card-content">
                <h3>Filler</h3>
                <p>Tilføj volumen og form til dine læber, kinder eller andre områder i ansigtet. Skab en harmonisk og
                  naturlig skønhed</p>
              </div>
            </div>
          </router-link>

          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }">
            <div class="card skinbooster">
              <div class="card-content">
                <h3>Skinbooster</h3>
                <p>Giv din hud et fugtboost indefra, så den ser frisk, og ungdommelig ud. Perfekt til tør eller træt
                  hud,
                  der har brug for ekstra næring og vitalitet</p>
              </div>
            </div>
          </router-link>

          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'mesotherapy' } }">
            <div class="card mesotherapy">
              <div class="card-content">
                <h3>Mesotherapy</h3>
                <p>Få en dybdegående næring til din hud med en cocktail af vitaminer og antioxidanter. Perfekt til glød
                  og
                  fornyelse</p>
              </div>
            </div>
          </router-link>

          <router-link :to="{ name: 'behandling-dynamic', params: { type: 'microneedling' } }">
            <div class="card microneedling">
              <div class="card-content">
                <h3>Microneedling</h3>
                <p>Stimuler hudens naturlige helingsproces og boost kollagenproduktionen. Perfekt til reducering af ar,
                  rynker og pigmentering</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>


    <div class="contain first-mode padding">
      <div class="informations h1">

        <div class="Arash_Bagheri_Portrait">
          <img src="../../assets/Arash_Bagheri2.webp" width="800" height="1271" loading="lazy" decoding="async" alt="Arash Bagheri – erfaren læge hos DK Skønhedsklinik">
        </div>

        <div data-aos="fade-up" class="info" id="Info-div">
          <div id="FirstIcons" class="icons"><img src="../../assets/icons/quote.webp" width="50" height="41"
              alt="Arash Bagheri, erfaren læge hos DK Skønhedsklinik" loading="lazy" decoding="async">
          </div>
          <div>
            <h2>Arash Bagheri</h2>
          </div>
          <p>
            Vi står altid klar til hjælpe og rådgive dig på den bedst mulig måde.
            Du kan komme i kontakt med os og komme alle de spørgsmål du måtte
            have omkring din huds friskhed og glød
          </p>
          <p>Mit navn er <b>Arash Bagheri</b>, læge og indehaver af DK Skønhedsklinik. Jeg har været læge
            i 30 år – de seneste 17 i det danske sundhedsvæsen – og har mere end 20 års erfaring inden for
            kosmetiske behandlinger. Jeg brænder for at hjælpe mine patienter til øget selvtillid og velvære.
            I DK Skønhedsklinik sørger jeg for, at hver behandling lever op til vores høje standarder for
            sikkerhed, etik og æstetik. Vi går aldrig på kompromis med din tryghed.
            <br> <br>

            <router-link to="/omos/" class="inline-link læs-mere" aria-label="Arash Bagheri – læs mere"
              data-tooltip="Går til: Om os"> <span class="pil" aria-hidden="true"></span>Læs mere om klinikkens læge</router-link>
          </p>


        </div>

      </div>
    </div>

    <div class="container Multimediedesigner VIKING Undersøgelse">
      <div class="container-width">
        <div class="txt h1 h2 first-txt">
          <div>
            <h3 data-aos="fade-up" data-aos-duration="1000">DK skønhedsklinik</h3>
            <h2 data-aos="fade-up" data-aos-duration="1000">Book en gratis online forundersøgelse</h2>

            <p data-aos="fade-up" data-aos-duration="1000">
              <strong>Klar til at tage første skridt?</strong> Hos DK Skønhedsklinik tilbyder vi en gratis og
              uforpligtende online
              konsultation, hvor du sammen med vores specialuddannede læge kan gennemgå dine ønsker og muligheder for
              behandlingen. Vi sørger for, at du føler dig tryg ved at tale om eventuelle gener, risici og mulige
              komplikationer. Under konsultationen tager vi også hensyn til alle eventuelle behandling påvirkende
              faktorer.
            </p>

            <p>
              Konsultationen udføres af vores erfarne læge, der står klar til at besvare alle dine spørgsmål.
              Behandlingen kan først finde sted minimum 2 dage efter konsultationen.
            </p>

            <p><strong>Book en konsultation i dag</strong> og lad os sammen lægge en plan, der fremhæver det smukkeste
              ved
              dig.</p>
          </div>
          <div class="booking-button">
            <button class="general_button arrow" type="button" @click="openBookingFromHero"
              aria-label="Book gratis forundersøgelse">
              Book gratis forundersøgelse
            </button>
          </div>
        </div>

        <div class="VIKING-image">
          <img class="first-img samtale-img" :src="imgOmOs" width="1400" height="1738" loading="lazy"
            alt="Læge Arash Bagheri under en konsultation hos DK Skønhedsklinik">
        </div>
      </div>
    </div>



    <div class="sliderContainer">
      <h2>Sociale medier – Seneste opslag</h2>
      <div class="slider">
        <div class="slides">

          <!-- Slide 1 -->
          <div class="slide">
            <div class="slide-content">
              <img src="../../assets/Instagram/din_skønhed.webp"
                alt="Hudbehandling før-efter glød og fugt – DK Skønhedsklinik" loading="lazy" decoding="async">
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="slide">
            <div class="slide-content">
              <img src="../../assets/Instagram/Filler_behandling.webp" alt="Filler til læber og kinder – naturlige resultater"
                loading="lazy" decoding="async">
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="slide">
            <div class="slide-content">
              <img src="../../assets/Instagram/Mesotherapy_Arash.webp" alt="Mesotherapy til dyb fugt – sund hud"
                loading="lazy" decoding="async">
            </div>
          </div>

          <!-- Slide 4 -->
          <div class="slide">
            <div class="slide-content">
              <img src="../../assets/Instagram/Skinbooster_Arash12.webp"
                alt="Skinbooster behandling – frisk og ungdommelig hud" loading="lazy" decoding="async">
            </div>
          </div>

        </div>
        <!-- Navigation Arrows -->
        <button class="prev" aria-label="Forrige slide">‹</button>
        <button class="next" aria-label="Næste slide">›</button>
      </div>
      <!-- Dots Navigation -->
      <div class="dots" role="tablist" aria-label="Galleri navigation"></div>
    </div>


    <div class="container Multimediedesigner VIKING OmKlinik">
      <div class="container-width">
        <div class="VIKING-image">
          <img class="first-img" :src="imgClinic" width="1800" height="1194" loading="lazy" decoding="async" alt="Klinik-konsultation med erfaren læge">
        </div>
        <div class="txt h1 h2 first-txt margin-left Ekspertise-txt">
          <div>
            <h3 data-aos="fade-up" data-aos-duration="1000">Om vores klinikker</h3>
            <h2 data-aos="fade-up" data-aos-duration="1000">Ekspertise og kvalitet i hver behandling</h2>

            <p data-aos="fade-up" data-aos-duration="1000">
              Vores læge, som har mere end <strong>20 års erfaring</strong> inden for skønhedsbehandlinger,
              vil sørge for, at du får en behandling, der er skræddersyet til dig. Vi specialiserer os
              i æstetiske løsninger, der tilpasses dine individuelle behov.
            </p>


            <p data-aos="fade-up" data-aos-duration="1000">
              I vores klinik kombinerer vi den <strong>nyeste teknologi</strong> med høj faglig ekspertise for at sikre
              naturlige og harmoniske resultater. Vi prioriterer sikkerhed, kvalitet og kundetilfredshed,
              så du kan føle dig tryg gennem hele forløbet.
            </p>

            <p>
              <button class="inline-button inline-link" type="button" @click="openBookingFromHero"
                aria-label="Book gratis forundersøgelse">
                <strong>Book en gratis</strong>
              </button>
              og uforpligtende konsultation, og lad os hjælpe dig med at
              fremhæve din naturlige skønhed.
            </p>
          </div>

          <div class="booking-button">
            <router-link to="/omos/" class="arrow general_button"
              aria-label="Om DK Skønhedsklinik, Ekspertise og kvalitet – læs mere" data-tooltip="Går til: Om os">
              Læse mere om DK Skønhedsklinik</router-link>
          </div>
        </div>
      </div>
    </div>

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

const currentIndex = ref(0); // ایندکس فعلی اسلاید
let slides = null;
let slide = null;
let next = null;
let prev = null;
let dotsContainer = null;

function goToSlide(index) {
  currentIndex.value = index;
  if (!slides) return;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

// Update dots (synchronize active state with slides)
function updateDots() {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, index) => {
    const isActive = index === currentIndex.value;
    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-selected", isActive ? "true" : "false");
    dot.setAttribute("tabindex", isActive ? "0" : "-1");
  });
}

// Create dots dynamically
function createDots() {
  dotsContainer.innerHTML = ""; // Clear previous dots
  slide.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");

    // دسترس‌پذیری
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Slide ${index + 1}`);
    dot.setAttribute("aria-selected", index === 0 ? "true" : "false");
    dot.setAttribute("tabindex", index === 0 ? "0" : "-1");

    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // خود کانتینر هم نقش داشته باشد
  dotsContainer.setAttribute("role", "tablist");
  dotsContainer.setAttribute("aria-label", "Galleri navigation");
}

// Add navigation listeners
function addNavigationListeners() {
  if (!next || !prev) return; // Ensure buttons are initialized

  // Next button
  next.addEventListener("click", () => {
    if (!slide) return;
    currentIndex.value = (currentIndex.value + 1) % slide.length; // Loop back to first slide
    goToSlide(currentIndex.value);
  });

  // Previous button
  prev.addEventListener("click", () => {
    if (!slide) return;
    currentIndex.value =
      (currentIndex.value - 1 + slide.length) % slide.length; // Loop back to last slide
    goToSlide(currentIndex.value);
  });
}

// Auto-play slides
function autoPlaySlides() {
  if (!slide) return;
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slide.length;
    goToSlide(currentIndex.value);
  }, 5000); // Change every 5 seconds
}

// Initialize slider
onMounted(() => {
  slides = document.querySelector(".slides");
  slide = document.querySelectorAll(".slide");
  next = document.querySelector(".next");
  prev = document.querySelector(".prev");
  dotsContainer = document.querySelector(".dots");

  if (!slides || !slide || !next || !prev || !dotsContainer) {
    console.error("یکی از المان‌های ضروری یافت نشد. لطفاً HTML را بررسی کنید.");
    return;
  }

  createDots();
  addNavigationListeners();
  autoPlaySlides();
});

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
  width: 30vw;
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
 
  margin: 0 auto;
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
  padding: 70px 0;

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
</style>
