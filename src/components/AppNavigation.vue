<template>

  <div class="logo">
    <router-link to="/">
      <img v-if="!dark || isSticky" class="logo-img" src="../assets/logo_blue.svg" width="90px" height="90px" />
      <img v-else class="logo-img" src="../assets/logo_white.svg" width="90px" height="90px" />
    </router-link>
  </div>

  <div class="justify">
    <div class="navbar-links">
      <div class="dropdown">
        <!-- لینک اصلی که باعث نمایش منو می‌شود -->
        <div class="dropdown-toggle" @click.prevent="toggleDropdown">
          <a>Behandlinger</a>
        </div>
        <!-- منوی کشویی -->
        <div class="dropdown-menu" :class="{ 'show': isDropdownOpen }">
          <router-link to="/behandlinger/botox">Botox</router-link>
          <router-link to="/behandlinger/filler">Filler</router-link>
          <router-link to="/behandlinger/skinbooster">Skinbooster</router-link>
          <router-link to="/behandlinger/prp">PRP</router-link>
          <router-link to="/behandlinger/mesotherapy">Mesotherapy</router-link>
          <router-link to="/behandlinger/microneedling">Microneedling</router-link>
        </div>
      </div>

      <!-- <router-link to="/VIDEO">Før/Efter</router-link> -->
      <router-link to="/omos">Om os</router-link>
      <router-link to="/kontaktos">Kontakt</router-link>
    </div>
  </div>

  <div class="navbar-others">

    <label class="switch">
      <input @click="toggleDarkMode" type="checkbox" :checked="darkMode" />
      <span class="slider round"></span>
    </label>

    <div class="line"></div>

    <!-- Facebook ikon -->
    <a v-if="!dark || isSticky" href="https://www.facebook.com/profile.php?id=100054595142567" target="_blank">
      <img class="icon facebook" src="../assets/icons/Facebook_Logo_Primary.webp" width="23px" height="23px" />
    </a>
    <a v-else href="https://www.facebook.com/profile.php?id=100054595142567" target="_blank">
      <img class="icon facebook" src="../assets/icons/Facebook_Logo_Primary.webp" width="23px" height="23px" />
    </a>

    <div class="nav-icons">
      <a v-if="!dark || isSticky" href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank">
        <img id="first-icon" class="icon" src="../assets/icons/Instagram_Glyph_Gradient.webp" width="23px" height="23px">
      </a>
      <a v-else href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank">
        <img id="first-icon" class="icon" src="../assets/icons/Instagram_Glyph_Gradient.webp" width="23px" height="23px">
      </a>
    </div>

    <!-- Toggle knap ikon -->
    <div class="toggel-btn">
      <img v-if="!dark || isSticky" class="icon toggle-menu" src="../assets/toggel-menu.svg" width="23px"
        height="23px" />
      <img v-else class="icon toggle-menu" src="../assets/toggel-menu dark-version.svg" width="23px" height="23px" />
    </div>
  </div>

</template>



<script setup>
import { onMounted, defineProps, ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  dark: Boolean,
  toggleDarkMode: Function,
  isSticky: Boolean,
});


onMounted(() => {
  const burger = document.querySelector('.toggel-btn');
  const nav = document.querySelector('.justify');
  const router = useRouter();

  // Funktion til at tjekke om skærmen er mobil (f.eks. under 768px)
  const isMobile = () => window.innerWidth <= 768;

  // Toggle navigation visibility on burger click
  burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    if (nav.matches('.show')) {
      nav.classList.remove('end');
      nav.style.setProperty('display', 'flex', 'important');
    } else {
      nav.classList.add('end');
      setTimeout(() => {
        nav.style.setProperty('display', 'none', 'important');
      }, 1000);
    }
  });

  // Hide navigation on link click (kun i mobilversion)
  const navLinks = document.querySelectorAll('.justify a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (isMobile()) { // Kun skjul navigation, hvis det er mobilversion
        nav.classList.remove('show');
        nav.style.setProperty('display', 'none', 'important');
      }
    });
  });

  // Hide navigation on logo click (kun i mobilversion)
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    if (isMobile()) { // Kun skjul navigation, hvis det er mobilversion
      nav.classList.remove('show');
      nav.style.setProperty('display', 'none', 'important');
    }
  });

  // Lyt til ruteændringer og luk navigationen (kun i mobilversion)
  router.afterEach(() => {
    if (isMobile()) { // Kun skjul navigation, hvis det er mobilversion
      nav.classList.remove('show');
      nav.style.setProperty('display', 'none', 'important');
    }
  });

  // Opdatering af isMobile ved ændring af vinduestørrelse (tilføj lytter)
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      // Hvis skærmstørrelsen ændres til større end mobil, vis navigation
      nav.classList.remove('show');
      nav.style.setProperty('display', 'flex', 'important');
    }
  });
});

const isDropdownOpen = ref(false);

// تابع برای باز و بسته کردن dropdown در موبایل
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// بستن dropdown در صورت کلیک روی جای دیگر صفحه
document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    isDropdownOpen.value = false;
  }
});

</script>


<style scoped lang="scss">
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

.dropdown {
  position: relative;
  display: inline-block;

}

