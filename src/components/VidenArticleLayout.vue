<template>
    <article class="blog-article">
        <!-- Top bar progress (valgfri) -->
        <div class="reading-progress" :style="{ width: progress + '%' }" aria-hidden="true"></div>

        <!-- Hero -->
        <header class="blog-hero">
            <button class="back-link" type="button" @click="goBack" aria-label="Tilbage til forrige side">
                <span>Tilbage til oversigten</span>
            </button>
        </header>

        <!-- Body -->
        <div class="container blog-container">
            <div class="content-grid">
                <!-- VENSTRE RAIL -->
                <aside class="sidebar" aria-label="Indhold">
                    <!-- NY: mini-relaterede -->
                    <div v-if="related?.length" class="related-mini">
                        <p class="mini-title">Relaterede artikler</p>
                        <ul>
                            <li v-for="(r, i) in related.slice(0, 4)" :key="i">
                                <router-link :to="r.to" class="mini-item">
                                    <img :src="r.img" :alt="r.alt || r.title" loading="lazy" decoding="async" />
                                    <div>
                                        <span class="mini-title-text">{{ r.title }}</span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="share">
                        <div class="share-text">
                            <p>Del artiklen på din kanal</p>
                        </div>
                        <div class="share-icons">
                            <button @click="share('fb')" aria-label="Del på Facebook">
                                <img src="../assets/icons/Facebook_Logo_Secondary.webp" alt="Del artiklen på Facebook">
                            </button>
                            <button @click="share('li')" aria-label="Del på LinkedIn">
                                <img src="../assets/icons/Instagram_Glyph_White.webp" alt="Del artiklen på Instagram">
                            </button>
                            <button @click="share('x')" aria-label="Del på X">
                                <img src="../assets/icons/logo.svg" alt="Del artiklen på X">
                            </button>
                        </div>

                    </div>
                </aside>


                <div class="blog-content-wrapper">

                    <ul v-if="categories?.length" class="cat-chips" aria-label="Kategorier">
                        <li v-for="(c, i) in categories" :key="i">{{ c }}</li>
                    </ul>

                    <h1>{{ title }}</h1>

                    <ul class="meta">
                        <li v-if="author"><span>Skrevet af: {{ author }}</span></li>
                        <li v-if="readingTime"><span>{{ readingTime }} min læsetid</span></li>
                    </ul>

                    <!-- NY PLACERING: hero-billede i højre kolonne -->
                    <figure v-if="heroSrc" class="media media-hero in-grid">
                        <img :src="heroSrc" :alt="heroAlt" width="1200" height="630" loading="eager"
                            fetchpriority="high" />
                        <span class="date-badge">
                            <span class="date">
                                {{ date }}
                            </span>
                            <span class="month">
                                {{ month }}
                            </span>
                        </span>

                    </figure>

                    <!-- HØJRE KOLONNE: selve artiklen -->
                    <div class="blog-content">
                        <slot name="intro" />
                        <slot />

                        <section v-if="$slots.cta" class="callout-cta">
                            <slot name="cta" />
                        </section>

                        <slot name="faq" />
                    </div>

                </div>
            </div>
        </div>
    </article>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    eyebrow: String,
    title: { type: String, required: true },
    author: String,
    published: String,
    publishedISO: String,
    date: String,
    month: String,
    readingTime: Number,
    categories: Array,
    heroSrc: String,
    heroAlt: String,
    related: Array,     // [{to,img,title,cat}]
    breadcrumbs: Array  // [{label,to?}]
})

const progress = ref(0)
const onScroll = () => {
    const el = document.documentElement
    const h = el.scrollHeight - el.clientHeight
    progress.value = h > 0 ? Math.min(100, (el.scrollTop / h) * 100) : 0
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const share = (net) => {
    const url = window.location.href
    const text = document.title
    const u = {
        fb: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        li: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
        x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
    }[net]
    if (u) window.open(u, '_blank', 'noopener,noreferrer')
}

function goBack() {
    // Gå tilbage hvis der ER historik — ellers fald tilbage til /viden
    if (window.history.length > 1) {
        router.back()
    } else {
        router.push({ name: 'viden' })
    }
}
</script>

<style lang="scss" scoped>
#nav {
    position: relative !important;
    background-color: #3931cd !important;
}
</style>


