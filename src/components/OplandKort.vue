<template>
  <figure class="opland">
    <svg :viewBox="`0 0 ${B} ${H}`" role="img" :aria-labelledby="`${titelId}-t ${titelId}-d`">
      <title :id="`${titelId}-t`">Køretid i bil til DK Skønhedsklinik i {{ by }}</title>
      <desc :id="`${titelId}-d`">
        Diagram med {{ by }}-klinikken i midten. Ringene viser køretid i bil, og
        byerne står i deres omtrentlige retning. {{ byerSomTekst }}
      </desc>

      <!-- Koeretidsbaand, tegnet udefra og ind saa fladerne lapper rigtigt -->
      <circle v-for="(r, i) in ringeBagfra" :key="`b-${r}`"
        :cx="cx" :cy="cy" :r="radius(r)"
        :class="['baand', i % 2 === 0 ? 'baand--lys' : 'baand--moerk']" />

      <circle v-for="r in ringe" :key="`r-${r}`"
        :cx="cx" :cy="cy" :r="radius(r)" class="ringkant" />

      <!-- Minut-akse: ét spor ud gennem ringene, laest som akse paa et diagram.
           Tre loesstaaende maerkater laa oven i hinanden. -->
      <g>
        <line :x1="akseStart.x" :y1="akseStart.y" :x2="akseEnde.x" :y2="akseEnde.y" class="akse__linje" />
        <g v-for="(r, i) in ringe" :key="`m-${r}`">
          <line v-bind="akseTik(r)" class="akse__tik" />
          <text :x="akseTekst(r).x" :y="akseTekst(r).y" text-anchor="middle" class="maerkat">
            {{ r }}<tspan v-if="i === ringe.length - 1" class="maerkat__enhed"> min</tspan>
          </text>
        </g>
      </g>

      <!-- Rute ud til byen, og en svagere forlaengelse ud til navnet -->
      <g v-for="p in placeret" :key="`l-${p.navn}`">
        <line :x1="cx" :y1="cy" :x2="p.x" :y2="p.y" class="rute" />
        <line :x1="p.x" :y1="p.y" :x2="p.lx" :y2="p.ly" class="rute rute--ud" />
      </g>

      <g v-for="p in placeret" :key="`b-${p.navn}`">
        <circle :cx="p.x" :cy="p.y" r="5" class="prik" />
        <text :x="p.tx" :y="p.ty" :text-anchor="p.anker" class="bynavn">{{ p.navn }}</text>
      </g>

      <circle :cx="cx" :cy="cy" r="15" class="klinik-glow" />
      <circle :cx="cx" :cy="cy" r="7" class="klinik" />
      <text :x="cx" :y="cy + 30" text-anchor="middle" class="klinik-navn">{{ by }}</text>
    </svg>

    <!-- Tallene staar som rigtig tekst under diagrammet i stedet for inde i
         SVG'en: de kan laeses af skaermlaesere og soegemaskiner, de kan
         markeres, og de bryder ikke layoutet paa smalle skaerme. -->
    <ul class="opland__liste">
      <li v-for="p in sorteret" :key="`t-${p.navn}`">
        <span class="opland__by">{{ p.navn }}</span>
        <span class="opland__tal">{{ p.km }} km · ca. {{ p.minutter }} min</span>
      </li>
    </ul>

    <figcaption class="opland__note">
      Ca. køreafstand ad vej fra klinikken, uden myldretid. Ringene i diagrammet
      viser køretid – ikke kilometer.
    </figcaption>
  </figure>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Koeretidsdiagram for oplandet.
 *
 * Byerne staar i deres omtrentlige kompasretning, men afstanden fra midten
 * foelger den faktiske KOERETID, ikke kilometerne. Det er med vilje: den
 * besoegende spoerger "hvor laenge koerer jeg", ikke "hvor mange kilometer
 * er der i fugleflugt". To byer med forskellig km-afstand kan derfor godt
 * ligge i samme ring.
 *
 * punkter: [{ navn, km, minutter, retning }]  retning = grader fra nord, med uret.
 */
const props = defineProps({
  by: { type: String, required: true },
  punkter: { type: Array, required: true },
  titelId: { type: String, default: 'oplandskort' },
  /** Retning for minut-aksen - vaelg et udsnit uden byer. */
  maerkatRetning: { type: Number, default: 250 }
})

const B = 490
const H = 320
const cx = 245
const cy = 160
const yderst = 100        // radius for yderste ring
const navneRadius = 130   // alle bynavne paa samme cirkel - ingen sammenfald

/** Ringene tilpasses data, saa den yderste ligger lige uden for den fjerneste by. */
const trin = computed(() => {
  const maks = Math.max(...props.punkter.map(p => p.minutter))
  return 5 * Math.ceil(maks / 3 / 5)
})
const ringe = computed(() => [1, 2, 3].map(n => n * trin.value))
const ringeBagfra = computed(() => [...ringe.value].reverse())
const radius = m => (m / (trin.value * 3)) * yderst

const tilXY = (grader, r) => {
  const a = (grader - 90) * Math.PI / 180
  return { x: +(cx + r * Math.cos(a)).toFixed(1), y: +(cy + r * Math.sin(a)).toFixed(1) }
}