/* استایل لینک اصلی */
.dropdown-toggle {
  display: block;
  padding: 10px 0;
  color: var(--tertiary-color);
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

/* منوی کشویی */
.dropdown-menu {
  display: none;
  /* پیش‌فرض مخفی است */
  position: absolute;
  left: 0;
  top: 100%;
  background: white;
  min-width: 200px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;

  a {
    color: #000 !important;
  }
}

.dropdown-menu a {
  padding: 20px 0 !important;
}

/* نمایش منو هنگام hover در دسکتاپ */
.dropdown:hover .dropdown-menu {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  margin-left: 70px;
  padding-top: 5px;
}


/* تنظیمات موبایل */
@media (max-width: 1000px) {
  .dropdown-menu {
    position: static;
    display: none;
    background: none;
    box-shadow: none;
    padding-right: 5vw;
  }

  .dropdown-menu {
    margin-bottom: 20px;
  }

  .dropdown-menu.show {
    display: flex;
    flex-direction: column;
  }

  .navbar-links .dropdown-menu a {
    padding: 10px 0 !important;
    font-size: 16px !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .navbar-links a:first-child {
    padding-bottom: 0 !important;
  }

  .navbar-links a:nth-child(2) {
    padding-top: 80px !important;
  }

  .dropdown-menu a:first-child {
    padding-bottom: 10px !important;
  }

  .dropdown-menu a:nth-child(2) {
    padding: 10px 0 !important;
  }

  .dropdown-menu a:hover {
    background: rgba(0, 0, 255, 0.1);
  }

}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;


  /* Sticky background effect */

  .logo {
    margin-left: 5%;

    img {
      width: 200px;
      height: auto;
    }
  }

  .logo {
    margin-left: 5%;
  }

  .navbar-links {
    display: flex;

    a {
      font-family: Arial, Helvetica, sans-serif;
      padding: 0 5vw;
      font-size: var(--font-size-laptop);
      text-decoration: none;
      color: var(--tertiary-color);
      letter-spacing: 0.5px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {

    /* iPad-størrelse */
    .navbar-links {
      a {
        font-size: var(--font-size-ipad);
      }
    }
  }

  @media (max-width: 1750px) {

    .logo {
      img {
        width: 120px;
      }
    }
  }

  @media (max-width: 1550px) {
    .logo {
      img {
        width: 120px;
      }
    }
  }

  @media (min-width: 1290px) and (max-width: 1500px) {

    /* Laptop-størrelse */
    .navbar-links {
      a {
        font-size: 18px !important;
      }
    }

    .navbar-links {
      a {
        padding: 0 4vw;
      }
    }
  }

  @media (min-width: 1000px) and (max-width: 1290px) {
    .navbar-links {
      a {
        padding: 0 3vw;
      }
    }
  }

  @media (min-width: 1440px) {

    /* 4K Monitor-størrelse */
    .navbar-links {
      a {
        font-size: var(--font-size-4k);
      }
    }
  }

  .toggel-btn {
    display: none;
  }

  a:hover {
    color: var(--titleBanner-color) !important;
  }

  .navbar-others {
    margin-right: 5%;
    display: flex;
    align-items: center;

    label {
      margin-right: 15px;
    }

    .nav-icons {
      display: flex;
      align-items: center;
    }

    .toggle-menu {
      margin-right: 0;
      cursor: pointer;
    }

    .facebook {
      margin: 0 15px;
    }

    .line {
      content: "";
      height: 20px;
      width: 1px;
      background: var(--title-color);
    }
  }
}



.icon:hover {
  opacity: 0.5;
}

.icon:visited {
  opacity: 0.5;
}

.icon:active {
  opacity: 0.5;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #24353F;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked+.slider {
  background-color: #D9C4A9;
}

input:focus+.slider {
  box-shadow: 0 0 1px #D9C4A9;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


@media only screen and (max-width: 1120px) {
  #nav {
    .line {
      height: 18px;
    }

    .navbar-links {
      margin-left: 0;
    }

    .nav-icons {
      display: none;
    }

    .icon {
      width: 20px;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .justify {
    width: 100%;
    min-height: 100vh;
    top: 119px;
    position: absolute;
    z-index: 20;
    display: none !important;
   
    background: #24353F !important;
    animation-name: toggleMenu;
    animation-duration: 1s;
  }


  .show {
    animation-name: toggleMenu;
    animation-duration: 1s;
  }

  .end {
    animation-name: toggleMenuEnd;
    animation-duration: 1s;
  }

  @keyframes toggleMenu {
    from {
      opacity: 0;
      height: 50px;
    }

    to {
      opacity: 1;
      height: 450px;
    }
  }

  @keyframes toggleMenuEnd {
    from {
      opacity: 1;
      height: 450px;
    }

    to {
      opacity: 0;
      height: 50px;
    }
  }

  .navbar-links {
    flex-direction: column;
    text-align: right;
    padding-top: 25px;
    a {
      padding-bottom: 80px !important;
      color: #EAEAEA !important;
      font-size: 24px !important;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }
  }

  .toggel-btn {
    display: flex !important;
  }

  .icon {
    margin: 0 15px;
  }
}




@media only screen and (max-width: 525px) {
  .logo-img {
    width: 75px;
    height: 75px;
  }

  .sticky {
    background: #24353F !important;
  }
}

@media only screen and (max-width: 378px) {
  .switch {
    display: none;
  }
}
</style>