<template>
  <div id="navDiv">
    <div class="nav-keeper" ref="keeperEl" :style="{ height: navHeight + 'px' }">
      <div id="nav" ref="navEl" :class="[
        routePageClass,
        'navbar',
        { 'default-bg': isTransparent, transparent: !isTransparent, sticky: isSticky, 'is-visible': isStickyVisible },
        { 'hide-nav': modalOpen }
      ]">
        <AppNavigation :is-sticky="isSticky" :page-class="routePageClass" />
      </div>
    </div>

    <!-- Kun til at trigge sticky on/off – ingen styling -->
    <div ref="ioSentinel" class="io-sentinel"></div>

    <!-- Her vises indholdet af de forskellige ruter -->
    <div>
      <router-view :showModal="showModal" />
      <button class="scroll-to-top" :class="{ show: isButtonVisible }" @click="scrollToTop">
        <img src="./assets/icons/arrowup.webp" alt="">
      </button>
    </div>

    <!-- خود کامپوننت رزرو -->
    <AppBooking :show-button="false" />

    <div :class="[{ 'hide-nav': modalOpen }]">
      <AppFooter />
    </div>

  </div>
</template>


<script setup>
import AppNavigation from '@/components/AppNavigation.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppBooking from '@/components/AppBooking.vue'
import { useHead } from '@unhead/vue'
import { ref, computed, watch, onMounted, onUnmounted, nextTick, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

// Global Organization schema (tilstede på alle sider)
const globalOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://dsklinik.dk/#organization',
  'name': 'DK Skønhedsklinik',
  'url': 'https://dsklinik.dk/',
  'logo': 'https://dsklinik.dk/logo.webp',
  'description': 'Moderne skønhedsklinik med lægebehandlet hudpleje, filler, rynkebehandling og anti-aging behandlinger i Esbjerg og Vejle',
  'sameAs': [
    'https://www.facebook.com/profile.php?id=100054595142567',
    'https://www.instagram.com/dk_skonhedsklinik/'
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'Customer Service',
    'telephone': '+45 53 50 37 50',
    'email': 'dr_arash_bagheri@yahoo.com'
  },
  'address': [
    {
      '@type': 'PostalAddress',
      'addressLocality': 'Esbjerg',
      'postalCode': '6700',
      'streetAddress': 'Havnegade 6',
      'addressCountry': 'DK'
    },
    {
      '@type': 'PostalAddress',
      'addressLocality': 'Vejle',
      'postalCode': '7100',
      'streetAddress': 'Søndergade 50',
      'addressCountry': 'DK'
    }
  ]
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(globalOrgSchema)
    }
  ]
})

const isSticky = ref(false)
const isTransparent = ref(true)
const modalOpen = ref(false)

const route = useRoute()
const routePageClass = computed(() => String(route.meta.pageClass || ''))

// (optional) also add/remove the class on <body> so truly global CSS can hook it
watch(routePageClass, (cls, prev) => {
  if (prev) document.body.classList.remove(prev)
  if (cls) document.body.classList.add(cls)
}, { immediate: true })

/* ---- Sticky sentinel + spacer måling ---- */
const navEl = ref(null)          // selve nav'en (måles)
const keeperEl = ref(null)
const navHeight = ref(0)         // nuværende nav-højde til spaceren

const measureNav = () => {
  if (!navEl.value) return
  // mere præcis end offsetHeight, og reagerer fint med padding-ændringer
  navHeight.value = navEl.value.getBoundingClientRect().height || 0
}


let ro
let rafId = 0
const OFFSET = 50        // ønsket ekstra offset
const ON_THRESHOLD = -OFFSET - 4   // slå TIL 50px efter keeper-bund passerer top
const OFF_THRESHOLD = OFFSET + 8   // slap AF igen med buffer på vej op

const isStickyVisible = ref(false)  // kun til slide-in animation

const stickyUpdate = () => {
  rafId = 0
  if (!keeperEl.value) return
  const rect = keeperEl.value.getBoundingClientRect()
  const bottom = rect.bottom
  // hysterese:
  if (!isSticky.value && bottom <= ON_THRESHOLD) {
    isSticky.value = true
    // mål højde efter class-toggle og trig "slide-in"
    nextTick(() => {
      measureNav()
      requestAnimationFrame(() => { isStickyVisible.value = true })
    })
  } else if (isSticky.value && bottom > OFF_THRESHOLD) {
    // skjul animation, mål og slå sticky fra
    isStickyVisible.value = false
    nextTick(measureNav)
    isSticky.value = false
  }
}

const onScroll = () => {
  // throttle med requestAnimationFrame
  if (rafId) return
  rafId = requestAnimationFrame(stickyUpdate)
}

