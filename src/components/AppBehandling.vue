<template>

  <!-- Main behandling section -->
  <div id="Main">
    <div id="Art-works-dark-version-image" class="bg-img img" :class="{ 'dark-mode-cover-home': dark }">
      <div class="media_and_content">
        <div>
          <div class="media_wrap">
            <div class="video_padding"></div>
            <div class="img_wrap">
              <img width="1105" height="622" :src="imageSrc" :alt="`${title} – behandling hos DK Skønhedsklinik`"
                decoding="async" fetchpriority="high">
            </div>
          </div>
          <article class="content">
            <header>
              <h1>{{ title }}</h1>
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
        </div>
      </div>
    </div>
  </div>

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
      </div>
    </div>
  </section>

  <!-- 3) Steps -->
  <section v-if="steps3.length" id="steps" class="slice is-steps">
    <div class="slice-inner">
      <div class="slice-body">
        <h2 class="slice-title icon-steps">Sådan foregår {{ title }}</h2>

        <div class="steps-flow" role="list" aria-label="Behandlingsforløb i tre trin">
          <div class="steps-rail" aria-hidden="true"></div>

          <div v-for="(s, i) in steps3" :key="'s-' + i" class="step-card" role="listitem"
            :aria-label="`Trin ${i + 1}: ${s.title}`">
            <div class="step-badge" :aria-hidden="true">{{ i + 1 }}</div>
            <h3 class="step-title">{{ s.title }}</h3>
            <p class="step-text" v-html="s.text"></p>
          </div>
        </div>
      </div>
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
  <section v-if="sections.aftercare?.length" id="aftercare" class="slice is-aftercare">
    <div class="slice-inner narrow">
      <header class="ac-head">
        <h2 class="slice-title icon-leaf">Efterbehandling for {{ title }}</h2>
        <p class="ac-lead">Gode råd de første 24–48 timer for et pænt og trygt resultat.</p>
      </header>

      <ul class="ac-grid" role="list" aria-label="Efterbehandlingsråd">
        <li v-for="(a, i) in decorateAftercare(sections.aftercare)" :key="'af-' + i" class="ac-card" role="listitem">
          <span class="ac-check" aria-hidden="true">✓</span>
          <div class="ac-text" v-html="a"></div>
        </li>
      </ul>

      <p v-if="sections.aftercareNote" class="after-note" v-html="sections.aftercareNote" />
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
                <RouterLink :to="`/behandlinger/${r.ref}`" class="inline-link"><b>{{ r.label || titleFor(r.ref) }}</b>
                </RouterLink>
                <span v-if="idx < item.refs.length - 1"> / </span>
              </template>
              <span v-if="item.text">&nbsp;{{ item.text }}</span>
            </template>

            <template v-else>
              <template v-if="item.ref">
                <RouterLink :to="`/behandlinger/${item.ref}`" class="inline-link"><b>{{ item.label || titleFor(item.ref)
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
  <section v-if="sections.pricing" id="pricing" class="slice">
    <div class="slice-inner">
      <div class="slice-body fuld-width">
        <h2 class="slice-title icon-coin">Pris & serier</h2>
        <b>For {{ title }} </b>
        <ul class="price-list" v-if="sections.pricing.items?.length">
          <li v-for="(p, i) in sections.pricing.items" :key="'p-' + i">
            <span>{{ p.label }}</span><b v-if="p.price">{{ p.price }}</b>
          </li>
        </ul>
        <p v-if="sections.pricing.notes" class="muted" v-html="sections.pricing.notes" />
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section v-if="faqs.length" class="faq">
    <h2 class="section-title">Ofte stillede spørgsmål om {{ title }}</h2>

    <div class="faq-list">
      <details v-for="(item, i) in faqs" :key="i" class="faq-item">
        <summary class="faq-q">{{ item.q }}</summary>
        <div class="faq-a">
          <p v-for="(p, j) in (Array.isArray(item.a) ? item.a : [item.a])" :key="j" v-html="p"></p>
        </div>
      </details>
    </div>
  </section>


</template>

<script setup>
import { defineProps, computed } from 'vue';
import AppBooking from '../components/AppBooking.vue'; // Importer komponenten


const props = defineProps({
  dark: Boolean,
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
  prp: 'PRP',
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
  padding: 100px 16px;
  scroll-margin-top: 90px;
  border-top: 1px solid rgba(255, 255, 255, .06);
}

.slice.alt {
  background: #fff;
  color: $c-black;

  h2 {
    color: $c-dark;
  }
}

.slice-inner {
  display: flex;
  justify-content: space-between;
  margin: 0 10%;
  gap: 100px;
}

.slice-media {
  width: 30vw;
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

.slice-body {
  width: 35vw;
}

.resultater-body {
  width: 31vw !important;

  p {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 50px !important;
  }
}

.audience-body h2 {
  margin-bottom: 30px !important;
}

.fuld-width {
  width: 100% !important;
  margin: 0 15%;
}

.section-safety-body .muted {
  margin-top: 0;
  margin-left: 5px;
  font-size: 16px;
}

@media (max-width: 980px) {
  .slice-inner {
    flex-direction: column-reverse;
  }

  .slice-media,
  .slice-body {
    width: 100%;
  }
}

// ===== Titles & helpers =====
.slice-title {
  font-size: 55px;
  font-weight: bolder;
  margin: 0 0 25px;
  letter-spacing: .2px;
}

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

// ===== Price list =====
.price-list {
  padding-left: 0;
  margin: 10px 0 0;
}

.price-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dashed $bd-muted;
}

.price-list li:last-child {
  border-bottom: none;
}


// ===== Audience (ruled rows with arrow) =====
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
  font-size: 20px;
}

/* در حالت ruled-rows این بخش بولت نیست، ولی فاصله‌ها هماهنگ باشد */
#audience .audience-intro {
  padding: 6px 0 30px;
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
  content: "➟";
  color: #fff;
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
  display: flex;
  align-items: center;
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
  content: "➟";
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


// ===== Aftercare (cards) =====
.slice.is-aftercare {
  background: $c-dark;
  color: $c-white;
  position: relative;
  padding: 100px 16px;
  overflow: hidden;
}

.slice.is-aftercare .slice-inner.narrow {
  margin: 0 17%;
  flex-direction: column;
  gap: 20px;
}

.slice.is-aftercare .slice-body {
  width: auto;
}

.ac-head h2 {
  margin-bottom: 15px !important;
}

.ac-lead {
  margin: 6px 0 0;
  opacity: .9;
  font-size: 1.05rem;
}

.ac-grid {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: flex;
  gap: 16px;
}

@media (max-width: 1200px) {
  .ac-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  #audience .bullet {
    grid-template-columns: 1fr;
    column-gap: 0;
  }

  .ac-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .ac-grid {
    grid-template-columns: 1fr;
  }
}

.ac-card {
  background: rgba(255, 255, 255, .06);
  border: 1px solid rgba(255, 255, 255, .10);
  border-radius: 16px;
  padding: 18px 16px;
  min-height: 120px;
  display: flex;
  flex: 1 1 0;
  gap: 12px;
  align-items: flex-start;
  box-shadow: 0 8px 20px rgba(0, 0, 0, .22);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}

.ac-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, .26);
  border-color: rgba(255, 255, 255, .18);
}

