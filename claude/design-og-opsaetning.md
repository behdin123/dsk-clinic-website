# DK Skønhedsklinik — design- og opsætningsregler

**Formål:** denne fil er en overdragelse. Den samler alt, vi har besluttet om design,
hierarki, look & feel og opsætning på dsklinik.dk, så en ny chat kan fortsætte uden at
skulle genopdage det hele. Læs den før du rører koden.

**Hvis du kun læser ét afsnit:** læs §3 (arbejdsregler) og §11 (faldgruber). De to afsnit
rummer de fejl, der har kostet mest tid.

---

## 1. Projektet

- **Side:** dsklinik.dk — kosmetisk klinik med afdelinger i **Vejle** og **Esbjerg**
- **Ejer/behandler:** læge **Arash Bagheri**. Han er **læge, ikke speciallæge** — det må
  aldrig stå på siden. Autorisations-ID **081Q1**
- **Mål:** bedre placering i Google og mere kvalificeret trafik. Alt design tjener det mål
- **Trafik:** ca. **74 % mobil**. Mobil er ikke en eftertanke
- **Stack:** Vue 3 `<script setup>`, vue-router, Vite 5, **vite-ssg** (statisk prerender),
  `@unhead/vue` v2 til meta og JSON-LD. SCSS i `<style>`-blokke pr. komponent
- **Deploy:** commit + push til GitHub → GitHub Actions → SFTP til one.com. Overskriver,
  men sletter aldrig
- **Build:** `npm run build` (kører også sitemap-generering)

### Vigtige filer

| Fil | Indhold |
|---|---|
| `src/App.vue` | `:root`-variabler, global `.bg-img` hero-regel, `#nav` |
| `src/components/css/style.scss` | Sektionssystemet (`.sec`, `.split`, eyebrow), FAQ-rester |
| `src/data/behandlinger.js` | Central registrering af alle behandlinger — nav, footer, lister, brødkrummer trækker herfra |
| `src/components/FaqList.vue` | Fælles FAQ-komponent til alle sider |
| `src/components/OplandKort.vue` | Køretidsdiagram (SVG) på klinikssiderne |
| `src/components/MediaPlaceholder.vue` | Billedplaceholder med låst format (ingen CLS) |
| `CLAUDE.md` (rod) | Standing rules — overlapper med denne fil |

---

## 2. Brand og visuel identitet

### Farver

| Rolle | Værdi | Brug |
|---|---|---|
| Navy (primær) | `#153655` | Overskrifter, footer, mørke bånd |
| Brandblå | `#2d58a1` | Links, knapper, eyebrow, accenter |
| Knap-blå (ældre) | `#3463C4` | `.general_button` — ældre, men i brug |
| Sidebaggrund | `#f4f4f4` / `#f4f3f0` (varm) | Lyse bånd |
| Panel-tone | `rgba(45,88,161,.045)` | `.sec--panel` |
| Kortkant | `rgba(21,54,85,.10)` | Alle kort |
| Kortskygge | `0 10px 30px rgba(21,54,85,.06)` | Alle kort |

**Hjørneradius:** 18 px på kort og paneler, 10–12 px på knapper og felter, 14 px på mobil.

### Typografi

- Overskrifter: fed, navy, stram `line-height` (1.14–1.2)
- Brødtekst: `line-height` 1.65–1.75
- **Læselængde er en regel, ikke en smagssag:** manchetter maks `72ch`, brødtekst i
  split-sektioner `60–64ch`. En bred sektion må aldrig give 180 tegn lange linjer

### Ingen emoji

Emoji som ikoner (💉💙✅) ser hjemmelavet ud på en lægeklinik. Brug prikker, streger,
SVG eller tal i cirkler.

---

## 3. Arbejdsregler (gælder altid)

1. **Læs det eksisterende først.** Alt indhold på siden er godkendt af lægen. To steder må
   aldrig sige noget forskelligt om samme emne. Find den eksisterende formulering, før du
   skriver en ny
2. **Dansk, fagligt, menneskeskrevet.** Ingen Danglish ("Follow os" → "Følg os"), ingen
   floskler. En forventning man kan måles på ("Vi svarer typisk inden for én hverdag")
   slår en floskel ("Vi står klar til at hjælpe dig")
