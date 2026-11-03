<template>
  <nav class="navbar" role="navigation" aria-label="Main">
    <!-- Logo -->
    <div class="logo">
      <router-link to="/" aria-label="Gå til forsiden">
        <!-- Hvis vi er på en artikel-side: brug hvidt logo -->
        <img class="logo-img" src="../assets/logo_white.svg" width="90" height="90" alt="DK Skønhedsklinik" />
      </router-link>
    </div>

    <!-- Desktop: hovedpunkterne midt i baandet. "Behandlinger" er selv et
         link til oversigten og aabner en menu ved hover og tastaturfokus.
         Det aktive punkt er understreget. -->
    <div class="links-desktop">
      <div class="dropdown dropdown--mega">
        <router-link to="/behandlinger/" class="nav-punkt" :class="{ 'nav-punkt--aktiv': erBehandlinger }"
          aria-haspopup="true">
          Behandlinger <span class="nav-pil" aria-hidden="true"></span>
        </router-link>
        <div class="dropdown-menu">
          <div class="mega">
            <div v-for="kat in menuKategorier" :key="kat.id" class="mega__gruppe">
              <p class="mega__titel">{{ kat.navn }}</p>
              <router-link v-for="b in kat.behandlinger" :key="b.slug" :to="b.path" class="mega__link">
                {{ b.navn }}
              </router-link>
            </div>
          </div>
          <router-link v-if="hubLive" to="/behandlinger/" class="mega__alle">
            Se alle behandlinger og priser <span class="pil" aria-hidden="true"></span>
          </router-link>
        </div>
      </div>
      <router-link to="/priser/" class="nav-punkt" active-class="nav-punkt--aktiv">Priser</router-link>
      <router-link to="/omos/" class="nav-punkt" active-class="nav-punkt--aktiv">Om os</router-link>
      <router-link to="/kontaktos/" class="nav-punkt" active-class="nav-punkt--aktiv">Kontakt</router-link>
      <div class="dropdown">
        <button class="nav-punkt nav-punkt--knap" :class="{ 'nav-punkt--aktiv': erKlinik }" type="button"
          aria-haspopup="true">
          Klinikker <span class="nav-pil" aria-hidden="true"></span>
        </button>
        <div class="dropdown-menu dropdown-menu--klinik">
          <router-link :to="{ name: 'clinic-esbjerg' }" class="klinik-link">
            <b>Esbjerg</b><span>Havnegade 6 · man–fre 17–20</span>
          </router-link>
          <router-link :to="{ name: 'clinic-vejle' }" class="klinik-link">
            <b>Vejle</b><span>Søndergade 50 · søndag 11–18</span>
          </router-link>
        </div>
      </div>
      <!-- DISABLED: Viden universe link -->
      <!-- <router-link to="/viden/">Vidensunivers</router-link> -->
    </div>

    <!-- Hoejre side: booking som tydelig knap, sociale ikoner og burger -->
    <div class="navbar-others">
      <a class="soc NavFacebook" href="https://www.facebook.com/profile.php?id=100054595142567" target="_blank"
        rel="noopener noreferrer" aria-label="Facebook">
        <img class="icon facebook" src="../assets/icons/Facebook_Logo_Primary.webp" width="23" height="23" alt="" />
      </a>

      <a class="soc NavInstagram" href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank"
        rel="noopener noreferrer" aria-label="Instagram">
        <img class="icon" src="../assets/icons/Instagram_Glyph_Gradient.webp" width="23" height="23" alt="" />
      </a>

      <button class="nav-book" type="button" @click="openBooking">Book tid</button>

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
          <router-link v-if="hubLive" to="/behandlinger/" class="mnav__alle" @click="closeMenu">
            Alle behandlinger <span class="pil" aria-hidden="true"></span>
          </router-link>
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
import { useRouter, useRoute } from 'vue-router'
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
  const kilde = isMenuOpen.value ? 'mobilmenu' : 'navigation'
  closeMenu()
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: kilde } }))
}

// Aktivt hovedpunkt: alle behandlingssider hoerer under "Behandlinger"
const route = useRoute()
const erBehandlinger = computed(() => route.path.startsWith('/behandlinger'))
const erKlinik = computed(() => route.path.startsWith('/klinik'))


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
  gap: 24px;
  width: 100%;
  margin: 0 auto;
  /* Samme venstre- og hoejrekant som sidens indhold */
  max-width: var(--maal);
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
  gap: 18px;

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

/* ------- Hovedpunkter ------- */
.links-desktop {
  align-items: center;
  display: flex;
  gap: clamp(18px, 2.6vw, 44px);
}

.nav-punkt {
  align-items: center;
  background: none;
  border: 0;
  color: #fff !important;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px !important;
  font-weight: 700;
  gap: 6px;
  padding: 10px 0;
  position: relative;
  text-decoration: none;
}

/* Understregning: vises ved hover og paa det aktive punkt */
.nav-punkt::after {
  background: #9fc0f5;
  border-radius: 2px;
  bottom: 2px;
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  right: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .2s ease;
}

.nav-punkt:hover::after,
.nav-punkt:focus-visible::after,
.dropdown:hover > .nav-punkt::after,
.nav-punkt--aktiv::after { transform: scaleX(1); }

