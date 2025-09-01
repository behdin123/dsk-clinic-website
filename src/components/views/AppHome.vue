<template>
  <div class="home">

    <div id="image-dark-version-home" :class="['bg-img', 'img', { 'dark-mode-cover-home': dark }]">

      <picture class="hero-picture" aria-hidden="true">
        <!-- نسخه موبایل -->
        <source srcset="@/assets/BannerFrontPageMobile2.webp" type="image/webp" media="(max-width: 940px)" />
        <!-- نسخه دسکتاپ -->
        <img src="@/assets/BannerFrontPage2.webp" alt="" class="hero-img" width="1920" height="1080"
          fetchpriority="high" />
      </picture>

      <h1 data-aos="fade-right" data-aos-duration="3000">DK Skønhedsklinik</h1>
      <h2 data-aos="fade-right" data-aos-duration="3000">Fremkald din huds glød og friskhed</h2>
      <p class="mobile_hide" data-aos="fade-right" data-aos-duration="3000">
        Velkommen til DK Skønhedsklinik i Vejle og Esbjerg – din ekspert i Botox og fillerbehandlinger af højeste
        kvalitet.
        Vi fokuserer på at skabe naturlige og harmoniske resultater, der fremhæver dine unikke ansigtstræk.
        Vores behandlinger er skræddersyet til dine behov og designet til at give dig et mere frisk udseende.
      </p>

      <p class="mobile_hide">
        Book en gratis og uforpligtende konsultation, hvor vi sammen finder den bedste behandling til dine ønsker og
        behov
      </p>

      <div class="mobile-show">
        <p data-aos="fade-right" data-aos-duration="3000">
          💉 Ekspert i Botox og filler
        </p>
        <p data-aos="fade-right" data-aos-duration="3000">
          💙 Naturlige og harmoniske resultater
        </p>
        <p data-aos="fade-right" data-aos-duration="3000">
          ✔️ Udføres af erfaren læge
        </p>
      </div>

      <div class="booking-button">
        <AppBooking />
      </div>




    </div>

    <div class="primary-color">
      <h2 class="section-title">Vores behandlinger</h2>

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
              <p>Giv din hud et fugtboost indefra, så den ser frisk, og ungdommelig ud. Perfekt til tør eller træt hud,
                der har brug for ekstra næring og vitalitet</p>
            </div>
          </div>
        </router-link>

        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'prp' } }">
          <div class="card prp">
            <div class="card-content">
              <h3>PRP</h3>
              <p>Genopfrisk din hud med kroppens egne ressourcer. PRP forbedrer hudens elasticitet, reducerer rynker og
                stimulerer hårvækst</p>
            </div>
          </div>
        </router-link>

        <router-link :to="{ name: 'behandling-dynamic', params: { type: 'mesotherapy' } }">
          <div class="card mesotherapy">
            <div class="card-content">
              <h3>Mesotherapy</h3>
              <p>Få en dybdegående næring til din hud med en cocktail af vitaminer og antioxidanter. Perfekt til glød og
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


    <div class="contain first-mode padding">
      <div class="informations h1">

        <div class="Arash_Bagheri_Portrait">
          <img src="../../assets/Arash_Bagheri2.webp" alt="Arash Bagheri – erfaren læge hos DK Skønhedsklinik">
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="info" id="Info-div">
          <div id="FirstIcons" class="icons"><img src="../../assets/icons/quote.webp" width="50px" height="auto"
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
        </div>

      </div>
    </div>

    <div class="container Multimediedesigner VIKING Undersøgelse">

      <div class="txt h1 h2 first-txt">
        <h3 data-aos="fade-up" data-aos-duration="1000">DK skønhedsklinik</h3>
        <h2 data-aos="fade-up" data-aos-duration="1000">Gratis online forundersørgelse</h2>

        <p data-aos="fade-up" data-aos-duration="1000">
          Hos DK Skønhedsklinik tilbyder vi en gratis online konsultation, hvor du sammen med vores specialuddannede
          behandler kan gennemgå dine ønsker og muligheder for behandlingen. Vi sørger for, at du føler dig tryg ved at
          tale om eventuelle gener, risici og mulige komplikationer. Under konsultationen tager vi også hensyn til
          alle eventuelle behandling påvirkende faktorer.
        </p>

        <p>
          Konsultationen udføres af vores erfarne behandler, der står klar til at besvare alle dine spørgsmål.
          Behandlingen kan først finde sted minimum 2 dage efter konsultationen.
        </p>
      </div>

      <div class="VIKING-image">
        <img data-aos="fade-right" data-aos-duration="1000" data-aos-offset="400" class="first-img"
          src="../../assets/OmOsBannerW.webp" width="100%" height="auto"
          alt="Konsultation hos DK Skønhedsklinik i Esbjerg og Vejle" loading="lazy" decoding="async">
      </div>
    </div>



    <div class="sliderContainer">
      <h2>Sociale medier – Seneste opslag</h2>
      <div class="slider">
        <div class="slides">

          <!-- Slide 1 -->
          <div class="slide">
            <div class="slide-content">
              <img src="../../assets/Instagram/Mesotherapy_Arash.webp"
                alt="Mesotherapy før-efter glød og fugt – DK Skønhedsklinik" loading="lazy" decoding="async">
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="slide">
            <div class="slide-content">
              <img src="../../assets/Instagram/Filler1.webp" alt="Filler til læber og kinder – naturlige resultater"
                loading="lazy" decoding="async">
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="slide">
            <div class="slide-content">
              <img src="../../assets/Instagram/Skinbooster_Arash.webp" alt="Skinbooster til dyb fugt – sund hud"
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
      <div class="VIKING-image">
        <img data-aos="fade-right" data-aos-duration="1000" data-aos-offset="400" class="first-img"
          src="../../assets/Clinic_consultation_1.webp " width="100%" height="auto"
          alt="Klinik-konsultation med erfaren læge" loading="lazy" decoding="async">
      </div>
      <div class="txt h1 h2 first-txt margin-left">
        <h3 data-aos="fade-up" data-aos-duration="1000">Om vores klinikker</h3>
        <h2 data-aos="fade-up" data-aos-duration="1000">Ekspertise og kvalitet i hver behandling</h2>

        <p data-aos="fade-up" data-aos-duration="1000">
          Vores læge, som har mere end 20 års erfaring inden for skønhedsbehandlinger,
          vil sørge for, at du får en behandling, der er skræddersyet til dig. Vi specialiserer os
          i æstetiske løsninger, der tilpasses dine individuelle behov.
        </p>


        <p data-aos="fade-up" data-aos-duration="1000">
          I vores klinik kombinerer vi den nyeste teknologi med høj faglig ekspertise for at sikre
          naturlige og harmoniske resultater. Vi prioriterer sikkerhed, kvalitet og kundetilfredshed,
          så du kan føle dig tryg gennem hele forløbet.
        </p>

        <p>
          Book en gratis og uforpligtende konsultation, og lad os hjælpe dig med at
          fremhæve din naturlige skønhed.
        </p>

      </div>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head'