3. **Visualisér.** Aldrig mere end ~150 ord ubrudt tekst. Brug diagrammer, kort, lister,
   kort-grids. SVG frem for stockfotos. `MediaPlaceholder` indtil det rigtige billede findes
4. **Mobil først i praksis**, ikke kun i princippet — 74 % af trafikken
5. **Verificér i browser, ikke i hovedet.** Se §12. Næsten hver eneste fejl i dette projekt
   var usynlig i koden og tydelig i en måling
6. **Tal skal holde.** Skriv "ca." ved afstande og tider, og noter forudsætningen
   ("uden myldretid"). Hent fakta fra en kilde — gæt ikke
7. **Commit på dansk** med en beskrivelse af *hvorfor*, ikke kun hvad. Afslut med
   attribution-linjerne

---

## 4. Målestokken — sektionsbredder

Én variabel styrer bredden på **alle** sektioner, så indholdet står på samme venstre- og
højrekant hele vejen ned. Den vokser i trin, fordi en fast 980 px ser ud som en smal
stribe på en 4K-skærm:

```css
:root { --maal: 980px; }
@media (min-width: 1500px) { :root { --maal: 1080px; } }
@media (min-width: 1800px) { :root { --maal: 1220px; } }
@media (min-width: 2200px) { :root { --maal: 1340px; } }
@media (min-width: 2600px) { :root { --maal: 1460px; } }
```

Den stopper ved 1460 px — derover bliver tekstlinjerne for lange. **Ekstra plads på en
meget bred skærm er ikke et problem, der skal løses. Det er luft, og luft er gratis.**

**Alt** skal bruge `var(--maal)`: hero, sektioner, fuldbredde-bånds indre container, og
footeren. Når du finder en hardkodet `max-width: 1200px` / `1500px`, er det sandsynligvis
en rest — skift den.

**Status:** udrullet på klinikssiderne, om os, kontakt og footeren.
**Ikke udrullet endnu:** forsiden, priser, behandlingssiderne.

---

## 5. Sektionssystemet

```css
.sec          /* box-sizing: border-box; margin: 0 auto 64px; max-width: var(--maal) */
.sec--bred    /* max-width: calc(var(--maal) + 120px) */
.sec--panel   /* tonet panel: rgba(45,88,161,.045) + kant + radius 18 + padding 42/40 */
.sec--kort    /* hvidt kort: #fff + kant + radius 18 + padding 42/40 */
.sec__head    /* eyebrow + H2 + manchet */
.sec__eyebrow /* versaler, .72rem, letterspacing .13em, brandblå, streg foran */
.sec__lead    /* max-width: 72ch */
```

### Eyebrow-mønstret

Hver sektion åbner med **eyebrow → H2 → manchet**. Eyebrow'en er en kort kategori
("Kontakt", "Praktisk", "Opland", "Klinikkens læge"), ikke en sætning.
På mørke bånd: `.sec__eyebrow--lys`.

**Overskrifter er venstrestillet overalt.** Vi havde fire skift mellem venstre og
centreret på om os-siden — det var den største enkeltårsag til, at siden virkede sjusket.

### Split-sektioner

```css
.split              /* grid 1.05fr / .95fr, gap 48, align-items center */
.split--medie-foerst /* billedet til venstre via order: -1 */
.split--portraet    /* mediesøjle clamp(300px, 23vw, 440px) — et portræt
                       behøver ikke halvdelen af sektionen */
```

**Rytme:** skift side fra sektion til sektion (portræt venstre → diagram højre). Når alt
det visuelle hober sig op i samme spalte, læses siden som en liste.

**Procentspalter er forbudt.** `width: 40%` + `justify-content: space-between` betyder,
at *mellemrummet* vokser mest på en bred skærm — indholdet skubbes ud til siderne med et
tomt bælte i midten. Brug altid gitter med fast `gap`.

---

## 6. Hero-reglerne

Her ligger de dyrest lærte regler i projektet.

### Fakta om opbygningen

- **Navigationen ligger IKKE oven på heroen.** Heroen begynder præcis dér, hvor
  navigationen slutter (målt: overlap = 0 på alle sidetyper). Derfor giver **lige meget
  padding i top og bund også optisk lige meget luft**. Kompensér ikke for navhøjden