.ac-check {
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  line-height: 34px;
  border-radius: 999px;
  text-align: center;
  font-weight: 900;
  color: #0b1e35;
  background: #fff;
  border: 6px solid rgba(255, 255, 255, .18);
  box-shadow: 0 4px 10px rgba(0, 0, 0, .22);
}

.ac-text {
  line-height: 1.7;
  opacity: .98;
  font-size: 1.05rem;
}

.ac-chip {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .22);
  font-weight: 700;
  font-size: .92rem;
  margin: 0 4px;
}

.after-note {
  margin-top: 14px;
  opacity: .85;
  font-size: .95rem;
}

/* neutralize legacy .check inside this section */
.slice.is-aftercare .check {
  padding-left: 0;
  line-height: inherit;
}

.slice.is-aftercare .check li::before {
  content: none;
}


// ===== Steps flow =====
.slice.is-steps .slice-inner {
  margin: 0 10%;
  justify-content: center;
}

.slice.is-steps .slice-body {
  width: auto;
}

.steps-flow {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 100px;
  margin-top: 80px;
}

.steps-rail {
  position: absolute;
  left: 0;
  right: 0;
  top: 22px;
  height: 2px;
  z-index: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, .08), rgba(255, 255, 255, .28), rgba(255, 255, 255, .08));
}

