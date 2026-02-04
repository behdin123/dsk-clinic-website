<template>
  <nav class="navbar" role="navigation" aria-label="Main">
    <!-- Logo -->
    <div class="logo">
      <router-link to="/" aria-label="Gå til forsiden">
        <!-- Hvis vi er på en artikel-side: brug hvidt logo -->
        <img class="logo-img" src="../assets/logo_white.svg" width="90" height="90" alt="DK Skønhedsklinik" />
      </router-link>
    </div>

    <!-- Desktop links -->
    <div class="links-desktop">
      <div class="dropdown">
        <button class="dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false">
          Behandlinger
        </button>
        <div class="dropdown-menu">
          <!-- <router-link to="/behandlinger/botox">Botox</router-link> -->
          <router-link to="/behandlinger/filler">Filler</router-link>
          <router-link to="/behandlinger/skinbooster">Skinbooster</router-link>
          <router-link to="/behandlinger/mesotherapy">Mesotherapy</router-link>
          <router-link to="/behandlinger/microneedling">Microneedling</router-link>
        </div>
      </div>
      <router-link to="/omos">Om os</router-link>
      <router-link to="/kontaktos">Kontakt</router-link>
      <div class="dropdown">
        <button class="dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false">
          Klinikker
        </button>
        <div class="dropdown-menu">
          <router-link :to="{ name: 'clinic-vejle' }">Vejle</router-link>
          <router-link :to="{ name: 'clinic-esbjerg' }">Esbjerg</router-link>
        </div>
      </div>
      <!-- DISABLED: Viden universe link -->
      <!-- <router-link to="/viden/">Vidensunivers</router-link> -->
    </div>



    <!-- Right side -->
    <div class="navbar-others">

      <a class="soc NavFacebook" href="https://www.facebook.com/profile.php?id=100054595142567" target="_blank"
        rel="noopener noreferrer" aria-label="Facebook">
        <img class="icon facebook" src="../assets/icons/Facebook_Logo_Primary.webp" width="23" height="23" alt="" />
      </a>

      <a class="soc NavInstagram" href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank"
        rel="noopener noreferrer" aria-label="Instagram">
        <img class="icon" src="../assets/icons/Instagram_Glyph_Gradient.webp" width="23" height="23" alt="" />
      </a>

      <!-- Burger -->
      <button class="burger" type="button" :aria-expanded="isMenuOpen ? 'true' : 'false'" aria-controls="mobile-drawer"
        @click="toggleMenu">
        <img class="icon toggle-menu" src="../assets/toggel-menu.svg" width="23" height="23" alt="Menu" />
      </button>
    </div>

    <!-- Overlay -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="overlay" @click="closeMenu" aria-hidden="true" />
    </transition>

    <!-- Mobile drawer -->
    <transition name="slide-down">
      <aside v-if="isMenuOpen" id="mobile-drawer" class="drawer" role="dialog" aria-modal="true">
        <ul class="drawer-list" @click.stop>
          <li class="group-title">Behandlinger</li>

          <li>
            <button class="accordion" type="button" @click="isTreatmentsOpen = !isTreatmentsOpen"
              :aria-expanded="isTreatmentsOpen ? 'true' : 'false'" aria-controls="treatments-sub">
              Vælg behandling
              <span class="chev" :class="{ open: isTreatmentsOpen }">▾</span>
            </button>
            <transition name="expand">
              <ul v-show="isTreatmentsOpen" id="treatments-sub" class="sub">
                <!-- <li><router-link @click="closeMenu" to="/behandlinger/botox">Botox</router-link></li> -->
                <li><router-link @click="closeMenu" to="/behandlinger/filler">Filler</router-link></li>
                <li><router-link @click="closeMenu" to="/behandlinger/skinbooster">Skinbooster</router-link></li>
                <li><router-link @click="closeMenu" to="/behandlinger/mesotherapy">Mesotherapy</router-link></li>
                <li><router-link @click="closeMenu" to="/behandlinger/microneedling">Microneedling</router-link></li>
              </ul>
            </transition>
          </li>

          <li class="omos-link"><router-link @click="closeMenu" to="/omos">Om os</router-link></li>
          <li class="kontakt-link"><router-link @click="closeMenu" to="/kontaktos">Kontakt</router-link></li>

          <li class="group-title">Klinikker</li>

          <li>
            <button class="accordion" type="button" @click="isClinicOpen = !isClinicOpen"
              :aria-expanded="isClinicOpen ? 'true' : 'false'" aria-controls="clinics-sub">
              Vælg klinik
              <span class="chev" :class="{ open: isClinicOpen }">▾</span>
            </button>

            <transition name="expand">
              <!-- نکته: یک ریشهٔ واحد داخل transition -->
              <ul v-show="isClinicOpen" id="clinics-sub" class="sub">
                <li>
                  <router-link @click="closeMenu" :to="{ name: 'clinic-vejle' }">Vejle</router-link>
                </li>
                <li>
                  <router-link @click="closeMenu" :to="{ name: 'clinic-esbjerg' }">Esbjerg</router-link>
                </li>
              </ul>
            </transition>
          </li>



          <!-- DISABLED: Viden universe mobile link -->
          <!-- <li class="vidensunivers-link"><router-link @click="closeMenu" to="/viden/">Vidensunivers</router-link></li> -->


          <li class="divider" aria-hidden="true"></li>

          <li class="cta-row">
            <button type="button" class="cta-secondary arrow" @click="openBooking"
              aria-label="Book gratis forundersøgelse">
              Book gratis forundersøgelse
            </button>
            <p class="cta-hint">Skriv til os direkte på vores sociale medier</p>
          </li>

          <li class="socials-row">
            <a href="https://www.facebook.com/profile.php?id=100054595142567" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook">
              <img class="icon" src="../assets/icons/Facebook_Logo_Primary.webp" width="35" height="35" alt="" />
            </a>
            <a href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram">
              <img class="icon" src="../assets/icons/Instagram_Glyph_Gradient.webp" width="35" height="35" alt="" />
            </a>
          </li>
        </ul>
      </aside>
    </transition>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  isSticky: Boolean,
  pageClass: String
})

