/**
 * Centralt behandlingsregister.
 *
 * ET sted beskrives alle behandlinger. Herfra laeses:
 *   - oversigtssiden /behandlinger/
 *   - menuen (AppNavigation)
 *   - "Relaterede behandlinger" nederst paa hver side
 *   - footeren
 *   - broedkrummerne
 *
 * En ny behandling tilfoejes derfor EET sted og dukker op alle steder.
 * Saet status til 'live', naar siden er bygget og klar.
 */

import BotoxImg        from '@/assets/Carts/Botox.webp'
import FillerImg       from '@/assets/Carts/Filler.webp'
import SkinboosterImg  from '@/assets/Carts/Skinbooster.webp'
import MesotherapyImg  from '@/assets/Carts/Mesotherapy.webp'
import MicroneedlingImg from '@/assets/Carts/Microneedling.webp'
import LaebefillerImg  from '@/assets/behandlinger/filler.webp'

export const SITE_URL = 'https://dsklinik.dk'

/** Saettes til true, naar oversigtssiden /behandlinger/ er bygget (fase 2). */
export const HUB_LIVE = false

/* ------------------------------------------------------------------ *
 * Kategorier – samme fire som i informationsarkitekturen
 * ------------------------------------------------------------------ */
export const KATEGORIER = [
  {
    id: 'rynker',
    navn: 'Rynkebehandling',
    kort: 'Blødgør mimiske rynker og linjer, uden at dit udtryk forsvinder.',
    anker: 'rynkebehandling'
  },
  {
    id: 'volumen',
    navn: 'Filler & volumen',
    kort: 'Form, fylde og kontur med hyaluronsyre – læber, kæbelinje, kinder.',
    anker: 'filler-og-volumen'
  },
  {
    id: 'hudkvalitet',
    navn: 'Hudkvalitet',
    kort: 'Fugt, glød og fasthed. Behandlinger der arbejder med selve huden.',
    anker: 'hudkvalitet'
  },
  {
    id: 'medicinsk',
    navn: 'Medicinsk behandling',
    kort: 'Gener frem for kosmetik: kraftig svedtendens og kæbespændinger.',
    anker: 'medicinsk-behandling'
  }
]

/* ------------------------------------------------------------------ *
 * Behandlinger
 *
 * status: 'live'    – siden findes og vises alle steder
 *         'planlagt'– siden er besluttet, men ikke bygget. Vises ikke
 *         'udgaaet' – siden findes, men behandlingen tilbydes ikke mere
 * ------------------------------------------------------------------ */
