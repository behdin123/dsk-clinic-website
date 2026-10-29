<template>

  <!-- Main behandling section -->
  <div id="Main">
    <div id="Art-works-dark-version-image" class="bg-img img">
      <div class="media_and_content">
        <div>
          <div class="media_wrap">
            <div class="video_padding"></div>
            <div class="img_wrap">
              <img width="1105" height="622" :src="imageSrc" :alt="`${title} – behandling hos DK Skønhedsklinik`"
                decoding="async" fetchpriority="high">
            </div>
          </div>
          <section class="article_wrapper">
            <article class="content">
              <header>
                <h1>{{ h1Tekst }}</h1>
              </header>
              <div class="entry_content_wrap">
                <div class="entry_content clear">
                  <p>{{ description }}</p>
                </div>
              </div>
              <div class="options_prices">
                <ul class="options">
                  <div>
                    <li class="heart_rate"><span class="label"> <img src="../assets/Behandlingstid.webp" alt=""
                          aria-hidden="true">
                        Behandlingstid<span>:</span></span> {{ duration }}</li>
                    <li class="person_dolly"><span class="label"> <img src="../assets/Resultat.webp" alt=""
                          aria-hidden="true">Resultat<span>:</span></span> {{ result }}</li>
                    <li class="syringe"><span class="label"> <img src="../assets/Bedøvelse.webp" alt=""
                          aria-hidden="true">
                        Bedøvelse<span>:</span></span> {{ anesthesia }}</li>
                  </div>
                  <div>
                    <li class="clipboard_list_check"><span class="label"> <img src="../assets/Holdbarhed.webp" alt=""
                          aria-hidden="true">Holdbarhed<span>: </span> </span> {{ durability }}</li>
                    <li class="alarm_clock"><span class="label"> <img src="../assets/Nedetid.webp" alt=""
                          aria-hidden="true"> Nedetid /
                        Opheling<span>:</span> </span> {{ downtime }}</li>
                    <li class="people_arrows"><span class="label"> <img src="../assets/Konsultation.webp" alt=""
                          aria-hidden="true">
                        Konsultation<span>:</span></span> {{ consultation }}</li>
                  </div>
                </ul>
                <div class="prices">
                  <div class="from_price"
                    :style="{ width: (priceTextWordCount > 3 || priceTextWordCount === 0) ? '70%' : '33%' }">
                    <h6>{{ priceText }}</h6>
                    <div class="price"><span data-price="2500">{{ price }}</span> kr.</div>
                  </div>
                  <div class="from_price">
                    <h6>{{ priceText2 }}</h6>
                    <div class="price"><span data-price="2500">{{ price2 }}</span> {{ priceText2 ? 'kr.' : '' }}</div>
                  </div>
                  <div class="from_price">
                    <h6>{{ priceText3 }}</h6>
                    <div class="price"><span data-price="2500">{{ price3 }}</span> {{ priceText3 ? 'kr.' : '' }}</div>
                  </div>
                </div>
              </div>
              <div class="buttons">
                <AppBooking />
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>

  </div>

  <div class="Behandling-content-main">
  <!-- 1) Audience -->
  <section v-if="sections.audience" id="audience" class="slice">
    <div class="slice-inner">
      <div class="slice-media audience-media">
        <img :src="getAsset('audience')" :alt="sectionAlt('audience')" loading="lazy" decoding="async" />
      </div>
      <div class="slice-body audience-body">
        <h2 class="slice-title icon-target">Hvem er {{ title }} til?</h2>

        <!-- جمله‌ی مقدمه (از span.intro) -->
        <div v-if="audienceIntro" class="audience-intro" v-html="audienceIntro"></div>

        <!-- بولت‌های عادی -->
        <ul class="bullet">
          <li v-for="(item, i) in audienceBullets" :key="'a-' + i">
            <span class="li-text" v-html="item"></span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 2) Expectations -->
  <section v-if="sections.expectations" id="expectations" class="slice alt">
    <div class="slice-inner row-reverse">
      <div class="slice-media expectations-media">
        <img :src="getAsset('expectations')" :alt="sectionAlt('expectations')" loading="lazy" decoding="async" />
      </div>
      <div class="slice-body resultater-body">
        <h2 class="slice-title icon-star">{{ title }} <br> resultater & forventninger</h2>
        <p v-if="sections.expectations.summary" v-html="sections.expectations.summary" />
        <ul class="kv">
          <li v-if="sections.expectations.visibleAfter"><b>Synlig effekt:</b> {{ sections.expectations.visibleAfter }}
          </li>
          <li v-if="sections.expectations.durability"><b>Holdbarhed:</b> {{ sections.expectations.durability }}</li>
          <li v-if="sections.expectations.sessions"><b>Antal sessioner:</b> {{ sections.expectations.sessions }}</li>
        </ul>
        <div class="buttons">
          <AppBooking />
        </div>
      </div>

    </div>
  </section>

  <!-- 3) Steps -->
  <section v-if="steps3.length" id="steps" class="slice forloeb" aria-labelledby="forloeb-titel">
    <div class="slice-inner">
      <div class="sec__head">
        <p class="sec__eyebrow">Forløb</p>
        <h2 id="forloeb-titel">Sådan foregår {{ title }}</h2>
      </div>

      <ol class="forloeb__liste">
        <li v-for="(s, i) in steps3" :key="'s-' + i" class="forloeb__trin">
          <span class="forloeb__nr" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="forloeb__titel">{{ s.title }}</h3>
          <p class="forloeb__tekst" v-html="s.text"></p>
        </li>
      </ol>
    </div>
  </section>

  <!-- 4) Safety -->
  <section v-if="sections.safety" id="safety" class="slice alt">
    <div class="slice-inner">
      <div class="slice-media safety-media">
        <img :src="getAsset('safety')" :alt="sectionAlt('safety')" loading="lazy" decoding="async" />
      </div>
      <div class="slice-body section-safety-body">
        <h2 class="slice-title icon-shield section-safety">Sikkerhed & kontraindikationer</h2>
        <div class="section-safety-intro">
          <b>{{ title }}: </b>
          <p v-if="sections.safety.note" class="muted" v-html="sections.safety.note" />
        </div>
        <div class="two-cols">
          <div v-if="sections.safety.contraindications?.length">
            <h3>Kontraindikationer</h3>
            <ul class="bullet">
              <li v-for="(c, i) in sections.safety.contraindications" :key="'c-' + i" v-html="c" />
            </ul>
          </div>
          <div v-if="sections.safety.sideEffects?.length">
            <h3>Kendte bivirkninger</h3>
            <ul class="bullet">
              <li v-for="(se, i) in sections.safety.sideEffects" :key="'se-' + i" v-html="se" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5) Aftercare -->
  <section v-if="sections.aftercare?.length" id="aftercare" class="slice efter" aria-labelledby="efter-titel">
    <div class="slice-inner">
      <div class="efter__panel">
        <div class="sec__head">
          <p class="sec__eyebrow">Efter behandlingen</p>
          <h2 id="efter-titel">Efterbehandling for {{ title }}</h2>
          <p class="sec__lead">Gode råd de første 24–48 timer for et pænt og trygt resultat.</p>
        </div>

        <ul class="efter__liste" :class="{ 'efter__liste--par': sections.aftercare.length % 2 === 0 && sections.aftercare.length < 6 }">
          <li v-for="(a, i) in decorateAftercare(sections.aftercare)" :key="'af-' + i" class="efter__raad">
            <span class="efter__ikon" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3.5 8.5l3 3 6-7" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </span>
            <span class="efter__tekst" v-html="a"></span>
          </li>
        </ul>

        <p v-if="sections.aftercareNote" class="efter__note" v-html="sections.aftercareNote" />
      </div>
    </div>
  </section>


  <!-- 6) Combinations -->
  <section v-if="sections.combinations?.length" id="combinations" class="slice alt">
    <div class="slice-inner row-reverse">
      <div class="slice-media">
        <img :src="getAsset('combinations')" :alt="sectionAlt('combinations')" loading="lazy" decoding="async" />
      </div>
      <div class="slice-body">
        <h2 class="slice-title icon-puzzle">Kombinationer med <br> {{ title }}</h2>

        <ul class="bullet">
          <li v-for="(item, i) in normalizedCombinations" :key="'k-' + i">
            <!-- فلش/استایل شما اینجا از قبل روی li هست -->
            <template v-if="item.refs?.length">
              <template v-for="(r, idx) in item.refs" :key="r.ref">
                <RouterLink :to="`/behandlinger/${r.ref}/`" class="inline-link"><b>{{ r.label || titleFor(r.ref) }}</b>
                </RouterLink>
                <span v-if="idx < item.refs.length - 1"> / </span>
              </template>
              <span v-if="item.text">&nbsp;{{ item.text }}</span>
            </template>

            <template v-else>
              <template v-if="item.ref">
                <RouterLink :to="`/behandlinger/${item.ref}/`" class="inline-link"><b>{{ item.label || titleFor(item.ref)
                    }}</b></RouterLink>
                <span v-if="item.text">&nbsp;{{ item.text }}</span>
              </template>

              <!-- سازگاری با داده‌های قدیمی رشته‌ای -->
              <span v-else v-html="item.__raw"></span>
            </template>
          </li>
        </ul>
        <div class="buttons">
          <AppBooking />
        </div>
      </div>
    </div>
  </section>

  <!-- 7) Pricing -->
  <section v-if="sections.pricing" id="pricing" class="slice pris" aria-labelledby="pris-titel">
    <div class="slice-inner">
      <div class="pris__kort">
        <div class="pris__intro">
          <p class="sec__eyebrow">Pris</p>
          <h2 id="pris-titel">Pris på {{ title }}</h2>
          <p v-if="sections.pricing.notes" class="pris__note" v-html="sections.pricing.notes" />
          <p class="pris__note">
            Forundersøgelsen er gratis og uforpligtende, og du betaler først efter behandlingen.
          </p>
          <div class="pris__handling">
            <AppBooking />
            <router-link :to="{ name: 'priser' }" class="pris__link">Se alle priser</router-link>
          </div>
        </div>

        <dl v-if="sections.pricing.items?.length" class="pris__liste">
          <div v-for="(p, i) in sections.pricing.items" :key="'p-' + i" class="pris__raekke">
            <dt>{{ p.label }}</dt>
            <dd>{{ p.price }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section v-if="faqs.length" class="faq">
    <div class="sec sec--kort faq-kort">
      <div class="sec__head">
        <p class="sec__eyebrow">Spørgsmål</p>
        <h2 id="faq-behandling">Ofte stillede spørgsmål om {{ title }}</h2>
      </div>
      <FaqList :items="faqs" />
    </div>
  </section>

  </div>


</template>

<script setup>
import { defineProps, computed } from 'vue';
import AppBooking from '../components/AppBooking.vue'; // Importer komponenten
import FaqList from './FaqList.vue'


const props = defineProps({
  title: String,
  imageSrc: String,
  description: String,
  duration: String,
  result: String,
  anesthesia: String,
  durability: String,
  downtime: String,
  consultation: String,
  price: String,
  priceText: { type: String, default: '' },
  price2: String,
  priceText2: String,
  price3: String,
  priceText3: String,
  faqs: { type: Array, default: () => [] },

  // NEW: تصاویر هر سکشن (اختیاری)
  sectionAssets: {
    type: Object,
    default: () => ({})
  },

  // 👇 NEW
  sections: {
    type: Object,
    default: () => ({})
  }
})


const priceTextWordCount = computed(() => {
  const text = props.priceText?.trim()
  if (!text) return 0
  return text.split(/\s+/).length
})

// برای ایمن‌سازی رندر لیست‌ها
const list = v => Array.isArray(v) ? v : (v ? [v] : [])
const getAsset = key => props.sectionAssets?.[key] || props.imageSrc
/* H1 skal ramme en soegning: "Botox i Esbjerg & Vejle – udført af læge"
   i stedet for "Botox behandling". title bruges stadig i de oevrige
   overskrifter ("Sådan foregår …", "Pris på …"). */
const h1Tekst = computed(() =>
  `${String(props.title || '').replace(/\s*behandling$/i, '')} i Esbjerg & Vejle – udført af læge`)

const steps3 = computed(() => (props.sections?.steps || []).slice(0, 3))

const decorateAftercare = (arr = []) =>
  arr.map(s =>
    s.replace(
      /(\b\d{1,2}(?:[–-]\d{1,2})?\s*(?:t|timer)\b)/gi,
      '<span class="ac-chip">$1</span>'
    )
  )


// === NEW: جداسازی intro از بولت‌ها بر اساس span.intro ===
const rawAudience = computed(() => list(props.sections?.audience))

const audienceIntro = computed(() => {
  const first = rawAudience.value?.[0] || ''
  const m = String(first).match(/<span[^>]*class=["'][^"']*intro[^"']*["'][^>]*>([\s\S]*?)<\/span>/i)
  return m ? m[1] : null // فقط محتوای داخل span را رندر کن
})

const audienceBullets = computed(() => {
  const arr = rawAudience.value || []
  if (arr.length && /class=["'][^"']*intro[^"']*["']/.test(String(arr[0]))) {
    return arr.slice(1)
  }
  return arr
})


const sectionAlt = (key) => {
  const t = (props.title || '').trim() // مثل "Botox behandling"
  switch (key) {
    case 'audience':
      return `${t}: konsultation med patient i klinikken`
    case 'expectations':
      return `${t}: behandlingssituation og forventede resultater`
    case 'safety':
      return `${t}: sikker udførelse i klinisk miljø`
    case 'aftercare':
      return `${t}: efterbehandling – gode råd de første 24–48 timer`
    case 'combinations':
      return `${t}: kombinationsmuligheder med andre behandlinger`
    default:
      return `${t} – ${key}`
  }
}

const shortTitles = {
  botox: 'Botox',
  filler: 'Filler',
  skinbooster: 'Skinbooster',
  mesotherapy: 'Mesotherapy',
  microneedling: 'Microneedling'
}

const titleFor = (slug = '') =>
  shortTitles[slug] || (slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : '')

/* نرمال‌سازی داده‌های combinations با استفاده از props.sections */
const normalizedCombinations = computed(() => {
  const src = props.sections?.combinations || []
  return src.map(it => {
    if (typeof it === 'string') return { __raw: it }
    if (it && it.ref) return { ref: String(it.ref), label: it.label, text: it.text }
    if (it && Array.isArray(it.refs)) {
      return {
        refs: it.refs.map(r => ({ ref: String(r.ref), label: r.label })),
        text: it.text
      }
    }
    return { __raw: '' }
  })
})

</script>


<style lang="scss" scoped>
@use './css/style.scss';

// ===== Theme vars =====
$c-dark: #153655;
$c-black: #000;
$c-white: #fff;
$bd-dark: rgba(255, 255, 255, .18);
$bd-light: rgba(0, 0, 0, .14);
$bd-muted: rgba(255, 255, 255, .12);

.faq-q {
  font-weight: 700;
}

// ===== Inline link =====
.inline-link {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dotted currentColor;
  padding-bottom: 1px;
  transition: opacity .15s ease, border-color .15s ease;
}

.inline-link:hover {
  opacity: .85;
  border-bottom-color: transparent;
}

.slice:not(.alt) .inline-link {
  border-bottom-color: rgba(255, 255, 255, .45);
}


// ===== Section shell =====
.slice {
  background: $c-dark;
  color: $c-white;
  padding: 70px 16px;
  scroll-margin-top: 90px;
  border-top: 1px solid rgba(255, 255, 255, .06);
}

.slice.alt {
  background: var(--primary-color) !important;
  color: $c-black;

  h2 {
    color: $c-dark !important;
  }
}

.slice-media {
  width: 45%;
}

.slice-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  aspect-ratio: 16/9;
  box-shadow: 0 8px 22px rgba(0, 0, 0, .25);
}

.row-reverse {
  flex-direction: row-reverse;
}

.resultater-body {
  width: 45% !important;

  p {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 50px !important;
  }
}

.section-safety-body .muted {
  margin-top: 5px;
  font-size: 16px;
  max-width: 66ch;
}

#expectations {
  .buttons {
    margin-top: 30px;
  }
}


// ===== Media image ratios =====
.audience-media img {
  aspect-ratio: 1/1;
}

.expectations-media img {
  aspect-ratio: 1/1;
  object-position: left;
}

.safety-media img {
  object-position: bottom;
  aspect-ratio: 16/14;
}

@media (max-width: 980px) {
  .slice-inner {
    flex-direction: column-reverse;
  }
}

// ===== Titles & helpers =====

.section-safety {
  margin: 0 0 10px !important;
}

.muted {
  opacity: .85;
  font-size: .95rem;
  margin-bottom: 0 !important;
}

.bullet li {
  margin: 6px 0;
  list-style: disc;
}

.kv {
  padding-left: 0;
}

.kv li {
  list-style: none;
  margin: 6px 0;
}

.two-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 10px;
}

.two-cols h3 {
  margin: 6px 0;
}

@media (max-width: 700px) {
  .two-cols {
    grid-template-columns: 1fr;
  }
}


// ===== Audience (ruled rows with arrow) =====

#audience {
  background: var(--primary-color) !important;
  color: $c-black;

  .slice-title {
    color: $c-dark !important;
  }
}

