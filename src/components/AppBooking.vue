<template>
  <!-- Book-knap -->
  <button class="general_button" @click="handleBookingClick">
    Book nu
  </button>

  <!-- Modal med iframe -->
  <div v-if="showModal" class="custom-modal" @click.self="showModal = false">
    <div class="custom-modal-content">
      <span class="close-btn" @click="showModal = false">&times;</span>
      <iframe
        src="https://dksknhedsklinik.app4.geckobooking.dk/site/index.php?icCode=64c857a01938e8ee26f9d9f8fca49125b10711&dTpl=1"
        width="100%"
        height="300"
        frameborder="0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const fbq = window.fbq;

import { ref, watch } from 'vue'

const showModal = ref(false)

function handleBookingClick() {
  showModal.value = true
  if (fbq) {
    fbq('track', 'Lead')
  }
}

watch(showModal, (value) => {
  window.dispatchEvent(new CustomEvent('toggle-nav', { detail: value }))
})
</script>



<style>


.general_button {
  width: 250px !important;
  font-size: 14px;
  font-weight: bold;
  background-color: #2d58a1;
  color: white;
  padding: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}


.hide-nav {
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s ease;
  /* هر z-index قبلی را بی‌اثر می‌کند */
  z-index: 0 !important;
}

.general_button:hover {
  background-color: #1e4070;
}

.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000 !important;
}

.custom-modal-content {
  background: white;
  padding: 20px;
  width: 90%;
  max-width: 900px;
  height: 90%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>