onMounted(() => {
  // initial measure
  measureNav()
  const resize = () => measureNav()
  onScroll()
  window.addEventListener('resize', resize)

  // ✅ Observe the real element (now it exists)
  let ro
  if (window.ResizeObserver) {
    ro = new ResizeObserver(() => measureNav())
    ro.observe(navEl.value)
  }


  window.addEventListener('scroll', onScroll, { passive: true })

  document.fonts?.ready?.then(() => nextTick(() => {
    measureNav()
    stickyUpdate()
  }))

    + navEl.value && (navEl.value.__ro = ro)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
  try { navEl.value?.__ro && navEl.value.__ro.disconnect() } catch { }
})






// لیسنر رویداد سفارشی‌ای که از AppBooking می‌فرستیم
const handleToggleNav = (e) => {
  modalOpen.value = !!e.detail
  // قفل/آزاد کردن اسکرول صفحه
  document.body.style.overflow = modalOpen.value ? 'hidden' : ''
}

onMounted(() => {
  window.addEventListener('toggle-nav', handleToggleNav)
})

onBeforeUnmount(() => {
  window.removeEventListener('toggle-nav', handleToggleNav)
})


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const isButtonVisible = ref(false);

const handleScrollingTop = () => {
  isButtonVisible.value = window.scrollY > 300; // Vises kun når man har scrollet 300px ned
};

onMounted(() => {
  window.addEventListener('scroll', handleScrollingTop);
});

</script>





<style lang="scss">
/* Make nav look different on article detail pages */
.page-viden-article #nav {
  position: relative;
  background: #153655;
  color: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, .06);
  will-change: transform;
  transform: translate3d(0, 0, 0);

  .links-desktop a {
    color: #fff;
  }

  .dropdown-toggle {
    color: #fff;
  }
}





:root {
  --primary-color: #ffffff;
  --secondary-color: #EAEAEA;
  --tertiary-color: #000000;
  --quaternary-color: #153655;
  --quaternary-hover-color: #2649ba;
  --primary-hover-color: #FED201;
  --background-color: #f0f0f0;
  --white-black-color: #000000;

  --titleBanner-color: #153655;

  --title-color: #000000;
  --background-color: #24353F;

  --column-backgroundColor: #EAEAEA;
  --card-backgroundColor: #f9f9f9;
}


#navDiv {
  position: relative;
}


.scroll-to-top {
  position: fixed;
  bottom: 35px;
  right: 45px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #24353F;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 1000;
  border: 0;

  img {
    width: 100%;
    min-height: 50px;
    min-width: 50px;
  }
}

.scroll-to-top:hover {
  background-color: #24353f7f;
}

.scroll-to-top:active {
  transform: scale(0.95);
}

/* Tilføj synlighedsfunktionalitet */
.scroll-to-top {
  opacity: 0;
  visibility: hidden;
}

.scroll-to-top.show {
  opacity: 1;
  visibility: visible;
}




body {
  margin: 0;
  background: #F4F4F4;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1 {
    font-weight: 700;
    margin: 0;
    position: relative;
    pointer-events: none;
  }

  h2 {
    position: relative;
    pointer-events: none;
  }

  h3 {
    font-weight: 700;
    position: relative;
    pointer-events: none;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
  }

  .bg-img {
    height: 65vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

}



#nav {
  z-index: 5;
  position: absolute;
  width: 100%;
  transition: background-color 0.5s ease;
  background: #153655;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding 220ms ease, background-color 220ms ease, box-shadow 220ms ease;

  /* Fading transition */
  a {
    font-weight: bold;
    font-size: 16px;
  }
}


.default-bg::after {
  content: '';
  position: absolute;
  top: 100%;
  /* Placerer det lige under navigationen */
  left: 0;
  width: 100%;
  height: 150px;
  /* Juster efter behov */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  /* Fortsætter fade */
  pointer-events: none;
  /* Sørger for, at pseudo-elementet ikke påvirker klik */
}

@media only screen and (max-width: 620px) {
  .default-bg::after {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.0)) !important;
  }
}

@media (max-width: 1750px) {

  /* Justeret fade */
  .default-bg {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3));
  }

  .default-bg::after {
    /* Juster efter behov */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    height: 150px;
  }
}

#nav.sticky {
  position: fixed !important;
  top: 0 !important;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #153655ec !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
  transform: translate3d(0, -110%, 0);
  transition: none;
}

#nav.sticky.is-visible {
  transform: translate3d(0, 0, 0);
  transition: transform 500ms cubic-bezier(.2,.7,0,1);
}

.nav-keeper {
  transition: height 220ms ease;
}

/* valgfrit smooth */


#nav.sticky .logo-img {
  width: 100px !important;
}



#nav {
  a {
    display: flex;
    align-items: center;
  }
}

.navbar-others {
  a {
    display: flex;

    img {
      width: 30px;
      height: auto;
    }
  }
}
</style>