.slice-body{
  max-width: 800px;
}

.slice-title {
  text-align: left !important;
}



#audience .bullet {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 24px;
  /* فاصله‌ی بین ستون‌ها */
  row-gap: 0;
  /* خطوط جداکننده کافی‌ست */
}

/* جمله‌ی مقدمه‌ی audience */
.audience-intro {
  margin: 0 0 10px;
  line-height: 1.8;
  opacity: .95;
  font-size: 18px;
}

/* در حالت ruled-rows این بخش بولت نیست، ولی فاصله‌ها هماهنگ باشد */
#audience .audience-intro {
  padding: 6px 0 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, .16);
}

#audience .bullet li {
  list-style: none;
  margin: 0;
  padding: 14px 0;
  line-height: 2;
  border-bottom: 1px solid rgba(255, 255, 255, .16);
  display: flex;
  /* برای فلش و متن کنار هم */
  align-items: center;
}

#audience .bullet li::before {
  content: "";
  width: .8em;
  height: .8em;
  background-color: currentColor;
  -webkit-mask: var(--pil) center / contain no-repeat;
  mask: var(--pil) center / contain no-repeat;
  color: #153655;
  font-size: 35px;
  margin-right: 15px;
  flex: 0 0 auto;
}

#audience .bullet li b {
  font-weight: 800;
}

