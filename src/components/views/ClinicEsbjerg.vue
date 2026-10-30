<template>
  <section class="container OmKlinik clinic-view" aria-labelledby="clinic-title">
    <header class="clinic-hero">
      <div class="hero-inner">
        <h1 id="clinic-title">DK Skønhedsklinik – Esbjerg</h1>
        <p class="lead">Adresse, åbningstider, rute og praktisk info for vores afdeling i Esbjerg.</p>
      </div>
      <figure class="hero-figure">
        <img :src="imgEsbjerg" alt="Klinikken i Esbjerg" width="1400" height="788" loading="eager" fetchpriority="high" decoding="async" />
      </figure>
    </header>

    <div class="clinic-grid">
      <article class="clinic-info" itemscope itemtype="https://schema.org/LocalBusiness">
        <meta itemprop="name" content="DK Skønhedsklinik – Esbjerg" />
        <meta itemprop="telephone" content="+45 53 50 37 50" />
        <meta itemprop="url" content="https://dsklinik.dk/klinik/esbjerg/" />

        <div class="clinic-info__body">
          <p class="sec__eyebrow">Kontakt</p>
          <h2>Adresse &amp; kontakt</h2>

          <dl class="kontaktliste">
            <div class="kontaktliste__raekke">
              <dt>Adresse</dt>
              <dd>
                <address itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                  <span itemprop="streetAddress">Havnegade 6</span><br />
                  <span itemprop="postalCode">6700</span> <span itemprop="addressLocality">Esbjerg</span>
                  <span itemprop="addressCountry" style="display:none">DK</span>
                </address>
              </dd>
            </div>
            <div class="kontaktliste__raekke">
              <dt>Åbningstider</dt>
              <dd>
                Mandag–fredag 17:00–20:00
                <span class="kontaktliste__note">Andre tidspunkter kan aftales</span>
              </dd>
            </div>
            <div class="kontaktliste__raekke">
              <dt>Telefon</dt>
              <dd><a class="kontakt-tlf" href="tel:+4553503750" itemprop="telephone">+45 53 50 37 50</a></dd>
            </div>
          </dl>

          <p class="clinic-actions">
            <button class="general_button" type="button" @click="openBooking"
              aria-label="Book gratis forundersøgelse">Book forundersøgelse</button>
            <a class="general_button general_button--sekundaer" :href="directionsLink" target="_blank" rel="noopener"
              aria-label="Få rutevejledning til DK Skønhedsklinik Esbjerg">Få rutevejledning</a>
          </p>
          <p class="clinic-info__gratis">Forundersøgelsen er gratis og uforpligtende – du betaler først efter behandlingen.</p>
        </div>
      </article>

      <aside class="clinic-map" aria-label="Kort over DK Skønhedsklinik Esbjerg">
        <iframe :src="mapEmbedSrc" width="100%" height="100%" style="border:0;" allowfullscreen=""
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          title="Kort over klinikken"></iframe>
      </aside>
    </div>

    <section class="sec" aria-labelledby="find-vej-esbjerg">
      <div class="sec__head">
        <p class="sec__eyebrow">Praktisk</p>
        <h2 id="find-vej-esbjerg">Sådan finder du os</h2>
        <p class="sec__lead">Klinikken ligger på <b>Havnegade 6</b>. Der er parkering lige ved bygningen, men pladsen er delt op – og det er værd at læse med her, så du ikke ender med en afgift.</p>
      </div>
      <div class="parkering">
        <article class="parkering__kort parkering__kort--primaer">
          <h3>P-pladsen ved Havnegade / Tikanten <span class="badge">Lige ved døren</span></h3>
          <p>Pladsen ligger direkte ved bygningen. <b>Den er delt i to:</b></p>
          <ul>
            <li>En del er forbeholdt <b>beboere med registreret bil</b></li>
            <li>Ved siden af ligger et område, der er <b>åbent for alle med 2 timers p-skive</b></li>
          </ul>
          <p>
            Hold i den åbne del, og <b>husk at stille p-skiven</b>. To timer er rigeligt til
            både forundersøgelse og behandling.
          </p>
        </article>
      </div>

      <MediaPlaceholder
        class="parkering__billede"
        :src="imgParkering"
        alt="Parkeringspladsen ved Havnegade 6 i Esbjerg, set fra Havnegade – klinikken ligger i bygningen til venstre"
        ratio="12 / 5" />

      <p class="parkering__note">
        Skiltningen kan ændre sig. <b>Læs skiltet, inden du forlader bilen</b> – en kontrolafgift
        koster langt mere end de to timer er værd.
      </p>
    </section>

    <section class="clinic-about blue-background">
      <div class="about-content">
        <div class="about-text">
          <p class="sec__eyebrow">Klinikken</p>
          <h2>Om klinikken i Esbjerg</h2>
          <p>
            Vores <strong>Esbjerg-afdeling</strong> er indrettet lyst og roligt med fokus på diskretion, hygiejne og
            komfort. De kosmetiske behandlinger
            udføres af vores erfarne læge i et klinisk, men imødekommende miljø, hvor du kan føle dig tryg fra start til
            slut.


            Lokalet har nem adgang fra gaden/indgangen og gode forhold for alle besøgende.
            <br><br>
            Kom gerne et par minutter før, så der er ro til samtalen.
          </p>
        </div>
        <div class="about-video">
          <video ref="videoEl" loop muted playsinline preload="none" width="1080" height="1350"
            :poster="videoPoster" aria-label="Video fra klinikken">
            Din browser understøtter ikke video-element.
          </video>
        </div>
      </div>
    </section>


    <section class="sec sec--panel margin-correction" aria-labelledby="behandlinger-esbjerg">
      <div class="sec__head">
        <p class="sec__eyebrow">Behandlinger</p>
        <h2 id="behandlinger-esbjerg">Behandlinger i Esbjerg</h2>
        <p class="sec__lead">Vi tilbyder de samme behandlinger og de samme priser på begge klinikker.</p>
      </div>
      <ul class="behandlingsliste">
        <li v-for="b in behandlinger" :key="b.slug">
          <div class="bl-tekst">
            <router-link :to="b.path" class="bl-navn">{{ b.navn }}</router-link>
            <p class="bl-kort">{{ b.kort }}</p>
          </div>
          <span v-if="b.prisTekst" class="bl-pris">{{ b.prisTekst }}</span>
        </li>
      </ul>
      <p class="bl-alle"><router-link to="/priser/">Se alle priser</router-link></p>
    </section>

    <section class="sec blue-background" aria-labelledby="laege-esbjerg">
      <div class="split split--medie-foerst split--portraet">
        <div class="split__tekst">
          <p class="sec__eyebrow">Klinikkens læge</p>
          <h2 id="laege-esbjerg">Hvem møder du?</h2>
          <p>
            Alle behandlinger udføres af klinikkens læge, <b>Arash Bagheri</b> – ikke af en kosmetolog.
            Han har været læge i 30 år, heraf 17 i det danske sundhedsvæsen, og har mere end
            20 års erfaring med kosmetiske behandlinger.
          </p>
          <p class="laege-id">Autorisations-ID 081Q1 · gyldig autorisation</p>
          <p><router-link to="/omos/" class="laes-mere">Læs mere om lægens baggrund<span aria-hidden="true">→</span></router-link></p>
        </div>
        <div class="split__medie">
          <img :src="imgArash" width="1000" height="1251" loading="lazy" decoding="async"
            alt="Arash Bagheri, læge og indehaver af DK Skønhedsklinik" />
        </div>
      </div>
    </section>

    <section class="sec" aria-labelledby="opland-esbjerg">
      <div class="sec__head">
        <p class="sec__eyebrow">Opland</p>
        <h2 id="opland-esbjerg">Vi har også kunder fra oplandet</h2>
        <p class="sec__lead">En stor del af vores kunder kører til Esbjerg fra Varde, Ribe, Bramming og Grindsted. Fra de fleste af dem er der under en halv times kørsel, og da vi har åbent 17–20 på hverdage, kan de fleste nå det efter arbejde.</p>
      </div>
      <OplandKort by="Esbjerg" :punkter="oplandsbyer" :titel-id="'opland-kort-esbjerg'" :maerkat-retning="250" />
    </section>

    <section class="sec sec--panel" aria-labelledby="faq-esbjerg">
      <div class="sec__head">
        <p class="sec__eyebrow">Spørgsmål</p>
        <h2 id="faq-esbjerg">Spørgsmål om Esbjerg-klinikken</h2>
      </div>
      <FaqList :items="faqs" />
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '@unhead/vue'
import FaqList from '@/components/FaqList.vue'
import OplandKort from '@/components/OplandKort.vue'
import imgArash from '@/assets/klinik/arash-portraet.webp'
import { liveBehandlinger } from '@/data/behandlinger'
import imgEsbjerg from '@/assets/klinik/esbjerg.webp'
import imgParkering from '@/assets/klinik/esbjerg-parkering.webp'
import MediaPlaceholder from '@/components/MediaPlaceholder.vue'

