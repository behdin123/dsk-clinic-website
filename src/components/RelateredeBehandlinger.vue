<template>
  <section v-if="kort.length" class="relateret" aria-labelledby="relateret-title">
    <h2 id="relateret-title" class="relateret__title">{{ titel }}</h2>

    <ul class="relateret__grid">
      <li v-for="b in kort" :key="b.slug" class="relateret__card">
        <router-link :to="b.path" class="relateret__link">
          <MediaPlaceholder
            :src="b.billede || ''"
            :alt="`${b.navn} hos DK Skønhedsklinik`"
            :motiv="b.billede ? '' : `Billede til ${b.navn}`"
            ratio="4 / 3" />
          <div class="relateret__body">
            <h3 class="relateret__navn">{{ b.navn }}</h3>
            <p class="relateret__kort">{{ b.kort }}</p>
            <p v-if="b.prisTekst" class="relateret__pris">{{ b.prisTekst }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import MediaPlaceholder from './MediaPlaceholder.vue'
import { relateredeFor } from '@/data/behandlinger'

/**
 * "Relaterede behandlinger" nederst paa en behandlingsside.
 * Laeser fra det centrale register, saa krydslinkene opdaterer sig selv,
 * naar nye sider gaar live.
 */
const props = defineProps({
  slug: { type: String, required: true },
  titel: { type: String, default: 'Relaterede behandlinger' },
  antal: { type: Number, default: 3 }
})

const kort = computed(() => relateredeFor(props.slug, props.antal))
</script>

<style lang="scss" scoped>
$c-dark: #153655;
$c-blue: #2d58a1;

.relateret {
  margin-top: 64px;
  padding-top: 40px;
  border-top: 1px solid rgba(21, 54, 85, .12);
}

.relateret__title {
  margin-bottom: 22px;
  color: $c-dark;
}

.relateret__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.relateret__card {
  border: 1px solid rgba(21, 54, 85, .1);
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  transition: border-color .18s ease, transform .18s ease, box-shadow .18s ease;

  &:hover {
    border-color: rgba(45, 88, 161, .32);
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(21, 54, 85, .08);
  }
}

.relateret__link {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;

  &:focus-visible {
    outline: 2px solid $c-blue;
    outline-offset: 2px;
  }
}

.relateret__body { padding: 16px 18px 20px; }

.relateret__navn {
  font-size: 1.05rem;
  margin: 0 0 8px;
  color: $c-blue;
}

.relateret__kort {
  font-size: .9rem;
  line-height: 1.6;
  color: rgba(21, 54, 85, .78);
  margin: 0 0 10px;
}

.relateret__pris {
  font-size: .85rem;
  font-weight: 700;
  color: $c-dark;
  margin: 0;
}

@media (max-width: 900px) {
  .relateret__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .relateret__grid { grid-template-columns: 1fr; gap: 16px; }
  .relateret { margin-top: 44px; padding-top: 30px; }
}
</style>