export const BEHANDLINGER = [
  /* ---------- Rynkebehandling ---------- */
  {
    slug: 'botox',
    path: '/behandlinger/botox/',
    navn: 'Botox',
    kortTitel: 'Botox – rynkebehandling',
    kategori: 'rynker',
    kort: 'Blødgør rynker i pande, mellem bryn og ved øjnene. Doseret så din mimik bevares.',
    prisFra: 550,
    prisTekst: 'fra 550 kr.',
    billede: BotoxImg,
    status: 'live',
    iMenu: true,
    relaterede: ['filler', 'nefertiti-loeft', 'skinbooster']
  },
  {
    slug: 'nefertiti-loeft',
    path: '/behandlinger/botox/nefertiti-loeft/',
    navn: 'Nefertiti-løft',
    kortTitel: 'Nefertiti-løft',
    kategori: 'rynker',
    forael: 'botox',
    kort: 'Botox i halsmusklen, der strammer halsen og løfter kæbelinjen nedefra.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['kaebelinje', 'botox', 'skinbooster']
  },
  {
    slug: 'gummy-smile',
    path: '/behandlinger/botox/gummy-smile/',
    navn: 'Gummy smile',
    kortTitel: 'Gummy smile',
    kategori: 'rynker',
    forael: 'botox',
    kort: 'Sænker overlæben let, så der vises mindre tandkød, når du smiler.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['laebefiller', 'botox']
  },

  /* ---------- Filler & volumen ---------- */
  {
    slug: 'filler',
    path: '/behandlinger/filler/',
    navn: 'Filler',
    kortTitel: 'Filler – volumen og kontur',
    kategori: 'volumen',
    kort: 'Hyaluronsyre der genskaber volumen og blødgør linjer i ansigtet.',
    prisFra: 1350,
    prisTekst: '1.350 kr. pr. ml',
    billede: FillerImg,
    status: 'live',
    iMenu: true,
    relaterede: ['laebefiller', 'kaebelinje', 'botox']
  },
  {
    slug: 'laebefiller',
    path: '/behandlinger/filler/laeber/',
    navn: 'Læbefiller',
    kortTitel: 'Læbefiller',
    kategori: 'volumen',
    forael: 'filler',
    kort: 'Fylde, form og en tydeligere læbekant – lagt i små mængder ad gangen.',
    prisFra: 1350,
    prisTekst: '1.350 kr. pr. ml',
    billede: LaebefillerImg,
    status: 'live',
    iMenu: true,
    relaterede: ['filler', 'oploesning', 'gummy-smile']
  },
  {
    slug: 'kaebelinje',
    path: '/behandlinger/filler/kaebelinje/',
    navn: 'Kæbelinje & hage',
    kortTitel: 'Kæbelinje & hage',
    kategori: 'volumen',
    forael: 'filler',
    kort: 'Bygger kæbelinje og hage op med volumen for en skarpere profil.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['nefertiti-loeft', 'filler', 'laebefiller']
  },
  {
    slug: 'naesefiller',
    path: '/behandlinger/filler/naese/',
    navn: 'Næsefiller',
    kortTitel: 'Næsefiller',
    kategori: 'volumen',
    forael: 'filler',
    kort: 'Retter næseryg og spids uden operation. Resultatet er ikke permanent.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['filler', 'oploesning']
  },
  {
    slug: 'oploesning',
    path: '/behandlinger/filler/oploesning/',
    navn: 'Opløsning af filler',
    kortTitel: 'Opløsning af filler',
    kategori: 'volumen',
    forael: 'filler',
    kort: 'Fortryder du en filler? Hyaluronsyre kan opløses igen med hyaluronidase.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['laebefiller', 'filler']
  },

  /* ---------- Hudkvalitet ---------- */
  {
    slug: 'skinbooster',
    path: '/behandlinger/skinbooster/',
    navn: 'Skinbooster',
    kortTitel: 'Skinbooster',
    kategori: 'hudkvalitet',
    kort: 'Fugter huden indefra og forbedrer elasticitet, glød og tekstur.',
    prisFra: 1350,
    prisTekst: 'fra 1.350 kr.',
    billede: SkinboosterImg,
    status: 'live',
    iMenu: true,
    relaterede: ['profhilo', 'microneedling', 'mesoterapi']
  },
  {
    slug: 'profhilo',
    path: '/behandlinger/skinbooster/profhilo/',
    navn: 'Profhilo',
    kortTitel: 'Profhilo',
    kategori: 'hudkvalitet',
    forael: 'skinbooster',
    kort: 'Biostimulator der stimulerer hudens eget kollagen og elastin.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['profhilo-structura', 'ejal40', 'skinbooster']
  },
  {
    slug: 'profhilo-structura',
    path: '/behandlinger/skinbooster/profhilo-structura/',
    navn: 'Profhilo Structura',
    kortTitel: 'Profhilo Structura',
    kategori: 'hudkvalitet',
    forael: 'skinbooster',
    kort: 'Nyere variant målrettet fasthed og støtte dybere i huden.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['profhilo', 'ejal40', 'skinbooster']
  },
  {
    slug: 'ejal40',
    path: '/behandlinger/skinbooster/ejal40/',
    navn: 'Ejal40',
    kortTitel: 'Ejal40',
    kategori: 'hudkvalitet',
    forael: 'skinbooster',
    kort: 'Skinbooster med høj- og lavmolekylær hyaluronsyre. Fugt og elasticitet.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['profhilo', 'skinbooster', 'mesoterapi']
  },
  {
    slug: 'microneedling',
    path: '/behandlinger/microneedling/',
    navn: 'Microneedling',
    kortTitel: 'Microneedling',
    kategori: 'hudkvalitet',
    kort: 'Stimulerer hudens egen heling. Oplagt ved akne-ar, store porer og ujævn tekstur.',
    prisFra: 1050,
    prisTekst: 'fra 1.050 kr.',
    billede: MicroneedlingImg,
    status: 'live',
    iMenu: true,
    relaterede: ['skinbooster', 'mesoterapi', 'profhilo']
  },
  {
    slug: 'mesoterapi',
    path: '/behandlinger/mesotherapy/',
    navn: 'Mesoterapi',
    kortTitel: 'Mesoterapi',
    kategori: 'hudkvalitet',
    kort: 'Mikroinjektioner med vitaminer og antioxidanter for glød og fornyelse.',
    prisFra: 750,
    prisTekst: 'fra 750 kr.',
    billede: MesotherapyImg,
    status: 'live',
    iMenu: true,
    relaterede: ['skinbooster', 'haartab', 'microneedling']
  },
  {
    slug: 'haartab',
    path: '/behandlinger/haartab/',
    navn: 'Hårtab',
    kortTitel: 'Behandling mod hårtab',
    kategori: 'hudkvalitet',
    kort: 'Mikroinjektioner i hovedbunden mod begyndende hårtab og tyndt hår.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['mesoterapi', 'microneedling']
  },

  /* ---------- Medicinsk behandling ---------- */
  {
    slug: 'svedbehandling',
    path: '/behandlinger/svedbehandling/',
    navn: 'Svedbehandling',
    kortTitel: 'Svedbehandling',
    kategori: 'medicinsk',
    kort: 'Mod kraftig svedtendens i armhuler, hænder og fødder. Virker 6–9 måneder.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['kaebespaendinger', 'botox']
  },
  {
    slug: 'kaebespaendinger',
    path: '/behandlinger/kaebespaendinger/',
    navn: 'Kæbespændinger',
    kortTitel: 'Kæbespændinger & tandskæren',
    kategori: 'medicinsk',
    kort: 'Mod tandskæren, kæbesmerter og spændingshovedpine – og en smallere kæbelinje.',
    prisFra: null,
    billede: null,
    status: 'planlagt',
    iMenu: true,
    relaterede: ['nefertiti-loeft', 'botox', 'svedbehandling']
  },

  /* ---------- Udgaaet, men siden bevares ---------- */
  {
    slug: 'prp',
    path: '/behandlinger/prp/',
    navn: 'PRP',
    kortTitel: 'PRP (vampyrbehandling)',
    kategori: 'hudkvalitet',
    kort: 'Tilbydes ikke længere. Se hvad vi anbefaler i stedet.',
    prisFra: null,
    billede: null,
    status: 'udgaaet',
    iMenu: false,
    relaterede: ['mesoterapi', 'skinbooster', 'microneedling']
  }
]