.step-card {
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  background: rgba(255, 255, 255, .06);
  border: 1px solid rgba(255, 255, 255, .09);
  border-radius: 14px;
  padding: 26px 18px 18px;
  min-height: 170px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, .22);
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}

.step-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, .26);
  border-color: rgba(255, 255, 255, .16);
}

.step-badge {
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 16px;
  color: #0b1e35;
  background: #fff;
  border: 6px solid rgba(255, 255, 255, .18);
  box-shadow: 0 4px 12px rgba(0, 0, 0, .22);
}

.step-card::before {
  content: "";
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 20px;
  background: rgba(255, 255, 255, .22);
  border-radius: 1px;
}

.step-card::after {
  content: none;
}

.step-title {
  margin: 50px 0 8px;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: .2px;
}

.step-text {
  margin: 0;
  line-height: 1.7;
  opacity: .95;
}

/* vertical timeline on mobile */
@media (max-width: 900px) {
  .steps-flow {
    flex-direction: column;
    gap: 40px;
    padding-left: 25px;
    margin-top: 60px;
  }

  .steps-rail {
    top: 0;
    bottom: 0;
    left: 5px;
    right: auto;
    width: 2px;
    height: auto;
    background: linear-gradient(to bottom, rgba(255, 255, 255, .08), rgba(255, 255, 255, .28), rgba(255, 255, 255, .08));
  }

  .step-badge {
    top: 10px;
    left: 18px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    font-size: 15px;
    border-width: 5px;
  }

  .step-card {
    text-align: left;
    padding: 22px 16px 16px 20px;
    min-height: unset;
  }

  .step-card::before {
    top: 20px;
    left: 18px;
    transform: translateX(-50%);
    height: 24px;
  }

  .step-title {
    margin: 10px 0 6px 30px;
  }

  .step-text {
    margin-left: 30px;
  }

  .slice-inner {
    margin: 0 auto !important;
  }

  .slice-media img {
    aspect-ratio: 1/1;
  }
}


