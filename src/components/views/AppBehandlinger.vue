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
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import AppBehandling from '../AppBehandling.vue'

import BotoxImage from '@/assets/Carts/Botox.webp'
import FillerImage from '@/assets/Carts/Filler.webp'
import SkinboosterImage from '@/assets/Carts/Skinbooster.webp'
import PRPImage from '@/assets/Carts/PRP.webp'
import MesotherapyImage from '@/assets/Carts/Mesotherapy.webp'
import MicroneedlingImage from '@/assets/Carts/Microneedling.webp'

const props = defineProps({
  dark: { type: Boolean, required: false },
  type: { type: String, required: false }
})

// دامنه؛ اگر ENV تنظیم نکردی، همین fallback خوبه
const SITE_URL =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) ||
  (typeof process !== 'undefined' && process.env && process.env.VUE_APP_SITE_URL) ||
  'https://dsklinik.dk'

const FALLBACK = 'filler'
const currentType = computed(() => (props.type || '').toLowerCase())

// داده‌ها با کلید lowercase تا با روتر هم‌خوان باشد
const behandlinger = {
  botox: {
    title: 'Botox behandling',
    imageSrc: BotoxImage,
    description: 'Få reduceret rynker og fine linjer med en sikker og effektiv behandling. Perfekt til et naturligt og ungdommeligt look',
    duration: '15 min',
    result: 'Efter 14 dage',
    anesthesia: 'Ingen',
    durability: '3-6 måneder',
    downtime: 'Få timer',
    consultation: 'Gratis',
    price: '850',
    priceText: '1 område',
    price2: '1.250',
    priceText2: '2 område',
    price3: '1.550',
    priceText3: '3 område'
  },
  filler: {
    title: 'Filler behandling',
    imageSrc: FillerImage,
    description: 'Tilføj volumen og form til dine læber, kinder eller andre områder i ansigtet.',
    duration: '30-45 min',
    result: 'Øjeblikkeligt',
    anesthesia: 'Bedøvende creme',
    durability: '12 måneder',
    downtime: '1-3 dage',
    consultation: 'Gratis',
    price: '1.650',
    priceText: '1 ml'
  },
  skinbooster: {
    title: 'Skinbooster behandling',
    imageSrc: SkinboosterImage,
    description: 'Skinbooster forbedrer hudens fugtbalance og elasticitet.',
    duration: '45 min',
    result: 'Efter 1-2 uger',
    anesthesia: 'Ingen',
    durability: '6-12 måneder',
    downtime: '1-2 dage',
    consultation: 'Gratis',
    price: 'Fra 1.750',
    priceText: 'Kommer an på typen af skinbooster der bruges'
  },
  prp: {
    title: 'PRP behandling',
    imageSrc: PRPImage,
    description: 'PRP hjælper med at stimulere kollagen produktionen for en sundere og yngre hud.',
    duration: '45-60 min',
    result: 'Efter 1 uge',
    anesthesia: 'Ingen',
    durability: '6-12 måneder',
    downtime: '1-2 dage',
    consultation: 'Gratis',
    price: 'Fra 1.850',
    priceText: ''
  },
  mesotherapy: {
    title: 'Mesotherapy behandling',
    imageSrc: MesotherapyImage,
    description: 'Få en dybdegående næring til din hud med en cocktail af vitaminer og antioxidanter. Perfekt til glød og fornyelse',
    duration: '15-60 min',
    result: 'Efter 1-2 uger',
    anesthesia: 'evt. Lokalbedøvelse',
    durability: '3-12 måneder',
    downtime: '2-3 dage',
    consultation: 'Gratis',
    price: 'Fra 750',
    priceText: 'Bestemmes efter type behandling'
  },
  microneedling: {
    title: 'Microneedling behandling',
    imageSrc: MicroneedlingImage,
    description: 'Stimuler hudens naturlige helingsproces og boost kollagenproduktionen. Perfekt til reducering af ar, rynker og pigmentering',
    duration: '20-60 min',
    result: 'Efter 1-2 uger',
    anesthesia: 'Lokalbedøvelse',
    durability: '6-12 måneder',
    downtime: '1-2 dage',
    consultation: 'Gratis',
    price: 'Fra 1.050',
    priceText: ''
  }
}

