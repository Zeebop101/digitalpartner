import React from "react";
import "./Idea.scss";

import question from "./img/question.png";
import hands from "./img/hands.png";

// function changeX(e) {
//   console.log("hello");
// }

const Idea = () => {
  return (
    <div class="idea">
      <div
        className="idea-idea"
        id="about"
        onMouseOver={MouseOver}
        onMouseLeave={MouseLeave}
      >
        <img src={question} />
        <h1>DIE IDEE</h1>

        <p class="text-animation">
          Wir haben diese Plattform geschaffen, um den Erhalt von Bildung und
          Wissen zu gewährleisten und um eine Brücke zwischen altertümlichen
          Kunstwerken und der modernen digitalen Welt zu schlagen. Manch einer
          mag meinen, dass alte Bücher und Digitalisierung so gar nicht
          zusammenpassen. Mit Digital Partner beweisen wir das Gegenteil. Als
          versierte Plattform für digitale Bibliotheken ermöglichen wir zum
          einen a) Ihre kunsthistorischen Raritäten über Ihre Wohnungstür hinaus
          einer interessierten Zielgruppe im weltweiten Netz zu präsentieren und
          zum anderen b) Liebhabern das Durchstöbern von antiken Stücken und
          bibliophilen Kostbarkeiten zu vereinfachen.
        </p>
      </div>

      <div
        class="idea-partner"
        onMouseOver={MouseOver02}
        onMouseLeave={MouseLeave02}
      >
        <img src={hands} alt="" />
        <h1>DIE PARTNERSCHAFT</h1>

        <p class="text-animation2">
          Wir unterstützen Sie dabei Ihre Sammlerstücke zu digitalisieren und
          fachgerecht zu präsentieren. Wir bringen Bücherliebhaber und Sammler
          aus der ganzen Welt zusammen und Sie haben die Möglichkeit dabei eine
          Inspiration für Andere zu sein. Und das in einem absoluten
          Nischenbereich!
        </p>
      </div>
    </div>
  );
};

function MouseOver(e) {
  document.querySelector(".idea-idea").style.animation =
    "IdeaAnimation 1s forwards";
  document.querySelector(".idea-partner").style.animation =
    "IdeaBack 1s forwards";
  document.querySelector(".text-animation").style.animation =
    "TextAnimation 1s forwards";
}

function MouseLeave(e) {
  document.querySelector(".idea-partner").style.animation =
    "IdeaRE 1s forwards";
  document.querySelector(".idea-idea").style.animation = "IdeaRE2 1s forwards";
  document.querySelector(".text-animation").style.animation =
    "TextAnimationBack 1s forwards";
}

function MouseOver02(e) {
  document.querySelector(".idea-partner").style.animation =
    "IdeaAnimation2 1s forwards";
  document.querySelector(".idea-idea").style.animation =
    "IdeaBack2 1s forwards";
  document.querySelector(".text-animation2").style.animation =
    "TextAnimation2 1.5s forwards";
}

function MouseLeave02(e) {
  document.querySelector(".idea-idea").style.animation = "IdeaREE 1s forwards";
  document.querySelector(".idea-partner").style.animation =
    "IdeaREE2 1s forwards";
  document.querySelector(".text-animation2").style.animation =
    "TextAnimationBack2 1s forwards";
}

export default Idea;