const videoReel = '/assets/video/Instagram_Reel_4.mp4'
const videoPoster = '/assets/video/klinik-video-poster.webp'
const videoEl = ref(null)

// Videoen (9 MB) hentes foerst, naar den er paa vej ind i skaermbilledet
let io = null
const observeVideo = () => {
  const el = videoEl.value
  if (!el || typeof IntersectionObserver === 'undefined') return
  io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue
      if (!el.src) el.src = videoReel
      el.muted = true
      el.play().catch(() => {})
      io.disconnect(); io = null
    }
  }, { rootMargin: '100px' })
  io.observe(el)
}

onMounted(() => {
  // Vent til billederne over videoen har fyldt layoutet ud. Ellers staar
  // videoen hoejere oppe end i det faerdige layout og bliver hentet med det samme.
  if (typeof document !== 'undefined' && document.readyState === 'complete') observeVideo()
  else window.addEventListener('load', observeVideo, { once: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('load', observeVideo)
  if (io) { io.disconnect(); io = null }
})

// Schema.org struktureret data for lokalt firma
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': 'https://dsklinik.dk/#esbjerg',
  'parentOrganization': { '@id': 'https://dsklinik.dk/#organization' },
  'hasMap': 'https://maps.google.com/?q=Havnegade+6,+6700+Esbjerg',
  'geo': { '@type': 'GeoCoordinates', 'latitude': 55.4639497, 'longitude': 8.4543111 },
  'name': 'DK Skønhedsklinik – Esbjerg',
  'image': 'https://dsklinik.dk/og/home.webp',
  'description': 'Skønhedsklinik i Esbjerg med lægebehandlet botox, filler, skinbooster, mesotherapy og microneedling.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Havnegade 6',
    'addressLocality': 'Esbjerg',
    'postalCode': '6700',
    'addressCountry': 'DK'
  },
  'telephone': '+45 53 50 37 50',
  'url': 'https://dsklinik.dk/klinik/esbjerg/',
  'openingHoursSpecification': [
    { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday'], 'opens': '17:00', 'closes': '20:00' }
  ],
  'priceRange': '$$',
  'areaServed': ['Esbjerg', 'Sydvestjylland', 'Varde', 'Bramming', 'Ribe', 'Grindsted'],
  'sameAs': [
    'https://share.google/GKWF9sJbSFoxUsfJA',
    'https://www.facebook.com/profile.php?id=100054595142567',
    'https://www.instagram.com/dk_skonhedsklinik/'
  ]
}

// Lokale spoergsmaal - rammer "aabningstider esbjerg", "parkering havnegade" osv.
const faqs = [
  { q: 'Hvornår har I åbent i Esbjerg?',
    a: 'Alle hverdage kl. 17–20, så du kan nå det efter arbejde. Tidspunkter uden for det kan aftales – ring eller skriv, så finder vi ud af det.' },
  { q: 'Hvor kan jeg parkere?',
    a: 'Der er parkering lige ved bygningen på Havnegade. Pladsen er delt: en del er forbeholdt beboere med registreret bil, og ved siden af ligger et område, der er åbent for alle med 2 timers p-skive. Hold i den åbne del og husk p-skiven.' },
  { q: 'Koster behandlingerne det samme som i Vejle?',
    a: 'Ja. Vi har præcis de samme priser på begge klinikker.' },
  { q: 'Hvornår skal jeg betale?',
    a: 'Efter behandlingen. Forundersøgelsen hos lægen er gratis og helt uforpligtende.' },
  { q: 'Kan jeg blive behandlet samme dag som forundersøgelsen?',
    a: 'Nej. Der er 48 timers lovpligtig betænkningstid mellem forundersøgelse og behandling ved kosmetiske indgreb.' },
  { q: 'Er det en læge, der behandler mig?',
    a: 'Ja. Alle behandlinger udføres af klinikkens læge, Arash Bagheri – ikke af en kosmetolog.' }
]
// Koerselsafstande ad vej fra Esbjerg, afrundet. Retning er grader fra nord.
// Afstanden fra midten i diagrammet foelger koeretiden, ikke kilometerne.
const oplandsbyer = [
  { navn: 'Varde',     km: 18, minutter: 20, retning: 5   },
  { navn: 'Grindsted', km: 47, minutter: 40, retning: 50  },
  { navn: 'Bramming',  km: 19, minutter: 20, retning: 90  },
  { navn: 'Ribe',      km: 31, minutter: 30, retning: 152 }
]

const behandlinger = liveBehandlinger()

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
}

