import React from "react";
import "./Form.scss";
import rectangle from "./img/rectangle.png";
import phone from "./img/phone.png";
import mail from "./img/mail.png";

const Form = () => {
  return (
    <div class="form">
      <div class="form-background"></div>

      <div class="form-contact">
        <div class="form-header">
          <h1 class="form-titel-1" id="contact">
            Nehmen Sie mit uns Kontakt auf!
          </h1>
          <h2 class="form-titel-2">Nehmen Sie mit uns</h2>
          <h2 class="form-titel-2">Kontakt auf!</h2>
          <h3 class="form-sub-titel">
            Unser hilfsbereites Team ist für Sie da.
          </h3>
          <img src={rectangle} alt="" />
        </div>

        <div class="form-contact-1">
          <img src={mail} alt="" />
          <h4 class="form-mail">info@ihr-digital-partner.de</h4>
        </div>

        <div class="form-contact-2">
          <img src={phone} alt="" />
          <h4 class="form-tel">+49 30 40817 2821</h4>
        </div>
      </div>

      <div class="form-container">
        <form action="" class="form-form" id="kontakt">
          <div class="form-group form-name">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control form-placeholder"
              id="name"
              name="name"
              tabindex="1"
              placeholder="Ihr Name"
              required
            />
          </div>

          <div class="form-group form-tel">
            <label for="tel" class="form-label">
              Telefon
            </label>
            <input
              type="text"
              class="form-control form-placeholder"
              id="tel"
              name="tel"
              tabindex="2"
              placeholder="Telefonnummer"
              required
            />
          </div>

          <div class="form-group form-email">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control form-placeholder"
              id="email"
              name="email"
              tabindex="2"
              placeholder="Ihre Email-Adresse"
              required
            />
          </div>

          <div class="form-group form-betreff">
            <label for="betreff" class="form-label">
              Betreff
            </label>
            <input
              type="betreff"
              class="form-control form-placeholder"
              id="betreff"
              name="betreff"
              tabindex="4"
              placeholder="Ihr Betreff"
              required
            />
          </div>

          <div class="form-group form-message">
            <label for="message" class="form-label form-label-message">
              Nachricht
            </label>
            <textarea
              class="form-message form-placeholder"
              name="message"
              id="message"
              name="message"
              placeholder="Wie können wir Ihnen helfen?"
              tabindex="5"
            ></textarea>
          </div>

          <div class="form-group form-checkbox">
            <input
              type="checkbox"
              class="form-control"
              id="checkbox"
              name="checkbox"
              tabindex="4"
              required
            />

            <label for="checkbox">
              Ja, ich bin damit einverstanden, dass meine Daten gemäß dieser{" "}
              <a href="#">Datenschutzerklärung</a> zum Zwecke der
              Kontaktaufnahme verarbeitet werden.
            </label>
          </div>
          <button class="form-button" type="submit" tabindex="6">
            SENDEN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
