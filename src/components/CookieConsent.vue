<template>
  <!-- Samtykkedialog -->
  <Teleport to="body">
    <div v-if="open" class="dsk-cc-scrim" aria-hidden="true"></div>

    <div
      v-if="open"
      ref="dialogEl"
      class="dsk-cc"
      role="dialog"
      aria-labelledby="dsk-cc-title"
      aria-describedby="dsk-cc-desc"
      tabindex="-1"
      @keydown.tab="trapFocus"
    >
      <div class="dsk-cc__inner">
        <h2 id="dsk-cc-title" class="dsk-cc__title">Vi bruger cookies</h2>

        <p id="dsk-cc-desc" class="dsk-cc__text">
          DK Skønhedsklinik bruger cookies til at få hjemmesiden til at fungere, og — hvis du
          siger ja — til at se, hvordan siden bliver brugt, og om et besøg er kommet fra en
          annonce. Du kan til enhver tid ændre dit valg nederst på siden.
          <router-link class="dsk-cc__link" to="/cookies/" @click="open = false"
            >Læs vores cookiepolitik</router-link
          >
        </p>

        <!-- Lag 2: detaljerne -->
        <div v-if="showDetails" class="dsk-cc__details">
          <fieldset
            v-for="cat in categories"
            :key="cat.id"
            class="dsk-cc__cat"
          >
            <legend class="dsk-cc__sr-only">{{ cat.label }}</legend>

            <div class="dsk-cc__cat-head">
              <div class="dsk-cc__cat-name">
                <span class="dsk-cc__cat-title">{{ cat.label }}</span>
                <span v-if="cat.locked" class="dsk-cc__badge">Altid aktiv</span>
              </div>

              <label v-if="!cat.locked" class="dsk-cc__switch">
                <input
                  type="checkbox"
                  v-model="choice[cat.id]"
                  :aria-label="`Tillad ${cat.label.toLowerCase()}`"
                />
                <span class="dsk-cc__track" aria-hidden="true">
                  <span class="dsk-cc__thumb"></span>
                </span>
              </label>
            </div>

            <p class="dsk-cc__cat-desc">{{ cat.description }}</p>

            <table class="dsk-cc__table">
              <caption class="dsk-cc__sr-only">
                Cookies i kategorien {{ cat.label }}
              </caption>
              <thead>
                <tr>
                  <th scope="col">Navn</th>
                  <th scope="col">Formål</th>
                  <th scope="col">Udbyder</th>
                  <th scope="col">Levetid</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="c in cat.cookies" :key="c.name">
                  <td data-label="Navn"><code>{{ c.name }}</code></td>
                  <td data-label="Formål">{{ c.purpose }}</td>
                  <td data-label="Udbyder">{{ c.provider }}</td>
                  <td data-label="Levetid">{{ c.ttl }}</td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </div>

        <!-- Handlinger -->
        <div class="dsk-cc__actions">
          <button type="button" class="dsk-cc__btn" @click="onReject">
            Afvis alle
          </button>
          <button
            v-if="showDetails"
            type="button"
            class="dsk-cc__btn"
            @click="onSaveSelection"
          >
            Gem mit valg
          </button>
          <button type="button" class="dsk-cc__btn" @click="onAccept">
            Accepter alle
          </button>
        </div>

        <button
          v-if="!showDetails"
          type="button"
          class="dsk-cc__toggle"
          :aria-expanded="showDetails"
          @click="showDetails = true"
        >
          Tilpas mit valg
        </button>
      </div>
    </div>

    <!-- Blivende indgang til at ændre valget -->
    <button
      v-if="!open && decided"
      type="button"
      class="dsk-cc-reopen"
      @click="openSettings"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1-4-4 2 2 0 0 1-2-2Z"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linejoin="round"
        />
        <circle cx="9" cy="12" r="1.3" fill="currentColor" />
        <circle cx="14" cy="16" r="1.1" fill="currentColor" />
        <circle cx="15.5" cy="10.5" r="1" fill="currentColor" />
      </svg>
      <span>Cookieindstillinger</span>
    </button>
  </Teleport>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  hasDecision,
  getConsent,
  setConsent,
  acceptAll,
  rejectAll,
  apply,
  COOKIE_TABLE,
} from '@/consent/consent'

const open = ref(false)
const showDetails = ref(false)
const decided = ref(false)
const dialogEl = ref(null)

let lastFocused = null

const choice = reactive({ statistics: false, marketing: false })

const categories = [
  {
    id: 'necessary',
    label: 'Nødvendige',
    locked: true,
    description:
      'Får hjemmesiden til at virke — navigation, formularer og at vi husker dit cookievalg. De kan ikke fravælges, og de kræver ikke samtykke.',
    cookies: COOKIE_TABLE.necessary,
  },
  {
    id: 'statistics',
    label: 'Statistik',
    locked: false,
    description:
      'Viser os hvor mange der besøger siden, og hvilke sider de læser. Tallene er samlede — vi kan ikke se, hvem du er.',
    cookies: COOKIE_TABLE.statistics,
  },
  {
    id: 'marketing',
    label: 'Markedsføring',
    locked: false,
    description:
      'Lader os se, om et besøg er kommet fra en annonce på Facebook eller Instagram, så vi ikke bruger penge på annoncer, der ikke virker.',
    cookies: COOKIE_TABLE.marketing,
  },
]

