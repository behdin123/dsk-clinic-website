<template>
  <section class="container OmKlinik clinic-view" aria-labelledby="clinic-title">
    <header class="clinic-hero" aria-hidden="true">
      <div class="hero-inner">
        <h1 id="clinic-title">DK Skønhedsklinik – Esbjerg</h1>
        <p class="lead">Adresse, åbningstider, rute og praktisk info for vores afdeling i Esbjerg.</p>
      </div>
      <figure class="hero-figure">
        <img :src="imgEsbjerg" alt="DK Skønhedsklinik Esbjerg" loading="eager" fetchpriority="high" decoding="async" />
      </figure>
    </header>

    <div class="clinic-grid">
      <article class="clinic-info" itemscope itemtype="https://schema.org/LocalBusiness">
        <meta itemprop="name" content="DK Skønhedsklinik – Esbjerg" />
        <meta itemprop="telephone" content="+45 53 50 37 50" />
        <meta itemprop="url" content="https://dsklinik.dk/klinik/esbjerg/" />

        <div>
          <h2>Adresse & kontakt</h2>
          <address>
            <p itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
              <span itemprop="streetAddress"><b>Adresse:</b> Havnegade 6</span>,
              <span itemprop="addressLocality">Esbjerg</span>
              <span itemprop="postalCode" style="display:none">6700</span>
              <span itemprop="addressCountry" style="display:none">DK</span>
            </p>
          </address>
          <p><b>Åbningstider:</b> Mandag–fredag 17:00–20:00</p>
          <p><b>Telefon:</b> <a href="tel:+4553503750" itemprop="telephone">+45 53 50 37 50</a></p>
        </div>

        <p class="clinic-actions">
          <button class="general_button" type="button" @click="openBooking"
            aria-label="Book gratis forundersøgelse">Book forundersøgelse</button>
          <a class="general_button" :href="directionsLink" target="_blank" rel="noopener"
            aria-label="Få rutevejledning til DK Skønhedsklinik Esbjerg">Få rutevejledning</a>
        </p>
      </article>

      <aside class="clinic-map" aria-label="Kort over DK Skønhedsklinik Esbjerg">
        <iframe :src="mapEmbedSrc" width="100%" height="100%" style="border:0;" allowfullscreen=""
          loading="lazy"></iframe>
      </aside>
    </div>

    <section class="clinic-about">
      <div class="about-content">
        <div class="about-text">
          <h2>Om klinikken i Esbjerg</h2>
          <p>
            Vores <strong>Esbjerg-afdeling</strong> er indrettet lyst og roligt med fokus på diskretion, hygiejne og
            komfort. De kosmetiske behandlinger
            udføres af vores erfarne læge i et klinisk, men imødekommende miljø, hvor du kan føle dig tryg fra start til
            slut.


            Lokalet har nem adgang fra gaden/indgangen og gode forhold for alle besøgende.
            <br><br>
            <strong>Parkering</strong>
            <br>
            Der findes parkeringsmuligheder i nærområdet i kort gåafstand.
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

    <section class="clinic-block" aria-labelledby="find-vej-esbjerg">
      <h2 id="find-vej-esbjerg">Sådan finder du os</h2>
      <p>
        Klinikken ligger på <b>Havnegade 6</b>. Der er parkering lige ved bygningen, men
        pladsen er delt op – og det er værd at læse med her, så du ikke ender med en afgift.
      </p>

      <div class="parkering">
        <article class="parkering__kort parkering__kort--primaer">
          <h3>P-pladsen ved Havnegade / Tikanten <span class="badge">Lige ved døren</span></h3>
          <p>
            Pladsen ligger direkte ved bygningen. <b>Den er delt i to:</b>
          </p>
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

      <p class="parkering__note">
        Skiltningen kan ændre sig. <b>Læs skiltet, inden du forlader bilen</b> – en kontrolafgift
        koster langt mere end de to timer er værd.
      </p>
    </section>

    <section class="clinic-block" aria-labelledby="behandlinger-esbjerg">
      <h2 id="behandlinger-esbjerg">Behandlinger i Esbjerg</h2>
      <p>Vi tilbyder de samme behandlinger og de samme priser i Esbjerg som i Vejle.</p>
      <ul class="behandlingsliste">
        <li v-for="b in behandlinger" :key="b.slug">
          <router-link :to="b.path"><b>{{ b.navn }}</b></router-link>
          <span>{{ b.kort }}</span>
          <em v-if="b.prisTekst">{{ b.prisTekst }}</em>
        </li>
      </ul>
      <p><router-link to="/priser/">Se alle priser</router-link></p>
    </section>

    <section class="clinic-block" aria-labelledby="laege-esbjerg">
      <h2 id="laege-esbjerg">Hvem møder du?</h2>
      <p>
        Alle behandlinger udføres af klinikkens læge, <b>Arash Bagheri</b> – ikke af en kosmetolog.
        Han har været læge i 30 år, heraf 17 i det danske sundhedsvæsen, og har mere end 20 års
        erfaring med kosmetiske behandlinger. Autorisations-ID 081Q1.
      </p>
      <p><router-link to="/omos/">Læs mere om lægens baggrund og autorisation</router-link></p>
    </section>

    <section class="clinic-block" aria-labelledby="opland-esbjerg">
      <h2 id="opland-esbjerg">Vi har også kunder fra oplandet</h2>
      <p>
        En stor del af vores kunder kører til Esbjerg fra <b>Varde</b>, <b>Ribe</b>,
        <b>Bramming</b> og <b>Grindsted</b>. Fra de fleste af dem er der under en halv times
        kørsel, og da vi har åbent 17–20 på hverdage, kan de fleste nå det efter arbejde.
      </p>
    </section>

    <section class="clinic-block" aria-labelledby="faq-esbjerg">
      <h2 id="faq-esbjerg">Spørgsmål om Esbjerg-klinikken</h2>
      <div class="faq-list">
        <details v-for="(f, i) in faqs" :key="i" class="faq-item">
          <summary class="faq-q">{{ f.q }}</summary>
          <div class="faq-a"><p>{{ f.a }}</p></div>
        </details>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '@unhead/vue'
