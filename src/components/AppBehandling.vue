<template>
  <div id="Main" class="Min-concept">
    <div id="Art-works-dark-version-image" class="bg-img img" :class="{ 'dark-mode-cover-home': dark }">
      <div class="media_and_content">
        <div>
          <div class="media_wrap">
            <div class="video_padding"></div>
            <div class="img_wrap">
              <img width="1105" height="622" :src="imageSrc" :alt="title" loading="lazy">
            </div>
            <a href="#" class="go_down"></a>
          </div>
          <article class="content">
            <header>
              <h1>{{ title }}</h1>
            </header>
            <div class="entry_content_wrap">
              <div class="entry_content clear">
                <p>{{ description }}</p>
              </div>
            </div>
            <div class="options_prices">
              <ul class="options">
                <div>
                  <li class="heart_rate"><span class="label"> <img src="../assets/Behandlingstid.png" alt="">
                      Behandlingstid<span>:</span></span> {{ duration }}</li>
                  <li class="person_dolly"><span class="label"> <img src="../assets/Resultat.png"
                        alt="">Resultat<span>:</span></span> {{ result }}</li>
                  <li class="syringe"><span class="label"> <img src="../assets/Bedøvelse.png" alt="">
                      Bedøvelse<span>:</span></span> {{ anesthesia }}</li>
                </div>
                <div>
                  <li class="clipboard_list_check"><span class="label"> <img src="../assets/Holdbarhed.png"
                        alt="">Holdbarhed<span>: </span> </span> {{ durability }}</li>
                  <li class="alarm_clock"><span class="label"> <img src="../assets/Nedetid.png" alt=""> Nedetid /
                      Opheling<span>:</span> </span> {{ downtime }}</li>
                  <li class="people_arrows"><span class="label"> <img src="../assets/Konsultation.png" alt="">
                      Konsultation<span>:</span></span> {{ consultation }}</li>
                </div>
              </ul>
              <div class="prices">
                <div class="from_price" :style="{ width: (priceTextWordCount > 3 || priceTextWordCount === 0) ? '70%' : '33%' }">
                  <h6>{{ priceText }}</h6>
                  <div class="price"><span data-price="2500">{{ price }}</span> kr.</div>
                </div>
                <div class="from_price">
                  <h6>{{ priceText2 }}</h6>
                  <div class="price"><span data-price="2500">{{ price2 }}</span> {{ priceText2 ? 'kr.' : '' }}</div>
                </div>
                <div class="from_price">
                  <h6>{{ priceText3 }}</h6>
                  <div class="price"><span data-price="2500">{{ price3 }}</span> {{ priceText3 ? 'kr.' : '' }}</div>
                </div>
              </div>
            </div>
            <div class="buttons">
              <AppBooking />
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

import AppBooking from '../components/AppBooking.vue'; // Importer komponenten

const props = defineProps({
  dark: Boolean,
  title: String,
  imageSrc: String,
  description: String,
  duration: String,
  result: String,
  anesthesia: String,
  durability: String,
  downtime: String,
  consultation: String,
  price: String,
  priceText: {
    type: String,
    default: ''
  },
  price2: String,
  priceText2: String,
  price3: String,
  priceText3: String
})




const priceTextWordCount = computed(() => {
  const text = props.priceText?.trim()
  if (!text) return 0
  return text.split(/\s+/).length
})


</script>










<style lang="scss" scoped>
@import './css/style.scss';


@media only screen and (max-width: 840px) {
  .bg-img {
    padding-left: 0 !important;
  }
}

body {
  box-sizing: border-box;
}

#Main .bg-img {
  display: flex !important;
  align-items: center !important;

  p {
    color: #fff !important;
  }
}

#Main .bg-img h1 {
  font-size: 39px !important;
  color: #fff !important;
  padding-top: 0 !important;
  text-align: left;
}

.media_and_content .img_wrap {
  height: 100%;
  width: 44vw;
  overflow: hidden;

  img {
    min-height: 100%;
    max-width: none;
    width: auto;
    position: relative;
    left: 60%;
    transform: translateX(-50%);
  }
}