/* ------------------------------------------------------------ livscyklus */

function openSettings() {
  const current = getConsent()
  choice.statistics = current.statistics
  choice.marketing = current.marketing
  showDetails.value = true
  show()
}

function show() {
  lastFocused = document.activeElement
  open.value = true
  nextTick(() => dialogEl.value?.focus())
}

function close() {
  open.value = false
  showDetails.value = false
  decided.value = hasDecision()
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus()
}

function onAccept() {
  acceptAll()
  close()
}

function onReject() {
  rejectAll()
  close()
}

function onSaveSelection() {
  setConsent({ statistics: choice.statistics, marketing: choice.marketing })
  close()
}

/* Tastaturfælde: fokus skal blive inde i dialogen, så længe den er åben. */
function trapFocus(e) {
  const focusables = dialogEl.value?.querySelectorAll(
    'button, [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  if (!focusables || !focusables.length) return
  const first = focusables[0]
  const last = focusables[focusables.length - 1]

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

onMounted(() => {
  apply() // indlæs det, et tidligere samtykke allerede tillader
  decided.value = hasDecision()
  if (!decided.value) show()
  window.openCookieSettings = openSettings
})

onBeforeUnmount(() => {
  if (window.openCookieSettings === openSettings) delete window.openCookieSettings
})
</script>

<style scoped>
/* Farverne følger sidens egne tokens i App.vue */
.dsk-cc,
.dsk-cc-reopen {
  --cc-navy: #153655;
  --cc-blue: #2d58a1;
  --cc-ink: #2b3440;
  --cc-muted: #5b6673;
  --cc-line: #dfe4ea;
  --cc-surface: #ffffff;
  --cc-sunken: #f6f8fa;
  font-family: Arial, Helvetica, sans-serif;
}

.dsk-cc-scrim {
  position: fixed;
  inset: 0;
  background: rgba(14, 26, 40, 0.28);
  z-index: 2147483000;
}

.dsk-cc {
  position: fixed;
  z-index: 2147483001;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: min(720px, calc(100vw - 32px));
  max-width: 100vw;
  max-height: min(82vh, 820px);
  overflow-y: auto;
  overflow-x: hidden;
  background: var(--cc-surface);
  border: 1px solid var(--cc-line);
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(14, 26, 40, 0.08), 0 20px 48px rgba(14, 26, 40, 0.22);
  animation: dsk-cc-in 220ms ease-out;
}
.dsk-cc:focus {
  outline: none;
}

@keyframes dsk-cc-in {
  from {
    opacity: 0;
    transform: translate(-50%, 16px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.dsk-cc__inner {
  padding: 28px;
}

.dsk-cc__title {
  margin: 0 0 10px;
  font-size: 21px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--cc-navy);
  letter-spacing: -0.2px;
}

.dsk-cc__text {
  margin: 0;
  font-size: 15px;
  line-height: 1.62;
  color: var(--cc-ink);
}

.dsk-cc__link {
  color: var(--cc-blue);
  text-decoration: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
}

/* ---------------------------------------------------------- detaljer */

.dsk-cc__details {
  margin-top: 22px;
  border-top: 1px solid var(--cc-line);
}

.dsk-cc__cat {
  margin: 0;
  padding: 18px 0;
  border: 0;
  border-bottom: 1px solid var(--cc-line);
  min-width: 0; /* så indholdet ikke kan presse kortet bredere end skærmen */
}

.dsk-cc__cat-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-width: 0;
}

.dsk-cc__cat-name {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  min-width: 0;
}

.dsk-cc__cat-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--cc-navy);
}

.dsk-cc__badge {
  font-size: 12px;
  font-weight: 700;
  color: var(--cc-muted);
  background: var(--cc-sunken);
  border: 1px solid var(--cc-line);
  border-radius: 999px;
  padding: 3px 10px;
}

.dsk-cc__cat-desc {
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--cc-muted);
}

/* Kontakt: 44×44 samlet trykflade omkring kontakten */
.dsk-cc__switch {
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 44px;
  cursor: pointer;
}
.dsk-cc__switch input {
  position: absolute;
  inset: 0;
  opacity: 0;
  margin: 0;
  cursor: pointer;
}
.dsk-cc__track {
  display: block;
  width: 52px;
  height: 30px;
  border-radius: 999px;
  background: #c3cbd5;
  transition: background 160ms ease;
}
.dsk-cc__thumb {
  display: block;
  width: 24px;
  height: 24px;
  margin: 3px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(14, 26, 40, 0.35);
  transition: transform 160ms ease;
}
.dsk-cc__switch input:checked + .dsk-cc__track {
  background: var(--cc-blue);
}
.dsk-cc__switch input:checked + .dsk-cc__track .dsk-cc__thumb {
  transform: translateX(22px);
}
.dsk-cc__switch input:focus-visible + .dsk-cc__track {
  box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--cc-navy);
}

