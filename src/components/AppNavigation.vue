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
          <div v-for="kat in menuKategorier" :key="kat.id" class="dropdown-group">
            <p class="dropdown-group__title">{{ kat.navn }}</p>
            <router-link v-for="b in kat.behandlinger" :key="b.slug" :to="b.path">{{ b.navn }}</router-link>
          </div>
          <router-link v-if="hubLive" to="/behandlinger/" class="dropdown-all">Se alle behandlinger</router-link>
        </div>
      </div>
      <router-link to="/priser/">Priser</router-link>
      <router-link to="/omos/">Om os</router-link>
      <router-link to="/kontaktos/">Kontakt</router-link>
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
        aria-label="Åbn menu" @click="toggleMenu">
        <img class="icon toggle-menu" src="../assets/toggel-menu.svg" width="23" height="23" alt="" />
      </button>
    </div>

    <!-- Mobilmenu: fuld skaerm, alt synligt med ét blik.
         Teleport til <body>: den sticky navigation har en transform, og en
         transform goer position: fixed relativ til navigationen i stedet for
         skaermen - saa menuen sad oppe ved den oprindelige navigation, naar
         man havde scrollet ned. -->
    <Teleport to="body">
    <transition name="mnav">
      <aside v-if="isMenuOpen" id="mobile-drawer" class="mnav" role="dialog" aria-modal="true"
        aria-label="Menu">
        <div class="mnav__top">
          <router-link to="/" class="mnav__logo" aria-label="Gå til forsiden" @click="closeMenu">
            <img src="../assets/logo_white.svg" width="120" height="90" alt="DK Skønhedsklinik" />
          </router-link>
          <button class="mnav__luk" type="button" aria-label="Luk menu" @click="closeMenu">
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <div class="mnav__krop">
          <template v-for="kat in menuKategorier" :key="kat.id">
            <p class="mnav__titel">{{ kat.navn }}</p>
            <ul class="mnav__liste">
              <li v-for="b in kat.behandlinger" :key="b.slug">
                <router-link :to="b.path" @click="closeMenu">{{ b.navn }}</router-link>
              </li>
            </ul>
          </template>

          <p class="mnav__titel">Om klinikken</p>
          <ul class="mnav__liste">
            <li><router-link to="/priser/" @click="closeMenu">Priser</router-link></li>
            <li><router-link to="/omos/" @click="closeMenu">Om os og lægen</router-link></li>
            <li><router-link to="/kontaktos/" @click="closeMenu">Kontakt</router-link></li>
          </ul>

          <p class="mnav__titel">Klinikker</p>
          <div class="mnav__klinikker">
            <router-link :to="{ name: 'clinic-esbjerg' }" class="mnav__klinik" @click="closeMenu">
              <b>Esbjerg</b>
              <span>Havnegade 6</span>
              <small>Man–fre 17–20</small>
            </router-link>
            <router-link :to="{ name: 'clinic-vejle' }" class="mnav__klinik" @click="closeMenu">
              <b>Vejle</b>
              <span>Søndergade 50</span>
              <small>Søndag 11–18</small>
            </router-link>
          </div>
        </div>

        <div class="mnav__bund">
          <button type="button" class="knap knap--primaer mnav__book" @click="openBooking">
            Book gratis forundersøgelse
          </button>
          <div class="mnav__kontakt">
            <a class="knap knap--sekundaer mnav__sms" href="sms:+4553503750?&amp;body=Hej%20DK%20Sk%C3%B8nhedsklinik%2C%20jeg%20vil%20gerne%20h%C3%B8re%20mere%20om%20">Send os en sms</a>
            <a class="mnav__soc" href="https://www.facebook.com/profile.php?id=100054595142567" target="_blank"
              rel="noopener noreferrer" aria-label="Facebook">
              <img src="../assets/icons/Facebook_Logo_Primary.webp" width="26" height="26" alt="" />
            </a>
            <a class="mnav__soc" href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank"
              rel="noopener noreferrer" aria-label="Instagram">
              <img src="../assets/icons/Instagram_Glyph_Gradient.webp" width="26" height="26" alt="" />
            </a>
          </div>
        </div>
      </aside>
    </transition>
    </Teleport>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { aktiveKategorier, behandlingerIKategori, HUB_LIVE } from '@/data/behandlinger'

// Menuen bygges af det centrale behandlingsregister, saa en ny behandling
// kun skal tilfoejes et sted for at dukke op her.
const hubLive = HUB_LIVE
const menuKategorier = computed(() =>
  aktiveKategorier().map(k => ({ ...k, behandlinger: behandlingerIKategori(k.id) }))
)

defineProps({
  isSticky: Boolean,
  pageClass: String
})

const openBooking = () => {
  closeMenu();                    // منو را ببند
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'mobilmenu' } }));
};