.nav-punkt:focus-visible { outline: 2px solid #9fc0f5; outline-offset: 4px; border-radius: 4px; }

/* Lille pil ned ved punkter med menu */
.nav-pil {
  border-bottom: 2px solid currentColor;
  border-right: 2px solid currentColor;
  height: 6px;
  margin-top: -3px;
  opacity: .8;
  transform: rotate(45deg);
  transition: transform .2s ease;
  width: 6px;
}

.dropdown:hover .nav-pil,
.dropdown:focus-within .nav-pil { transform: rotate(-135deg); margin-top: 3px; }

/* ------- Menuer (hover + tastaturfokus) ------- */
.dropdown { position: relative; }

.dropdown-menu {
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .08);
  border-radius: 14px;
  box-shadow: 0 18px 40px rgba(13, 34, 56, .18);
  box-sizing: border-box;
  left: 50%;
  margin-top: 12px;
  min-width: 240px;
  opacity: 0;
  padding: 10px;
  pointer-events: none;
  position: absolute;
  top: 100%;
  transform: translate(-50%, 6px);
  transition: opacity .16s ease, transform .16s ease, visibility .16s;
  visibility: hidden;
  z-index: 50;
}

/* Usynlig bro, saa menuen ikke lukker, naar musen flyttes ned til den */
.dropdown-menu::before { content: ''; height: 14px; left: 0; position: absolute; right: 0; top: -14px; }

.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
  visibility: visible;
}

/* Behandlinger: kolonner pr. kategori + link til oversigten */
.dropdown--mega .dropdown-menu { min-width: 560px; padding: 8px; }

.mega {
  display: grid;
  gap: 4px 8px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 10px 10px 6px;
}

.mega__titel {
  color: #2d58a1;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .1em;
  margin: 0 0 6px;
  padding: 0 10px;
  text-transform: uppercase;
}

.mega__link,
.klinik-link {
  border-radius: 8px;
  color: #153655 !important;
  display: block;
  font-size: 15px !important;
  font-weight: 600 !important;
  padding: 8px 10px;
  text-decoration: none;
  transition: background .15s ease, color .15s ease;
}

.mega__link:hover,
.mega__link:focus-visible,
.klinik-link:hover,
.klinik-link:focus-visible { background: rgba(45, 88, 161, .07); color: #2d58a1 !important; }

.mega__link.router-link-exact-active { color: #2d58a1 !important; }

.mega__alle {
  align-items: center;
  background: rgba(45, 88, 161, .06);
  border-radius: 10px;
  color: #2d58a1 !important;
  display: flex;
  font-size: 15px !important;
  font-weight: 700;
  gap: 8px;
  justify-content: space-between;
  margin-top: 6px;
  padding: 12px 18px;
  text-decoration: none;
}

.mega__alle:hover { background: rgba(45, 88, 161, .12); }
.mega__alle .pil { height: 12px; width: 12px; }

/* Klinikker: navn + adresse og aabningstid */
.dropdown-menu--klinik { min-width: 260px; }
.klinik-link { align-items: flex-start !important; display: flex !important; flex-direction: column; gap: 2px; text-align: left !important; }
.klinik-link b, .klinik-link span { text-align: left !important; }
.klinik-link b { display: block; font-size: 15px; }
.klinik-link span { color: rgba(21, 54, 85, .7); display: block; font-size: 13px; font-weight: 400; margin-top: 2px; }

/* ------- Booking-knap i navigationen ------- */
.nav-book {
  background: #fff;
  border: 0;
  border-radius: 10px;
  color: #153655;
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  padding: 11px 20px;
  transition: background .15s ease, transform .15s ease;
  white-space: nowrap;
}

.nav-book:hover,
.nav-book:focus-visible { background: #eaf0fa; transform: translateY(-1px); }

@media (prefers-reduced-motion: reduce) {
  .nav-punkt::after, .nav-pil, .dropdown-menu, .nav-book { transition: none; }
}

@media (max-width:1550px) {
  .logo-img {
    width: 140px !important;
    height: auto;
  }
}

/* Under 1000 px er indholdet 90 % bredt - navigationen foelger med */
@media (max-width:1000px) {
  .navbar { width: 90%; }
}

/* ------- Mobile only ------- */
@media (max-width:1050px) {
  .navbar {
    padding: 0;
  }
  .links-desktop {
    display: none;
  }

  .navbar-others .burger {
    display: inline-flex;
  }

  .nav-book { display: none; }
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

.mnav__alle {
  margin-top: 16px;
  align-items: center;
  background: rgba(45, 88, 161, .07);
  border-radius: 12px;
  color: #2d58a1;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 14px 16px;
  text-decoration: none;
}

.mnav__alle .pil { height: 12px; width: 12px; }

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
  /* Ligger i <body> uden for #app - skrifttypen saettes eksplicit */
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.mnav a,
.mnav button,
.mnav p,
.mnav b,
.mnav span,
.mnav small {
  font-family: Arial, Helvetica, sans-serif;
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
.mnav__klinik small { color: rgba(21, 54, 85, .78); font-size: .8rem; }
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
