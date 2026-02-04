<template>
    <section class="viden-index">
        <header class="index-hero">
            <p class="eyebrow">Vidensunivers</p>
            <h1>Guides, råd og viden - fra DK Skønhedsklinik</h1>
            <p class="lead">
                Bliv klogere på botox, filler, skinbooster m.m. – lægefagligt og let at læse.
            </p>

            <div class="toolbar">
                <input v-model="q" type="search" placeholder="Søg i artikler…" aria-label="Søg i artikler"
                    class="search" />

                <ul class="chips" aria-label="Filtrér efter kategori">
                    <li>
                        <button :class="{ active: selCat === 'Alle' }" @click="selCat = 'Alle'"
                            type="button">Alle</button>
                    </li>
                    <li v-for="c in categories" :key="c">
                        <button :class="{ active: selCat === c }" @click="selCat = c" type="button">{{ c }}</button>
                    </li>
                </ul>
            </div>
        </header>

        <div class="grid">
            <router-link v-for="p in filtered" :key="p.slug" :to="p.to" class="card card-link">
                <div class="artikel-image-wrapper cover">
                    <img :src="p.img" :alt="p.alt || p.title" loading="lazy" decoding="async" />
                    <div class="date-badge">
                        <span class="date">
                            {{ p.date }}
                        </span>
                        <span class="month">
                            {{ p.month }}
                        </span>
                    </div>
                </div>
                <div class="body">
                    <h2 class="h3">{{ p.title }}</h2>
                    <p class="excerpt">{{ p.excerpt }}</p>
                    <span class="more">Læs artikel</span>
                    <div class="meta">
                        <time :datetime="p.dateISO">{{ p.dateHuman }}</time>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@unhead/vue'

const SITE_URL = 'https://dsklinik.dk'
const CANONICAL = `${SITE_URL}/viden/`
useHead({
    title: 'Vidensunivers – guides og artikler | DK Skønhedsklinik',
    meta: [
        { name: 'description', content: 'Læs lægefaglige artikler om botox, filler, skinbooster m.m. fra DK Skønhedsklinik.' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'da_DK' },
        { property: 'og:site_name', content: 'DK Skønhedsklinik' },
        { property: 'og:title', content: 'Vidensunivers – DK Skønhedsklinik' },
        { property: 'og:description', content: 'Guides og viden om botox, filler, skinbooster m.m.' },
        { property: 'og:url', content: CANONICAL },
    ],
    link: [
        { rel: 'canonical', href: CANONICAL },
        { rel: 'alternate', hreflang: 'da', href: CANONICAL },
    ],
})

const posts = ref([])

onMounted(async () => {
  const mods = import.meta.glob('@/components/views/viden/*.vue')
  const loaded = await Promise.all(Object.values(mods).map(fn => fn()))
  posts.value = loaded
    .map(m => m.default?.videnCard)   // fra defineOptions i hver artikel
    .filter(Boolean)
})

const categories = computed(() => {
    const s = new Set()
    posts.value.forEach(p => p.cats.forEach(c => s.add(c)))
    return Array.from(s).sort()
})

const q = ref('')
const selCat = ref('Alle')

const filtered = computed(() => {
    const text = q.value.trim().toLowerCase()
    return posts.value.filter(p => {
        const catOk = selCat.value === 'Alle' || p.cats.includes(selCat.value)
        const qOk = !text ||
            p.title.toLowerCase().includes(text) ||
            p.excerpt.toLowerCase().includes(text)
        return catOk && qOk
    })
})
</script>

<style scoped lang="scss">
@use '../css/style.scss';

.viden-index {
    color: #000;
    padding: 50px 0;
    margin: 0 auto;
    max-width: 1500px;
}

.index-hero {
    color: #153655;
    margin-bottom: 16px;

    .lead {
        margin-top: 6px;
        opacity: .9;
    }
}

.toolbar {
    display: grid;
    gap: 10px;
    margin-top: 16px;
}

.search {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, .12);
    background: #fff;
}

.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    list-style: none;
    padding: 0;
    margin: 0;

    button {
        padding: 15px 35px;
        border-radius: 15px;
        border: 1px solid rgba(0, 0, 0, .12);
        background: #fff;
        cursor: pointer;
    }

    .active {
        background: #153655;
        color: #fff;
        border-color: #153655;
    }
}

.grid {
    display: flex;
    flex-wrap: wrap;
    
    gap: 20px;
    width: 100%;
    margin-top: 35px;
}

.artikel-image-wrapper{
    img{
        aspect-ratio: 16/12;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
}

.card {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .08);
    width: 32%;
    padding: 0 !important;
    height: auto;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.cover img {
    width: 100%;
    height: auto;
    display: block;
}

.cat {
    font-size: .85rem;
    opacity: .7;
    margin: 0 0 6px;
}

.h3 {
    margin: 0 0 6px;
    font-size: 1.15rem;
}

.excerpt {
    font-size: 18px;
    line-height: 26px;
    margin: 0 0 8px;
}

.meta {
    display: flex;
    gap: 8px;
    opacity: .5;
    font-size: 16px;
    margin-top: 17px;
}

.more {
    display: inline-block;
    margin-top: 6px;
}

.card-link {
    display: flex;
    justify-content: start;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .08);
    border-radius: 15px;
    margin-bottom: 45px;
    overflow: hidden;
    position: relative;
    transition: transform .3s ease;
}

.card-link img {
    width: 100%;
    height: auto;
    display: block;
}

.card-link .body {
    padding: 30px;
    text-align: left;

    h2 {
        font-size: 24px;
        margin-bottom: 15px;
    }
}

.card-link .more {
    display: inline-block;
    margin-top: 6px;
    text-decoration: underline;
}

.card-link:hover {
    transform: translateY(-3px);
}

.card:hover {
    scale: none;
}

@media only screen and (min-width: 1750px) {
    .card {
        width: 32.33% !important;
        height: auto !important;
    }
}


@media (max-width: 1550px) {
    .viden-index {
        padding: 20px 0;
        max-width: 1200px;
    }
}

@media (max-width: 980px) {
    .card {
        grid-column: span 6;
    }
}

@media (max-width: 640px) {
    .viden-index {
        padding: 120px 5% 50px;
    }

    .grid {
        grid-template-columns: 1fr 1fr;
        gap: 14px;
    }

    .card {
        grid-column: span 1;
    }
}

@media (max-width: 420px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
