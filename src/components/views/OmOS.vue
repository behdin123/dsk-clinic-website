<template>
    <div class="ART WORKS">
        <div id="Art-works-dark-version-image" class="bg-img img" :class="[{ 'dark-mode-cover-home': dark }]">
            <div class="OmOsBannerDiv">
                <div class="Bannertxt">
                    <h1 data-aos="fade-right" data-aos-duration="3000">Mød Arash</h1>
                    <p>"Skønhed findes i alle mennesker, men hvis der er noget, du ønsker at forbedre eller justere for
                        at føle dig mere tilpas i dit udseende, står jeg klar til at hjælpe dig på en tryg og
                        professionel måde."</p>

                    <p>
                        Med mere end 20 års erfaring inden for kosmetiske behandlinger har Arash en dyb forståelse for,
                        hvordan skønhed kan styrke både selvtillid og velvære.
                        Hans filosofi bygger på en respektfuld og individuel tilgang,
                        hvor målet er at fremhæve din naturlige skønhed og hjælpe dig med at føle dig tilpas i din egen
                        hud.
                    </p>

                    <p>
                        Som klinikkens ansvarlige læge prioriterer Arash tryghed, æstetik og høj faglighed i alle
                        behandlinger.
                        Uanset om du ønsker en diskret forbedring eller en større forandring, kan du være sikker på at
                        være i erfarne hænder.
                    </p>
                </div>

                <div class="BannerPng">
                    <p>Klinikkens ansvarlige læge</p>
                    <p>Arash Bagheri</p>
                    <img src="../../assets/OmOsArash.webp" alt="">
                </div>
            </div>
            <!-- <div class="scroll-indicator">
                <span>Scroll ned</span>
                <div class="line"></div>
            </div> -->
        </div>


        <div class="container Multimediedesigner VIKING OmKlinik">
            <div class="VIKING-image">
                <img data-aos="fade-right" data-aos-duration="1000" data-aos-offset="400" class="first-img"
                    src="../../assets/Clinic_consultation_2.webp " width="100%" height="auto">
            </div>
            <div class="txt h1 h2 first-txt margin-left">
                <h3 data-aos="fade-up" data-aos-duration="1000">Vores klinikker</h3>
                <h1 data-aos="fade-up" data-aos-duration="1000">Om DK Skønhedsklinik</h1>

                <p data-aos="fade-up" data-aos-duration="1000">
                    <b>DK Skønhedsklinik</b> har klinikker i både <b>Vejle</b> og <b>Esbjerg</b>, hvor vi tilbyder professionelle kosmetiske behandlinger i trygge og moderne omgivelser.
                    Vores klinikker er indrettet med fokus på komfort og kvalitet, så du kan føle dig godt tilpas fra det øjeblik, du træder ind. Vi arbejder altid 
                    med højeste faglighed for at sikre de bedste resultater for vores kunder.
                    
                </p>


                <p>
                    Uanset om du ønsker en <b>Botox-behandling</b>, <b>filler</b>, <b>skinbooster</b> eller andre æstetiske forbedringer, er du i kyndige hænder hos vores specialuddannede behandlere.
                    Hos DK Skønhedsklinik er vores mission at hjælpe dig med at fremhæve din naturlige skønhed på en sikker og professionel måde. 
                </p>

                <p>
                    Vi tror på, at skønhed ikke handler om forandring, men om at fremhæve de træk, der gør dig unik.
                    Vores behandlinger er skræddersyet til den enkelte kunde, og vi lægger stor vægt på at skabe et <b>harmonisk</b> 
                    og <b>naturligt</b> udseende, der passer til din ansigtsform og dine ønsker.
                </p>

            </div>
        </div>




    </div>

</template>





<script setup>
import { defineProps } from 'vue';





defineProps({
    dark: {},
});

</script>


<style lang="scss" scoped>
@import '../css/style.scss';


.txt {
    h1{
        color: var(--quaternary-color) !important;
    }
}

 .bg-img {
    padding-left: 0 !important;
  }

@media only screen and (max-width: 620px) {
  #app .bg-img .BannerPng p {
    color: #000000 !important;
  }
}


.OmOsBannerDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 80px 15% 0 15%;
    div {
        width: 50%;

        h1 {
            width: 95%;
        }

        p:nth-child(3) {
            font-size: 22px !important;
            font-weight: lighter;
            margin-top: 80px;
        }

        p:nth-child(4) {
            font-size: 22px !important;
            font-weight: lighter;
        }
    }

    .Bannertxt{
        padding-left: 5%;
    }

    .BannerPng {
        width: 30vw;
        height: auto;
        z-index: 4;
        position: relative;

        p {
            position: absolute;
            color: #000 !important;
            left: 30px;
        }

        p:nth-child(2) {
            bottom: 10px;
            font-size: 40px !important;
        }

        p:first-child {
            font-size: 24px !important;
            bottom: 75px !important;
        }

        img {
            border-radius: 20px;
            height: auto;
            width: 100%;
        }
    }
}

.Multimediedesigner {
  max-height: 763px;
  .txt{
    width: 45% !important;
  }
}

.VIKING-image{
    position: relative;
    overflow: hidden;
    width: 50vw !important;
    border-radius: 10px;
    img{
        min-height: 100%;
        height: 100%;
        max-width: none;
        width: auto !important;
        position: relative;
    }
}



.bg-img p {
    z-index: 3;
    width: 60% !important;
    line-height: 1.3;
    text-shadow: none !important;
    font-size: 26px !important;
}

@media only screen and (max-width: 2150px) {
    .bg-img p {
        width: 75% !important;
    }
}

@media only screen and (max-width: 2000px) {
    .VIKING-image{
    img{
        left: -150px;
    }
}
}

