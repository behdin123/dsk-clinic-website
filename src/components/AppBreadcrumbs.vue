<template>
  <nav class="crumbs" aria-label="Brødkrumme">
    <ol class="crumbs__list">
      <li v-for="(trin, i) in sti" :key="trin.path" class="crumbs__item">
        <router-link v-if="i < sti.length - 1" :to="trin.path" class="crumbs__link">{{ trin.navn }}</router-link>
        <span v-else class="crumbs__current" aria-current="page">{{ trin.navn }}</span>
        <span v-if="i < sti.length - 1" class="crumbs__sep" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
/**
 * Synlige broedkrummer. Stien kommer fra broedkrummerFor() i
 * src/data/behandlinger.js, saa den synlige sti og BreadcrumbList-schemaet
 * altid bygger paa det samme og ikke kan komme til at afvige.
 */
defineProps({
  sti: {
    type: Array,
    required: true,
    validator: v => v.every(t => t && t.navn && t.path)
  }
})
</script>

<style lang="scss" scoped>
$c-dark: #153655;
$c-blue: #2d58a1;

.crumbs { margin-bottom: 18px; }

.crumbs__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: .85rem;
}

.crumbs__item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.crumbs__link {
  color: rgba(21, 54, 85, .78);
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: $c-blue;
    text-decoration: underline;
  }
}

.crumbs__current {
  color: $c-dark;
  font-weight: 600;
}

.crumbs__sep {
  color: rgba(21, 54, 85, .3);
}

@media (max-width: 600px) {
  .crumbs__list { font-size: .78rem; }
}
</style>
