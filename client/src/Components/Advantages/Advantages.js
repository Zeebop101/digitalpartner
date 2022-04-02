import React from "react";
import "./Advantages.scss";

import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";

const Advantages = () => {
  return (
    <div id="vorteile" class="vorteile">
      <div class="vorteile-header">
        <h1 class="vorteile-header-schrift">Ihre Vorteile auf einen Blick</h1>
      </div>

      <div class="vorteile-inhalt">
        <div class="vorteile-container">
          <p class="vorteile-number">1</p>
          <div class="vorteile-box">
            <h2 class="vorteile-titel">Mitgliederbereich</h2>
            <p class="vorteile-text">
              Hier finden Sie alle wichtigen Infos rund um Ihre private
              Sammlung. Raffiniert in Szene gesetzt durch unsere einzigartigen
              digital Partner 3D Animationen. Mit unser Filterfunktion können
              Sie gezielt nach Werken suchen.
            </p>
          </div>
        </div>
        <div class="vorteile-container">
          <p class="vorteile-number">2</p>
          <div class="vorteile-box">
            <h2 class="vorteile-titel">Trete in Kontakt</h2>
            <p class="vorteile-text">
              Ihre persönliche Registrierungsnummer können Sie jederzeit mit
              Bekannten oder anderen Sammlern teilen und somit Menschen auf der
              ganzen Welt mit Ihrer Sammlung erreichen.
            </p>
          </div>
        </div>
        <div class="vorteile-container">
          <p class="vorteile-number">3</p>
          <div class="vorteile-box">
            <h2 class="vorteile-titel">Bildung & Wissen</h2>
            <p class="vorteile-text">
              Hier finden Sie alle wichtigen Infos rund um Ihre private
              Sammlung. Raffiniert in Szene gesetzt durch unsere einzigartigen
              digital Partner 3D Animationen. Mit unser Filterfunktion können
              Sie gezielt nach Werken suchen.
            </p>
          </div>
        </div>
      </div>

      <div class="vorteile-inhalt-desktop">
        <div class="container">
          <div class="cards">
            <div class="imgBx">
              <div>
                <img class="img-vorteile" src={icon1} />
                <h2>Persönlicher Mitgliederbereich</h2>
              </div>
            </div>
            <div class="overlay"></div>
            <div class="content">
              <h2>Persönlicher Mitgliederbereich</h2>
              <p>
                Hier finden Sie alle wichtigen Infos rund um Ihre private
                Sammlung. Raffiniert in Szene gesetzt durch unsere einzigartigen
                digital Partner 3D Animationen. Mit unser Filterfunktion können
                Sie gezielt nach Werken suchen.
              </p>
            </div>
          </div>

          <div class="cards">
            <div class="imgBx">
              <div>
                <img class="img-vorteile" src={icon2} />
                <h2>Kommen Sie in Kontakt mit anderen Liebhabern</h2>
              </div>
            </div>
            <div class="overlay"></div>
            <div class="content">
              <h2>Kommen Sie in Kontakt mit anderen Liebhabern</h2>
              <p>
                Ihre persönliche Registrierungsnummer können Sie jederzeit mit
                Bekannten oder anderen Sammlern teilen und somit Menschen auf
                der ganzen Welt mit Ihrer Sammlung erreichen.
              </p>
            </div>
          </div>

          <div class="cards">
            <div class="imgBx">
              <div>
                <img class="img-vorteile" src={icon3} />
                <h2>
                  Was gibt es Besseres, als Bildung & Wissen innerhalb der
                  Familie weiterzugeben!?
                </h2>
              </div>
            </div>
            <div class="overlay"></div>
            <div class="content">
              <h2>
                Was gibt es Besseres, als Bildung & Wissen innerhalb der Familie
                weiterzugeben!?
              </h2>
              <p>
                Bei uns bekommen Sie eine Übersicht Ihrer privaten Sammlung. Sie
                schaffen somit eine tolle Basis, um Ihre Werke im Familienkreis
                weiterzureichen. Gleichzeitig ist Transparenz für alle
                Familienmitglieder gewährleistet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
