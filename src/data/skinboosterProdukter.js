/**
 * Skinbooster-familien: Ejal40, Profhilo og Profhilo Structura.
 *
 * De tre produktsider deler én skabelon (SkinboosterProduktView.vue) og
 * henter alt indhold herfra. Sammenligningstabellen paa /behandlinger/skinbooster/
 * laeser de samme tal, saa pris og indhold ikke kan komme til at afvige.
 *
 * Fakta der gaelder alle tre og skal stemme med skinbooster-siden:
 *   - ingen bedoevelse noedvendig for de fleste
 *   - smaa buler/papler og roedme i 1-2 dage
 *   - ingen makeup, sauna eller haard traening i 24 timer
 *   - foerste forbedring efter 1-2 uger
 *   - gratis forundersoegelse, 48 timers betaenkningstid, 18 aar
 */

export const SKINBOOSTER_RAEKKEFOELGE = ['ejal40', 'profhilo', 'profhilo-structura']

export const SKINBOOSTER_PRODUKTER = {
  /* ------------------------------------------------------------------ */
  ejal40: {
    slug: 'ejal40',
    path: '/behandlinger/skinbooster/ejal40/',
    navn: 'Ejal40',
    pris: '1.350',
    prisTal: 1350,
    lag: 'hud',
    // Sammenligningstabellen
    sammenlign: {
      bedstTil: 'Tør, mat hud og fine linjer',
      arbejderI: 'Huden',
      indhold: '40 mg hyaluronsyre i 2 ml',
      laegges: 'Tynd nål, få punkter i hver side',
      forloeb: 'Typisk 3 behandlinger'
    },
    meta: {
      title: 'Ejal40 i Esbjerg & Vejle | Hos læge | DK Skønhedsklinik',
      desc: 'Ejal40 er en skinbooster, der giver tør og mat hud fugt og elasticitet. Lægges af læge i Esbjerg og Vejle. 1.350 kr. pr. behandling.',
      ogTitle: 'Ejal40 i Esbjerg & Vejle | Lagt af læge',
      alternateName: ['Ejal 40', 'Ejal40 skinbooster']
    },
    h1: 'Ejal40 i Esbjerg & Vejle – skinbooster lagt af læge',
    lead: 'Ejal40 er en skinbooster med ren hyaluronsyre, der fugter huden indefra. Den giver ikke volumen og ændrer ikke dine træk – den gør huden mere smidig og mindre mat. Hos DK Skønhedsklinik lægges den af klinikkens læge.',
    heroFakta: [
      { v: '40 mg / 2 ml', k: 'Hyaluronsyre' },
      { v: 'Typisk 3', k: 'Behandlinger i et forløb' },
      { v: '1–2 uger', k: 'Første forbedring' },
      { v: '1–2 dage', k: 'Små buler og rødme' }
    ],
    hvad: {
      titel: 'Hvad er Ejal40?',
      tekst: [
        'Ejal40 er hyaluronsyre i ren form – et stof, huden selv indeholder, og som binder vand. Hver sprøjte rummer 40 mg i 2 ml. Hyaluronsyren er ikke krydsbundet, som den er i en filler. Derfor bliver den ikke liggende som en fylde ét sted, men fordeler sig i huden.',
        'Det er forskellen på en skinbooster og en filler: en filler former, en skinbooster fugter. Ejal40 er for dig, der synes, huden er blevet tør, mat eller mindre elastisk – ikke for dig, der mangler volumen i kinder eller læber.'
      ],
      kort: [
        'Ren hyaluronsyre – ikke en filler',
        'Fugt og elasticitet, ikke volumen',
        'Ansigt, hals, dekolletage og hænder',
        'Første forbedring efter 1–2 uger',
        'Lægges af klinikkens læge'
      ]
    },
    hvem: {
      titel: 'Hvem passer Ejal40 til?',
      lead: 'Ejal40 er den enkleste af vores tre skinboostere og ofte et godt sted at starte.',
      passer: [
        'Huden føles tør eller stram, selv om du bruger creme',
        'Huden er blevet mat og har mistet sin glød',
        'Du har fine linjer, der skyldes tør hud – ikke mimik',
        'Du vil prøve en skinbooster første gang'
      ],
      passerIkke: [
        'Du mangler volumen i kinder, læber eller tindinger – det er en <a href="/behandlinger/filler/">filler</a>',
        'Dine rynker kommer af mimik – det er <a href="/behandlinger/botox/">botox</a>',
        'Huden er tydeligt slap – så er <a href="/behandlinger/skinbooster/profhilo/">Profhilo</a> eller <a href="/behandlinger/skinbooster/profhilo-structura/">Profhilo Structura</a> ofte bedre',
        'Du er gravid, ammer eller har en aktiv infektion i området'
      ]
    },
    forskel: {
      titel: 'Ejal40 eller Profhilo?',
      tekst: 'Begge arbejder i selve huden og giver fugt. Profhilo indeholder mere hyaluronsyre (64 mg mod 40 mg) i en anden sammensætning og vælges typisk, når huden også har mistet spændstighed. Er det mest tørhed og mathed, er Ejal40 ofte nok. Lægen vurderer det ved forundersøgelsen.'
    },
    laeggesTekst: 'Lægen lægger Ejal40 med en tynd nål i få, faste punkter på hver side af ansigtet. Fra hvert punkt fordeler hyaluronsyren sig i huden.',
    forloebTekst: 'Et forløb er typisk tre behandlinger. Hvor lang tid der skal gå imellem, fastlægger lægen ud fra din hud.',
    faqs: [
      { q: 'Hvad koster Ejal40?', a: '1.350 kr. pr. behandling. Forundersøgelsen hos lægen er gratis, og du betaler først, når du er behandlet.' },
      { q: 'Hvor mange behandlinger skal jeg have?', a: 'Et forløb er typisk tre behandlinger. Lægen vurderer ved forundersøgelsen, hvor mange din hud har brug for, og hvor lang tid der skal gå imellem.' },
      { q: 'Hvornår kan jeg se en forskel?', a: 'De fleste ser en forbedring efter 1–2 uger. Den tiltager over de følgende uger og bygges op gennem forløbet.' },
      { q: 'Gør det ondt?', a: 'De fleste oplever kun små stik, og bedøvelse er som regel ikke nødvendig. Der er få indstik pr. behandling.' },
      { q: 'Hvordan ser jeg ud bagefter?', a: 'Du får små buler dér, hvor produktet er lagt, og kan være rød. Det er normalt og forsvinder typisk inden for 1–2 dage. Blå mærker kan forekomme.' },
      { q: 'Er Ejal40 det samme som en filler?', a: 'Nej. En filler giver volumen og form. Ejal40 er ikke krydsbundet og fordeler sig i huden, hvor den giver fugt og elasticitet uden at ændre ansigtets form.' }
    ]
  },

  /* ------------------------------------------------------------------ */
  profhilo: {
    slug: 'profhilo',
    path: '/behandlinger/skinbooster/profhilo/',
    navn: 'Profhilo',
    pris: '2.300',
    prisTal: 2300,
    lag: 'hud',
    sammenlign: {
      bedstTil: 'Hud, der har mistet spændstighed og glød',
      arbejderI: 'Huden',
      indhold: '64 mg hyaluronsyre i 2 ml',
      laegges: 'Tynd nål, typisk 5 punkter i hver side',
      forloeb: 'Typisk 2 behandlinger'
    },
    meta: {
      title: 'Profhilo i Esbjerg & Vejle | Hos læge | DK Skønhedsklinik',
      desc: 'Profhilo giver fugt og spændstighed til hud, der er blevet slap og mat – uden volumen. Lægges af læge i Esbjerg og Vejle. 2.300 kr. pr. behandling.',
      ogTitle: 'Profhilo i Esbjerg & Vejle | Lagt af læge',
      alternateName: ['Profhilo behandling', 'Profhilo H+L']
    },
    h1: 'Profhilo i Esbjerg & Vejle – lagt af læge',
    lead: 'Profhilo er en injektionsbehandling med hyaluronsyre til hud, der er blevet mindre spændstig. Den fylder ikke op og ændrer ikke dine træk. Den lægges i få punkter og fordeler sig derfra i huden. Hos DK Skønhedsklinik udføres behandlingen af klinikkens læge.',
    heroFakta: [
      { v: '64 mg / 2 ml', k: 'Hyaluronsyre' },
      { v: 'Typisk 2', k: 'Behandlinger i et forløb' },
      { v: '1–2 uger', k: 'Første forbedring' },
      { v: '1–2 dage', k: 'Små buler og rødme' }
    ],
    hvad: {
      titel: 'Hvad er Profhilo?',
      tekst: [
        'Profhilo er hverken en filler eller en klassisk skinbooster. Hver sprøjte indeholder 64 mg hyaluronsyre i 2 ml – halvdelen med høj og halvdelen med lav molekylvægt. De to typer er bundet sammen med varme i stedet for med kemiske krydsbindere.',
        'Det gør produktet tyndtflydende. Når det er lagt, breder det sig ud i huden omkring indstiksstedet. Derfor behøver lægen kun få punkter for at dække hele ansigtet. Producenten kalder det bioremodellering: målet er bedre hudkvalitet, ikke mere fylde.'
      ],
      kort: [
        '64 mg hyaluronsyre – ingen kemiske krydsbindere',
        'Spændstighed og fugt, ikke volumen',
        'Få indstik – typisk fem i hver side af ansigtet',
        'Ansigt og hals',
        'Lægges af klinikkens læge'
      ]
    },
    hvem: {
      titel: 'Hvem passer Profhilo til?',
      lead: 'Profhilo vælges typisk, når huden ikke kun er tør, men også er begyndt at give efter.',
      passer: [
        'Huden føles tyndere og mindre fast end før',
        'Du ser fine linjer og en let slaphed på kinder eller hals',
        'Du vil have bedre hud, men ikke se "behandlet" ud',
        'Du har prøvet en almindelig skinbooster og vil et skridt videre'
      ],
      passerIkke: [
        'Du vil have tydeligere kindben eller fyldigere læber – det er en <a href="/behandlinger/filler/">filler</a>',
        'Kinderne er sunket, og kæbelinjen er blevet uskarp – se <a href="/behandlinger/skinbooster/profhilo-structura/">Profhilo Structura</a>',
        'Dine rynker kommer af mimik – det er <a href="/behandlinger/botox/">botox</a>',
        'Du er gravid, ammer eller har en aktiv infektion i området'
      ]
    },
    forskel: {
      titel: 'Profhilo eller Profhilo Structura?',
      tekst: 'Navnene ligner hinanden, men de to arbejder i hver sit lag. Profhilo lægges i huden og forbedrer hudens kvalitet. Profhilo Structura lægges dybere, i fedtvævet under huden, og er udviklet til ansigter, hvor støtten under huden er blevet mindre. Mange har glæde af den ene, nogle af begge. Det afgør lægen ved forundersøgelsen.'
    },
    laeggesTekst: 'Lægen lægger Profhilo med en tynd nål i få, faste punkter – typisk fem på hver side af ansigtet. Punkterne ligger væk fra de større blodkar og nerver.',
    forloebTekst: 'Et forløb er typisk to behandlinger. Hvor lang tid der skal gå imellem, fastlægger lægen. Mange vælger at vedligeholde ca. hvert halve år.',
    faqs: [
      { q: 'Hvad koster Profhilo?', a: '2.300 kr. pr. behandling. Forundersøgelsen hos lægen er gratis, og du betaler først, når du er behandlet.' },
      { q: 'Hvor mange Profhilo-behandlinger skal jeg have?', a: 'Et forløb er typisk to behandlinger. Lægen vurderer ved forundersøgelsen, hvad din hud har brug for, og hvor lang tid der skal gå imellem.' },
      { q: 'Hvornår virker Profhilo?', a: 'De fleste ser en første forbedring efter 1–2 uger. Hudens kvalitet bedres gradvist i ugerne efter, og resultatet vurderes bedst, når forløbet er afsluttet.' },
      { q: 'Giver Profhilo volumen?', a: 'Nej. Profhilo breder sig ud i huden og bliver ikke liggende som en fylde. Den ændrer ikke ansigtets form. Mangler du volumen, taler lægen med dig om filler i stedet.' },
      { q: 'Hvordan ser jeg ud lige efter behandlingen?', a: 'Du får en lille bule ved hvert indstik. De er synlige de første timer og forsvinder typisk inden for 1–2 dage. Rødme og blå mærker kan forekomme.' },
      { q: 'Gør Profhilo ondt?', a: 'Der er få indstik, og de fleste oplever dem som korte stik med en let svien, mens produktet lægges. Bedøvelse er som regel ikke nødvendig.' },
      { q: 'Kan Profhilo kombineres med botox eller filler?', a: 'Ja. De tre gør hver sit: botox dæmper mimiske rynker, filler giver form, og Profhilo arbejder med selve huden. Lægen planlægger rækkefølgen og tiden imellem.' }
    ]
  },

  /* ------------------------------------------------------------------ */
  'profhilo-structura': {
    slug: 'profhilo-structura',
    path: '/behandlinger/skinbooster/profhilo-structura/',
    navn: 'Profhilo Structura',
    pris: '3.100',
    prisTal: 3100,
    lag: 'fedt',
    sammenlign: {
      bedstTil: 'Begyndende slaphed i kinder og kæbeparti',
      arbejderI: 'Fedtvævet under huden',
      indhold: '90 mg hyaluronsyre i 2 ml',
      laegges: 'Stump kanyle, ét indstik i hver side',
      forloeb: 'Typisk 2 behandlinger'
    },
    meta: {
      title: 'Profhilo Structura i Esbjerg & Vejle | DK Skønhedsklinik',
      desc: 'Profhilo Structura lægges under huden og giver støtte til kinder og kæbeparti, der er begyndt at give efter. Hos læge i Esbjerg og Vejle. 3.100 kr.',
      ogTitle: 'Profhilo Structura i Esbjerg & Vejle | Lagt af læge',
      alternateName: ['Structura', 'Profhilo Structura behandling']
    },
    h1: 'Profhilo Structura i Esbjerg & Vejle – lagt af læge',
    lead: 'Profhilo Structura er en nyere behandling med hyaluronsyre, der lægges i fedtvævet under huden i siden af ansigtet. Den er udviklet til ansigter, hvor kinder og kæbeparti er begyndt at give efter. Hos DK Skønhedsklinik lægges den af klinikkens læge.',
    heroFakta: [
      { v: '90 mg / 2 ml', k: 'Hyaluronsyre' },
      { v: 'Typisk 2', k: 'Behandlinger i et forløb' },
      { v: 'Under huden', k: 'Lægges i fedtvævet' },
      { v: '1–2 dage', k: 'Hævelse og ømhed' }
    ],
    hvad: {
      titel: 'Hvad er Profhilo Structura?',
      tekst: [
        'Med årene bliver fedtpuderne i ansigtet tyndere og flytter sig. Det er en af grundene til, at kinderne falder lidt sammen, og kæbelinjen bliver mindre skarp – også hos dem, der har fin hud.',
        'Profhilo Structura er udviklet til netop det lag. Hver sprøjte indeholder 90 mg hyaluronsyre i 2 ml, halvdelen med høj og halvdelen med lav molekylvægt, bundet sammen med varme uden kemiske krydsbindere. Den lægges ikke i huden, men i fedtvævet lige under, i siden af ansigtet foran øret.',
        'Det er ikke en filler. Structura bruges ikke til at forme kindben eller tegne en kæbelinje op, men til at give vævet under huden bedre støtte.'
      ],
      kort: [
        '90 mg hyaluronsyre – ingen kemiske krydsbindere',
        'Arbejder i fedtvævet under huden',
        'Siden af ansigtet: kinder og kæbeparti',
        'Lægges med stump kanyle',
        'Udføres af klinikkens læge'
      ]
    },
    hvem: {
      titel: 'Hvem passer Profhilo Structura til?',
      lead: 'Structura er til dig, hvor det ikke er huden, men støtten under den, der har ændret sig.',
      passer: [
        'Kinderne virker fladere eller mere indfaldne i siden end før',
        'Kæbepartiet er blevet blødere i konturen',
        'Du ønsker en diskret ændring, ikke nye træk',
        'Du har fået Profhilo og ønsker mere støtte, end huden alene kan give'
      ],
      passerIkke: [
        'Det er tørhed, mathed eller fine linjer, der generer dig – se <a href="/behandlinger/skinbooster/ejal40/">Ejal40</a> eller <a href="/behandlinger/skinbooster/profhilo/">Profhilo</a>',
        'Du vil have markerede kindben eller en skarpt tegnet kæbelinje – det er en <a href="/behandlinger/filler/">filler</a>',
        'Huden hænger tydeligt – her kan en injektion ikke erstatte et kirurgisk løft, og det siger lægen ærligt',
        'Du er gravid, ammer eller har en aktiv infektion i området'
      ]
    },
    forskel: {
      titel: 'Profhilo Structura eller Profhilo?',
      tekst: 'Profhilo lægges i huden med en tynd nål og forbedrer hudens kvalitet. Profhilo Structura lægges dybere, i fedtvævet, med en stump kanyle og indeholder mere hyaluronsyre (90 mg mod 64 mg). De konkurrerer ikke: den ene arbejder med overfladen, den anden med det, der ligger under. Lægen vurderer, om du har brug for den ene eller begge.'
    },
    laeggesTekst: 'Lægen lægger Structura med en stump kanyle – en kanyle uden skarp spids – gennem ét indstik i hver side af ansigtet. Herfra fordeles produktet i fedtvævet foran øret.',
    forloebTekst: 'Et forløb er typisk to behandlinger. Hvor lang tid der skal gå imellem, fastlægger lægen. Resultatet kommer gradvist og vurderes, når forløbet er afsluttet.',
    faqs: [
      { q: 'Hvad koster Profhilo Structura?', a: '3.100 kr. pr. behandling. Forundersøgelsen hos lægen er gratis, og du betaler først, når du er behandlet.' },
      { q: 'Hvad er forskellen på Profhilo og Profhilo Structura?', a: 'Profhilo lægges i huden og forbedrer hudens kvalitet. Structura lægges i fedtvævet under huden i siden af ansigtet og er udviklet til at give støtte, hvor kinder og kæbeparti er begyndt at give efter.' },
      { q: 'Er Profhilo Structura en filler?', a: 'Nej. Den bruges ikke til at forme eller markere træk, og den lægges ikke de samme steder som en filler. Ønsker du tydeligere kindben eller kæbelinje, taler lægen med dig om filler.' },
      { q: 'Hvor mange behandlinger skal jeg have?', a: 'Et forløb er typisk to behandlinger. Lægen vurderer ved forundersøgelsen, hvad der passer til dit ansigt, og hvor lang tid der skal gå imellem.' },
      { q: 'Hvornår kan jeg se resultatet?', a: 'Ændringen kommer gradvist over ugerne efter behandlingen. Det endelige resultat vurderes, når forløbet er afsluttet.' },
      { q: 'Gør det ondt, og hvordan ser jeg ud bagefter?', a: 'Der er ét indstik i hver side. Du kan være hævet og øm i siden af ansigtet i 1–2 dage, og blå mærker kan forekomme.' }
    ]
  }
}

export const findSkinboosterProdukt = slug => SKINBOOSTER_PRODUKTER[slug] || null

export const skinboosterProdukter = () =>
  SKINBOOSTER_RAEKKEFOELGE.map(s => SKINBOOSTER_PRODUKTER[s])