#audience .slice-title {
  margin-bottom: 18px;
}


// ===== Expectations (kv rows) =====
.resultater-body .kv {
  padding: 0;
  margin: 10px 0 0;
}

.resultater-body .kv li {
  list-style: none;
  margin: 0;
  display: flex;
  gap: 10px;
  align-items: baseline;
  padding: 12px 0;
  line-height: 2;
  border-bottom: 1px solid rgba(21, 54, 85, .28);
  font-size: 18px;
}

.resultater-body .kv li:last-child {
  border-bottom: none;
}

.resultater-body .kv li b {
  flex: 0 0 170px;
  font-weight: 800;
}

.resultater-body p {
  margin-bottom: 10px;
}


// ===== Safety (two cols, ruled) =====
#safety .two-cols {
  gap: 24px;
}

#safety .two-cols h3 {
  margin: 0 0 8px;
  font-weight: 800;
}

#safety .bullet {
  padding: 0;
  margin: 8px 0 0;
}

#safety .bullet li {
  list-style: none;
  margin: 0;
  padding: 15px 0;
  line-height: 2.8;
  border-bottom: 1px solid $bd-light;
}

#safety .bullet li:last-child {
  border-bottom: none;
}

#safety:not(.alt) .bullet li {
  border-bottom-color: $bd-dark;
}