@media only screen and (max-width: 1650px) {
  #Main .bg-img {
    align-items: end !important;
  }
}

@media only screen and (max-width: 1380px) {
  .bg-img {
    height: 113vh !important;
  }
}

.bg-img p {
  font-size: 16px !important;
  width: auto !important;
  padding-left: 0 !important;
}

.media_and_content {
  position: absolute;
  width: 100%;
  margin-bottom: 100px;
  z-index: 3;

  background: #1d1d1daa;
}

.media_and_content>div {
  display: flex;
  position: relative;
}

.media_and_content>div>.media_wrap {
  width: 1105px;
  position: relative;
}

.media_and_content>div {
  max-width: 1783px;
  margin: 0 auto;
}

@media screen and (max-width: 1699px) {
  .media_and_content .content {
    width: 45%;
    padding-left: 50px;
    padding-right: 70px;
  }

  .media_and_content {
    margin-bottom: 0 !important;
  }

  .media_and_content>div>.media_wrap {
    width: 55%;
  }

  .media_and_content .img_wrap {
    width: 50vw;
  }
}


@media screen and (max-width: 1299px) {
  .media_and_content>div {
    display: flex;
    flex-direction: column;
  }

  .media_and_content>div>.media_wrap {
    width: auto;
  }

  .media_and_content .img_wrap {
    height: auto !important;
    width: 100vw;

    img {
      left: 0;
      transform: none;

      min-height: 100%;
      max-width: none;
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  .media_and_content .content {
    padding: 40px 40px 50px 40px !important;
    width: auto !important;
  }

  .content .options {
    border-top: none !important;
    padding-top: 0;
    margin-top: 8px;
    font-size: 12px;
    line-height: 1.4;
    flex-direction: column;
  }

  .options div {
    display: flex;
  }

  .entry_content p {
    width: 93% !important;
    font-size: 16px !important;
  }

  .content .options li {
    width: 33%;
    margin: 25px 0 0 1%;
    margin-top: 25px !important;
    padding: 21px 0 0 0 !important;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #4f4f4f;
  }

  .content .options li img {
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
  }

  .content .options li:nth-child(3n+3) {
    border-right: none;
  }


}


@media only screen and (max-width: 940px) {
  .bg-img::before {
    background: none;
  }

  .media_and_content .img_wrap {
    height: 100%;

    img {
      min-height: 100%;
      max-width: none;
      width: auto;
      height: 615px;
    }
  }

  .media_and_content {
    top: 0 !important;
  }
}

@media screen and (max-width: 639px) {
  .content .options_prices {
    display: flex;
    flex-direction: column-reverse;
  }

  .content .prices {
    border: none !important;
    margin: 26px 0 0 0 !important;
    padding-top: 0 !important;
    position: static !important;
    width: auto !important;
    text-align: left !important;
  }

  .content .buttons a {
    display: block !important;
    width: auto !important;
  }

  .buttons {
    flex-direction: column;
  }

  .content .buttons .general_button2 {
    margin: 8px 0 0 0 !important;
  }

  .content .options li {
    width: 100%;
  }

  .options div {
    flex-direction: column;
    width: 50%;
    margin-right: 0 !important;
  }

  .content .options {
    flex-direction: row;
  }

  .content .options .alarm_clock,
  .clipboard_list_check {
    border-right: none !important;
  }

  .syringe {
    border-right: 1px solid #4f4f4f !important;
  }

  .content .options {
    margin-top: 10px !important;
    padding-top: 6px !important;
  }

}



.media_and_content .content {
  padding: 40px 100px 50px;
  width: 678px;
  align-self: center;
}

.content .prices h6 {
  font-size: 11px;
  font-weight: bold;
  color: #fff !important;
  text-transform: uppercase;
  margin: 0 !important;
}

.entry_content {
  line-height: 1.6;
}

.Min-concept .media_and_content .entry_content_wrap,
.media_and_content .entry_content_wrap {
  margin-top: 14px;
}

.media_and_content .entry_content_wrap {
  margin-top: 28px;
  color: #fff !important;
  font-size: 14px;
  font-weight: 100;
}

.options {
  display: flex;

  div {
    margin-right: 20px;
  }
}

.content .options {
  border-top: 2px solid rgba(70, 70, 70, 0.5);
  margin-top: 24px;
  padding-top: 6px;
  font-size: 13px;
  overflow: hidden;
}

ul {
  list-style: none inside;
}

.content .options li {
  margin-top: 10px;
  position: relative;
  padding: 5px 0 5px 30px;
  color: #fff !important;
}

.content .options {
  font-size: 13px;
}

.content .prices {
  border-top: 2px solid rgba(70, 70, 70, 0.5);
  margin-top: 22px;
  padding-top: 37px;
  font-size: 14px;
  font-weight: 100;
  color: #edf2f7;
  overflow: hidden;
}

.content .prices .from_price {
  float: left;
  width: 33%;
}

.content .prices .price {
  font-size: 27px;
  font-weight: 900;
  line-height: 1.7;
  color: #fff;
}

.buttons {
  display: flex;
}

.options {
  padding-left: 0 !important;
}

.content .options li img {
  width: 18px;
  height: 18px;
  position: absolute;
  left: 0;
  top: 4px;
}

.content .buttons {
  margin-top: 35px;
}

.content .buttons a {
  width: 195px;
  line-height: 50px;
  font-size: 11px;
  font-weight: bold;
}

.buttons .general_button2 {
  margin-left: 17px;
  line-height: 48px;
}

.general_button2 {
  padding: 0 20px;
  color: #fff !important;
  text-transform: uppercase;
  text-align: center;
  background: none;
  border: 1px solid #fff;

}

.general_button,
.general_button2 {
  display: inline-block;
  line-height: 60px;
  text-decoration: none !important;
  white-space: nowrap;
}

input[type="submit"],
button[type="submit"],
.general_button {
  background: #3463C4;
  padding: 0 20px;
  color: #fff !important;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
}

.general_button:hover,
.general_button2:hover {
  text-decoration: none !important;
  opacity: .8;
}




.img {
  position: relative;
  /* Gør det muligt for ::before at positionere sig relativt til .img */
  background-image: url('@/assets/BannerBehandling.jpg') !important;
  background-size: cover;
  background-position: top;
  overflow: hidden;

  /* Overlay */
  &::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2) !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

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

.container {
  .txt {
    display: flex;
    align-items: center;

    p {
      width: 550px;
    }
  }
}


.line {
  width: 100% !important;
}

.txt {
  .p {
    width: 60% !important;
  }
}


.no-padding {
  padding-top: 20px !important;
}

@media only screen and (max-width: 1120px) {
  .container {
    margin-top: 50px;
    flex-direction: column;

    .txt {
      p {
        width: 100%;
      }
    }
  }

  .txt .p {
    width: 100% !important;
  }

  .txt-two {
    margin-bottom: 30px;
  }

}





@media only screen and (max-width: 940px) {
  .bg-img {
    h1 {
      padding-top: 30vw !important;
    }
  }

  .line {
    width: 100%;
  }

}

@media only screen and (max-width: 666px) {
  .bg-img {
    h1 {
      padding-top: 40vw !important;
    }
  }
}

@media only screen and (max-width: 500px) {

  .bg-img {
    background-position: left !important;

    h1 {
      padding-top: 50vw !important;
    }
  }

  .media_and_content .img_wrap img {
    left: 60%;
    transform: translateX(-50%);
  }

  .entry_content p {
    width: 100% !important;
    font-size: 14px !important;
  }

  #Main .bg-img h1 {
    font-size: 30px !important;
    padding-top: 0 !important;
  }

  .content .prices .price {
    font-size: 20px;
  }

  .bg-img {
    height: 145vh !important;
  }
}

@media only screen and (max-width: 420px) {
  .bg-img {
    h1 {
      padding-top: 60vw !important;
    }
  }

  .gylden-trekant-img {
    width: 100%;
  }
}

@media only screen and (max-width: 400px) {
  .bg-img {
    height: 160vh !important;
  }
}

@media only screen and (max-width: 378px) {
  .container {
    margin: 0 0 0 5%;
    width: 90%;
  }

  .line {
    width: 100%;
  }

}
</style>