<template>
  <section class="container OmKlinik clinic-view" aria-labelledby="clinic-title">
    <header class="clinic-hero" aria-hidden="true">
      <div class="hero-inner">
        <h1 id="clinic-title">DK Skønhedsklinik – Esbjerg</h1>
        <p class="lead">Adresse, åbningstider, rute og praktisk info for vores afdeling i Esbjerg.</p>
      </div>
      <figure class="hero-figure">
        <img :src="imgEsbjerg" alt="DK Skønhedsklinik Esbjerg" loading="lazy" />
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
          <p><b>Åbningstider:</b> Mandag–Fredag 17:00–20:00 (eller efter aftale)</p>
          <p><b>Telefon:</b> <a href="tel:+45535037750" itemprop="telephone">+45 53 50 37 50</a></p>
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
            komfort. Behandlingerne
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
          <video autoplay loop muted playsinline preload="auto" width="100%" height="auto" v-if="videoReel">
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
import imgEsbjerg from '@/assets/klinik/esbjerg.webp'

const videoReel = 'https://dsklinik.dk/assets/video/Instagram_Reel_4.mp4'

// Schema.org struktureret data for lokalt firma
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'DK Skønhedsklinik – Esbjerg',
  'image': 'https://dsklinik.dk/img/esbjerg.webp',
  'description': 'Moderne skønhedsklinik i Esbjerg med lægebehandlet hudpleje, filler, botox og anti-aging behandlinger',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Havnegade 6',
    'addressLocality': 'Esbjerg',
    'postalCode': '6700',
    'addressCountry': 'DK'
  },
  'telephone': '+45 53 50 37 50',
  'url': 'https://dsklinik.dk/klinik/esbjerg/',
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'opens': '17:00',
    'closes': '20:00',
    'description': 'Efter aftale til andre tidspunkter'
  },
  'priceRange': '$$',
  'sameAs': 'https://www.facebook.com/profile.php?id=100054595142567'
}

useHead({
  title: 'Klinik i Esbjerg – DK Skønhedsklinik | Hudpleje & Lægebehandlinger',
  meta: [
    { name: 'description', content: 'Besøg DK Skønhedsklinik i Esbjerg. Moderne hudklinik med lægebehandlet hudpleje, filler, rynkebehandling og anti-aging. Åbent hverdage 17-20. Kontakt: +45 53 50 37 50' },
    { name: 'keywords', content: 'skønhedsklinik Esbjerg, hudpleje Esbjerg, filler Esbjerg, anti-aging Esbjerg, lægebehandlet hudpleje' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'DK Skønhedsklinik' },
    { property: 'og:title', content: 'Klinik i Esbjerg – DK Skønhedsklinik' },
    { property: 'og:description', content: 'Moderne skønhedsklinik i Esbjerg med lægebehandlet hudpleje, filler og rynkebehandling. Book din gratis forundersøgelse i dag.' },
    { property: 'og:type', content: 'business.business' },
    { property: 'og:url', content: 'https://dsklinik.dk/klinik/esbjerg/' },
    { property: 'og:image', content: 'https://dsklinik.dk/img/esbjerg.webp' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:locale', content: 'da_DK' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Klinik i Esbjerg – DK Skønhedsklinik' },
    { name: 'twitter:description', content: 'Lægebehandlet hudpleje og anti-aging i Esbjerg. Book gratis forundersøgelse.' },
    { name: 'geo:region', content: 'DK-86' },
    { name: 'geo:placename', content: 'Esbjerg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dsklinik.dk/klinik/esbjerg/' },
    { rel: 'alternate', hreflang: 'da-DK', href: 'https://dsklinik.dk/klinik/esbjerg/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schemaData)
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