.section-safety-intro {
  margin-top: 20px;
  margin-bottom: 50px !important;
}


// ===== Combinations (ruled with arrow) =====
#combinations .bullet {
  padding: 0;
  margin: 10px 0 0;
}

#combinations .bullet li {
  list-style: none;
  margin: 0;
  padding: 12px 0;
  line-height: 1.8;
  border-bottom: 1px solid $bd-light;
  display: flex;
  align-items: center;
}

#combinations .bullet li::before {
  content: "";
  width: .8em;
  height: .8em;
  background-color: currentColor;
  -webkit-mask: var(--pil) center / contain no-repeat;
  mask: var(--pil) center / contain no-repeat;
  color: $c-dark;
  font-size: 35px;
  margin-right: 15px;
}

#combinations .bullet li:last-child {
  border-bottom: none;
}

#combinations:not(.alt) .bullet li {
  border-bottom-color: $bd-dark;
}



@media (max-width: 1250px) {

  .slice-inner {
    max-width: 1000px !important;
  }
}


@media (max-width:1050px) {
  .slice-inner {
    padding: 0 5%;
  }
}

@media (max-width: 900px) {
  #audience .bullet {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
}

.slice-inner {
  justify-content: space-between;
}

/* vertical timeline on mobile */
@media (max-width: 900px) {
  .slice-media img {
    aspect-ratio: 1/1 !important;
    height: auto !important;
  }
}


