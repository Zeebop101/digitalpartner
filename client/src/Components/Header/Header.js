import React from "react";
import "./Header.scss";
import logo from "./img/logo.svg";
import burger from "./img/burger.png";
import leftwave from "./img/left-wave.png";
import headerPoster from "./img/header_main.jpg";
import headerMP4 from "./img/header_main.mp4";
import headerWEBM from "./img/header_main.webm";
import headerOGG from "./img/header_main.ogv";
import imgBack from "./img/img-back.png";

const Header = () => {
  return (
    <div class="header">
      <div id="nav">
        <a id="nav-logo" href="http://www.ihr-digital-partner.de">
          <img
            src={logo}
            alt="Dies ist das Logo von unserem Smartphone Reparatur Unternehmen in Berlin Mitte, Phone Tastisch."
          />
        </a>

        <span id="nav-links">
          <a href="#bibiothekensuche">Bibliothekensuche</a>
          <a href="#about">Die Idee</a>
          <a href="#vorteile">Ihre Vorteile</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </span>

        {/* <!--mobile--> */}
        <div class="mobile">
          <label class="mobile__label" for="checkbox">
            <div class="mobile__label__content">
              <span class="label__line"></span>
              <span class="label__line"></span>
            </div>
            <div class="mobile__label__content">
              <span class="label__line"></span>
              <span class="label__line"></span>
            </div>
            <div class="mobile__label__content">
              <span class="label__line"></span>
              <span class="label__line"></span>
            </div>
          </label>
          {/* <!--mobile__label--> */}
          <input class="mobile__input" type="checkbox" id="checkbox" />
          <nav class="mobile__nav">
            <ul>
              <li class="nav__item">
                <a href="#bibiothekensuche">Bibiothekensuche</a>
              </li>
              <li class="nav__item">
                <a href="#about">Die Idee</a>
              </li>
              <li class="nav__item">
                <a href="#vorteile">Ihre Vorteile</a>
              </li>
              <li class="nav__item">
                <a href="#faq">FAQ</a>
              </li>
              <li class="nav__item">
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </nav>
          {/* <!--mobile__nav--> */}
        </div>

        {/* <!--mobile--> */}
      </div>

      {/* <!-- /// HEADER /// --> */}

      <img src={leftwave} alt="" class="header-image"></img>

      <div class="header-title">
        <div class="header-title-main">
          <h1>Digital Partner</h1>
        </div>

        <div class="header-title-sub">
          <p class="sub-1">unterstützt Sie beim:</p>

          <div class="header-points">
            <div class="header-points-single">
              {/* <!-- <div class="arrow-right"></div> --> */}
              <p>Erfassen</p>
            </div>

            <div class="header-points-single">
              {/* <!-- <div class="arrow-right"></div> --> */}
              <p>Verwalten</p>
            </div>

            <div class="header-points-single">
              {/* <!-- <div class="arrow-right"></div> --> */}
              <p>Präsentieren</p>
            </div>
          </div>

          <p class="sub-2">Ihrer privaten Sammlung</p>
        </div>
      </div>

      <div class="header-video">
        <video
          autoPlay="true"
          loop
          muted
          poster={headerPoster}
          id="background"
          class="over"
        >
          <source src={headerMP4} type="video/mp4"></source>
          <source src={headerWEBM} type="video/webm"></source>
          <source src={headerOGG} type="video/ogg"></source>
        </video>

        <img class="under" src={imgBack} alt=""></img>
      </div>
    </div>
  );
};

export default Header;
