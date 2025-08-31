<template>
    <div class="slider-container">
      <div class="slider-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="slide">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <!-- Pagination Dots -->
      <div class="pagination">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></span>
      </div>
      <!-- Navigation Arrows -->
      <button class="nav prev" @click="prevSlide">
        <img src="../assets/icons/arrowup.webp" width="100%" height="auto">
      </button>
      <button class="nav next" @click="nextSlide">
        <img src="../assets/icons/arrowup.webp" width="100%" height="auto">
      </button>
    </div>
  </template>
  



<script setup>

  import { ref, computed, defineProps, onMounted, onUnmounted } from 'vue';

    const props = defineProps({
    images: {
        type: Array,
        required: true,
    },
    });

    // Calculate total slides reactively
    const totalSlides = computed(() => props.images.length);

    // Slider state and functions
    const currentSlide = ref(0);

    const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
    };

    const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
    };

    const goToSlide = (index) => {
    currentSlide.value = index;
    };

    // Automatic slide change interval
    let slideInterval;

    onMounted(() => {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Skift hvert 3. sekund
    });

    onUnmounted(() => {
    clearInterval(slideInterval);
    });

</script>



  
<style scoped>

  .slider-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 1200px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .slider-wrapper {
    display: flex;
    transition: transform 0.6s ease;
  }
  
  .slide {
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slide img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  /* Pagination Dots */
  .pagination {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    width: 100%;
  }
  
  .dot {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .dot.active,
  .dot:hover {
    background-color: #fff;
  }
  
  /* Navigation Arrows */
  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    color: rgba(255, 255, 255, 0.8);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1;
    transition: color 0.3s;
  }
  
  .nav:hover {
    color: #fff;
  }
  
  .prev {
    left: 10px;
    width: 70px;
    transform: rotate(-90deg);
  }

  .prev:hover{
    opacity: 0.5;
  }
  
  .next {
    right: 10px;
    width: 70px;
    transform: rotate(90deg);
  }

  .next:hover{
    opacity: 0.5;
  }
  </style>
  