const router = useRouter()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  document.body.classList.toggle('mnav-aaben', isMenuOpen.value)
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
  document.body.classList.remove('mnav-aaben')
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
  if (v) { nextTick(openFocus); window.addEventListener('keydown', trapFocus); }
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
.dropdown-group + .dropdown-group {
  margin-top: 6px;
  padding-top: 8px;
  border-top: 1px solid rgba(21, 54, 85, .1);
}
.dropdown-group__title {
  margin: 0;
  padding: 6px 0 2px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .09em;
  text-transform: uppercase;
  color: rgba(21, 54, 85, .5);
}
.sub .sub-title {
  padding: 10px 0 2px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .09em;
  text-transform: uppercase;
  opacity: .55;
}
.sub .sub-all a {
  font-weight: 700;
}
.dropdown-all {
  margin-top: 8px;
  padding-top: 10px !important;
  border-top: 1px solid rgba(21, 54, 85, .1);
  font-weight: 700;
  color: #2d58a1 !important;
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


}

/* ===== Mobilmenu =====
   Fuld skaerm: navy top med logo og luk-knap, hvid krop med alle sider
   synlige (ingen fold-ud-menuer), og en fast bund med booking og sms.
   Behandlingerne kommer fra behandlingsregistret, grupperet i kategorier. */
.mnav {
  background: #fff;
  color: #153655;
  display: flex;
  flex-direction: column;
  inset: 0;
  position: fixed;
  z-index: 1100;
  /* Ligger i <body> uden for #app, saa skrifttypen arves ikke derfra */
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.mnav__top {
  align-items: center;
  background: #153655;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  min-height: 76px;
  padding: 10px 5%;
}

.mnav__logo img { display: block; height: auto; width: 92px; }

.mnav__luk {
  align-items: center;
  background: rgba(255, 255, 255, .08);
  border: 1px solid rgba(255, 255, 255, .22);
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 46px;
  justify-content: center;
  width: 46px;
}

.mnav__krop {
  -webkit-overflow-scrolling: touch;
  flex: 1 1 auto;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 6px 5% 28px;
}

.mnav__titel {
  color: #2d58a1;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .13em;
  margin: 24px 0 2px;
  text-transform: uppercase;
}

.mnav__liste {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mnav__liste a {
  align-items: center;
  border-bottom: 1px solid rgba(21, 54, 85, .09);
  color: #153655;
  display: flex;
  font-size: 1.06rem;
  font-weight: 600;
  justify-content: space-between;
  min-height: 52px;
  text-decoration: none;
}

.mnav__liste a::after {
  background-color: currentColor;
  content: '';
  height: 14px;
  -webkit-mask: var(--pil) center / contain no-repeat;
  mask: var(--pil) center / contain no-repeat;
  opacity: .35;
  width: 14px;
}

.mnav__liste a.router-link-exact-active { color: #2d58a1; }
.mnav__liste a.router-link-exact-active::after { opacity: 1; }

.mnav__klinikker {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 10px;
}

.mnav .mnav__klinik {
  background: rgba(45, 88, 161, .05);
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 14px;
  align-items: start !important;
  color: #153655;
  display: grid !important;
  gap: 2px;
  grid-auto-flow: row;
  justify-items: start;
  padding: 14px 14px 12px;
  text-decoration: none;
}

.mnav__klinik b { font-size: 1.02rem; }
.mnav__klinik span { font-size: .9rem; }
.mnav__klinik small { color: rgba(21, 54, 85, .65); font-size: .8rem; }
.mnav__klinik.router-link-exact-active { border-color: #2d58a1; }

.mnav__bund {
  background: #fff;
  border-top: 1px solid rgba(21, 54, 85, .08);
  box-shadow: 0 -10px 24px rgba(21, 54, 85, .06);
  display: grid;
  flex: 0 0 auto;
  gap: 10px;
  padding: 14px 5% calc(14px + env(safe-area-inset-bottom));
}

.mnav__book { width: 100%; }

.mnav__kontakt {
  align-items: stretch;
  display: flex;
  gap: 10px;
}

.mnav__sms { flex: 1 1 auto; }

.mnav__soc {
  align-items: center;
  border: 1.5px solid rgba(21, 54, 85, .18);
  border-radius: 12px;
  display: inline-flex;
  flex: 0 0 52px;
  justify-content: center;
}

.mnav__soc img { display: block; height: 24px; width: 24px; }

.mnav a:focus-visible,
.mnav button:focus-visible {
  outline: 3px solid rgba(45, 88, 161, .45);
  outline-offset: 2px;
}

/* Glider ind fra hoejre */
.mnav-enter-active,
.mnav-leave-active { transition: transform .28s ease, opacity .28s ease; }

.mnav-enter-from,
.mnav-leave-to { opacity: 0; transform: translateX(24px); }

@media (prefers-reduced-motion: reduce) {
  .mnav-enter-active,
  .mnav-leave-active { transition: none; }
}
</style>

<style>
/* Mens mobilmenuen er aaben: skjul de svaevende knapper (cookie-indstillinger
   og "til toppen"), saa de ikke ligger oven paa menuens knapper. */
body.mnav-aaben .dsk-cc-reopen,
body.mnav-aaben .scroll-to-top {
  display: none !important;
}
</style>
