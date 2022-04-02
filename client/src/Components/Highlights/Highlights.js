import React from "react";
import "./Highlights.scss";

const Highlights = () => {
  return (
    <div id="highlights" class="highlights">
      <div class="highlights-group">
        <div class="highlights-container-background">
          <p class="highlights-number">1</p>
          <div class="highlights-container highlights-1">
            <h3>Kunsthistorische Bücher für die Nachwelt</h3>
            <p>
              Das tollste an einer Sammelleidenschaft ist der Aspekt, dass man
              sie mit seinen Liebsten teilen kann. Genau dabei möchten wir Ihr
              digital Partner sein. Ihre gesammelten Werke werden bei uns
              sorgfältig erfasst, sodass der ideelle Wert über Generationen
              hinweg bestehen bleibt.
            </p>
          </div>
        </div>

        <span class="highlights-line"></span>

        <div class="highlights-container-background">
          <p class="highlights-number">2</p>
          <div class="highlights-container highlights-2">
            <h3>Ihre Sammlung im Blick</h3>

            <p>
              Büchersammlungen wachsen kontinuierlich. Da kann es schon einmal
              vorkommen, dass man den Überblick verliert. Eine
              Regisstererfassung hilft Ihnen dabei, Ihre über viele Jahre
              gesammelten Werke stets im Blick zu behalten.
            </p>
          </div>
        </div>
        <span class="highlights-line"></span>

        <div class="highlights-container-background">
          <p class="highlights-number">3</p>
          <div class="highlights-container highlights-3">
            <h3>Benutzerfreundliche Bedienung</h3>
            <p>
              Nach erfolgter Registrierung erhalten Sie Ihre persönliche
              16-stellige Registrierungsnummer. Mithilfe dieser Zugangsdaten
              können Bekannte, Familie oder andere Sammler durch Ihre Bibliothek
              stöbern und sich von Ihren Werken einen Eindruck verschaffen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