import { liveBehandlinger } from '@/data/behandlinger'
import imgEsbjerg from '@/assets/klinik/esbjerg.webp'

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
  'areaServed': ['Esbjerg', 'Sydvestjylland'],
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
const mapEmbedSrc = 'https://www.google.com/maps?q=Havnegade+6,+Esbjerg&output=embed'

// Åbner booking-modal som AppBooking lytter på
const openBooking = () => {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'clinic_esbjerg' } }))
  window.gtagEvent?.('booking_click', { placement: 'clinic_esbjerg', component: 'ClinicEsbjerg' })
}
</script>

<style scoped>
.clinic-block {
  max-width: 860px;
  margin: 0 auto 54px;
  padding: 0 4px;
}
.clinic-block h2 { margin-bottom: 16px; }
.clinic-block > p { max-width: 72ch; line-height: 1.7; margin-bottom: 14px; }

.parkering {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin: 22px 0 16px;
}
.parkering__kort {
  border: 1px solid rgba(21, 54, 85, .12);
  border-radius: 14px;
  padding: 20px;
  background: #fff;
}
.parkering__kort h3 { font-size: 1.02rem; margin: 0 0 10px; color: #2d58a1; }
.parkering__kort p { font-size: .92rem; line-height: 1.6; margin: 0 0 10px; }
.parkering__kort ul { padding-left: 18px; margin: 0; font-size: .9rem; line-height: 1.65; }
.parkering__kort li { margin-bottom: 5px; }
.parkering__kort--primaer {
  grid-column: 1 / -1;
  background: rgba(45, 88, 161, .04);
  border-color: rgba(45, 88, 161, .26);
}
.badge {
  display: inline-block;
  margin-left: 8px;
  padding: 3px 10px;
  border-radius: 999px;
  background: #2d58a1;
  color: #fff;
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  vertical-align: middle;
}
.parkering__note {
  border-left: 3px solid #2d58a1;
  padding-left: 16px;
  font-size: .93rem;
  line-height: 1.65;
  max-width: 70ch;
}

.behandlingsliste { list-style: none; padding: 0; margin: 0 0 16px; }
.behandlingsliste li {
  display: grid;
  grid-template-columns: 180px 1fr auto;
  gap: 14px;
  align-items: baseline;
  padding: 14px 0;
  border-bottom: 1px solid rgba(21, 54, 85, .1);
}
.behandlingsliste a { color: #2d58a1; text-decoration: none; }
.behandlingsliste a:hover { text-decoration: underline; }
.behandlingsliste span { font-size: .9rem; line-height: 1.55; color: rgba(21, 54, 85, .78); }
.behandlingsliste em { font-style: normal; font-weight: 700; font-size: .88rem; white-space: nowrap; }

.clinic-block .faq-list { max-width: 72ch; }
.clinic-block .faq-item { border-bottom: 1px solid rgba(21, 54, 85, .12); }
.clinic-block .faq-q {
  cursor: pointer;
  padding: 15px 0;
  font-weight: 600;
  list-style: none;
}
.clinic-block .faq-q::-webkit-details-marker { display: none; }
.clinic-block .faq-q::after { content: '+'; float: right; color: #2d58a1; font-weight: 400; }
.clinic-block .faq-item[open] .faq-q::after { content: '\2013'; }
.clinic-block .faq-a p { padding: 0 0 15px; line-height: 1.7; margin: 0; max-width: none; }

@media (max-width: 760px) {
  .parkering { grid-template-columns: 1fr; }
  .behandlingsliste li { grid-template-columns: 1fr; gap: 4px; }
}

.container {
  flex-direction: column;
  max-width: 1500px;
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


a {
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
  max-width: 1500px;
  line-height: 1.6;
}

.about-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  justify-content: space-between;
}

.about-text {
  width: 45%;
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
    max-width: 1200px;
    padding: 70px 0 !important;
  }

  .clinic-grid {
    padding: 70px 0;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    max-width: 1000px;
  }
}

@media only screen and (max-width: 1000px) {
  .container {
    max-width: 800px;
    padding: 0 !important;
  }

  .container {
    align-items: center !important;
  }

  .clinic-hero,
  .clinic-grid,
  .clinic-about {
    width: 90% !important;
    padding: 50px 0;
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
  .clinic-hero,
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
</style>
