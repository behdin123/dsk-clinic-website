<template>

    <div class="VIDEO">
        <div id="video-dark-version-image" class="bg-img img" :class="[{ 'dark-mode-cover-home': dark }]">
            <h1 data-aos="fade-right" data-aos-duration="3000">Videoproduktion</h1>
            <div class="scroll-indicator">
                <span>Scroll ned</span>
                <div class="line"></div>
            </div>
        </div>

        <div class="my-video-box first-mode">
            <div class="video-titel h1">
                <h1>Video Assets</h1>
                <b> Alle scener er optaget af mig </b>
                <p class="quality-note">For optimal kvalitet, vælg 4K fra indstillingerne i videoen.</p>
            </div>
            <div class="kortfilm-container">
                <div class="video-container extra-margin">
                    <!-- YouTube Embed element -->
                    <div class="responsive-iframe">
                        <iframe src="https://www.youtube.com/embed/KlG4LaJnUZ0?si=FsqJo6kzFeyz6lgH"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="container gray  first-mode">
            <div class="txt h1 h2">
                <h3>Premiere Pro & After Effects</h3>
                <h1>Fra optagelser til færdig produktion</h1>
                <p>Har du lyst til at få større opmærksomhed omkring dit brand eller produkter,
                    så skal du stærkt overveje video content ind i dinne strategier.
                </p>
                <p>På de seneste år har jeg opånet stor erfaring inden for <strong>Premiere Pro og After
                        Effects</strong> programmerne som jeg bruger til at postredigereing af videoerne
                </p>
                <p class="concept-txt-two">Jeg kan sørge for det hele. Fra scenarie, til optagelser
                    og helt frem til <strong>færdig produktion</strong>, tilpasset de forskellige
                    <strong>platforme</strong>. <br> <br>
                    Man siger at <strong>et billede siger mere end 1000 ord</strong>, så tænk over hvilken magi der
                    ligger i <strong>video content</strong> og hvad det kan medføre for dig og din virksomhed

                </p>

            </div>
            <div class="img-box">
                <div class="gyldne-trekant">
                    <img data-aos="fade-up" data-aos-duration="1000" src="../../assets/Arash_Bagheri.webp"
                        width="100%" height="auto">
                </div>
            </div>
        </div>
        <div class="my-video-box">
            <div class="video-titel h1">
                <h1>Employer Branding Videos</h1>
                <b> Eksempler på videoer udarbejdet til VIKING's employer branding, tilpasset til sociale medier </b>
                <b> De fleste videooptagelser er filmet af mig med professionelt kameraudstyr, redigeret i Premiere Pro
                    og tilpasset til sociale medier gennem Storykit. </b>
            </div>
            <div class="youtube-music-videos">
                <div class="video-container extra-margin">
                    <!-- HTML video element -->
                    <video controls :poster="thumbnail">
                        <source src="../../assets/video/VIKING_Office_Theme_LinkedIn.mp4" type="video/mp4">
                        Din browser understøtter ikke video tagget.
                    </video>
                </div>
                <div class="video-container extra-margin">
                    <!-- HTML video element -->
                    <video controls :poster="thumbnail2">
                        <source src="../../assets/video/VIKING_Production_Theme_LinkedIn.mp4" type="video/mp4">
                        Din browser understøtter ikke video tagget.
                    </video>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import thumbnail from '@/assets/Thumbnail.png'
import thumbnail2 from '@/assets/Thumbnail2.png'
import { defineProps } from 'vue';

defineProps({
    dark: {},
});

</script>




<style lang="scss" scoped>
@import '../css/style.scss';








/* Video container styling */
.video-container {
    position: relative;
    max-width: 800px;
    width: 45%;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    overflow: hidden;
}

.responsive-iframe {
    position: relative;
    width: 75vw;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: auto;
}

.responsive-iframe iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

video{
  width: 100%;
  height: auto;
  display: block;
}

.kortfilm-container {
    .video-container {
        width: auto !important;
        max-width: 100% !important;
    }
}

