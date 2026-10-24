<template>
  <main class="cookie-page">
    <div class="cookie-page__inner">
      <h1>Cookiepolitik</h1>
      <p class="cookie-page__lead">
        Her står, hvilke cookies dsklinik.dk bruger, hvad de gør, hvem der står bag dem, og
        hvor længe de ligger på din enhed. Du kan ændre dit valg nederst på siden.
      </p>

      <h2>Hvem er ansvarlig</h2>
      <p>
        DK Skønhedsklinik v/ læge Arash Bagheri er dataansvarlig for de oplysninger, der
        behandles via hjemmesiden. Spørgsmål kan sendes til
        <a href="mailto:dr_arash_bagheri@yahoo.com">dr_arash_bagheri@yahoo.com</a>.
      </p>

      <h2>Hvad en cookie er</h2>
      <p>
        En cookie er en lille tekstfil, som en hjemmeside lægger på din computer eller
        telefon. Nogle er nødvendige, for at siden overhovedet virker. Andre bruges til at
        måle, hvordan siden bliver brugt, eller om et besøg er kommet fra en annonce. De
        sidste må vi kun bruge, hvis du siger ja.
      </p>

      <h2>Dit samtykke</h2>
      <p>
        Vi indlæser hverken statistik- eller markedsføringsværktøjer, før du har taget
        stilling. Siger du nej, bliver de slet ikke hentet. Dit valg gemmes i 12 måneder,
        hvorefter vi spørger igen. Du kan til enhver tid ændre eller trække dit samtykke
        tilbage — det er lige så let som at give det:
      </p>
      <p>
        <button type="button" class="cookie-page__btn" @click="openSettings">
          Ændr mit cookievalg
        </button>
      </p>

      <h2>Cookies på dsklinik.dk</h2>

      <section v-for="cat in categories" :key="cat.id" class="cookie-page__cat">
        <h3>{{ cat.label }}</h3>
        <p>{{ cat.description }}</p>
        <div class="cookie-page__table-wrap">
          <table class="cookie-page__table">
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
        </div>
      </section>

      <h2>Tredjeparter</h2>
      <p>
        Siger du ja til statistik, sendes oplysninger til <strong>Google</strong> (Google
        Analytics). Siger du ja til markedsføring, sendes oplysninger til <strong>Meta</strong>
        (Facebook og Instagram). Begge selskaber behandler også oplysninger uden for EU/EØS.
        Siger du nej, sendes der ingenting.
      </p>

      <h2>Dine rettigheder</h2>
      <p>
        Du har ret til at få indsigt i, berigtiget eller slettet de oplysninger, vi behandler
        om dig, og til at gøre indsigelse mod behandlingen. Du kan klage til Datatilsynet,
        Carl Jacobsens Vej 35, 2500 Valby — <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener">datatilsynet.dk</a>.
      </p>

      <p class="cookie-page__updated">Senest opdateret: {{ updated }}</p>
    </div>
  </main>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { COOKIE_TABLE } from '@/consent/consent'

useHead({
  title: 'Cookiepolitik | DK Skønhedsklinik',
  meta: [
    { name: 'description', content: 'Sådan bruger dsklinik.dk cookies, og hvordan du ændrer dit samtykke.' },
    { name: 'robots', content: 'noindex, follow' },
  ],
})

const updated = '24. oktober 2026'

const categories = [
  {
    id: 'necessary',
    label: 'Nødvendige',
    description:
      'Får hjemmesiden til at virke og husker dit cookievalg. De kan ikke fravælges, og de kræver ikke samtykke.',
    cookies: COOKIE_TABLE.necessary,
  },
  {
    id: 'statistics',
    label: 'Statistik',
    description:
      'Viser os hvor mange der besøger siden, og hvilke sider de læser. Tallene er samlede — vi kan ikke se, hvem du er.',
    cookies: COOKIE_TABLE.statistics,
  },
  {
    id: 'marketing',
    label: 'Markedsføring',
    description:
      'Lader os se, om et besøg er kommet fra en annonce på Facebook eller Instagram.',
    cookies: COOKIE_TABLE.marketing,
  },
]

function openSettings() {
  if (typeof window.openCookieSettings === 'function') window.openCookieSettings()
}
</script>

<style scoped>
.cookie-page {
  background: #fff;
  padding: 48px 20px 72px;
}
.cookie-page__inner {
  max-width: 780px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  color: #2b3440;
  line-height: 1.65;
}
.cookie-page h1 {
  color: #153655;
  font-size: 32px;
  margin: 0 0 12px;
}
.cookie-page__lead {
  font-size: 17px;
  color: #5b6673;
  margin: 0 0 32px;
}
.cookie-page h2 {
  color: #153655;
  font-size: 20px;
  margin: 34px 0 10px;
}
.cookie-page h3 {
  color: #153655 !important;
  font-size: 17px !important;
  line-height: 1.4 !important;
  margin: 26px 0 6px !important;
}
.cookie-page p {
  margin: 0 0 14px;
  font-size: 15.5px;
}
.cookie-page a {
  color: #2d58a1;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.cookie-page__btn {
  min-height: 48px;
  padding: 12px 22px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: #2d58a1;
  border: 1px solid #2d58a1;
  border-radius: 12px;
  cursor: pointer;
}
.cookie-page__btn:hover {
  opacity: 0.88;
}
.cookie-page__btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #fff, 0 0 0 6px #153655;
}
.cookie-page__table-wrap {
  overflow-x: auto;
}
.cookie-page__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  margin: 10px 0 4px;
}
.cookie-page__table th,
.cookie-page__table td {
  text-align: left;
  padding: 10px 14px 10px 0;
  vertical-align: top;
  border-bottom: 1px solid #dfe4ea;
}
.cookie-page__table th {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #5b6673;
}
.cookie-page__table code {
  font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 12.5px;
  color: #153655;
  background: #f6f8fa;
  border-radius: 4px;
  padding: 1px 5px;
}
.cookie-page__updated {
  margin-top: 40px;
  font-size: 13px;
  color: #8a94a0;
}
</style>
