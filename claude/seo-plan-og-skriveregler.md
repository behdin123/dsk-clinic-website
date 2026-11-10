# DK Skønhedsklinik — SEO-plan, status og skriveregler

**Formål:** denne fil er en overdragelse af SEO-arbejdet. Den samler hvad vi ved, hvad vi
har gjort, hvad der er besluttet, og hvordan nyt indhold skal skrives — så en ny chat kan
fortsætte præcist uden at genopdage det hele.

**Søsterfil:** `claude/design-og-opsaetning.md` rummer design, hierarki, komponenter og
kodefælder. Læs den, før du rører koden. Denne fil handler om *hvad* der skal skrives og
hvorfor — den anden om *hvordan* det skal se ud.

**Start her:** §1 (hvor vi står), §7 (skriveregler), §8 (tjekliste pr. side). Resten er
opslagsværk.

---

## 1. Hvor vi står

### Seneste måling (GSC, 12. okt – 8. nov 2026)

Rådata: `F:\Pictures\Esbjerg skønhed\GSC - data\10 november - 2026\`. Perioden overlapper
udgangspunktet med en uge, og hub-siden + områdeafsnittene (live 3. nov) har kun seks dage i
tallene. **Det er for tidligt at dømme dem — mål dem igen i december.**

| Måltal | Okt (22/9–19/10) | Nov (12/10–8/11) |
|---|---|---|
| Klik | 69 | **97** |
| Eksponeringer | 4.788 | 5.607 |
| Gns. position | 21,7 | 23,3 |
| Mobil / computer (klik) | 74 % mobil | 86 / 11 — 89 % mobil |

**Det der gik frem**

- Klik +41 %. Forsiden 62 klik, `/klinik/vejle/` 11 klik (var 2 klik på alle Vejle-søgninger)
- **Botox er nu den største klynge:** `botox esbjerg` 201 eksp., position 12,0, 5 klik ·
  `botox vejle` 196 eksp., position 16,0, 3 klik
- `filler esbjerg` position 7,5 → 10,0, men stadig 3 klik (138 eksp.)
- `microneedling esbjerg` 11,0 → 8,9 — faldet er delvist rettet af sig selv

**Det der står stille eller gik tilbage**

- `skønhedsklinik vejle` 10,7 → **13,6** (197 eksp., 0 klik) · `filler vejle` 10,8 → 11,9
  (165 eksp., 0 klik) · `lip filler vejle` 12,8 (86 eksp., 0 klik)
- `lip filler esbjerg` position **3,3 og stadig 0 klik** (26 eksp.) — det er anmeldelser og
  kortresultatet, ikke teksten
- Computer: 2.971 eksponeringer, 11 klik (0,37 %)
- `/behandlinger/filler/` 682 eksp., 2 klik · `/klinik/esbjerg/` 357 eksp., 1 klik

**Klynger (bots filtreret fra, kun søgninger GSC viser):**

| Klynge | Eksp. | Klik | Position |
|---|---|---|---|
| Vejle (alle søgninger med bynavnet) | 1.213 | 5 | 18,6 |
| Esbjerg | 671 | 10 | 19,5 |
| Botox | 486 | 8 | 16,8 |
| Filler (uden læber) | 482 | 3 | 16,1 |
| Læbefiller | 181 | 0 | 17,6 |
| Microneedling | 186 | 0 | 23,1 |
| Mesoterapi | 177 | 0 | 32,0 |
| PRP / vampyrbehandling | 213 | 0 | 32,1 |
| Skinbooster / Profhilo | 88 | 0 | 22,3 |
| Opland (Varde, Fredericia m.fl.) | 95 | 0 | 26,0 |
| Støj: "skønhedsklinik" alene | 1.165 | 0 | 44,4 |
| Støj: kosmetolog, ansigtsbehandling, voks/laser, andre byer | ca. 640 | 0 | — |

**Læsning:** Vejle har stadig næsten dobbelt så mange eksponeringer som Esbjerg og halvt så
mange klik. Diagnosen fra oktober holder: vi bliver vist, men ikke valgt. Nye ord at holde
øje med: `microneedling vejle` (102 eksp., position 15,2), `filler varde` (33) og
`botox varde` (25).

### Udgangspunkt (GSC, 22. sep – 19. okt 2026)

| Måltal | Værdi |
|---|---|
| Klik | 69 |
| Eksponeringer | 4.788 |
| CTR | 1,44 % — **men reelt ca. 3,6 %**, se nedenfor |
| Gns. position | 21,7 |
| Mobil | 74 % af klikkene, rangerer 9 pladser bedre end computer |

**Halvdelen af tallene er støj.** Ca. 1.850 af eksponeringerne er værdiløse: ordet
"skønhedsklinik" alene (909 eksp., position 50 — nationalt hovedord vi ikke vinder),
bot-søgninger (530), andre byer (230), "kosmetolog" (100, forkert målgruppe), og
behandlinger vi ikke tilbyder (79).

> **Mål aldrig på samlet CTR.** Den reelle base er ca. 1.900 eksponeringer.
> Filtrér altid bots fra med regex `dk\d+$` under "Matcher ikke" i GSC.

### Det tekniske er i orden

Titler, descriptions, schema, canonical, trailing slash-redirects, sitemap og indeksering
er på plads. Alle rigtige sider er indekseret. **Problemet er ikke teknisk.**

### Den centrale observation

Vi rangerer på side 1-grænsen på de rigtige søgninger og får **nul klik**.

| Søgning | Eksponeringer | Position | Klik |
|---|---|---|---|
| skønhedsklinik vejle | 197 | 10,7 | 0 |
| filler vejle | 164 | 10,8 | 0 |
| vampyrbehandling hår | 114 | 7,2 | 0 |
| lip filler vejle | 78 | 12,6 | 0 |
| **lip filler esbjerg** | 27 | **3,4** | 0 |
| mesoterapi hals | 12 | 6,1 | 0 |

Vejle er vendt fra katastrofe til lige-under-tærsklen (skønhedsklinik vejle: 31,9 → 10,7),
men Vejle har nu **dobbelt så mange eksponeringer som Esbjerg** (1.003 mod 521) på samme
position — og **en femtedel af klikraten** (0,20 % mod 1,15 %).

**Vi bliver vist i Vejle. Vi bliver ikke valgt.**

---

## 2. Diagnosen — fire huller

| # | Hul | Bevis |
|---|---|---|
| 1 | **Ingen anmeldelser** | Konkurrenterne har 17–136. Vi har nul |
| 2 | **Klinikssiderne var 4× for tynde** | 252 ord mod konkurrentens ~950 — **rettet, se §4** |
| 3 | **For få sider i emnet** | 13 sider mod 30–60+ hos dem, der ligger over os |
| 4 | **Citationerne er forkerte eller mangler** | Vi står som "DSDK Skønhedklinik Esbjerg" ét sted og slet ikke i Vejle |

### Hul 1 er det største — og det ligger uden for websitet

`behandlingsguide.dk` trækker på STPS-data og rangerer på "kosmetiske klinikker [by]".

**Vejle (19 klinikker):** Tenna Plesner 5,0 (136) · Horsager 4,7 (119) · Beauty skin studio
4,9 (113) · Clinic Invitus 5,0 (93) · N'AGE 4,9 (84) · **DK Skønhedsklinik: står ikke på listen**

**Esbjerg (14 klinikker):** CeriX 4,9 (67) · HE Hudlægeklinikken 3,3 (63) · Aleris 4,6 (36) ·
Christine Rewitz 4,9 (28) · **DSDK Skønhedklinik Esbjerg: ingen anmeldelser**

Anmeldelser virker tre steder på én gang: **kortresultatet**, **stjerner i søgeresultatet**
(en af de stærkeste CTR-faktorer der findes) og **hvem folk ringer til**. På mobil — 74 % af
trafikken — fylder kortresultatet næsten hele skærmen.

> **Det forklarer 1.003 eksponeringer og 2 klik bedre end noget på websitet gør.**
> Ingen tekstrettelse vinder mod en klinik med 136 anmeldelser og fem stjerner.

**Rutine der skal i drift:** direkte anmeldelseslink på SMS samme dag som behandlingen.
Ét link, ét klik — ikke "husk at anmelde os". Mål: 20 pr. klinik, ca. to om ugen.
Ved 10+ pr. klinik tilføjes `AggregateRating` i schema → stjerner i det organiske resultat.

**Status pr. 30. okt 2026:** 1 anmeldelse på Google (Esbjerg), 1 på Facebook.

### Hul 4 — navnekonsistens

Klinikken findes under mindst tre navne: "DK Skønhedsklinik" (websitet),
"Esbjerg Skønhedsklinik" (STPS, nu ændret på virk.dk) og "DSDK Skønhedklinik Esbjerg"
(behandlingsguide.dk). Google kan ikke se, at det er samme virksomhed.

Når STPS-sagen går igennem med navnet DK Skønhedsklinik og Vejle som afdeling, **retter det
sig selv i registeret** og giver samtidig en Vejle-citation.

---

## 3. Den oversete styrke: lægen

Det her er et sundhedswebsite. Google stiller skærpede krav til troværdighed (E-E-A-T) på
den slags. **Vores største differentiering mod de 19 klinikker i Vejle er, at behandlingerne
udføres af en læge** — og vi brugte den næsten ikke.

`arash bagheri` rangerer på **position 1 med 30 % CTR**. Folk søger på ham ved navn. Der er
en person-entitet, Google kan forankre tilliden i.

**Gjort:** `Person`-schema udvidet med autorisations-ID 081Q1, `hasCredential`, `alumniOf`,
`knowsAbout`. Lægeprofil-sektion på `/omos/` med fire nøgletal og autorisationskort.
Link til Autorisationsregisteret (`autregweb.stps.dk/da` — der findes ikke noget
dyblink-format).

**Mangler:** "Fagligt gennemgået af læge Arash Bagheri" med dato nederst på hver
behandlingsside. `Physician` som type på klinikkerne. Lægens uddannelsesdetaljer til schema.

> **Aldrig:** skriv ikke "speciallæge". Han er læge, ikke speciallæge. Det blev fanget i
> det offentlige register og rettet tre steder på sitet.

---

## 4. Hvad der er gjort — pr. side

Ordtal er målt i den byggede HTML og **inkluderer nav og footer** (ca. 180–200 ord).
Træk det fra for reelt sideindhold.

| Side | Ord | SEO-status |
|---|---|---|
| `/` forside | 942 | H1 med "Lægebehandlet Botox, Filler & Hudbehandlinger i Esbjerg & Vejle". MedicalClinic-schema |
| `/klinik/vejle/` | 899 | ✅ **Fase 1 udført.** Fra 252 ord. Kontaktkort, parkering med navngivne p-huse og takster, behandlingsliste med priser, lægeprofil, oplandsdiagram med rigtige køretider, lokal FAQ, `areaServed` udvidet |
| `/klinik/esbjerg/` | 832 | ✅ Samme |
| `/omos/` | 958 | ✅ E-E-A-T udbygget. H1 ændret fra "Mød Arash" til "Om DK Skønhedsklinik og læge Arash Bagheri". Person-schema, autorisation, citat som `blockquote` med `cite` |
| `/kontaktos/` | 714 | ✅ **Udført 10. nov.** FAQ med seks spørgsmål, FAQPage- og ContactPage-schema, klinikkernes schema-url peger på deres egne sider |
| `/priser/` | 701 | Botox-priser rettet (550/1.100/1.650). "Vistabel" fjernet. Position 25 — skal linkes fra hver behandlingsside |
| `/behandlinger/botox/` | — | ✅ **Syv områdeafsnit live** (pandelinjer, bekymringsrynker, kragetæer, brynløft, bunny lines, sure mundvige, hagegrube) med ankermenu og områdefoto. Godkendt af lægen 10. nov |
| `/behandlinger/filler/` | — | ✅ **Fem områdeafsnit live** (kindben, smilelinjer, marionetlinjer, tindinger, hænder). Godkendt af lægen 10. nov. Prisen skal skrives "fra 1.350 kr. pr. ml" |
| `/behandlinger/filler/laeber/` | 1.005 | ✅ **Bygget.** Svarer på `lip filler esbjerg` position 3,4 med nul klik |
| `/behandlinger/skinbooster/` | 679 | Live. Skal bygges om til vælgerside med sammenligningstabel |
| `/behandlinger/microneedling/` | 684 | Live. "Akne-ar" skal i title. Faldt fra position 5,4 til 11,0, nu 8,9 (nov) |
| `/behandlinger/mesotherapy/` | 683 | Live. URL og H1 er engelsk — skal omdøbes til `/mesoterapi/` med 301 |
| `/behandlinger/prp/` | — | "Tilbydes ikke længere"-side. Bevaret pga. 84 klik / 3.816 eksp. historisk |
| `/booking/` | — | Gecko-embed. Position 3,8 |
| `/behandlinger/` | — | ✅ **Live 3. nov.** Oversigt med alle behandlinger, megamenu og Book-knap i navigationen. 80 eksp. på position 56 efter seks dage |
| `/viden/` + 7 artikler | — | Slået fra i routeren. Filerne findes |

### Teknisk gjort

- `.htaccess`: mapper uden index 404'er korrekt (var redirect-til-ingenting).
  `deploy-version.txt` noindexet
- Trailing slash-konsolidering kører. De 11 "Side med omdirigering" i GSC er **korrekt
  sluttilstand** — rør dem ikke
- `src/data/behandlinger.js` som centralt register: nav, footer, relaterede, brødkrummer
- `FaqList.vue` som fælles FAQ-komponent — svaret er altid i DOM'en, så Google ser det

---

## 5. Informationsarkitektur — låst

### Princippet

**Én side pr. søgeintention — ikke én side pr. behandling.**

35 godkendte behandlinger bliver til 18 sider. Egen URL kræver **alle tre**:

1. folk søger på ordet selvstændigt
2. der er 400+ ord unikt at sige
3. **intentionen er en anden** — en anden person, et andet problem, en anden beslutning

Ellers bliver det et afsnit med anker på modersiden.

> **Afsnit er ikke en nødløsning.** Google kan siden 2021 rangere et enkelt afsnit på en
> snæver søgning. Men kun hvis afsnittet er bygget rigtigt: egen H3 med søgeordet, eget
> anker-id, 120–200 ord der siger noget specifikt, eget visuelt element, og en ankermenu
> øverst på siden.

### Beviset for at modellen virker

`christinerewitz.dk` i Esbjerg har egne sider pr. symptom (`/botox/rygerynker`,
`/botox/bekymringsrynke`). **De rangerer over os i vores egen by lige nu.** Strategien er
ikke teori.

### URL-strukturen

Slugs er uden æøå med vilje — de procent-kodes og ser ødelagte ud, når folk deler dem.

| URL | Søgningen den skal vinde | Status |
|---|---|---|
| `/behandlinger/` | kosmetiske behandlinger esbjerg/vejle | ✅ live |
| `/behandlinger/botox/` | botox esbjerg, rynkebehandling | live |
| `/behandlinger/botox/nefertiti-loeft/` | nefertiti løft, halsstrenge | planlagt |
| `/behandlinger/botox/gummy-smile/` | gummy smile | planlagt |
| `/behandlinger/filler/` | filler esbjerg | live |
| `/behandlinger/filler/laeber/` | læbefiller, lip filler | ✅ bygget |
| `/behandlinger/filler/kaebelinje/` | kæbelinje filler, hagefiller | planlagt |
| `/behandlinger/filler/naese/` | næsefiller, næsekorrektion uden operation | planlagt |
| `/behandlinger/filler/oploesning/` | opløse filler, fjerne filler | planlagt |
| `/behandlinger/skinbooster/` | skinbooster | vælgersektion bygget, ikke udgivet |
| `/behandlinger/skinbooster/profhilo/` | profhilo, profhilo pris | bygget, ikke udgivet |
| `/behandlinger/skinbooster/profhilo-structura/` | profhilo structura | bygget, ikke udgivet |
| `/behandlinger/skinbooster/ejal40/` | ejal40 | bygget, ikke udgivet |
| `/behandlinger/microneedling/` | microneedling esbjerg, akne ar | live |
| `/behandlinger/mesoterapi/` | mesoterapi | omdøbes fra `mesotherapy` |
| `/behandlinger/haartab/` | hårtab behandling | planlagt |
| `/behandlinger/svedbehandling/` | svedbehandling, botox mod sved | planlagt (STPS) |
| `/behandlinger/kaebespaendinger/` | tandskæren, kæbespændinger | planlagt (STPS) |
| `/behandlinger/prp/` | vampyrbehandling, prp | bevares |

**Hvorfor `nefertiti-loeft` og ikke `nefertiti`:** "nefertiti" alene er tvetydigt — det er
en egyptisk dronning. Det tostavede udtryk er det, folk søger.

**Hvorfor `/haartab/` og ikke `/mesoterapi/haartab/`:** ingen søger "mesoterapi hårtab".
Mesoterapi er metoden, hårtab er problemet — og problemet er det, folk Googler.

### Hvad der bliver afsnit, ikke sider

- **Botox:** pandelinjer · bekymringsrynker/glabella · kragetæer · brynløft · bunny lines ·
  sure mundvige · hagegrube
- **Filler:** kindben · smilelinjer (nasolabiale) · marionetlinjer · tindinger · hænder
- **Læbefiller:** læbelinjer · lip flip
- **Skinbooster:** Restylane Skinbooster/Vital · Polynukleotider · Sunekos

> **Polynukleotider holdes under observation.** Stigende søgning, lav dansk konkurrence,
> anden virkningsmekanisme end hyaluronsyre. Forfremmes til egen side hvis data viser
> efterspørgsel.

### Kannibalisering der skal undgås

`/filler/kaebelinje/` og `/botox/nefertiti-loeft/` ville begge jagte "kæbelinje".

**Afgrænsning:** filler-siden ejer *at bygge* kæbelinjen op med volumen. Nefertiti-siden
ejer *at stramme* den nedefra. Hver side får et afsnit "Hvad er forskellen?" med link til
den anden.

Samme princip: **byerne hører til klinikssiderne.** Sæt dem ikke i om os-sidens H1 — så
konkurrerer siderne indbyrdes om de samme lokale søgninger.

### Bygges ikke

| Udeladt | Grund |
|---|---|
| Migræne | Ikke godkendt af lægen. Det juridiske spørgsmål er dermed også ude af verden |
| Tear trough / mørke rande | Ikke godkendt. **Den slukkede artikel `af-med-moerke-rande.vue` må ikke love filler under øjnene, hvis vidensuniverset tændes igen** |
| Kemisk peeling, PDO-tråde | Ikke på den godkendte liste |

---

## 6. Faseplanen

**Rytme: 1–2 uger mellem faserne.** Hvis 13 sider udgives på én gang, kan vi ikke se hvad
der virkede. Hver fase rammer sin egen søgeordsklynge, så GSC kan adskille dem.

| Fase | Indhold | Status |
|---|---|---|
| **0** | `behandlinger.js`, `MediaPlaceholder`, `AppBreadcrumbs`, `RelateredeBehandlinger`, menu bygget om | ✅ Færdig |
| **1** | Vejle + Esbjerg til 800–900 ord | ✅ Færdig |
| **2a** | `/behandlinger/` hub | ✅ Live 3. nov |
| **2b** | Skinbooster som vælgerside · Profhilo · Profhilo Structura · Ejal40 | 🔶 **Bygget 10. nov, ikke udgivet.** Venter på lægens gennemgang: `claude/laegegennemgang-skinbooster-familien.md` |
| **3** | `/filler/kaebelinje/` · `/filler/naese/` · `/filler/oploesning/` | Planlagt. Filler-afsnittene er live |
| **4** | `/botox/nefertiti-loeft/` · `/botox/gummy-smile/` | Planlagt. Botox-afsnittene er live |
| — | Kontaktsidens FAQ + ContactPage-schema | ✅ Live 10. nov |
| **5** | `/haartab/` · microneedling med akne-ar i title · **mesoterapi-omdøbning med 301** | Planlagt |
| **6** | `/svedbehandling/` · `/kaebespaendinger/` | Venter på STPS |

### Hvorfor fase 2 er næst

Højeste købsintention af alle de nye sider — den, der søger "Profhilo Esbjerg", ved præcis
hvad hun vil have. Og **Structura har næsten ingen danske sider endnu; det vindue lukker
inden for et år.** De tre produktsider deler samme indholdsmodel, så de er effektive at
bygge samlet. Hub-siden lukker samtidig den sidste mappe-404 og fanger 266 eksponeringer.

**Mesoterapi-omdøbningen tages som en isoleret commit**, så effekten kan måles for sig.

### Parallelt, uafhængigt af faserne

1. **Anmeldelser** — største enkeltstående løftestang
2. **Ret navnet i behandlingsguide.dk** og få website-linket på. Det er én mail
3. **"Fagligt gennemgået af"** på hver behandlingsside
4. **Interne links til `/priser/`** fra hver behandlingsside med ankertekst "se priser på botox"
5. **Før/efter-billeder** — kræver beslutning om markedsføringsregler og skriftligt samtykke

---

## 7. Skriveregler for nyt indhold

Det her er den vigtigste del af filen. Al tekst på sitet skal følge disse regler.

### 7.1 Målgruppe

**Vi skriver til danskere, der overvejer en kosmetisk behandling — ikke til branchen.**

Hovedmålgruppen er kvinder 30–60 i Esbjerg, Vejle og oplandet, som er usikre på om det er
trygt, hvad det koster, og om resultatet bliver naturligt. De sammenligner 3–5 klinikker og
vælger den, der virker mest troværdig.

**To undermålgrupper sitet ikke rammer i dag:**

- **Mænd og yngre** — kæbelinje, svedbehandling, tandskæren. De søger ikke på
  "skønhedsklinik". De søger på problemet
- **Oplandet** — Kolding, Fredericia, Horsens, Varde, Ribe, Grindsted. Position 32,5 på
  79 eksponeringer. En konkurrent markedsfører allerede "Botox i Varde nær Esbjerg"

**Søgeren er bekymret, ikke begejstret.** Det styrer tonen: svar på bekymringen først.

### 7.2 Tone og sprog

- **Skrevet af et menneske, til danskere.** Ingen oversat engelsk-klang, ingen
  AI-fraser ("i en verden hvor...", "det er vigtigt at bemærke"), ingen superlativer
- **Ingen Danglish.** "Follow os" → "Følg os". "Lip filler" må gerne stå som søgeord i en
  parentes, men brødteksten skriver "læbefiller"
- **Konkret frem for løftende.** "Vi svarer typisk inden for én hverdag" slår
  "Vi står klar til at hjælpe dig". En forventning man kan måles på slår en floskel
- **Korte sætninger. Aktiv form.** "Lægen lægger fillerne" — ikke "fillerne lægges"
- **Du, ikke man.** "Du kan køre hjem bagefter"
- **Ingen emoji.** De ser hjemmelavede ud på en lægeklinik

### 7.3 Troværdighed — det vigtigste greb

**Tag det ubehagelige med.** Hævelse, blå mærker, bivirkninger, hvad behandlingen *ikke*
kan, hvem der ikke er kandidat. Det er det, der adskiller en lægeklinik fra en salgsside —
og det er det, Google belønner på sundhedsindhold.

En side der kun siger gode ting, læses som reklame. En side der siger "du vil sandsynligvis
være hævet i to dage, og hos nogle holder det kortere end hos andre", læses som rådgivning.

**Brug disse signaler — de adskiller jer fra kosmetologklinikkerne:**
erfaren læge · autoriseret · registreret hos Styrelsen for Patientsikkerhed ·
48 timers betænkningstid · 18-års grænse · gratis og uforpligtende forundersøgelse ·
sterilt engangsudstyr.

### 7.4 Faktakonsistens — hård regel

**Læs altid det, der allerede står på sitet, først.** Alt eksisterende indhold er godkendt
af lægen. Ny tekst må aldrig modsige den.

Fakta der skal være **ens overalt**: priser · varighed · holdbarhed · nedetid ·
48 timers betænkningstid · 18-års grænse · åbningstider · telefonnummer.

Når du ændrer et tal ét sted, så søg efter det i hele `src/` og ret det alle steder.
Prissiden og behandlingssiderne skal altid stemme.

### 7.5 Juridisk

- **Produktnavne på receptpligtig medicin står ikke på sitet.** "Vistabel" er fjernet og må
  ikke tilbage. Beskriv *behandlingen* ("behandling mod øget svedtendens"), ikke lægemidlet
- **Kun behandlinger fra den godkendte liste.** Se
  `claude/behandlingskatalog-til-laegens-godkendelse.md`
- **Lægen læser alle nye medicinske tekster, inden de går live.** Ingen undtagelser
- Før/efter-billeder kræver skriftligt samtykke og en afklaring af markedsføringsreglerne

### 7.6 Struktur i teksten

- **Maks ca. 150 ord ubrudt tekst.** Så skal der komme noget visuelt: tabel, diagram,
  nummererede trin, kort-grid
- **Tal hører i tabeller**, ikke i sætninger. Forløb hører i nummererede trin
- **Hver side skal sige noget, de andre ikke siger.** Hvis to sider kan bytte afsnit uden at
  nogen opdager det, er den ene overflødig
- **Under 400 ord unikt indhold: byg ikke siden.** Lav den til et afsnit i stedet

### 7.7 Søgeordsbrug

- **Én søgeintention pr. side.** Skriv den ned, før du begynder
- Søgeordet i **title, H1, første 100 ord og mindst én H2** — og så ellers naturligt
- **Skriv ordet som folk søger det.** "Rynkebehandling" er både mere søgt og mere
  reklamesikkert end "botox". "Læbefiller" slår "læbevolumen"
- Long-tail kommer af sig selv, hvis afsnittene er specifikke nok. Jagt dem ikke med fyld

---

## 8. Tjekliste for en ny side

Kør den hver gang. Ingen side går live uden.

**Før du skriver**

- [ ] Hvilken ene søgning skal siden vinde? Skriv den ned
- [ ] Er der 400+ ord unikt at sige? Hvis nej → afsnit på modersiden i stedet
- [ ] Hvad siger de eksisterende sider om emnet? Modsig det ikke
- [ ] Kannibaliserer den en anden side? Hvis ja → skriv afgrænsningen ind på begge

**Indhold**

- [ ] 600–900 ord reelt indhold
- [ ] Ét H1, der matcher søgningen
- [ ] H2/H3-struktur med søgeordsvarianter
- [ ] Pris — uden den konverterer siden dårligt og kan ikke bære `Offer`-schema
- [ ] Forløb i nummererede trin
- [ ] Bivirkninger og begrænsninger med
- [ ] FAQ, 4–6 spørgsmål, skrevet som folk spørger
- [ ] Maks 150 ord mellem hvert visuelt element
- [ ] SVG-diagram frem for stockfoto på områdesider

**SEO**

- [ ] Title ≤ 60 tegn, med søgeord + by
- [ ] Description 130–155 tegn, med en grund til at klikke
- [ ] Canonical, trailing slash
- [ ] `MedicalProcedure` + `FAQPage` + `BreadcrumbList` schema
- [ ] Interne links: til `/priser/`, til moderside, til 2–3 relaterede behandlinger
- [ ] Siden tilføjet i `src/data/behandlinger.js` — så dukker den op i nav, footer,
      relaterede og brødkrummer automatisk
- [ ] Sitemap (genereres ved build)
- [ ] OG-billede
- [ ] Alt-tekster der beskriver billedet, ikke gentager søgeordet

**Efter**

- [ ] Lægen har læst den medicinske tekst
- [ ] Byg og verificér i browser — se design-filens §12
- [ ] Anmod om indeksering i GSC (kun for reelt nye sider)
- [ ] Noter udgivelsesdatoen, så effekten kan måles i næste GSC-udtræk

---

## 9. Beslutninger der stadig venter

| # | Spørgsmål | Grundlag |
|---|---|---|
| 1 | **Vampyrbehandling** — 133 eksp. på position 7 for en behandling I ikke tilbyder. Enten en kort afklarende sektion på PRP-siden, eller lad den gå. I dag fanger den folk, vi skuffer | GSC |
| 2 | **Ansigtsbehandling / hudpleje** — 140 eksp., position 25,7. Ind som overbegreb på hudsiderne, eller forkert målgruppe? | GSC |
| 3 | **`microneedling esbjerg`** faldt fra 5,4 til 11,0 og ligger nu på 8,9 (17 eksp.). For få eksponeringer til at konkludere — følg den i december | GSC |
| 4 | **E-mail på eget domæne.** `dr_arash_bagheri@yahoo.com` på en lægeklinik underminerer E-E-A-T. En adresse på @dsklinik.dk er det billigste tillidsløft på sitet | Vurdering |
| 5 | **Vidensuniverset** — syv færdige artikler slået fra i routeren. Billigste trafikgevinst på listen, men de skal gennemlæses for den slukkede tear trough-artikel først | Kode |
| 6 | **Priser for fase 3–6** mangler stadig: Nefertiti-løft, gummy smile, kæbelinje/hage, næsefiller, opløsning af filler, hårtab, svedbehandling, kæbespændinger. Fase 2 er ikke længere blokeret | Åben |

### Priser modtaget fra lægen 10. nov 2026

| Behandling | Pris |
|---|---|
| Botox | 550 kr. pr. område — **gælder alle områder**, også brynløft, bunny lines, sure mundvige og hagegrube |
| Filler | fra 1.350 kr. pr. ml |
| Ejal40 | 1.350 kr. |
| Profhilo | 2.300 kr. |
| Profhilo Structura | 3.100 kr. |

Sitet skriver i dag "1.350 kr. pr. ml" om filler uden "fra". Det rettes samlet (prisside,
filler, læbefiller, `behandlinger.js`), når fase 2b bygges.

---

## 10. Hvad der IKKE skal gøres

- **Ikke ændre URL-struktur nu.** Vi er midt i en trailing slash-konsolidering. Hver
  ændring koster en ny runde. Mesoterapi-omdøbningen venter til den er færdig
- **Ikke "rette" de 11 omdirigeringer i GSC.** Det ER den rigtige sluttilstand. Anmod ikke
  om indeksering af dem, fjern dem ikke, læg dem ikke i sitemap
- **Ikke jagte "skønhedsklinik" alene.** 909 eksponeringer på position 50 — nationalt
  hovedord vi ikke vinder, og som ikke giver kunder i Esbjerg
- **Ikke bygge bysider uden reelt indhold.** Oplandet klares med afsnit på klinikssiderne
  først. Tomme kopisider straffes
- **Ikke anmode om indeksering i stor stil.** Kvoten er ca. 10/dag og forbedrer ikke
  placeringen — den sætter kun siden i kø til crawl
- **Ikke udgive flere faser på én gang.** Så kan vi ikke se hvad der virkede

---

## 11. Sådan måler vi

**Næste udtræk: midten af december 2026** — første måling, hvor hub, områdeafsnit og
kontaktsidens FAQ har en hel periode. Sammenlign med tallene i §1.

| Måltal | Okt 2026 | Nov 2026 | Mål (jan 2027) |
|---|---|---|---|
| Klik i alt / 28 dage | 69 | 97 | — |
| Klik fra "vejle"-søgninger | 2 | 5 | 25+ |
| `skønhedsklinik vejle` position | 10,7 | 13,6 | top 5 |
| `filler esbjerg` CTR | 2,42 % (pos 7,5) | 2,17 % (pos 10,0) | 5 % |
| `botox esbjerg` position | — | 12,0 | top 5 |
| Omdirigeringsfejl | 1 | ikke i udtrækket | 0 |
| Sider med to versioner i resultatrapporten | 8 | 1 (`/booking` uden skråstreg) | 0 |
| Google-anmeldelser pr. klinik | 1 / 0 | ikke optalt | 20 |

**Sådan læses rapporten rigtigt:**

1. Filtrér bots fra: regex `dk\d+$` under "Matcher ikke"
2. Se bort fra "skønhedsklinik" alene og andre byer
3. Mål på **position + eksponeringer pr. søgeordsklynge**, ikke på samlet CTR
4. Sammenlign Vejle og Esbjerg hver for sig — de opfører sig forskelligt
5. Mobil og computer hver for sig — mobil rangerer 9 pladser bedre

---

## 12. Sådan kommer en ny chat i gang

1. **Læs `claude/design-og-opsaetning.md`** — især §3 (arbejdsregler) og §11 (kodefælder)
2. **Læs denne fils §7 og §8** — skriveregler og tjekliste
3. **Spørg hvad status er på de to blokkere:** priserne fra lægen og STPS-sagen om Vejle.
   De styrer hvilken fase der kan køres
4. **Byg og se siden, før du ændrer noget.** `npm run build`, og brug
   verifikationspipelinen i design-filens §12
5. **Læs den eksisterende tekst på det område, du skal skrive om**, før du skriver et ord
6. **Én fase ad gangen. Én commit pr. logisk ændring. Dansk commit-besked med hvorfor**

**Status 10. nov 2026:** hub-siden, botox- og filler-afsnittene og kontaktsidens FAQ er
live. **Fase 2b er bygget og committet lokalt, men ikke pushet:** skinbooster-vælger,
Ejal40, Profhilo og Profhilo Structura, og "fra" foran fillerprisen. Lægen skal svare på
spørgsmålene i `claude/laegegennemgang-skinbooster-familien.md`, før der pushes.
**Et push udgiver alt, der er committet** — push derfor ikke andet imens.

---

## 13. Kilder

- Google Search Console, dsklinik.dk, 22. sep – 19. okt 2026
- `claude/gsc-analyse-oktober-2026.md` · `claude/gsc-analyse-handlingsplan-2026-09.md`
- `claude/soegeordsanalyse-2026-09.md` · `claude/arbejdsstandard-og-informationsarkitektur.md`
- `claude/seo-strategi-hvorfor-vi-ligger-nr-10.md` · `claude/behandlingskatalog-til-laegens-godkendelse.md`
- behandlingsguide.dk (Vejle/Esbjerg) · nage.dk/klinik/vejle · christinerewitz.dk ·
  kosmedicare.dk · cerix.dk