import AppBooking from '../../components/AppBooking.vue'; // Importer komponenten

useHead({
  title: 'DK Skønhedsklinik | Botox & Filler i Esbjerg og Vejle (lægebehandlet)',
  meta: [
    { name: 'description', content: 'Botox, filler, PRP, Skinbooster og mere – udført af erfaren læge. Naturlige resultater og tryghed. Book gratis forundersøgelse i Esbjerg og Vejle.' },
    { property: 'og:title', content: 'DK Skønhedsklinik – lægebehandlede skønhedsbehandlinger' },
    { property: 'og:description', content: 'Naturlige og harmoniske resultater. Book gratis forundersøgelse i dag.' },
    { property: 'og:type', content: 'website' },
    // اگر کاور عمومی داری، آدرس مطلق بده:
    // { property: 'og:image', content: 'https://dk-skonhedsklinik.dk/og-cover.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://dsklinik.dk/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      // اسکیما Local/MedicalBusiness مخصوص Home
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "DK Skønhedsklinik",
        "url": "https://dsklinik.dk/",
        "telephone": "+45 53 50 37 50",
        "email": "eskonhed@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Havnegade 6",
          "addressLocality": "Esbjerg",
          "postalCode": "6700",
          "addressCountry": "DK"
        },
        "areaServed": ["Esbjerg","Vejle","Danmark"],
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens":"10:00", "closes":"18:00" }
        ],
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100054595142567",
          "https://www.instagram.com/dk_skonhedsklinik/"
        ]
      })
    }
  ]
})

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







const showMoreText = ref(false);
const showMoreTextSecond = ref(false); // Ny tilstand for den anden tekst
const isScreenLarge = ref(window.innerWidth >= 1800);

const handleResize = () => {
  isScreenLarge.value = window.innerWidth >= 1800;
  if (isScreenLarge.value) {
    showMoreText.value = true;
    showMoreTextSecond.value = true; // Sikre begge tekster vises på store skærme
  } else {
    showMoreText.value = false;
    showMoreTextSecond.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Initial check
});