<style lang="scss">
@use './css/style.scss';

.blog-hero .back-link {
    -webkit-tap-highlight-color: transparent;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #153655;
    font-weight: 600;
    cursor: pointer;
    margin: 0 0 10px;

    span {
        display: flex;
        align-items: center;
    }

    /* lidt luft over titlen */
    ::before {
        content: "🠮";
        margin-right: 20px;
        display: inline-block;
        transform: rotate(-180deg);
        color: #153655;
        font-size: 35px;
    }
}

.blog-content {
    .inline-link {
        cursor: pointer;
        color: #2d58a1;
    }
}



.blog-hero .back-link span:hover {
    opacity: .8;
}


/* Hero-billede i grid-højre kolonne (samme bredde som tekst) */
.media-hero.in-grid {
    position: relative;
    margin: 0;
    overflow: hidden;
}

/* Venstre rail: lille relaterede-boks a la CeriX */
.related-mini {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .08);
    padding: 35px 37px;
    border-radius: 15px;
}

.related-mini .mini-title {
    font-weight: bold !important;
    margin: 0 0 10px;
}

.related-mini ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;
}

.related-mini .mini-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 21px;
}

.related-mini .mini-item img {
    width: 125px;
    height: 125px;
    margin-right: 25px;
    object-fit: cover;
    border-radius: 6px;
    display: block;
}

.related-mini .mini-title-text {
    color: #19212a;
    line-height: 1.35;
    font-weight: bold;
}

.faq-title {
    display: flex;
    flex-direction: column;
}

/* Små responsives, så hero stadig sidder rigtigt på mobil */
@media (max-width: 1100px) {
    .media-hero.in-grid {
        grid-column: 1;
    }

    /* når grid bliver 1-kolonne */
}