/* ---------------------------------------------------------- tabellen */

.dsk-cc__table {
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  margin-top: 14px;
  border-collapse: collapse;
  font-size: 13px;
  line-height: 1.5;
}
.dsk-cc__table th:nth-child(1),
.dsk-cc__table td:nth-child(1) {
  width: 27%;
}
.dsk-cc__table th:nth-child(3),
.dsk-cc__table td:nth-child(3) {
  width: 16%;
}
.dsk-cc__table th:nth-child(4),
.dsk-cc__table td:nth-child(4) {
  width: 19%;
}
.dsk-cc__table th,
.dsk-cc__table td {
  text-align: left;
  padding: 8px 12px 8px 0;
  vertical-align: top;
  border-bottom: 1px solid var(--cc-line);
}
.dsk-cc__table th {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--cc-muted);
  font-weight: 700;
}
.dsk-cc__table td {
  color: var(--cc-ink);
}
.dsk-cc__table tr:last-child td {
  border-bottom: 0;
}
.dsk-cc__table code {
  display: inline-block;
  max-width: 100%;
  font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 12.5px;
  color: var(--cc-navy);
  background: var(--cc-sunken);
  border-radius: 4px;
  padding: 1px 5px;
  overflow-wrap: anywhere;
}

/* ---------------------------------------------------------- knapper */

.dsk-cc__actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

/* Afvis og Accepter er bevidst identiske. Datatilsynet kræver, at det er
   lige så let at afvise som at acceptere, og forskel i farve eller vægt
   læses som et forsøg på at skubbe brugeren i én retning. */
.dsk-cc__btn {
  flex: 1 1 0;
  min-height: 48px;
  padding: 12px 18px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: var(--cc-blue);
  border: 1px solid var(--cc-blue);
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 160ms ease;
}
.dsk-cc__btn:hover {
  opacity: 0.88;
}
.dsk-cc__btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--cc-navy);
}

.dsk-cc__toggle {
  display: block;
  margin: 14px auto 0;
  min-height: 44px;
  padding: 10px 12px;
  background: none;
  border: 0;
  font-family: inherit;
  font-size: 15px;
  color: var(--cc-blue);
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
.dsk-cc__toggle:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--cc-navy);
  border-radius: 8px;
}

/* -------------------------------------------------- blivende indgang */

.dsk-cc-reopen {
  position: fixed;
  left: 20px;
  bottom: 24px;
  z-index: 2147482000;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 10px 16px;
  background: #fff;
  color: var(--cc-navy);
  border: 1px solid var(--cc-line);
  border-radius: 999px;
  box-shadow: 0 2px 10px rgba(14, 26, 40, 0.14);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}
.dsk-cc-reopen svg {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
}
.dsk-cc-reopen:hover {
  border-color: #c3cbd5;
}
.dsk-cc-reopen:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--cc-navy);
}

/* ------------------------------------------------------------- mobil */

@media (max-width: 620px) {
  .dsk-cc {
    left: 0;
    right: 0;
    bottom: 0;
    transform: none;
    width: 100%;
    max-height: 88vh;
    border-radius: 16px 16px 0 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    animation-name: dsk-cc-in-mobile;
  }
  @keyframes dsk-cc-in-mobile {
    from {
      transform: translateY(18px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .dsk-cc__inner {
    padding: 22px 18px calc(22px + env(safe-area-inset-bottom));
  }
  .dsk-cc__actions {
    flex-direction: column;
  }

  /* Tabellen bliver til rækker. En tabel med vandret scroll på en telefon
     skjuler kolonner, brugeren ikke kan se findes — og oplysningspligten
     er ikke opfyldt af noget, man skal gætte sig til at swipe efter. */
  .dsk-cc__table {
    table-layout: auto;
    margin-top: 12px;
  }
  .dsk-cc__table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
  .dsk-cc__table,
  .dsk-cc__table tbody,
  .dsk-cc__table tr,
  .dsk-cc__table td {
    display: block;
    width: 100%;
  }
  .dsk-cc__table tr {
    padding: 12px 0;
    border-bottom: 1px solid var(--cc-line);
  }
  .dsk-cc__table tr:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
  .dsk-cc__table td {
    display: flex;
    gap: 10px;
    padding: 3px 0;
    border: 0;
  }
  .dsk-cc__table td::before {
    content: attr(data-label);
    flex: 0 0 72px;
    font-size: 11px;
    line-height: 1.6;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: var(--cc-muted);
  }
  .dsk-cc__table td:nth-child(1),
  .dsk-cc__table td:nth-child(3),
  .dsk-cc__table td:nth-child(4) {
    width: 100%;
  }

  .dsk-cc-reopen span {
    display: none;
  }
  .dsk-cc-reopen {
    left: 16px;
    bottom: 16px;
    width: 44px;
    padding: 0;
    justify-content: center;
    border-radius: 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dsk-cc {
    animation: none;
  }
  .dsk-cc__track,
  .dsk-cc__thumb,
  .dsk-cc__btn {
    transition: none;
  }
}
</style>