// ===== Hero / header =====
body {
  box-sizing: border-box;
}

/* Undtagelsen fra den faelles hero-regel: her ligger billedet i selve
   heroen og skal gaa helt til kanten, saa luften er lagt indeni i stedet. */
#Main .bg-img {
  padding: 0;
}

#Main .bg-img {
  display: flex !important;
  align-items: center !important;
}

#Main .bg-img p {
  color: $c-white !important;
}

#Main .bg-img h1 {
  font-size: 39px !important;
  color: $c-white !important;
  padding-top: 0 !important;
  text-align: left;
}

.article_wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 50%;
}

.media_and_content {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: #1d1d1daa;
}

.media_and_content>div {
  display: flex;
  position: relative;
  height: 100%;
}

.media_and_content>div>.media_wrap {
  width: 50%;
  position: relative;
}

.media_and_content .img_wrap {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.media_and_content .img_wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
}

@media (max-width: 1699px) {
  .media_and_content .content {
    padding: 0px 95px !important;
  }

  .media_and_content {
    margin-bottom: 0 !important;
  }

  .media_and_content>div>.media_wrap {
    width: 55%;
  }
}

@media (max-width: 1299px) {

  .media_and_content>div>.media_wrap {
    width: 80%;
  }

  .media_and_content {
    position: relative !important;
    inset: auto !important;
    margin-bottom: 0 !important;
    /* احتیاطاً */
    z-index: 2;

    /* بالای overlay بمونه */
    
  }

  #Main .bg-img {
    /* به‌جای flex، لازم نیست ولی خیال‌راحت‌کن */
    height: auto !important;
    /* kill 113/145/160vh */
    min-height: 0 !important;
    align-items: stretch !important;
    /* اگر flex موند */
    overflow: visible;
    /* اگر چیزی سایه انداخت، قطع نشه */
  }

  .media_and_content .img_wrap img {
    width: 100% !important;
    height: auto !important;
    left: 0 !important;
    transform: none !important;
  }



  .media_and_content .img_wrap img {
    left: 0;
    transform: none;
    min-height: 100%;
    max-width: none;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .article_wrapper {
    width: 100%;
    height: 100%;
  }

  .media_and_content .content {
    padding: 55px !important;
    width: auto !important;
  }

  .content .options {
    border-top: none !important;
    padding-top: 0;
    margin-top: 8px;
    font-size: 12px;
    line-height: 1.4;
    flex-direction: column;
  }

  .options div {
    display: flex;
  }

  .entry_content p {
    width: 93% !important;
    font-size: 16px !important;
  }

  .content .options li {
    width: 33%;
    margin: 25px 0 0 1%;
    padding: 21px 0 0 0 !important;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #4f4f4f;
  }

  .content .options li img {
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
  }

  .content .options li:nth-child(3n+3) {
    border-right: none;
  }
}

