import React from "react";
import "./Explainer.scss";

import explainerMP4 from "./vid/explainer.mp4";
import explainerWEBM from "./vid/explainer.webm";
import explainerOGG from "./vid/explainer.ogv";
import explainerPOSTER from "./vid/explainer.jpg";

const Explainer = () => {
  return (
    <div class="explainer">
      <h1 class="explainer-title">
        Warum sollte ich mich für Digital Partner entscheiden?
      </h1>

      <video
        poster={explainerPOSTER}
        class="explainer-video"
        controls
        preload="none"
      >
        <source src={explainerMP4} type="video/mp4" />
        <source src={explainerWEBM} type="video/webm" />
        <source src={explainerOGG} type="video/ogg" />
      </video>

      <a href="#kontakt" class="explainer-button">
        Kontakt
      </a>
    </div>
  );
};

export default Explainer;
