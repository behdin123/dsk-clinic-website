<template>
    <footer>
        <div class="footer">
          <div>
            <h1>Friskhed og skønhed – din naturlige vej til selvtillid</h1>
            <div class="line"></div>
            <div class="kontakt">
                <h2>Kontakt os</h2>
                <b>Skriv direkte på Facebook-Insgragram eller send en SMS</b>
            </div>
          </div>
          <div class="footer-info">
            <div class="mail">
              <b>© 2025. Designet af Behdin Bagheri - Alle rettigheder forbeholdes</b>
            </div>
            <div class="social-medier">
              <b>Find os på de sociale medier:</b>
              <div class="footer-icon">
                <a href="https://www.facebook.com/profile.php?id=100054595142567" target="_blank"><img class="icon facebook" src="../assets/icons/Facebook_Logo_Primary.png" width="23px" height="23px" /></a>
                <a href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank"><img id="first-icon" class="icon" src="../assets/icons/Instagram_Glyph_Gradient.png" width="23px" height="23px"></a>
              </div>
            </div>
          </div>
      </div>
    </footer>
</template>

<style lang="scss" scoped>
    

    footer{
      h1, h2{
        font-size: 35px !important;
      }
    }

    .footer{
    background: #153655 !important;
    height: auto;
    padding: 50px 8% 40px 8%;
    color: #fff;
    .line{
        content: "";
        background: var(--titleBanner-color);
        height: 1px;
        margin-left: 0 !important;
    }
    .kontakt{
      h2{
        margin: 0 0 10px 0;
      }
      b{
        font-size: 13px;
      }
    }
    .footer-info{
      display: flex;
      margin-top: 50px;
      justify-content: space-between;
      .mail{
        b{
          font-size: 12px;
        }
      }
      .social-medier{
        display: flex;
        align-items: flex-end;
        a{
          display: flex;
          height: 33px;
          width: auto;
          img{
            width: 100%;
            max-width: 33px !important;
            max-height: 33px !important;
            height: auto;
          }
        }
        .footer-icon{
          display: flex;
          align-items: flex-end;
          height: 16px;
          margin-left: 20px;
          img{ padding: 0 8px;
          }
        }
      }
    }
    .icon:hover{
      opacity: 0.5;
    }
    .icon:visited{
    opacity: 0.5;
    }
    .icon:active{
    opacity: 0.5;
    }
  }


  @media only screen and (max-width: 1120px){
    .footer{
      h1{
        font-size: 30px;
        margin-bottom: 15px !important;
      }
    }
    .line{
        width: 90% !important;
    }
    .footer-info{
      flex-direction: column;
      height: 120px;
    }

    footer{
      h1, h2 {
      padding-left: 0 !important;
      }
      .line{
        margin-left: 0 !important;
      }
    }
  }

  @media only screen and (max-width: 700px){
    .footer-info{
      .mail{
        b:first-child{
          padding-bottom: 10px;
        }
      }
      .social-medier{
        display: flex;
        align-items: flex-start !important;
      }
    }
  }

  @media only screen and (max-width: 660px){
    .footer{
       h1{
        font-size: 25px;
        margin-bottom: 15px !important;
        padding: 0 0 0 0 !important;
      }
      h2{
        font-size: 20px;
      }
      b{
        font-size: 14px !important;
      }
      .kontakt[data-v-fdb56dc8] {
        margin-top: 30px;
      }
    }

    footer{
      h1, h2{
        font-size: 24px !important;
      }
    }

    .line {
      margin:
        20px auto;
      }
    

    .footer .footer-info .social-medier .footer-icon[data-v-fdb56dc8] {
      height: auto;
    }
    .social-medier{
      flex-direction: column;
      justify-content: space-between;
      margin-top: 30px;
      .footer-icon{
        margin-left: 0 !important;
        margin-top: 20px;
      }
      #first-icon{
        padding-left: 0;
      }
    }
  }

  @media only screen and (max-width: 378px){
    .footer{
      padding: 50px 10% !important;
      width: 80vw;
    }
  }
</style>