<template>
  <figure class="laebe-omraader">
    <svg viewBox="0 0 400 300" role="img" aria-labelledby="laebe-omraader-titel laebe-omraader-besk"
      xmlns="http://www.w3.org/2000/svg">
      <title id="laebe-omraader-titel">De fem områder omkring læberne, der kan behandles med filler</title>
      <desc id="laebe-omraader-besk">
        Tegning af nederste del af ansigtet med fem nummererede punkter: 1 volumen i læben,
        2 læbekanten, 3 symmetri mellem venstre og højre side, 4 læbelinjer over munden og
        5 mundvigene.
      </desc>

      <!-- Ansigtets omrids: kinder ned til hagen -->
      <path class="lo-linje" d="M44 0 C44 120 98 218 166 250 Q200 266 234 250 C302 218 356 120 356 0" />

      <!-- Næse -->
      <path class="lo-linje" d="M168 66 C172 80 188 86 200 84 C212 86 228 80 232 66" />
      <ellipse class="lo-fyld-moerk" cx="184" cy="77" rx="6" ry="2.6" />
      <ellipse class="lo-fyld-moerk" cx="216" cy="77" rx="6" ry="2.6" />

      <!-- Filtrum -->
      <path class="lo-linje lo-tynd" d="M193 88 L190 120 M207 88 L210 120" />

      <!-- 4: Læbelinjer over munden -->
      <path class="lo-markering" d="M170 106 L172 120 M179 103 L181 119 M221 103 L219 119 M230 106 L228 120" />

      <!-- 3: Symmetriakse -->
      <path class="lo-akse" d="M200 92 L200 214" />

      <!-- Læber -->
      <path class="lo-laebe"
        d="M138 140 C158 129 176 114 191 118 C196 119 198 125 200 125 C202 125 204 119 209 118 C224 114 242 129 262 140 C240 147 220 149 200 148 C180 149 160 147 138 140 Z" />
      <path class="lo-laebe lo-laebe--under"
        d="M138 140 C160 147 180 149 200 148 C220 149 240 147 262 140 C247 166 226 178 200 179 C174 178 153 166 138 140 Z" />
      <!-- 2: Læbekanten fremhævet -->
      <path class="lo-kant"
        d="M138 140 C158 129 176 114 191 118 C196 119 198 125 200 125 C202 125 204 119 209 118 C224 114 242 129 262 140" />
      <path class="lo-linje lo-tynd" d="M138 140 C165 146 235 146 262 140" />

      <!-- 5: Mundvige -->
      <path class="lo-markering" d="M138 140 C133 147 130 153 128 160 M262 140 C267 147 270 153 272 160" />

      <!-- Henvisningslinjer -->
      <path class="lo-henvisning" d="M300 108 L246 128 M100 166 L130 153 M150 98 L170 110" />

      <!-- Numre -->
      <g class="lo-nr"><circle cx="200" cy="164" r="12" /><text x="200" y="168.5">1</text></g>
      <g class="lo-nr"><circle cx="312" cy="104" r="12" /><text x="312" y="108.5">2</text></g>
      <g class="lo-nr"><circle cx="200" cy="226" r="12" /><text x="200" y="230.5">3</text></g>
      <g class="lo-nr"><circle cx="140" cy="92" r="12" /><text x="140" y="96.5">4</text></g>
      <g class="lo-nr"><circle cx="88" cy="172" r="12" /><text x="88" y="176.5">5</text></g>
    </svg>
    <figcaption>De fem områder – numrene svarer til kortene.</figcaption>
  </figure>
</template>

<script setup>
/**
 * Diagram over de fem områder omkring læberne (laebefiller-siden).
 * Numrene svarer til kortene ved siden af. Beskrivelsen ligger i
 * <title>/<desc>, saa skaermlaesere og Google kan laese den.
 */
</script>

<style scoped>
.laebe-omraader {
  align-items: center;
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .06);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 18px 18px 16px;
}

svg {
  display: block;
  height: auto;
  max-width: 340px;
  width: 100%;
}

figcaption {
  color: rgba(21, 54, 85, .78);
  font-size: .85rem;
  margin-top: 8px;
  text-align: center;
}

.lo-linje {
  fill: none;
  stroke: #153655;
  stroke-linecap: round;
  stroke-opacity: .55;
  stroke-width: 2;
}

.lo-tynd { stroke-opacity: .35; stroke-width: 1.5; }

.lo-fyld-moerk { fill: #153655; fill-opacity: .35; }

.lo-laebe {
  fill: rgba(45, 88, 161, .10);
  stroke: #153655;
  stroke-opacity: .5;
  stroke-width: 1.5;
}

.lo-laebe--under { fill: rgba(45, 88, 161, .16); }

.lo-kant {
  fill: none;
  stroke: #2d58a1;
  stroke-dasharray: 5 4;
  stroke-linecap: round;
  stroke-width: 2.5;
}

.lo-markering {
  fill: none;
  stroke: #2d58a1;
  stroke-linecap: round;
  stroke-width: 2.2;
}

.lo-akse {
  stroke: #2d58a1;
  stroke-dasharray: 3 5;
  stroke-opacity: .7;
  stroke-width: 1.5;
}

.lo-henvisning {
  fill: none;
  stroke: #2d58a1;
  stroke-opacity: .55;
  stroke-width: 1.2;
}

.lo-nr circle { fill: #2d58a1; }

.lo-nr text {
  fill: #fff;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  text-anchor: middle;
}
</style>
