<template>
  <figure class="media" :class="{ 'is-placeholder': !src, 'is-rounded': rounded }" :style="{ aspectRatio: ratio }">
    <img v-if="src" :src="src" :alt="alt" :width="width" :height="height"
      loading="lazy" decoding="async" class="media__img" />

    <div v-else class="media__ph" role="img" :aria-label="alt">
      <svg class="media__glyph" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <rect x="6" y="11" width="36" height="26" rx="3" fill="none" stroke="currentColor" stroke-width="1.6" />
        <circle cx="17" cy="20" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6" />
        <path d="M9 33l9.5-9.5a2.5 2.5 0 013.6 0L30 31l3.4-3.4a2.5 2.5 0 013.6 0L42 32"
          fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <figcaption v-if="motiv" class="media__note">{{ motiv }}</figcaption>
    </div>
  </figure>
</template>

<script setup>
/**
 * Billedplads der ser faerdig ud, foer billedet findes.
 *
 * Uden `src` vises et designet felt i brandfarverne med en note om,
 * hvad billedet skal vise. Naar det rigtige billede er klar, tilfoejes
 * `src` – og intet andet skal aendres. Hoejden er laast af `ratio`,
 * saa layoutet ikke hopper (CLS).
 */
defineProps({
  /** Det rigtige billede. Udelades indtil det findes. */
  src: { type: String, default: '' },
  /** Beskriver hvad man ser – paa dansk, ikke en soegeordsliste. Altid paakraevet. */
  alt: { type: String, required: true },
  /** Billedformat, fx '16/9', '4/3', '1/1'. */
  ratio: { type: String, default: '16 / 9' },
  /** Note om motivet. Vises kun saa laenge billedet mangler. */
  motiv: { type: String, default: '' },
  width: { type: [String, Number], default: undefined },
  height: { type: [String, Number], default: undefined },
  rounded: { type: Boolean, default: true }
})
</script>

<style lang="scss" scoped>
$c-dark: #153655;
$c-blue: #2d58a1;

.media {
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  overflow: hidden;
  background: rgba(45, 88, 161, .04);

  &.is-rounded { border-radius: 14px; }
}

.media__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.media__ph {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  text-align: center;
  color: rgba(45, 88, 161, .5);
  background:
    linear-gradient(135deg, rgba(45, 88, 161, .07) 0%, rgba(45, 88, 161, .02) 55%, rgba(21, 54, 85, .06) 100%);
  border: 1px solid rgba(45, 88, 161, .14);
  border-radius: inherit;
}

.media__glyph {
  width: 44px;
  height: 44px;
  flex: none;
  opacity: .75;
}

.media__note {
  font-size: .82rem;
  line-height: 1.5;
  max-width: 34ch;
  color: rgba(21, 54, 85, .78);
}

@media (max-width: 600px) {
  .media__glyph { width: 34px; height: 34px; }
  .media__note { font-size: .76rem; }
}
</style>