defineProps({
  dark: {},
});


</script>



<style lang="scss">
@import '../css/style.scss';

.img h2 {
  padding-left: 8% !important;
}

.booking-button {
  position: relative;
  z-index: 4;
  border-radius: 5px !important;
  width: 210px !important;
  padding-left: 8% !important;
}

.mobile-show {
  display: none !important;
}

.sliderContainer {
  background: #153655 !important;
  padding: 50px 12%;

  h2 {
    color: #fff;
    margin-bottom: 30px !important;
    font-size: 30px !important;
    text-align: center;
    display: flex;
    justify-content: center;
  }
}

.slider {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
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
  border-radius: 10px;
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
  min-width: 355px !important;
  padding: 20px 0 0 0;
  display: flex;
  margin-right: 5%;

  img {
    width: 100%;
    height: auto;
  }
}

.secondary-color {
  background: var(--secondary-color) !important;
  ;
}






/* تصویر هیرو به‌صورت المان واقعی */
.hero-picture { 
  position: absolute;
  inset: 0;           /* top:0 right:0 bottom:0 left:0 */
  z-index: 0;         /* پشت همه */
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;     /* CLS کمتر */
}

/* مطمئن شو کانتینر زمینه نسبی دارد */
.bg-img {
  position: relative; /* اگر نبود، اضافه کن */
}

/* Overlay قبلی بمانَد ولی z-index منطقی باشد */
.bg-img::before {
  z-index: 1;         /* بالای تصویر، زیر متن */
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
    font-size: 55px !important;
    position: relative;
  }

  h2 {
    font-size: 30px !important;
    font-weight: bold !important;
  }

  p {
    font-size: 22px !important;
    width: 33%;
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
    background-color: rgba(0, 0, 0, 0.1);
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
    background-position: right;
  }
}

#Info-div {
  h2 {
    color: #fff;
    font-size: 18px !important;
    margin: 10px 0 !important;
    font-weight: bold;
    padding-left: 0 !important;
  }

  p {
    color: #fff !important;
    font-size: 22px;
    text-align: center;
    width: 25vw;
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
  width: 65vw;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  .first-img {
    min-height: 100%;
    height: 100%;
    max-width: none;
    width: auto !important;
    position: relative;
  }
}

.primary-color {
  background: var(--primary-color) !important;
}

.Multimediedesigner {
  max-height: 700px;

  .txt {
    width: 55%;
    margin-right: 5%;
    padding-left: 10%;
    color: var(--quaternary-color) !important;
  }
}

.margin-left {
  margin-left: 5%;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 10%;
}

@media only screen and (max-width: 2300px) {
  .VIKING-image {
    .first-img {
      left: calc(-5px - 5vw);
    }
  }
}

@media only screen and (max-width: 1780px) {
  .VIKING-image {
    .first-img {
      left: -110px;
    }
  }

  .bg-img {
    p {
      font-size: 20px !important;
      width: 39%;
      line-height: 1.3;
      position: relative;
    }
  }

  .img {
    h1 {
      padding: 14vw 0 0 8% !important;
    }

    h2 {
      padding-left: 8% !important;
    }

  }


}

@media only screen and (max-width: 1680px) {
  .VIKING-image {
    .first-img {
      left: -150px;
    }
  }
}

@media only screen and (max-width: 1530px) {
  .VIKING-image {
    .first-img {
      left: -200px;
    }
  }
}


@media only screen and (max-width: 1640px) {
  .Undersøgelse {
    padding: 70px 5% 40px 8% !important;
  }

  .OmKlinik {
    padding: 70px 8% 40px 5% !important;
  }

  .Arash_Bagheri_Portrait {
    max-width: 400px;
    min-width: 305px !important;
  }
}


@media only screen and (min-width: 1850px) {
  .container {
    h2 {
      font-size: 55px !important;
    }
  }

}

@media only screen and (min-width: 1750px) {
  .card {
    width: 450px !important;
    height: 520px !important;
  }
}

/* 4K Monitor */
@media only screen and (min-width: 1640px) {
  .img {
    h1 {
      font-size: 70px !important;
    }

    h3 {
      font-size: 30px !important;
    }
  }

  .bg-img p {
    font-size: 24px !important;
    width: 30% !important;
    line-height: 1.4;
    position: relative;
  }



  .container {
    h1 {
      font-size: 45px;
    }
  }

  .container_carts {
    padding: 40px 10% 70px 10% !important;
  }
}

