# DK Skønhedsklinik — arbejdsregler

Gælder alt arbejde på dsklinik.dk. Læs før du skriver kode eller tekst.

## 0. Før du rører noget

**Alt tekst, der allerede ligger på sitet, er godkendt af klinikkens læge.**
Før du skriver om et emne, så søg efter det i `src/` først. Ny tekst må aldrig
modsige eksisterende tekst om samme emne — to forskellige svar på samme
spørgsmål er værre end ingen af dem.

Faktaer der SKAL være ens overalt: priser, varighed, holdbarhed, nedetid,
48 timers betænkningstid, 18-års grænse, "udføres af læge".

Kun behandlinger fra den godkendte liste må beskrives. Står den ikke på listen,
findes den ikke på sitet. Det gælder også i FAQ og brødtekst.

## 1. UI og design

Siden skal se ud, som om den er bygget af et professionelt udviklerteam. Hver
ny side skal kunne stå ved siden af de eksisterende uden at se fremmed ud.

- Farver: `$c-dark: #153655`, `$c-blue: #2d58a1`. Ingen nye farver uden en beslutning
- Genbrug de etablerede mønstre frem for at opfinde nye: `hero` med `eyebrow`,
  `chips`, `block`, `price-table`, `faq-item` med `<details>`, `closing` med CTA.
  Se `LaebefillerView.vue` og `PriserView.vue` som reference
- Mobil først. 74 % af trafikken er mobil. Tjek 375 px bredde
- Hver side har: hero, mindst én CTA undervejs, afsluttende CTA med telefon
- Maks bredde på brødtekst: 72ch. Linjehøjde 1.7

## 2. Visualisering — ingen tekstmure

**Hårdt krav: maks ca. 150 ord ubrudt tekst.** Derefter skal der komme noget
visuelt — billede, tabel, trinliste, fremhævet boks, ikonrække eller diagram.

- Hver behandlingsside har mindst: 1 hero-billede + 1 forklarende visuelt element
- Tal hører i tabeller, ikke i sætninger
- Forløb hører i nummererede trin, ikke i afsnit
- **Placeholders:** brug `<MediaPlaceholder>` med korrekt aspect-ratio, rigtig
  alt-tekst og en note om hvad billedet skal vise. Aldrig et tomt eller brudt
  billede. Så er udskiftning til det rigtige asset én linje
- Billeder: WebP, maks 1800 px, beskrivende filnavn, dansk alt-tekst der
  beskriver hvad man ser — ikke en søgeordsliste
- Ansigts- og områdekort tegnes som inline SVG, så de er skarpe og kan rettes

## 3. Indhold

Skrevet til danskere, af et menneske, fagligt korrekt.

- Ingen oversat engelsk-klang, ingen superlativer, ingen "Vi er stolte af at
  kunne tilbyde". Skriv som lægen ville forklare det i konsultationen
- Tag det ubehagelige med: hævelse, bivirkninger, hvad behandlingen *ikke* kan,
  hvor lang tid man ser mærkelig ud. Det er både ærligt og det, Google belønner
- Hver side skal sige noget, de andre sider ikke siger. Ingen genbrugte
  tekstblokke på tværs af sider
- Produktnavne på receptpligtig medicin må ikke stå på sitet. Brug det generiske
  navn (fx "et godkendt botulinumtoksin")
- Ingen påstande lægen ikke har godkendt

## 4. SEO pr. side

- Én søgeintention pr. side. Aldrig to
- Titel ≤ 60 tegn, description 130–155 tegn
- Ét `<h1>`, der matcher den søgning siden skal vinde
- Selvrefererende canonical, trailing slash, med i `src/seo/routes.public.json`
  og i `BASE_ROUTES` i `vite.config.js`
- Schema: `MedicalProcedure` + `FAQPage` + `BreadcrumbList`
- Interne links ind fra moderside, hub og footer — altid kanonisk URL med `/`
- Under 400 ord: byg den ikke. Lav den til et afsnit på moderens side i stedet

## 5. Informationsarkitektur

**Én side pr. søgeintention — ikke én side pr. behandling.**

Egen URL kræver alle tre:
1. Folk søger på ordet selvstændigt
2. Der er 400+ ord unikt at sige, som ikke står på modersiden
3. Intentionen er en anden — anden person, andet problem, anden beslutning

Ellers: H2/H3-afsnit med anker-id på modersiden.

Struktur: `/behandlinger/` (hub) → kategori-/behandlingsside → underside.
Se `claude/arbejdsstandard-og-informationsarkitektur.md` i projektet for det
fulde kort.

## 6. Teknik

- Byg aldrig i `node_modules` fra Windows — byg i en ren kopi med `npm ci`
- Nye ruter skal tilføjes tre steder: `src/router/index.js`,
  `BASE_ROUTES` i `vite.config.js`, og `src/seo/routes.public.json`
- Verificér efter build: titel/description-længde, canonical, `lang="da"`,
  gyldig JSON-LD, antal prerenderede sider
- Ændr ikke URL-struktur uden grund. Hver ændring koster en konsolideringsrunde

## 7. Commits

Dansk commit-besked uden danske specialtegn (æøå → ae/oe/aa) pga. terminalen.
Forklar *hvorfor*, ikke kun hvad. Afslut med:

```
Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
```