/* ------------------------------------------------------------------ *
 * Hjaelpefunktioner
 * ------------------------------------------------------------------ */

/** Alle behandlinger der har en faerdig side og tilbydes. */
export const liveBehandlinger = () =>
  BEHANDLINGER.filter(b => b.status === 'live')

/** Alle der har en side overhovedet (inkl. udgaaede) – fx til sitemap-tjek. */
export const behandlingerMedSide = () =>
  BEHANDLINGER.filter(b => b.status === 'live' || b.status === 'udgaaet')

export const findBehandling = slug =>
  BEHANDLINGER.find(b => b.slug === slug) || null

export const findBehandlingVedPath = path => {
  const p = path.endsWith('/') ? path : `${path}/`
  return BEHANDLINGER.find(b => b.path === p) || null
}

/** Live-behandlinger i en kategori, forael foer underside. */
export const behandlingerIKategori = kategoriId =>
  liveBehandlinger()
    .filter(b => b.kategori === kategoriId)
    .sort((a, b) => (a.forael ? 1 : 0) - (b.forael ? 1 : 0))

/** Kategorier der har mindst en live-behandling. */
export const aktiveKategorier = () =>
  KATEGORIER.filter(k => behandlingerIKategori(k.id).length > 0)

/**
 * Relaterede behandlinger til en side. Kun live, aldrig siden selv.
 * Falder tilbage paa samme kategori, hvis listen bliver for kort.
 */
export const relateredeFor = (slug, antal = 3) => {
  const b = findBehandling(slug)
  if (!b) return []

  const valgte = (b.relaterede || [])
    .map(findBehandling)
    .filter(x => x && x.status === 'live' && x.slug !== slug)

  if (valgte.length >= antal) return valgte.slice(0, antal)

  const erValgt = x => x.slug === slug || valgte.some(v => v.slug === x.slug)

  // foerst samme kategori, derefter alle oevrige live-behandlinger,
  // saa gitteret altid er fyldt - ogsaa mens der kun er faa sider
  const udfyld = [
    ...behandlingerIKategori(b.kategori).filter(x => !erValgt(x)),
    ...liveBehandlinger().filter(x => !erValgt(x) && x.kategori !== b.kategori)
  ]

  const resultat = [...valgte]
  for (const x of udfyld) {
    if (resultat.length >= antal) break
    if (!resultat.some(r => r.slug === x.slug)) resultat.push(x)
  }
  return resultat.slice(0, antal)
}

/**
 * Broedkrummesti til en behandling. Bruges baade til den synlige
 * komponent og til BreadcrumbList-schema, saa de to aldrig kan afvige.
 */
export const broedkrummerFor = slug => {
  const b = findBehandling(slug)
  const sti = [
    { navn: 'Forside', path: '/' },
    { navn: 'Behandlinger', path: '/behandlinger/' }
  ]
  if (!b) return sti

  if (b.forael) {
    const f = findBehandling(b.forael)
    if (f) sti.push({ navn: f.navn, path: f.path })
  }
  sti.push({ navn: b.navn, path: b.path })
  return sti
}

/** BreadcrumbList-schema ud fra en sti fra broedkrummerFor(). */
export const broedkrummeSchema = sti => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: sti.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.navn,
    item: `${SITE_URL}${t.path === '/' ? '' : t.path}` || SITE_URL
  }))
})