/* ========= CeriX-inspireret artikel-UI ========= */
.blog-article {
    /* 1) Sideskallen: lys grå baggrund, hvidt indholdskort */
    --surface: #ffffff;
    --surface-alt: #fafbfc;
    /* let grå til info-bokse */
    --ink: #19212a;
    --ink-soft: #5a636d;
    --line: rgba(0, 0, 0, .08);
    --accent: #7aa6c9;
    /* brug en af jeres brand-toner hvis ønsket */

    background: #f3f5f7;

    .callout-cta {
        .læs-mere {
            max-width: 100px !important;
        }
    }

    /* HERO (breadcrumbs + titel) */
    .blog-hero {
        background: transparent;
        color: #153655;
        margin-top: 20px !important;

        /* centrér + match max-bredde */
        max-width: 1200px;
        margin: 0 auto;

        /* vigtigst: grid med venstre rail + indhold */
        display: grid;
        grid-template-columns: 300px 1fr;
        /* rail + artikel */
        gap: 28px;

        ul,
        li {
            display: flex;
            list-style: none;
            gap: 20px;
            padding-left: 0 !important;
        }
    }

    .breadcrumbs {
        grid-column: 1;
        margin-bottom: .6rem;
    }

    .cat-chips {
        display: flex;
        gap: .5rem;
        margin: .4rem 0 0;
        padding: 0;
        list-style: none;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
    }

    .cat-chips li {
        background: none;
        border-radius: 0;
        padding: 0;
        font-size: .85rem;
        text-transform: uppercase;
        letter-spacing: .04em;
        color: #2d58a1;
    }

    /* lille komma-separator som på klassiske kategori-linjer */
    .cat-chips li+li::before {
        content: '•';
        margin: 0 .35rem;
        opacity: .5;
    }

    .eyebrow {
        margin: 0 0 .4rem;
    }

    .blog-hero h1 {
        margin: .25rem 0 .25rem;
        line-height: 1.15;
    }

    .meta {
        display: flex;
        list-style: none;
        gap: 20px;
        opacity: .8;
        padding-left: 0 !important;

        :first-child {
            ::after {
                content: '-';
                margin-left: 1.3rem;
                opacity: .5;
            }
        }
    }

    /* Hero-billede: stort, afrundet, uden hård skygge */
    .media-hero {
        /* flugter med grid’en nedenfor */
        overflow: hidden;
    }

    .media-hero img {
        display: block;
        width: 100%;
        height: auto;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    /* 2) Indholdsgitter: smal sticky venstre, hvidt kort til artiklen */
    .content-grid {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 0 50px 0;
        display: flex;
        gap: 28px;
        align-items: start;
    }

    .sidebar {
        top: 96px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        width: 30%;
        gap: 12px;
    }

    .share {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .share-text {
            p {
                margin: 0;
                font-weight: bold !important;
            }
        }

        .share-icons {
            display: flex;
            gap: 8px;
        }
    }

    .share button {
        border: 1px solid rgba(0, 0, 0, .12);
        background: #2d58a1;
        border-radius: 8px;
        padding: 8px;
        cursor: pointer;

        img {
            width: 35px;
            height: 35px;
        }
    }

    .container h2 {
        font-size: 32px !important;
        margin-bottom: 10px !important;
    }

    .blog-content-wrapper {
        display: flex;
        flex-direction: column;
        width: 66%;

        h1 {
            margin: 17px 0 0 0 !important;
            font-size: 36px;
        }

        .intro {
            font-weight: bold !important;
            font-size: 18px;
            margin-bottom: 50px;
        }

        .section-group {
            font-size: 16px;

            b {
                color: #2d58a1;
            }
        }

        .section-kort-text,
        section {
            margin-bottom: 70px;
        }
    }

    /* Selve artikelkortet */
    .blog-content {
        background: var(--surface);
        border: 1px solid var(--line);
        padding: 70px 100px;
        max-width: 820px;
        color: var(--ink);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    /* 3) Typografi & afstande som på CeriX */
    .blog-content p {
        margin: 0 0 1.05em;
        line-height: 1.75;
        color: var(--ink);
    }

    .blog-content ul,
    .blog-content ol {
        margin: 0 0 1.05em 0;
        padding-left: 0;
        line-height: 1.7;
    }

    .blog-content li+li {
        margin-top: .25em;
    }

    .section-title,
    .blog-content h2 {
        color: #153655 !important;
        font-size: 22px;
        line-height: 1.25;
        text-align: left;
    }

    .blog-content h3 {
        margin: 1.4em 0 .5em;
        line-height: 1.3;
    }

    /* Citat / blockquote */
    .blog-content blockquote {
        margin: 1.4em 0;
        padding: 14px 16px;
        background: var(--surface-alt);
        border-left: 4px solid var(--accent);
        border-radius: 8px;
        font-style: italic;
        color: var(--ink-soft);
    }


    section {
        ul {
            li {
                margin-bottom: 25px;
                margin-top: 25px !important;
            }
        }
    }

    /* Relaterede kort i bunden (kan ligne CeriX’ små kort) */
    .related {
        padding: 8px 8% 70px;
    }

    .related-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        gap: 18px;
        grid-template-columns: repeat(12, 1fr);
    }

    .related-card {
        grid-column: span 3;
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .rel-cover img {
        width: 100%;
        height: auto;
        display: block;
    }

    .rel-body {
        padding: 12px;
    }

    .rel-cat {
        font-size: .8rem;
        opacity: .7;
        margin: 0 0 6px;
    }

    .rel-link {
        margin-top: 6px;
    }

    /* Tabel – bevar din mobil-stack-løsning */
    .table-wrap {
        margin: 16px 0 26px;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 16px;
        display: flex;
        flex-direction: column;
    }

    thead th {
        text-align: left;
        background: rgba(0, 0, 0, .04);
    }

    th,
    td {
        padding: 14px;
        vertical-align: top;
        border-bottom: 1px solid var(--line);
    }

    thead {
        display: flex;
        justify-content: space-between;
    }

    thead th {
        width: 50%;
        border: 1px solid #e8e8e8;
    }

    #botox-vs-filler tbody div td {
        width: 50%;
        min-width: 200px;
        text-wrap: balance;
    }

    .faq {
        background: transparent !important;
        padding: 0 !important;
        margin-bottom: 0 !important;
    }

    #botox-vs-filler tbody {
        display: flex;
        flex-direction: column;
        width: 100% !important;
    }

    @media (max-width: 1550px) {
        .faq {
            h2 {
                font-size: 22px !important;
            }
        }

        .blog-hero {
            margin-top: 10px !important;
        }
    }

    /* RESPONSIVE */

    @media (max-width: 1300px) {
        .blog-hero {
            width: 80%;

            .back-link {
                padding: 0;
            }
        }

        .content-grid {
            flex-direction: column-reverse;
            align-items: center;
            width: 100%;
        }

        .blog-content-wrapper {
            width: 80%;
        }

        .sidebar {
            width: 80%;
            padding: 20px 0;
        }
    }

    @media (max-width: 1100px) {
        .content-grid {
            gap: 18px;
        }

        .sidebar {
            position: static;
            order: -1;
        }

        .blog-content {
            padding: 22px;
        }
    }

    @media (max-width: 680px) {
        .related-grid {
            grid-template-columns: 1fr 1fr;
        }

        .related-card {
            grid-column: span 1;
        }

        /* mobilvenlig tabel (din generiske transponeringsløsning) */

        #botox-vs-filler .table-wrap {
            display: flex;
            flex-direction: column;
            overflow: visible;
        }

        thead {
            th {
                width: 50%;
                border: 1px solid #e8e8e8;
            }
        }

        #botox-vs-filler tbody {
            display: flex;
            flex-direction: column;

            div {
                td {
                    width: 50%;
                    font-weight: 300;
                    text-wrap: balance;
                }
            }
        }

        #botox-vs-filler tr {
            display: contents;
        }

        #botox-vs-filler td {
            padding: 12px;
            border: 1px solid #e8e8e8;
            background: #f6f7f9;
            font-size: 14px;
            line-height: 1.45;
            text-align: left;
            font-weight: bold;
        }
    }
}