- Nav er 140 px på desktop, 120 px under 1000 px bredde

### Den gældende regel

```css
.bg-img {                       /* global, i App.vue */
  height: auto;
  min-height: 0;
  padding-block: var(--hero-luft);
  box-sizing: border-box;
}
:root { --hero-luft: clamp(24px, 4.5vh, 76px); }
```

Heroen **følger sit indhold**. Luften følger vindueshøjden, så heroen ikke skubber
indholdet under folden på en lille laptop.

### Undtagelser (bevidste)

| Side | Afvigelse | Hvorfor |
|---|---|---|
| Forsiden | `--hero-luft: clamp(56px, 15vh, 140px)`, og over 1000 px skærmhøjde `clamp(56px, 20vh, 190px)` | Baggrundsbilledet **er** indholdet; paddingen bestemmer hvor meget af det man ser |
| Behandlingssider | `padding: 0` | Fuldbredde-billede inde i heroen, skal gå til kanten |
| Kontakt | Bruger `<main>`, ikke `.bg-img` — samme værdier | Anden markup |

**Vigtigt:** forsidens variabel skal hænge på `.home .bg-img`, ikke bare `.bg-img`.
AppHome's style-blok er **ikke scoped**, så den siver ellers ud til alle andre heroer.

### Hvad vi prøvede og forkastede

- **`height: 65vh; min-height: 800px`** (oprindelig): samme side blev forskellig høj alt
  efter browservinduets højde, efterlod 200–270 px tom plads på brede skærme, og klippede
  indhold af på smalle. Fjernet
- **`min-height: calc(100svh - nav - kig)`**: fungerede teknisk (altid et kig til næste
  sektion), men brugeren foretrak den enklere løsning. Ligger i historikken
  (`34ba299`, `e63fffe`) hvis det skal frem igen

### Scroll-pilen

Fjernet på om os og kontakt — den blev lavet, da heroen fyldte hele skærmen, og lå nu oven
i brødteksten. Står stadig på forsiden, hvor den ikke kolliderer. Hvis den skal tilbage,
skal den have **reserveret plads** i heroens bund (`--pil-reserve`), og reserven skal ligge
i den *fælles* regel — en scoped regel i sidens egen fil taber til App.vue's mere
specifikke selector.

---

## 7. Mobilregler

- Gutter: **20 px** i siderne
- Heroer: **tekst først, billede under**. Billedet maks 320–340 px, centreret
- Knapper: fuld bredde (`box-sizing: border-box`, ellers stikker padding ud over kanten)
- Grid-sektioner skal **eksplicit** sættes til én kolonne. Et gitter arver ikke
  `flex-direction: column` fra en gammel regel
- Forsidens hero: baggrunden skubbet til `86% center`, og to dæmpninger — én fra venstre,
  så teksten har sin egen flade, og én fra bunden, så knappen står rent. Uden det lå
  overskriften hen over lægens ansigt

---

## 8. Komponenter vi har bygget

| Komponent | Formål | Note |
|---|---|---|
| `FaqList.vue` | Fælles FAQ på alle sider | Knap + region, ikke `<details>` (kan ikke animeres pålideligt). Svaret er altid i DOM'en for Google. Animation: `grid-template-rows: 0fr → 1fr` |
| `OplandKort.vue` | Køretidsdiagram | Ringene er **køretidsbånd**, afstanden fra midten følger køretid, ikke km. Tallene står som HTML-tekst under diagrammet — ikke inde i SVG'en, så Google og skærmlæsere kan læse dem |
| `MediaPlaceholder.vue` | Billede eller placeholder | Låst billedformat, så der ikke opstår CLS |
| `AppBreadcrumbs.vue` | Brødkrummer | Trækker fra `behandlinger.js` |
| `RelateredeBehandlinger.vue` | Relaterede behandlinger | Trækker fra `behandlinger.js` |

### Kortsproget

Kontaktkort, klinikkort, formularen og FAQ-panelet deler samme udtryk: hvidt, 1 px kant
`rgba(21,54,85,.10)`, radius 18, skygge `0 10px 30px rgba(21,54,85,.06)`, padding 42/40
(26/22 på mobil). **Brug det, når noget nyt skal være et kort.**

### Definitionslister til nøgletal