.quality-note {
    text-align: center;
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
    margin-bottom: 0;
}


/* Skjulte kontroller, hvis du vil lave dine egne */
.video-controls {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.extra-margin {
    margin-bottom: 50px;
}

.txt {
    h1 {
        font-size: 50px !important;
    }
}

.img {
    position: relative;
    /* Gør det muligt for ::before at positionere sig relativt til .img */
    background-image: url('@/assets/Behdin/VideoBG.jpg') !important;
    background-size: cover;
    background-position: top;
    overflow: hidden;

    /* Overlay */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        /* Sort overlay med 50% gennemsigtighed */
        z-index: 1;
        /* Sørger for, at overlayet ligger over baggrunden */
    }

    h1 {
        margin-left: 0;
        position: relative;
        z-index: 2;
        text-align: center;
        font-size: 55px;
        padding: 20vw 0 0 0 !important;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

        b {
            color: #CC9F00;
            font-weight: bold;
            position: relative;
        }
    }
}


.dark-mode-cover-home {
    &::before {
        background-color: rgba(0, 0, 0, 0.5);
    }
}

.container {
    padding: 110px 12% 110px 15%;

    h1 {
        padding: 0 !important;
        text-align: left;
        margin-bottom: 30px;
    }

    .concept-txt-two {
        margin-top: 30px;
    }

    .img-box {
        width: 30vw;
    }


    .h1 {
        width: 40%;
        line-height: 51px;
    }
}

.my-video-box {
    padding: 70px 12% 0 12%;
    background: var(--primary-color);

    .video-titel {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            text-align: center;
        }

        b {
            text-align: center;
            color: var(--tertiary-color);
            margin-top: 25px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }

    .youtube-music-videos {
        display: flex;
        justify-content: space-between;
        padding-top: 50px;
    }

    .kortfilm-container {
        padding: 30px 0 20px 0 !important;
        display: flex;
        justify-content: center;
    }
}

@media only screen and (max-width: 1200px) {
    .youtube-music-videos {
        flex-direction: column;
        align-items: center;
    }

    .video-container {
        width: 60% !important;
    }
}

@media only screen and (max-width: 1120px) {
    .container {
        flex-direction: column !important;
        padding: 50px 8% 70px 8%;

        .img-box {
            display: flex;
            justify-content: flex-end;
        }

        .h1 {
            width: auto;
        }

        .img-box {
            width: 60vw;
        }

        .gyldne-trekant {
            width: auto !important;
        }
    }

    .video-container {
        width: 70% !important;
    }
}

@media only screen and (max-width: 940px) {
    .bg-img {
        h1 {
            padding-top: 30vw !important;
        }
    }

    .video-container {
        width: 80% !important;
    }

    .container {
        padding: 50px 5% 50px 5%;
    }

    .my-video-box {
        padding: 70px 5% 0 5% !important;
    }

    .my-video-box .kortfilm-container {
        padding: 50px 0 0 0 !important;
    }

    .container {
        .img-box {
            width: 80vw;
        }
    }
}

@media only screen and (max-width: 780px) {
    .gyldne-trekant {
        width: 80vw !important;
    }

    .video-container {
        width: 100% !important;
    }

    .img-box {
        justify-content: flex-end !important;
        width: 100% !important;
    }

    .txt {
        width: 87vw !important;
    }

    h1 {
        margin-bottom: 30px !important;
    }
}

@media only screen and (max-width: 666px) {
    .bg-img {
        h1 {
            padding-top: 40vw !important;
        }
    }

    .gyldne-trekant {
        width: 88vw !important;
    }

    b {
        font-size: 14px !important;
    }
}

@media only screen and (max-width: 500px) {
    .bg-img {
        h1 {
            padding-top: 50vw !important;
        }
    }

    h1 {
        padding: 0 !important;
    }

    b {
        font-size: 13px !important;
    }
}

@media only screen and (max-width: 420px) {
    .bg-img {
        h1 {
            padding-top: 60vw !important;
        }
    }

    .txt {
        width: 85vw !important;
    }
}
</style>