.dark-mode-cover-home {
  h1 {
    z-index: 4;
  }

  h2 {
    z-index: 4;
  }

  p {
    z-index: 4;
  }
}

.dark-mode-cover-home {
  &::before {
    background-color: rgba(0, 0, 0, 0.3) !important;
  }

}

.img {
  h1 {
    padding: 17vw 0 0 8%;
    margin: 0;
    font-size: 55px;
    text-align: left;
    color: var(--titleBanner-color) !important;
  }

  h2 {
    margin-top: 0 !important;
    font-size: 45px;
    color: var(--titleBanner-color) !important;
  }

  p {
    color: var(--titleBanner-color) !important;
    font-size: 22px;
    padding: 5px 0 0 8%;
  }
}

.secondary-color {
  background: var(--secondary-color) !important;
}

.Multimediedesigner {
  position: relative;
  background: var(--primary-color) !important;
  padding-top: 110px;
  padding: 100px 8% 70px 8%;


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

    p {
      font-size: 18px;
    }
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

  .btn {
    margin-top: 50px;
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

  .btn {
    margin-bottom: 80px;
  }

  .informations {
    display: flex;
    justify-content: center;
    margin: 0 15%;

    .info {
      margin: 80px 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;


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

  .btn {
    margin-top: 177px;
  }

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

@media only screen and (max-width: 1800px) {
  .Multimediedesigner {
    .txt {
      padding-left: 0%
    }
  }

  .margin-left {
    padding-right: 0% !important;
  }
}

@media only screen and (max-width: 1380px) {
  .bg-img {
    h1 {
      padding-top: 19vw;
      font-size: 45px !important;
    }

    p {
      font-size: 20px !important;
    }
  }

  .section-title {
    padding: 40px 0 0 0 !important;
  }

  h2{
      margin: 0 !important
  }

  .info {
    margin: 80px 5vw !important;
  }

  .container {
    flex-direction: column;
  }

  .Multimediedesigner .txt {
    width: 50vw;
    font-size: 18px;
  }

  .VIKING-image {
    position: relative;
    overflow: hidden;
    width: 85vw !important;
    max-height: 700px;
    height: 700px;
  }

  .VIKING-image img {
    min-height: 100%;
    height: 100% !important;
    max-height: 100% !important;
    max-width: none;
    width: auto !important;
    position: relative;
  }

  .margin-left {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .OmKlinik {
    flex-direction: column-reverse !important;
  }

  .Undersøgelse,
  .OmKlinik {
    padding: 70px 10% 40px 12% !important;
  }

  .Multimediedesigner {
    max-height: unset;
  }

  /* .VIKING-image{
        overflow: unset;
        width: 70vw !important;
        .first-img{
            left: 0 !important;
            width: 100% !important;
            height: auto !important;
            border-radius: 10px;
        }
    } */

}

@media only screen and (max-width: 1200px) {
  .bg-img {
    h1 {
      padding-top: 22vw;
    }
  }

  .img h1 {
    padding: 20vw 0 0 8% !important;
  }

}

@media only screen and (max-width: 1120px) {
  .bg-img {
    h1 {
      font-size: 35px !important;
    }

    h2 {
      padding-left: 5% !important;
      font-size: 18px !important;
    }

    p {
      padding-left: 5%;
      font-size: 18px !important;
    }
  }

  .img {
    h1 {
      padding: 20vw 0 0 5% !important;
    }

    .booking-button {
      margin-left: 5% !important;
      padding-left: 0 !important;
    }
  }


  .Multimediedesigner {
    .txt {
      margin: 0 !important;
      width: auto !important;
    }
  }

  .contain .informations {
    flex-direction: column-reverse !important;
    align-items: center;
  }

  .VIKING-image {
    width: 90vw;
  }

  #Info-div {
    padding: 40px 8% 10px 8%;
    margin: 0 !important;

    p {
      width: auto;
    }
  }

  .contain .informations .info {
    width: 50vw;
    margin: 30px 5vw !important;
  }

  .btn {
    margin-top: 20px !important;
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

  .Multimediedesigner {
    padding: 70px 8% 50px 8%;
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

  .Undersøgelse,
  .OmKlinik {
    padding: 40px 10% 40px 12% !important;
  }

}






.h1 {

  h1,
  h3 {
    padding-left: 0 !important;
  }
}

@media only screen and (max-width: 1020px) {
  h1 {
    padding-left: 5% !important;
  }

  h2 {
    padding-left: 5% !important;
  }

  h3 {
    padding-left: 5% !important;
  }

  .VIKING-image {
    width: 78vw !important;
  }
}


@media only screen and (max-width: 940px) {
  .bg-img {
    h1 {
      padding-top: 42vw;
    }
  }

  .bg-img p {
    width: 50%;
  }

  .image {
    width: 100% !important;
  }

  .info[data-v-48676f02] {
    margin: 40px 5vw 0 5vw !important;
  }

  .om-mig-txt {
    width: auto !important;
  }

  .bg-img::before {
    background: linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
  }


}

@media only screen and (max-width: 840px) {

  .bg-img {
    padding-left: 5% !important;

    h1 {
      padding-top: 41vw;
      padding-left: 0 !important;
    }

    h2 {
      padding-left: 0 !important;
    }

    p {
      width: 65%;
      padding-left: 0 !important;
    }
  }

  .img h1 {
    padding: 30vw 0 0 0 !important;
  }

  .mobile_hide {
    display: none !important;
  }

  .mobile-show {
    display: block !important;
    margin-top: 120px;
  }

  .img .booking-button {
    margin-left: 0 !important;
  }

}

@media only screen and (max-width: 800px) {
  .bg-img {
    h1 {
      padding-top: 42vw;
    }
  }

  .bg-img p {
    width: 80%;
  }
}

@media only screen and (max-width: 780px) {
  .img h1 {
    padding: 25vw 0 0 0 !important;
  }

  #facts-btn {
    justify-content: center !important;
  }

  .image {
    margin: 20px 0 0 0 !important;
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



}

@media only screen and (max-width: 660px) {
  .bg-img {
    h1 {
      padding-top: 43vw;
    }
  }

  .contain .informations .info {
    width: 76vw;
  }

  .VIKING {
    padding: 40px 5% 60px 5% !important;
  }

  .VIKING-image {
    width: 90vw !important;

    .first-img {
      right: 215px !important;
      left: unset !important;
    }
  }

  #Info-div {
    padding: 40px 8% 10px 8%;
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

  .Multimediedesigner {
    padding: 100px 5% 20px 5%;
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

  .website .btn {
    margin-top: 20px !important;
  }

  .website {
    padding: 110px 6% 0 6% !important;
  }

  .concept-txt-box {
    flex-direction: column !important;
  }

  .btn-box {
    justify-content: flex-start;
  }

  .informations {
    flex-direction: column;

    .info {
      margin: 20px auto !important;
    }
  }
}

@media only screen and (max-width: 620px) {
  #app .bg-img {
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
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
  }

  .img h1 {
    padding: 25vw 0 0 0 !important;
  }

  .mobile-show {
    margin-top: 320px;
  }
}

@media only screen and (max-width: 500px) {

  .bg-img p {
    width: 100% !important;
  }

  .img h1 {
    padding: 30vw 0 0 0 !important;
  }

  h1 {
    padding: 40vw 0 0 0 !important;
  }

  h2 {
    padding-left: 0 !important;
  }

  h3 {
    padding-left: 0 !important;
  }

  p {
    padding-left: 0 !important;
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


  .min-concept .btn {
    margin-top: 20px !important;
  }

  .ux {
    align-items: flex-start !important;
  }

  .bg-img h1 {
    padding-top: 30vw !important;
    font-size: 33px !important;
  }

  .bg-img h2 {
    width: 55vw;
    font-size: 22px !important;
    margin-top: 15px !important;
    line-height: 40px;
  }

  .default-bg::after {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    height: 80px;
  }

  .mobile-show {
    margin-top: 230px;
  }
}

@media only screen and (max-width: 390px) {
  .bg-img {
    h1 {
      padding: 34vw 0 0 0 !important;
    }

    h2 {
      width: 68%;
    }
  }

  .mobile-show {
    margin-top: 250px !important;

    p {
      width: 90% !important;
    }
  }

  .txt {
    width: 90vw !important;
  }

  .txt-two {
    width: 90vw;
  }
}

@media only screen and (max-width: 1960px) {
  .container_carts {
    padding: 40px 7% 70px 7% !important;
  }
}

.container_carts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin: 0 auto;

  a {
    text-decoration: none;
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
    width: 70vw;
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

@media only screen and (max-width: 450px) {

  .prev,
  .next {
    display: none !important;
  }
}

.card {
  position: relative;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow: hidden;
  color: white;
  text-align: center;
  width: 300px;
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

.card.prp::before {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%), url('@/assets/Carts/PRP.webp');
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
  padding: 50px 0 0 0;
  margin-top: 0!important;
  color: var(--titleBanner-color) !important;
}
</style>
