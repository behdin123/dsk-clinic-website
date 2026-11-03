<template>
  <!-- Faelles hero for alle behandlingssider (botox, filler, skinbooster,
       mesoterapi, microneedling og undersider som laebefiller).
       Tekst, pris og booking foerst - ogsaa paa mobil. -->
  <section class="bh-hero" :aria-labelledby="h1Id">
    <div class="bh-hero__indre">
      <AppBreadcrumbs v-if="broedkrummer.length" :sti="broedkrummer" />

      <div class="bh-hero__gitter">
        <div class="bh-hero__tekst">
          <p v-if="eyebrow" class="sec__eyebrow">{{ eyebrow }}</p>
          <h1 :id="h1Id">{{ titel }}</h1>
          <p class="bh-hero__lead">{{ lead }}</p>

          <p v-if="prisFra" class="bh-hero__pris">
            <span class="bh-hero__pris-fra">Fra</span>
            <strong>{{ prisFra }} kr.</strong>
            <span v-if="prisEnhed" class="bh-hero__pris-enhed">{{ prisEnhed }}</span>
          </p>

          <div ref="handlingEl" class="bh-hero__handling">
            <button class="knap knap--primaer" type="button" @click="openBooking('hero')">
              Book gratis forundersøgelse
            </button>
            <a v-if="prisAnker" class="knap knap--sekundaer" :href="`#${prisAnker}`"
              @click.prevent="tilSektion(prisAnker)">{{ prisKnapTekst }}</a>
          </div>

          <ul class="side-hero__chips bh-hero__chips">
            <li v-for="c in chips" :key="c">{{ c }}</li>
          </ul>
        </div>

        <figure class="bh-hero__media">
          <img :src="billede.src" :width="billede.w || 1200" :height="billede.h || 1200" :alt="billede.alt"
            :style="billede.fokus ? { objectPosition: billede.fokus } : null" decoding="async" fetchpriority="high">
        </figure>
      </div>

      <!-- Noegletal i samme stil som laebefiller-siden: stort tal, kort label -->
      <dl v-if="fakta.length" class="fakta bh-hero__fakta" :aria-label="faktaLabel">
        <div v-for="f in fakta" :key="f.k">
          <dt>{{ f.v }}</dt>
          <dd>{{ f.k }}</dd>
        </div>
      </dl>
    </div>
  </section>

  <!-- Fast bookingknap i bunden paa mobil: vises, naar heroens knap er
       rullet ud af syne, og skjules igen ved sidens afsluttende CTA. -->
  <div class="bh-bund" :class="{ 'bh-bund--vis': visBundknap }" :aria-hidden="!visBundknap">
    <button class="knap knap--primaer" type="button" :tabindex="visBundknap ? 0 : -1"
      @click="openBooking('bundknap')">Book gratis forundersøgelse</button>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import AppBreadcrumbs from './AppBreadcrumbs.vue'

const props = defineProps({
  titel: { type: String, required: true },
  lead: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  broedkrummer: { type: Array, default: () => [] },
  prisFra: { type: String, default: '' },     // "550" / "1.350"
  prisEnhed: { type: String, default: '' },   // "pr. område" / "pr. ml"
  prisAnker: { type: String, default: '' },   // id paa sidens prissektion
  prisKnapTekst: { type: String, default: 'Se priser' },
  billede: { type: Object, required: true },  // { src, w, h, alt, fokus? }
  fakta: { type: Array, default: () => [] },  // [{ v: '15 min', k: 'Behandlingstid' }]
  faktaLabel: { type: String, default: 'Kort fortalt' },
  chips: {
    type: Array,
    default: () => ['Gratis forundersøgelse', 'Udføres af læge', '48 timers betænkningstid']
  },
  h1Id: { type: String, default: 'bh-titel' },
  bookingKilde: { type: String, default: 'behandling' },
  // Sidens afsluttende CTA - bundknappen skjules, mens den er synlig
  ctaSelector: { type: String, default: '.behandling-cta, .cta-kort' }
})

const NAV_HOEJDE = 100

const openBooking = (placering) => {
  window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: `${props.bookingKilde}_${placering}` } }))
}

// Blød rulning til prissektionen, centreret under den faste navigation
const tilSektion = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const roligt = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const r = el.getBoundingClientRect()
  const synlig = window.innerHeight - NAV_HOEJDE
  const top = r.height + 32 <= synlig ? NAV_HOEJDE + (synlig - r.height) / 2 : NAV_HOEJDE + 16
  window.scrollTo({ top: window.scrollY + r.top - top, behavior: roligt ? 'auto' : 'smooth' })
  history.replaceState(null, '', `#${id}`)
}

/* Fast bookingknap paa mobil. IntersectionObservere - ingen scroll-lytter.
   Vises, naar heroens knapper er rullet forbi, og skjules ved sidens CTA. */
const handlingEl = ref(null)
const heroUde = ref(false)
const ctaInde = ref(false)
const visBundknap = computed(() => heroUde.value && !ctaInde.value)
let io = null