// ===== Hero / header =====
body {
  box-sizing: border-box;
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

.media_and_content {
  position: absolute;
  width: 100%;
  margin-bottom: 100px;
  z-index: 3;
  background: #1d1d1daa;
}

.media_and_content>div {
  display: flex;
  position: relative;
  max-width: 1783px;
  margin: 0 auto;
}

.media_and_content>div>.media_wrap {
  width: 1105px;
  position: relative;
}

.media_and_content .img_wrap {
  height: 100%;
  width: 44vw;
  overflow: hidden;
}

.media_and_content .img_wrap img {
  min-height: 100%;
  max-width: none;
  width: auto;
  position: relative;
  left: 60%;
  transform: translateX(-50%);
}

@media (max-width: 1699px) {
  .media_and_content .content {
    width: 45%;
    padding-left: 50px;
    padding-right: 70px;
  }

  .media_and_content {
    margin-bottom: 0 !important;
  }

  .media_and_content>div>.media_wrap {
    width: 55%;
  }

  .media_and_content .img_wrap {
    width: 50vw;
  }
}

@media (max-width: 1299px) {
  .media_and_content>div {
    flex-direction: column;
  }

  .media_and_content>div>.media_wrap {
    width: auto;
  }

  .media_and_content {
    position: relative !important;
    inset: auto !important;
    margin-bottom: 0 !important;
    /* احتیاطاً */
    z-index: 2;

    /* بالای overlay بمونه */
    .img_wrap {
      height: auto !important;
      width: 100vw;
    }
  }

  #Main .bg-img {
    display: block !important;
    /* به‌جای flex، لازم نیست ولی خیال‌راحت‌کن */
    height: auto !important;
    /* kill 113/145/160vh */
    min-height: 0 !important;
    align-items: stretch !important;
    /* اگر flex موند */
    overflow: visible;
    /* اگر چیزی سایه انداخت، قطع نشه */
  }

  /* 3) تصویر هیرو در موبایل: تمام‌عرض و با ارتفاع اتومات */
  .media_and_content .img_wrap {
    width: 100% !important;
    height: auto !important;
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

  .media_and_content .content {
    padding: 40px 40px 50px !important;
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

@media (max-width: 940px) {
  .bg-img::before {
    background: none;
  }

  .media_and_content .img_wrap {
    height: 100%;
  }

  .media_and_content .img_wrap img {
    min-height: 100%;
    max-width: none;
    width: auto;
    height: 615px;
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

  .faq {
    padding: 60px 20px !important;
  }

  .section-title {
    padding: 0 !important;
  }
}


// ===== Text & list layout in hero =====
.media_and_content .content {
  padding: 40px 100px 50px;
  width: 678px;
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
  margin-top: 28px;
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
  margin-top: 22px;
  padding-top: 37px;
  font-size: 24px;
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
  margin-top: 35px;
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

.dark-mode-cover-home {
  &::before {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  h1 {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  }
}


// ===== FAQ =====
.faq {
  padding: 150px 20px;
  background: #ffffff;
  color: #000;
}

.faq .section-title {
  color: #153655 !important;
  margin-top: 0;
  margin-bottom: 30px !important;
}

.faq-list {
  max-width: 1200px;
  margin: 0 auto;
}

.faq-item {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}

.faq-q {
  cursor: pointer;
  padding: 20px 18px;
  font-weight: 700;
}

.faq-a {
  padding: 0 18px 14px;
  line-height: 1.6;
}

.faq-a a {
  color: #9ec5ff;
  text-decoration: underline;
}

.faq-item[open] .faq-q {
  background: rgba(255, 255, 255, 0.07);
}


// ===== Responsive tweaks =====
@media (max-width: 1550px) {
  .faq {
    padding: 100px 15%;

    h2 {
      font-size: 40px !important;
    }
  }

  .slice.is-aftercare .slice-inner.narrow {
    margin: 0 10% !important;
  }

  .steps-flow {
    gap: 35px;
  }

  h2 {
    font-size: 40px !important;
  }

  .fuld-width {
    width: 100% !important;
  }

  .slice.is-steps .slice-body {
    width: auto !important;
  }

  .audience-media img {
    object-position: right;
  }

  .audience-body {
    width: 50vw;
  }

  .audience-media {
    width: 30vw;
  }

  .slice-media {
    width: 31vw;
  }

  .section-safety-body {
    width: 45vw;
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

  .step-text,
  #safety .bullet li {
    font-size: 14px;
  }

  .resultater-body {
    width: 42vw !important;

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
  .fuld-width {
    margin: 0 !important;
  }

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

@media (max-width: 940px) {
  .bg-img h1 {
    padding-top: 30vw !important;
  }

  .line {
    width: 100%;
  }

  .slice-body {
    width: auto !important;
  }

  .slice-title {
    font-size: 36px !important;
  }

  .resultater-body p {
    font-size: 16px;
  }

  .slice.is-aftercare {
    padding: 60px 20px;

    .slice-inner.narrow {
      margin: 0 !important;
    }
  }

  .ac-grid {
    flex-wrap: wrap;

    .ac-card {
      min-width: 82vw;
    }
  }
}

@media (max-width: 666px) {
  .bg-img h1 {
    padding-top: 40vw !important;
  }

  .slice-media {
    width: 90vw !important;
  }
}

@media (max-width: 500px) {
  .bg-img {
    background-position: left !important;

    h1 {
      padding-top: 50vw !important;
    }
  }

  .expectations-media, .safety-media, .slice-media img {
    aspect-ratio: 1/1 !important;
  }

  .media_and_content .img_wrap img {
    left: 60%;
    transform: translateX(-50%);
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


// ===== Misc media (image heights) =====
@media (max-width: 1650px) {
  #Main .bg-img {
    align-items: end !important;
  }
}

// ===== Media image ratios =====
.audience-media img {
  aspect-ratio: 16/14 ;
}

.expectations-media img {
  aspect-ratio: 16/14 ;
  object-position: left;
}

.safety-media img {
  object-position: bottom;
  aspect-ratio: 16/14;
}
</style>