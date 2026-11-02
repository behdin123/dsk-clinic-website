<template>
  <!-- Foto med omraaderne lagt ovenpaa som SVG. Selve fotoet roeres ikke;
       streger, numre og fremhaevning ligger i et lag over det. -->
  <figure v-if="foto" class="ansigt-omraader ansigt-omraader--foto" :class="{ 'har-aktiv': aktiveZoner.length > 0 }">
    <div class="ao-foto" :style="{ aspectRatio: `${foto.w} / ${foto.h}` }">
      <img :src="foto.src" :width="foto.w" :height="foto.h" :alt="foto.alt" loading="lazy" decoding="async" />
      <svg class="ao-lag" :viewBox="`0 0 ${foto.w} ${foto.h}`" aria-hidden="true" focusable="false"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Spotlight: hele fotoet daempes, undtagen det valgte omraade -->
          <mask :id="`${uid}-maske`">
            <rect :width="foto.w" :height="foto.h" fill="#fff" />
            <ellipse v-for="(z, i) in aktiveZoner" :key="'mz-' + i" :cx="z.cx" :cy="z.cy" :rx="z.rx * 1.15"
              :ry="z.ry * 1.15" fill="#000" :filter="`url(#${uid}-blod)`" />
          </mask>
          <filter :id="`${uid}-blod`" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <rect class="ao-daemp" :width="foto.w" :height="foto.h" :mask="`url(#${uid}-maske)`" />

        <g v-for="p in fotoPunkter" :key="'fz-' + p.nr" class="ao-zone"
          :class="{ 'ao-zone--aktiv': p.id === aktiv }">
          <ellipse v-for="(z, i) in p.foto.zone" :key="'zf-' + i" class="ao-zone__flade" :cx="z.cx" :cy="z.cy"
            :rx="z.rx" :ry="z.ry" :filter="`url(#${uid}-blod)`" />
          <ellipse v-for="(z, i) in p.foto.zone" :key="'zk-' + i" class="ao-zone__kant" :cx="z.cx" :cy="z.cy"
            :rx="z.rx" :ry="z.ry" />
          <path class="ao-zone__halo" :d="p.foto.mark" />
          <path class="ao-zone__streg" :d="p.foto.mark" />
          <g class="ao-zone__nr" @click="$emit('vaelg', p.id)">
            <circle :cx="p.foto.x" :cy="p.foto.y" r="31" />
            <text :x="p.foto.x" :y="p.foto.y + 11">{{ p.nr }}</text>
          </g>
        </g>
      </svg>
    </div>
    <figcaption>{{ billedtekst }}</figcaption>
  </figure>

  <figure v-else class="ansigt-omraader">
    <svg viewBox="0 0 300 350" role="img" :aria-labelledby="`${uid}-titel ${uid}-besk`"
      xmlns="http://www.w3.org/2000/svg">
      <title :id="`${uid}-titel`">{{ titel }}</title>
      <desc :id="`${uid}-besk`">{{ beskrivelse }}</desc>

      <!-- Ansigtets omrids -->
      <path class="ao-linje" d="M150 22 C92 22 58 70 58 150 C58 235 96 305 150 330 C204 305 242 235 242 150 C242 70 208 22 150 22 Z" />

      <!-- Bryn -->
      <path class="ao-linje" d="M92 146 Q112 134 134 142 M166 142 Q188 134 208 146" />

      <!-- Oejne -->
      <path class="ao-linje ao-tynd" d="M96 166 Q113 156 130 166 Q113 174 96 166 Z M170 166 Q187 156 204 166 Q187 174 170 166 Z" />
      <circle class="ao-fyld" cx="113" cy="166" r="3.5" />
      <circle class="ao-fyld" cx="187" cy="166" r="3.5" />

      <!-- Naese -->
      <path class="ao-linje ao-tynd" d="M145 152 C143 176 138 198 136 210 Q150 222 164 210" />

      <!-- Mund -->
      <path class="ao-linje ao-tynd" d="M122 256 Q136 248 150 252 Q164 248 178 256 Q150 272 122 256 Z" />

      <!-- Hage -->
      <path class="ao-linje ao-tynd" d="M136 304 Q150 310 164 304" />

      <!-- Markeringer for hvert omraade -->
      <path v-for="p in punkterMedMarkering" :key="'m-' + p.nr" class="ao-markering" :d="p.mark" />

      <!-- Numre -->
      <g v-for="p in punkterMedPlacering" :key="'n-' + p.nr" class="ao-nr" :class="{ 'ao-nr--aktiv': p.id === aktiv }">
        <circle :cx="p.x" :cy="p.y" r="11" />
        <text :x="p.x" :y="p.y + 4.5">{{ p.nr }}</text>
      </g>
    </svg>
    <figcaption>{{ billedtekst }}</figcaption>
  </figure>
</template>