useHead({
  title: 'Kosmetisk klinik i Esbjerg | Botox & filler hos læge',
  meta: [
    { name: 'description', content: 'Kosmetisk klinik i Esbjerg på Havnegade 6 med botox, filler, skinbooster, mesotherapy og microneedling udført af læge. Åbent hverdage 17-20.' },
    { name: 'keywords', content: 'botox Esbjerg, kosmetisk klinik Esbjerg, skønhedsklinik Esbjerg, hudpleje Esbjerg, filler Esbjerg, anti-aging Esbjerg, lægebehandlet hudpleje' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'Klinik i Esbjerg – DK Skønhedsklinik' },
    { property: 'og:description', content: 'Moderne skønhedsklinik i Esbjerg med lægebehandlet botox, filler og hudforbedrende behandlinger. Book din gratis forundersøgelse i dag.' },
    { property: 'og:type', content: 'business.business' },
    { property: 'og:url', content: 'https://dsklinik.dk/klinik/esbjerg/' },
    { property: 'og:image', content: 'https://dsklinik.dk/og/home.webp' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:locale', content: 'da_DK' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Klinik i Esbjerg – DK Skønhedsklinik' },
    { name: 'twitter:description', content: 'Botox, filler og lægebehandlet hudpleje i Esbjerg. Book gratis forundersøgelse.' },
    { name: 'twitter:image', content: 'https://dsklinik.dk/og/home.webp' },
    { name: 'geo:region', content: 'DK-86' },
    { name: 'geo:placename', content: 'Esbjerg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dsklinik.dk/klinik/esbjerg/' },
    { rel: 'alternate', hreflang: 'da-DK', href: 'https://dsklinik.dk/klinik/esbjerg/' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://dsklinik.dk/klinik/esbjerg/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schemaData)
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqLd)
    }
  ]
})