const a = (props.maerkatRetning - 90) * Math.PI / 180
const akseStart = computed(() => tilXY(props.maerkatRetning, 19))
const akseEnde = computed(() => tilXY(props.maerkatRetning, yderst + 7))

/** Lille tvaerstreg hvor aksen krydser en ring. */
const akseTik = m => {
  const r = radius(m), px = -Math.sin(a), py = Math.cos(a)
  return {
    x1: +(cx + r * Math.cos(a) - px * 4).toFixed(1), y1: +(cy + r * Math.sin(a) - py * 4).toFixed(1),
    x2: +(cx + r * Math.cos(a) + px * 4).toFixed(1), y2: +(cy + r * Math.sin(a) + py * 4).toFixed(1)
  }
}

/** Tallet saettes vinkelret ud fra aksen, saa det ikke ligger paa stregen. */
const akseTekst = m => {
  const r = radius(m), px = -Math.sin(a), py = Math.cos(a)
  return {
    x: +(cx + r * Math.cos(a) + px * 17).toFixed(1),
    y: +(cy + r * Math.sin(a) + py * 17 + 4).toFixed(1)
  }
}

const placeret = computed(() => props.punkter.map(p => {
  const v = (p.retning - 90) * Math.PI / 180
  const cos = Math.cos(v), sin = Math.sin(v)
  const r = radius(p.minutter)
  const anker = cos > 0.2 ? 'start' : cos < -0.2 ? 'end' : 'middle'
  const ud = anker === 'middle' ? 0 : 9
  return {
    ...p,
    x: +(cx + r * cos).toFixed(1), y: +(cy + r * sin).toFixed(1),
    lx: +(cx + (navneRadius - 14) * cos).toFixed(1),
    ly: +(cy + (navneRadius - 14) * sin).toFixed(1),
    tx: +(cx + navneRadius * cos + (anker === 'start' ? ud : -ud)).toFixed(1),
    ty: +(cy + navneRadius * sin + (sin < -0.4 ? -2 : sin > 0.4 ? 12 : 4)).toFixed(1),
    anker
  }
}))

const sorteret = computed(() => [...props.punkter].sort((x, y) => x.minutter - y.minutter || x.km - y.km))

const byerSomTekst = computed(() =>
  sorteret.value.map(p => `${p.navn}: ca. ${p.km} kilometer, ca. ${p.minutter} minutter i bil`).join('. ') + '.'
)
</script>

<style scoped>
.opland { margin: 0; width: 100%; }
.opland svg { display: block; width: 100%; height: auto; }

/* Paa brede skaerme staar diagrammet og tallene side om side - de to
   tunge elementer balancerer hinanden, og sektionen faar ikke en hoej
   venstrespalte med tom luft ved siden af. */
@media (min-width: 860px) {
  .opland {
    align-items: center;
    column-gap: 48px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, .92fr);
  }

  .opland__liste { border-top: 0; margin-top: 0; }
  .opland__liste li:first-child { border-top: 1px solid rgba(21, 54, 85, .1); }
  .opland__liste li { padding: 13px 0; }
  .opland__note { grid-column: 1 / -1; margin-top: 18px; }
}

.baand { stroke: none; }
.baand--lys { fill: rgba(45, 88, 161, .06); }
.baand--moerk { fill: rgba(45, 88, 161, .03); }

.ringkant {
  fill: none;
  stroke: rgba(45, 88, 161, .24);
  stroke-width: 1;
  stroke-dasharray: 2 6;
  stroke-linecap: round;
}

.akse__linje { stroke: rgba(45, 88, 161, .28); stroke-width: 1.1; }
.akse__tik { stroke: rgba(45, 88, 161, .45); stroke-width: 1.6; stroke-linecap: round; }

.maerkat { fill: #2d58a1; font-family: inherit; font-size: 11.5px; font-weight: 700; }
.maerkat__enhed { font-weight: 600; fill: rgba(45, 88, 161, .70); }

.rute { stroke: rgba(45, 88, 161, .34); stroke-width: 1.3; stroke-dasharray: 4 4; }
.rute--ud { stroke: rgba(45, 88, 161, .16); }

.prik { fill: #fff; stroke: #2d58a1; stroke-width: 2.3; }

.bynavn { fill: #153655; font-family: inherit; font-size: 15px; font-weight: 700; }

.klinik-glow { fill: rgba(45, 88, 161, .16); }
.klinik { fill: #2d58a1; }
.klinik-navn { fill: #2d58a1; font-family: inherit; font-size: 17px; font-weight: 700; }

.opland__liste {
  border-top: 1px solid rgba(21, 54, 85, .1);
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
}

.opland__liste li {
  align-items: baseline;
  border-bottom: 1px solid rgba(21, 54, 85, .08);
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding: 9px 0;
}

.opland__by { color: #153655; font-weight: 700; font-size: .95rem; }

.opland__tal {
  color: rgba(21, 54, 85, .66);
  font-size: .88rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.opland__note {
  color: rgba(21, 54, 85, .58);
  font-size: .82rem;
  line-height: 1.5;
  margin-top: 12px;
}

@media (max-width: 620px) {
  .bynavn { font-size: 18px; }
  .maerkat { font-size: 14px; }
  .klinik-navn { font-size: 20px; }
}
</style>