Adresse / åbningstider / telefon står som `<dl>` med label i versaler til venstre og værdi
til højre. Bruges i klinikkort og kontaktkort.

### Formularelementer

Select, radio og checkbox **tegnes selv** (`appearance: none` + egen pil/prik/flueben).
Browserens standardelementer ser forskellige ud i hver browser og på hvert styresystem —
siden så bogstaveligt talt forskellig ud afhængigt af hvem der kiggede.

---

## 9. Indhold og SEO

- **Eyebrow → H2 → manchet** i hver sektion
- **Én H1 pr. side.** Brug ikke H2 som underrubrik — det brækker overskriftshierarkiet
- **H1 skal ramme en søgning.** "Mød Arash" rammer ingen; "Om DK Skønhedsklinik og læge
  Arash Bagheri" rammer både brand og navn
- **Byerne hører til klinikssiderne.** Sæt dem ikke i om os-sidens H1 — så konkurrerer
  siderne indbyrdes om de samme lokale søgninger
- **Citater:** `<blockquote>` med `<cite>`. Google ser, at det er et citat med en navngiven
  afsender
- **Duplikeret indhold:** heroen må ikke gentage det, kortene lige nedenunder siger. Brug
  pladsen på noget andet
- **`areaServed`** i LocalBusiness-schema skal rumme oplandsbyerne
- **Strukturerede data i brug:** MedicalClinic, LocalBusiness, Person (med `identifier`,
  `hasCredential`, `alumniOf`, `knowsAbout`), FAQPage, BreadcrumbList, OfferCatalog
- **Titler** ≤ 60 tegn, **descriptions** 130–155 tegn
- Har en side under ~400 ord reelt indhold, så byg den ikke endnu

---

## 10. Faktabank (brug disse — gæt ikke)

**Telefon (begge klinikker):** +45 53 50 37 50
**E-mail:** dr_arash_bagheri@yahoo.com *(bør skiftes til @dsklinik.dk — troværdighed)*

| | Vejle | Esbjerg |
|---|---|---|
| Adresse | Søndergade 50, 7100 Vejle | Havnegade 6, 6700 Esbjerg |
| Åbningstider | Søndag 11:00–18:00 | Mandag–fredag 17:00–20:00 |
| Note | Andre tider kan aftales — dog kun søndag indtil videre | Andre tidspunkter kan aftales |
| Parkering | Å-centret (tættest, lige foran døren), Q-Park Bryggen, Enghavecentret | Havnegade/Tikanten, 2 t gratis med p-skive |

**Priser er ens på begge klinikker.** Forundersøgelsen er **gratis og uforpligtende**, og
der betales **efter** behandlingen.

**Botox:** 1 område 550 kr. · 2 områder 1.100 kr. · 3 områder 1.650 kr.
Ordet **"Vistabel" må ikke stå på siden.**

**Køreafstande (ca., ad vej, uden myldretid):**

- Fra Vejle: Jelling 12 km/15 min · Fredericia 24/20 · Horsens 27/25 · Kolding 27/25 · Give 30/25
- Fra Esbjerg: Varde 18/20 · Bramming 19/20 · Ribe 31/30 · Grindsted 47/40

**Om lægen:** læge i 30 år, heraf 17 i det danske sundhedsvæsen, **mere end 20 års erfaring
med kosmetiske behandlinger**. Autorisations-ID 081Q1. Uddannelse i mesoterapi i Paris og
Dubai (2005). Autorisationsregisteret har ingen dyblink-format — link til
`autregweb.stps.dk/da` (søgesiden).

**Igangværende:** STPS-registrering af Vejle som behandlingssted under DK Skønhedsklinik
afventer. Indtil den er på plads: ingen nye botox-relaterede behandlinger på Vejle-siden.

---

## 11. Faldgruber i denne kodebase

Hver af disse har kostet tid. Tjek dem, før du fejlsøger noget andet.

1. **`#app h1/h2/h3 { pointer-events: none }`** i App.vue dræber klik på links og knapper
   *inde i* overskrifter. Der findes en modregel (`h1 a, h1 button, …{ pointer-events: auto }`)
   — rør den ikke
2. **AppHome's `<style>` er ikke scoped.** Alt deri siver ud til hele siden. Scope
   forsidens regler med `.home`
