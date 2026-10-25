<template>
  <section class="container OmKlinik clinic-view" aria-labelledby="clinic-title">
    <header class="clinic-hero" aria-hidden="true">
      <div class="hero-inner">
        <h1 id="clinic-title">DK Skønhedsklinik – Vejle</h1>
        <p class="lead">Adresse, åbningstider, rute og praktisk info for vores afdeling i Vejle.</p>
      </div>
      <figure class="hero-figure">
        <img :src="imgVejle" alt="DK Skønhedsklinik Vejle" loading="eager" fetchpriority="high" decoding="async" />
      </figure>
    </header>

    <div class="clinic-grid">
      <article class="clinic-info" itemscope itemtype="https://schema.org/LocalBusiness">
        <meta itemprop="name" content="DK Skønhedsklinik – Vejle" />
        <meta itemprop="telephone" content="+45 53 50 37 50" />
        <meta itemprop="url" content="https://dsklinik.dk/klinik/vejle/" />
        
        <div>
          <h2>Adresse & kontakt</h2>
          <address>
            <p itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
              <span itemprop="streetAddress"><b>Adresse:</b> Søndergade 50</span>,
              <span itemprop="addressLocality">Vejle</span>
              <span itemprop="postalCode" style="display:none">7100</span>
              <span itemprop="addressCountry" style="display:none">DK</span>
            </p>
          </address>
          <p><b>Åbningstider:</b> Søndag 11:00–18:00</p>
          <p><b>Telefon:</b> <a href="tel:+4553503750" itemprop="telephone">+45 53 50 37 50</a></p>
        </div>

        <p class="clinic-actions">
          <button class="general_button" type="button" @click="openBooking" aria-label="Book gratis forundersøgelse">Book forundersøgelse</button>
          <a class="general_button" :href="directionsLink" target="_blank" rel="noopener" aria-label="Få rutevejledning til DK Skønhedsklinik Vejle">Få rutevejledning</a>
        </p>
      </article>

      <aside class="clinic-map" aria-label="Kort over DK Skønhedsklinik Vejle">
        <iframe :src="mapEmbedSrc" width="100%" height="100%" style="border:0;" allowfullscreen=""
          loading="lazy"></iframe>
      </aside>
    </div>

    <section class="clinic-about">
      <div class="about-content">
        <div class="about-text">
          <h2>Om klinikken i Vejle</h2>
          <p>
            Vores <strong>Vejle-afdeling</strong> er tænkt som en rolig, diskret "by appointment"-klinik med nordisk, lys indretning. Her
            møder du vores læge til kosmetiske behandlinger i et professionelt miljø med tryghed, faglighed og komfort i centrum – fra første samtale
            til opfølgning.

            Nemmelig ankomst og overskuelig modtagelse uden store venteområder. Tidsbookede besøg sikrer ro og privatliv.
            <br><br>
            <strong>Parkering</strong>
            <br>
            Flere parkeringsmuligheder i nærområdet (kort gåafstand). Kom gerne et par minutter før i myldretiden.
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

    <section class="sec" aria-labelledby="find-vej-vejle">
      <div class="sec__head">
        <p class="sec__eyebrow">Praktisk</p>
        <h2 id="find-vej-vejle">Sådan finder du os</h2>
        <p class="sec__lead">Klinikken ligger på <b>Søndergade 50</b> midt i Vejle. Der er flere parkeringsmuligheder inden for få minutters gang, og den tætteste holder praktisk talt foran døren.</p>
      </div>
      <div class="parkering">
        <article class="parkering__kort parkering__kort--primaer">
          <h3>Å-centret <span class="badge">Tættest på</span></h3>
          <p>Du kommer stort set lige foran indgangen. 110 pladser og åbent døgnet rundt.</p>
          <ul>
            <li>Første halve time gratis</li>
            <li>Derefter 44 kr. pr. påbegyndt time</li>
            <li>Maks. 500 kr. pr. døgn</li>
          </ul>
        </article>

        <article class="parkering__kort">
          <h3>Q-Park Bryggen</h3>
          <p>P-huset under Bryggen shoppingcenter ved Søndertorv. Et par minutters gang.</p>
        </article>

        <article class="parkering__kort">
          <h3>Enghavecentret</h3>
          <p>Alternativ i kort gåafstand med 30 minutters gratis parkering.</p>
        </article>
      </div>

      <MediaPlaceholder
        class="parkering__billede"
        :src="imgParkering"
        alt="Parkering ved DK Skønhedsklinik i Vejle – Å-centret ligger tættest på Søndergade 50"
        ratio="4 / 3" />

      <p class="parkering__note">
        Taksterne kan ændre sig. <b>Tjek altid skiltningen på stedet</b>, inden du forlader bilen –
        en kontrolafgift koster langt mere end en times parkering.
      </p>

      <p class="parkering__transport">
        Kommer du med tog eller bus, er der få minutters gang fra Vejle Station gennem midtbyen.
      </p>
    </section>

    <section class="sec sec--panel" aria-labelledby="behandlinger-vejle">
      <div class="sec__head">
        <p class="sec__eyebrow">Behandlinger</p>
        <h2 id="behandlinger-vejle">Behandlinger i Vejle</h2>
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

    <section class="sec" aria-labelledby="laege-vejle">
      <div class="split">
        <div class="split__tekst">
          <p class="sec__eyebrow">Klinikkens læge</p>
          <h2 id="laege-vejle">Hvem møder du?</h2>
          <p>
            Alle behandlinger udføres af klinikkens læge, <b>Arash Bagheri</b> – ikke af en kosmetolog.
            Han har været læge i 30 år, heraf 17 i det danske sundhedsvæsen, og har mere end
            20 års erfaring med kosmetiske behandlinger.
          </p>
          <p class="laege-id">Autorisations-ID 081Q1 · gyldig autorisation</p>
          <p><router-link to="/omos/" class="inline-link">Læs mere om lægens baggrund</router-link></p>
        </div>
        <div class="split__medie">
          <img :src="imgArash" width="1000" height="1251" loading="lazy" decoding="async"
            alt="Arash Bagheri, læge og indehaver af DK Skønhedsklinik" />
        </div>
      </div>
    </section>

    <section class="sec" aria-labelledby="opland-vejle">
      <div class="split split--medie-foerst">
        <div class="split__medie">
          <OplandKort by="Vejle" :punkter="oplandsbyer" :titel-id="'opland-kort-vejle'" />
        </div>
        <div class="split__tekst">
          <p class="sec__eyebrow">Opland</p>
          <h2 id="opland-vejle">Vi har også kunder fra oplandet</h2>
          <p>Vejle-klinikken ligger centralt i Trekantområdet, og en stor del af vores kunder kører hertil fra Kolding, Fredericia, Horsens, Give og Jelling. Fra de fleste af dem er der under en halv times kørsel, og søndag er der hverken myldretid eller kø.</p>
        </div>
      </div>
    </section>

    <section class="sec sec--panel" aria-labelledby="faq-vejle">
      <div class="sec__head">
        <p class="sec__eyebrow">Spørgsmål</p>
        <h2 id="faq-vejle">Spørgsmål om Vejle-klinikken</h2>
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
import imgVejle from '@/assets/klinik/vejle.webp'
import imgParkering from '@/assets/klinik/vejle-parkering.webp'
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
  '@id': 'https://dsklinik.dk/#vejle',
  'parentOrganization': { '@id': 'https://dsklinik.dk/#organization' },
  'hasMap': 'https://maps.google.com/?q=S%C3%B8ndergade+50,+7100+Vejle',
  'geo': { '@type': 'GeoCoordinates', 'latitude': 55.7064855, 'longitude': 9.5302675 },
  'name': 'DK Skønhedsklinik – Vejle',
  'image': 'https://dsklinik.dk/og/home.webp',
  'description': 'Skønhedsklinik i Vejle med lægebehandlet botox, filler, skinbooster, mesotherapy og microneedling.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Søndergade 50',
    'addressLocality': 'Vejle',
    'postalCode': '7100',
    'addressCountry': 'DK'
  },
  'telephone': '+45 53 50 37 50',
  'url': 'https://dsklinik.dk/klinik/vejle/',
  'openingHoursSpecification': [
    { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Sunday'], 'opens': '11:00', 'closes': '18:00' }
  ],
  'priceRange': '$$',
  'areaServed': ['Vejle', 'Trekantområdet'],
  'sameAs': [
    'https://share.google/xmCE5ekm5KMWgjowu',
    'https://www.facebook.com/profile.php?id=100054595142567',
    'https://www.instagram.com/dk_skonhedsklinik/'
  ]
}