@media (max-width: 980px) {
  .bg-img::before {
    background: none;
  }

  .media_and_content .img_wrap {
    height: 100%;
    width: 100vw;
  }

  .media_and_content .img_wrap img {
    min-height: 100%;
    max-width: none;
  }

  .media_and_content {
    top: 0 !important;
  }

  .slice-media {
    width: 80vw !important;
  }
}

@media (max-width: 639px) {
  .content .options_prices {
    display: flex;
    flex-direction: column-reverse;
  }

  .content .prices {
    border: none !important;
    margin: 26px 0 0 0 !important;
    padding-top: 0 !important;
    position: static !important;
    width: auto !important;
    text-align: left !important;
  }

  .content .buttons a {
    display: block !important;
    width: auto !important;
  }

  .buttons {
    flex-direction: column;
  }

  .content .buttons .general_button2 {
    margin: 8px 0 0 0 !important;
  }

  .content .options li {
    width: 100%;
  }

  .options div {
    flex-direction: column;
    width: 50%;
    margin-right: 0 !important;
  }

  .content .options {
    flex-direction: row;
    margin-top: 10px !important;
    padding-top: 6px !important;
  }

  .content .options .alarm_clock,
  .clipboard_list_check {
    border-right: none !important;
  }

  .syringe {
    border-right: 1px solid #4f4f4f !important;
  }

  .slice {
    padding: 60px 20px;
  }

  .slice-inner {
    gap: 30px;
  }

  .section-title {
    padding: 0 !important;
  }
}


// ===== Text & list layout in hero =====
.media_and_content .content {
  padding: 40px 100px 50px;
  align-self: center;
}

.entry_content {
  line-height: 1.6;

  p {
    padding: 0;
    font-size: 14px !important;
    width: auto !important;
  }
}

.media_and_content .entry_content_wrap,
.media_and_content .entry_content_wrap {
  margin-top: 14px;
}

.media_and_content .entry_content_wrap {
  margin-top: 10px;
  color: $c-white !important;
  font-size: 14px !important;
  font-weight: 100;
}


// ===== Options & Prices =====
.options {
  display: flex;
  padding-left: 0 !important;

  div {
    margin-right: 20px;
  }
}

.content .options {
  border-top: 2px solid rgba(70, 70, 70, .5);
  margin-top: 24px;
  padding-top: 6px;
  font-size: 13px;
  overflow: hidden;
}

ul {
  list-style: none inside;
}

.content .options li {
  margin-top: 10px;
  position: relative;
  padding: 5px 0 5px 30px;
  color: $c-white !important;
}

.content .options li img {
  width: 18px;
  height: 18px;
  position: absolute;
  left: 0;
  top: 4px;
}

.content .prices {
  border-top: 2px solid rgba(70, 70, 70, .5);
  margin-top: 15px;
  padding-top: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #edf2f7;
  overflow: hidden;

  h6 {
    margin: 0;
  }
}

.content .prices .from_price {
  float: left;
  width: 33%;
}

.content .prices .price {
  font-size: 27px;
  font-weight: 900;
  line-height: 1.7;
  color: $c-white;
}


// ===== Buttons (note: scoped styles won't reach child components) =====
.buttons {
  display: flex;
}

.content .buttons {
  margin-top: 25px;
}

.content .buttons a {
  width: 195px;
  line-height: 50px;
  font-size: 11px;
  font-weight: bold;
}

.buttons .general_button2 {
  margin-left: 17px;
  line-height: 48px;
}

.general_button2 {
  padding: 0 20px;
  color: $c-white !important;
  text-transform: uppercase;
  text-align: center;
  background: none;
  border: 1px solid $c-white;
}

.general_button,
.general_button2 {
  display: inline-block;
  line-height: 60px;
  text-decoration: none !important;
  white-space: nowrap;
}

input[type="submit"],
button[type="submit"],
.general_button {
  background: #3463C4;
  padding: 0 20px;
  color: $c-white !important;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
}

.general_button:hover,
.general_button2:hover {
  text-decoration: none !important;
  opacity: .8;
}


