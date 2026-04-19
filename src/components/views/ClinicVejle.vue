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
          <p><b>Åbningstider:</b> Lørdag-Søndag 11:00–18:00 (eller efter aftale)</p>
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
            møder du vores læge i et professionelt miljø med tryghed, faglighed og komfort i centrum – fra første samtale
            til opfølgning.

            Nemmelig ankomst og overskuelig modtagelse uden store venteområder. Tidsbookede besøg sikrer ro og privatliv.
            <br><br>
            <strong>Parkering</strong>
            <br>
            Flere parkeringsmuligheder i nærområdet (kort gåafstand). Kom gerne et par minutter før i myldretiden.
          </p>
        </div>
        <div class="about-video">
          <video autoplay loop muted playsinline width="100%" height="auto" v-if="videoReel">
            <source :src="videoReel" type="video/mp4">
            Din browser understøtter ikke video-element.
          </video>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import imgVejle from '@/assets/klinik/vejle.webp'

const videoReel = 'https://dsklinik.dk/assets/video/Instagram_Reel_4.mp4'

// Schema.org struktureret data for lokalt firma
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dsklinik.dk/klinik/vejle/#localbusiness',
  'name': 'DK Skønhedsklinik – Vejle',
  'image': 'https://dsklinik.dk/og/home.webp',
  'description': 'Skønhedsklinik i Vejle med lægebehandlet hudpleje, filler, skinbooster, mesotherapy og microneedling.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Søndergade 50',
    'addressLocality': 'Vejle',
    'postalCode': '7100',
    'addressCountry': 'DK'
  },
  'telephone': '+45 53 50 37 50',
  'url': 'https://dsklinik.dk/klinik/vejle/',
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Saturday', 'Sunday'],
    'opens': '11:00',
    'closes': '18:00',
    'description': 'Efter aftale til andre tidspunkter'
  },
  'priceRange': '$$',
  'areaServed': ['Vejle', 'Trekantområdet'],
  'sameAs': [
    'https://www.facebook.com/profile.php?id=100054595142567',
    'https://www.instagram.com/dk_skonhedsklinik/'
  ]
}

useHead({
  title: 'Skønhedsklinik Vejle | DK Skønhedsklinik | Filler & Hudbehandling',
  meta: [
    { name: 'description', content: 'Skønhedsklinik i Vejle med lægebehandlet hudpleje, filler, skinbooster, mesotherapy og microneedling. Book gratis forundersøgelse hos DK Skønhedsklinik.' },
    { name: 'keywords', content: 'skønhedsklinik vejle, filler vejle, hudpleje vejle, skinbooster vejle, mesotherapy vejle, microneedling vejle' },
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
      children: JSON.stringify(schemaData)
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