// Eksporterede data som bruges i template
const directionsLink = 'https://www.google.com/maps/dir/?api=1&destination=Havnegade+6,+Esbjerg'
// maps.google.com + output=embed virker uden API-noegle og ogsaa paa mobil
const mapEmbedSrc = 'https://maps.google.com/maps?q=Havnegade%206%2C%206700%20Esbjerg&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=da'

// Åbner booking-modal som AppBooking lytter på
const openBooking = () => {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'clinic_esbjerg' } }))
  window.gtagEvent?.('booking_click', { placement: 'clinic_esbjerg', component: 'ClinicEsbjerg' })
}
</script>

<style scoped>
/* H1 laa bag den faste navigation og var dermed usynlig. */
.container.clinic-view { flex-direction: column; }

.clinic-hero .hero-inner h1 {
  color: #153655;
  font-size: clamp(1.9rem, 3.4vw, 2.6rem);
  line-height: 1.15;
  margin: 0 0 10px;
}

.clinic-hero .hero-inner .lead {
  max-width: 58ch;
  line-height: 1.7;
  color: rgba(21, 54, 85, .78);
  margin: 0;
}

/* Adresse & kontakt skal veje tungest - det er det, folk kom efter */
.clinic-info h2 { margin-bottom: 14px; }

/* Behandlingslisten: tekst og pris skal hoere sammen, ikke have en flod imellem */
.behandlingsliste li > * { min-width: 0; }
.bl-tekst { min-width: 0; }
.bl-kort { overflow-wrap: anywhere; }