const openBooking = () => {
  closeMenu();                    // منو را ببند
  window.dispatchEvent(new CustomEvent('open-booking')); // به روت خبر بده مودال را باز کند
};


const router = useRouter()

const isMenuOpen = ref(false)
const isTreatmentsOpen = ref(false)
const isClinicOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  isTreatmentsOpen.value = false
  isClinicOpen.value = false
  document.body.style.overflow = ''
}

// بعد از isMenuOpen.value = true:
const focusable = () => Array.from(document.querySelectorAll(
  '#mobile-drawer a, #mobile-drawer button, #mobile-drawer [tabindex]:not([tabindex="-1"])'
));
let lastFocused;

const openFocus = () => {
  lastFocused = document.activeElement;
  const f = focusable();
  f[0]?.focus();
};
const trapFocus = (e) => {
  if (!isMenuOpen.value) return;
  if (e.key !== 'Tab') return;
  const f = focusable();
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
};

watch(isMenuOpen, v => {
  if (v) { openFocus(); window.addEventListener('keydown', trapFocus); }
  else { window.removeEventListener('keydown', trapFocus); lastFocused?.focus(); }
});

// Close with ESC
const onKey = (e) => {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

// Close after route change
watch(
  () => router.currentRoute.value.fullPath,
  () => closeMenu()
)
</script>

<style scoped lang="scss">
/* ------- Layout base ------- */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
}

.logo {
  .logo-img {
    width: 150px;
    height: auto;
  }
}

.navbar-others {
  display: flex;
  align-items: center;
  gap: 25px;

  .line {
    width: 1px;
    height: 20px;
    background: var(--title-color);
  }

  .burger {
    background: none;
    border: 0;
    padding: 6px;
    cursor: pointer;
    display: none;
  }
}

.links-desktop {
  display: flex;
  gap: 5vw;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
  }

  a:hover {
    opacity: .8;
  }
}

