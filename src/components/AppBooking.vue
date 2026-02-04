<template>
  <!-- Book-knap -->
  <button v-if="props.showButton" class="general_button" @click="handleBookingClick">
    Book nu
  </button>

  <!-- Modal med iframe -->
  <div v-if="showModal" class="custom-modal" role="dialog" aria-modal="true" aria-label="Booking"
    @click.self="showModal = false">
    <div class="custom-modal-content">
      <span type="button" class="close-btn" aria-label="Luk" @click="showModal = false">&times;</span>
      <iframe
        src="https://dsklinik.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=64c857a01938e8ee26f9d9f8fca49125b10711&bId=10711&dTpl=1&sSToken=7147f9ee6e0f4459509dbaca658244d6"
        width="100%" height="300" frameborder="0" allowfullscreen loading="lazy"></iframe>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const fbq = window.fbq;

import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  showButton: { type: Boolean, default: true }
})

const showModal = ref(false)

function handleBookingClick() {
  showModal.value = true
  if (fbq) {
    fbq('track', 'Lead')
  }
  // GA4
  window.gtagEvent('booking_click', {
    placement: 'home_hero',   // اگر جای دیگری هم داری، مقدارش را متناسب بفرست
    component: 'AppBooking'
  })
}

// 🔔 لیسنر برای باز کردن مودال از هرجای سایت (مثلاً CTA منوی موبایل)
const openFromEvent = () => {
  if (showModal.value) return
  showModal.value = true
  window.gtagEvent?.('booking_modal_open', { component: 'AppBooking', source: 'nav_cta' })
}

// (اختیاری) اگر جایی خواستی مودال را با ایونت ببندی
const closeFromEvent = () => { showModal.value = false }

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('open-booking', openFromEvent)
    window.addEventListener('close-booking', closeFromEvent)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('open-booking', openFromEvent)
    window.removeEventListener('close-booking', closeFromEvent)
  }
})

watch(showModal, (open) => {
  window.dispatchEvent(new CustomEvent('toggle-nav', { detail: open }))
  window.gtagEvent(open ? 'booking_modal_open' : 'booking_modal_close', {
    component: 'AppBooking'
  })
})
</script>



<style>
.general_button {
  width: auto !important;
  font-size: 16px;
  font-weight: bold;
  background-color: #2d58a1;
  color: white !important;
  padding: 20px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
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
  padding: 25px;
  width: 90%;
  max-width: 900px;
  height: 90%;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}

.close-btn {
  position: absolute;
  top: 0px;
  right: 10px;
  font-size: 30px;
  cursor: pointer;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