3. **`#Main .bg-img` i AppBehandling er mere specifik end en scoped klasse.** Hvis en
   overstyring ikke virker, er det næsten altid specificitet — tjek den beregnede værdi i
   browseren, ikke kildekoden
4. **`box-sizing`**: `min-height` og `width: 100%` regner *uden* padding som standard.
   Det har kostet to separate fejl (hero 75–150 px for høj, knapper ud over kanten)
5. **`p:nth-child(3)`-selektorer** i om os-heroen knækkede, så snart der kom et element
   mere ind. De er skiftet til klasser — gentag ikke mønstret
6. **Vite kan ikke tømme `dist/`** uden sletterettigheder i mappen. Build fejler med
   `EPERM unlink dist/.htaccess` — bed om sletteadgang til projektmappen
7. **`.git/*.lock` bliver liggende** efter commits uden sletteadgang. Flyt dem
   (`mv .git/HEAD.lock .git/HEAD.lock.stale-$(date +%s)`) eller få sletteadgang
8. **CRLF**: normalisér til LF før du redigerer, ellers bliver diffen på 800 linjer
9. **`@use` skal stå før alle andre regler** i en SCSS-blok
10. **Git-identitet er ikke sat:** brug
    `git -c user.name='behdin123' -c user.email='behdin2010@gmail.com' commit …`
11. **Build regenererer `public/sitemap.xml`** — commit den bevidst, eller nulstil den

---

## 12. Verifikationsmetode

Næsten alle fejl i dette projekt var usynlige i koden. **Mål altid i en rigtig browser.**

```
npm run build
→ pak dist/ som tgz → stage til cloud-containeren → pak ud
→ python3 -m http.server 8777
→ Playwright/Chromium: screenshots + DOM-assertions
```

Mål som minimum på **360 / 390 / 768 / 1440 / 1920 / 2560 px** — og ved **to forskellige
vindueshøjder**, hvis du rører noget med højde:

- `document.documentElement.scrollWidth > innerWidth` → vandret scroll
- Elementer hvis `getBoundingClientRect().right > innerWidth` → stikker ud
- Venstrekanter på alle sektioner → skal være ét tal på desktop
- Hero-højde ved samme bredde og to vindueshøjder → skal være ens
- Overlap mellem absolut placerede elementer og tekst

Cookie-banneret skal afvises først (`button:has-text("Afvis alle")`), og siden skal scrolles
igennem, så lazy-billeder og AOS-animationer er færdige, før du måler.

---

## 13. Status

### Færdigt

- **Klinikssider (Vejle, Esbjerg):** kontaktkort, parkering, behandlingsliste, "Hvem møder
  du?", oplandsdiagram med rigtige køretider, FAQ. Ét venstrekant-mål hele vejen
- **Om os:** lægens baggrund (4 nøgletal + autorisationskort), Person-schema,
  patientinformation, forløb, FAQ som hvidt kort i lyst bånd, CTA-bånd i brandblå
- **Kontakt:** ny hero (tillidspunkter + ring/book), klinikkort med åbningstider,
  formular i kort med egne formularelementer, Instagram-bånd
- **Fælles:** målestok, sektionssystem, eyebrow-mønster, kortsprog, FAQ-komponent,
  behandlingsregister, mobilversion af alle tre heroer

### Næste skridt

1. **Rul målestokken ud** på forsiden, priser og behandlingssiderne
2. **Kontaktsiden mangler indhold:** FAQ-sektion (største SEO-gevinst — FAQPage-schema),
   ContactPage/ContactPoint-schema, indlejret kort, bedre meta-title
3. **E-mail på eget domæne** (@dsklinik.dk) — billigste troværdighedsløft på siden
4. **Fase 2+:** `/behandlinger/` hub og skinbooster-familien (Profhilo, Profhilo Structura,
   Ejal40) — afventer priser fra lægen. Derefter filler, botox-undersider, hårtab
5. **Venter på brugeren:** 17 behandlingspriser, lægens uddannelsesdetaljer til schema,
   STPS-mail om Vejle, rettelse af typo "DK Skønhedklinik" i STPS, Google-anmeldelser

### Slået fra (ikke slettet)

Veninde-rabatten på kontaktsiden: `visVenindeRabat = false` i `KontaktOs.vue`. Markup og
styling står urørt — tændes med ét ord.
