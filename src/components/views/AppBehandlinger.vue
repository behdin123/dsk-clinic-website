<template>
  <AppBehandling :dark="dark" :title="behandlingData.title" :imageSrc="behandlingData.imageSrc"
    :description="behandlingData.description" :duration="behandlingData.duration" :result="behandlingData.result"
    :anesthesia="behandlingData.anesthesia" :durability="behandlingData.durability" :downtime="behandlingData.downtime"
    :consultation="behandlingData.consultation" :price="behandlingData.price" :priceText="behandlingData.priceText"
    :price2="behandlingData.price2" :priceText2="behandlingData.priceText2" :price3="behandlingData.price3"
    :priceText3="behandlingData.priceText3" :faqs="faqs" />
</template>

<script setup>
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
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


// URL مطلق برای OG images
const OG_IMAGES = {
  botox: `${SITE_URL}/og/botox.webp`,
  filler: `${SITE_URL}/og/filler.webp`,
  skinbooster: `${SITE_URL}/og/skinbooster.webp`,
  prp: `${SITE_URL}/og/prp.webp`,
  mesotherapy: `${SITE_URL}/og/mesotherapy.webp`,
  microneedling: `${SITE_URL}/og/microneedling.webp`,
  // fallback
  _default: `${SITE_URL}/og/home.webp`
}
const ogImage = computed(() => OG_IMAGES[currentType.value] || OG_IMAGES._default)

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
const pageDesc = computed(() => (META[currentType.value] || META[FALLBACK]).desc)
const canonical = computed(() => `${SITE_URL}/behandlinger/${currentType.value || FALLBACK}`)

// FAQهای نمونه (می‌توانی برای همه تکمیل کنی)
const FAQ_BANK = {
  botox: [
    { q: 'Hvor længe holder botox?', a: 'Typisk <b>3–4 måneder</b> (nogle gange op til 6). Varighed afhænger af område, muskelstyrke og metabolisme.' },
    { q: 'Hvornår ses effekten af botox?', a: 'De første ændringer ses ofte efter <b>3–5 dage</b>, og <b>fuld effekt</b> ses typisk efter <b>10–14 dage</b>.' },
    { q: 'Gør botox ondt, og bruges bedøvelse?', a: 'De fleste oplever kun let stik. Hos os er der <b>ingen bedøvelse</b> nødvendig ved standardområder.' },
    { q: 'Er der nedetid efter botox?', a: 'Som udgangspunkt <b>ingen reel nedetid</b>. Lette røde prikker kan ses i <b>få timer</b>.' },
    { q: 'Hvad bør jeg undgå efter behandlingen?', a: 'Undgå at gnide området, <b>ingen hård træning i ~24 timer</b> og undgå sauna samme dag.' },
    { q: 'Kan botox bruges forebyggende?', a: 'Ja, regelmæssige behandlinger kan <b>forebygge dybere linjer</b> ved at dæmpe muskelaktiviteten.' },
    { q: 'Hvem bør ikke få botox?', a: 'Gravide/ammande og personer med visse neuromuskulære sygdomme bør <b>undgå</b> behandlingen (aftales med lægen).' },
    { q: 'Hvornår skal jeg til opfølgning?', a: 'Vi vurderer effekten efter <b>~14 dage</b> og kan justere dosen ved behov.' }
  ],

  filler: [
    { q: 'Hvor længe holder hyaluronsyre-filler?', a: 'Typisk <b>6–12 måneder</b> afhængigt af produkt og område; læber kortere, kinder længere.' },
    { q: 'Ses resultatet med det samme?', a: 'Ja, resultatet er <b>øjeblikkeligt</b>, men den endelige form ses efter at hævelsen har lagt sig (få dage).' },
    { q: 'Gør en fillerbehandling ondt?', a: 'Vi anvender <b>bedøvende creme</b> for øget komfort; mange produkter indeholder også lidokain.' },
    { q: 'Kan filler opløses, hvis jeg fortryder?', a: 'Ja, hyaluronsyre-filler kan <b>opløses med hyaluronidase</b> af en læge/erfaren behandler.' },
    { q: 'Nedetid og bivirkninger?', a: 'Let hævelse og blå mærker i <b>1–3 dage</b> er almindeligt. Undgå hård træning og sauna det første døgn.' },
    { q: 'Er filler sikker?', a: 'Udført af erfaren læge er risikoen lav. Sjældne komplikationer (fx karpåvirkning) håndteres akut efter protokol.' },
    { q: 'Hvem bør undgå filler?', a: 'Graviditet/amning, aktiv infektion i området eller kendt allergi over for indholdsstoffer.' }
  ],

  skinbooster: [
    { q: 'Hvad er en skinbooster?', a: 'En tynd <b>hyaluronsyre</b>, der injiceres for at <b>fugte, udglatte og øge elasticiteten</b>—ikke for volumen.' },
    { q: 'Hvor mange behandlinger anbefales?', a: 'Ofte et forløb på <b>2–3 sessioner</b> med 2–4 ugers mellemrum, derefter vedligehold.' },
    { q: 'Hvornår ses resultatet?', a: 'Forbedringer i glød og fugt ses typisk efter <b>1–2 uger</b> og tiltager over nogle uger.' },
    { q: 'Hvor længe holder effekten?', a: 'Som regel <b>6–12 måneder</b>, afhængigt af hudtilstand og produkt.' },
    { q: 'Nedetid og ubehag?', a: 'Små papler/rødme i <b>1–2 dage</b> er normalt. <b>Ingen bedøvelse</b> nødvendig for de fleste.' },
    { q: 'Passer skinbooster til alle hudtyper?', a: 'Ja, særligt ved <b>tør/mat hud</b> eller fine linjer. Vi tilpasser produktvalg til hudtype.' }
  ],

  prp: [
    { q: 'Hvad er PRP?', a: 'PRP (platelet-rich plasma) er <b>dit eget blodplasma</b> koncentreret og injiceret for at stimulere <b>kollagen og heling</b>.' },
    { q: 'Hvor mange PRP-behandlinger skal jeg have?', a: 'Et typisk forløb er <b>3–4 sessioner</b> med 4–6 uger imellem, herefter årlig vedligehold.' },
    { q: 'Hvornår ses resultater?', a: 'Ofte efter <b>1–2 uger</b> for hudglød; gradvise forbedringer over uger-måneder.' },
    { q: 'Hvor længe holder PRP?', a: 'Resultater kan vare <b>6–12 måneder</b> afhængigt af område og livsstil.' },
    { q: 'Er der nedetid?', a: 'Let rødme/hævelse i <b>1–2 dage</b> er normalt. Ingen bedøvelse nødvendig for de fleste.' },
    { q: 'Er PRP sikkert?', a: 'Da det er <b>autologt</b> (dit eget blod), er allergirisikoen meget lav. Blå mærker kan forekomme kortvarigt.' }
  ],

  mesotherapy: [
    { q: 'Hvad er mesotherapy?', a: 'Mikroinjektioner af <b>vitaminer/antioxidanter</b> til overfladisk hudlag for glød og hydrering.' },
    { q: 'Hvor mange sessioner anbefales?', a: 'Ofte <b>3–6 behandlinger</b> med 1–2 ugers mellemrum, derefter vedligehold hver 2.–3. måned.' },
    { q: 'Hvornår ser jeg effekt?', a: 'Let forbedring i glød kan ses hurtigt, <b>1–2 uger</b> giver mere synlig forandring.' },
    { q: 'Hvor længe holder det?', a: 'Typisk <b>3–12 måneder</b> afhængigt af protokol og hudtilstand.' },
    { q: 'Nedetid og bivirkninger?', a: 'Små prikmærker/rødme og eventuelle blå mærker i <b>2–3 dage</b>. Evt. lokalbedøvelse ved behov.' },
    { q: 'Hvem egner sig?', a: 'Velegnet ved <b>mat/tør hud</b> og fine linjer. Ikke ved aktiv infektion i området.' }
  ],

  microneedling: [
    { q: 'Hvad hjælper microneedling på?', a: '<b>Akne-ar</b>, fine linjer, porer og ujævn tekstur via kontrollerede mikrokanaler og kollagenstimulering.' },
    { q: 'Hvor mange behandlinger behøver jeg?', a: 'Ofte <b>3–6 sessioner</b> med 4–6 uger imellem afhængigt af mål og hudtilstand.' },
    { q: 'Hvornår ses resultater?', a: 'Hudkvaliteten bedres gradvist; tydelig effekt ses ofte efter <b>4–6 uger</b> og forbedres videre måneder frem.' },
    { q: 'Er der nedetid?', a: 'Rødme som solskoldning i <b>1–2 dage</b>, let afskalning kan forekomme. Brug <b>solbeskyttelse</b>.' },
    { q: 'Gør microneedling ondt?', a: 'Vi anvender <b>lokalbedøvende creme</b>, så ubehaget er som regel mildt til moderat.' },
    { q: 'Hvad skal jeg undgå efter behandlingen?', a: 'Undgå makeup, sauna og hård træning det første døgn. Brug skånsom rens og <b>SPF 30+</b> i dagene efter.' }
  ]
}
const faqs = computed(() => FAQ_BANK[currentType.value] || FAQ_BANK[FALLBACK])