// ===== Hero background image & overlay =====
.img {
  position: relative;
  background-image: url('@/assets/BannerBehandling.webp') !important;
  background-size: cover;
  background-position: top;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2) !important;
    inset: 0;
    z-index: 1;
  }

  h1 {
    margin-left: 0;
    position: relative;
    z-index: 2;
    text-align: center;
    font-size: 55px;
    padding: 20vw 0 0 0 !important;

    b {
      color: #CC9F00;
      font-weight: bold;
      position: relative;
    }
  }
}


// ===== Responsive tweaks =====
@media (max-width: 1550px) {
  .slice-inner {
    max-width: 1200px;
  }

  .slice {
    padding: 70px 0;
    margin: 0 auto;
  }

  h2 {
    font-size: 36px !important;
  }

  .audience-media img {
    object-position: right;
  }

  #safety .bullet li {
    padding: 10px 0;
    line-height: 1.8;
  }

  #audience .bullet li {
    padding: 10px 0;
    line-height: 1.5;
    font-size: 14px;
  }

  .audience-intro {
    font-size: 16px;
  }

  .resultater-body .kv li b {
    flex: 0 0 130px;
  }

  #safety .bullet li {
    font-size: 14px;
  }

  .resultater-body {
    .kv li {
      font-size: 14px;
    }

    p {
      font-size: 16px;
      margin-bottom: 20px !important;
    }
  }
}

@media (max-width: 1050px) {

  .slice-body {
    width: 80vw !important;
  }
}

@media (max-width: 1020px) {
  h2 {
    padding-left: 0 !important;
  }
}

@media (max-width: 840px) {
  .bg-img {
    padding-left: 0 !important;
  }
}

@media (max-width: 980px) {
  .bg-img h1 {
    padding-top: 30vw !important;
  }

  .media_and_content>div {
    flex-direction: column;
  }

  .line {
    width: 100%;
  }

  .slice-body {
    width: 80% !important;
    margin: 0 auto;
  }

  .slice-inner {
    align-items: center;
  }

  .section-safety-intro {
    flex-direction: column;
    align-items: start;
    margin-bottom: 20px !important;

    .muted {
      margin-left: 0px;
    }
  }

  h2 {
    font-size: 30px !important;
  }

  .slice-title {
    font-size: 32px !important;
  }

  #pricing {
    .slice-title {
      margin-bottom: 5px !important;
    }
  }

  .resultater-body p {
    font-size: 16px;
  }

}

@media (max-width: 666px) {
  .bg-img h1 {
    padding-top: 40vw !important;
  }

  .slice-media {
    width: 90vw !important;
  }

  .slice-body {
    width: 100% !important;
  }

  .article_wrapper {
    height: auto;
  }

  .media_and_content .content {
    padding: 40px !important;
  }

  .media_and_content .content {
    padding: 30px !important;
  }

  .slice {
    padding: 50px 0;
  }
}

@media (max-width: 500px) {
  .bg-img {
    background-position: left !important;

    h1 {
      padding-top: 50vw !important;
    }
  }

  .entry_content p {
    width: 100% !important;
    font-size: 14px !important;
  }

  #Main .bg-img h1 {
    font-size: 30px !important;
    padding-top: 0 !important;
  }

  .content .prices .price {
    font-size: 20px;
  }
}

@media (max-width: 378px) {
  .container {
    margin: 0 0 0 5%;
    width: 90%;
  }

  .line {
    width: 100%;
  }
}

/* ===== Maalestokken paa behandlingssiderne =====
   Alt under heroen staar paa var(--maal) - samme venstre- og hoejrekant
   som resten af sitet. Baandene beholder fuld baggrund; sideluften holder
   indholdet inde paa maalet. Under 1000 px: 90 % ligesom de andre sider. */
.slice,
.faq {
  box-sizing: border-box;
  padding-left: max(var(--gutter), calc((100% - var(--maal)) / 2)) !important;
  padding-right: max(var(--gutter), calc((100% - var(--maal)) / 2)) !important;
}

.slice > .slice-inner,
.faq .faq-kort {
  box-sizing: border-box;
  margin-left: 0 !important;
  margin-right: 0 !important;
  max-width: none !important;
  width: 100% !important;
}

.slice > .slice-inner { padding-left: 0 !important; padding-right: 0 !important; }

.faq .faq-kort { margin-bottom: 0; }
.faq .faq-kort h2 { text-align: left; }

@media (max-width: 1000px) {
  .slice,
  .faq {
    padding-left: 5% !important;
    padding-right: 5% !important;
  }
}

/* Hero-billedet: samme 3:2-format paa alle behandlingssider, ogsaa naar
   billedfilen selv er naesten kvadratisk (skinbooster, microneedling). */
.media_and_content .img_wrap img { aspect-ratio: 3 / 2; }

/* ===== Forloeb (alle behandlingssider) =====
   Ét gitter, der selv finder antallet af kolonner: tre side om side paa
   laptop og desktop, én under hinanden paa mobil. Kortene er lige hoeje. */