.laege-id {
  font-size: .9rem;
  color: rgba(21, 54, 85, .62);
  margin-bottom: 14px !important;
}

.behandlingsliste { list-style: none; padding: 0; margin: 0; }
.behandlingsliste li {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 32px;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid rgba(21, 54, 85, .1);
}
.behandlingsliste li:last-child { border-bottom: 0; }
.bl-navn {
  color: #2d58a1;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.04rem;
}
.bl-navn:hover { text-decoration: underline; }
.bl-kort {
  margin: 5px 0 0;
  font-size: .92rem;
  line-height: 1.55;
  color: rgba(21, 54, 85, .74);
}
.bl-pris {
  font-weight: 700;
  font-size: .95rem;
  white-space: nowrap;
  color: #153655;
  text-align: right;
}
.bl-alle { margin: 20px 0 0; }
.bl-alle a { color: #2d58a1; font-weight: 600; }

.parkering {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin: 0 0 20px;
}
.parkering__kort {
  border: 1px solid rgba(21, 54, 85, .12);
  border-radius: 14px;
  padding: 22px;
  background: #fff;
}
.parkering__kort h3 { font-size: 1.02rem; margin: 0 0 10px; color: #2d58a1; }
.parkering__kort p { font-size: .92rem; line-height: 1.6; margin: 0 0 10px; }
.parkering__kort p:last-child { margin-bottom: 0; }
.parkering__kort ul { padding-left: 18px; margin: 0 0 10px; font-size: .9rem; line-height: 1.65; }
.parkering__kort li { margin-bottom: 5px; }
.parkering__kort--primaer {
  grid-column: 1 / -1;
  background: rgba(45, 88, 161, .05);
  border-color: rgba(45, 88, 161, .24);
}
.badge {
  display: inline-block;
  margin-left: 8px;
  padding: 3px 10px;
  border-radius: 999px;
  background: #2d58a1;
  color: #fff;
  font-size: .66rem;
  font-weight: 700;
  letter-spacing: .05em;
  text-transform: uppercase;
  vertical-align: middle;
}
.parkering__billede { margin: 4px 0 20px; }
.parkering__note {
  border-left: 3px solid #2d58a1;
  padding-left: 16px;
  font-size: .93rem;
  line-height: 1.65;
  max-width: 68ch;
  margin: 0 0 14px;
}
.parkering__transport {
  font-size: .95rem;
  line-height: 1.7;
  max-width: 68ch;
  margin: 0;
}

@media (max-width: 760px) {
  .parkering { grid-template-columns: 1fr; }
  .behandlingsliste li { grid-template-columns: 1fr; gap: 6px; }
  .bl-pris { padding-top: 4px; }
}

.container {
  flex-direction: column;
  margin: 0 auto;
  padding: 100px 0 !important;
}

.clinic-hero {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-figure {
  margin: 0;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
  }
}

strong {
  color: #2d58a1;
}


/* Reglen gjaldt foer ALLE links paa siden - ogsaa telefonnummer og
   inline-links, der dermed mistede deres understregning. Nu kun knapper. */
.general_button {
  padding: 0 !important;
  height: 59px;
  text-decoration: none;
}



.clinic-grid {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  padding: 100px 0;
}

.clinic-info {
  display: flex;
  justify-content: space-between;
}

.clinic-info h2,
.clinic-map h2 {
  margin-top: 0;
  width: 100% !important;
}

.clinic-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  align-items: flex-end;
  margin-top: 18px;
}

.general_button {
  min-width: 150px;
  width: 50% !important;
  font-size: 14px;
  padding: 10px;
  height: 60px;
}

.clinic-about {
  margin-top: 12px;
  line-height: 1.6;
}

.about-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  justify-content: space-between;
}

.about-text {
  width: 50%;
  min-width: 0;
}

.about-text h2 {
  margin-top: 0;
  margin-bottom: 20px;
}