// Lokale spoergsmaal - rammer "aabningstider vejle", "parkering soendergade" osv.
const faqs = [
  { q: 'Hvornår har I åbent i Vejle?',
    a: 'Søndag kl. 11–18. Tidspunkter uden for det kan i særlige tilfælde aftales – dog kun om søndagen indtil videre. Ring eller skriv, så finder vi ud af det.' },
  { q: 'Hvor kan jeg parkere?',
    a: 'Å-centret ligger tættest, og du kommer stort set lige foran døren. Første halve time er gratis, derefter 44 kr. pr. påbegyndt time. Q-Park Bryggen og Enghavecentret ligger også i kort gåafstand. Tjek altid skiltningen på stedet.' },
  { q: 'Koster behandlingerne det samme som i Esbjerg?',
    a: 'Ja. Vi har præcis de samme priser på begge klinikker.' },
  { q: 'Hvornår skal jeg betale?',
    a: 'Efter behandlingen. Forundersøgelsen hos lægen er gratis og helt uforpligtende.' },
  { q: 'Kan jeg blive behandlet samme dag som forundersøgelsen?',
    a: 'Nej. Der er 48 timers lovpligtig betænkningstid mellem forundersøgelse og behandling ved kosmetiske indgreb.' },
  { q: 'Er det en læge, der behandler mig?',
    a: 'Ja. Alle behandlinger udføres af klinikkens læge, Arash Bagheri – ikke af en kosmetolog.' }
]
// Stiliseret placering - omtrent rigtig retning, ikke geografisk praecis
const oplandsbyer = [
  { navn: 'Horsens',    x: 232, y: 44  },
  { navn: 'Jelling',    x: 92,  y: 86  },
  { navn: 'Give',       x: 58,  y: 178, under: true },
  { navn: 'Fredericia', x: 332, y: 236, under: true },
  { navn: 'Kolding',    x: 182, y: 312, under: true }
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
  title: 'Kosmetisk klinik i Vejle | Botox & filler hos læge',
  meta: [
    { name: 'description', content: 'Kosmetisk klinik i Vejle på Søndergade 50 med botox, filler, skinbooster, mesotherapy og microneedling udført af læge. Book gratis forundersøgelse.' },
    { name: 'keywords', content: 'botox vejle, kosmetisk klinik vejle, skønhedsklinik vejle, filler vejle, hudpleje vejle, skinbooster vejle, mesotherapy vejle, microneedling vejle' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'Skønhedsklinik Vejle – DK Skønhedsklinik' },
    { property: 'og:description', content: 'Lægebehandlet skønhedsklinik i Vejle med filler og avanceret hudbehandling. Book gratis forundersøgelse.' },
    { property: 'og:type', content: 'business.business' },
    { property: 'og:url', content: 'https://dsklinik.dk/klinik/vejle/' },
    { property: 'og:image', content: 'https://dsklinik.dk/og/home.webp' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:locale', content: 'da_DK' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Skønhedsklinik Vejle – DK Skønhedsklinik' },
    { name: 'twitter:description', content: 'Filler og lægebehandlet hudpleje i Vejle. Book gratis forundersøgelse.' },
    { name: 'twitter:image', content: 'https://dsklinik.dk/og/home.webp' },
    { name: 'geo:region', content: 'DK-82' },
    { name: 'geo:placename', content: 'Vejle' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dsklinik.dk/klinik/vejle/' },
    { rel: 'alternate', hreflang: 'da-DK', href: 'https://dsklinik.dk/klinik/vejle/' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://dsklinik.dk/klinik/vejle/' }
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
const directionsLink = 'https://www.google.com/maps/dir/?api=1&destination=Søndergade+50,+7100+Vejle'
const mapEmbedSrc = 'https://www.google.com/maps?q=Søndergade+50,+7100+Vejle&output=embed'

// Åbner booking-modal som AppBooking lytter på
const openBooking = () => {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'clinic_vejle' } }))
  window.gtagEvent?.('booking_click', { placement: 'clinic_vejle', component: 'ClinicVejle' })
}
</script>

<style scoped>
.laege-id {
  font-size: .9rem;
  color: rgba(21, 54, 85, .62);
  margin-bottom: 14px !important;
}

.behandlingsliste { list-style: none; padding: 0; margin: 0; }
.behandlingsliste li {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: start;
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
  max-width: 54ch;
}
.bl-pris {
  font-weight: 700;
  font-size: .95rem;
  white-space: nowrap;
  color: #153655;
  padding-top: 2px;
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





@media (max-width: 760px) {
  
  
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

a{
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
  max-width: 900px;
}

.clinic-info h2,
.clinic-map h2 {
  margin-top: 0;
  width: 100% !important;
}

.clinic-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-top: 18px;
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

  .about-text{
    width: 90%;
  }
  .about-video{
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
  .about-text{
    width: 100%;
  }
  .about-video{
    width: 100%;
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