onMounted(() => {
  if (!('IntersectionObserver' in window) || !handlingEl.value) return
  const ctaer = [...document.querySelectorAll(props.ctaSelector)]
  const synligeCtaer = new Set()
  io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.target === handlingEl.value) {
        heroUde.value = !e.isIntersecting && e.boundingClientRect.top < 0
      } else {
        e.isIntersecting ? synligeCtaer.add(e.target) : synligeCtaer.delete(e.target)
        ctaInde.value = synligeCtaer.size > 0
      }
    }
  })
  io.observe(handlingEl.value)
  ctaer.forEach(el => io.observe(el))
})

watch(visBundknap, (v) => document.body.classList.toggle('bh-bund-vis', v))

onBeforeUnmount(() => {
  io?.disconnect()
  document.body.classList.remove('bh-bund-vis')
})
</script>

<style lang="scss" scoped>
/* ===== Hero =====
   Hvidt baand: tekst og booking til venstre, billede til hoejre,
   noegletal i en raekke under. Paa mobil: tekst, pris og bookingknap
   foerst - de skal kunne ses uden at rulle. */
.bh-hero {
  background: #fff;
  border-bottom: 1px solid rgba(21, 54, 85, .08);
  box-sizing: border-box;
  /* Bunden foelger --sektion-luft, saa der er 100/80 px til foerste afsnit */
  padding: 26px 0 var(--sektion-luft);
}

.bh-hero__indre {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: var(--maal);
}

.bh-hero__gitter {
  align-items: center;
  display: grid;
  gap: clamp(32px, 5vw, 64px);
  grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr);
}

.bh-hero__tekst { min-width: 0; }

.bh-hero h1 {
  color: #153655 !important;
  font-size: clamp(1.75rem, 1.15rem + 2vw, 2.6rem) !important;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.14;
  margin: 10px 0 16px !important;
  padding: 0 !important;
  text-align: left;
}

.bh-hero__lead {
  color: rgba(21, 54, 85, .86) !important;
  font-size: 1.06rem;
  line-height: 1.65;
  margin: 0 0 20px;
  max-width: 58ch;
}

.bh-hero__pris {
  align-items: baseline;
  color: #153655;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px;
  margin: 0 0 20px;
}

.bh-hero__pris strong {
  font-size: 1.65rem;
  font-weight: 700;
  line-height: 1.1;
}

.bh-hero__pris-fra,
.bh-hero__pris-enhed {
  color: rgba(21, 54, 85, .78);
  font-size: .98rem;
}

.bh-hero__handling {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* Chips: samme som laebefiller-sidens .side-hero__chips (byggeklodser) */
.bh-hero__chips { margin-top: 20px; }

.bh-hero__media { margin: 0; }

.bh-hero__media img {
  aspect-ratio: 1 / 1;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .10);
  display: block;
  height: auto;
  max-height: 540px;
  object-fit: cover;
  width: 100%;
}

/* Noegletal: .fakta fra byggeklodser (stort tal, kort label), her inde i
   heroens baand i stedet for under det */
.bh-hero__fakta { margin: 36px 0 0; }

@media (max-width: 1000px) {
  .bh-hero__indre { width: 90%; }
}

/* Tablet og mobil: tekst og booking foerst, billedet under */
@media (max-width: 900px) {
  .bh-hero { padding: 16px 0 var(--sektion-luft); }
  .bh-hero__gitter { gap: 24px; grid-template-columns: minmax(0, 1fr); }
  .bh-hero__media img { aspect-ratio: 16 / 10; max-height: 340px; }
  .bh-hero__fakta { margin-top: 24px; }
}

@media (max-width: 600px) {
  .bh-hero h1 { margin: 6px 0 12px !important; }
  .bh-hero__lead { font-size: 1rem; line-height: 1.6; margin-bottom: 16px; }
  .bh-hero__pris { margin-bottom: 16px; }
  .bh-hero__pris strong { font-size: 1.5rem; }
  .bh-hero__handling { flex-direction: column; gap: 10px; }
  .bh-hero__handling .knap { box-sizing: border-box; justify-content: center; width: 100%; }
  .bh-hero__chips { margin-top: 16px; }
}

/* ===== Fast bookingknap i bunden (kun mobil) ===== */
.bh-bund { display: none; }

@media (max-width: 700px) {
  .bh-bund {
    background: rgba(255, 255, 255, .97);
    border-top: 1px solid rgba(21, 54, 85, .10);
    bottom: 0;
    box-shadow: 0 -6px 20px rgba(21, 54, 85, .08);
    box-sizing: border-box;
    display: block;
    left: 0;
    padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
    position: fixed;
    right: 0;
    transform: translateY(110%);
    transition: transform .25s ease, visibility .25s;
    visibility: hidden;
    z-index: 900;
  }

  .bh-bund--vis { transform: none; visibility: visible; }

  .bh-bund .knap { box-sizing: border-box; justify-content: center; width: 100%; }

  /* Cookie-knappen og "til toppen" flyttes op over bundknappen */
  :global(body.bh-bund-vis .scroll-to-top) { bottom: 96px !important; }
  :global(body.bh-bund-vis .dsk-cc-reopen) { bottom: 88px !important; }
}

@media (prefers-reduced-motion: reduce) {
  .bh-bund { transition: none; }
}
</style>
