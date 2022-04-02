import React from "react";
import "./Statistik.scss";

import statistik50 from "./img/50.png";
import statistik20 from "./img/20.png";
import statistik1000 from "./img/1000.png";
import line from "./img/line.png";

const Statistik = () => {
  return (
    <div class="statistik">
      <div class="statistik-border">
        <div class="statistik-container">
          <img src={statistik50} alt="" class="statistik-image" />
          <h2 class="statistik-titel">
            50% neue Digital Partner im letzten Quartal
          </h2>
          <p class="statistik-text">
            Durch Professionalität und Kundenorientierung konnten wir weitere
            zufriedene Nutzer gewinnen
          </p>
        </div>

        <img class="statistik-line" src={line} alt="" />

        <div class="statistik-container">
          <img src={statistik20} alt="" class="statistik-image" />
          <h2 class="statistik-titel">20 verschiedene Genres</h2>
          <p class="statistik-text">
            Mit Werken aus den Bereichen Literatur, Geographie, Religion oder
            Lyrik ist für jeden Interessenten die passende Inspiration dabei
          </p>
        </div>
        <img class="statistik-line" src="src/img/statistik/line.png" alt="" />
        <div class="statistik-container">
          <img src={statistik1000} alt="" class="statistik-image" />
          <h2 class="statistik-titel">1000 Sammlerstücke</h2>
          <p class="statistik-text">
            Bei digital Partner entdecken Sie die unterschiedlichsten Werke des
            letzten Jahrhundert. Von Renaissance über Barock bis hin zur Moderne
            finden Sie zahlreiche spannende Raritäten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistik;