/* ------- Desktop dropdown ------- */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  background: none;
  border: 0;
  font-weight: bold;
  font-size: 16px !important;
  cursor: pointer;
  color: #fff;
}

.dropdown-menu {
  position: absolute;
  left: 0;
  top: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .15);
  padding: 10px 18px;
  display: none;
  min-width: 220px;
  z-index: 50;

  a {
    display: block;
    padding: 10px 0;
    color: #111 !important;
  }

  a:hover {
    text-decoration: underline;
  }
}

.dropdown:hover .dropdown-menu {
  display: block;
}

@media (max-width:1550px) {
  .navbar {
    max-width: 1200px;
  }

  .logo-img {
    width: 140px !important;
    height: auto;
  }
}

@media (max-width:1250px) {
  .navbar {
    max-width: 1000px;
  }
}

/* ------- Mobile only ------- */
@media (max-width:1050px) {
  .navbar {
    padding: 0 5%;
  }
  .links-desktop {
    display: none;
  }

  .navbar-others .burger {
    display: inline-flex;
  }
}

/* Overlay + Drawer */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .45);
  z-index: 40;
}

.drawer {
  position: fixed;
  left: 0;
  right: 0;
  top: 110px;
  min-height: 548px;
  background: #24353F;
  color: #EAEAEA;
  z-index: 41;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .3);
}

.drawer-list {
  list-style: none;
  padding: 22px 24px 28px;
  margin: 0;
}

.drawer-list>li {
  margin: 14px 0;
}

.drawer a {
  color: #EAEAEA;
  font-size: 20px;
  text-decoration: none;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, .7);
}

.drawer a,
.accordion,
.cta-secondary {
  outline: none;
}

.drawer a:focus-visible,
.accordion:focus-visible,
.cta-secondary:focus-visible {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .35) inset;
  border-radius: 10px;
}

.sub li a {
  min-height: 44px;
  display: flex;
  align-items: center;
}

.cta-row {
  margin: 6px 0 10px;
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, .25);
  background: transparent;
  color: #EAEAEA;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}

.cta-secondary:active {
  transform: translateY(1px);
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, .06);
}

.cta-hint {
  margin: 8px 0 0;
  font-size: 14px;
  opacity: .9;
}

@media (prefers-reduced-motion: reduce) {

  .slide-down-enter-active,
  .slide-down-leave-active,
  .fade-enter-active,
  .fade-leave-active {
    transition: none !important;
  }
}

.drawer {
  padding-bottom: calc(24px + env(safe-area-inset-bottom));
}

.group-title {
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  margin-top: 0;
}

.accordion {
  width: 100%;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, .18);
  padding: 12px 14px;
  border-radius: 10px;
  color: #EAEAEA;
  text-align: left;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sub {
  list-style: none;
  padding: 10px 12px 0 12px;
  margin: 0;
}

.sub li a {
  display: block;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, .15);
  font-size: 18px;
}

.sub li:last-child a {
  border-bottom: 0;
}

.chev {
  transition: transform .2s ease;
}

.chev.open {
  transform: rotate(180deg);
}

.divider {
  height: 1px;
  background: rgba(255, 255, 255, .15);
  margin: 18px 0;
}

.socials-row {
  display: flex;
  gap: 14px;
  margin-top: 12px;
}

.icon {
  display: block;
}

/* Animations */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform .25s ease, opacity .25s ease;
}

.slide-down-enter-from {
  transform: translateY(-12px);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-12px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Switch (unchanged) */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background: #24353F;
  transition: .4s;
}

.slider:before {
  content: "";
  position: absolute;
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: #fff;
  transition: .4s;
}

input:checked+.slider {
  background: #D9C4A9;
}

input:checked+.slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* Small tweak */
@media (max-width:525px) {
  .logo-img {
    width: 120px !important;
    height: auto;
  }

  .navbar-others a img {
    width: 20px;
    height: auto;
  }

  .NavInstagram,
  .NavFacebook {
    display: none !important;
  }

  .drawer p {
    margin: 5px 0 !important;
  }

  .omos-link,
  .kontakt-link {
    margin: 45px 0 !important;
  }

}
</style>