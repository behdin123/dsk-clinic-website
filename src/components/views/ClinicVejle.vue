<template>
  <section class="container OmKlinik clinic-view" aria-labelledby="clinic-title">
    <header class="clinic-hero">
      <div class="hero-inner">
        <h1 id="clinic-title">DK Skønhedsklinik – Vejle</h1>
        <p class="lead">Adresse, åbningstider, rute og praktisk info for vores afdeling i Vejle.</p>
      </div>
      <figure class="hero-figure">
        <img :src="imgVejle" alt="Indgangen til DK Skønhedsklinik på Søndergade 50 i Vejle" loading="eager" fetchpriority="high" decoding="async" />
      </figure>
    </header>

    <div class="clinic-grid">
      <article class="clinic-info" itemscope itemtype="https://schema.org/LocalBusiness">
        <meta itemprop="name" content="DK Skønhedsklinik – Vejle" />
        <meta itemprop="telephone" content="+45 53 50 37 50" />
        <meta itemprop="url" content="https://dsklinik.dk/klinik/vejle/" />
        
        <div class="clinic-info__body">
          <p class="sec__eyebrow">Kontakt</p>
          <h2>Adresse &amp; kontakt</h2>

          <dl class="kontaktliste">
            <div class="kontaktliste__raekke">
              <dt>Adresse</dt>
              <dd>
                <address itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                  <span itemprop="streetAddress">Søndergade 50</span><br />
                  <span itemprop="postalCode">7100</span> <span itemprop="addressLocality">Vejle</span>
                  <span itemprop="addressCountry" style="display:none">DK</span>
                </address>
              </dd>
            </div>
            <div class="kontaktliste__raekke">
              <dt>Åbningstider</dt>
              <dd>
                Søndag 11:00–18:00
                <span class="kontaktliste__note">Andre tider kan aftales – dog kun søndag indtil videre</span>
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
              aria-label="Få rutevejledning til DK Skønhedsklinik Vejle">Få rutevejledning</a>
          </p>
          <p class="clinic-info__gratis">Forundersøgelsen er gratis og uforpligtende – du betaler først efter behandlingen.</p>
        </div>
      </article>

      <aside class="clinic-map" aria-label="Kort over DK Skønhedsklinik Vejle">
        <iframe :src="mapEmbedSrc" width="100%" height="100%" style="border:0;" allowfullscreen=""
          loading="lazy"></iframe>
      </aside>
    </div>

    <section class="clinic-about">
      <div class="about-content">
        <div class="about-text">
          <p class="sec__eyebrow">Klinikken</p>
          <h2>Om klinikken i Vejle</h2>
          <p>
            Vores <strong>Vejle-afdeling</strong> er tænkt som en rolig, diskret "by appointment"-klinik med nordisk, lys indretning. Her
            møder du vores læge til kosmetiske behandlinger i et professionelt miljø med tryghed, faglighed og komfort i centrum – fra første samtale
            til opfølgning.

            Nemmelig ankomst og overskuelig modtagelse uden store venteområder. Tidsbookede besøg sikrer ro og privatliv.
            <br><br>
            Kom gerne et par minutter før i myldretiden – så er der ro til samtalen.
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
        alt="Parkeringsbåsene foran indgangen på Søndergade 50 i Vejle"
        ratio="12 / 5" />

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
      <div class="split split--medie-foerst split--portraet">
        <div class="split__tekst">
          <p class="sec__eyebrow">Klinikkens læge</p>
          <h2 id="laege-vejle">Hvem møder du?</h2>
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

    <section class="sec" aria-labelledby="opland-vejle">
      <div class="sec__head">
        <p class="sec__eyebrow">Opland</p>
        <h2 id="opland-vejle">Vi har også kunder fra oplandet</h2>
        <p class="sec__lead">Vejle-klinikken ligger centralt i Trekantområdet, og en stor del af vores kunder kører hertil fra Kolding, Fredericia, Horsens, Give og Jelling. Fra dem alle er der under en halv times kørsel, og søndag er der hverken myldretid eller kø.</p>
      </div>
      <OplandKort by="Vejle" :punkter="oplandsbyer" :titel-id="'opland-kort-vejle'" :maerkat-retning="250" />
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
  'areaServed': ['Vejle', 'Trekantområdet', 'Kolding', 'Fredericia', 'Horsens', 'Give', 'Jelling'],
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
// Koerselsafstande ad vej fra Vejle, afrundet. Retning er grader fra nord.
// Afstanden fra midten i diagrammet foelger koeretiden, ikke kilometerne.
const oplandsbyer = [
  { navn: 'Horsens',    km: 27, minutter: 25, retning: 10  },
  { navn: 'Jelling',    km: 12, minutter: 15, retning: 325 },
  { navn: 'Give',       km: 30, minutter: 25, retning: 275 },
  { navn: 'Fredericia', km: 24, minutter: 20, retning: 140 },
  { navn: 'Kolding',    km: 27, minutter: 25, retning: 205 }
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
  line-height: 1.6;
}

.about-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  justify-content: space-between;
}

.about-text {
  width: 55%;
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

@media only screen and (max-width: 1000px) {
  .clinic-hero,
  .clinic-grid,
  .clinic-about { padding: 32px 0 !important; }
}

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
.container.clinic-view { padding-top: 56px !important; }

/* "Om klinikken": teksten sluttede langt foer videoen - blokken saa skaev ud. */
.clinic-about .about-content {
  align-items: center;
  gap: 56px;
}



.clinic-about .about-video { width: auto; flex: 0 1 38%; max-width: 380px; }

/* Parkeringsbilledet fyldte naesten 750 px i hoejden og overdoev afsnittet.
   Nu et baand, der viser baasene foran doeren - ikke facaden én gang til. */
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
.clinic-view .clinic-grid,
.clinic-view .clinic-about {
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
</style>