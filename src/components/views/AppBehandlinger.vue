<template>
  <AppBehandling :dark="dark" :title="behandlingData.title" :imageSrc="behandlingData.imageSrc"
    :description="behandlingData.description" :duration="behandlingData.duration" :result="behandlingData.result"
    :anesthesia="behandlingData.anesthesia" :durability="behandlingData.durability" :downtime="behandlingData.downtime"
    :consultation="behandlingData.consultation" :price="behandlingData.price" :priceText="behandlingData.priceText"
    :price2="behandlingData.price2" :priceText2="behandlingData.priceText2" :price3="behandlingData.price3"
    :priceText3="behandlingData.priceText3" :faqs="faqs" :sections="sectionsData" :section-assets="sectionAssets" />
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
    priceText3: '3 område',
    sections: {
        audience: [
          '<span class="intro">Botox hos DK Skønhedsklinik er en skånsom måde at blødgøre mimiske rynker på. Vi bruger Vistabel (Botox) og doserer præcist, så din mimik bevares og udtrykket forbliver naturligt. Er du nervøs første gang? Det forstår vi. Vi tager os tid til at lytte, vejlede og lægge en plan, der passer til netop dit ansigt.</span>',

          // Områder – hver som egen punkt
          '<b>Pande</b> (vandrette linjer).',
          '<b>Mellem bryn</b> (bekymringsrynker / glabella).',
          '<b>Omkring øjne</b> (kragetæer).',
          '<b>På næsen</b> (bunny lines).',
          '<b>Overlæbe</b> (rygerynker).',
          '<b>Mundvige</b> (nedadgående mundhjørner).',
          '<b>Hage</b> (ujævn / dimple chin).',
          '<b>Kæbelinje</b> (masseter / jawline slimming).',
          '<b>Hals</b> (vandrette linjer og platysma-bånd).'
        ],
      expectations: {
        summary:
          'Botox virker ved at få de små muskler i ansigtet til at slappe af, så <b>rynker glattes</b> uden at påvirke resten af ansigtet. Behandlingen virker kun i de ønskede områder, så resten af ansigtet bevarer sin normale mimik',
        visibleAfter: 'Effekten begynder efter 1 dage og fuld synlig effekt ses indtil ca. 14 dage.',
        durability: '3 – 4 måneder typisk.',
        sessions: '1 behandling; kontrol/finjustering kan tilbydes efter 14 dage.'
      },
      steps: [
        { title: 'Konsultation & plan', text: 'Gennemgang af ønsker/kontraindikationer, fotodokumentation og individuel dosisplan. Vi gennemgår realistiske forventninger og sikkerhed.' },
        { title: 'Selve behandlingen (injektion)', text: 'Små, præcise stik i målte muskler – typisk 10–15 min. Målet er et naturligt, afslappet udtryk uden at “fryse” mimikken.' },
        { title: 'Efterbehandling & kontrol (14 dage)', text: 'Effekt kan vurderes efter 14 dage, efter behov, hvor der kan laves finjustering for optimalt resultat.' }
      ],
      safety: {
        note: 'Udføres af erfaren læge. Resultater og behov er individuelle.',
        contraindications: [
          'Graviditet og amning.',
          'Aktiv infektion i området.',
          'Kendte neuromuskulære sygdomme (efter lægelig vurdering).',
          'Kendt allergi over for indholdsstoffer.'
        ],
        sideEffects: [
          'Forbigående rødme, hævelse eller blå mærker.',
          'Let hovedpine første døgn er muligt.',
          'Sjældent: midlertidig asymmetri eller tungt øjenlåg.'
        ]
      },
      aftercare: [
        'Undgå at massere området i 4 timer.',
        'Undgå hård træning/sauna første 24 timer.',
        'Undgå ansigtsbehandlinger første 24–48 timer.',
        'Makeup når huden er lukket (typisk efter få timer).'
      ],
      combinations: [
        { ref: 'filler', label: 'Filler', text: 'til volumetab eller kontur.' },
        { ref: 'skinbooster', label: 'Skinbooster', text: 'til glød og fugt.' },
        {
          refs: [{ ref: 'microneedling', label: 'Microneedling' }, { ref: 'prp', label: 'PRP' }],
          text: 'til hudkvalitet.'
        }
      ],
      pricing: {
        items: [
          { label: '1 område', price: '850 kr.' },
          { label: '2 områder', price: '1.250 kr.' },
          { label: '3 områder', price: '1.550 kr.' }
        ],
        notes: 'Vedligehold anbefales ca. <b>3 mdr.</b> afhængigt af område.'
      }
    },
    sectionsAssets: {
      audience: new URL('@/assets/behandlinger/konsultation.webp', import.meta.url).href,
      expectations: new URL('@/assets/behandlinger/botox_result.webp', import.meta.url).href,
      safety: new URL('@/assets/behandlinger/sikkerhed.webp', import.meta.url).href,
    }
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
    priceText: '1 ml',
    sections: {
      audience: [
        '<span class="intro">Filler hos DK Skønhedsklinik er en ikke-permanent hyaluronsyrebehandling, der giver fylde, fugt og glød, blødgør fine og dybe linjer og genskaber volumen – fx læber, læbelinjer, smilelinjer (nasolabiale folder) og linjer fra mundvige mod hagen (marionetlinjer), kindben, hage og kæbelinje. Vi doserer små, præcise mængder og skræddersyr behandlingen til dit ansigt for et harmonisk, naturligt udtryk.</span>',
        'Ønske om <b>læbevolumen</b>, <b>kindfylde</b> eller skarpere <b>kæbelinje/hage</b>.',
        'Udfyldning af <b>statiske linjer</b> (f.eks. smilelinjer - eller marionetlinjer).',
        'Harmonisering af ansigtstræk uden kirurgi – <b>kontur og symmetri</b>.',
        'Velegnet, hvis du ønsker <b>umiddelbart synlige</b> resultater.'
      ],
      expectations: {
        summary:
          'Moderne hyaluronsyre-filler giver fylde og genskaber <b>volumen og form</b> og giver fugt. Vi vælger produkt efter område og hudtype.',
        visibleAfter: 'Straks – endeligt look når hævelse har lagt sig (få dage - 14 dage).',
        durability: '6–12 måneder afhængigt af område/produkt (læber ofte 6–9 mdr., kinder kan vare længere).',
        sessions: 'Som regel 1 behandling.'
      },
      steps: [
        { title: 'Konsultation & design', text: 'Ansigtsanalyse, fotodokumentation og produktvalg efter område/hudtype. Vi planlægger en naturlig harmonisering.' },
        { title: 'Injektion & formgivning', text: 'Hyaluronsyre-filler placeres lagvist med nål/kanyle for bløde overgange, symmetri og kontur. Varighed ca. 15–30 min.' },
        { title: 'Efterbehandling & kontrol (14 dage)', text: 'Hævelse falder typisk inden for få dage; endeligt look kan ses efter 14 dage. Vi kan vurdere resultatet efter behov, efter 2 uger og kan ved behov lave finpudsning/rettelser.' }
      ],
      safety: {
        note: 'Udføres af læge; brug af <b>hyaluronidase</b> ved behov.',
        contraindications: [
          'Graviditet/amning.',
          'Aktiv infektion (fx forkølelsessår ved læbe).',
          'Alvorlige allergier mod indhold.',
          'Forsigtighed ved blodfortyndende medicin (lægelig vurdering).'
        ],
        sideEffects: [
          'Midlertidig hævelse, ømhed, blå mærker.',
          'Sjældent: knudedannelse eller karpåvirkning – kræver akut vurdering.'
        ]
      },
      aftercare: [
        'Undgå varme, sauna-/solarium  i <b>3 dage</b> og hård træning det første døgn.',
        'Undgå tryk/massage første døgn (medmindre du får besked på andet).',
        'Makeup efter <b>første døgn</b>.'
      ],
      combinations: [
        { ref: 'botox', label: 'Botox', text: 'til mimiske linjer.' },
        { ref: 'skinbooster', label: 'Skinbooster', text: 'for hudens kvalitet og fugt.' },
        {
          refs: [{ ref: 'microneedling', label: 'Microneedling' }, { ref: 'prp', label: 'PRP' }],
          text: 'til tekstur/arr.'
        }
      ],
      pricing: {
        items: [
          { label: '1 ml', price: '1.650 kr.' }
        ],
        notes: 'Holdbarhed og behov for vedligehold afhænger af område og livsstil.'
      }
    },
    sectionsAssets: {
      audience: new URL('@/assets/behandlinger/consultation.webp', import.meta.url).href,
      expectations: new URL('@/assets/behandlinger/filler.webp', import.meta.url).href,
      safety: new URL('@/assets/behandlinger/sikkerhed.webp', import.meta.url).href,
    }
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
    priceText: 'Kommer an på typen af skinbooster der bruges',
    sections: {
      audience: [
        '<span class="intro">Skinbooster hos DK Skønhedsklinik er en ikke-permanent hyaluronsyrebehandling, der fugter huden indefra, giver synlig glød og forbedrer hudkvaliteten. Den udjævner fine linjer og små ar og gør huden mere smidig og ensartet – fx på kinder, omkring mund og under øjne. Vi lægger små, præcise mængder og skræddersyr behandlingen til din hud for et friskt, naturligt resultat.</span>',
        'Tør, mat hud med <b>fine linjer</b> og nedsat elasticitet.',
        'Ansigt, <b>hals/dekolletage</b> eller hænder, hvor huden føles tynd eller “træt”.',
        'Alle hudtyper – oplagt som <b>første anti-age-trin</b> uden volumen.',
        'God før særlige begivenheder for <b>glød og fugt</b>.'
      ],
      expectations: {
        summary:
          'Mikroinjektioner af blød hyaluronsyre forbedrer <b>fugtbalancen</b> og hudens tekstur indefra – uden at give volumen.',
        visibleAfter: 'De fleste ser forbedring efter 1–2 uger, der tiltager over få uger.',
        durability: '6–12 måneder efter en fuld kur og vedligehold.',
        sessions: 'Muligt med 2–3 sessioner med minimum 2 måneders interval; efter ønske, vedligehold halvårligt.'
      },
      steps: [
        { title: 'Konsultation', text: 'Hudvurdering, mål og valg af skinbooster-type. Plan for antal sessioner og intervaller.' },
        { title: 'Mikroinjektioner af skinbooster', text: 'Præcise mængder af blød hyaluronsyre lægges i huden for at forbedre fugtbalance og tekstur. Små “papler” er normale i 1 - 2 dage.' },
        { title: 'Næste session & kontrol (2 måneder)', text: 'Makeup efter 24 t., undgå sauna/hård træning første døgn. Vurdering foretages før næste behandling efter minimum 2 måneder' }
      ],
      safety: {
        note: 'Mild og biokompatibel behandling.',
        contraindications: [
          'Graviditet/amning.',
          'Aktiv infektion i området.',
          'Allergi mod indholdsstoffer.'
        ],
        sideEffects: [
          'Små “papler”, rødme eller blå mærker første 24–48 timer.'
        ]
      },
      aftercare: [
        'Undgå makeup <b>24 timer</b>.',
        'Undgå sauna/hård træning <b>24 timer</b>.'
      ],
      combinations: [
        { ref: 'botox', label: 'Botox', text: '(linjer)' },
        { ref: 'filler', label: 'Filler', text: '(volumen)' },
        {
          refs: [{ ref: 'microneedling', label: 'Microneedling' }, { ref: 'prp', label: 'PRP' }],
          text: 'for tekstur og glød.'
        }
      ],
      pricing: {
        items: [
          { label: 'Skinbooster (per session)', price: 'Fra 1.750 kr.' }
        ],
        notes: 'Prisen afhænger af type/område.'
      }
    },
    sectionsAssets: {
      audience: new URL('@/assets/behandlinger/konsultation.webp', import.meta.url).href,
      expectations: new URL('@/assets/behandlinger/skinbooster.webp', import.meta.url).href,
      safety: new URL('@/assets/behandlinger/sikkerhed.webp', import.meta.url).href,
    }
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
    priceText: '',
    sections: {
      audience: [
        'Ønsker <b>egenkroppens</b> regenerative metode til <b>hudforyngelse</b> og glød.',
        'Forbedring af <b>akne-ar</b>, fine linjer eller generel hudkvalitet.',
        'Tidlige stadier af <b>hårtynding</b> (kvinder/mænd) efter lægelig vurdering.',
        'God til dig, der vil undgå syntetiske fyldstoffer.'
      ],
      expectations: {
        summary:
          'Dit blod centrifugeres og det <b>trombocyt-rige plasma</b> (PRP) injiceres/needles for at stimulere <b>kollagen, heling og vækstfaktorer</b>.',
        visibleAfter: 'Hud: <b>1–4 uger</b> for glød/tekstur. Hår: gradvis fortætning over måneder.',
        durability: 'Effekt vedligeholdes typisk i <b>6–12 måneder</b> efter en kur.',
        sessions: 'Kur på <b>3–4 behandlinger</b> med 4–6 ugers mellemrum; herefter vedligehold.'
      },
      steps: [
        { title: 'Konsultation & blodprøve', text: 'Kort helbredsgennemgang, fotodokumentation og udtagning af en lille blodprøve, som centrifugeres til trombocyt-rigt plasma (PRP).' },
        { title: 'PRP-injektion/needling', text: 'Det koncentrerede plasma fordeles i målområdet med injektion eller needling for at stimulere kollagen, heling og vækstfaktorer.' },
        { title: 'Efterbehandling & planlagt opfølgning (4–6 uger)', text: 'Undgå NSAID første 24–48 t. og hård træning første døgn. Effekten vurderes, og næste session planlægges efter 4–6 uger som led i en kur på 3–4 behandlinger.' }
      ],
      safety: {
        note: 'Autolog behandling (fra egen krop).',
        contraindications: [
          'Graviditet/amning.',
          'Blodsygdomme/koagulationsforstyrrelser (lægelig vurdering).',
          'Aktiv infektion i området.'
        ],
        sideEffects: [
          'Forbigående hævelse/ømhed, blå mærker.'
        ]
      },
      aftercare: [
        'Undgå <b>NSAID</b> første 24–48 timer (medmindre lægen siger andet).',
        'Undgå hård træning/varme det første døgn.',
        'Ved hår: undgå hårvask første <b>24 timer</b>.'
      ],
      combinations: [
        { ref: 'microneedling', label: 'Microneedling', text: 'for ar/tekstur.' },
        { ref: 'skinbooster', label: 'Skinbooster', text: 'for fugt/elasticitet.' }
      ],
      pricing: {
        items: [
          { label: 'PRP (per session)', price: 'Fra 1.850 kr.' }
        ],
        notes: 'Bedst effekt som <b>serie</b>; vedligehold anbefales.'
      }
    },
    sectionsAssets: {
      audience: new URL('@/assets/behandlinger/consultation.webp', import.meta.url).href,
      safety: new URL('@/assets/behandlinger/sikkerhed.webp', import.meta.url).href,
    }
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
    priceText: 'Bestemmes efter type behandling',
    sections: {
      audience: [
        '<span class="intro">Mesoterapi hos DK Skønhedsklinik er en skånsom injektionsbehandling, hvor små mængder hyaluronsyre med vitaminer, aminosyrer, mineraler og antioxidanter tilføres i hudens overflade. Behandlingen giver intensiv fugt indefra, øger glød og elasticitet og udjævner fine linjer – ideel til træt eller stresset hud. Sammensætningen skræddersys til dig, så huden føles mere smidig og ser mere ensartet ud – fx i ansigt, hals og décolleté.</span>',
        'Mat/ujævn hudtone, <b>dehydreret</b> hud eller fine linjer.',
        'Dig der ønsker <b>hudkvalitet</b> – ikke volumen.',
        'Kan anvendes i ansigt, hals og dekolletage; egner sig til de fleste hudtyper.',
        'Velegnet som <b>quick-boost</b> op til events (planlæg nogle uger før).'
      ],
      expectations: {
        summary:
          'Overfladiske mikroinjektioner med <b>vitaminer, antioxidanter og peptider</b> giver mere jævn, fugtmættet hud.',
        visibleAfter: '1–2 uger til synlig forbedring af glød og jævnhed.',
        durability: 'Typisk 3–12 måneder afhængigt af protokol, hudtype og pleje.',
        sessions: '3–6 sessioner med 4 ugers interval; derefter vedligehold hver 3. måned.'
      },
      steps: [
        { title: 'Konsultation & cocktailvalg', text: 'Valg af vitamin/antioxidant-cocktail efter hudtype og mål. Vi sætter realistiske forventninger og forklarer forløbet.' },
        { title: 'Mikroinjektioner', text: 'Overfladiske mikroinjektioner fordeles jævnt i området for at forbedre fugt, glød og ensartethed. Let rødme/blå mærker kan opstå kortvarigt.' },
        { title: 'Næste session & kontrol (4 uger)', text: 'Makeup efter 24 t., undgå sauna/hård træning første døgn og brug SPF. Vurdering og gentagelse planlægges efter 4 uger som del af en kur på 3–6 sessioner.' }
      ],
      safety: {
        note: 'Udføres af læge – ingredienser tilpasses hudens behov.',
        contraindications: [
          'Graviditet/amning.',
          'Aktiv infektion/allergi mod ingredienser.'
        ],
        sideEffects: [
          'Rødme, små blå mærker, let hævelse i 1–3 dage.'
        ]
      },
      aftercare: [
        'Undgå makeup <b>24 timer</b>.',
        'Undgå sauna/hård træning første døgn.'
      ],
      combinations: [
        { ref: 'skinbooster', label: 'Skinbooster', text: 'for ekstra fugt.' },
        { ref: 'microneedling', label: 'Microneedling', text: 'for tekstur/porer.' }
      ],
      pricing: {
        items: [
          { label: 'Per session', price: 'Fra 750 kr.' }
        ],
        notes: 'Endelig pris afhænger af type cocktail og område.'
      }
    },
    sectionsAssets: {
      audience: new URL('@/assets/behandlinger/konsultation.webp', import.meta.url).href,
      expectations: new URL('@/assets/behandlinger/mesotherapy.webp', import.meta.url).href,
      safety: new URL('@/assets/behandlinger/sikkerhed.webp', import.meta.url).href,
    }
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
    priceText: '',
    sections: {
      audience: [
        '<span class="intro">Microneedling hos DK Skønhedsklinik er kollagen-induktionsterapi, hvor mikronåle skaber ultrafine kanaler i huden og igangsætter kroppens egen heling. Det øger collagen og elastin, forfiner porer og tekstur, udjævner aknear og fine linjer og gør hudtonen mere ensartet. Behandlingen tilpasses i dybde og område (ansigt og hals) for et friskt, naturligt resultat.</span></span>',
        '<b>Akne-ar</b>, forstørrede porer, ujævn tekstur eller tidlige linjer.',
        'Pigmentforstyrrelser/post-inflammatoriske mærker (vurderes individuelt).',
        'Alle hudtyper, der ønsker <b>kollagenstimulering</b> uden filler eller kirurgi.',
        'Godt valg ved langsigtet forbedring af <b>hudkvalitet</b>.'
      ],
      expectations: {
        summary:
          'Sterile nåle laver kontrollerede mikrokanaler, som kickstarter <b>kollagen- og elastinproduktion</b>. Huden bliver jævnere og fastere over tid.',
        visibleAfter: 'Ofte 2 uger til første forbedring; fortsætter med at optimere i månederne efter.',
        durability: '6–12 måneder efter kur og korrekt hjemmepleje/solbeskyttelse.',
        sessions: '3–6 sessioner med 6 ugers interval; herefter vedligehold efter behov.'
      },
      steps: [
        { title: 'Konsultation & bedøvende creme', text: 'Vi afklarer mål, kontraindikationer og påfører lokalbedøvende creme for komfort. Områder og intensitet planlægges.' },
        { title: 'Steril microneedling-procedure', text: 'Kontrollerede mikrokanaler stimulerer kollagen/elastin og øger optag af aktive stoffer. Behandlingen tilpasses zone for jævn og sikker dækning.' },
        { title: 'Efterbehandling & vurdering (4–6 uger)', text: 'SPF 50 dagligt, undgå AHA/BHA/retinol i 3–5 dage og ingen sauna/hård træning første 24–48 t. Vurdering/plan for næste session efter 4–6 uger.' }
      ],
      safety: {
        note: 'Sterile engangshoveder – medicinsk hygiejne.',
        contraindications: [
          'Aktiv akne/infektion i området.',
          'Isotretinoin inden for 6–12 mdr (lægelig vurdering).',
          'Graviditet.'
        ],
        sideEffects: [
          'Rødme/svag hævelse 24–48 timer, let afskalning.'
        ]
      },
      aftercare: [
        '<b>SPF 50</b> dagligt.',
        'Undgå AHA/BHA/retinol i <b>3–5 dage</b>.',
        'Ingen sauna/hård træning første <b>24–48 timer</b>.',
        'Skånsom rens + fugt.'
      ],
      combinations: [
        { ref: 'prp', label: 'PRP', text: 'for heling og glød.' },
        { ref: 'skinbooster', label: 'Skinbooster', text: 'for fugt/elasticitet.' },
        { ref: 'botox', label: 'Botox', text: 'senere for mimiske linjer.' }
      ],
      pricing: {
        items: [
          { label: 'Ansigt (per session)', price: 'Fra 1.050 kr.' }
        ],
        notes: 'Pakker/kur giver ofte bedst værdi og resultat.'
      },
    },
    sectionsAssets: {
      audience: new URL('@/assets/behandlinger/konsultation.webp', import.meta.url).href,
      safety: new URL('@/assets/behandlinger/sikkerhed.webp', import.meta.url).href,
    }
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
const sectionsData = computed(() => behandlingData.value.sections || {})
const sectionAssets = computed(() => behandlingData.value.sectionsAssets || {})

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
    { q: 'Hvor længe holder botox?', a: 'Typisk <b>3–4 måneder</b>. Varighed afhænger af område, muskelstyrke og metabolisme.' },
    { q: 'Hvornår ses effekten af botox?', a: 'Effekten begynder efter 1 dage og <b>fuld synlig effekt</b> ses indtil <b>ca. 14 dage</b>.' },
    { q: 'Gør botox ondt, og bruges bedøvelse?', a: 'De fleste oplever kun let stik. Hos os er der <b>ingen bedøvelse</b> nødvendig.' },
    { q: 'Er der nedetid efter botox?', a: 'Som udgangspunkt <b>ingen reel nedetid</b>. Lette røde prikker kan ses i <b>få timer</b>. Hævelse eller blå mærker og let hovedpine kan forekomme.' },
    { q: 'Hvad bør jeg undgå efter behandlingen?', a: 'Undgå at <b>gnide</b> eller røre i området der er blevet behandlet og ikke anvende <b>make-up resten af dagen</b>. <b>Ingen hård træning</b> og undgå sauna samme dag. Du må ikke <b>lægge dig ned i de første 4 timer</b> du har fået din behandling med botox.' },
    { q: 'Kan botox bruges forebyggende?', a: 'Ja, regelmæssige behandlinger kan <b>forebygge dybere linjer</b> ved at dæmpe muskelaktiviteten.' },
    { q: 'Hvem bør ikke få botox?', a: 'Gravide/ammande og personer med visse neuromuskulære sygdomme bør <b>undgå</b> behandlingen.' },
    { q: 'Hvornår skal jeg til opfølgning?', a: 'Vi kan vurderer effekten efter <b>14 dage</b> og kan justere dosen efter behov.' }
  ],

  filler: [
    { q: 'Hvor længe holder hyaluronsyre-filler?', a: 'Typisk <b>6–12 måneder</b> afhængigt af produkt og område; læber kortere, kinder længere.' },
    { q: 'Ses resultatet med det samme?', a: 'Ja, resultatet er <b>øjeblikkeligt</b>, men den endelige form ses efter at hævelsen har lagt sig (få dage - 14 dage).' },
    { q: 'Gør en fillerbehandling ondt?', a: 'Vi anvender <b>bedøvende creme</b> for øget komfort - mange produkter indeholder også lidokain.' },
    { q: 'Kan filler opløses, hvis jeg fortryder?', a: 'Ja, hyaluronsyre-filler kan <b>opløses med hyaluronidase</b> af vores læge.' },
    { q: 'Nedetid og bivirkninger?', a: 'Let hævelse og blå mærker kan forekomme. Undgå <b>hård træning det første døgn</b> og <b>sauna/solarium 3 dage</b> efter behandlingen.' },
    { q: 'Er filler sikker?', a: 'Udført af erfaren læge er risikoen lav. Sjældne komplikationer (fx karpåvirkning) håndteres akut efter protokol.' },
    { q: 'Hvem bør undgå filler?', a: 'Graviditet/amning, aktiv infektion i området eller kendt allergi over for indholdsstoffer.' }
  ],

  skinbooster: [
    { q: 'Hvad er en skinbooster?', a: 'En tynd <b>hyaluronsyre</b>, der injiceres for at <b>fugte, udglatte og øge elasticiteten</b>—ikke for volumen.' },
    { q: 'Hvor mange behandlinger anbefales?', a: 'Muligt med et forløb på <b>2–3 sessioner</b> med minimum 2 måneders mellemrum, derefter vedligehold.' },
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
    { q: 'Hvor mange sessioner anbefales?', a: 'Ofte <b>3–6 behandlinger</b> med 4 ugers mellemrum, derefter vedligehold hver 2.–3. måned.' },
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


const extractPrice = (s) => {
  if (!s) return null
  const m = String(s).match(/(\d[\d.\s]*)/)
  if (!m) return null
  const n = parseInt(m[1].replace(/[^\d]/g, ''), 10)
  return Number.isFinite(n) ? n : null
}

const priceFrom = computed(() => {
  const d = behandlingData.value
  // اول تلاش از فیلدهای ساده
  const direct = extractPrice(d.price) || extractPrice(d.price2) || extractPrice(d.price3)
  if (direct) return direct
  // بعد از جدول pricing اگر بود
  const items = sectionsData.value?.pricing?.items || []
  const nums = items.map(i => extractPrice(i.price)).filter(Boolean)
  return nums.length ? Math.min(...nums) : null
})



// JSON-LD ها
const BOOKING_URL = 'https://dsklinik.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=64c857a01938e8ee26f9d9f8fca49125b10711&bId=10711&dTpl=1&sSToken=7147f9ee6e0f4459509dbaca658244d6'
const procedureLd = computed(() => {
  const d = behandlingData.value
  const s = sectionsData.value || {}
  const offer = priceFrom.value ? {
    '@type': 'Offer',
    priceCurrency: 'DKK',
    price: priceFrom.value,
    url: BOOKING_URL,
    availability: 'https://schema.org/InStock'
  } : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: d.title,
    description: d.description,
    url: canonical.value,
    image: ogImage.value,
    provider: { '@type': 'MedicalClinic', name: 'DK Skønhedsklinik', url: SITE_URL },
    areaServed: 'Esbjerg, Vejle, Danmark',
    bodyLocation: 'Face, Skin',
    procedureType: 'NoninvasiveProcedure',
    howPerformed: s.steps?.map(st => `${st.title}: ${st.text}`).join(' • '),
    preparation: s.aftercare ? 'Forberedelse ud fra lægelig vurdering; se også efterbehandling.' : undefined,
    followup: s.aftercare?.join(' • '),
    contraindication: s.safety?.contraindications?.join(' • '),
    offers: offer,
    potentialAction: { '@type': 'ReserveAction', target: BOOKING_URL }
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
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

    // Open Graph
    { property: 'og:type', content: 'article' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc },
    { property: 'og:url', content: url },
    { property: 'og:image', content: img },
    { property: 'og:image:alt', content: behandlingData.value.title },
    // پیشنهاد: اگر همه OGها 1200x630 هستند، این دو خط کمک می‌کند
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/webp' },
    { property: 'og:site_name', content: 'DK Skønhedsklinik' },

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
    htmlAttrs: { lang: 'da' },
    meta,
    link: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', href: url, hreflang: 'da' },
      { rel: 'alternate', href: url, hreflang: 'x-default' },
      { rel: 'preload', as: 'image', href: behandlingData.value.imageSrc }
    ],
    script: scripts
  }
})
</script>






<style lang="scss" scoped></style>