const behandlingData = computed(() => behandlinger[currentType.value] || behandlinger[FALLBACK])

// متاهای اختصاصی هر درمان
const META = {
  botox: {
    title: 'Botox i Esbjerg & Vejle | DK Skønhedsklinik (lægebehandlet)',
    desc: 'Reducer rynker med botox udført af erfaren læge. Naturlige resultater. Book gratis forundersøgelse.'
  },
  filler: {
    title: 'Filler i Esbjerg & Vejle | Lægebehandlet | DK Skønhedsklinik',
    desc: 'Læbe/kind-filler med naturlige resultater. Udført af erfaren læge. Book gratis forundersøgelse.'
  },
  skinbooster: {
    title: 'Skinbooster i Esbjerg & Vejle | DK Skønhedsklinik',
    desc: 'Forbedrer fugt og elasticitet i huden. Book gratis forundersøgelse.'
  },
  prp: {
    title: 'PRP i Esbjerg & Vejle | DK Skønhedsklinik',
    desc: 'Hudforyngelse og hårvækst med PRP. Book gratis forundersøgelse.'
  },
  mesotherapy: {
    title: 'Mesotherapy i Esbjerg & Vejle | DK Skønhedsklinik',
    desc: 'Vitamincocktail for glød og fornyelse. Book gratis forundersøgelse.'
  },
  microneedling: {
    title: 'Microneedling i Esbjerg & Vejle | DK Skønhedsklinik',
    desc: 'Reducer ar, rynker og pigment. Book gratis forundersøgelse.'
  }
}

const pageTitle = computed(() => (META[currentType.value] || META[FALLBACK]).title)
const pageDesc  = computed(() => (META[currentType.value] || META[FALLBACK]).desc)
const canonical = computed(() => `${SITE_URL}/behandlinger/${currentType.value || FALLBACK}`)

// FAQهای نمونه (می‌توانی برای همه تکمیل کنی)
const FAQ_BANK = {
  botox: [
    { q: 'Hvor længe holder botox?', a: 'Typisk 3–6 måneder afhængigt af område og metabolisme.' },
    { q: 'Hvornår ses effekten?', a: 'Den fulde effekt ses efter ca. 10–14 dage.' }
  ],
  filler: [
    { q: 'Hvor længe holder filler?', a: 'Ca. 6–12 måneder afhængigt af produkt og område.' },
    { q: 'Gør det ondt?', a: 'Vi bruger bedøvende creme for øget komfort.' }
  ]
}
const faqs = computed(() => FAQ_BANK[currentType.value] || FAQ_BANK[FALLBACK])

// JSON-LD ها
const procedureLd = computed(() => {
  const d = behandlingData.value
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: d.title,
    description: d.description,
    url: canonical.value,
    provider: { '@type': 'MedicalBusiness', name: 'DK Skønhedsklinik', url: SITE_URL },
    areaServed: 'Esbjerg, Vejle, Danmark'
  }
  const priceNumeric = (d.price || '').replace(/[^\d]/g, '')
  if (priceNumeric) ld.offers = { '@type': 'Offer', priceCurrency: 'DKK', price: priceNumeric }
  return ld
})

const faqLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.value.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }))
}))

const breadcrumbLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Behandlinger', item: `${SITE_URL}/behandlinger` },
    { '@type': 'ListItem', position: 2, name: behandlingData.value.title, item: canonical.value }
  ]
}))

// head داینامیک (تابع می‌دهیم تا با تغییر route آپدیت شود)
useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDesc.value },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: pageTitle.value },
    { property: 'og:description', content: pageDesc.value },
    { property: 'og:url', content: canonical.value },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: canonical.value }],
  script: [
    { type: 'application/ld+json', children: JSON.stringify(procedureLd.value) },
    { type: 'application/ld+json', children: JSON.stringify(breadcrumbLd.value) },
    { type: 'application/ld+json', children: JSON.stringify(faqLd.value) }
  ]
}))
</script>



 


<style lang="scss" scoped>

</style>

