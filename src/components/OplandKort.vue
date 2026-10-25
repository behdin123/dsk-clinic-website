<template>
  <figure class="opland" :aria-label="`Kort over byer omkring ${by}`">
    <svg viewBox="0 0 420 360" role="img" :aria-labelledby="titelId">
      <title :id="titelId">Stiliseret kort med {{ by }} i midten og de omkringliggende byer</title>

      <!-- Baggrundsringe: visuel fornemmelse af afstand -->
      <circle cx="210" cy="180" r="148" class="ring" />
      <circle cx="210" cy="180" r="100" class="ring" />
      <circle cx="210" cy="180" r="54" class="ring ring--inder" />

      <!-- Ruter ud til byerne -->
      <g class="rute">
        <line v-for="p in punkter" :key="`l-${p.navn}`" x1="210" y1="180" :x2="p.x" :y2="p.y" />
      </g>

      <!-- Byerne -->
      <g v-for="p in punkter" :key="p.navn">
        <circle :cx="p.x" :cy="p.y" r="6" class="prik" />
        <text :x="p.x" :y="p.y + (p.under ? 24 : -14)" :text-anchor="p.anker || 'middle'" class="bynavn">
          {{ p.navn }}
        </text>
      </g>

      <!-- Klinikken -->
      <circle cx="210" cy="180" r="13" class="klinik-ring" />
      <circle cx="210" cy="180" r="7" class="klinik" />
      <text x="210" y="212" text-anchor="middle" class="klinik-navn">{{ by }}</text>
    </svg>
  </figure>
</template>

<script setup>
/**
 * Stiliseret oplandskort. Bevidst ikke geografisk korrekt - det er en
 * illustration af naerhed, ikke en rutevejledning. Byerne er placeret i
 * omtrent den rigtige retning, saa billedet foeles rigtigt for lokale.
 */
defineProps({
  by: { type: String, required: true },
  punkter: { type: Array, required: true },
  titelId: { type: String, default: 'oplandskort' }
})
</script>

<style scoped>
.opland {
  margin: 0;
  width: 100%;
}
.opland svg {
  display: block;
  width: 100%;
  height: auto;
}
.ring {
  fill: none;
  stroke: rgba(45, 88, 161, .14);
  stroke-width: 1;
  stroke-dasharray: 3 5;
}
.ring--inder { stroke: rgba(45, 88, 161, .2); }
.rute line {
  stroke: rgba(45, 88, 161, .3);
  stroke-width: 1.4;
}
.prik {
  fill: #fff;
  stroke: #2d58a1;
  stroke-width: 2.2;
}
.bynavn {
  fill: #153655;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 600;
}
.klinik-ring {
  fill: rgba(45, 88, 161, .14);
}
.klinik {
  fill: #2d58a1;
}
.klinik-navn {
  fill: #2d58a1;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: .01em;
}
</style>