<script setup>
/**
 * Ansigtsdiagram med nummererede omraader (botox- og filler-siden).
 * Numrene svarer til H3-afsnittene ved siden af. Beskrivelsen ligger i
 * <title>/<desc>, saa skaermlaesere og Google kan laese den - selve
 * forklaringen staar som HTML-tekst i afsnittene, ikke inde i SVG'en.
 *
 * punkter: [{ nr, x, y, mark }] - x/y er nummerets placering, mark er en
 * SVG-sti der fremhaever omraadet. Et punkt uden x/y (fx haender) vises ikke.
 *
 * Med foto: hvert punkt har foto: { x, y, mark, zone: [{ cx, cy, rx, ry }] }
 * i fotoets pixelmaal. zone er det omraade, der lyser op, naar det er valgt.
 */
import { computed } from 'vue'

const props = defineProps({
  id: { type: String, default: 'omraader' },
  titel: { type: String, required: true },
  beskrivelse: { type: String, required: true },
  billedtekst: { type: String, default: 'Numrene svarer til afsnittene.' },
  punkter: { type: Array, default: () => [] },
  // { src, w, h, alt } - naar den er sat, vises fotoet med omraaderne ovenpaa
  foto: { type: Object, default: null },
  // id paa det valgte omraade - det lyser op
  aktiv: { type: String, default: '' }
})
defineEmits(['vaelg'])

const uid = computed(() => `ao-${props.id}`)
const fotoPunkter = computed(() => props.punkter.filter(p => p.foto))
const aktiveZoner = computed(() => fotoPunkter.value.find(p => p.id === props.aktiv)?.foto.zone || [])
const punkterMedMarkering = computed(() => props.punkter.filter(p => p.mark))
const punkterMedPlacering = computed(() =>
  props.punkter.filter(p => Number.isFinite(p.x) && Number.isFinite(p.y)))
</script>

<style scoped>
.ansigt-omraader {
  align-items: center;
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .06);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 22px 18px 16px;
}

svg {
  display: block;
  height: auto;
  max-width: 320px;
  width: 100%;
}

figcaption {
  color: rgba(21, 54, 85, .78);
  font-size: .85rem;
  line-height: 1.5;
  margin-top: 10px;
  text-align: center;
}

.ao-linje {
  fill: none;
  stroke: #153655;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: .5;
  stroke-width: 2;
}

.ao-tynd { stroke-opacity: .38; stroke-width: 1.6; }

.ao-fyld { fill: #153655; fill-opacity: .35; }

.ao-markering {
  fill: none;
  stroke: #2d58a1;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.6;
}

.ao-nr circle { fill: #2d58a1; }

.ao-nr text {
  fill: #fff;
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 700;
  text-anchor: middle;
}

.ao-nr circle { transition: fill .2s ease; }
.ao-nr--aktiv circle { fill: #153655; }

/* ===== Fotovarianten ===== */
.ansigt-omraader--foto { padding: 12px 12px 14px; }

.ao-foto {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.ao-foto img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.ao-lag {
  height: 100%;
  inset: 0;
  max-width: none;
  position: absolute;
  width: 100%;
}

.ao-daemp {
  fill: #0d2238;
  opacity: 0;
  transition: opacity .35s ease;
}

.har-aktiv .ao-daemp { opacity: .42; }

.ao-zone__flade {
  fill: #9fc0f5;
  opacity: 0;
  transition: opacity .35s ease;
}

.ao-zone__kant {
  fill: none;
  opacity: 0;
  stroke: #fff;
  stroke-dasharray: 6 7;
  stroke-width: 2.5;
  transition: opacity .35s ease;
}

.ao-zone--aktiv .ao-zone__flade { opacity: .28; }
.ao-zone--aktiv .ao-zone__kant { opacity: .9; }

.ao-zone__halo,
.ao-zone__streg {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ao-zone__halo { opacity: .75; stroke: #fff; stroke-width: 9; }
.ao-zone__streg { stroke: #2d58a1; stroke-width: 4.5; transition: stroke .2s ease; }

.ao-zone__nr { cursor: pointer; }

.ao-zone__nr circle {
  fill: #2d58a1;
  stroke: #fff;
  stroke-width: 4;
  transform-box: fill-box;
  transform-origin: center;
  transition: transform .25s ease, fill .2s ease;
}

.ao-zone__nr text {
  fill: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 31px;
  font-weight: 700;
  pointer-events: none;
  text-anchor: middle;
}

.ao-zone__nr:hover circle { fill: #153655; }

/* Det valgte omraade: stregen bliver hvid, nummeret stoerre og moerkere */
.ao-zone--aktiv .ao-zone__streg { stroke: #fff; }
.ao-zone--aktiv .ao-zone__halo { stroke: #2d58a1; }
.ao-zone--aktiv .ao-zone__nr circle { fill: #153655; transform: scale(1.18); }

/* De andre omraader traeder lidt tilbage, naar ét er valgt */
.har-aktiv .ao-zone:not(.ao-zone--aktiv) .ao-zone__streg,
.har-aktiv .ao-zone:not(.ao-zone--aktiv) .ao-zone__halo { opacity: .45; }

@media (prefers-reduced-motion: reduce) {
  .ao-daemp, .ao-zone__flade, .ao-zone__kant, .ao-zone__nr circle { transition: none; }
}
</style>