@media only screen and (max-width: 1950px) {
    .OmOsBannerDiv {
        div {
            h1 {
                width: 95%;
            }

            p:nth-child(3) {
                font-size: 16px !important;
                font-weight: lighter;
                margin-top: 40px;
            }

            p:nth-child(4) {
                font-size: 16px !important;
                font-weight: lighter;
            }
        }
    }
}

@media only screen and (max-width: 1750px) {
    .bg-img p {
        width: 75% !important;
        font-size: 22px !important;
    }

    .OmOsBannerDiv {
        div {
            width: 50%;

            h1 {
                width: 95%;
            }

            p:nth-child(3) {
                font-size: 16px !important;
                font-weight: lighter;
                margin-top: 40px;
            }

            p:nth-child(4) {
                font-size: 16px !important;
                font-weight: lighter;
            }
        }

        .BannerPng {
            p:nth-child(2) {
                bottom: 0;
                font-size: 2.13rem !important;
            }

            p:first-child {
                font-size: 1.2rem !important;
                bottom: 60px !important;
            }
        }
    }
}



@media only screen and (max-width: 1480px) {
    .OmOsBannerDiv {
        padding: 130px 10% 0 12%;
    }

    .bg-img p {
        width: 90% !important;
    }

    .img h1 {
        padding: 0 0 0 0 !important;
    }
}

@media only screen and (max-width: 1380px) {
    .bg-img {
        height: 90vh !important;
    }
    .Multimediedesigner {
        max-height: unset !important;
    }
    .VIKING-image{
        overflow: unset;
        width: 70vw !important;
        img{
            left: 0 !important;
            width: 100% !important;
            height: auto !important;
        }
    }
}

@media only screen and (max-width: 1280px) {
    .bg-img {
        padding: 330px 0;
    }

    .OmOsBannerDiv {
        padding: 0 10% 0 10%;
        flex-direction: column-reverse;
        align-items: center;

        div {
            width: 60%;
        }

        .BannerPng {
            width: 50vw;
            margin-top: 80px;

            p:nth-child(2) {
                left: 20px;
                margin-bottom: 10px;
            }

            p:first-child {
                left: 20px;
                bottom: 30px !important;
            }
        }
    }

    .bg-img p {
        font-size: 18px !important;
    }
}

@media only screen and (max-width: 1120px) {
  .Multimediedesigner .txt {
    width: 90vw !important;
  }
  .VIKING-image {
    width: 85vw !important;
  }
  .OmKlinik {
    padding: 40px 5% 40px 5% !important;
  }
}

@media only screen and (max-width: 1000px) {
    .OmOsBannerDiv {
        padding: 10px 10% 0 10%;

        div {
            margin-top: 30px;
            width: 70%;
        }

        .BannerPng {
            width: 60vw !important;

            p:nth-child(2) {
                left: 20px;
                margin-bottom: 10px;
            }

            p:first-child {
                left: 20px;
                bottom: 30px !important;
            }
        }
    }
}

@media only screen and (max-width: 850px) {
    .bg-img {
        padding: 380px 0;
    }

    .OmOsBannerDiv {
        padding: 10px 0 0 0;

        div {
            margin-top: 30px;
            width: 77%;
        }

        .BannerPng {
            width: 80vw !important;
            margin-top: 1px;

            p:nth-child(2) {
                left: 20px;
                margin-bottom: 10px;
            }

            p:first-child {
                left: 20px;
                bottom: 30px !important;
            }
        }
    }

    .VIKING-image{
    position: relative;
    overflow: hidden;
    width: 85vw !important;
    max-height: 700px;
    height: 700px;
        img{
            min-height: 100%;
            height: 100% !important;
            max-height: 100% !important;
            max-width: none;
            width: auto !important;
            position: relative;
        }
    }
}

@media only screen and (max-width: 740px) {
    .VIKING-image{
        img{
            left: -150px !important;
        }
    }
}

@media only screen and (max-width: 550px) {
    .bg-img {
        padding: 270px 0;
    }

    .BannerPng {
        width: 90vw !important;
        margin-top: 50px !important;

        p:nth-child(2) {
            left: 20px;
            margin-bottom: 10px;
        }

        p:first-child {
            left: 20px;
            bottom: 30px !important;
        }
    }

    .VIKING-image{
        width: 90vw !important;
        img{
            left: -250px !important;
        }
    }
}

@media only screen and (max-width: 380px) {
    .OmOsBannerDiv {
        padding: 120px 0 0 0;

        div {
            width: 88%;
        }

        .BannerPng {
            width: 90vw !important;
        }
    }

    .VIKING-image{
        img{
            left: -350px !important;
        }
    }
}



.primary {
    background: var(--primary-color) !important;
}

.secondary {
    background: var(--secondary-color) !important;
}

.img p {
    color: #fff !important;
    font-size: 22px;
    padding: 0 !important;
}


.img {
    position: relative;
    /* Gør det muligt for ::before at positionere sig relativt til .img */
    background-image: url('@/assets/BannerBehandling.webp') !important;
    background-size: cover;
    background-position: center !important;
    overflow: hidden;
    display: flex;
    align-items: center;

    /* Overlay */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        /* Sort overlay med 50% gennemsigtighed */
        z-index: 1;
        /* Sørger for, at overlayet ligger over baggrunden */
    }

    h1 {
        margin-left: 0;
        position: relative;
        z-index: 2;
        font-size: 55px;
        padding: 1vw 0 0 0 !important;
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
        background-color: rgba(0, 0, 0, 0.5) !important;
    }

    h1 {
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }
}

@media only screen and (max-width: 1020px) {
    h1 {
        padding-left: 0 !important;
    }
}

.OmOsBannerDiv{
    h1 {
        color: #fff !important;
    }
}


</style>