.about-text p {
  line-height: 1.8;
  color: #333;
}

.about-video {
  width: 40%;
  min-width: 0;
}

.about-video video {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background: #eef1f5;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: block;
}

.clinic-map iframe {
  height: 520px !important;
  border-radius: 10px;
}

@media only screen and (max-width: 1550px) {
  .container {
    padding: 70px 0 !important;
  }

  .clinic-grid {
    padding: 70px 0;
  }
}

@media only screen and (max-width: 1000px) {

  .container {
    align-items: center !important;
  }

  .clinic-hero,
  .clinic-grid {
    width: 90% !important;
  }

  .about-content {
    flex-direction: column;
    gap: 30px;
  }

  .about-text {
    width: 90%;
  }

  .about-video {
    width: 60%;
  }
}

@media only screen and (max-width: 600px) {
  .clinic-info {
    flex-direction: column;
  }

  .clinic-actions {
    align-items: flex-start;
  }

  .about-text {
    width: 100%;
  }

  .general_button {
    min-width: 150px;
    width: 50% !important;
    font-size: 14px;
    padding: 10px;
    height: 60px;
  }

  .about-video {
    width: 100%;
  }

  .clinic-grid,
  .clinic-about {
    padding: 25px 0;
  }
}

@media (max-width: 900px) {
  .clinic-map iframe {
    height: 300px !important;
  }
}

@media (max-width: 900px) {
  .hero-figure img {
    height: 200px;
  }
}

/* ============================================================
   Designjustering: hierarki, balance og vertikal rytme
   ============================================================ */

/* Hero: lavere baand, saa H1 og indhold naaes hurtigere */
.clinic-hero { gap: 18px; }

.clinic-hero .hero-figure img {
  height: clamp(220px, 26vw, 340px);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .10);
}

/* Kontakt + kort staar side om side - adressen hoerer sammen med kortet,
   og vi sparer ca. 500 px lodret vej til resten af siden. */
.clinic-grid {
  display: grid;
  grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
  gap: 28px;
  align-items: stretch;
  padding: 44px 0 56px;
}

/* Kontaktblokken er det, folk kom efter - den skal se ud som et kort,
   ikke som loes tekst ved siden af to blaa knapper. */
.clinic-info {
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .06);
  display: block;
  max-width: none;
  padding: 34px 32px;
}

.clinic-info__body { display: block; }

.clinic-info h2 {
  font-size: clamp(1.3rem, 1.9vw, 1.6rem);
  margin: 0 0 22px;
}

.kontaktliste {
  border-top: 1px solid rgba(21, 54, 85, .08);
  margin: 0 0 26px;
}

.kontaktliste__raekke {
  border-bottom: 1px solid rgba(21, 54, 85, .08);
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 16px;
  padding: 14px 0;
}

.kontaktliste dt {
  color: rgba(21, 54, 85, .62);
  font-size: .82rem;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.kontaktliste dd {
  color: #153655;
  font-weight: 600;
  margin: 0;
}

.kontaktliste address {
  font-style: normal;
  line-height: 1.5;
}

.kontaktliste__note {
  color: rgba(21, 54, 85, .60);
  display: block;
  font-size: .86rem;
  font-weight: 400;
  margin-top: 4px;
}

.kontakt-tlf {
  color: #2d58a1;
  font-size: 1.12rem;
  text-decoration: none;
}

.kontakt-tlf:hover,
.kontakt-tlf:focus-visible { text-decoration: underline; }

/* Knapperne: én primaer handling, én sekundaer. Foer stod to ens blaa
   blokke og trak mere opmaerksomhed end selve adressen. */
.clinic-actions {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 0 0 14px;
}

.clinic-info,
.clinic-info *,
.clinic-info *::before,
.clinic-info *::after { box-sizing: border-box; }

.clinic-info .general_button {
  border-radius: 10px;
  flex: 1 1 0;
  font-size: 13px;
  height: 54px;
  line-height: 54px;
  min-width: 0;
  padding: 0 14px !important;
  width: auto !important;
}

.clinic-info .general_button--sekundaer {
  background: #fff;
  border: 1.5px solid rgba(45, 88, 161, .45);
  color: #2d58a1 !important;
  line-height: 51px;
}

.clinic-info .general_button--sekundaer:hover,
.clinic-info .general_button--sekundaer:focus-visible {
  background: rgba(45, 88, 161, .06);
  border-color: #2d58a1;
  opacity: 1;
}

.clinic-info__gratis {
  color: rgba(21, 54, 85, .62);
  font-size: .88rem;
  margin: 0;
}

/* Kortet faar samme hoejde som kortet ved siden af */
.clinic-map {
  border-radius: 18px;
  min-height: 100%;
  overflow: hidden;
}

.clinic-map iframe {
  display: block;
  height: 100% !important;
  min-height: 420px;
  border-radius: 18px;
}

/* Vertikal rytme: afsnittene laa for langt fra hinanden i forhold til
   maengden af indhold. */
.clinic-about { margin-top: 0; }
.clinic-about .about-content { gap: 48px; }

@media (max-width: 900px) {
  .clinic-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
    padding: 28px 0 40px;
  }

  .clinic-info { padding: 26px 22px; }

  .clinic-map iframe { min-height: 300px; }

  .clinic-hero .hero-figure img { height: 200px; }
}

