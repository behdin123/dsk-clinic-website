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
| `/kontaktos/` | 408 | ⚠️ **Tyndest på sitet.** Ny hero, klinikkort med åbningstider, formular. **Mangler FAQ og ContactPage-schema** |
| `/priser/` | 701 | Botox-priser rettet (550/1.100/1.650). "Vistabel" fjernet. Position 26 — skal linkes fra hver behandlingsside |
| `/behandlinger/botox/` | 850 | Live. **Mangler de syv H3-afsnit** (pandelinjer, glabella, kragetæer, brynløft, bunny lines, sure mundvige, hagegrube) |
| `/behandlinger/filler/` | 756 | Live. **Mangler H3-afsnit** (kindben, smilelinjer, marionetlinjer, tindinger, hænder) |
| `/behandlinger/filler/laeber/` | 1.005 | ✅ **Bygget.** Svarer på `lip filler esbjerg` position 3,4 med nul klik |
| `/behandlinger/skinbooster/` | 679 | Live. Skal bygges om til vælgerside med sammenligningstabel |
| `/behandlinger/microneedling/` | 684 | Live. "Akne-ar" skal i title. **Faldt fra position 5,4 til 11,0 — uundersøgt** |
| `/behandlinger/mesotherapy/` | 683 | Live. URL og H1 er engelsk — skal omdøbes til `/mesoterapi/` med 301 |
| `/behandlinger/prp/` | — | "Tilbydes ikke længere"-side. Bevaret pga. 84 klik / 3.816 eksp. historisk |
| `/booking/` | — | Gecko-embed. Position 3,8 |
| `/behandlinger/` | — | ❌ **Findes ikke.** 404 er sat korrekt op, så den bliver 200 i samme øjeblik siden bygges |
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
| `/behandlinger/` | kosmetiske behandlinger esbjerg/vejle | **mangler** |
| `/behandlinger/botox/` | botox esbjerg, rynkebehandling | live |
| `/behandlinger/botox/nefertiti-loeft/` | nefertiti løft, halsstrenge | planlagt |
| `/behandlinger/botox/gummy-smile/` | gummy smile | planlagt |
| `/behandlinger/filler/` | filler esbjerg | live |
| `/behandlinger/filler/laeber/` | læbefiller, lip filler | ✅ bygget |
| `/behandlinger/filler/kaebelinje/` | kæbelinje filler, hagefiller | planlagt |
| `/behandlinger/filler/naese/` | næsefiller, næsekorrektion uden operation | planlagt |
| `/behandlinger/filler/oploesning/` | opløse filler, fjerne filler | planlagt |
| `/behandlinger/skinbooster/` | skinbooster | bygges om til vælgerside |
| `/behandlinger/skinbooster/profhilo/` | profhilo, profhilo pris | planlagt |
| `/behandlinger/skinbooster/profhilo-structura/` | profhilo structura | planlagt |
| `/behandlinger/skinbooster/ejal40/` | ejal40 | planlagt |
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
| **2** | `/behandlinger/` hub · skinbooster som vælgerside · Profhilo · Profhilo Structura · Ejal40 | ⏳ **Næste.** Afventer priser |
| **3** | `/filler/kaebelinje/` · `/filler/naese/` · `/filler/oploesning/` + filler-afsnit | Planlagt |
| **4** | `/botox/nefertiti-loeft/` · `/botox/gummy-smile/` + botox-afsnit | Planlagt |
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
| 3 | **Hvorfor faldt `microneedling esbjerg` fra 5,4 til 11,0?** Vores hidtil bedste side. Undersøg før vi bygger mere | GSC |
| 4 | **E-mail på eget domæne.** `dr_arash_bagheri@yahoo.com` på en lægeklinik underminerer E-E-A-T. En adresse på @dsklinik.dk er det billigste tillidsløft på sitet | Vurdering |
| 5 | **Vidensuniverset** — syv færdige artikler slået fra i routeren. Billigste trafikgevinst på listen, men de skal gennemlæses for den slukkede tear trough-artikel først | Kode |
| 6 | **17 behandlingspriser** mangler fra lægen. Blokerer fase 2–6 | Åben |

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

**Næste udtræk: midten af november 2026.** Sammenlign med
`claude/gsc-analyse-oktober-2026.md`.

| Måltal | Okt 2026 | Mål om 3 mdr. |
|---|---|---|
| Klik fra "vejle"-søgninger | 2 / 28 dage | 25+ |
| `skønhedsklinik vejle` position | 10,7 | top 5 |
| `filler esbjerg` CTR | 2,42 % (pos 7,5) | 5 % |
| Omdirigeringsfejl | 1 | 0 |
| Sider med to versioner i resultatrapporten | 8 | 0 |
| Google-anmeldelser pr. klinik | 1 / 0 | 20 |

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

**Hvis priserne er kommet:** gå i gang med fase 2 — hub-siden først, så skinbooster som
vælgerside, så de tre produktsider.

**Hvis de ikke er:** de to højeste gevinster der ikke kræver priser er
(a) **kontaktsidens FAQ + ContactPage-schema** — sidens tyndeste side, og FAQ giver
FAQPage-schema og rich results, og
(b) **botox- og filler-afsnittene** fra punktopstilling til rigtige H3-afsnit med ankre.
Begge kan laves nu.

---

## 13. Kilder

- Google Search Console, dsklinik.dk, 22. sep – 19. okt 2026
- `claude/gsc-analyse-oktober-2026.md` · `claude/gsc-analyse-handlingsplan-2026-09.md`
- `claude/soegeordsanalyse-2026-09.md` · `claude/arbejdsstandard-og-informationsarkitektur.md`
- `claude/seo-strategi-hvorfor-vi-ligger-nr-10.md` · `claude/behandlingskatalog-til-laegens-godkendelse.md`
- behandlingsguide.dk (Vejle/Esbjerg) · nage.dk/klinik/vejle · christinerewitz.dk ·
  kosmedicare.dk · cerix.dk
