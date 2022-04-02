import React from "react";
import cross from "./img/cross.png";
import arrow from "./img/arrow.png";

import "./Faq.scss";

const Faq = () => {
  return (
    <div class="faq">
      <div class="faq-main">
        <h1 class="faq-titel" id="faq">
          FAQs
        </h1>

        <div class="faq-container dd">
          <div class="dd-a faq-frage">
            <img src={cross} alt="" class="faq-cross" />

            <p class="faq-frage-text">
              Wie werde ich digital Partner und welche Voraussetzungen gibt es
              dafür?
            </p>
          </div>

          <input class="faq-checkbox" type="checkbox" />
          <div class="dd-c faq-antwort">
            <p class="faq-antwort-text">
              Die guten Nachrichten: Alle Liebhaber von Kunst und Literatur sind
              bei uns an der richtigen Adresse und qualifizieren sich als
              digital Partner. Nachdem Sie erfolgreich mit uns in Kontakt
              getreten sind, erfolgt bei Ihnen zuhause eine Bestandsaufnahme der
              zu registrierenden Werke. Hier werden folgende Daten erfasst: Foto
              des Werkes Titel des Werkes Kaufpreis und -datum Physischer
              Zustand Gesamtanzahl der registrierten Werke Nachdem Ihre Werke
              durch eine Bestandsanalyse überprüft worden sind, erhalten Sie
              eine 16-stellige Registrierungssnummer. Unter dieser können Sie
              selbst oder auch andere Interessierte (siehe Menüpunkt “Bibliothek
              suchen”) Ihre Sammlung abrufen und mit unserer digital Partner 3D
              Animation bestaunen. Zudem erhalten alle registrierten Kunden
              einen Zugang zum internen Mitgliederbereich, in dem Sie Details
              Ihrer registrierten Werke wie beispielsweise Titel, Verlag oder
              Ausgaben einsehen können.
            </p>
            <div class="faq-antwort-arrow faq-arrow">
              <img class="faq-antwort-arrow-image" src={arrow} alt="" />
            </div>
          </div>
        </div>

        <div class="faq-container dd">
          <div class="dd-a faq-frage">
            <img src={cross} alt="" class="faq-cross" />
            <p class="faq-frage-text faq-frage-text-short">
              Warum sollte ich digital Partner werden?
            </p>
          </div>

          <input class="faq-checkbox" type="checkbox" />
          <div class="dd-c faq-antwort">
            <p class="faq-antwort-text">
              Wenn Sie kunsthistorisch wertvolle Bücher sammeln, gibt es zur
              Zeit wenige bis gar keine fachdienlichen Anlaufstellen, um sich zu
              vernetzen und die Werke anderer Liebhaber in Augenschein zu
              nehmen. Digital Partner bringt Buchliebhaber und Sammler aus dem
              deutschsprachigen Raum und der gesamten Welt zusammen. Dabei
              helfen wir Ihnen: • Eine detaillierte Übersicht über Ihre Werke zu
              schaffen. • Privatsammlungen leichter an Familienmitglieder
              weiterzugeben. • Ihre Werke durch Weitergabe Ihrer
              Registrierungsnummer leichter und attraktiver anderen Liebhabern
              oder Bekannten zu präsentieren.
            </p>
            <div class="faq-antwort-arrow faq-arrow">
              <img class="faq-antwort-arrow-image" src={arrow} alt="" />
            </div>
          </div>
        </div>

        <div class="faq-container dd">
          <div class="dd-a faq-frage">
            <img src={cross} alt="" class="faq-cross" />
            <p class="faq-frage-text">
              Kann ich als digital Partner die Bibliotheken Anderer sehen und
              können Andere meine Bibliothek einsehen?
            </p>
          </div>

          <input class="faq-checkbox" type="checkbox" />
          <div class="dd-c faq-antwort">
            <p class="faq-antwort-text">
              Sie können im Mitgliederbereich Ihre Bibliothek auf „geschlossen“
              stellen und Diskretion geniessen oder Ihre Bibliothek freigeben.
              Ist Ihre Sammlung freigegeben und somit öffentlich einsehbar,
              können auch andere Sammler sie durchstöbern. Beim Klicken auf
              einzelne Werke erscheint eine Übersicht aller freigegebenen
              Registrierungsnummern, die genau dasselbe Werk in ihrer Sammlung
              führen. So haben Sie die Möglichkeit sich stundenlang durch
              unterschiedlichste Kollektionen antiker Raritäten zu klicken.
            </p>
            <div class="faq-antwort-arrow faq-arrow">
              <img class="faq-antwort-arrow-image" src={arrow} alt="" />
            </div>
          </div>
        </div>

        <div class="faq-container dd">
          <div class="dd-a faq-frage">
            <img src={cross} alt="" class="faq-cross" />
            <p class="faq-frage-text">
              Kann ich auch Werke wie z.B. Faksimiles oder ganze Sammlungen an
              digital Register verkaufen?
            </p>
          </div>

          <input class="faq-checkbox" type="checkbox" />
          <div class="dd-c faq-antwort">
            <p class="faq-antwort-text">
              Nein – wir kaufen weder Werke an noch verkaufen wir Bücher. Unsere
              Idee ist es, Sammler aus der ganzen Welt zusammenzubringen, damit
              diese sich untereinander austauschen und inspirieren können. Wir
              verschreiben uns ganz der Konservierung von Wissen & Bildung sowie
              von Kunsthistorischem. Wir übernehmen keinerlei Verantwortung
              dafür, ob für einzelne Werke aus Ihrer Sammlung eine Nachfrage
              existiert. Wir entbinden uns ebenfalls von der Verpflichtung einer
              Feststellung des tatsächlichen Markt- oder Ankaufpreises einer
              Sammlung oder bestimmter Werke
            </p>
            <div class="faq-antwort-arrow faq-arrow">
              <img class="faq-antwort-arrow-image" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
