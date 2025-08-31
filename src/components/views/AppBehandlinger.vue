<template>
  <AppBehandling
    :dark="dark"
    :title="behandlingData.title"
    :imageSrc="behandlingData.imageSrc"
    :description="behandlingData.description"
    :duration="behandlingData.duration"
    :result="behandlingData.result"
    :anesthesia="behandlingData.anesthesia"
    :durability="behandlingData.durability"
    :downtime="behandlingData.downtime"
    :consultation="behandlingData.consultation"
    :price="behandlingData.price"
    :priceText="behandlingData.priceText"
    :price2="behandlingData.price2"
    :priceText2="behandlingData.priceText2"
    :price3="behandlingData.price3"
    :priceText3="behandlingData.priceText3"
  />
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useRoute } from 'vue-router';
import AppBehandling from '../AppBehandling.vue';

import BotoxImage from '@/assets/Carts/Botox.webp';
import FillerImage from '@/assets/Carts/Filler.webp';
import SkinboosterImage from '@/assets/Carts/Skinbooster.webp';
import PRPImage from '@/assets/Carts/PRP.webp';
import MesotherapyImage from '@/assets/Carts/Mesotherapy.webp';
import MicroneedlingImage from '@/assets/Carts/Microneedling.webp';

defineProps({
  dark: Boolean
});

const route = useRoute();

// اطلاعات درمان‌ها
const behandlinger = {
  Botox: {
    title: "Botox behandling",
    imageSrc: BotoxImage,
    description: "Få reduceret rynker og fine linjer med en sikker og effektiv behandling. Perfekt til et naturligt og ungdommeligt look",
    duration: "15 min",
    result: "Efter 14 dage",
    anesthesia: "Ingen",
    durability: "3-6 måneder",
    downtime: "Få timer",
    consultation: "Gratis",
    price: "850",
    priceText: "1 område",
    price2: "1.250",
    priceText2: "2 område",
    price3: "1.550",
    priceText3: "3 område"
  },
  Filler: {
    title: "Filler behandling",
    imageSrc: FillerImage,
    description: "Tilføj volumen og form til dine læber, kinder eller andre områder i ansigtet.",
    duration: "30-45 min",
    result: "Øjeblikkeligt",
    anesthesia: "Bedøvende creme",
    durability: "12 måneder",
    downtime: "1-3 dage",
    consultation: "Gratis",
    price: "1.650",
    priceText: "1 ml"
  },
  Skinbooster: {
    title: "Skinbooster behandling",
    imageSrc: SkinboosterImage,
    description: "Skinbooster forbedrer hudens fugtbalance og elasticitet.",
    duration: "45 min",
    result: "Efter 1-2 uger",
    anesthesia: "Ingen",
    durability: "6-12 måneder",
    downtime: "1-2 dage",
    consultation: "Gratis",
    price: "Fra 1.750",
    priceText: "Kommer an på typen af skinbooster der bruges"
  },
  PRP: {
    title: "PRP behandling",
    imageSrc: PRPImage,
    description: "PRP hjælper med at stimulere kollagen produktionen for en sundere og yngre hud.",
    duration: "45-60 min",
    result: "Efter 1 uge",
    anesthesia: "Ingen",
    durability: "6-12 måneder",
    downtime: "1-2 dage",
    consultation: "Gratis",
    price: "Fra 1.850",
    priceText: ""
  },
  Mesotherapy: {
    title: "Mesotherapy behandling",
    imageSrc: MesotherapyImage,
    description: "Få en dybdegående næring til din hud med en cocktail af vitaminer og antioxidanter. Perfekt til glød og fornyelse",
    duration: "15-60 min",
    result: "Efter 1-2 uger",
    anesthesia: "evt. Lokalbedøvelse",
    durability: "3-12 måneder",
    downtime: "2-3 dage",
    consultation: "Gratis",
    price: "Fra 750",
    priceText: "Bestemmes efter type behandling"
  },
  Microneedling: {
    title: "Microneedling behandling",
    imageSrc: MicroneedlingImage,
    description: "Stimuler hudens naturlige helingsproces og boost kollagenproduktionen. Perfekt til reducering af ar, rynker og pigmentering",
    duration: "20-60 min",
    result: "Efter 1-2 uger",
    anesthesia: "Lokalbedøvelse",
    durability: "6-12 måneder",
    downtime: "1-2 dage",
    consultation: "Gratis",
    price: "Fra 1.050",
    priceText: ""
  }
};

// محاسبه داده‌های درمان انتخاب‌شده
const behandlingData = computed(() => {
  return behandlinger[route.params.type] || behandlinger.Filler;
});
</script>



 


<style lang="scss" scoped>

</style>

