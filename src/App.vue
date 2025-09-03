<template>
  <div id="navDiv" :class="{ 'dark-theme': darkMode }">
    <div id="nav" :class="['navbar', { 'default-bg': isTransparent, transparent: !isTransparent, sticky: isSticky }, { 'hide-nav': modalOpen }]">
      <AppNavigation :dark="darkMode" :is-sticky="isSticky" :toggle-dark-mode="toggleDarkMode" />
    </div>

    <!-- Her vises indholdet af de forskellige ruter -->
    <div>
      <router-view :dark="darkMode" :toggle-dark-mode="toggleDarkMode" :showModal="showModal" />

      <button class="scroll-to-top" :class="{ show: isButtonVisible }" @click="scrollToTop">
        <img src="./assets/icons/arrowup.webp" alt="">
      </button>
    </div>

    <!-- خود کامپوننت رزرو -->
    <AppBooking />

    <div :class="[{ 'hide-nav': modalOpen }]">
      <AppFooter />
    </div>

  </div>
</template>


<script setup>
import AppNavigation from '@/components/AppNavigation.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppBooking from '@/components/AppBooking.vue'
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'

const darkMode = ref(false)
const isSticky = ref(false)
const isTransparent = ref(true)

// وقتی true باشه ناوبری رو مخفی می‌کنیم
const modalOpen = ref(false)

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



// Handle scroll event for sticky effect
const handleScroll = () => {
  isTransparent.value = window.scrollY === 0;
  isSticky.value = window.scrollY > 100; // Sticky tilstand starter efter 100px scroll
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});



// Function to toggle dark mode
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', JSON.stringify(darkMode.value));
};



</script>





<style lang="scss">


:root {
  /* Generelle fontstørrelser for forskellige skærmstørrelser */
  --p-font-size-iphone: 15px;
  --p-font-size-ipad: 16px;
  --p-font-size-laptop: 18px;
  --p-font-size-4k: 20px;
}

:root {
  /* Generelle fontstørrelser for forskellige skærmstørrelser */
  --h1-font-size-iphone: 32px;
  --h1-font-size-ipad: 30px;
  --h1-font-size-laptop: 32px;
  --h1-font-size-4k: 34px;
}

:root {
  /* Generelle fontstørrelser for forskellige skærmstørrelser */
  --h2-font-size-iphone: 16px;
  --h2-font-size-ipad: 18px;
  --h2-font-size-laptop: 20px;
  --h2-font-size-4k: 22px;
}



:root {
  --primary-color: #f3f3f3;
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

.dark-theme {
  --primary-color: #2d2d2d;
  --secondary-color: #1d1d1d;
  --tertiary-color: #ffffff;
  --quaternary-color: #d8d8d8;
  --quaternary-hover-color: #2649ba;
  --primary-hover-color: #FED201;
  --background-color: #212121;
  --white-black-color: #ffffff;

  --titleBanner-color: #ffffff;

  --title-color: #D9C4A9;
  --background-color: #24353F;

  --column-backgroundColor: #2d2d2d;
  --card-backgroundColor: #252727;
}





/* iPhone */
@media only screen and (max-width: 600px) {
  h1 {
    font-size: var(--h1-font-size-iphone) !important;
  }
}

/* iPad */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  h1 {
    font-size: var(--h1-font-size-ipad) !important;
  }
}


/* iPhone */
@media only screen and (max-width: 600px) {
  h2 {
    font-size: var(--h1-font-size-iphone) !important;
  }
  .scroll-to-top {
  right: 13px !important;
  }
 }


/* iPad */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  h2 {
    font-size: var(--h1-font-size-ipad) !important;
  }
}


#navDiv{
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
    height: 100vh;
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
  /* Fading transition */
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.5s ease;

  /* Fading transition */
  a {
    font-weight: bold;
    font-size: 18px;
  }
}

.default-bg {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3));
  /* Justeret fade */
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
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
  /* Fortsætter fade */
  pointer-events: none;
  /* Sørger for, at pseudo-elementet ikke påvirker klik */
}

@media only screen and (max-width: 620px) {
  .default-bg {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3)) !important;
  }

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

.dark-theme {
  .default-bg {
    background: none !important;
  }

  .default-bg::after {
    background: none !important;
  }
}

.sticky {
  position: fixed !important;
  top: 0 !important;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  /* White with opacity */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  a {
    color: #000 !important;
  }
}

/* Initial state of navbar (transparent background) */
.navbar:not(.sticky) {
  background-color: transparent;
}

#nav {
    a {
      display: flex;
      align-items: center;
    }
}


@media only screen and (min-width: 1500px) {
  #nav {
    a {
      font-size: 18px !important;
    }
  }
}

.navbar-others {
    a {
      display: flex;
        img{
          width: 35px;
          height: auto;
        }
    }
  }



</style>
