<template>
  <figure class="ansigt-omraader">
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
      <g v-for="p in punkterMedPlacering" :key="'n-' + p.nr" class="ao-nr">
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
 */
import { computed } from 'vue'

const props = defineProps({
  id: { type: String, default: 'omraader' },
  titel: { type: String, required: true },
  beskrivelse: { type: String, required: true },
  billedtekst: { type: String, default: 'Numrene svarer til afsnittene.' },
  punkter: { type: Array, default: () => [] }
})

const uid = computed(() => `ao-${props.id}`)
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
</style>