// JSON-LD ها
const BOOKING_URL = 'https://dsklinik.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=64c857a01938e8ee26f9d9f8fca49125b10711&bId=10711&dTpl=1&sSToken=7147f9ee6e0f4459509dbaca658244d6'
 const procedureLd = computed(() => {
   const d = behandlingData.value
   return {
     '@context': 'https://schema.org',
     '@type': 'MedicalProcedure',
     name: d.title,
     description: d.description,
     url: canonical.value,
     provider: { '@type': 'MedicalClinic', name: 'DK Skønhedsklinik', url: SITE_URL },
     areaServed: 'Esbjerg, Vejle, Danmark',
     potentialAction: {
       '@type': 'ReserveAction',
       target: BOOKING_URL
     }
   }
 })



const faqLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.value.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: Array.isArray(item.a) ? item.a.join('\n\n') : item.a
    }
  }))
}))

const hasFaq = computed(() => !!FAQ_BANK[currentType.value])



const breadcrumbLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: behandlingData.value.title, item: canonical.value }
  ]
}))

// head داینامیک (تابع می‌دهیم تا با تغییر route آپدیت شود)
useHead(() => {
  const title = pageTitle.value
  const desc = pageDesc.value
  const url = canonical.value
  const img = ogImage.value

  const meta = [
    { name: 'description', content: desc },
    { name: 'robots', content: 'index, follow' },

    // Open Graph
    { property: 'og:type', content: 'article' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc },
    { property: 'og:url', content: url },
    { property: 'og:image', content: img },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },
    { property: 'og:image:alt', content: behandlingData.value.title },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: desc },
    { name: 'twitter:image', content: img }
  ]

  const scripts = [
    { type: 'application/ld+json', children: JSON.stringify(procedureLd.value) },
    { type: 'application/ld+json', children: JSON.stringify(breadcrumbLd.value) }
  ]
  if (hasFaq.value) {
    scripts.push({ type: 'application/ld+json', children: JSON.stringify(faqLd.value) })
  }

  return {
    title,
    meta,
    link: [{ rel: 'canonical', href: url }],
    script: scripts
  }
})
</script>






<style lang="scss" scoped></style>
