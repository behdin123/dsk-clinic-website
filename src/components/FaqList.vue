<template>
  <div class="faq-list">
    <div v-for="(item, i) in items" :key="i" class="faq-item" :class="{ 'is-open': aaben === i }">
      <h3 class="faq-h">
        <button
          class="faq-q"
          type="button"
          :aria-expanded="aaben === i ? 'true' : 'false'"
          :aria-controls="`${uid}-svar-${i}`"
          @click="skift(i)">
          <span class="faq-q__tekst" v-html="item.q"></span>
          <span class="faq-q__ikon" aria-hidden="true">
            <svg viewBox="0 0 20 20" focusable="false">
              <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>
      </h3>

      <div :id="`${uid}-svar-${i}`" class="faq-svar" role="region">
        <div class="faq-a">
          <p v-for="(afsnit, j) in tilAfsnit(item.a)" :key="j" v-html="afsnit"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, useId } from 'vue'

/**
 * Faelles FAQ for hele sitet.
 *
 * Bygget som knap + omraade i stedet for <details>, fordi <details> ikke kan
 * animere hoejden paalideligt paa tvaers af browsere. Svaret ligger altid i
 * DOM'en - kun sammenfoldet - saa Google laeser det uanset tilstand.
 *
 * Animationen bruger grid-template-rows 0fr -> 1fr, som er den teknik der
 * giver en blød hoejdeovergang uden at kende indholdets hoejde paa forhaand.
 */
defineProps({
  items: {
    type: Array,
    required: true,
    validator: v => v.every(i => i && i.q && i.a)
  }
})

// Ét aabent spoergsmaal ad gangen – roligere at laese end en harmonika,
// der folder sig ud i alle retninger.
const aaben = ref(-1)
const skift = i => { aaben.value = aaben.value === i ? -1 : i }

// useId() giver samme vaerdi paa server og klient. Math.random() gjorde ikke,
// og den forskel fik Vue til at opgive hydreringen - saa blev knapperne
// aldrig koblet til, og der skete intet ved klik.
const uid = useId()

const tilAfsnit = a => (Array.isArray(a) ? a : [a])
</script>

<style lang="scss" scoped>
$c-dark: #153655;
$c-blue: #2d58a1;

.faq-list {
  max-width: 1200px;
  margin: 0 auto;
}

.faq-item {
  background: rgba(0, 0, 0, .05);
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: background .25s ease;

  &.is-open { background: rgba(45, 88, 161, .08); }
}

.faq-h {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

.faq-q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 20px 18px;
  border: 0;
  background: none;
  font: inherit;
  font-weight: 500;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid $c-blue;
    outline-offset: -2px;
    border-radius: 8px;
  }
}

.faq-q__tekst { flex: 1 1 auto; }

.faq-q__ikon {
  flex: 0 0 auto;
  display: inline-flex;
  width: 22px;
  height: 22px;
  color: $c-blue;
  transition: transform .32s cubic-bezier(.4, 0, .2, 1);

  svg { width: 100%; height: 100%; }
}

.faq-item.is-open .faq-q__ikon { transform: rotate(-180deg); }

/* Hoejdeanimationen: 0fr -> 1fr folder indholdet blødt ud og ind */
.faq-svar {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .32s cubic-bezier(.4, 0, .2, 1);
}

.faq-item.is-open .faq-svar { grid-template-rows: 1fr; }

.faq-a {
  overflow: hidden;
  min-height: 0;
  padding: 0 18px;
  line-height: 1.6;
  opacity: 0;
  transition: opacity .22s ease .04s;

  p { margin: 0 0 12px; }
  p:last-child { margin-bottom: 0; }
  a { color: $c-blue; text-decoration: underline; }
}

.faq-item.is-open .faq-a {
  opacity: 1;
  padding-bottom: 18px;
}

@media (prefers-reduced-motion: reduce) {
  .faq-svar,
  .faq-q__ikon,
  .faq-a { transition: none; }
}

@media (max-width: 600px) {
  .faq-q { padding: 16px 14px; }
  .faq-a { padding: 0 14px; }
  .faq-item.is-open .faq-a { padding-bottom: 14px; }
}
</style>
