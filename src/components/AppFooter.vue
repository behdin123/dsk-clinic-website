<template>
  <footer class="site-footer">
    <div class="footer">
      <!-- تیتر کوتاه و خط جداکننده -->
      <div class="footer-top">
        <h2 class="footer-heading">Friskhed og skønhed – din naturlige vej til selvtillid</h2>
        <div class="line"></div>
      </div>

      <!-- شبکه‌ی چهاربخشی -->
      <div class="footer-grid" role="navigation" aria-label="Footer navigation">

        <!-- Kontakt -->
        <section class="footer-section">
          <h3 class="footer-title">Kontakt os</h3>
          <ul class="footer-list">
            <li><a href="sms:+4553503750" aria-label="Send en SMS">SMS: +45 53 50 37 50</a></li>
            <li><a href="mailto:dr_arash_bagheri@yahoo.com" aria-label="Send en e-mail">Email:
                dr_arash_bagheri@yahoo.com</a></li>
            <li class="footer-socials" aria-label="Sociale medier">
              <p>Skriv til os dirkete på vores sociale medier</p>
              <div class="footer-socials-links">
                <a href="https://www.facebook.com/profile.php?id=100054595142567" target="_blank" rel="noopener noreferrer"
                  aria-label="Facebook">
                  <img class="icon" src="../assets/icons/Facebook_Logo_Primary.webp" width="24" height="24"
                    alt="Facebook">
                </a>
                <a href="https://www.instagram.com/dk_skonhedsklinik/" target="_blank" rel="noopener noreferrer"
                  aria-label="Instagram">
                  <img class="icon" src="../assets/icons/Instagram_Glyph_Gradient.webp" width="24" height="24"
                    alt="Instagram">
                </a>
              </div>
            </li>
          </ul>
        </section>

        <!-- Åbningstider -->
        <section class="footer-section">
          <h3 class="footer-title">Åbningstider</h3>
          <ul class="footer-list">
            <li>Man–Fre: 17:00 – 20:00</li>
            <li>Lør–Søn: 11:00 – 18:00</li>
          </ul>
        </section>

        <!-- Behandlinger -->
        <section class="footer-section">
          <h3 class="footer-title">Behandlinger</h3>
          <ul class="footer-list">
            <li><router-link :to="{ name: 'behandling-dynamic', params: { type: 'botox' } }">Botox</router-link></li>
            <li><router-link :to="{ name: 'behandling-dynamic', params: { type: 'filler' } }">Filler</router-link></li>
            <li><router-link
                :to="{ name: 'behandling-dynamic', params: { type: 'skinbooster' } }">Skinbooster</router-link></li>
            <li><router-link :to="{ name: 'behandling-dynamic', params: { type: 'prp' } }">PRP</router-link></li>
            <li><router-link
                :to="{ name: 'behandling-dynamic', params: { type: 'mesotherapy' } }">Mesotherapy</router-link></li>
            <li><router-link
                :to="{ name: 'behandling-dynamic', params: { type: 'microneedling' } }">Microneedling</router-link></li>
          </ul>
        </section>

        <!-- Adresser -->
        <section class="footer-section">
          <h3 class="footer-title">Adresser</h3>

          <address class="footer-list" itemscope itemtype="https://schema.org/PostalAddress">
            <a class="addr-link" href="https://maps.google.com/?q=Havnegade 6, 6700 Esbjerg" target="_blank"
              rel="noopener noreferrer" aria-label="Åbn på Google Maps: Havnegade 6, 6700 Esbjerg">
              <span itemprop="addressLocality">Esbjerg</span>
              <span class="postal" itemprop="postalCode">&nbsp;6700</span>
              &nbsp;—&nbsp;
              <span itemprop="streetAddress">Havnegade 6</span>
            </a>
            <meta itemprop="addressCountry" content="DK">
          </address>

          <address class="footer-list" itemscope itemtype="https://schema.org/PostalAddress">
            <a class="addr-link" href="https://maps.google.com/?q=Søndergade 50, 7100 Vejle" target="_blank"
              rel="noopener noreferrer" aria-label="Åbn på Google Maps: Søndergade 50, 7100 Vejle">
              <span itemprop="addressLocality">Vejle</span>
              <span class="postal" itemprop="postalCode">&nbsp;7100</span>
              &nbsp;—&nbsp;
              <span itemprop="streetAddress">Søndergade 50</span>
            </a>
            <meta itemprop="addressCountry" content="DK">
          </address>
        </section>

      </div>

      <!-- ردیف انتهایی -->
      <div class="footer-bottom">
        <p>© 2025 DK Skønhedsklinik — Designet af Behdin Bagheri. Alle rettigheder forbeholdes.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer .footer {
  background: #153655 !important;
  color: #fff;
  padding: 50px 8% 40px 8%;
}

/* Heading + divider */
.footer-top { margin-bottom: 24px; }
.footer-heading { margin: 0 0 16px; font-size: 28px; line-height: 1.3; }
.line { border: 0; height: 1px; background: rgba(255,255,255,.2); max-width: 720px; margin: 40px 0; }

/* Grid (4 cols → responsive) */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 32px;
  margin-top: 32px;
}

/* Section titles */
.footer-title { font-size: 18px; margin: 0 0 12px; }

/* Lists & links (shared) */
.footer-list { list-style: none; padding: 0; margin: 0; }
.footer-list li { margin: 10px 0; }
.footer-list a { color: #fff; text-decoration: none; opacity: .95; }
.footer-list a:hover { opacity: .7; text-decoration: underline; }

/* Socials */
.footer-socials { display: flex; flex-direction: column; gap: 12px; margin-top: 8px; }
.footer-socials .icon { display: block; width: 30px; height: 30px; transition: opacity .2s; }
.footer-socials .icon:hover { opacity: .7; }
.footer-socials p { margin: 0 !important; }
.footer-socials-links { display: flex; gap: 20px; }

/* Addresses */
.footer-section address.footer-list {
  display: block;
  margin: 10px 0;
  font-style: normal; /* neutralize <address> italic */
}
.footer-section address.footer-list + address.footer-list { margin-top: 12px; }
.footer-section .addr-link { display: inline-block; } /* whole line clickable */

/* Bottom row */
.footer-bottom { margin-top: 36px; font-size: 12px; opacity: .9; }

/* Responsive */
@media (max-width: 1100px) {
  .footer-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 640px) {
  .footer-heading { font-size: 26px !important; }
  .footer-grid { grid-template-columns: 1fr; gap: 20px; }
}
</style>