@media (max-width: 560px) {
  .kontaktliste__raekke {
    grid-template-columns: minmax(0, 1fr);
    gap: 4px;
  }

  .clinic-actions { flex-direction: column; }
  .clinic-info .general_button { width: 100% !important; }
}

/* ---- Runde 2: luft, balance og klikbarhed ---- */

/* Der laa ca. 150 px tom luft under navigationen, foer oejet naaede H1. */
.container.clinic-view { padding: 56px 0 0 0 !important; }

/* "Om klinikken": teksten sluttede langt foer videoen - blokken saa skaev ud. */
.clinic-about .about-content {
  align-items: center;
  gap: 56px;
}


.clinic-about .about-video { width: auto; flex: 0 1 38%; max-width: 380px; }

/* Parkeringsbilledet fyldte naesten 750 px i hoejden og overdoev afsnittet. */
.parkering__billede {
  margin-left: auto;
  margin-right: auto;  
}

/* Et "laes mere" skal ligne et link, ikke broedtekst */
.laes-mere {
  align-items: center;
  color: #2d58a1 !important;
  display: inline-flex;
  font-weight: 600;
  gap: 8px;
  height: auto;
  text-decoration: none;
}

.laes-mere span { transition: transform .2s ease; }

.laes-mere:hover,
.laes-mere:focus-visible { text-decoration: underline; }
.laes-mere:hover span { transform: translateX(3px); }

@media (max-width: 1000px) {
  .container.clinic-view { padding-top: 36px !important; }
  .clinic-about .about-text,
  .clinic-about .about-video { width: 100%; max-width: none; }
}

/* ---- Runde 3: én fælles venstrekant ---- */
/* Hero og kontaktblokken laa i containerens fulde bredde (1200 px),
   mens .sec-afsnittene var 980 px og centreret. Det gav tre forskellige
   venstrekanter ned gennem siden. Nu deler alt samme maal. */
.clinic-view .clinic-hero,
.clinic-view .clinic-grid{
  margin-left: auto;
  margin-right: auto;
  max-width: var(--maal);
  width: 100%;
}

@media only screen and (max-width: 1000px) {
  .clinic-view .clinic-hero,
  .clinic-view .clinic-grid,
  .clinic-view .clinic-about { max-width: none; }

  /* .sec-afsnittene laa helt ud til skaermkanten paa mobil, mens resten
     havde 20 px luft. Samme venstrekant hele vejen ned. */
  .clinic-view .sec {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}

/* ===== Kortet paa mobil =====
   iframe'en havde height: 100% inde i et gitter uden fast hoejde. Paa
   mobil (Safari og Chrome) blev hoejden beregnet forkert: kortet blev ikke
   indlaest (loading="lazy" + 0 px) og efterlod et stort hul. Fast hoejde. */
@media (max-width: 900px) {
  .clinic-map {
    height: auto;
    min-height: 0 !important;
  }

  .clinic-map iframe {
    display: block;
    height: 320px !important;
    min-height: 0 !important;
  }
}
</style>