#steps.forloeb { background: #153655; color: #fff; }

.forloeb .slice-inner,
.efter .slice-inner,
.pris .slice-inner { display: block; }

.forloeb .sec__eyebrow { color: rgba(255, 255, 255, .78) !important; }
.forloeb .sec__eyebrow::before { background: rgba(255, 255, 255, .6) !important; }
.forloeb h2 { color: #fff !important; text-align: left !important; }

.forloeb__liste {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  list-style: none;
  margin: 34px 0 0;
  padding: 0;
}

.forloeb__trin {
  background: rgba(255, 255, 255, .06);
  border: 1px solid rgba(255, 255, 255, .12);
  border-radius: 18px;
  box-sizing: border-box;
  padding: 28px 26px 30px;
}

.forloeb__nr {
  align-items: center;
  border: 1px solid rgba(255, 255, 255, .35);
  border-radius: 50%;
  color: #9fc0f5;
  display: inline-flex;
  font-size: .85rem;
  font-weight: 700;
  height: 40px;
  justify-content: center;
  letter-spacing: .04em;
  width: 40px;
}

.forloeb__titel {
  color: #fff !important;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 18px 0 8px;
}

.forloeb__tekst {
  color: rgba(255, 255, 255, .8);
  font-size: .98rem;
  line-height: 1.65;
  margin: 0;
}

/* ===== Efterbehandling =====
   Tonet panel (samme som klinikssidernes paneler) med raad i to kolonner
   og et flueben i brandblaa - ligner resten af sitet. */
#aftercare.efter { background: #fff; color: #153655; }

.efter__panel {
  background: rgba(45, 88, 161, .045);
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 18px;
  box-sizing: border-box;
  padding: 42px 40px;
}

.efter h2 { color: #153655 !important; text-align: left !important; }

.efter__liste {
  display: grid;
  gap: 14px 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
}

.efter__raad {
  align-items: flex-start;
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .05);
  display: flex;
  gap: 14px;
  padding: 16px 18px;
}

.efter__ikon {
  align-items: center;
  background: #2d58a1;
  border-radius: 50%;
  color: #fff;
  display: inline-flex;
  flex: 0 0 26px;
  height: 26px;
  justify-content: center;
  margin-top: 1px;
}

.efter__tekst {
  color: #153655;
  font-size: 1rem;
  line-height: 1.6;
}

.efter__tekst :deep(.ac-chip) {
  background: rgba(45, 88, 161, .10);
  border-radius: 999px;
  color: #2d58a1;
  font-weight: 700;
  padding: 1px 8px;
  white-space: nowrap;
}

.efter__note {
  color: rgba(21, 54, 85, .8);
  font-size: .95rem;
  line-height: 1.6;
  margin: 20px 0 0;
}

/* ===== Pris =====
   Hvidt kort (kortsproget): til venstre overskrift, note og handling,
   til hoejre prislisten som en ren tabel med tynde streger. */
#pricing.pris { background: #f4f3f0; color: #153655; }

.pris__kort {
  align-items: center;
  background: #fff;
  border: 1px solid rgba(21, 54, 85, .10);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(21, 54, 85, .06);
  box-sizing: border-box;
  display: grid;
  gap: 40px 56px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  padding: 42px 40px;
}

.pris h2 {
  color: #153655 !important;
  margin: 0 0 14px;
  text-align: left !important;
}

.pris__note {
  color: rgba(21, 54, 85, .82);
  line-height: 1.65;
  margin: 0 0 10px;
  max-width: 52ch;
}

.pris__handling {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 14px 22px;
  margin-top: 22px;
}

.pris__link {
  color: #2d58a1;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.pris__liste { margin: 0; }

.pris__raekke {
  align-items: baseline;
  border-bottom: 1px solid rgba(21, 54, 85, .12);
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding: 16px 0;
}

.pris__raekke:first-child { border-top: 1px solid rgba(21, 54, 85, .12); }

.pris__raekke dt { color: #153655; font-weight: 600; }

.pris__raekke dd {
  color: #153655;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .pris__kort { grid-template-columns: minmax(0, 1fr); }
  .efter__liste,
  .efter__liste--par { grid-template-columns: minmax(0, 1fr); }
}

/* 2 eller 4 raad: to kolonner, saa der ikke staar et enligt kort */
@media (min-width: 901px) {
  .efter__liste--par { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* Tre trin side om side ned til tablet - under det én kolonne,
   saa der aldrig staar et enligt kort paa en ny raekke. */
@media (max-width: 700px) {
  .forloeb__liste { grid-template-columns: minmax(0, 1fr); }
}

@media (max-width: 600px) {
  .efter__panel,
  .pris__kort { padding: 26px 22px; }
}
</style>