@media only screen and (max-width: 890px) {
    .blog-article {
        .blog-hero {
            max-width: 700px;
            width: 100%;

            .back-link {
                padding: 0;
            }
        }

        .content-grid {
            max-width: 700px;
        }

        .blog-content-wrapper {
            width: 100%;
        }

        .sidebar {
            width: 100%;
        }
    }
}

@media only screen and (max-width: 780px) {

    .blog-article {
        .blog-hero {
            width: 95%;
        }

        .content-grid {
            padding: 0 0 20px 0;
        }

        .blog-content-wrapper,
        .sidebar {
            width: 95%;
            padding: 0;
        }

        .sidebar {
            flex-direction: column-reverse;

            .share {
                margin-bottom: 30px;
            }
        }

        .blog-content-wrapper h1 {
            margin: 0 !important;
        }

        .cat-chips {
            display: none;
        }
    }

    .section-title {
        font-size: 26px !important;
    }

    .blog-article .container h2 {
        font-size: 26px !important;
    }

    .blog-article .blog-content-wrapper h1 {
        font-size: 32px;
    }

    .share {
        padding: 0 7%;
    }
}

@media only screen and (max-width: 530px) {
    .blog-article #botox-vs-filler tbody div td {
        min-width: unset;
    }
}


.section-media {
    width: 100%;

    img {
        width: 100%;
        height: auto;
    }
}
</style>